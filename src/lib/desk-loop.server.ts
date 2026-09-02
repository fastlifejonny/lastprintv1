import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const FLOOR_MC = 15_000;
const VOL_MC = 2_000_000;
const HIGH_MC = 5_000_000;
const MEGA_MC = 20_000_000;
const MIN_BUY = 150;
const MAX_POS = 13;
const VAULT = 600;
const TP = 0.2;
const SL = 0.1;
const FEE = 0.008;
const SOL = 200;

type Pos = {
  id: string;
  sym: string;
  mint: string;
  qty: number;
  avg: number;
  fee?: number;
  entryMc: number;
  liveMc: number;
  entrySrc: string;
  opened: string;
  feat?: { huntVol?: boolean };
};
type Trade = Record<string, unknown>;
type Coin = {
  mint?: string;
  symbol?: string;
  name?: string;
  usd_market_cap?: number;
  market_cap_usd?: number;
  last_trade_timestamp?: number;
  volume_24h?: number;
  virtual_sol_reserves?: number;
  complete?: boolean;
  is_banned?: boolean;
};

let running = false;
let lastTick = 0;
let lastFill = 0;
let lastErr = "";
let ticking = false;

function file() {
  return path.join(process.cwd(), "data", "desk.json");
}

function pumpUsd(c: Coin) {
  const n = +(c.usd_market_cap || c.market_cap_usd || 0);
  return n > 0 ? n : 0;
}
function tag(c: Coin) {
  return String(c.symbol || c.name || "").replace(/^\$/, "").toUpperCase() || "COIN";
}
function printMs(c: Coin) {
  let t = +(c.last_trade_timestamp || 0);
  if (!(t > 0)) return 0;
  if (t < 1e12) t *= 1000;
  return t;
}
function printing(c: Coin) {
  const t = printMs(c);
  return t > 0 && Date.now() - t < 15 * 60 * 1000;
}
function liqOk(c: Coin) {
  const vs = +(c.virtual_sol_reserves || 0);
  if (vs * SOL >= MIN_BUY * 4) return true;
  return pumpUsd(c) >= FLOOR_MC && printing(c);
}
function fits(c: Coin) {
  if (!c?.mint || c.is_banned) return false;
  const mc = pumpUsd(c);
  if (!(mc >= FLOOR_MC) || mc >= MEGA_MC) return false;
  if (mc >= HIGH_MC && !(+(c.volume_24h || 0) >= 150000 || printing(c))) return false;
  if (mc >= VOL_MC && mc < HIGH_MC && !(+(c.volume_24h || 0) >= 40000 || printing(c))) return false;
  return printing(c) && liqOk(c);
}

async function load(): Promise<Record<string, unknown> | null> {
  try {
    return JSON.parse(await readFile(file(), "utf8")) as Record<string, unknown>;
  } catch {
    return null;
  }
}

async function pumpCoins(): Promise<Coin[]> {
  const hdr = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    Accept: "application/json",
    Origin: "https://pump.fun",
    Referer: "https://pump.fun/",
  };
  const urls = [
    "https://frontend-api-v3.pump.fun/coins?offset=0&limit=48&sort=last_trade_timestamp&order=DESC&includeNsfw=false",
    "https://frontend-api-v3.pump.fun/coins/currently-live",
  ];
  const by: Record<string, Coin> = {};
  await Promise.all(
    urls.map(async (u) => {
      try {
        const ac = new AbortController();
        const t = setTimeout(() => ac.abort(), 8000);
        const r = await fetch(u, { headers: hdr, signal: ac.signal });
        clearTimeout(t);
        if (!r.ok) return;
        const d = await r.json();
        const list = Array.isArray(d) ? d : [];
        for (const c of list) {
          if (c && c.mint) by[c.mint] = Object.assign(by[c.mint] || {}, c);
        }
      } catch {
        /* tape miss */
      }
    }),
  );
  return Object.values(by);
}

function bookOf(snap: Record<string, unknown>) {
  return (snap.book || snap.bookBag || snap) as Record<string, unknown>;
}

function claw(book: Record<string, unknown>) {
  const trades = (book.trades || []) as Trade[];
  let n = 0;
  for (const t of trades) {
    if (t.side !== "sell" || t._clawed || t.ape) continue;
    const e = +(t.entryMc || 0);
    const x = +(t.exitMc || 0);
    const pnl = +(t.pnl || 0);
    if (!(e > 0) || !(x > 0) || pnl < 50) continue;
    if (x / e <= 3) continue;
    t._clawed = true;
    t.pnl = 0;
    t.why = String(t.why || "") + " · CLAWED " + (x / e).toFixed(1) + "x MC jump";
    n += pnl;
  }
  if (n > 0) {
    book.cash = Math.max(MIN_BUY, +(book.cash || 0) - n);
    book.realized = +(book.realized || 0) - n;
  }
}

function ratio(p: Pos) {
  if (!(p.entryMc > 0) || !(p.liveMc > 0) || !(p.avg > 0)) return 1;
  const r = p.liveMc / p.entryMc;
  if (!isFinite(r) || r <= 0) return 1;
  if (r > 2.5) {
    const age = Date.now() - new Date(p.opened || 0).getTime();
    if (age < 120000) return 1;
    if (r > 6) return 1;
  }
  return r;
}

function closePos(book: Record<string, unknown>, p: Pos, why: string) {
  const pos = (book.positions || []) as Pos[];
  const i = pos.findIndex((x) => x.id === p.id);
  if (i < 0) return;
  const r = ratio(p);
  const cost = Math.abs(p.qty) * p.avg;
  const proceeds = cost * r;
  const fee = proceeds * FEE;
  let pnl = cost * (r - 1) - (p.fee || 0) - fee;
  if (pnl < -cost) pnl = -cost;
  book.cash = +(book.cash || 0) + proceeds - fee;
  book.feesPaid = +(book.feesPaid || 0) + fee;
  book.sold = +(book.sold || 0) + 1;
  book.realized = +(book.realized || 0) + pnl;
  pos.splice(i, 1);
  book.positions = pos;
  const trades = (book.trades || []) as Trade[];
  trades.unshift({
    t: Date.now(),
    side: "sell",
    sym: p.sym,
    mint: p.mint,
    pnl,
    notional: proceeds,
    px: p.avg * r,
    entryMc: p.entryMc,
    exitMc: p.liveMc,
    mc: p.liveMc,
    why,
    kind: "close",
    src: "server",
  });
  book.trades = trades.slice(0, 300);
  const journal = (book.journal || []) as { who: string; text: string; kind: string; t: number }[];
  journal.unshift({
    who: "EXIT",
    text: "SERVER " + why + " $" + p.sym + " " + (pnl >= 0 ? "+" : "") + pnl.toFixed(2),
    kind: pnl >= 0 ? "ok" : "no",
    t: Date.now(),
  });
  book.journal = journal.slice(0, 80);
}

function openFill(book: Record<string, unknown>, c: Coin) {
  const pos = (book.positions || []) as Pos[];
  if (pos.length >= MAX_POS) return false;
  if (pos.some((p) => p.mint === c.mint)) return false;
  const mc = pumpUsd(c);
  if (!(mc > 0)) return false;
  const cash = +(book.cash || 0);
  if (cash - VAULT < MIN_BUY) return false;
  const notional = MIN_BUY;
  const fee = notional * FEE;
  const qty = (notional - fee) / 1;
  book.cash = cash - notional;
  book.feesPaid = +(book.feesPaid || 0) + fee;
  book.bought = +(book.bought || 0) + 1;
  const id = "LP-" + String(Date.now()).slice(-8);
  pos.unshift({
    id,
    sym: tag(c),
    mint: String(c.mint),
    qty,
    avg: 1,
    fee,
    entryMc: mc,
    liveMc: mc,
    entrySrc: "pump",
    opened: new Date().toISOString(),
    feat: { huntVol: true },
  });
  book.positions = pos;
  const trades = (book.trades || []) as Trade[];
  trades.unshift({
    t: Date.now(),
    side: "buy",
    sym: tag(c),
    mint: c.mint,
    pnl: 0,
    notional,
    px: 1,
    entryMc: mc,
    exitMc: mc,
    mc,
    why: "server fill · last print",
    kind: "fill",
    src: "server",
  });
  book.trades = trades.slice(0, 300);
  const journal = (book.journal || []) as { who: string; text: string; kind: string; t: number }[];
  journal.unshift({
    who: "SNIPER",
    text: "SERVER FILL $" + tag(c) + " $150 mc $" + Math.round(mc),
    kind: "ok",
    t: Date.now(),
  });
  book.journal = journal.slice(0, 80);
  lastFill = Date.now();
  return true;
}

async function tick() {
  if (ticking) return;
  ticking = true;
  try {
  lastTick = Date.now();
  const snap = (await load()) || {};
  const book = bookOf(snap);
  if (typeof book.cash !== "number") return;
  claw(book);
  const coins = await pumpCoins();
  const byMint: Record<string, Coin> = {};
  for (const c of coins) if (c.mint) byMint[c.mint] = c;

  let pos = (book.positions || []) as Pos[];
  for (const p of pos) {
    const c = byMint[p.mint];
    const mc = c ? pumpUsd(c) : 0;
    if (mc > 0) p.liveMc = mc;
  }

  for (const p of [...pos]) {
    const r = ratio(p);
    const age = Date.now() - new Date(p.opened || 0).getTime();
    if (r <= 1 - SL) closePos(book, p, "hard stop −10%");
    else if (r >= 1 + TP) closePos(book, p, "take_profit bank +" + (MIN_BUY * (r - 1)).toFixed(2));
    else if (age > 15 * 60 * 1000 && r < 1.1) closePos(book, p, "hunt bag 15m still flat");
  }

  pos = (book.positions || []) as Pos[];
  if (pos.length > MAX_POS) {
    const extra = pos
      .slice()
      .sort((a, b) => Math.abs(ratio(a) - 1) - Math.abs(ratio(b) - 1))
      .slice(MAX_POS);
    for (const p of extra) closePos(book, p, "book cap " + MAX_POS + " — extra flat bag");
  }

  pos = (book.positions || []) as Pos[];
  const busy = new Set(pos.map((p) => p.mint));
  const names = coins
    .filter((c) => fits(c) && c.mint && !busy.has(c.mint))
    .sort((a, b) => printMs(b) - printMs(a));
  if (pos.length < MAX_POS && +(book.cash || 0) - VAULT >= MIN_BUY && names[0]) {
    openFill(book, names[0]);
  }

  const savedAt = Date.now();
  const out = {
    ...snap,
    savedAt,
    serverAt: savedAt,
    loop: "server",
    book: { ...book, savedAt },
    bookBag: { ...book, savedAt },
  };
  await mkdir(path.dirname(file()), { recursive: true });
  await writeFile(file(), JSON.stringify(out), "utf8");
  } catch (e) {
    lastErr = String(e);
  } finally {
    ticking = false;
  }
}

export function deskLoopStatus() {
  return { running, lastTick, lastFill, err: lastErr, cap: MAX_POS, min: MIN_BUY };
}

export function ensureDeskLoop() {
  if (running) return;
  running = true;
  tick().catch((e) => {
    lastErr = String(e);
  });
  setInterval(() => {
    tick().catch((e) => {
      lastErr = String(e);
    });
  }, 4000);
}
