import { createFileRoute } from "@tanstack/react-router";
import { deskLoopStatus, ensureDeskLoop } from "@/lib/desk-loop.server";

const TIMEOUT = 8000;
const TIMEOUT_JUP = 20000;

const BROWSER: HeadersInit = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
  Accept: "application/json,text/plain,*/*",
};

async function getJson(url: string, init?: RequestInit, ms = TIMEOUT) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), ms);
  try {
    const res = await fetch(url, { ...init, signal: ac.signal });
    const text = await res.text();
    return { ok: res.ok, status: res.status, body: text };
  } finally {
    clearTimeout(t);
  }
}

function imgHostOk(host: string) {
  const h = host.toLowerCase();
  if (!h || h === "localhost" || h.endsWith(".local") || h.endsWith(".internal")) {
    return false;
  }
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(h)) return false;
  return (
    h === "ipfs.io" ||
    h === "cf-ipfs.com" ||
    h === "cloudflare-ipfs.com" ||
    h === "arweave.net" ||
    h === "gateway.irys.xyz" ||
    h === "pbs.twimg.com" ||
    h === "images.pump.fun" ||
    h === "gmgn.ai" ||
    h.endsWith(".mypinata.cloud") ||
    h.endsWith(".ipfs.io") ||
    h.endsWith(".myfilebase.com") ||
    h.endsWith(".nftstorage.link") ||
    h.endsWith(".pump.fun") ||
    h.endsWith(".axiom-cdn.io") ||
    h.endsWith(".imagedelivery.net")
  );
}

function rewriteImgUrl(raw: string): URL | null {
  try {
    const u = new URL(raw);
    const m = u.pathname.match(/\/ipfs\/([A-Za-z0-9]+)/);
    if (m) return new URL("https://pump.mypinata.cloud/ipfs/" + m[1]);
    return u;
  } catch {
    return null;
  }
}

function emptyImg() {
  return new Response(
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"/>',
    { status: 200, headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=60" } },
  );
}

function passthrough(body: string) {
  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

function deskScore(snap: unknown): number {
  if (!snap || typeof snap !== "object") return -1;
  const s = snap as {
    empty?: boolean;
    bookBag?: Record<string, unknown>;
    book?: Record<string, unknown>;
    brain?: Record<string, unknown>;
  };
  if (s.empty) return -1;
  const bag = (s.bookBag || s.book || {}) as {
    bought?: number;
    sold?: number;
    positions?: unknown[];
    realized?: number;
  };
  const br = (s.brain || {}) as {
    funnel?: Record<string, number>;
    seen?: number;
    win?: number;
    memory?: object;
    creators?: object;
    lessons?: unknown[];
  };
  const f = br.funnel || {};
  return (
    (bag.bought || 0) * 300 +
    (bag.sold || 0) * 300 +
    ((bag.positions || []).length) * 120 +
    (f.filled || 0) * 200 +
    (f.confirmed || 0) * 20 +
    (f.cleared || 0) * 8 +
    (f.scanned || 0) +
    (br.seen || 0) +
    (br.win || 0) * 50 +
    Math.round(Math.abs(+(bag.realized || 0)) * 20) +
    Object.keys(br.memory || {}).length +
    Object.keys(br.creators || {}).length * 3 +
    (br.lessons || []).length
  );
}

export const Route = createFileRoute("/api/tape")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const src = new URL(request.url).searchParams.get("src") || "";
        try {
          ensureDeskLoop();
          if (src === "loop") {
            return Response.json(deskLoopStatus());
          }
          if (src === "hl-mids") {
            const r = await getJson("https://api.hyperliquid.xyz/info", {
              method: "POST",
              headers: { "Content-Type": "application/json", ...BROWSER },
              body: JSON.stringify({ type: "allMids" }),
            });
            if (!r.ok) return Response.json({});
            return passthrough(r.body);
          }
          if (src === "hl-ctx") {
            const r = await getJson("https://api.hyperliquid.xyz/info", {
              method: "POST",
              headers: { "Content-Type": "application/json", ...BROWSER },
              body: JSON.stringify({ type: "metaAndAssetCtxs" }),
            });
            if (!r.ok) return Response.json([]);
            return passthrough(r.body);
          }
          if (src === "binance") {
            for (const host of [
              "https://api.binance.com/api/v3/ticker/price",
              "https://api.binance.us/api/v3/ticker/price",
            ]) {
              const r = await getJson(host, { headers: BROWSER });
              if (r.ok) {
                return new Response(r.body, {
                  status: 200,
                  headers: {
                    "Content-Type": "application/json",
                    "X-Tape-Host": host.includes(".us") ? "us" : "com",
                  },
                });
              }
            }
            return Response.json([]);
          }
          if (src === "yahoo") {
            const sym = new URL(request.url).searchParams.get("sym") || "TSLA";
            if (!/^[A-Za-z0-9%^._-]{1,20}$/.test(sym)) {
              return Response.json({ chart: { result: [] } });
            }
            for (const host of [
              "https://query1.finance.yahoo.com/v8/finance/chart/",
              "https://query2.finance.yahoo.com/v8/finance/chart/",
            ]) {
              const r = await getJson(
                host + encodeURIComponent(sym) + "?interval=1m&range=1d",
                { headers: BROWSER },
              );
              if (r.ok && r.body.includes("regularMarketPrice")) return passthrough(r.body);
            }
            return Response.json({ chart: { result: [] } });
          }
          if (src === "pump") {
            const r = await getJson(
              "https://frontend-api-v3.pump.fun/coins?offset=0&limit=20&sort=created_timestamp&order=DESC&includeNsfw=false",
              {
                headers: {
                  ...BROWSER,
                  Origin: "https://pump.fun",
                  Referer: "https://pump.fun/",
                },
              },
            );
            if (!r.ok) return Response.json([]);
            return passthrough(r.body);
          }
          if (src === "pump-hot") {
            const r = await getJson(
              "https://frontend-api-v3.pump.fun/coins?offset=0&limit=48&sort=last_trade_timestamp&order=DESC&includeNsfw=false",
              {
                headers: {
                  ...BROWSER,
                  Origin: "https://pump.fun",
                  Referer: "https://pump.fun/",
                },
              },
            );
            if (!r.ok) return Response.json([]);
            return passthrough(r.body);
          }
          if (src === "pump-mcap") {
            const r = await getJson(
              "https://frontend-api-v3.pump.fun/coins?offset=0&limit=48&sort=market_cap&order=DESC&includeNsfw=false",
              {
                headers: {
                  ...BROWSER,
                  Origin: "https://pump.fun",
                  Referer: "https://pump.fun/",
                },
              },
            );
            if (!r.ok) return Response.json([]);
            return passthrough(r.body);
          }
          if (src === "pump-live") {
            const r = await getJson(
              "https://frontend-api-v3.pump.fun/coins/currently-live",
              {
                headers: {
                  ...BROWSER,
                  Origin: "https://pump.fun",
                  Referer: "https://pump.fun/",
                },
              },
            );
            if (!r.ok) return Response.json([]);
            try {
              const d = JSON.parse(r.body);
              return Response.json(Array.isArray(d) ? d.slice(0, 48) : []);
            } catch {
              return Response.json([]);
            }
          }
          if (src === "pump-bonded") {
            const r = await getJson(
              "https://frontend-api-v3.pump.fun/coins?offset=0&limit=48&sort=last_trade_timestamp&order=DESC&includeNsfw=false&complete=true",
              {
                headers: {
                  ...BROWSER,
                  Origin: "https://pump.fun",
                  Referer: "https://pump.fun/",
                },
              },
            );
            if (!r.ok) return Response.json([]);
            return passthrough(r.body);
          }
          if (src === "pump-vol") {
            const hdr = {
              headers: {
                ...BROWSER,
                Origin: "https://pump.fun",
                Referer: "https://pump.fun/",
              },
            };
            const [hot, bonded, live] = await Promise.all([
              getJson(
                "https://frontend-api-v3.pump.fun/coins?offset=0&limit=48&sort=last_trade_timestamp&order=DESC&includeNsfw=false",
                hdr,
              ),
              getJson(
                "https://frontend-api-v3.pump.fun/coins?offset=0&limit=48&sort=last_trade_timestamp&order=DESC&includeNsfw=false&complete=true",
                hdr,
              ),
              getJson("https://frontend-api-v3.pump.fun/coins/currently-live", hdr),
            ]);
            const by: Record<string, Record<string, unknown>> = {};
            const eat = (raw: string) => {
              try {
                const d = JSON.parse(raw);
                const list = Array.isArray(d) ? d : [];
                for (const c of list) {
                  if (!c || typeof c !== "object") continue;
                  const mint = String((c as { mint?: string }).mint || "");
                  if (!mint) continue;
                  by[mint] = { ...(by[mint] || {}), ...(c as Record<string, unknown>) };
                }
              } catch {
                /* skip */
              }
            };
            if (hot.ok) eat(hot.body);
            if (bonded.ok) eat(bonded.body);
            if (live.ok) eat(live.body);
            const now = Date.now();
            const ranked = Object.values(by)
              .map((c) => {
                const last = +(c.last_trade_timestamp || 0);
                const recency = last > 0 ? Math.max(0, 1 - (now - last) / 3.6e6) : 0;
                const sol = +(c.virtual_sol_reserves || 0) / 1e9;
                const liveN = +(c.num_participants || 0);
                const replies = Math.min(+(c.reply_count || 0), 4000);
                const score =
                  recency * 80 +
                  sol * 2.2 +
                  liveN * 90 +
                  replies * 0.04 +
                  (c.is_currently_live ? 40 : 0);
                return { ...c, _vol: score };
              })
              .sort((a, b) => +(b._vol || 0) - +(a._vol || 0))
              .slice(0, 48);
            return Response.json(ranked);
          }
          if (src === "img") {
            const raw = new URL(request.url).searchParams.get("u") || "";
            const parsed = rewriteImgUrl(raw);
            if (!parsed || parsed.protocol !== "https:" || !imgHostOk(parsed.hostname)) {
              return emptyImg();
            }
            const ac = new AbortController();
            const t = setTimeout(() => ac.abort(), 5000);
            try {
              const r = await fetch(parsed.toString(), {
                headers: {
                  "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
                  Accept: "image/avif,image/webp,image/*,*/*;q=0.8",
                },
                signal: ac.signal,
              });
              if (!r.ok) return emptyImg();
              const ct = (r.headers.get("content-type") || "").split(";")[0].trim();
              if (!ct.startsWith("image/")) return emptyImg();
              const buf = await r.arrayBuffer();
              if (buf.byteLength > 1_500_000) return emptyImg();
              return new Response(buf, {
                status: 200,
                headers: {
                  "Content-Type": ct,
                  "Cache-Control": "public, max-age=300",
                },
              });
            } catch {
              return emptyImg();
            } finally {
              clearTimeout(t);
            }
          }
          if (src === "pump-trades") {
            const mint = new URL(request.url).searchParams.get("mint") || "";
            if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(mint)) {
              return Response.json({ trades: [] });
            }
            const r = await getJson(
              "https://swap-api.pump.fun/v2/coins/" +
                encodeURIComponent(mint) +
                "/trades?limit=50",
              {
                headers: {
                  ...BROWSER,
                  Origin: "https://pump.fun",
                  Referer: "https://pump.fun/",
                },
              },
            );
            if (!r.ok) return Response.json({ trades: [] });
            return passthrough(r.body);
          }
          if (src === "pump-holders") {
            const mint = new URL(request.url).searchParams.get("mint") || "";
            if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(mint)) {
              return Response.json([]);
            }
            const r = await getJson(
              "https://frontend-api-v3.pump.fun/coins/" +
                encodeURIComponent(mint) +
                "/holders?limit=50&offset=0",
              {
                headers: {
                  ...BROWSER,
                  Origin: "https://pump.fun",
                  Referer: "https://pump.fun/",
                },
              },
            );
            if (!r.ok) return Response.json([]);
            return passthrough(r.body);
          }
          if (src === "pump-coin") {
            const mint = new URL(request.url).searchParams.get("mint") || "";
            if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(mint)) {
              return Response.json({});
            }
            const r = await getJson(
              "https://frontend-api-v3.pump.fun/coins/" + encodeURIComponent(mint),
              {
                headers: {
                  ...BROWSER,
                  Origin: "https://pump.fun",
                  Referer: "https://pump.fun/",
                },
              },
            );
            if (!r.ok) return Response.json({});
            return passthrough(r.body);
          }
          if (src === "dex-search") {
            const q = new URL(request.url).searchParams.get("q") || "pumpfun";
            if (!/^[A-Za-z0-9 _-]{1,40}$/.test(q)) {
              return Response.json({ pairs: [] });
            }
            const r = await getJson(
              "https://api.dexscreener.com/latest/dex/search?q=" + encodeURIComponent(q),
              { headers: BROWSER },
            );
            if (!r.ok) return Response.json({ pairs: [] });
            return passthrough(r.body);
          }
          if (src === "dex-vol") {
            const qs = ["SOL", "pump", "pumpfun"];
            const hits = await Promise.all(
              qs.map((q) =>
                getJson(
                  "https://api.dexscreener.com/latest/dex/search?q=" + encodeURIComponent(q),
                  { headers: BROWSER },
                ),
              ),
            );
            const by: Record<string, Record<string, unknown>> = {};
            for (const hit of hits) {
              if (!hit.ok) continue;
              try {
                const j = JSON.parse(hit.body) as { pairs?: Record<string, unknown>[] };
                for (const p of j.pairs || []) {
                  if ((p as { chainId?: string }).chainId !== "solana") continue;
                  const b = (p.baseToken || {}) as { address?: string };
                  const key = String(b.address || p.pairAddress || "");
                  if (!key) continue;
                  const vol = p.volume as { h1?: number; h24?: number } | undefined;
                  const score = Math.max(+(vol?.h24 || 0), +(vol?.h1 || 0) * 10);
                  const prev = by[key] as { _vol?: number } | undefined;
                  if (!prev || score > (prev._vol || 0)) by[key] = { ...p, _vol: score };
                }
              } catch {
                /* skip bad page */
              }
            }
            const pairs = Object.values(by)
              .sort((a, b) => +(b._vol || 0) - +(a._vol || 0))
              .slice(0, 40);
            return Response.json({ pairs });
          }
          if (src === "dex-boosts") {
            const r = await getJson("https://api.dexscreener.com/token-boosts/top/v1", {
              headers: BROWSER,
            });
            if (!r.ok) return Response.json([]);
            return passthrough(r.body);
          }
          if (src === "dex-token") {
            const mint = new URL(request.url).searchParams.get("mint") || "";
            if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(mint)) {
              return Response.json({ pairs: [] });
            }
            const r = await getJson(
              "https://api.dexscreener.com/latest/dex/tokens/" + encodeURIComponent(mint),
              { headers: BROWSER },
            );
            if (!r.ok) return Response.json({ pairs: [] });
            return passthrough(r.body);
          }
          if (src === "x-follow") {
            const u = (new URL(request.url).searchParams.get("u") || "").replace(/^@/, "");
            if (!/^[A-Za-z0-9_]{1,15}$/.test(u)) return Response.json([]);
            const r = await getJson(
              "https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=" +
                encodeURIComponent(u),
              {
                headers: {
                  ...BROWSER,
                  Accept: "application/json",
                  Referer: "https://platform.twitter.com/",
                },
              },
            );
            if (!r.ok) return Response.json([]);
            return passthrough(r.body);
          }
          if (src === "jup-quote") {
            const mint = new URL(request.url).searchParams.get("mint") || "";
            const side = (new URL(request.url).searchParams.get("side") || "buy").toLowerCase();
            const amount = new URL(request.url).searchParams.get("amount") || "";
            const slip = new URL(request.url).searchParams.get("slip") || "100";
            if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(mint)) {
              return Response.json({ error: "bad mint" }, { status: 400 });
            }
            if (!/^\d{1,18}$/.test(amount) || !/^\d{1,4}$/.test(slip)) {
              return Response.json({ error: "bad amount" }, { status: 400 });
            }
            const wsol = "So11111111111111111111111111111111111111112";
            const inputMint = side === "sell" ? mint : wsol;
            const outputMint = side === "sell" ? wsol : mint;
            const q =
              "https://quote-api.jup.ag/v6/quote?inputMint=" +
              encodeURIComponent(inputMint) +
              "&outputMint=" +
              encodeURIComponent(outputMint) +
              "&amount=" +
              encodeURIComponent(amount) +
              "&slippageBps=" +
              encodeURIComponent(slip) +
              "&restrictIntermediateTokens=true";
            const r = await getJson(q, { headers: BROWSER }, TIMEOUT_JUP);
            if (!r.ok) return Response.json({ error: "no route", detail: r.body.slice(0, 200) }, { status: 502 });
            return passthrough(r.body);
          }
          if (src === "desk") {
            try {
              const fs = await import("node:fs/promises");
              const path = await import("node:path");
              const file = path.join(process.cwd(), "data", "desk.json");
              const raw = await fs.readFile(file, "utf8");
              return passthrough(raw);
            } catch {
              return Response.json({ savedAt: 0, empty: true });
            }
          }
          return Response.json({ error: "unknown src" });
        } catch {
          return Response.json({});
        }
      },
      POST: async ({ request }) => {
        const src = new URL(request.url).searchParams.get("src") || "";
        if (src === "jup-swap") {
          let body: { quoteResponse?: unknown; userPublicKey?: string } = {};
          try {
            body = (await request.json()) as typeof body;
          } catch {
            return Response.json({ error: "bad json" }, { status: 400 });
          }
          const pk = String(body.userPublicKey || "");
          if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(pk) || !body.quoteResponse) {
            return Response.json({ error: "need quote + pubkey" }, { status: 400 });
          }
          const r = await getJson("https://quote-api.jup.ag/v6/swap", {
            method: "POST",
            headers: { ...BROWSER, "Content-Type": "application/json" },
            body: JSON.stringify({
              quoteResponse: body.quoteResponse,
              userPublicKey: pk,
              wrapAndUnwrapSol: true,
              dynamicComputeUnitLimit: true,
              prioritizationFeeLamports: "auto",
            }),
          }, TIMEOUT_JUP);
          if (!r.ok) return Response.json({ error: "swap build failed", detail: r.body.slice(0, 240) }, { status: 502 });
          return passthrough(r.body);
        }
        if (src !== "desk") return Response.json({ ok: false }, { status: 404 });
        const text = await request.text();
        if (!text || text.length > 1_800_000) {
          return Response.json({ ok: false, err: "too large" }, { status: 413 });
        }
        let incoming: unknown;
        try {
          incoming = JSON.parse(text);
        } catch {
          return Response.json({ ok: false, err: "bad json" }, { status: 400 });
        }
        try {
          const fs = await import("node:fs/promises");
          const path = await import("node:path");
          const file = path.join(process.cwd(), "data", "desk.json");
          await fs.mkdir(path.dirname(file), { recursive: true });
          try {
            const prev = JSON.parse(await fs.readFile(file, "utf8")) as Record<string, unknown>;
            const inc = incoming as Record<string, unknown>;
            if (prev.loop === "server" && inc.loop !== "server") {
              const bag = (inc.bookBag || inc.book || {}) as Record<string, unknown>;
              const pb = (prev.book || prev.bookBag || {}) as Record<string, unknown>;
              if (bag.cfg && typeof bag.cfg === "object") {
                pb.cfg = { ...((pb.cfg as object) || {}), ...(bag.cfg as object) };
              }
              if (bag.wallet && typeof bag.wallet === "object") pb.wallet = bag.wallet;
              prev.book = pb;
              prev.bookBag = pb;
              await fs.writeFile(file, JSON.stringify(prev), "utf8");
              return Response.json({ ok: true, server: true });
            }
            if (deskScore(incoming) < deskScore(prev)) {
              return Response.json({ ok: true, kept: true });
            }
          } catch {
            /* no existing desk */
          }
          await fs.writeFile(file, text, "utf8");
        } catch {
          /* client still has localStorage */
        }
        return Response.json({ ok: true });
      },
    },
  },
});
