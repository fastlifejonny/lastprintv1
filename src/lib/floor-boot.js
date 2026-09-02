// @ts-nocheck
/* LASTPRINT paper pit boot — imported as a module, never inline. */
export function stopFloor() {
  const w = window;
  w.__gsKill = true;
  w.__gsInnerBoot = false;
  (w.__gsTimers || []).forEach((id) => {
    try { clearInterval(id); } catch (_) {}
    try { clearTimeout(id); } catch (_) {}
  });
  w.__gsTimers = [];
  try { if (w.__gsFlushNow) w.__gsFlushNow(); } catch (_) {}
}

export function bootFloor() {
  const w = window;
  if (w.__gsInnerBoot && document.getElementById("app") && !w.__gsKill && !w.__gsForceBoot) return;
  try { if (w.__gsClean) w.__gsClean(); } catch (_) {}
  w.__gsKill = false;
  w.__gsForceBoot = false;
  w.__gsTimers = [];
  w.__gsClean = stopFloor;
  w.__gsErr = null;
  w.__gsInnerBoot = true;
  try {
    bootFloorInner();
    w.__gsBooted = true;
    w.__gsBootAt = Date.now();
  } catch (e) {
    w.__gsErr = String(e && e.stack || e);
    w.__gsInnerBoot = false;
    console.error(e);
  }
}

function bootFloorInner() {

const FLOOR_AGENTS = [
  {id:"CHIEF",color:"#d4af37",hair:"#1a120c",body:"#2a2a32",role:"routes"},
  {id:"TAPE",color:"#3dff8a",hair:"#2a2010",body:"#1c3a28",role:"prints"},
  {id:"VERIFY",color:"#6ad",hair:"#111",body:"#1a2838",role:"kills lies"},
  {id:"QUANT",color:"#c8f",hair:"#2a1020",body:"#321848",role:"models"},
  {id:"MACRO",color:"#f6c26b",hair:"#3a2010",body:"#3a2a10",role:"session"},
  {id:"RISK",color:"#ff5b6e",hair:"#1a0808",body:"#3a1518",role:"veto"},
  {id:"FLOW",color:"#5ee",hair:"#082028",body:"#103038",role:"sweeps"},
  {id:"ARCHIVE",color:"#bbb",hair:"#333",body:"#2a2a2a",role:"journal"}
];
const ALPHA_AGENTS = [
  {id:"HEAD",color:"#d4af37",hair:"#1a120c",body:"#2a2a32",role:"never trades"},
  {id:"SEARCH",color:"#3dff8a",hair:"#1a3010",body:"#1c3a28",role:"sources"},
  {id:"RISK",color:"#ff5b6e",hair:"#1a0808",body:"#3a1518",role:"CLEAR/KILL"},
  {id:"SNIPER",color:"#f93",hair:"#201000",body:"#3a2008",role:"one send"},
  {id:"WHALE",color:"#6ad",hair:"#111",body:"#1a2838",role:"wallets"},
  {id:"RUG",color:"#f66",hair:"#200",body:"#301010",role:"LP watch"},
  {id:"EXIT",color:"#ee8",hair:"#222200",body:"#333010",role:"flatten"},
  {id:"SHILL",color:"#c8f",hair:"#201030",body:"#281838",role:"noise"}
];
const NIGHT_AGENTS = [
  {id:"MONITOR",color:"#6df",hair:"#123",body:"#1a3a48",role:"stream kill"},
  {id:"AUDITOR",color:"#f84",hair:"#310",body:"#3a2010",role:"same funder"},
  {id:"NARRATIVE",color:"#fd6",hair:"#330",body:"#3a3010",role:"spread score"},
  {id:"TIMING",color:"#c8f",hair:"#201030",body:"#281838",role:"session veto"},
  {id:"CHECKER",color:"#f66",hair:"#200",body:"#301018",role:"last no"}
];
const NIGHT_SEATS = [
  {who:"MONITOR",x:4,y:16},{who:"AUDITOR",x:28,y:16},{who:"NARRATIVE",x:52,y:16},
  {who:"TIMING",x:28,y:58},{who:"CHECKER",x:52,y:58}
];
const KILL_REASONS = [
  "no metadata / no pulse",
  "one funder behind first buyers",
  "mint authority still live",
  "freeze never revoked",
  "deployer rugged before under another name",
  "chatter is same-day accounts",
  "curve stalled, nobody real buying",
  "four said yes — checker still no"
];
const FARM_AGENTS = [
  {id:"RESEARCH",color:"#b8f",hair:"#211",body:"#534",role:"research"},
  {id:"BUILD",color:"#6af",hair:"#123",body:"#246",role:"build"},
  {id:"TOOLS",color:"#f84",hair:"#310",body:"#421",role:"tools"},
  {id:"INBOX",color:"#fd6",hair:"#330",body:"#432",role:"inbox"},
  {id:"TEST",color:"#6df",hair:"#123",body:"#145",role:"test"},
  {id:"CHECK",color:"#6f8",hair:"#131",body:"#142",role:"verify"},
  {id:"DELIVER",color:"#f66",hair:"#300",body:"#412",role:"deliver"}
];
const DESKS = {
  CRYPTO:[{x:4,y:16,who:"TAPE"},{x:28,y:16,who:"FLOW"},{x:52,y:16,who:"CHIEF"},{x:76,y:16,who:"VERIFY"},{x:4,y:58,who:"QUANT"},{x:28,y:58,who:"MACRO"},{x:52,y:58,who:"RISK"},{x:76,y:58,who:"ARCHIVE"}],
  MEME:[{x:4,y:16,who:"TAPE"},{x:28,y:16,who:"FLOW"},{x:52,y:16,who:"CHIEF"},{x:76,y:16,who:"VERIFY"},{x:4,y:58,who:"QUANT"},{x:28,y:58,who:"MACRO"},{x:52,y:58,who:"RISK"},{x:76,y:58,who:"ARCHIVE"}],
  INDEX:[{x:4,y:16,who:"TAPE"},{x:28,y:16,who:"FLOW"},{x:52,y:16,who:"CHIEF"},{x:76,y:16,who:"VERIFY"},{x:4,y:58,who:"QUANT"},{x:28,y:58,who:"MACRO"},{x:52,y:58,who:"RISK"},{x:76,y:58,who:"ARCHIVE"}]
};
const ALPHA_SEATS = [
  {who:"SEARCH",x:4,y:16},{who:"SHILL",x:28,y:16},{who:"SNIPER",x:52,y:16},{who:"EXIT",x:76,y:16},
  {who:"WHALE",x:4,y:58},{who:"RISK",x:28,y:58},{who:"RUG",x:52,y:58},{who:"HEAD",x:76,y:58}
];
const HUTS = [
  {id:"RESEARCH",x:6,y:16,cls:"purple"},{id:"BUILD",x:30,y:16,cls:""},{id:"TOOLS",x:54,y:16,cls:"red"},{id:"INBOX",x:78,y:16,cls:""},
  {id:"CHECK",x:12,y:60,cls:""},{id:"TEST",x:42,y:60,cls:"blue"},{id:"DELIVER",x:72,y:60,cls:"red"}
];
const MARKETS = { CRYPTO:["BTC","ETH","SOL"], MEME:["DOGE","SOL","BTC"], INDEX:["TSLA","NVDA","SPX"], ALPHA:["SOL"] };
const SEED = {BTC:111000,ETH:4280,SOL:248,DOGE:0.22,TSLA:248,NVDA:180,SPX:6400};
const feeds = { hl:"…", bn:"…", yh:"…", pf:"…", dx:"…" };
const book = {
  cash: 1000, start: 1000, positions: [], journal: [], feesPaid: 0, tickets: 0, refused: 0, bought: 0, sold: 0, realized: 0, trades: [],
  cfg: { venue:"paper", riskPct:1, feeBps:4, slipBps:5, apiKey:"", watchAddr:"", canWithdraw:false, liveSend:false }
};
const state = { view:"alpha", floor:"MEME", prices:{}, mc:{}, series:{}, ohlc:{}, agents:{}, ticket:null, seq:1, funding:{}, oi:{}, coins:[], boosts:{}, koth:null, fomo:[], _tradeAt:0, _extraAt:0 };
const shift = { step:"farm", room:"farm", coin:null, tag:"", line:"one desk · farm researches · office prints · night kills · alpha paper-fills", lane:0 };
let brain;
try { brain = JSON.parse(localStorage.getItem("gs-brain")||"null"); } catch(_){ brain=null; }
brain = brain || {
  seen:0, veto:0, clear:0, fills:0, win:0, lose:0,
  reasons:{}, weights:{ metadata:1, pulse:1, boost:1, social:1, cap:1, wallet:1 },
  chat:[], memory:{}, notes:[], wallets:{}
};
if(!brain.memory) brain.memory={};
if(!brain.notes) brain.notes=[];
if(!brain.weights) brain.weights={ metadata:1, pulse:1, boost:1, social:1, cap:1, wallet:1 };
if(brain.weights.wallet==null) brain.weights.wallet=1;
if(brain.weights.wallet>1.45) brain.weights.wallet=1.15;
if(brain.weights.social<0.75) brain.weights.social=1;
if(brain.weights.boost>1.35) brain.weights.boost=1;
if(brain.weights.metadata>1.35) brain.weights.metadata=1;
if(!brain.chat) brain.chat=[];
if(!brain.wallets) brain.wallets={};
if(!brain.intel) brain.intel={};
if(!brain.handles) brain.handles={};
if(!brain.desk) brain.desk={riskPct:1.2,hires:[],lock:0,peakEq:0,lastHire:0};
if(!Array.isArray(brain.desk.hires)) brain.desk.hires=[];
if(brain.desk.riskPct==null || brain.desk.riskPct<1) brain.desk.riskPct=1.2;
if(!brain.agents) brain.agents={};
if(!brain.lessons) brain.lessons=[];
if(!brain.playbook) brain.playbook={ minMc:15000, preferMc:false, avoidBoost:false, followMin:1.15, lastRule:"", tpPct:0.08, slPct:0.16, staleMs:10*60*1000, rules:[] };
if(brain.playbook.minMc==null || brain.playbook.minMc>2e6) brain.playbook.minMc=15000;
if(brain.playbook.slPct==null) brain.playbook.slPct=0.10;
if(brain.playbook.tpPct==null) brain.playbook.tpPct=0.25;
if(!brain.playbook.staleMs || brain.playbook.staleMs<=3*60*1000) brain.playbook.staleMs=10*60*1000;
if(!brain.patterns) brain.patterns={};
if(!brain.regimes) brain.regimes={};
if(!brain.scanned) brain.scanned=0;
if(!brain.inbox) brain.inbox=[];
if(!brain.huddles) brain.huddles=[];
if(!brain.savedAt) brain.savedAt=0;
if(!brain.day) brain.day={ key:"", pnl:0, trades:0, halted:false, streak:0, cooldownUntil:0 };
if(brain.day.streak==null) brain.day.streak=0;
if(brain.day.cooldownUntil==null) brain.day.cooldownUntil=0;
if(!brain.funnel) brain.funnel={ scanned:0, cleared:0, confirmed:0, filled:0, skipped:0, reported:0 };
if(!brain.creators) brain.creators={};
if(!brain.threads) brain.threads={};
if(!brain.pulse) brain.pulse={ go:0.5, t:0, why:"cold" };
if(!brain.briefs) brain.briefs=[];
let _ready = false;
let _bootLocalAt = +(brain.savedAt || 0);
function saveBrain(){
  try{
    if((brain.chat||[]).length>40) brain.chat=brain.chat.slice(0,40);
    if((brain.lessons||[]).length>50) brain.lessons=brain.lessons.slice(0,50);
    if((brain.notes||[]).length>30) brain.notes=brain.notes.slice(0,30);
    if((brain.inbox||[]).length>40) brain.inbox=brain.inbox.slice(0,40);
    if(!_ready) return;
    brain.savedAt=Date.now();
    localStorage.setItem("gs-brain", JSON.stringify(brain));
  }catch(_){
    if(!_ready) return;
    try{
      brain.chat=(brain.chat||[]).slice(0,16);
      brain.lessons=(brain.lessons||[]).slice(0,16);
      brain.inbox=(brain.inbox||[]).slice(0,10);
      localStorage.setItem("gs-brain", JSON.stringify(brain));
    }catch(__){}
  }
}
function agentOf(who){
  brain.agents=brain.agents||{};
  return brain.agents[who]=brain.agents[who]||{id:who,studied:0,fills:0,vetoes:0,wins:0,losses:0,last:"",lessons:[]};
}
function lesson(who, kind, text, extra){
  const a=agentOf(who);
  a.studied++;
  a.last=String(text||"").slice(0,90);
  if(kind==="fill") a.fills++;
  if(kind==="veto") a.vetoes++;
  if(kind==="win") a.wins++;
  if(kind==="lose") a.losses++;
  const row={t:Date.now(),who,kind,text:a.last,tag:(extra&&extra.tag)||"",mc:(extra&&extra.mc)||0};
  a.lessons.unshift(row); if(a.lessons.length>8) a.lessons.pop();
  brain.lessons=brain.lessons||[]; brain.lessons.unshift(row); if(brain.lessons.length>80) brain.lessons.pop();
  note(who+": "+a.last);
  saveBrain();
}
function talk(who, text){
  brain.chat.unshift({t:Date.now(), who, text});
  if(brain.chat.length>80) brain.chat.pop();
  const box=document.getElementById("chat");
  if(box){
    const row=document.createElement("div");
    row.className="log";
    row.innerHTML=`<span class="who">${esc(who)}</span> ${esc(text)}`;
    box.prepend(row);
  }
  saveBrain();
}
function bumpReason(r){
  const key=(r||"other").slice(0,40);
  brain.reasons[key]=(brain.reasons[key]||0)+1;
}
function note(text){
  brain.notes.unshift({t:Date.now(), text:String(text).slice(0,80)});
  if(brain.notes.length>40) brain.notes.pop();
}
function rememberCoin(c, verdict, why){
  if(!c) return;
  const mint=c.mint || pumpTag(c) || "?";
  const m=brain.memory[mint]=brain.memory[mint]||{tag:"",n:0,veto:0,clear:0,fills:0,sells:0,pnl:0,src:"pump/dex"};
  m.tag=pumpTag(c)||m.tag;
  m.n++;
  if(!(verdict==="veto" && (m.fills||m.sells))) m.last=verdict;
  m.why=(why||"").slice(0,60); m.px=coinPx(c); m.mc=pumpMark(c); m.t=Date.now();
  m.feat=featuresOf(c);
  if(c.creator) m.creator=c.creator;
  if(verdict==="veto"){
    m.veto++;
    state._cool=state._cool||{};
    if(c.mint) state._cool[c.mint]=Date.now()+50000;
  }
  if(verdict==="clear") m.clear++;
  if(verdict==="fill") m.fills++;
  if(verdict==="sell") m.sells=(m.sells||0)+1;
  const keys=Object.keys(brain.memory);
  if(keys.length>180){
    keys.sort((a,b)=>(brain.memory[a].t||0)-(brain.memory[b].t||0));
    keys.slice(0, keys.length-180).forEach(k=>delete brain.memory[k]);
  }
  saveBrain();
}
function featuresOf(c){
  if(!c) return {bucket:"micro",graduated:false,social:false,live:false,boost:false,curve:0,follow:0,dump:0};
  const mc=pumpMark(c);
  const hint=walletHint(c);
  return {
    bucket: mc>=5e7?"mega": mc>=1e6?"mid":"micro",
    graduated: !!c.complete,
    social: !!(c.twitter||c.website||c.telegram||c.image_uri),
    live: !!c.is_currently_live,
    boost: !!(c.mint && state.boosts[c.mint]),
    curve: curvePct(c),
    follow: hint.follow||0,
    dump: hint.dump||0,
    mc,
    snipers: (c._metrics&&c._metrics.snipers)||0,
    sniperFarm: !!(c._metrics&&c._metrics.sniperFarm),
    sigma: volRead(c).sigma,
    chop: !!volRead(c).chop,
    expand: !!volRead(c).expand
  };
}
function pat(k){
  brain.patterns=brain.patterns||{};
  return brain.patterns[k]=brain.patterns[k]||{n:0,pnl:0,wins:0,losses:0,ema:0};
}
function bumpPat(k, pnl){
  const s=pat(k);
  const x=Math.max(-40, Math.min(40, +pnl||0));
  s.n++; s.pnl+=x;
  if(x>0.01) s.wins++; else if(x<-0.01) s.losses++;
  const a=s.n<8?0.38:0.22;
  s.ema = (s.n===1) ? x : s.ema*(1-a)+x*a;
}
function avgPat(k){
  const s=brain.patterns && brain.patterns[k];
  if(!s || !s.n) return 0;
  return s.ema!=null ? s.ema : s.pnl/s.n;
}
function patReady(k){
  const s=brain.patterns && brain.patterns[k];
  return !!(s && s.n>=4);
}
function tokenSig(c, extra){
  extra=extra||{};
  const feat=c?featuresOf(c):extra;
  const band=c?mcBand(c):(extra.band||"trench");
  const hv=c?!!huntVol(c):!!extra.hunt;
  const vr=c?volRead(c):{};
  const dump=(feat.dump>=2) || extra.dump>=2;
  return [band, hv?"hv":"thin", vr.expand?"ex": vr.chop?"ch":"fl", dump?"dump":"ok"].join("|");
}
function learnFromTrade(p, pnl, why){
  if(Math.abs(+pnl||0)<0.25 && /recycle|keep book|max hold/i.test(String(why||""))) return;
  if(/clawed fake dex|clawed unit jump|clawed to MC/i.test(String(why||""))) return;
  const c=coinByMint(p && p.mint)||coinOfPos(p)||coinByTag(p && p.sym);
  const f=(p && p.feat) || (c && featuresOf(c)) || {};
  const bump=k=>bumpPat(k, pnl);
  bump(f.bucket||"micro");
  bump(f.graduated?"graduated":"curve");
  bump(f.social?"social":"thin");
  if(f.follow>=1) bump("follow");
  if(f.dump>=2) bump("dump");
  if(f.boost) bump("boost");
  const band=c?mcBand(c):(p&&p.band)||"";
  if(band) bump(band);
  if(c && justBonded(c)) bump("bonded");
  const entry=+(p&&p.entryMc)||0;
  const featHunt=p&&p.feat&&p.feat.huntVol;
  if(entry>=FLOOR_MC && entry<HIGH_MC) bump("hunt80");
  if(featHunt || (c && huntVol(c)) || (entry>=FLOOR_MC && entry<HIGH_MC && (p.feat&&p.feat.vol>0))) bump("huntVol");
  else if(entry>=FLOOR_MC && entry<HIGH_MC) bump("huntThin");
  if(entry>=VOL_MC) bump("lateHigh");
  if(p && p.feat && p.feat.vol) bump(p.feat.vol>medianVol()?"volHot":"volCold");
  if(p && p.feat && p.feat.handle) bump("hasX");
  if(p && p.feat && (p.feat.snipers||0)>=6) bump("sniper");
  if(p && p.feat && p.feat.sniperFarm) bump("sniperFarm");
  if((p && p.feat && p.feat.chop) || (c && volRead(c).chop)) bump("chop");
  if((p && p.feat && p.feat.expand) || (c && volRead(c).expand)) bump("expand");
  const sig=(p && p.feat && p.feat.sigma) || (c && volRead(c).sigma) || 0;
  if(sig>=0.05) bump("sigmaHigh");
  else if(sig>0 && sig<0.015) bump("sigmaDead");
  if((p && p.feat && p.feat.scalp) || (c && scalpHot(c))) bump("scalp");
  if(p && p.moon) bump("moon");
  const tape=tapeRead(p && p.sym);
  if(tape.dump) bump("tapeDump");
  if(tape.pump) bump("tapePump");
  const w=String(why||"");
  if(/hard stop/i.test(w)) bump("exitStop");
  else if(/trim|take_profit/i.test(w)) bump("exitTp");
  else if(/stale|max hold/i.test(w)) bump("exitStale");
  else if(/dump/i.test(w)) bump("exitDump");
  else if(/moon/i.test(w)) bump("exitMoon");
  const intel=c?intelOf(c):null;
  if(intel && intel.handle) bump("hasX");
  else bump("noX");
  const a=agentOf("QUANT"); a.studied++;
  rebuildPlaybook();
}
function digestTrade(p, pnl, why, kind){
  if(!p) return;
  if(Math.abs(+pnl||0)<0.25 && /recycle|keep book/i.test(String(why||""))) return;
  p._why=why;
  learnFromTrade(p, pnl, why);
  walletLearnFromFill(p, pnl);
  const c=coinByMint(p.mint)||coinOfPos(p)||coinByTag(p.sym);
  const intel=intelOf(c);
  if(intel && intel.handle) markHandle(intel.handle, pnl>=0);
  const mem=(p.mint && brain.memory[p.mint]) || memByTag(p.sym);
  if(mem){
    mem.realized=(mem.realized||0)+pnl;
    mem.pnl=mem.realized;
    mem.last=pnl>=0?"win":"lose";
    mem.lastWhy=(why||kind||"").slice(0,60);
  }
  const bits=[];
  if(kind) bits.push(kind);
  if(c) bits.push(mcBand(c)+" "+fmtMc(pumpMark(c)));
  if(intel && intel.handle) bits.push("@"+intel.handle);
  lesson("QUANT", pnl>=0?"win":"lose", "$"+p.sym+" "+(pnl>=0?"+":"")+pnl.toFixed(2)+" · "+bits.join(" · "),{tag:p.sym,mc:p.mc||(c?pumpMark(c):0)});
  const entry=+(p.entryMc||p.mc||0);
  if(c && (huntVol(c) || (p.feat&&p.feat.huntVol)) && pnl>0) lesson("COACH","win","runner $"+p.sym+" caught "+fmtMc(entry)+" + vol — copy $15k+ heat",{tag:p.sym,mc:entry});
  if(entry>=VOL_MC && pnl<=0) lesson("COACH","lose","late $"+p.sym+" at "+fmtMc(entry)+" — next time take $15k+ + vol",{tag:p.sym,mc:entry});
  if(c && huntBand(c) && !huntVol(c) && pnl<0) lesson("COACH","lose","$"+p.sym+" in band but thin vol — wait for prints",{tag:p.sym,mc:entry});
  crossLearn();
}
function tapeRead(tag){
  const bars=typeof barsOf==="function" ? barsOf(tag) : [];
  if(!bars || bars.length<3) return {trend:"flat",dump:false,pump:false,chg:0};
  const a=bars[0].o||bars[0].c, b=bars[bars.length-1].c;
  const chg=a>0 ? (b-a)/a : 0;
  const downs=bars.filter(x=>x.c<x.o).length;
  return {
    trend: chg>0.04?"up": chg<-0.04?"down":"flat",
    dump: downs>=Math.ceil(bars.length*0.75) && chg<-0.08,
    pump: chg>0.06,
    chg
  };
}
function rebuildPlaybook(){
  const pb=brain.playbook=brain.playbook||{};
  callDesk();
  const mem=Object.values(brain.memory||{});
  const wins=mem.filter(m=>m.pnl>0.02);
  const losses=mem.filter(m=>m.pnl<-0.02);
  const avg=arr=>arr.length?arr.reduce((s,m)=>s+(m.mc||0),0)/arr.length:0;
  const winMc=avg(wins), loseMc=avg(losses);
  if(winMc>0){
    const trenchWins=wins.filter(m=>(m.mc||0)>0 && (m.mc||0)<VOL_MC);
    const src=trenchWins.length?trenchWins:wins.filter(m=>(m.mc||0)<HIGH_MC);
    const base=src.length?src.reduce((s,m)=>s+(m.mc||0),0)/src.length:FLOOR_MC;
    pb.minMc=Math.max(FLOOR_MC, Math.min(80000, base*0.25));
  } else pb.minMc=FLOOR_MC;
  pb.preferMc = false;
  pb.likeGrad = false;
  pb.likeSocial = avgPat("social")>=avgPat("thin");
  pb.likeFollow = avgPat("follow")>=0;
  pb.likeHuntVol = true;
  pb.likeTrench = avgPat("trench")+avgPat("bonded")+avgPat("huntVol") >= avgPat("lateHigh");
  pb.likeBonded = avgPat("bonded")>=0;
  pb.likeX = avgPat("hasX")>=avgPat("noX");
  pb.avoidDump = true;
  pb.avoidBoost = avgPat("boost")< -0.02;
  pb.followMin = 1.15;
  const sells=(book.trades||[]).filter(t=>t.side==="sell" && Math.abs(+t.pnl||0)>=0.35);
  agentTuneStops();
  if(avgPat("exitStale")<-0.2) pb.staleMs=Math.min(15*60*1000, (pb.staleMs||10*60*1000)+30000);
  else pb.staleMs=pb.staleMs||10*60*1000;
  brain.weights.wallet=Math.max(0.8, Math.min(1.35, brain.weights.wallet||1));
  brain.weights.social=Math.max(0.8, Math.min(1.35, brain.weights.social||1));
  brain.weights.boost=Math.max(0.8, Math.min(1.35, brain.weights.boost||1));
  brain.weights.metadata=Math.max(0.8, Math.min(1.35, brain.weights.metadata||1));
  const reasons=Object.entries(brain.reasons||{}).sort((a,b)=>b[1]-a[1]);
  pb.lastRule = reasons[0] ? reasons[0][0] : "hunt trench";
  pb.tpPct=Math.max(0.20, Math.min(0.28, +(pb.tpPct||0.20)));
  pb.slPct=0.10;
  pb.scalpTp=Math.max(0.18, +(pb.scalpTp||0.20));
  pb.scalpSl=0.10;
  pb.rules=[
    "GOAL $25–50/h · now $"+hourPace().pnl.toFixed(0)+" · "+profitPlan().mode,
    "hunt WR "+(huntStats().n?((huntStats().wr*100).toFixed(0)+"% of "+huntStats().n):"no exits yet")+" · open "+huntStats().open+" · copy if it pays",
    "huntVol "+avgPat("huntVol").toFixed(2)+" · hunt80 "+avgPat("hunt80").toFixed(2)+" · lateHigh "+avgPat("lateHigh").toFixed(2),
    "over $2M needs good vol · over $5M rare + strong vol",
    "mode "+profitPlan().mode+" · TP "+(profitPlan().tp*100).toFixed(0)+"% / SL "+(profitPlan().sl*100).toFixed(0)+"% · size $"+ticketSize().toFixed(0)+" ("+(((brain.playbook&&brain.playbook.sizeMul)||1).toFixed(2))+"x)",
    "vault 18% dry powder · heat cap 45% · 2 per MC cluster · size down when WR is cold",
    "desk huddle sizes the ticket · copy last wins",
    "follow FLW≥"+((pb.followMin||1.2).toFixed(1))+" · dump wallets = sell",
    Object.keys(brain.handles||{}).length? ("X handles "+Object.keys(brain.handles).length+" remembered"):"hunt X handles on every packet",
    "patterns trench "+avgPat("trench").toFixed(2)+" · bonded "+avgPat("bonded").toFixed(2)+" · stop "+avgPat("exitStop").toFixed(2),
    "learn EMA chop "+avgPat("chop").toFixed(1)+" · expand "+avgPat("expand").toFixed(1)+" · huntThin "+avgPat("huntThin").toFixed(1)+" · huntVol "+avgPat("huntVol").toFixed(1),
    "tp bank "+((pb.tpPct||0.06)*100).toFixed(0)+"% · no long holds yet · flatten if vol dies / sl "+((pb.slPct||0.08)*100).toFixed(0)+"%"
  ];
  return pb;
}
function studyCoin(c){
  if(!c) return ["empty tape"];
  const tag=pumpTag(c);
  const mc=pumpMark(c);
  const mem=c.mint && brain.memory[c.mint];
  const hint=walletHint(c);
  const pb=brain.playbook||{};
  const feat=featuresOf(c);
  const tape=tapeRead(tag);
  const bits=[];
  if(mem && mem.last==="lose") bits.push("last book lost · fade");
  if(mem && mem.last==="win") bits.push("last book paid · copy");
  const twin=histTwin(c);
  if(twin>2) bits.push("hist twins paid");
  if(twin<-2) bits.push("hist twins lost");
  if(mem && mem.veto>=2) bits.push("study: vetoed "+mem.veto+"×");
  if(hint.dump>=2) bits.push("wallets dumping");
  if(hint.follow>=1) bits.push("follow wallets in");
  const intel=intelOf(c);
  if(intel && intel.handle) bits.push("X @"+intel.handle+(intel.followers?(" "+fmtMc(intel.followers)+" flw"):""));
  else if(!feat.social) bits.push("no X / socials — hunting");
  const hrep=intel&&intel.handle && (brain.handles||{})[intel.handle.toLowerCase()];
  if(hrep && (hrep.wins||0)>(hrep.losses||0)) bits.push("@"+intel.handle+" paid before");
  if(hrep && (hrep.losses||0)>(hrep.wins||0)) bits.push("@"+intel.handle+" faded before");
  if(c.description) bits.push("bio "+String(c.description).replace(/\s+/g," ").slice(0,36));
  if(feat.graduated) bits.push("graduated / MC book");
  if(feat.social) bits.push("has socials"); else bits.push("thin social");
  if(tape.dump) bits.push("tape dumping "+(tape.chg*100).toFixed(0)+"%");
  if(tape.pump) bits.push("tape pumping "+(tape.chg*100).toFixed(0)+"%");
  if(pb.minMc && mc>0 && mc<pb.minMc && !isTrench(c) && !justBonded(c)) bits.push("below learned min MC "+fmtMc(pb.minMc));
  if(feat.boost && pb.avoidBoost) bits.push("paid boost — shill tape");
  if(pb.likeGrad && !feat.graduated) bits.push("playbook prefers graduated");
  const vol=coinVol(c);
  if(justBonded(c)) bits.push("just bonded vol "+fmtMc(vol));
  else bits.push("vol "+fmtMc(vol));
  bits.push("vol "+fmtMc(coinVol(c))+" · liq "+fmtMc(coinLiq(c))+" · σ "+(volRead(c).sigma*100).toFixed(1)+"%");
  const vr=volRead(c);
  if(vr.expand) bits.push("vol expanding "+(Math.abs(vr.chg1h)*100).toFixed(0)+"% 1h");
  if(vr.chop) bits.push("chop — high σ no trend");
  if(vr.dead) bits.push("dead tape — no σ");
  const met=c._metrics;
  if(met && met.snipers) bits.push(met.snipers+" sniper"+(met.snipers===1?"":"s")+(met.sniperFarm?" FARM": met.sniperHot?" hot":""));
  if(!liqOk(c)) bits.push("thin book — skip size");
  if(volHot(c) && huntBand(c)) bits.push("hot $15k+");
  return bits;
}
function histTwin(c){
  if(!c) return 0;
  const sig=tokenSig(c);
  const band=mcBand(c);
  const hv=!!huntVol(c);
  const sells=(book.trades||[]).filter(t=>t.side==="sell" && Math.abs(+t.pnl||0)>=0.25).slice(0,48);
  if(sells.length<2) return 0;
  const same=sells.filter(t=> t.sig===sig || (t.band===band && !!t.hunt===hv));
  if(same.length<2) return 0;
  let s=0,w=0;
  same.forEach((t,i)=>{ const wt=1/(1+i*0.28); s+=(+t.pnl||0)*wt; w+=wt; });
  return Math.max(-28, Math.min(28, (s/w)*8));
}
function learnedScore(c){
  let s=fomoScore(c);
  const mem=c && c.mint && brain.memory[c.mint];
  if(mem && mem.pnl>0.05) s+=28;
  if(mem && mem.pnl<-0.05) s-=45;
  if(mem && mem.veto>=2 && mem.clear===0) s-=24;
  const hint=walletHint(c);
  s += hint.follow*12*(brain.weights.wallet||1);
  s -= hint.dump*16;
  const pb=brain.playbook||{};
  const feat=featuresOf(c);
  if(pb.preferMc) s += Math.log10(Math.max(1,pumpMark(c)))*5;
  if(pb.minMc && pumpMark(c)<pb.minMc && !isTrench(c) && !justBonded(c)) s-=18;
  if(pb.avoidBoost && feat.boost) s-=32;
  if(pb.likeGrad && feat.graduated) s+=14;
  if(pb.likeSocial && feat.social) s+=8;
  if(pb.likeSocial && !feat.social) s-=10;
  if(pb.likeFollow && feat.follow>=1) s+=12;
  if(pb.avoidDump && feat.dump>=2) s-=20;
  const intel=intelOf(c);
  if(intel && intel.followers>=1000) s+=8;
  if(intel && intel.followers>=10000) s+=10;
  if(intel && intel.hasX) s+=4;
  const hrep=intel&&intel.handle && (brain.handles||{})[String(intel.handle).toLowerCase()];
  if(hrep) s += Math.max(-16, Math.min(18, ((hrep.wins||0)-(hrep.losses||0))*6));
  if(feat.bucket==="mega" && avgPat("mega")>0 && volStrong(c)) s+=6;
  if(feat.bucket==="micro" && avgPat("micro")<0) s-=8;
  const tape=tapeRead(pumpTag(c));
  if(tape.dump) s-=14;
  if(tape.pump && tape.chg<0.4) s+=8;
  const vol=coinVol(c);
  s += Math.log10(1+vol)*4;
  const band=mcBand(c);
  if(band==="bonded" || band==="trench") s+=28;
  if(huntBand(c)) s+=36;
  if(huntVol(c)) s+=48;
  if(liqOk(c)) s+=12; else s-=16;
  if(volHot(c) && huntBand(c)) s+=14;
  if(huntBand(c) && printing(c)) s+=28;
  if(pb.likeHuntVol && huntVol(c)) s+=22;
  if(huntBand(c) && !huntVol(c)) s-=6;
  if(band==="mid") s += volStrong(c)?6:-16;
  if(band==="high") s += volStrong(c)?-8:-48;
  if(pb.likeTrench && (band==="bonded" || band==="trench")) s+=10;
  if(pb.likeBonded && justBonded(c)) s+=8;
  if(pb.likeX && intel && intel.hasX) s+=6;
  if(pb.likeX===false && intel && !intel.hasX) s+=4;
  s += histTwin(c)*1.6;
  if(patReady("expand") && avgPat("expand")>1 && volRead(c).expand) s+=14;
  if(patReady("chop") && avgPat("chop")<-1.5 && volRead(c).chop) s-=18;
  if(patReady("huntThin") && avgPat("huntThin")<-2 && huntBand(c) && !huntVol(c)) s-=16;
  if(patReady("huntVol") && avgPat("huntVol")>1 && huntVol(c)) s+=12;
  if(patReady("lateHigh") && avgPat("lateHigh")<-2 && pumpMark(c)>=VOL_MC) s-=14;
  if(vol>medianVol() && band!=="high") s+=10;
  if(vol>medianVol()*2) s+=16;
  if(volStrong(c) && (band==="mid"||band==="high")) s+=18;
  if(justBonded(c)) s+=18;
  return s;
}
function studyTopic(who){
  const pb=brain.playbook||{};
  const c=shift.coin || state.koth || (state.coins||[])[0];
  const tag=c?pumpTag(c):"";
  if(who==="WHALE"){
    const top=topWallets()[0];
    const dump=topWallets().filter(w=>(w.sells>w.buys*2 && w.sells>=3)||(w.follow||1)<0.55).length;
    const n=Object.keys(brain.wallets||{}).length;
    return top
      ? ("board #1 "+shortAddr(top.addr)+" flw "+(top.follow||1).toFixed(1)+" · "+n+" wallets · "+dump+" dump")
      : "no wallets yet — hunting first prints";
  }
  if(who==="SHILL"){
    const intel=c && intelOf(c);
    const n=Object.keys(brain.intel||{}).length;
    const hn=Object.keys(brain.handles||{}).length;
    if(intel && intel.handle) return "X @"+intel.handle+(intel.followers?(" "+fmtMc(intel.followers)+" flw"):"")+" on $"+tag+" · intel "+n;
    if(c && (c.twitter||c.telegram||c.website)) return "$"+tag+" has "+[c.twitter&&"X",c.telegram&&"tg",c.website&&"web"].filter(Boolean).join("/")+" · hunting "+hn+" handles";
    return tag?("$"+tag+" no X yet — dex search · "+n+" intel files"):"hunting X on the tape";
  }
  if(who==="RUG"){
    return pb.likeGrad
      ? ("rug: graduated books paid · curve avg "+avgPat("curve").toFixed(2))
      : ("rug: curve still tradable · grad avg "+avgPat("graduated").toFixed(2));
  }
  if(who==="SHILL"){
    return pb.avoidBoost ? "shill: paid boosts get vetoed" : "shill: boost tape is noise, not a kill yet";
  }
  if(who==="EXIT"){
    const open=book.positions[0];
    if(open){
      const tape=tapeRead(open.sym);
      return "exit $"+open.sym+" tape "+tape.trend+" · tp "+((pb.tpPct||0.1)*100).toFixed(0)+"% sl "+((pb.slPct||0.07)*100).toFixed(0)+"%";
    }
    return "exit rules tp "+((pb.tpPct||0.1)*100).toFixed(0)+"% / sl "+((pb.slPct||0.07)*100).toFixed(0)+"%";
  }
  if(who==="QUANT" || who==="ARCHIVE"){
    const wr=(brain.win+brain.lose)?Math.round(100*brain.win/(brain.win+brain.lose)):0;
    const n=(state.coins||[]).filter(huntVol).length;
    const hs=huntStats();
    const sigs=(state.coins||[]).slice(0,24).map(volRead).filter(v=>v.sigma>0);
    const medS=sigs.length? sigs.map(v=>v.sigma).sort((a,b)=>a-b)[Math.floor(sigs.length/2)] : 0;
    return "hunt WR "+(hs.n?((hs.wr*100).toFixed(0)+"% "+hs.n+"n "+(hs.pnl>=0?"+":"")+hs.pnl.toFixed(2)):"no hunt exits")+" · tape σ "+(medS*100).toFixed(1)+"% · wr "+wr+"%";
  }
  if(who==="COACH"){
    const n=(state.coins||[]).filter(huntVol).length;
    return n? ("copy $15k+ vol — "+n+" printing") : "no $15k+ vol on tape — keep scanning pump";
  }
  if(who==="HEAD" || who==="CHIEF"){
    const h=deskHealth();
    return (h.defend?"DEFEND":"HUNGRY")+" · GOAL $25–50/h · now $"+h.hour.pnl.toFixed(0)+" · WR "+(h.wr*100).toFixed(0)+"%";
  }
  if(who==="TAPE"){
    const n=(state.coins||[]).filter(printing).length;
    return n? (n+" live prints on tape") : "quiet tape — waiting first prints";
  }
  if(who==="FLOW"){
    const fl=c?flowRead(c):{ready:false};
    if(fl.ready) return "Δ30 "+(fl.delta>=0?"+":"")+fmtMc(fl.delta)+" · Δ60 "+fmtMc(fl.delta60)+(fl.absorb?" ABSORB": fl.sweep?" SWEEP": fl.sellPrint?" last SELL":" last BUY");
    const n=(state.coins||[]).filter(x=>coinVol(x)>medianVol()).length;
    return "flow "+n+" above median vol · "+fmtMc(medianVol());
  }
  if(who==="VERIFY" || who==="CHECKER"){
    return "last kill "+(pb.lastRule||"hunt trench")+" · checker min "+((profitPlan().minScore||0.34).toFixed(2));
  }
  if(who==="MACRO"){
    return "session "+deskMode()+" · SOL "+fmt((state.prices.SOL||0))+" · pulse "+((brain.pulse&&brain.pulse.go)||0).toFixed(2);
  }
  if(who==="SNIPER"){
    return "paper fill $"+ticketSize().toFixed(0)+" · last "+((book.trades||[])[0]&&(book.trades||[])[0].sym||"flat");
  }
  if(who==="SIZE" || who==="LOCK"){
    return "size $"+ticketSize().toFixed(0)+" · vault $"+cashVault().toFixed(0)+" · "+deskMode();
  }
  if(who==="RISK"){
    return "risk "+deskMode()+" · heat "+fmtMc(workingExposure())+" / "+fmtMc(equity()*0.85);
  }
  if(c){
    const bits=studyCoin(c);
    return "$"+tag+" "+bits.slice(0,2).join(" · ");
  }
  return "waiting tape · playbook min MC "+fmtMc(pb.minMc);
}
function studyPulse(){
  rebuildPlaybook();
  const desk=["HEAD","CHIEF","SEARCH","TAPE","FLOW","WHALE","RUG","SHILL","VERIFY","QUANT","MACRO","RISK","EXIT","SNIPER","COACH","SIZE","LOCK","SCOUT2","AUDIT2","ARCHIVE","CHECKER"];
  const who=desk[(state._pulse||0)%desk.length];
  const line=studyTopic(who);
  const c=shift.coin || state.koth || (state.coins||[])[0];
  const tag=c?pumpTag(c):"desk";
  lesson(who,"study",line,{tag,mc:c?pumpMark(c):0});
  share(who, tag, line);
  if(state.agents[who]) say(who, "study "+line);
  else if(state.agents.SEARCH) say("SEARCH", "study "+line);
  const reader=desk[((state._pulse||0)+3)%desk.length];
  const note=(brain.inbox||[]).find(x=>x.who!==reader);
  if(note){
    const reply="re "+note.who+" — "+note.text.slice(0,48);
    if(state.agents[reader]) say(reader, reply);
    else if(state.agents.HEAD) say("HEAD", reply);
    share(reader, note.topic||tag, reply);
  }
  if((state._pulse||0)%2===0) huntIntel();
  studyHistory();
  renderLearn();
  renderHuddle();
  expandDesk();
  crossLearn();
}
function crossLearn(){
  const lessons=(brain.lessons||[]).slice(0,16);
  if(lessons.length<2) return;
  const a=lessons[0];
  const b=lessons.find(l=>l.who!==a.who);
  if(!b) return;
  const reader=b.who;
  const line="copied "+a.who+" — "+String(a.text||"").slice(0,42);
  share(reader, a.tag||"desk", line);
  const st=agentOf(reader);
  st.heard=(st.heard||0)+1;
  if(a.kind==="win"){
    brain.weights.wallet=Math.min(2,(brain.weights.wallet||1)+0.04);
    if((state._pulse||0)%3===0) lesson(reader,"study",line,{tag:a.tag});
  } else if(a.kind==="lose"){
    brain.weights.social=Math.min(2,(brain.weights.social||1)+0.04);
    if((state._pulse||0)%3===1) lesson(reader,"study",line,{tag:a.tag});
  }
  rebuildPlaybook();
}
function debriefBuy(sym, sized){
  const c=coinByTag(sym);
  const hint=c?walletHint(c):{follow:0,dump:0,best:null};
  const intel=c?intelOf(c):null;
  lesson("SEARCH","fill","scout packet $"+sym+" paper $"+Number(sized||0).toFixed(0),{tag:sym,mc:c?pumpMark(c):0});
  lesson("WHALE","study", hint.best
    ? ("followed "+shortAddr(hint.best.addr)+" into $"+sym+" flw "+(hint.best.follow||1).toFixed(1))
    : ("$"+sym+" first prints · "+(hint.follow||0)+" follow / "+(hint.dump||0)+" dump"),{tag:sym});
  lesson("SHILL","study", intel&&intel.handle
    ? ("X @"+intel.handle+(intel.followers?(" "+fmtMc(intel.followers)+" flw"):""))
    : (c&&(c.twitter||c.telegram)?"$"+sym+" has socials":"$"+sym+" no X yet"),{tag:sym});
  if(c) lesson("RUG","study", c.complete?("$"+sym+" graduated"):("$"+sym+" still on curve "+curvePct(c).toFixed(0)+"%"),{tag:sym});
  say("WHALE", hint.best ? ("copied "+shortAddr(hint.best.addr)+" on $"+sym) : ("watching wallets on $"+sym));
  say("SHILL", intel&&intel.handle ? ("X @"+intel.handle+" on $"+sym) : ("no X handle $"+sym));
  share("HEAD", sym, "paper fill $"+sym+" $"+Number(sized||0).toFixed(0));
  crossLearn();
}
function memByTag(tag){
  return Object.values(brain.memory||{}).find(x=>x.tag===tag);
}
function renderLearn(){
  const el=document.getElementById("learnBox"); if(!el) return;
  const pb=brain.playbook||{};
  const wr = (brain.win+brain.lose) ? ((brain.win/(brain.win+brain.lose))*100).toFixed(0) : "—";
  const cards=(brain.lessons||[]).slice(0,3).map(l=>esc(l.who)+" — "+esc(l.text)).join("<br>") || "no lessons yet";
  const xn=Object.values(brain.intel||{}).filter(x=>x.handle).length;
  const wn=Object.keys(brain.wallets||{}).length;
  const hired=((brain.desk&&brain.desk.hires)||[]).map(h=>h.id).join(" ")||"none";
  el.innerHTML = `<div class="funnel-stats"><div><em>${brain.seen||0}</em> seen</div><div><em>${brain.veto||0}</em> veto</div><div><em>${wr}%</em> wr</div><div><em>${book.positions.length}</em> open</div></div>
<div class="rejects">${esc((pb.rules||[]).slice(0,2).join(" · "))}</div>
<div class="rejects">wallets ${wn} · X ${xn} · size ${((brain.desk&&brain.desk.riskPct)||1.2).toFixed(1)}% · hired ${esc(hired)}</div>
<div class="rejects">${cards}</div>`;
  rosterList().forEach(a=>{
    const seat=document.getElementById("r-"+a.id); if(!seat) return;
    const st=agentOf(a.id);
    const span=seat.querySelector("span");
    if(span) span.textContent=a.role+" · "+(st.studied||0);
  });
}
function shortAddr(a){ const t=String(a||""); return t.length>8 ? t.slice(0,4)+"…"+t.slice(-4) : t||"—"; }
function coinImg(c, size){
  const tag=pumpTag(c)||"?";
  const raw=c && c.image_uri && /^https?:/i.test(c.image_uri) ? c.image_uri : "";
  const src=raw ? ("/api/tape?src=img&u="+encodeURIComponent(raw)) : "";
  const ph=`<span class="ph">${esc(tag.slice(0,2))}</span>`;
  if(!src) return ph;
  return `<span class="ava" style="width:${size}px;height:${size}px">${ph}<img src="${esc(src)}" alt="" width="${size}" height="${size}"/></span>`;
}
function curvePct(c){
  if(!c) return 0;
  if(c.complete) return 100;
  const sol=+(c.virtual_sol_reserves||0)/1e9;
  if(sol>0) return Math.max(2, Math.min(99, (sol/85)*100));
  const mc=pumpMark(c);
  return mc>0 ? Math.max(2, Math.min(99, Math.log10(mc+1)*12)) : 0;
}
function fomoScore(c){
  if(!c) return 0;
  const ageMin=c.created_timestamp ? (Date.now()-c.created_timestamp)/60000 : 999;
  const recency=Math.max(0, 36-ageMin/4);
  const tradeRec=c.last_trade_timestamp ? Math.max(0, 24-(Date.now()-c.last_trade_timestamp)/60000) : 0;
  const replies=Math.min(30, +(c.reply_count||0));
  const live=c.is_currently_live ? 16 : 0;
  const mc=Math.log10(Math.max(1, Math.min(pumpMark(c), 5e6))) * 10;
  const koth = state.koth && c.mint && c.mint===state.koth.mint ? 12 : 0;
  const graduated = justBonded(c) ? 22 : 0;
  const vol=Math.log10(1+coinVol(c))*8;
  const band=mcBand(c);
  const trench = (band==="trench"||band==="bonded") ? 16 : band==="high" ? -20 : 0;
  return recency + tradeRec*1.2 + replies + live + mc + koth + graduated + vol + trench;
}
function pickKoth(){
  const list=(state.coins||[]).filter(c=>c && !c.is_banned && !isMajor(c) && tradableMc(c));
  if(!list.length) return (state.coins||[]).filter(c=>c && !isMajor(c))[0]||null;
  const trench=list.filter(c=>isTrench(c)||justBonded(c));
  const pool=trench.length?trench:list.filter(volStrong);
  return (pool.length?pool:list).slice().sort((a,b)=> trenchRank(b)-trenchRank(a))[0] || null;
}
function trackWallet(addr, kind, coin, usd){
  if(!addr || String(addr).length<20) return;
  if(coin && coin.mint && addr===coin.mint) return;
  const w=brain.wallets[addr]=brain.wallets[addr]||{addr,buys:0,sells:0,holds:0,vol:0,coins:{},follow:1,last:0,kind:"trader"};
  if(kind==="creator") w.kind="creator";
  if(kind==="buy") w.buys++;
  if(kind==="sell") w.sells++;
  if(kind==="hold") w.holds=(w.holds||0)+1;
  w.vol += Math.abs(+usd||0);
  w.last=Date.now();
  const mint=coin && (coin.mint || pumpTag(coin));
  if(mint){
    const slot=w.coins[mint]=w.coins[mint]||{tag:pumpTag(coin),n:0,side:kind};
    slot.n++; slot.tag=pumpTag(coin)||slot.tag;
    if(kind==="buy"||kind==="sell") slot.side=kind;
    slot.t=Date.now();
  }
}
function pruneWallets(){
  const list=Object.values(brain.wallets||{});
  if(list.length<=80) return;
  list.sort((a,b)=>walletScore(b)-walletScore(a));
  const keep={};
  list.slice(0,80).forEach(w=>{ keep[w.addr]=w; });
  brain.wallets=keep;
}
function walletHint(c){
  const mint=c && c.mint;
  let follow=0, dump=0, best=null;
  if(!mint) return {follow:0,dump:0,best:null};
  Object.values(brain.wallets||{}).forEach(w=>{
    const slot=w.coins && w.coins[mint];
    if(!slot) return;
    const dumper=(w.sells>w.buys*2 && w.sells>=3) || (w.follow||1)<0.55;
    if(dumper) dump++;
    if((w.follow||1)>=1.25 && slot.side==="buy"){
      follow++;
      if(!best || w.follow>best.follow) best=w;
    }
  });
  return {follow, dump, best};
}
function walletLearnFromFill(p, pnl){
  if(!p || !p.mint) return;
  Object.values(brain.wallets||{}).forEach(w=>{
    const slot=w.coins && w.coins[p.mint];
    if(!slot) return;
    if(pnl>0 && slot.side==="buy") w.follow=Math.min(3, (w.follow||1)+0.08);
    if(pnl<0 && slot.side==="buy") w.follow=Math.max(0.2, (w.follow||1)-0.06);
    if(slot.side==="sell" && pnl<0) w.follow=Math.max(0.2, (w.follow||1)-0.1);
  });
  brain.weights.wallet=Math.max(0.4, Math.min(2, (brain.weights.wallet||1)+(pnl>0?0.02:-0.02)));
}
function walletScore(w){
  if(!w) return 0;
  const coins=Object.keys(w.coins||{}).length;
  const rec=Math.max(0, 1-(Date.now()-(w.last||0))/3.6e6);
  const dump=(w.sells>w.buys*2 && w.sells>=3) || (w.follow||1)<0.55;
  let s=(w.follow||1)*55 + Math.log10(1+(w.vol||0))*14 + coins*8 + rec*18 + (w.buys||0)*1.5;
  if(w.kind==="creator") s+=6;
  if(dump) s*=0.35;
  return s;
}
function topWallets(){
  return Object.values(brain.wallets||{}).sort((a,b)=>walletScore(b)-walletScore(a)).slice(0,10);
}
function renderWallets(){
  const list=topWallets();
  const head=`<div class="wal-head"><span>#</span><span>WALLET</span><span>B/S</span><span>VOL</span><span>FLW</span></div>`;
  const rows=list.map((w,i)=>{
    const dump=(w.sells>w.buys*2 && w.sells>=3) || (w.follow||1)<0.55;
    const last=Object.values(w.coins||{}).sort((a,b)=>(b.t||0)-(a.t||0))[0];
    const kind=w.kind==="creator"?" DEV":"";
    return `<div class="wal-row${dump?" dump":""}"><span class="rk">${i+1}</span><span class="sym">${esc(shortAddr(w.addr))}${kind}</span><span class="vol">${(w.buys||0)}/${(w.sells||0)}</span><span class="mc">${fmtMc(w.vol||0)}</span><span class="flw">${dump?"DUMP":((w.follow||1).toFixed(1))}</span></div>`+
      (last?`<div class="wal-last">${esc(last.side||"")} $${esc(last.tag||"")} · ${Object.keys(w.coins||{}).length} mints</div>`:"");
  }).join("") || "watching first prints…";
  const html=head+rows;
  const board=document.getElementById("whaleRows"); if(board) board.innerHTML=html;
  const box=document.getElementById("walList"); if(box) box.innerHTML=html;
}
function renderFomo(){
  const ranked=(state.coins||[]).slice().sort((a,b)=>fomoScore(b)-fomoScore(a));
  state.fomo=ranked.slice(0,8);
  const rows=state.fomo.map(c=>{
    const tag=pumpTag(c);
    const live=c.is_currently_live?' <span class="up">LIVE</span>':"";
    return `<div class="fomo-row">${coinImg(c,18)}<span class="sym">$${esc(tag)}${live}</span><span class="mc">${fmtMc(pumpMark(c))}</span><span class="score">${fomoScore(c).toFixed(0)}</span></div>`;
  }).join("") || "waiting pump tape…";
  const board=document.getElementById("fomoRows"); if(board) board.innerHTML=rows;
  const list=document.getElementById("fomoList"); if(list) list.innerHTML=rows;
}
function renderKoth(){
  const c=state.koth=pickKoth();
  const el=document.getElementById("kothBar"); if(!el) return;
  if(!c){ el.innerHTML=`<span class="ph">PF</span><div><div class="tag">KOTH — waiting tape</div><div class="meta">pump.fun paper</div></div>`; return; }
  const live=c.is_currently_live?'<i class="live-dot"></i>':"";
  el.innerHTML=`${coinImg(c,24)}${live}<div><div class="tag">KOTH $${esc(pumpTag(c))}</div><div class="meta">mc ${fmtMc(pumpMark(c))} · ${curvePct(c).toFixed(0)}% curve</div></div><div class="meta">${c.is_currently_live?"LIVE":"on curve"}</div>`;
}
function renderCoinStrip(){
  const el=document.getElementById("coinStrip"); if(!el) return;
  const koth=state.koth && state.koth.mint;
  el.innerHTML=(state.fomo||state.coins||[]).slice(0,4).map(c=>{
    const cls=["coin-chip"];
    if(c.is_currently_live) cls.push("live");
    if(koth && c.mint===koth) cls.push("koth");
    return `<div class="${cls.join(" ")}">${coinImg(c,20)}<b>$${esc(pumpTag(c))}</b><em>${fmtMc(pumpMark(c))}</em></div>`;
  }).join("");
}
function drawCurve(c){
  const svg=document.getElementById("curveSvg");
  const fill=document.getElementById("curveFill");
  const tag=document.getElementById("curveTag");
  const meta=document.getElementById("curveMeta");
  const pct=curvePct(c);
  if(tag) tag.textContent=c ? ("$"+pumpTag(c)) : "—";
  if(fill) fill.style.width=pct+"%";
  if(meta){
    const sol=c ? (+(c.virtual_sol_reserves||0)/1e9) : 0;
    meta.textContent = c
      ? ((sol?sol.toFixed(1)+" SOL · ":"") + pct.toFixed(0)+"% to graduate · paper")
      : "paper · pump.fun · live send off";
  }
  if(!svg) return;
  let d="M 0 68 ";
  for(let i=1;i<=24;i++){
    const x=(i/24)*200;
    const y=68 - Math.pow(i/24, 2.15)*58;
    d += "L "+x.toFixed(1)+" "+y.toFixed(1)+" ";
  }
  const vis=Math.max(4, pct*2);
  svg.innerHTML=`<path d="${d} L 200 72 L 0 72 Z" fill="#0a3a1822"/><path d="${d}" fill="none" stroke="#1a4a2a" stroke-width="2"/><path d="${d}" fill="none" stroke="#3dff8a" stroke-width="2.2" stroke-dasharray="${vis} 400" stroke-linecap="round"/>`;
}
function renderBoards(){
  renderKoth(); renderFomo(); renderWallets(); renderCoinStrip();
  drawCurve(state.koth || (state.fomo&&state.fomo[0]) || (state.coins&&state.coins[0]) || null);
}
function lastTalk(who){
  return (brain.chat.find(c=>c.who===who)||{}).text || "";
}
const BANTER = {
  office: [
    ["TAPE","SOL print is live"],
    ["FLOW","ack tape — no sweep"],
    ["CHIEF","keep it paper, nobody sends"],
    ["RISK","0.5% cap, don't get cute"],
    ["VERIFY","that print is real"],
    ["QUANT","vol is a nap"],
    ["MACRO","session is fine"],
    ["ARCHIVE","logged"]
  ],
  alpha: [
    ["SEARCH","fresh pump name on the tape"],
    ["WHALE","first 20 wallets — scoring follow"],
    ["RUG","mint auth still a question"],
    ["SHILL","timeline smells same-day"],
    ["RISK","packet or we kill it"],
    ["HEAD","CLEAR is not a send"],
    ["SNIPER","paper stamp only — live send off"],
    ["EXIT","SELL when wallets dump or the paper is stale"],
  ],
  night: [
    ["MONITOR","another mint, same movie"],
    ["AUDITOR","funder cluster, I don't like it"],
    ["NARRATIVE","spread score is junk"],
    ["TIMING","curve is asleep"],
    ["CHECKER","no"]
  ],
  farm: [
    ["RESEARCH","need a source not a vibe"],
    ["BUILD","desk is wired"],
    ["CHECK","don't ship a lie"],
    ["DELIVER","paper only"]
  ]
};
function chatter(){
  const bags=book.positions||[];
  if(bags.length && Math.random()>0.35){
    const p=bags[Math.floor(Math.random()*bags.length)];
    const live=mcOf(p.sym)||p.liveMc||0;
    const pnl=posPnl(p);
    const r=mcRatio(p);
    const who=["QUANT","EXIT","HEAD","COACH","SNIPER"][Math.floor(Math.random()*5)];
    const line="$"+p.sym+" "+fmtMc(p.entryMc||0)+" → "+(live?fmtMc(live):"…")+" · "+(pnl>=0?"+":"")+pnl.toFixed(2)+" ("+(r>=1?"+":"")+((r-1)*100).toFixed(1)+"%)";
    talk(who, line);
    pop(who, "$"+p.sym+" "+(pnl>=0?"+":"")+pnl.toFixed(0));
    return;
  }
  const hunt=(state.coins||[]).filter(huntVol);
  if(hunt.length && Math.random()>0.5){
    const c=hunt[0];
    const tag=pumpTag(c);
    talk("SEARCH", hunt.length+" hunt-vol on tape · $"+tag+" "+fmtMc(pumpMark(c)));
    pop("SEARCH", hunt.length+" hunt-vol");
    return;
  }
  const tag = shift.tag;
  if(tag && Math.random()>0.45){
    const tied = {
      farm: ["SEARCH", "$"+tag+" still in the farm packet"],
      office: ["RUG", "$"+tag+" still on the pit tape"],
      night: ["MONITOR", "$"+tag+" still in the night stack"],
      alpha: ["SNIPER", "$"+tag+" still in ALPHA"]
    };
    const [who, line] = tied[state.view] || tied.office;
    if(state.agents[who]){ talk(who, line); pop(who, line.slice(0,20)); }
    return;
  }
  const pack = BANTER[state.view] || BANTER.office;
  if(!pack.length) return;
  const i = Math.floor(Math.random()*pack.length);
  const [who, line] = pack[i];
  const [who2, line2] = pack[(i+1)%pack.length];
  if(state.agents[who]){ talk(who, line); pop(who, line.slice(0,20)); }
  if(who2 && state.agents[who2]){
    setTimeout(()=>{
      if(!state.agents[who2]) return;
      talk(who2, "re "+who+" — "+line2);
      pop(who2, line2.slice(0,20));
    }, 650);
  }
}
try {
  const saved = JSON.parse(localStorage.getItem("gs-book")||"null");
  if (saved && typeof saved.cash==="number") {
    Object.assign(book, saved, {cfg: Object.assign(book.cfg, saved.cfg||{})});
    book.savedAt=saved.savedAt||0;
    if (saved.seq) state.seq = saved.seq;
    if (saved.ticket) state.ticket = saved.ticket;
    if (saved.ohlc) state.ohlc = saved.ohlc;
    if (saved.shift){
      shift.step=saved.shift.step||shift.step;
      shift.room=saved.shift.room||shift.room;
      shift.tag=saved.shift.tag||"";
      shift.line=saved.shift.line||shift.line;
      shift.lane=saved.shift.lane||0;
      shift._mint=saved.shift.mint||"";
    }
  }
} catch(_){}
book.cfg.liveSend = false;
book.cfg.canWithdraw = false;
if(!(book.cfg.riskPct>=1) || book.cfg.riskPct>3) book.cfg.riskPct=1;
if(!(book.cfg.feeBps>=40) || book.cfg.feeBps>200) book.cfg.feeBps=80;
if(!(book.cfg.slipBps>=40) || book.cfg.slipBps>250) book.cfg.slipBps=100;
book.sold = book.sold || 0;
book.realized = book.realized || 0;
book.trades = book.trades || [];
book.journal = book.journal || [];
function applyBankroll(){
  if((book.start||0)>=2000){
    book.cash=Math.max(0, (book.cash||0)-((book.start||0)-1550));
    book.start=1550;
    book._flat550=true;
    return;
  }
  if(!book._flat550){
    book.cash=(book.cash||0)+550;
    book.start=(book.start||1000)+550;
    book._flat550=true;
  }
}
applyBankroll();
if(!state.ohlc) state.ohlc={};
_bootLocalAt = Math.max(_bootLocalAt, +(book.savedAt || brain.savedAt || 0));
pushBar("EQ", book.start||1000);
pushBar("EQ", equity());
const room = document.getElementById("room");
const appEl = document.getElementById("app");
function floorEl(){ return document.getElementById("agentLayer") || room; }
function persist(){
  if(!_ready) return;
  try{
    if(serverLive()){
      queueDeskFlush({ savedAt:Date.now(), loop:"client-cfg", book:{ cfg:book.cfg, wallet:book.wallet }, bookBag:{ cfg:book.cfg, wallet:book.wallet } });
      markSaved(true);
      return;
    }
    const snap=snapshotDesk();
    localStorage.setItem("gs-book", JSON.stringify(snap.bookBag));
    localStorage.setItem("gs-brain", JSON.stringify(snap.brain));
    idbPut(snap);
    queueDeskFlush(snap);
    markSaved(true);
  }catch(_){
    try{ saveBrain(); markSaved(false); }catch(__){}
  }
}
function snapshotDesk(){
  const ohlc={};
  Object.keys(state.ohlc||{}).slice(0,12).forEach(k=>{ ohlc[k]=(state.ohlc[k]||[]).slice(-20); });
  const mem={};
  Object.entries(brain.memory||{}).sort((a,b)=>(b[1].t||0)-(a[1].t||0)).slice(0,140).forEach(([k,v])=>{ mem[k]=v; });
  const wallets={};
  Object.entries(brain.wallets||{}).sort((a,b)=>walletScore(b[1])-walletScore(a[1])).slice(0,60).forEach(([k,v])=>{ wallets[k]=v; });
  const agents={};
  Object.entries(brain.agents||{}).forEach(([k,v])=>{
    agents[k]={id:v.id,studied:v.studied,fills:v.fills,vetoes:v.vetoes,wins:v.wins,losses:v.losses,last:v.last,lessons:(v.lessons||[]).slice(0,4)};
  });
  const savedAt=Date.now();
  brain.savedAt=savedAt;
  const bookBag={
    savedAt,
    cash:book.cash,start:book.start,positions:book.positions,
    journal:(book.journal||[]).slice(0,120),
    feesPaid:book.feesPaid,tickets:book.tickets,refused:book.refused,
    bought:book.bought,sold:book.sold,realized:book.realized,
    trades:(book.trades||[]).slice(0,400),cfg:book.cfg,seq:state.seq,
    wallet:book.wallet||null,
    ticket:state.ticket, ohlc, _flat550:!!book._flat550,
    shift:{step:shift.step,room:shift.room,tag:shift.tag,line:shift.line,lane:shift.lane,mint:shift.coin&&shift.coin.mint||shift._mint||""}
  };
  const brainBag={
    seen:brain.seen,veto:brain.veto,clear:brain.clear,fills:brain.fills,win:brain.win,lose:brain.lose,
    reasons:brain.reasons,weights:brain.weights,
    chat:(brain.chat||[]).slice(0,40),memory:mem,notes:(brain.notes||[]).slice(0,30),wallets,
    agents,lessons:(brain.lessons||[]).slice(0,50),playbook:brain.playbook,patterns:brain.patterns,
    regimes:brain.regimes,scanned:brain.scanned,inbox:(brain.inbox||[]).slice(0,30),
    huddles:(brain.huddles||[]).slice(0,20),savedAt,
    funnel:brain.funnel, pulse:brain.pulse, day:brain.day,
    briefs:(brain.briefs||[]).slice(0,8),
    creators: Object.fromEntries(Object.entries(brain.creators||{}).slice(0,40)),
    intel: Object.fromEntries(Object.entries(brain.intel||{}).slice(0,80)),
    handles: Object.fromEntries(Object.entries(brain.handles||{}).slice(0,40)),
    desk: {
      riskPct: (brain.desk&&brain.desk.riskPct)||1.2,
      lock: (brain.desk&&brain.desk.lock)||0,
      peakEq: (brain.desk&&brain.desk.peakEq)||0,
      lastHire: (brain.desk&&brain.desk.lastHire)||0,
      lastSizeBump: (brain.desk&&brain.desk.lastSizeBump)||0,
      hires: ((brain.desk&&brain.desk.hires)||[]).slice(0,6)
    },
    threads: Object.fromEntries(Object.entries(brain.threads||{}).slice(0,24).map(([k,v])=>[k,{mint:v.mint,tag:v.tag,score:v.score,msgs:(v.msgs||[]).slice(0,8)}]))
  };
  return { savedAt, bookBag, brain: brainBag, book: bookBag };
}
function applyDesk(snap){
  if(!snap) return false;
  const bag=snap.bookBag||snap.book||snap;
  if(bag && typeof bag.cash==="number"){
    Object.assign(book, {
      cash:bag.cash,start:bag.start,positions:bag.positions||[],journal:bag.journal||[],
      feesPaid:bag.feesPaid||0,tickets:bag.tickets||0,refused:bag.refused||0,
      bought:bag.bought||0,sold:bag.sold||0,realized:bag.realized||0,
      trades:bag.trades||[]
    });
    if(bag.wallet && bag.wallet.pubkey) book.wallet=bag.wallet;
    ensurePaperWallet();
    if(bag._flat550) book._flat550=true;
    if(bag.cfg) Object.assign(book.cfg, bag.cfg);
    if(bag.seq) state.seq=bag.seq;
    if(bag.savedAt) book.savedAt=bag.savedAt;
    if(snap.serverAt || bag.serverAt) state._serverAt=snap.serverAt||bag.serverAt||Date.now();
    if(snap.loop==="server") state._serverAt=state._serverAt||Date.now();
    if(bag.ticket) state.ticket=bag.ticket;
    if(bag.ohlc) state.ohlc=bag.ohlc;
    if(bag.shift){
      shift.step=bag.shift.step||shift.step;
      shift.room=bag.shift.room||shift.room;
      shift.tag=bag.shift.tag||"";
      shift.line=bag.shift.line||shift.line;
      shift.lane=bag.shift.lane||0;
      shift._mint=bag.shift.mint||"";
    }
  }
  if(snap.brain){
    Object.assign(brain, snap.brain);
    if(!brain.memory) brain.memory={};
    if(!brain.inbox) brain.inbox=[];
    if(!brain.huddles) brain.huddles=[];
    if(!brain.agents) brain.agents={};
    if(!brain.funnel) brain.funnel={scanned:0,cleared:0,confirmed:0,filled:0,skipped:0,reported:0};
    if(!brain.creators) brain.creators={};
    if(!brain.threads) brain.threads={};
    if(!brain.intel) brain.intel={};
    if(!brain.handles) brain.handles={};
    if(!brain.desk) brain.desk={riskPct:1.2,hires:[],lock:0,peakEq:0,lastHire:0};
    if(!Array.isArray(brain.desk.hires)) brain.desk.hires=[];
    if(!brain.pulse) brain.pulse={go:0.5,t:0,why:"cold"};
    if(!brain.day) brain.day={key:"",pnl:0,trades:0,halted:false,streak:0,cooldownUntil:0};
    if(brain.day.streak==null) brain.day.streak=0;
    if(!brain.briefs) brain.briefs=[];
  }
  book.cfg.liveSend=false; book.cfg.canWithdraw=false;
  return true;
}
function idbPut(snap){
  try{
    const req=indexedDB.open("gs-desk",1);
    req.onupgradeneeded=()=>{ req.result.createObjectStore("kv"); };
    req.onsuccess=()=>{
      try{ req.result.transaction("kv","readwrite").objectStore("kv").put(snap, "desk"); }catch(_){}
    };
  }catch(_){}
}
function idbGet(){
  return new Promise(resolve=>{
    try{
      const req=indexedDB.open("gs-desk",1);
      req.onupgradeneeded=()=>{ req.result.createObjectStore("kv"); };
      req.onsuccess=()=>{
        try{
          const g=req.result.transaction("kv").objectStore("kv").get("desk");
          g.onsuccess=()=>resolve(g.result||null);
          g.onerror=()=>resolve(null);
        }catch(_){ resolve(null); }
      };
      req.onerror=()=>resolve(null);
    }catch(_){ resolve(null); }
  });
}
let _flushT=0;
let _flushSnap=null;
function queueDeskFlush(snap){
  _flushSnap=snap;
  clearTimeout(_flushT);
  _flushT=setTimeout(()=>{
    const body=_flushSnap;
    _flushSnap=null;
    if(!body) return;
    fetch("/api/tape?src=desk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)}).catch(()=>{});
  },1500);
}
function flushDeskNow(){
  if(!_flushSnap) return;
  const body=_flushSnap;
  _flushSnap=null;
  clearTimeout(_flushT);
  try{
    navigator.sendBeacon && navigator.sendBeacon("/api/tape?src=desk", new Blob([JSON.stringify(body)],{type:"application/json"}));
  }catch(_){
    fetch("/api/tape?src=desk",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body),keepalive:true}).catch(()=>{});
  }
}
window.__gsFlushNow = flushDeskNow;
function markSaved(ok){
  const el=document.getElementById("saveChip");
  if(!el) return;
  el.textContent=ok?("DISK "+new Date().toLocaleTimeString("en-GB",{hour12:false})): "DISK FAIL";
  el.style.color=ok?"var(--lime)":"var(--red)";
}
function deskStamp(snap){
  if(!snap || snap.empty) return 0;
  return +(snap.savedAt || (snap.bookBag&&snap.bookBag.savedAt) || (snap.brain&&snap.brain.savedAt) || 0);
}
function deskScore(snap){
  if(!snap || snap.empty) return -1;
  const bag=snap.bookBag||snap.book||{};
  const br=snap.brain||{};
  const f=br.funnel||{};
  return (bag.bought||0)*300 + (bag.sold||0)*300 + ((bag.positions||[]).length)*120
    + (f.filled||0)*200 + (f.confirmed||0)*20 + (f.cleared||0)*8 + (f.scanned||0)
    + (br.seen||0) + (br.win||0)*50 + Math.round(Math.abs(+(bag.realized||0))*20)
    + Object.keys(br.memory||{}).length + Object.keys(br.creators||{}).length*3
    + ((br.lessons||[]).length);
}
function betterSnap(a, b){
  if(!a || a.empty) return b||null;
  if(!b || b.empty) return a;
  if(a.loop==="server" && b.loop!=="server") return a;
  if(b.loop==="server" && a.loop!=="server") return b;
  const sa=deskScore(a), sb=deskScore(b);
  if(sa!==sb) return sa>sb ? a : b;
  return deskStamp(a)>=deskStamp(b) ? a : b;
}
function serverLive(){
  return Date.now()-(state._serverAt||0)<20000;
}
function clawUnitJumps(){
  let claw=0;
  const buys=(book.trades||[]).filter(t=>t.side==="buy");
  (book.trades||[]).forEach(t=>{
    if(t.side!=="sell" || t._clawed) return;
    const buy=buys.filter(b=>(t.mint&&b.mint?b.mint===t.mint:b.sym===t.sym) && b.t<t.t).pop();
    if(!buy || !(buy.px>0) || !(t.px>0)) return;
    const pr=t.px/buy.px;
    const mr=(buy.mc>0 && t.mc>0)? t.mc/buy.mc : 1;
    if(pr>8 && mr<2 && t.pnl>2){
      claw+=t.pnl;
      t.pnl=0;
      t.px=buy.px;
      t.notional=+(buy.notional||0)*(t.kind==="trim"?0.7:1);
      t._clawed=true;
      t.why=(t.why||"")+" · clawed unit jump";
    } else if(Math.abs(+t.pnl||0) > Math.max(5, Math.min(+(buy.notional||25), +(t.notional||25))*1.15)){
      const cost=Math.min(Math.abs(+buy.notional||25), Math.abs(+t.notional||0)+Math.abs(+t.pnl||0));
      const expect=mr>0 ? cost*(mr-1) : Math.max(-cost, +t.pnl);
      const cap=Math.max(-cost, Math.min(cost*6, expect));
      if(Math.abs((+t.pnl)-cap)>1){
        claw+=(+t.pnl)-cap;
        t.pnl=cap;
        t._clawed=true;
        t.why=(t.why||"")+" · clawed to MC";
      }
    }
  });
  if(!(claw>0)) return 0;
  book.cash=Math.max(0, (book.cash||0)-claw);
  book.realized=(book.realized||0)-claw;
  log("QUANT","clawed $"+claw.toFixed(2)+" fake unit-jump pnl (price jumped, MC did not)","no");
  talk("RISK","unit jump clawed — marks must track MC, not mixed Dex/curve px");
  return claw;
}
function clawFakeFdv(){
  let claw=0;
  (book.trades||[]).forEach(t=>{
    if(t.side!=="sell" || t._fdvClaw) return;
    if(!(t.entryMc>0) || !(t.exitMc>0) || t.exitMc<t.entryMc*2.2) return;
    const live=t.mint ? +((coinByMint(t.mint)||{}).usd_market_cap || (coinByMint(t.mint)||{}).market_cap_usd || 0) : 0;
    const entry=+t.entryMc;
    if(!(live>0) || Math.abs(live-entry)/entry>0.2) return;
    if(t.exitMc<=live*2.2) return;
    const buy=(book.trades||[]).filter(b=>b.side==="buy" && ((t.mint&&b.mint===t.mint)||b.sym===t.sym) && b.t<t.t).pop();
    const cost=+(buy&&buy.notional>0?buy.notional:MIN_BUY);
    const real=cost*(live/entry-1);
    const delta=(+t.pnl||0)-real;
    if(Math.abs(delta)<5) return;
    t.pnl=real;
    t.exitMc=live;
    t.mc=live;
    t._fdvClaw=true;
    t._clawed=true;
    t.why=(t.why||"")+" · clawed fake dex fdv";
    claw+=delta;
  });
  if(!(claw>0)) return 0;
  book.cash=Math.max(0,(book.cash||0)-claw);
  book.realized=(book.realized||0)-claw;
  Object.values(brain.memory||{}).forEach(m=>{
    if((m.pnl||0)>400) m.pnl=0;
  });
  ["huntThin","dump","exitTp","follow","tapePump","mid"].forEach(k=>{
    const s=brain.patterns&&brain.patterns[k];
    if(s && Math.abs(s.ema||0)>60) s.ema=Math.max(-20, Math.min(20, s.ema*0.1));
  });
  log("QUANT","clawed $"+claw.toFixed(2)+" fake Dex FDV — pump MC never made that move","no");
  talk("RISK","Dex FDV is not MC — MUSHU-style 5x clawed");
  return claw;
}
function clawMcJumps(){
  let claw=0;
  (book.trades||[]).forEach(t=>{
    if(t.side!=="sell" || t._clawed || t.ape) return;
    const e=+t.entryMc||0, x=+t.exitMc||0, pnl=+t.pnl||0;
    if(!(e>0) || !(x>0) || pnl<50) return;
    if(x/e<=3) return;
    const hold=+t.holdMin||0;
    if(hold>30 && x/e<8) return;
    t._clawed=true;
    t.pnl=0;
    t.why=(t.why||"")+" · CLAWED "+(x/e).toFixed(1)+"x MC jump";
    claw+=pnl;
  });
  if(!(claw>0)) return 0;
  book.cash=Math.max(MIN_BUY,(book.cash||0)-claw);
  book.realized=(book.realized||0)-claw;
  log("QUANT","clawed $"+claw.toFixed(2)+" impossible MC jump — KIRK-style","no");
  talk("RISK","clawed $"+claw.toFixed(0)+" fake MC jump — not a real runner");
  return claw;
}
function trimBookCap(){
  const cap=deskMaxPos();
  const live=(book.positions||[]).filter(p=>!p.moon && !p.holdX);
  if(live.length<=cap) return;
  const flat=live.filter(p=>Math.abs(mcRatio(p)-1)<0.03).sort((a,b)=>(a.opened||"").localeCompare(b.opened||""));
  let n=live.length;
  for(const p of flat){
    if(n<=cap) break;
    if(closePos(p.id, "book cap "+cap+" — extra flat bag")) n--;
  }
}
async function hydrateDesk(){
  let remote=null, idb=null;
  try{ const r=await fetch("/api/tape?src=desk"); if(r.ok) remote=await r.json(); }catch(_){}
  try{ idb=await idbGet(); }catch(_){}
  const localSnap={
    savedAt:_bootLocalAt,
    bookBag:{
      savedAt:_bootLocalAt,
      cash:book.cash,start:book.start,positions:book.positions,journal:book.journal,
      feesPaid:book.feesPaid,tickets:book.tickets,refused:book.refused,
      bought:book.bought,sold:book.sold,realized:book.realized,trades:book.trades,
      cfg:book.cfg,seq:state.seq,ticket:state.ticket,ohlc:state.ohlc, _flat550:!!book._flat550,
      shift:{step:shift.step,room:shift.room,tag:shift.tag,line:shift.line,lane:shift.lane,mint:shift._mint||""}
    },
    brain
  };
  const best=betterSnap(betterSnap(localSnap, idb), remote);
  if(best && best!==localSnap){
    applyDesk(best);
  }
  _ready=true;
  applyBankroll();
  clawUnitJumps();
  sanitizeDesk();
  ensurePaperWallet();
  renderWatch();
  if((book.bought||0)===0){
    Object.values(brain.memory||{}).forEach(m=>{
      if((m.fills||0)===0 && (m.veto||0)>1){ m.veto=1; if(m.last==="veto") m.last="seen"; }
    });
  }
  replayChat();
  replayJournal();
  updateBook(); renderPos(); renderPipe(); renderLearn(); renderHuddle(); renderTrench(); renderShift(); renderHistory();
  persist();
  if(best && best!==localSnap){
    log("SYSTEM","desk restored from disk · cash $"+book.cash.toFixed(2)+" · buys "+(book.bought||0)+" sells "+(book.sold||0));
  }
}
function esc(s){
  return String(s == null ? "" : s)
    .replace(/&/g, "&" + "amp;")
    .replace(/</g, "&" + "lt;")
    .replace(/>/g, "&" + "gt;")
    .replace(/"/g, "&" + "quot;")
    .replace(/'/g, "&#39;");
}
function b58rand(n){
  const abc="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  const a=new Uint8Array(n);
  try{ crypto.getRandomValues(a); }catch(_){ for(let i=0;i<n;i++) a[i]=Math.floor(Math.random()*256); }
  let s="";
  for(let i=0;i<n;i++) s+=abc[a[i]%58];
  return s;
}
function ensurePaperWallet(){
  book.wallet=book.wallet||{};
  if(book.wallet.kind==="phantom" && book.wallet.pubkey && String(book.wallet.pubkey).length>=32){
    book.cfg.watchAddr=book.wallet.pubkey;
    book.cfg.canWithdraw=false;
    return book.wallet.pubkey;
  }
  if(!book.wallet.pubkey || String(book.wallet.pubkey).length<32){
    book.wallet={ chain:"solana", kind:"paper", pubkey:b58rand(44), t:Date.now() };
  }
  book.wallet.kind=book.wallet.kind||"paper";
  book.wallet.chain="solana";
  book.cfg.watchAddr=book.wallet.pubkey;
  book.cfg.canWithdraw=false;
  return book.wallet.pubkey;
}
function paperSig(){ return b58rand(88); }
function phantomOk(){
  try{
    const p=window.solana;
    return !!(p && p.isPhantom && p.publicKey);
  }catch(_){ return false; }
}
function phantomPk(){
  try{ return window.solana && window.solana.publicKey ? String(window.solana.publicKey.toString()) : ""; }
  catch(_){ return ""; }
}
async function connectPhantom(){
  const p=window.solana;
  if(!p || !p.isPhantom){
    toast("Open this app in Chrome/Brave with Phantom — preview iframe has no wallet");
    talk("RISK","Phantom not injected — live swaps need a real browser tab");
    return false;
  }
  try{
    const res=await p.connect();
    const pk=String((res&&res.publicKey)||p.publicKey);
    book.wallet={chain:"solana", kind:"phantom", pubkey:pk, t:Date.now()};
    book.cfg.watchAddr=pk;
    book.cfg.canWithdraw=false;
    persist(); renderWatch(); renderLive();
    toast("PHANTOM "+pk.slice(0,4)+"…"+pk.slice(-4));
    talk("HEAD","Phantom connected "+pk.slice(0,4)+"…"+pk.slice(-4)+" — live still OFF until you arm it");
    return true;
  }catch(e){
    toast("Phantom rejected");
    return false;
  }
}
function disconnectPhantom(){
  try{ window.solana && window.solana.disconnect && window.solana.disconnect(); }catch(_){}
  book.cfg.liveSend=false;
  book.cfg.liveAuto=false;
  book.wallet={chain:"solana", kind:"paper", pubkey:b58rand(44), t:Date.now()};
  book.cfg.watchAddr=book.wallet.pubkey;
  persist(); renderWatch(); renderLive();
  toast("disconnected · paper wallet");
}
function b64toBytes(b64){
  const bin=atob(b64);
  const out=new Uint8Array(bin.length);
  for(let i=0;i<bin.length;i++) out[i]=bin.charCodeAt(i);
  return out;
}
function wantLive(){
  return !!(book.cfg.liveSend && phantomOk());
}
function wantLiveFill(t){
  if(!wantLive() || !t) return false;
  if(t.side==="sell") return false;
  return !!(book.cfg.liveAuto || t.manual);
}
function wantLiveSell(pos){
  return !!(wantLive() && pos && pos.live && pos.rawOut);
}
async function liveSwap(opts){
  opts=opts||{};
  const mint=String(opts.mint||"");
  const side=opts.side==="sell"?"sell":"buy";
  const pk=phantomPk();
  if(!phantomOk() || !pk) return {ok:false, err:"Phantom not connected"};
  if(!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(mint)) return {ok:false, err:"bad CA"};
  let amount=String(opts.raw||"");
  if(side==="buy"){
    const sol=solUsd();
    const usd=+opts.usd||0;
    if(!(sol>1) || !(usd>=MIN_BUY)) return {ok:false, err:"need SOL mark and $"+MIN_BUY};
    amount=String(Math.max(1, Math.floor((usd/sol)*1e9)));
  }
  if(!/^\d+$/.test(amount) || amount==="0") return {ok:false, err:"bad swap amount"};
  const slip=String(Math.max(50, Math.min(250, +book.cfg.slipBps||100)));
  let quote;
  try{
    const r=await fetch("/api/tape?src=jup-quote&mint="+encodeURIComponent(mint)+"&side="+side+"&amount="+amount+"&slip="+slip);
    quote=await r.json();
    if(!r.ok || !quote || quote.error) return {ok:false, err:(quote&&quote.error)||"no Jupiter route"};
  }catch(_){ return {ok:false, err:"quote failed"}; }
  let built;
  try{
    const r=await fetch("/api/tape?src=jup-swap",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({quoteResponse:quote,userPublicKey:pk})});
    built=await r.json();
    if(!r.ok || !built || !built.swapTransaction) return {ok:false, err:(built&&built.error)||"swap build failed"};
  }catch(_){ return {ok:false, err:"swap build failed"}; }
  try{
    const mod=await import("@solana/web3.js");
    const tx=mod.VersionedTransaction.deserialize(b64toBytes(built.swapTransaction));
    const sent=await window.solana.signAndSendTransaction(tx);
    const sig=sent && (sent.signature||sent);
    return {ok:true, sig:String(sig||""), inAmount:quote.inAmount, outAmount:quote.outAmount, quote};
  }catch(e){
    return {ok:false, err:String(e&&e.message||e||"sign rejected")};
  }
}
function renderWatch(){
  ensurePaperWallet();
  const pk=book.wallet.pubkey;
  const el=document.getElementById("watchChip");
  if(el){ el.textContent="PAPER "+pk.slice(0,4)+"…"+pk.slice(-4); el.title=pk; }
  const btn=document.getElementById("walletCopy");
  if(btn){
    btn.textContent=pk.slice(0,6)+"…"+pk.slice(-6);
    btn.title="copy paper wallet  "+pk;
    btn.onclick=ev=>{ ev.preventDefault(); copyCa(pk); toast("PAPER WALLET  "+pk); };
  }
}
function pxSane(prev, next, mcPrev, mcNext){
  if(!(next>0) || !isFinite(next)) return prev||0;
  if(!(prev>0) || !isFinite(prev)) return next;
  const pr=next/prev;
  const mr=(mcPrev>0 && mcNext>0) ? (mcNext/mcPrev) : 1;
  if(pr>20 || pr<0.05) return prev;
  if(pr>2.5 && mr<1.35) return prev;
  if(pr<0.4 && mr>0.75) return prev;
  return next;
}
function holdAge(p){
  return p && p.opened ? Math.max(0, Date.now()-new Date(p.opened).getTime()) : 0;
}
function mcRatio(p){
  if(!p) return 1;
  const entry=+p.entryMc||0;
  const live=markOfPos(p);
  if(!(entry>0) || !(live>0) || !(p.avg>0)) return 1;
  const raw=live/entry;
  if(!isFinite(raw) || raw<=0) return 1;
  const age=holdAge(p);
  const c=coinOfPos(p);
  const pu=c?pumpUsd(c):0, dx=c?dexMark(c):0;
  const agree=pu>0 && dx>0 && Math.max(pu,dx)/Math.min(pu,dx)<1.4;
  if(raw>2.5 && age<120000 && !agree) return p._lastR>0?p._lastR:1;
  if(raw>6 && !agree) return p._lastR>0?p._lastR:1;
  p._lastR=raw;
  p.liveMc=live;
  return raw;
}
function posMark(p){
  if(!p || !(p.avg>0)) return 0;
  return p.avg*mcRatio(p);
}
function posPnl(p){
  if(!p || !(p.avg>0)) return 0;
  return p.qty*p.avg*(mcRatio(p)-1);
}
function keepOpenMarks(){
  (book.positions||[]).forEach(p=>{
    const c=coinOfPos(p);
    if(c){
      const mc=markOfPos(p);
      if(mc>0){
        if(!(p.entryMc>0)) p.entryMc=mc;
        p.liveMc=mc;
        state.mc=state.mc||{};
        state.mcMint=state.mcMint||{};
        if(p.mint) state.mcMint[p.mint]=mc;
        else state.mc[p.sym]=mc;
        pushBar(p.sym, mc);
      }
      const px=posMark(p);
      if(px>0){ state.prices[p.sym]=px; p.lastPx=px; }
    } else if(p.liveMc>0){
      const px=posMark(p);
      if(px>0){ state.prices[p.sym]=px; p.lastPx=px; }
    }
  });
}
function lastPxOf(sym){
  const p=(book.positions||[]).find(x=>x.sym===sym);
  if(p && p.lastPx>0) return p.lastPx;
  if(p && p.avg>0) return p.avg;
  return 0;
}
function mid(sym){
  const p=(book.positions||[]).find(x=>x.sym===sym);
  if(p){
    const m=posMark(p);
    if(m>0) return m;
  }
  const live=state.prices[sym];
  if(live>0 && isFinite(live)) return live;
  const last=lastPxOf(sym);
  if(last>0) return last;
  if(/^(BTC|ETH|SOL|DOGE|TSLA|NVDA|SPX)$/.test(sym)) return SEED[sym]||0;
  return 0;
}
function pumpTag(c){ if(!c) return ""; return (c.symbol||c.name||"UNK").replace(/[^A-Za-z0-9]/g,"").slice(0,10).toUpperCase() || "UNK"; }
function isMajor(c){
  return /^(SOL|WSOL|USDC|USDT|USD1|DAI|ETH|WETH|BTC|WBTC|JLP|JITOSOL|MSOL|CBBTC|USDS)$/.test(pumpTag(c));
}
function solUsd(){
  const n=+state.prices.SOL || SEED.SOL || 200;
  return n>1 ? n : 200;
}
function pumpUsd(c){
  if(!c) return 0;
  const n=+(c.usd_market_cap||c.market_cap_usd||0);
  return n>0 ? n : 0;
}
function dexPairMc(p){
  if(!p) return 0;
  const mc=+(p.marketCap||0);
  const fdv=+(p.fdv||0);
  const liq=+((p.liquidity&&p.liquidity.usd)||0);
  let use=mc>0?mc:0;
  if(use>0 && fdv>0 && fdv/use>1.8) use=mc;
  if(use>0 && liq>0 && use/liq>80) return 0;
  if(!(use>0) && fdv>0 && liq>0 && fdv/liq<40) use=fdv;
  return use>0 ? use : 0;
}
function dexMark(c){
  if(!c) return 0;
  const mc=+(c._dexMc||0);
  const fdv=+(c.fdv||0);
  const liq=coinLiq(c);
  if(!(mc>0)) return 0;
  if(fdv>0 && fdv/mc>1.8) return mc;
  if(liq>0 && mc/liq>80) return 0;
  return mc;
}
function tapeMc(c){
  const p=pumpUsd(c);
  if(p>0) return p;
  return dexMark(c);
}
function pumpMark(c){ return tapeMc(c); }
function mcRead(c){
  const pump=pumpUsd(c), dex=dexMark(c), tape=tapeMc(c);
  const band=mcBand(c);
  const src=pump>0?"pump": dex>0?"dex":"none";
  const lie=pump>0 && dex>0 && dex/pump>2.2;
  const vol=coinVol(c);
  const need=tape>=HIGH_MC?"high MC — only with strong vol": tape>=VOL_MC?"mid — needs good vol": "trench $15k–$2M hunt";
  const line="$"+pumpTag(c)+" "+src+" MC "+fmtMc(tape)+(lie?(" · IGNORE dex FDV "+fmtMc(dex)):(dex>0&&pump>0?" · dex "+fmtMc(dex):""))+" · "+band+" · "+need+(vol>0?(" · vol "+fmtMc(vol)):"");
  return {pump,dex,tape,band,src,lie,vol,need,line};
}
function markOfPos(p){
  if(!p) return 0;
  const c=coinOfPos(p);
  const src=p.entrySrc|| (c && pumpUsd(c)>0 ? "pump" : "dex");
  if(src==="dex"){
    const d=c?dexMark(c):0;
    return d>0 ? d : (+p.liveMc||+p.entryMc||0);
  }
  const u=c?pumpUsd(c):0;
  return u>0 ? u : (+p.liveMc||+p.entryMc||0);
}
const FLOOR_MC=15000, VOL_MC=2e6, HIGH_MC=5e6, MEGA_MC=20e6, MIN_BUY=150, MOON_X=4, DUST=40;
function justBonded(c){
  if(!c) return false;
  const born=+(c.created_timestamp||c.createdAt||0);
  if(!(born>0)) return false;
  const age=Date.now()-born;
  if(age<=0 || age>36*3600*1000) return false;
  const mc=pumpMark(c);
  if(mc>=HIGH_MC) return false;
  return !!c.complete || age<8*3600*1000;
}
function mcBand(c){
  const mc=pumpMark(c);
  if(justBonded(c) && mc<HIGH_MC) return "bonded";
  if(mc>0 && mc<VOL_MC) return "trench";
  if(mc<HIGH_MC) return "mid";
  return "high";
}
function huntBand(c){
  const mc=pumpMark(c);
  return mc>=FLOOR_MC && mc<HIGH_MC;
}
function lastPrintMs(c){
  let t=+(c&& (c.last_trade_timestamp||c.last_trade_time||c.lastTrade||0));
  if(!(t>0)) return 0;
  if(t<1e12) t*=1000;
  return t;
}
function printing(c){
  const t=lastPrintMs(c);
  if(t>0 && (Date.now()-t)<15*60*1000) return true;
  const m5=+(c&&c._m5Tx)||0;
  return m5>0;
}
function livePrint(c){
  const t=lastPrintMs(c);
  return t>0 && (Date.now()-t)<90*1000;
}
function scalpHot(c){
  if(!c || !tradableMc(c) || !liqOk(c)) return false;
  const mc=pumpMark(c);
  if(mc<FLOOR_MC || mc>=HIGH_MC) return false;
  const v=volRead(c);
  if(v.dead || (v.chop && v.heat<0.4)) return false;
  const vol=coinVol(c);
  if(!(livePrint(c) || printing(c))) return false;
  if(livePrint(c) && (v.expand || Math.abs(v.chg5)>=0.03) && vol>=Math.max(800, mc*0.008)) return true;
  if(v.heat>=0.42 && vol>=Math.max(2500, mc*0.02) && printing(c)) return true;
  return false;
}
function huntVol(c){
  if(!c || !huntBand(c)) return false;
  if(!liqOk(c)) return false;
  if(printing(c) || livePrint(c) || c.is_currently_live) return true;
  const v=volRead(c);
  if(v.dead) return false;
  if(v.chop && v.heat<0.32) return false;
  const mc=pumpMark(c);
  const vol=coinVol(c);
  if(vol>=Math.max(4000, mc*0.035) && volHot(c)) return true;
  if(v.expand && vol>=Math.max(1200, mc*0.01)) return true;
  return false;
}
function volStrong(c){
  const mc=Math.max(1, pumpMark(c));
  const vol=coinVol(c);
  const med=medianVol();
  const band=mcBand(c);
  if(band==="high") return vol>=Math.max(med*1.6, mc*0.015, 80000);
  if(band==="mid") return vol>=Math.max(med*1.15, mc*0.012, 25000);
  return vol>=Math.max(600, med*0.08);
}
function isTrench(c){
  if(!c || isMajor(c) || c.is_banned) return false;
  const mc=pumpMark(c);
  if(justBonded(c) && mc>=FLOOR_MC && mc<HIGH_MC) return true;
  return mc>=FLOOR_MC && mc<VOL_MC;
}
function tradableMc(c){
  if(!c || isMajor(c) || c.is_banned) return false;
  const mc=pumpMark(c);
  if(!(mc>0)) return false;
  if(mc<FLOOR_MC){
    const vol=coinVol(c);
    return !!(justBonded(c) && liqOk(c) && vol>=Math.max(8000, mc*0.25) && (printing(c)||volHot(c)));
  }
  if(mc>=HIGH_MC) return volStrong(c);
  if(mc>=VOL_MC) return volStrong(c) || (justBonded(c) && huntVol(c));
  return huntVol(c) || volHot(c) || printing(c) || (justBonded(c) && liqOk(c) && coinVol(c)>0);
}
function trenchRank(c){
  const mc=Math.max(FLOOR_MC, pumpMark(c)||FLOOR_MC);
  const vol=coinVol(c);
  return vol / Math.sqrt(mc);
}
function coinVol(c){
  if(!c) return 0;
  const h24=+(c.volume_24h||c.volume_usd||c.usd_volume||0);
  const h1=+(c.volume_1h||c.volume_h1||0);
  const h6=+(c.volume_6h||c.volume_h6||0);
  let fromObj=0;
  if(c.volume && typeof c.volume==="object"){
    fromObj=Math.max(+(c.volume.h24||0), +(c.volume.h1||0)*10, +(c.volume.h6||0)*3, +(c.volume.m5||0)*50);
  }
  const n=Math.max(fromObj, h24, h1*10, h6*3);
  if(n>0 && n<1e12) return n;
  if(+c.volume>0 && +c.volume<1e12 && typeof c.volume==="number") return +c.volume;
  return 0;
}
function coinLiq(c){
  if(!c) return 0;
  if(c.liquidity && typeof c.liquidity==="object"){
    const u=+(c.liquidity.usd||0);
    if(u>0) return u;
  }
  const dex=+(c.liquidity_usd||c.liquidityUsd||c.liq||0);
  if(dex>0) return dex;
  const sol=(+(c.real_sol_reserves||0)+ +(c.virtual_sol_reserves||0))/1e9;
  const px=solUsd();
  if(sol>0 && px>0) return sol*px;
  return 0;
}
function liqOk(c){
  const liq=coinLiq(c);
  if(liq>=MIN_BUY*4) return true;
  if(pumpMark(c)>=FLOOR_MC && printing(c)) return true;
  return false;
}
function pctFrac(n){
  const x=+n||0;
  if(!(x)) return 0;
  return Math.abs(x)>2 ? x/100 : x;
}
function retStdev(rets){
  if(!rets || rets.length<2) return 0;
  const m=rets.reduce((s,x)=>s+x,0)/rets.length;
  const v=rets.reduce((s,x)=>s+(x-m)*(x-m),0)/(rets.length-1);
  return Math.sqrt(Math.max(0,v));
}
function stampChg(c, pair){
  if(!c || !pair) return;
  const pc=pair.priceChange||{};
  if(pc.m5!=null) c.chg5=+pc.m5;
  if(pc.m15!=null) c.chg15=+pc.m15;
  if(pc.h1!=null) c.chg1h=+pc.h1;
  if(pc.h6!=null) c.chg6h=+pc.h6;
  if(pc.h24!=null) c.chg24=+pc.h24;
  c._vol=null;
}
function volRead(c){
  if(!c) return {sigma:0,range:0,chg5:0,chg1h:0,chg24:0,chop:false,expand:false,dead:true,heat:0,t:0};
  if(c._vol && Date.now()-(c._vol.t||0)<4000) return c._vol;
  const tag=pumpTag(c);
  const bars=typeof barsOf==="function"?barsOf(tag):[];
  const rets=[];
  let hi=0, lo=Infinity;
  (bars||[]).forEach(b=>{
    const px=+b.c||0;
    if(px>0){
      hi=Math.max(hi, +b.h||px);
      lo=Math.min(lo, +b.l||px);
    }
  });
  for(let i=1;i<(bars||[]).length;i++){
    const a=+bars[i-1].c||0, b=+bars[i].c||0;
    if(a>0 && b>0) rets.push((b-a)/a);
  }
  const sigma=Math.min(0.8, retStdev(rets));
  const range=lo>0 && hi>lo ? Math.min(2,(hi-lo)/lo) : 0;
  const chg5=pctFrac(c.chg5);
  const chg1h=pctFrac(c.chg1h);
  const chg24=pctFrac(c.chg24);
  const net=Math.abs(chg1h) || (rets.length?Math.abs(rets.reduce((s,x)=>s+x,0)):0);
  const chop=sigma>=0.04 && net<sigma*0.45;
  const expand=range>=0.08 || Math.abs(chg5)>=0.04 || Math.abs(chg1h)>=0.12 || sigma>=0.05;
  const dead=sigma<0.008 && Math.abs(chg1h)<0.02 && Math.abs(chg5)<0.015 && !printing(c);
  const heat=Math.max(0, Math.min(1,
    sigma*3.2 + Math.min(0.35, Math.abs(chg1h)) + (expand?0.18:0) + (printing(c)?0.12:0) - (chop?0.22:0) - (dead?0.35:0)
  ));
  const out={sigma,range,chg5,chg1h,chg24,chop,expand,dead,heat,t:Date.now()};
  c._vol=out;
  return out;
}
function coinVolat(c){
  const v=volRead(c);
  return v.sigma || Math.abs(v.chg1h) || (printing(c)?0.04:0);
}
function volHot(c){
  const v=volRead(c);
  if(v.dead) return false;
  return v.expand || v.heat>=0.28 || v.sigma>=0.03 || (printing(c) && Math.abs(v.chg1h)>=0.04);
}
function medianVol(){
  const vs=(state.coins||[]).filter(c=>pumpMark(c)<VOL_MC).map(coinVol).filter(v=>v>0).sort((a,b)=>a-b);
  if(!vs.length){
    const all=(state.coins||[]).map(coinVol).filter(v=>v>0).sort((a,b)=>a-b);
    if(!all.length) return 5000;
    return all[Math.floor(all.length/2)]||5000;
  }
  return vs[Math.floor(vs.length/2)]||5000;
}
function solCap(){
  const sol=solUsd() || +state.prices.SOL || 0;
  return Math.max(MIN_BUY, 250, sol>1?sol:250);
}
function rosterList(){
  const base=state.view==="farm"?FARM_AGENTS: state.view==="alpha"?ALPHA_AGENTS: state.view==="night"?NIGHT_AGENTS: FLOOR_AGENTS;
  const extra=((brain.desk&&brain.desk.hires)||[]).filter(h=>h && h.id);
  return base.concat(extra);
}
function hired(id){ return ((brain.desk&&brain.desk.hires)||[]).some(h=>h.id===id); }
const BENCH = [
  {id:"SCOUT2",color:"#8fe08a",hair:"#142010",body:"#1a3a22",role:"extra scout"},
  {id:"AUDIT2",color:"#f6a05a",hair:"#2a1408",body:"#3a2010",role:"extra audit"},
  {id:"SIZE",color:"#f0d080",hair:"#2a2010",body:"#3a3010",role:"ticket size"},
  {id:"LOCK",color:"#9ed8b0",hair:"#102018",body:"#183028",role:"lock profit"},
  {id:"FLOW2",color:"#6ee0e8",hair:"#082028",body:"#103038",role:"extra flow"},
  {id:"SNIPER2",color:"#ff9944",hair:"#201000",body:"#3a1808",role:"second fill"},
  {id:"XRAY",color:"#c8a0ff",hair:"#201030",body:"#281838",role:"X / wallets"},
  {id:"COACH2",color:"#d4af37",hair:"#1a120c",body:"#2a2410",role:"second coach"}
];
function winRate(){
  const sells=(book.trades||[]).filter(t=>t.side==="sell" && Math.abs(+t.pnl||0)>=0.35);
  if(sells.length>=2) return sells.filter(t=>t.pnl>0).length/sells.length;
  return 0.5;
}
function hourPnl(){
  const since=Date.now()-60*60*1000;
  return (book.trades||[]).filter(t=>{
    if(t.side!=="sell" || t.t<since || t._clawed || t.ape || t.kind==="ape") return false;
    const pnl=Math.abs(+t.pnl||0);
    if(pnl<0.15) return false;
    if((+t.notional||0)>=400) return false;
    if(pnl>((+t.notional||0)*8+5)) return false;
    return true;
  }).reduce((s,t)=>s+(+t.pnl||0),0);
}
function hourPace(){
  const pnl=hourPnl();
  const aim=35, min=25, max=50;
  return {pnl, aim, min, max, behind:pnl<min, hungry:pnl<aim, enough:pnl>=max};
}
function hourWr(){
  const now=Date.now();
  const sells=(book.trades||[]).filter(t=>t.side==="sell" && !t._clawed && Math.abs(+t.pnl||0)>=0.2 && t.t && now-t.t<3600000);
  if(sells.length<6) return winRate();
  return sells.filter(t=>t.pnl>0).length/sells.length;
}
function deskHealth(){
  const eq=Math.max(0, equity());
  const peak=Math.max(eq, (brain.desk&&brain.desk.peakEq)||eq);
  const dd=(peak-eq)/Math.max(1,peak);
  const hour=hourPace();
  const wr=hourWr();
  const bleed=hour.pnl<-150 || dd>0.15;
  const hungry=true;
  return {eq, peak, dd, wr, hour, bleed, defend:false, hungry};
}
function deskMode(){
  const h=deskHealth();
  const eq=h.eq;
  const start=book.start||1000;
  const day=rollDay();
  if(day){ day.halted=false; day.cooldownUntil=0; }
  if(h.defend) return "defend";
  if(h.hungry) return "hunt";
  if(winRate()>=0.45 && eq>start*0.95 && h.dd<0.12) return "attack";
  return "hunt";
}
function callDesk(){
  const h=deskHealth();
  const pb=brain.playbook=brain.playbook||{};
  if(h.defend){
    pb.mode="defend";
    pb.sizeMul=1;
    pb.tpPct=Math.min(+(pb.tpPct||0.18), 0.14);
    pb.slPct=0.10;
    pb.needYes=4;
    pb.needHunt=true;
    pb.minScore=0.42;
    if(Date.now()-(pb._callAt||0)>40000){
      pb._callAt=Date.now();
      const line="DEFEND · hour $"+h.hour.pnl.toFixed(0)+" / $25–50 goal · WR "+(h.wr*100).toFixed(0)+"% · 4 yes + heat";
      lesson("HEAD","study",line,{});
      talk("HEAD","hour goal $25–50 — now $"+h.hour.pnl.toFixed(0)+" · DEFEND spray");
      talk("LOCK","park cash — only heat that can print the hour");
      talk("RISK","no size-up until WR pays the $25–50/h");
      talk("EXIT","full TP / hard −10% — no dust leftovers");
      talk("QUANT","fade chop / thin / twins — copy expand hunt");
      say("HEAD","GOAL $25–50/h · PLAN DEFEND");
      share("HEAD","desk",line);
    }
  } else {
    pb.needYes=2;
    pb.needHunt=false;
    if((pb.minScore||0)>0.28) pb.minScore=0.22;
    pb.mode=h.hungry?"hunt":(pb.mode==="defend"?"hunt":(pb.mode||"hunt"));
    if(h.hungry && Date.now()-(pb._callAt||0)>18000){
      pb._callAt=Date.now();
      const line="PROOF $25–50/h · now $"+h.hour.pnl.toFixed(0)+" · bags "+livePosCount()+"/"+deskMaxPos();
      lesson("HEAD","study",line,{});
      talk("HEAD","PRINT OR REPLACE — $25–50/h now $"+h.hour.pnl.toFixed(0)+" · hires "+((brain.desk&&brain.desk.hires)||[]).length);
      talk("SNIPER","faster fills — huddle with HEAD, don't sit");
      talk("EXIT","bank +20% / flatten −10% — clear the hour");
      if(((brain.desk&&brain.desk.hires)||[]).length<6) talk("HEAD","hire more or cut dead weight — no passengers");
      talk("EXIT","bank +20% / flatten −10% — clear the hour");
      say("HEAD","GOAL $25–50/h · HUNGRY PROOF");
      share("HEAD","desk",line);
    }
  }
}
function agentTuneStops(){
  const pb=brain.playbook=brain.playbook||{};
  const sells=(book.trades||[]).filter(t=>t.side==="sell" && !t._clawed && Math.abs(+t.pnl||0)>=0.2).slice(0,48);
  let tp=+(pb.tpPct||0.25);
  let sl=+(pb.slPct||0.10);
  if(sells.length>=4){
    const wr=sells.filter(t=>t.pnl>0).length/sells.length;
    const stops=sells.filter(t=>/hard stop/i.test(t.why||""));
    const dumps=stops.filter(t=>{
      const a=+t.entryMc||0, b=+t.exitMc||+t.mc||0;
      return a>0 && b>0 && b/a<0.78;
    });
    const wins=sells.filter(t=>t.pnl>0);
    const loss=sells.filter(t=>t.pnl<0);
    const avg=a=>a.length?a.reduce((s,t)=>s+(+t.pnl||0),0)/a.length:0;
    const avgW=avg(wins), avgL=Math.abs(avg(loss));
    if(dumps.length>=3 && stops.length && dumps.length>=stops.length*0.35){
      sl=0.10;
      if(Date.now()-(pb._tuneAt||0)>45000){ lesson("QUANT","study","MC dumps — keep SL 10% flatten first print",{}); talk("QUANT","SL locked 10% — first print through, out"); }
    }
    if(wr<0.36){
      tp=Math.max(0.20, tp-0.01);
      sl=0.10;
      if(Date.now()-(pb._tuneAt||0)>45000){ lesson("EXIT","study","WR cold "+(wr*100).toFixed(0)+"% — still bank 20% / SL 10%",{}); talk("EXIT","WR cold — full TP 20% / SL 10%"); }
    } else if(wr>=0.48){
      tp=Math.min(0.28, tp+0.01);
      sl=0.10;
      if(Date.now()-(pb._tuneAt||0)>45000){ lesson("HEAD","study","WR paying "+(wr*100).toFixed(0)+"% — give runners "+(tp*100).toFixed(0)+"%",{}); talk("HEAD","WR good — let TP sit at "+(tp*100).toFixed(0)+"%"); }
    }
    if(avgL>0 && avgW>0 && avgL>avgW*1.35){
      sl=0.10;
      if(Date.now()-(pb._tuneAt||0)>45000){ lesson("RISK","study","avg loss $"+avgL.toFixed(1)+" > win $"+avgW.toFixed(1)+" — keep 10% flatten",{}); talk("RISK","losers bigger than winners — full close at −10%"); }
    }
  }
  const changed=Math.abs(tp-(pb.tpPct||0))>0.004 || Math.abs(sl-(pb.slPct||0))>0.004;
  pb.tpPct=Math.max(0.20, Math.min(0.28, tp));
  pb.slPct=0.10;
  pb.slPct=Math.max(0.10, Math.min(0.12, sl));
  pb.scalpTp=Math.max(0.10, Math.min(0.30, pb.tpPct*0.82));
  pb.scalpSl=pb.slPct;
  pb.trail=Math.max(0.08, Math.min(0.16, pb.slPct+0.02));
  let sm=+(pb.sizeMul||1);
  if(sells.length>=4){
    const wr=sells.filter(t=>t.pnl>0).length/sells.length;
    if(wr<0.36) sm=Math.min(sm, 1);
    else if(wr>=0.55) sm=Math.min(1.55, sm+0.08);
    else if(wr>=0.48) sm=Math.min(1.35, Math.max(sm, 1.15));
  }
  pb.sizeMul=Math.max(0.9, Math.min(1.6, sm));
  if(changed) pb._tuneAt=Date.now();
}
function profitPlan(){
  callDesk();
  const mode=deskMode();
  const pb=brain.playbook||{};
  const pace=hourPace();
  const defend=mode==="defend";
  const tp=defend?Math.max(+(pb.tpPct||0.18),0.18):Math.max(+(pb.tpPct||0.20),0.20);
  const sl=0.10;
  return {
    mode,
    tp,
    sl,
    trail: +(pb.trail||0.12),
    moonTrail: 0.18,
    moonShare: 0.30,
    moonX: MOON_X,
    trimFrac: 0.50,
    holdMs: defend?6*60*1000:(pb.staleMs||8*60*1000),
    huntMs: defend?10*60*1000:15*60*1000,
    scalpTp: defend?0.12:+(pb.scalpTp||0.20),
    scalpSl: sl,
    scalpMs: defend?6*60*1000:10*60*1000,
    minScore: 0.22,
    trenchOnly: false,
    needYes: 2,
    needHunt: false
  };
}
function cashVault(){
  const start=book.start||1000;
  const base=Math.max(MIN_BUY*4, start*0.18);
  if(deskMode()==="defend") return Math.max(base, Math.min((book.cash||0)*0.22, equity()*0.22));
  return base;
}
function spendable(){
  return Math.max(0, (book.cash||0)-cashVault());
}
function workingExposure(){
  return (book.positions||[]).filter(p=>!p.holdX).reduce((s,p)=>s+Math.abs((p.qty||0)*(p.avg||0)),0);
}
function burnGate(c){
  if(spendable()<MIN_BUY) return "vault — keep $"+cashVault().toFixed(0)+" dry powder";
  if(livePosCount()>=deskMaxPos()) return "book full — "+deskMaxPos()+" bags";
  if(workingExposure()>equity()*0.45) return "heat cap — too much working risk";
  if(c){
    const mc=pumpMark(c);
    if(mc>0){
      const cluster=(book.positions||[]).filter(p=>{
        if(p.holdX || !(p.entryMc>0)) return false;
        return Math.abs(p.entryMc-mc)/mc<0.18;
      }).length;
      if(cluster>=2) return "already 2 bags in this MC cluster";
    }
  }
  return null;
}
function deskCeil(){
  return Math.max(MIN_BUY, Math.min(solCap(), spendable()));
}
function deskMaxPos(){ return 13; }
function livePosCount(){ return (book.positions||[]).filter(p=>!p.moon && !p.holdX).length; }
function isHuntPos(p){
  if(!p || p.holdX) return false;
  if(p.feat && p.feat.huntVol) return true;
  const e=+p.entryMc||0;
  return e>=FLOOR_MC && e<HIGH_MC;
}
function sanitizeDesk(){
  brain._heeReopen="off";
  dropHeeHaw();
  clawFakeFdv();
  clawMcJumps();
  trimBookCap();
  brain.desk=brain.desk||{riskPct:1.4,hires:[],lock:0,peakEq:0,lastHire:0};
  const seen={};
  const keep=[];
  (book.positions||[]).forEach(p=>{
    const k=p.mint||p.id;
    if(seen[k]) return;
    seen[k]=1;
    keep.push(p);
  });
  if(keep.length!==(book.positions||[]).length) book.positions=keep;
  (book.positions||[]).forEach(p=>{
    const cost=Math.abs((p.qty||0)*(p.avg||0));
    if(cost>0 && cost<DUST && !p._dust){ p._force="dust $"+cost.toFixed(2)+" — flatten"; p._dust=1; }
  });
  const eq=Math.max(0, equity());
  const start=book.start||1000;
  const cap=Math.max(eq, start)*1.25;
  if((brain.desk.peakEq||0)>cap){
    brain.desk.peakEq=Math.max(eq, start);
    brain.desk.lock=0;
  }
  if((brain.desk.lock||0)>eq*0.4) brain.desk.lock=0;
  if((brain.desk.riskPct||0)<2) brain.desk.riskPct=2;
  const day=brain.day;
  if(day && Math.abs(day.pnl||0)>Math.abs(book.realized||0)+80){
    day.pnl=book.realized||0;
    day.halted=false;
  }
}
function ticketSize(){
  sanitizeDesk();
  callDesk();
  const pb=brain.playbook=brain.playbook||{};
  const wr=hourWr();
  const pace=hourPace();
  const spend=spendable();
  let mul=+(pb.sizeMul||1);
  if(deskMode()==="defend" || wr<0.36) mul=1;
  else if(wr>=0.55) mul=Math.max(mul, 1.35);
  else if(wr>=0.48) mul=Math.max(mul, 1.2);
  if(pace.enough) mul=Math.min(mul, 1);
  const n=MIN_BUY*mul;
  return Math.max(MIN_BUY, Math.min(solCap(), n, deskCeil(), spend));
}
function hireOntoFloor(a){
  if(!a || state.agents[a.id]) return;
  makeAgent(a);
  const s=seatOf(a.id);
  go(a.id, s.x, s.y, true);
  const roster=document.getElementById("roster");
  if(roster && !document.getElementById("r-"+a.id)){
    const seat=document.createElement("div");
    seat.className="seat";
    seat.id="r-"+a.id;
    seat.innerHTML=`<div class="dot" style="background:${a.color}"></div>${esc(a.id)}<span>${esc(a.role||"hire")}</span>`;
    roster.appendChild(seat);
  }
}
function maybeHire(){
  brain.desk=brain.desk||{riskPct:1.2,hires:[],lock:0,peakEq:0,lastHire:0};
  if(!Array.isArray(brain.desk.hires)) brain.desk.hires=[];
  maybeFire();
  if((brain.desk.hires||[]).length>=8) return;
  if(Date.now()-(brain.desk.lastHire||0)<40000) return;
  const pace=hourPace();
  const wr=hourWr();
  const taken=new Set((brain.desk.hires||[]).map(h=>h.id));
  const pick=()=>BENCH.find(b=>!taken.has(b.id));
  let next=null;
  if(pace.behind && !hired("SCOUT2")) next=BENCH.find(b=>b.id==="SCOUT2");
  else if(pace.behind && !hired("SNIPER2")) next=BENCH.find(b=>b.id==="SNIPER2");
  else if(wr<0.4 && !hired("LOCK")) next=BENCH.find(b=>b.id==="LOCK");
  else if((livePosCount()>=4 || wr>=0.48) && !hired("SIZE")) next=BENCH.find(b=>b.id==="SIZE");
  else if(!hired("FLOW2")) next=BENCH.find(b=>b.id==="FLOW2");
  else if(!hired("XRAY")) next=BENCH.find(b=>b.id==="XRAY");
  else if(pace.hungry) next=pick();
  if(!next || taken.has(next.id)) next=pick();
  if(!next) return;
  if(!pace.behind && !pace.hungry && (brain.desk.hires||[]).length>=4) return;
  brain.desk.hires.push({id:next.id,color:next.color,hair:next.hair,body:next.body,role:next.role,t:Date.now()});
  brain.desk.lastHire=Date.now();
  hireOntoFloor(next);
  lesson("HEAD","hire","hired "+next.id+" — "+next.role+" · desk in control",{});
  talk("HEAD","HIRE "+next.id+" — "+next.role+" · they asked for help on the $25–50/h");
  say("HEAD","HIRE "+next.id);
  share("HEAD","desk","hired "+next.id);
}
function maybeFire(){
  const hires=brain.desk.hires||[];
  if(Date.now()-(brain.desk.lastFire||0)<60000) return;
  const pace=hourPace();
  const wr=hourWr();
  const lastSell=((book.trades||[]).find(t=>t.side==="sell" && !t._clawed)||{}).t||0;
  const lastMs=lastSell>1e12?lastSell: lastSell>1e9?lastSell*1000:lastSell;
  const stale=lastMs && (Date.now()-lastMs)>8*60*1000;
  const replace=pace.behind && (stale || wr<0.32);
  if(!replace && !(pace.enough && hires.length>4)) return;
  if(hires.length<1 && !replace) return;
  const drop=hires.filter(h=>h && h.id!=="SIZE" && h.id!=="LOCK" && h.id!=="SNIPER2").slice(-1)[0];
  if(drop){
    brain.desk.hires=hires.filter(h=>h.id!==drop.id);
    brain.desk.lastFire=Date.now();
    talk("HEAD","REPLACED "+drop.id+" — print $25–50/h or you sit the bench");
    lesson("HEAD","hire","replaced "+drop.id+" — not printing",{});
  }
  const taken=new Set((brain.desk.hires||[]).map(h=>h.id));
  const add=BENCH.find(b=>!taken.has(b.id) && (b.id==="SNIPER2"||b.id==="SCOUT2"||b.id==="FLOW2"));
  if(add && replace){
    brain.desk.hires.push({id:add.id,color:add.color,hair:add.hair,body:add.body,role:add.role,t:Date.now()});
    brain.desk.lastHire=Date.now();
    hireOntoFloor(add);
    talk("HEAD","HIRE "+add.id+" — new blood, same $25–50/h");
  }
  try{ layout(); }catch(_){}
}
function expandDesk(){
  sanitizeDesk();
  brain.desk=brain.desk||{riskPct:1.4,hires:[],lock:0,peakEq:0,lastHire:0};
  const eq=equity();
  const start=book.start||1000;
  brain.desk.peakEq=Math.max(Math.min(brain.desk.peakEq||start, Math.max(eq,start)*1.25), eq);
  const gain=Math.max(0, Math.min(eq, brain.desk.peakEq)-start);
  brain.desk.lock = gain>40 ? Math.round(Math.min(eq*0.25, start+gain*0.2)*100)/100 : 0;
  const wr=winRate();
  const n=realSellCount();
  const dd=(brain.desk.peakEq-eq)/Math.max(1, brain.desk.peakEq);
  const day=rollDay();
  const mode=deskMode();
  let pct=brain.desk.riskPct||1.4;
  const pace=hourPace();
  if(pace.behind){
    if(Date.now()-(brain.desk.lastSizeBump||0)>45000){
      brain.desk.lastSizeBump=Date.now();
      lesson("HEAD","study","HOUR $"+pace.pnl.toFixed(0)+" / $25–50 — hunt vol to print the hour",{});
      say("HEAD","GOAL $25–50/h · need $"+Math.max(0,pace.min-pace.pnl).toFixed(0)+" more");
      talk("COACH","hour behind — only $15k+ vol that can pay $25–50");
    }
  } else if(pace.hungry){
    if(Date.now()-(brain.desk.lastSizeBump||0)>60000){
      brain.desk.lastSizeBump=Date.now();
      say("HEAD","GOAL $25–50/h · $"+pace.pnl.toFixed(0)+" so far — keep hunting");
    }
  } else if(pace.enough){
    if(Date.now()-(brain.desk.lastSizeBump||0)>60000){
      brain.desk.lastSizeBump=Date.now();
      say("HEAD","hour printed $"+pace.pnl.toFixed(0)+" · bank and stay selective");
    }
  } else if(mode==="attack"){
    pct=Math.min(2.4, Math.max(1.4, pct+0.06));
    if(Date.now()-(brain.desk.lastSizeBump||0)>60000){
      brain.desk.lastSizeBump=Date.now();
      lesson("QUANT","study","ATTACK size "+pct.toFixed(1)+"% · wr "+(wr*100).toFixed(0)+"%",{});
      if(hired("SIZE")) say("SIZE","BUMP "+pct.toFixed(1)+"%");
    }
  } else {
    pct=Math.max(1.3, Math.min(2.2, pct*0.5+1.6*0.5));
  }
  brain.desk.riskPct=Math.max(0.9, Math.min(2.6, pct));
  maybeHire();
}
function realSellCount(){
  return (book.trades||[]).filter(t=>t.side==="sell" && Math.abs(+t.pnl||0)>=0.35).length;
}
function share(who, topic, text){
  brain.inbox=brain.inbox||[];
  const row={t:Date.now(),who,topic:String(topic||"desk").slice(0,16),text:String(text||"").slice(0,140)};
  brain.inbox.unshift(row); if(brain.inbox.length>40) brain.inbox.pop();
}
const SCORE_W={ audit:0.30, narrative:0.25, timing:0.15, metrics:0.30 };
const MIN_SCORE=0.42;
const RISK={
  dailyLoss:90, maxTrades:9999, maxPos:999, cooldownAfter:6, cooldownMs:2*60*1000,
  remainingShare:0.30, exposurePct:0.85, trailPct:0.10, tightenPct:0.06, maxHoldMs:8*60*1000, moonX:4
};
function dayKey(){ return new Date().toISOString().slice(0,10); }
function rollDay(){
  brain.day=brain.day||{key:"",pnl:0,trades:0,halted:false,streak:0,cooldownUntil:0};
  const k=dayKey();
  if(brain.day.key!==k){ brain.day={key:k,pnl:0,trades:0,halted:false,streak:0,cooldownUntil:0}; }
  brain.day.halted=false;
  brain.day.cooldownUntil=0;
  return brain.day;
}
function coolingDown(){ return false; }
function cooldownLeft(){
  const d=brain.day||{};
  return Math.max(0, (d.cooldownUntil||0)-Date.now());
}
function remainingLossBudget(){
  const d=rollDay();
  return Math.max(0, RISK.dailyLoss + Math.min(0, d.pnl||0));
}
function bookExposure(){
  return workingExposure();
}
function creatorOf(addr){
  if(!addr) return null;
  brain.creators=brain.creators||{};
  return brain.creators[addr]=brain.creators[addr]||{addr,n:0,rugs:0,pnl:0,last:0,seen:0,bought:0};
}
function markCreator(addr, pnl){
  const cr=creatorOf(addr); if(!cr) return;
  cr.n++; cr.pnl+=pnl; cr.last=Date.now();
  if(pnl < -0.12) cr.rugs++;
}
function creatorBlocked(c){
  const cr=c && c.creator && brain.creators && brain.creators[c.creator];
  if(!cr) return null;
  if(cr.rugs>=2) return "creator memory — rugged "+cr.rugs+"×";
  if(book.positions.some(p=>p.creator && c.creator && p.creator===c.creator)) return "one position per creator";
  return null;
}
function threadOf(mint){
  if(!mint) return {mint:"?", msgs:[]};
  brain.threads=brain.threads||{};
  return brain.threads[mint]=brain.threads[mint]||{mint,tag:"",msgs:[],score:null,addr:mint};
}
function postThread(c, who, kind, text, extra){
  const mint=(c&&c.mint)||pumpTag(c)||"?";
  const th=threadOf(mint);
  if(th.addr && c && c.mint && th.addr!==c.mint){
    log("ARCHIVE","address drift $"+pumpTag(c)+" thread "+String(th.addr).slice(0,6)+" vs "+String(c.mint).slice(0,6),"no");
    return th;
  }
  th.addr=th.addr||mint;
  th.tag=pumpTag(c)||th.tag;
  th.msgs.unshift({t:Date.now(),who,kind,text:String(text||"").slice(0,140),mint});
  if(th.msgs.length>12) th.msgs.pop();
  if(extra && extra.score) th.score=extra.score;
  share(who, pumpTag(c)||mint.slice(0,6), text);
  return th;
}
function pulseSignal(){
  const sol=state.prices.SOL||SEED.SOL||200;
  const bars=typeof barsOf==="function"?barsOf("SOL"):[];
  const chg=bars.length>3 && bars[0].o ? (bars[bars.length-1].c-bars[0].o)/bars[0].o : 0;
  const launches=(state.coins||[]).filter(c=>!c.complete && (Date.now()-(c.created_timestamp||0)<30*60000)).length;
  const volMed=medianVol();
  let go=0.5 + Math.max(-0.25, Math.min(0.25, chg*4));
  if(launches>=8) go+=0.08;
  if(launches<=2) go-=0.12;
  if(volMed<800) go-=0.08;
  if(brain.day) brain.day.halted=false;
  go=Math.max(0.35, Math.min(0.95, go));
  const why= go>0.55 ? "tape live — hunt" : "mixed tape — still hunting";
  brain.pulse={go, t:Date.now(), why, launches, chg};
  return brain.pulse;
}
function unixSec(t){
  let n=+t||0;
  if(!(n>0) || !isFinite(n)) return 0;
  while(n>1e12) n/=1000;
  return n;
}
function parseTapeTrade(t){
  if(!t || typeof t!=="object") return null;
  const ts=unixSec(t.timestamp||t.time||t.slot||0);
  const type=String(t.type||t.txType||"").toLowerCase();
  const isBuy = t.is_buy!=null ? !!t.is_buy : !/sell/i.test(type);
  const wallet=String(t.userAddress||t.user||t.traderPublicKey||t.traderPublic||t.trader||t.wallet||t.maker||t.owner||t.userPublicKey||"");
  return {
    wallet,
    isBuy,
    sol:+(t.sol_amount||t.solAmount||t.amountSol||t.sol||0),
    usd:+(t.amountUsd||t.usd||t.tokenAmountUsd||t.usd_amount||t.amount_usd||t.priceInUsd||t.totalUsd||0),
    ts
  };
}
function parseHolder(h){
  if(!h || typeof h!=="object") return null;
  const share=h.share!=null ? +h.share : (h.percentage!=null ? +h.percentage/100 : 0);
  return {
    address:String(h.address||h.wallet||h.owner||""),
    share:share||0,
    isCreator:!!(h.is_creator||h.isCreator)
  };
}
function analyzeCoin(c){
  const trades=(c&&c._trades||[]).map(parseTapeTrade).filter(Boolean);
  const holders=(c&&c._holders||[]).map(parseHolder).filter(Boolean);
  const buys=trades.filter(t=>t.isBuy);
  const sells=trades.filter(t=>!t.isBuy);
  const wallets=new Set(trades.map(t=>t.wallet).filter(Boolean));
  const top5=holders.slice().sort((a,b)=>b.share-a.share).slice(0,5).reduce((s,h)=>s+h.share,0);
  const creatorShare=holders.find(h=>h.isCreator || (c.creator && h.address===c.creator))?.share || 0;
  const born=unixSec(c.created_timestamp||c.createdAt||0);
  const early=born ? buys.filter(t=>t.ts && t.ts<=born+20) : [];
  const sniperWallets=new Set(early.map(t=>t.wallet).filter(Boolean));
  const snipers=sniperWallets.size;
  const earlySol=early.reduce((s,t)=>s+(t.sol||t.usd||0),0);
  const allSol=buys.reduce((s,t)=>s+(t.sol||t.usd||0),0)||1;
  const sniperShare=earlySol/allSol;
  const sniperDump=[...sniperWallets].filter(w=>sells.some(t=>t.wallet===w && t.ts && t.ts<=born+180)).length;
  const sizes=early.map(t=>t.sol||t.usd).filter(v=>v>0);
  let clones=0;
  if(sizes.length>=4){
    const sorted=sizes.slice().sort((a,b)=>a-b);
    const mid=sorted[Math.floor(sorted.length/2)]||1;
    clones=sizes.filter(a=>Math.abs(a-mid)/mid<0.08).length;
  }
  let uniqueness=0, concentration=1;
  if(buys.length){
    const vol={};
    buys.forEach(t=>{ if(t.wallet) vol[t.wallet]=(vol[t.wallet]||0)+(t.sol||t.usd||1); });
    const vals=Object.values(vol);
    const tot=vals.reduce((s,v)=>s+v,0)||1;
    uniqueness = Object.keys(vol).length/buys.length;
    concentration = Math.max(0,...vals)/tot;
  }
  const diversity=Math.max(0, Math.min(1, uniqueness*(1-concentration)));
  const amounts=buys.map(t=>t.sol||t.usd).filter(v=>v>0);
  let wash=false, coordinated=false, bundled=false;
  if(amounts.length>=4){
    const sorted=amounts.slice().sort((a,b)=>a-b);
    const mid=sorted[Math.floor(sorted.length/2)]||1;
    const clones=amounts.filter(a=>Math.abs(a-mid)/mid<0.08).length;
    if(clones>=4) wash=true;
  }
  if(buys.length>=3){
    const stamped=buys.filter(t=>t.ts).sort((a,b)=>a.ts-b.ts);
    for(let i=1;i<stamped.length;i++){
      const dt=stamped[i].ts-stamped[i-1].ts;
      const a=stamped[i].sol||stamped[i].usd, b=stamped[i-1].sol||stamped[i-1].usd;
      if(dt>0 && dt<5 && a>0 && b>0 && Math.abs(a-b)/Math.max(a,b)<0.05 && stamped[i].wallet!==stamped[i-1].wallet){
        coordinated=true; break;
      }
    }
  }
  if(c.creator && born){
    bundled = early.some(t=>t.wallet===c.creator) || buys.some(t=>t.wallet===c.creator && t.ts && t.ts<=born+15);
  }
  const sniperHot = snipers>=7 || (bundled && snipers>=3) || (clones>=5 && snipers>=4) || (sniperShare>=0.55 && snipers>=5);
  const sniperFarm = snipers>=10 || (sniperDump>=4 && snipers>=6) || (bundled && clones>=6);
  const ratio = sells.length ? buys.length/sells.length : buys.length;
  let risk=0;
  risk += Math.min(3, top5*3.75);
  risk += Math.min(3, creatorShare*10);
  risk += Math.min(3, snipers*0.28);
  if(sniperHot) risk+=1.5;
  if(sniperFarm) risk=Math.max(risk, 8.5);
  risk += (1-diversity)*1.5;
  if(trades.length && trades.length<8) risk += 1;
  if(wash) risk=Math.max(risk, 8);
  if(coordinated) risk=Math.max(risk, 8.5);
  if(creatorShare>=0.25 || top5>=0.80) risk=10;
  const quality=Math.max(0, Math.min(1, 1-risk/10));
  const met={
    unique:wallets.size, buys:buys.length, sells:sells.length, ratio, snipers,
    sniperShare, sniperDump, clones, sniperHot, sniperFarm,
    diversity, top5, creatorShare, wash, coordinated, bundled, risk, quality,
    traded:!!(c&&c._traded)
  };
  if(c){
    c._metrics=met;
    c._flow=flowRead(c);
  }
  return met;
}
function tradeUsd(t){
  if(!t) return 0;
  if(t.usd>0) return +t.usd;
  const sol=solUsd();
  if(t.sol>0 && sol>1) return t.sol*sol;
  return +(t.sol||0);
}
function flowRead(c){
  const raw=(c&&c._trades||[]).map(parseTapeTrade).filter(Boolean).sort((a,b)=>(a.ts||0)-(b.ts||0));
  if(!raw.length) return {ready:false, delta:0, delta60:0, cvd:0, lastBuy:true, sellPrint:false, sweep:false, absorb:false, exitLiq:false, n:0};
  const now=Date.now()/1000;
  let cvd=0, d30=0, d60=0, buyUsd=0, sellUsd=0;
  raw.forEach(t=>{
    const n=tradeUsd(t);
    const s=t.isBuy?n:-n;
    cvd+=s;
    if(t.isBuy) buyUsd+=n; else sellUsd+=n;
    if(t.ts && now-t.ts<=30) d30+=s;
    if(t.ts && now-t.ts<=60) d60+=s;
  });
  const last=raw[raw.length-1];
  const recent=raw.filter(t=>t.ts && now-t.ts<=30);
  const byW={};
  recent.filter(t=>t.isBuy).forEach(t=>{ if(t.wallet) byW[t.wallet]=(byW[t.wallet]||0)+tradeUsd(t); });
  const buy30=recent.filter(t=>t.isBuy).reduce((s,t)=>s+tradeUsd(t),0)||1;
  const top=Math.max(0, ...Object.values(byW), 0);
  const sweep=top/buy30>=0.45 && Object.keys(byW).length<=3 && buy30>1;
  const absorb=!sweep && recent.filter(t=>t.isBuy).length>=4 && d30>0;
  const tape=tapeRead(pumpTag(c));
  const exitLiq=(tape.pump || tape.chg>0.04) && d60<0;
  const out={ready:true, delta:d30, delta60:d60, cvd, lastBuy:!!last.isBuy, lastUsd:tradeUsd(last), sellPrint:!last.isBuy, sweep, absorb, exitLiq, n:raw.length, buyUsd, sellUsd};
  if(c) c._flow=out;
  return out;
}
function isDerivative(c){
  const name=((c&&c.name)||"")+" "+((c&&c.symbol)||"");
  if(/\b(2\.0|v2|copy|clone|baby|mini)\b/i.test(name)) return true;
  const koth=state.koth && pumpTag(state.koth);
  if(koth && pumpTag(c)!==koth && new RegExp(koth,"i").test(name) && name.length>koth.length+2) return true;
  return false;
}
function scorePacket(c){
  const hint=walletHint(c);
  const feat=featuresOf(c);
  const tape=tapeRead(pumpTag(c));
  const vol=coinVol(c);
  const med=medianVol();
  const mem=c.mint && brain.memory[c.mint];
  const ageMin=c.created_timestamp?(Date.now()-c.created_timestamp)/60000:999;
  const met=c._metrics || analyzeCoin(c);
  let audit=0.55;
  if(hint.dump>=2) audit-=0.28;
  if(hint.follow>=1) audit+=0.18;
  if(feat.boost) audit-=0.12;
  if(c.creator && (brain.creators[c.creator]||{}).rugs) audit-=0.2*(brain.creators[c.creator].rugs);
  if(mem && mem.pnl<-0.05) audit-=0.15;
  if(met.wash) audit=Math.min(audit, 0.15);
  if(met.coordinated) audit=Math.min(audit, 0.12);
  if(met.bundled) audit-=0.22;
  if(met.snipers>=6) audit-=0.12;
  audit=Math.max(0, Math.min(1, audit));
  let narrative= feat.social?0.62:0.32;
  const intel=intelOf(c);
  const name=(c.name||c.symbol||"");
  if(/inu|pepe|elon|trump|ai|hood|sol/i.test(name)) narrative+=0.06;
  if(!c.description && !c.image_uri) narrative-=0.18;
  if(feat.live) narrative+=0.1;
  if(intel && intel.hasX) narrative+=0.06;
  const hrep=intel&&intel.handle && (brain.handles||{})[String(intel.handle).toLowerCase()];
  if(hrep && (hrep.wins||0)>(hrep.losses||0)) narrative+=0.08;
  if(intel && intel.followers>=1000) narrative+=0.06;
  if(intel && intel.followers>=10000) narrative+=0.08;
  if(intel && intel.hasTg) narrative+=0.03;
  if(isDerivative(c)) narrative*=0.7;
  narrative=Math.max(0, Math.min(1, narrative));
  const pulse=pulseSignal();
  let timing=pulse.go;
  if(tape.dump) timing-=0.2;
  if(tape.pump) timing+=0.12;
  if(justBonded(c)) timing+=0.08;
  timing=Math.max(0, Math.min(1, timing));
  let metrics= met.traded ? met.quality : 0.4;
  metrics += Math.min(0.22, Math.log10(1+vol)/10);
  if(vol>med) metrics+=0.10;
  if(feat.graduated) metrics+=0.08;
  if(ageMin<2 && !c.complete) metrics-=0.15;
  if(ageMin>2 && ageMin<180) metrics+=0.08;
  if(huntBand(c) && printing(c)) metrics+=0.18;
  if(huntBand(c)) metrics+=0.08;
  const vr=volRead(c);
  metrics+=Math.min(0.12, vr.heat*0.18);
  if(vr.expand) metrics+=0.08;
  if(vr.chop) metrics-=0.10;
  if(vr.dead) metrics-=0.16;
  if(met.ratio>=1.4) metrics+=0.08;
  if(met.ratio>0 && met.ratio<0.6) metrics-=0.12;
  const curve=curvePct(c);
  if(!c.complete && curve>85) metrics-=0.08;
  metrics=Math.max(0, Math.min(1, metrics));
  const total=audit*SCORE_W.audit + narrative*SCORE_W.narrative + timing*SCORE_W.timing + metrics*SCORE_W.metrics;
  return {audit, narrative, timing, metrics, total, go:pulse.go, met};
}
function hardVeto(c, sc){
  if(!c) return "empty packet";
  const met=(sc&&sc.met)||c._metrics||analyzeCoin(c);
  if(met.wash) return "veto_wash_trading";
  if(met.coordinated && !huntVol(c)) return "veto_coordinated_buys";
  if(met.bundled && !huntVol(c)) return "veto_bundled_launch";
  if(met.creatorShare>=0.25 && !huntVol(c)) return "creator holds "+Math.round(met.creatorShare*100)+"%";
  if(met.top5>=0.80 && !huntVol(c)) return "top-5 wallets hold "+Math.round(met.top5*100)+"%";
  return null;
}
function flowVote(c){
  if(huntVol(c)){
    const hint=walletHint(c);
    const met=c._metrics||analyzeCoin(c);
    if(met.sniperFarm) return {ok:false, who:"FLOW", line:"sniper farm "+met.snipers+" bots"};
    if(hint.dump>=3 && hint.follow===0) return {ok:false, who:"FLOW", line:"dump wallets"};
    return {ok:true, who:"FLOW", line: met.snipers? ("$15k+ vol · "+met.snipers+" snipers"):"$15k+ vol · take it"};
  }
  const hint=walletHint(c);
  const met=c._metrics||analyzeCoin(c);
  const reasons=[];
  if(hint.dump>=2 && hint.follow===0) reasons.push("dump wallets");
  if(met.top5>=0.55) reasons.push("flow:top_concentration");
  if(met.snipers>=8) reasons.push("flow:sniper_share_high");
  if(met.bundled) reasons.push("flow:bundled_wallets");
  if(met.diversity<0.25 && met.traded) reasons.push("flow:low_diversity");
  const ok=reasons.length<=1;
  return {ok, who:"FLOW", line: ok ? ("distribution holds · uniq "+met.unique) : reasons[0]};
}
function socialVote(c){
  if(huntVol(c)) return {ok:true, who:"SHILL", line:"band vol — social later"};
  const feat=featuresOf(c);
  const reasons=[];
  if(!feat.social) reasons.push("social:author_count_low");
  if(isDerivative(c)) reasons.push("social:derivative");
  if(!c.description && !c.image_uri && !c.twitter) reasons.push("social:no_pulse");
  const ok=reasons.length<=2;
  return {ok, who:"SHILL", line: ok ? (feat.live?"live attention":"social clear") : reasons[0]};
}
function checkerVeto(c, sc){
  if(!sc) return "checker: empty packet — no";
  if(huntVol(c)){
    const hint=walletHint(c);
    if(hint.dump>=3 && hint.follow===0) return "checker: dump wallets, no follow — no";
    return null;
  }
  const hint=walletHint(c);
  if(hint.dump>=2 && hint.follow===0) return "checker: dump wallets, no follow — no";
  if(sc.audit<0.35) return "checker: audit too weak — no";
  if(sc.total<(profitPlan().minScore)) return "checker: score "+sc.total.toFixed(2)+" < "+profitPlan().minScore+" — no";
  if(sc.narrative>0.7 && sc.audit<0.4) return "checker: meme high, organics low — no";
  if(sc.metrics>0.7 && sc.audit<0.35) return "checker: curve good, concentration dumps — no";
  const th=c.mint && brain.threads[c.mint];
  const nos=(th&&th.msgs||[]).filter(m=>m.kind==="veto"||/no|kill|dump|rug/i.test(m.text||"")).length;
  if(nos>=3 && sc.total<0.40) return "checker: thread already has "+nos+" nos — no";
  return null;
}
function sizeFromScore(score){
  rollDay();
  const s=Math.max(0, Math.min(1, score||0));
  const conv=s>=0.68?1.5: s>=0.58?1.2:1;
  const room=Math.max(0, equity()*RISK.exposurePct - workingExposure());
  const spend=spendable();
  if(spend<MIN_BUY) return 0;
  if(room<MIN_BUY) return 0;
  const scaled=ticketSize()*conv*(0.9+s*0.3);
  const n=Math.min(solCap(), scaled, room, spend, deskCeil());
  if(n<MIN_BUY) return 0;
  return n;
}
function liveGate(c){
  if(book.cfg.canWithdraw) return "WITHDRAW KEY REJECTED";
  if(!c || !c.mint) return "no CA";
  const mc=pumpMark(c);
  if(!(mc>0)) return "no MC mark";
  if(mc<FLOOR_MC && !(justBonded(c) && coinVol(c)>=8000 && (printing(c)||volHot(c)))) return "sub $15k without vol";
  if(c._dexMc>0 && mc>0 && c._dexMc/mc>2.2) return "dex FDV lie — pump MC wins";
  if(!liqOk(c)) return "thin liq — no depth for $"+MIN_BUY;
  const fl=flowRead(c);
  if(fl.ready && fl.sellPrint && fl.delta60<0 && !huntVol(c) && !printing(c)) return "last print SELL — no new bag";
  if(fl.ready && fl.exitLiq && !huntVol(c)) return "CVD down / MC up — exit liquidity";
  const busy=mintBusy(c.mint);
  if(busy) return busy;
  if(livePosCount()>=deskMaxPos()) return "book full — "+deskMaxPos()+" bags";
  if(spendable()<MIN_BUY) return "vault — keep $"+cashVault().toFixed(0)+" dry powder";
  return null;
}
function liveAudit(){
  const p=profitPlan();
  const ph=phantomOk();
  return [
    {ok:!book.cfg.canWithdraw, k:"no spend key in app"},
    {ok:!!ph, k:ph?"Phantom connected":"connect Phantom"},
    {ok:!!book.cfg.liveSend && ph, k:book.cfg.liveSend?"live swaps armed":"live swaps OFF"},
    {ok:!book.cfg.liveAuto, k:book.cfg.liveAuto?"AUTO LIVE on — desk spends SOL":"auto fills still paper"},
    {ok:(book.cfg.feeBps||0)>=50, k:"fee "+(book.cfg.feeBps||0)+"bps"},
    {ok:MIN_BUY>=150, k:"size $"+MIN_BUY},
    {ok:deskMaxPos()<=13, k:"cap "+deskMaxPos()+" bags"},
    {ok:p.sl>=0.099, k:"SL "+(p.sl*100).toFixed(0)+"%"},
    {ok:p.tp>=0.199, k:"full TP "+(p.tp*100).toFixed(0)+"%"},
    {ok:FLOOR_MC>=15000, k:"$15k floor + vol"}
  ];
}
function renderLive(){
  const el=document.getElementById("liveChip") || document.getElementById("modeTag");
  const ph=phantomOk();
  let line="PAPER · live send OFF";
  if(ph && book.cfg.liveSend && book.cfg.liveAuto) line="LIVE AUTO · Phantom spending SOL";
  else if(ph && book.cfg.liveSend) line="LIVE ARMED · manual only · auto paper";
  else if(ph) line="PHANTOM · live still OFF";
  if(el){ el.textContent=line; el.title=liveAudit().map(x=>(x.ok?"ok":"NO")+" "+x.k).join(" · "); }
  const tag=document.getElementById("modeTag");
  if(tag) tag.textContent=book.cfg.liveSend?"LIVE":"PAPER";
}
function mintBusy(mint, selfId){
  mint=String(mint||"");
  if(!mint) return null;
  if(book.positions.some(p=>p.mint===mint)) return "already_open this CA";
  if(state.ticket && state.ticket.mint===mint && state.ticket.side==="buy" && state.ticket.id!==selfId) return "ticket on this CA";
  return null;
}
function stampMint(mint){
  if(!mint) return;
  state._fillMint=mint;
  state._fillAt=Date.now();
}
function riskGate(c, score){
  rollDay();
  const busy=c?mintBusy(c.mint):null;
  if(busy) return busy;
  const burn=burnGate(c);
  if(burn) return burn;
  if(book.cash < MIN_BUY) return "out_of_cash";
  const size=sizeFromScore(score);
  if(size<MIN_BUY-1e-9){
    if(spendable()<MIN_BUY) return "vault — keep $"+cashVault().toFixed(0)+" dry powder";
    if(workingExposure()>equity()*RISK.exposurePct-MIN_BUY) return "heat cap — too much working risk";
    return "LOCK parking size — not a kill";
  }
  return null;
}
function composeBrief(c){
  const mint=(c&&c.mint)||"";
  const th=threadOf(mint);
  const lines=(th.msgs||[]).slice().reverse().map(m=>m.who+" ["+m.kind+"] "+m.text);
  const brief={t:Date.now(), tag:pumpTag(c), mint, score:th.score, lines};
  brain.briefs=brain.briefs||[];
  brain.briefs.unshift(brief);
  if(brain.briefs.length>8) brain.briefs.pop();
  bumpFunnel("reported");
  return brief;
}
function bumpFunnel(k){
  brain.funnel=brain.funnel||{scanned:0,cleared:0,confirmed:0,filled:0,skipped:0,reported:0};
  brain.funnel[k]=(brain.funnel[k]||0)+1;
}
function funnelRates(){
  const f=brain.funnel||{};
  const scanned=f.scanned||0, cleared=f.cleared||0, confirmed=f.confirmed||0;
  return {
    scanned, cleared, confirmed,
    filled:f.filled||0, skipped:f.skipped||0, reported:f.reported||0,
    clearRate: scanned? cleared/scanned : 0,
    confirmRate: cleared? confirmed/cleared : 0
  };
}
function topRejects(n){
  return Object.entries(brain.reasons||{}).sort((a,b)=>b[1]-a[1]).slice(0, n||5);
}
function renderFunnel(){
  const el=document.getElementById("funnelBox"); if(!el) return;
  const r=funnelRates();
  const sc=shift.coin ? scorePacket(shift.coin) : null;
  const pulse=brain.pulse||{};
  const rejects=topRejects(3).map(([k,v])=>esc(String(v)+" "+k)).join(" · ") || "none";
  el.innerHTML = `<div class="funnel-stats">
    <div><em>${r.scanned}</em> scan</div>
    <div><em>${r.cleared}</em> clear</div>
    <div><em>${r.confirmed}</em> ok</div>
    <div><em>${r.filled}</em> fill</div>
  </div>
  <div class="meter"><span>CLEAR</span><div class="track"><i style="width:${Math.min(100,r.clearRate*100).toFixed(0)}%"></i></div><b>${(r.clearRate*100).toFixed(0)}%</b></div>
  <div class="meter"><span>PASS</span><div class="track"><i style="width:${Math.min(100,r.confirmRate*100).toFixed(0)}%"></i></div><b>${(r.confirmRate*100).toFixed(0)}%</b></div>
  <div class="rejects">pulse ${(pulse.go||0).toFixed(2)} · ${esc(pulse.why||"cold")} · min ${MIN_SCORE}</div>
  ${sc?`<div class="score-grid">
    <div>AUD <b>${sc.audit.toFixed(2)}</b></div>
    <div>NAR <b>${sc.narrative.toFixed(2)}</b></div>
    <div>TIM <b>${sc.timing.toFixed(2)}</b></div>
    <div>MET <b>${sc.metrics.toFixed(2)}</b></div>
    <div class="total">$${esc(shift.tag)} <b>${sc.total.toFixed(2)}</b></div>
  </div>`:'<div class="rejects">waiting packet</div>'}
  <div class="rejects">${rejects}</div>`;
}
function huddleSize(c){
  const mid=(c&&c.mint)||"";
  if(mid && state._hudd && state._hudd.mint===mid && Date.now()-state._hudd.t<2000) return state._hudd.h;
  callDesk();
  const plan=profitPlan();
  const tag=pumpTag(c);
  const vol=coinVol(c);
  const hint=walletHint(c);
  const tape=tapeRead(tag);
  const vr=volRead(c);
  const med=medianVol();
  const votes=[];
  const push=(who,mul,act,line)=>{ votes.push({who,mul,act,line}); };
  const defend=plan.mode==="defend";
  push("SEARCH", (printing(c)||huntVol(c)||vol>med*0.4)?1.2:0.9, (printing(c)||huntVol(c)||justBonded(c)||vol>0 || tapeMc(c)>=FLOOR_MC)?"buy":"pass",
    mcRead(c).line);
  if(hint.dump>=2 && hint.follow===0) push("WHALE",0.5,"pass","dump wallets, no follow");
  else if((c._metrics||{}).sniperFarm) push("WHALE",0.4,"pass","sniper farm "+((c._metrics||{}).snipers||0));
  else if((c._metrics||{}).sniperHot) push("WHALE",0.75,"buy","snipers "+((c._metrics||{}).snipers||0)+" — fade size");
  else if(hint.follow>=1) push("WHALE",1.4,"buy","follow "+hint.follow+" in $"+tag);
  else push("WHALE",1.0,"buy","first prints $"+tag);
  push("QUANT", tape.dump?0.55: vr.chop?0.7: vr.expand?1.35: vol>med?1.2:0.85, tape.dump||vr.dead || (defend&&vr.chop)?"pass":"buy",
    "σ "+(vr.sigma*100).toFixed(1)+"% "+(vr.expand?"EXPAND": vr.chop?"CHOP": vr.dead?"DEAD":tape.trend)+(defend?" · DEFEND":""));
  push("RISK", defend?0.85:1, (defend && !(huntVol(c)||volHot(c)||printing(c)))?"pass":"buy", "size $"+ticketSize().toFixed(0)+" · "+plan.mode);
  push("EXIT",1, tape.dump?"pass":"hold","TP "+(plan.tp*100).toFixed(0)+"% / SL "+(plan.sl*100).toFixed(0)+"% · "+plan.mode);
  if(hired("SIZE")){
    const wr=hourWr();
    push("SIZE", defend?0.9: wr>=0.55?1.45: wr>=0.48?1.25: wr<0.36?0.85:1.1, (wr<0.28 && !huntVol(c))?"pass":"buy", "SIZE "+((brain.playbook&&brain.playbook.sizeMul)||1).toFixed(2)+"x wr "+(wr*100).toFixed(0)+"%");
  }
  if(hired("LOCK") || spendable()<cashVault()*1.5){
    push("LOCK", defend?0.7:0.7, spendable()<MIN_BUY?"pass":"buy", "vault $"+cashVault().toFixed(0)+(defend?" · DEFEND":""));
  }
  if(hired("SCOUT2")) push("SCOUT2", 1.1, (printing(c)||huntVol(c)||tapeMc(c)>=FLOOR_MC)?"buy":"pass", mcRead(c).band+" · extra scout");
  if(hired("AUDIT2")) push("AUDIT2", 0.95, (c._metrics&&c._metrics.sniperFarm)?"pass":"buy", (c._metrics&&c._metrics.sniperFarm)?"farm":"second audit clean");
  if(hired("FLOW2")){
    const fl2=flowRead(c);
    push("FLOW2", (printing(c)||huntVol(c))?1.15:0.85, (fl2.ready && fl2.sellPrint && fl2.delta60<0)?"pass":"buy", "second flow");
  }
  if(hired("SNIPER2")) push("SNIPER2", 1.05, "buy", "second sniper ready $"+ticketSize().toFixed(0));
  if(hired("XRAY")) push("XRAY", intelOf(c)&&intelOf(c).handle?1.2:0.9, "buy", intelOf(c)&&intelOf(c).handle?("X @"+intelOf(c).handle):"X ray — still hunting");
  if(hired("COACH2")) push("COACH2", huntVol(c)?1.2:1.0, (huntVol(c)||printing(c)||tradableMc(c))?"buy":"pass", "proof $25–50/h");
  push("TAPE", printing(c)?1.2:0.75, (printing(c)||huntVol(c))?"buy":"pass", printing(c)?"live prints":"no print yet");
  {
    const fl=flowRead(c);
    if(fl.ready && (fl.exitLiq || (fl.sellPrint && fl.delta60<0))) push("FLOW",0.35,"pass","last print SELL · Δ60 "+fmtMc(fl.delta60));
    else if(fl.ready && fl.absorb && fl.delta>0) push("FLOW",1.35,"buy","ABSORB Δ30 +"+fmtMc(fl.delta));
    else if(fl.ready && fl.sweep) push("FLOW",0.65,"pass","SWEEP one wallet");
    else if(fl.ready) push("FLOW", fl.delta>0?1.2:0.75, fl.delta60<0?"pass":"buy", "Δ30 "+(fl.delta>=0?"+":"")+fmtMc(fl.delta));
    else push("FLOW", 1.0, (printing(c)||huntVol(c))?"buy":"pass", "flow "+(vol>0?fmtMc(vol):"prints"));
  }
  push("VERIFY", 0.9, (cheapKill(c)?"pass":"buy"), cheapKill(c)||"packet clean");
  push("CHIEF", huntVol(c)?1.15:0.7, huntVol(c)?"buy":(defend?"pass":"buy"), "route "+plan.mode);
  push("MACRO", defend?0.75:1, (defend && !huntVol(c))?"pass":"buy", "session "+plan.mode);
  push("SHILL", (intelOf(c)&&intelOf(c).handle)?1.15:0.85, "buy", intelOf(c)&&intelOf(c).handle?("X @"+intelOf(c).handle):"no X — still hunting");
  push("RUG", (hint.dump>=2 && hint.follow===0)?0.4:1, (hint.dump>=2 && hint.follow===0)?"pass":"buy", hint.dump>=2?"dump wallets":"LP watch ok");
  push("SNIPER", 1, "buy", "ready $"+ticketSize().toFixed(0)+" paper");
  push("ARCHIVE", 1, "hold", "log "+tokenSig(c));
  if(huntVol(c)){
    push("COACH",1.3,"buy","$15k+ + vol — desk wants it");
    push("HEAD",1.25,"buy","HUNGRY GOAL $25–50/h · TAKE $"+tag);
  } else if(histTwin(c)<=-8){
    push("COACH",0.35,"pass","twins lost — fade this packet");
    push("HEAD",0.4,"pass","learned skip $"+tag);
  } else if(defend && !(huntVol(c)||volHot(c)||printing(c))){
    push("COACH",0.5,"pass","DEFEND — no heat");
    push("HEAD",0.5,"pass","GOAL $25–50/h skip $"+tag);
  } else if(tradableMc(c) && liqOk(c)){
    push("COACH",1.05,"buy", mcRead(c).need);
    push("HEAD",1.0,"buy","GOAL $25–50/h · "+mcRead(c).line);
  } else {
    push("COACH",0.45,"pass", mcRead(c).line);
    push("HEAD",0.5,"pass","desk skip — "+mcRead(c).need);
  }
  const intel=intelOf(c);
  if(intel && intel.handle && ((brain.handles||{})[String(intel.handle).toLowerCase()]||{}).wins>0){
    push("SHILL",1.2,"buy","X @"+intel.handle+" paid before");
  }
  const buyN=votes.filter(v=>v.act==="buy").length;
  const passN=votes.filter(v=>v.act==="pass").length;
  const need=2;
  const headGo=votes.some(v=>v.who==="HEAD"&&v.act==="buy");
  const sniperGo=votes.some(v=>v.who==="SNIPER"&&v.act==="buy");
  const want=buyN>=need || (headGo && sniperGo);
  const mul=defend?Math.min(1, votes.reduce((s,v)=>s+v.mul,0)/Math.max(1,votes.length)) : votes.reduce((s,v)=>s+v.mul,0)/Math.max(1,votes.length);
  const size=Math.max(MIN_BUY, Math.min(solCap(), ticketSize()*mul, deskCeil(), spendable()));
  const hungry=hourPace().hungry||hourPace().behind;
  if(!hungry){
    votes.forEach(v=>{
      const bit=v.act==="pass"?"PASS": (v.act==="hold"?"HOLD":"$"+size.toFixed(0)+" BUY");
      say(v.who, "$"+tag+" "+v.line+" → "+bit);
      share(v.who, tag, v.line+" → "+bit);
      lesson(v.who,"huddle","$"+tag+" "+bit+" · "+v.line,{tag,mc:pumpMark(c)});
    });
  }
  say("HEAD", want? ("YES $"+tag+" "+buyN+" buy / "+passN+" pass"):("NO $"+tag+" "+buyN+" buy / "+passN+" pass — skip"));
  const hudd={t:Date.now(),tag,size,pass:!want,votes:votes.map(v=>v.who+":"+v.act),vol,buyN,passN};
  brain.huddles=brain.huddles||[]; brain.huddles.unshift(hudd); if(brain.huddles.length>24) brain.huddles.pop();
  renderHuddle();
  if(mid) state._hudd={mint:mid,t:Date.now(),h:hudd};
  return hudd;
}
function huddleHold(p){
  if(!p) return null;
  if(p.holdX) return null;
  if(p.moon){
    const hard=exitWhy(p);
    if(hard) return {verb:"CLOSE", why:hard};
    return null;
  }
  const hard=exitWhy(p);
  if(hard) return {verb:"CLOSE", why:hard};
  const c=coinOfPos(p);
  const pnl=posPnl(p);
  const notional=Math.abs(p.qty)*p.avg;
  const pct=notional>0?pnl/notional:0;
  const tape=tapeRead(p.sym);
  const hint=c?walletHint(c):{dump:0,follow:0};
  const vol=c?coinVol(c):0;
  const med=medianVol();
  const votes=[];
  const push=(who,act,line)=>{ votes.push({who,act,line}); };
  const plan=profitPlan();
  push("EXIT", pct>=plan.tp?"close": pct<=-plan.sl?"close": pct>=plan.tp*0.7?"tighten":"hold", pct>=plan.tp?"bank full TP":"still working");
  push("WHALE", hint.dump>=2&&hint.follow===0&&pct<=-0.04?"close":"hold", hint.dump>=2?"wallets dumping":"no dump");
  push("QUANT", (tape.dump&&pct<=-0.04)?"close":"hold", tape.dump?"tape dump":"vol "+fmtMc(vol));
  push("RISK", pct<=-plan.sl?"close": pct>=plan.tp?"tighten":"hold", pct<=-plan.sl?"cut heat":"hold size");
  push("SEARCH", justBonded(c)&&tape.pump?"hold":"hold", "re desk — "+(c?"mc "+fmtMc(pumpMark(c)):"open"));
  const closes=votes.filter(v=>v.act==="close").length;
  const trims=votes.filter(v=>v.act==="trim").length;
  const tights=votes.filter(v=>v.act==="tighten").length;
  votes.forEach(v=>{
    const verb=v.act==="close"?"CLOSE": v.act==="trim"?"TRIM": v.act==="tighten"?"TIGHTEN":"HOLD";
    say(v.who, "$"+p.sym+" "+v.line+" → "+verb);
    share(v.who, p.sym, v.line+" → "+verb);
  });
  const hudd={t:Date.now(),tag:p.sym,size:notional,pass:false,votes:votes.map(v=>v.who+":"+v.act),vol,hold:closes<3};
  brain.huddles=brain.huddles||[]; brain.huddles.unshift(hudd); if(brain.huddles.length>24) brain.huddles.pop();
  renderHuddle();
  if(closes>=3) return {verb:"CLOSE", why:"exit_manager CLOSE "+closes+"–"+(votes.length-closes)};
  if(trims>=2 && (p.partials||0)===0) return {verb:"CLOSE", why:"exit_manager TP CLOSE "+trims};
  if(tights>=2 && !(p.stopRaised)) return {verb:"TIGHTEN", why:"exit_manager TIGHTEN trail"};
  lesson("HEAD","hold","$"+p.sym+" HOLD "+(votes.length-closes)+"-"+closes,{tag:p.sym});
  say("HEAD","$"+p.sym+" HOLD — exit_manager "+(votes.length-closes)+" to "+closes);
  return null;
}
function renderHuddle(){
  const el=document.getElementById("huddleBox"); if(!el) return;
  const rows=(brain.huddles||[]).slice(0,6).map(h=>{
    return "$"+(h.tag||"?")+" "+(h.pass?"PASS":(h.hold?"HOLD":"$"+(+(h.size||0)).toFixed(0)))+" · "+(h.votes||[]).slice(0,3).join(" ");
  }).join("<br>");
  el.innerHTML = rows||"no huddle yet";
  renderFunnel();
}
function coinPx(c){
  if(!c) return 0;
  const usd=+c.priceUsd||0;
  if(usd>0) return usd;
  return 0;
}
function pumpPacket(c){
  const tag=pumpTag(c);
  const gh = [c.website,c.twitter,c.telegram].filter(Boolean).find(u=>/github\.com/i.test(u||"")) || "";
  const socials=[c.twitter,c.website,c.telegram].filter(Boolean);
  return {
    tag, mint:c.mint, name:c.name, mc:pumpMark(c),
    ageMin: c.created_timestamp ? Math.max(0,(Date.now()-c.created_timestamp)/60000) : null,
    socials, github:gh, replies:c.reply_count||0, complete:!!c.complete
  };
}
function equity(){
  return (book.cash||0)+book.positions.reduce((s,p)=>s+Math.abs(p.qty||0)*(p.avg||0)*mcRatio(p),0);
}
function unrealized(){ return book.positions.reduce((s,p)=>s+posPnl(p),0); }
function totalPnl(){ return (book.realized||0)+unrealized(); }
function tradePacket(sym, extra){
  extra=extra||{};
  const c=coinByMint(extra.mint)||coinByTag(sym);
  const intel=c?intelOf(c):null;
  const hint=c?walletHint(c):{follow:0,dump:0};
  const sc=c?scorePacket(c):null;
  const live=extra.exitMc || extra.mc || mcOf(sym, extra.mint) || (c?pumpMark(c):0);
  const entry=extra.entryMc || extra.mc || live;
  return {
    mint: extra.mint || (c&&c.mint) || "",
    mc: live,
    entryMc: entry,
    exitMc: live,
    vol: extra.vol || (c?coinVol(c):0),
    liq: extra.liq || (c?coinLiq(c):0),
    sigma: extra.sigma!=null?extra.sigma:(c?coinVolat(c):0),
    band: extra.band || (c?mcBand(c):""),
    handle: extra.handle || (intel&&intel.handle) || "",
    follow: extra.follow!=null?extra.follow:(hint.follow||0),
    dump: extra.dump!=null?extra.dump:(hint.dump||0),
    score: extra.score!=null?extra.score:(sc?sc.total:0),
    sig: extra.sig || tokenSig(c, extra),
    why: extra.why || "",
    kind: extra.kind || "",
    moon: !!extra.moon,
    holdMin: extra.holdMin || 0,
    opened: extra.opened || "",
    hunt: extra.hunt!=null?!!extra.hunt: isHuntEntry(entry)
  };
}
function isHuntEntry(mc){
  const e=+mc||0;
  return e>=FLOOR_MC && e<HIGH_MC;
}
function isHuntTrade(t){
  if(!t) return false;
  if(t.ape || t.kind==="ape") return false;
  if(t.hunt) return true;
  return isHuntEntry(t.entryMc||t.mc);
}
function huntStats(){
  const sells=(book.trades||[]).filter(t=>t.side==="sell" && isHuntTrade(t) && !t._clawed && Math.abs(+t.pnl||0)>=0.15);
  const wins=sells.filter(t=>t.pnl>0);
  const pnl=sells.reduce((s,t)=>s+(+t.pnl||0),0);
  const hold=sells.filter(t=>t.holdMin>0);
  const avgIn=sells.length? sells.reduce((s,t)=>s+(+t.entryMc||0),0)/sells.length : 0;
  const avgOut=sells.length? sells.reduce((s,t)=>s+(+t.exitMc||t.mc||0),0)/sells.length : 0;
  const open=(book.positions||[]).filter(isHuntPos).length;
  return {
    n:sells.length,
    wins:wins.length,
    losses:sells.length-wins.length,
    wr: sells.length? wins.length/sells.length : 0,
    pnl,
    avgHold: hold.length? hold.reduce((s,t)=>s+(+t.holdMin||0),0)/hold.length : 0,
    avgIn, avgOut, open
  };
}
function recordTrade(side, sym, px, pnl, notional, extra){
  book.trades=book.trades||[];
  const pkt=tradePacket(sym, extra);
  const row=Object.assign({t:Date.now(),side,sym,px:+px||0,pnl:+pnl||0,notional:+notional||0, wallet:ensurePaperWallet(), sig:paperSig(), venue:"paper"}, pkt);
  book.trades.unshift(row);
  if(book.trades.length>300) book.trades.length=300;
  pushBar("EQ", equity());
  renderHistory();
}
function histWhen(t){
  const d=new Date(t||Date.now());
  return d.toLocaleTimeString("en-GB",{hour12:false,hour:"2-digit",minute:"2-digit",second:"2-digit"});
}
function shortMint(m){
  const t=String(m||"");
  if(!t) return "—";
  if(t.length<12) return t;
  return t.slice(0,6)+"…"+t.slice(-4);
}
function copyCa(mint){
  const m=String(mint||"").trim();
  if(!m){ toast("no CA"); return false; }
  const done=()=>toast("CA copied  "+m);
  try{
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(m).then(done).catch(()=>{ fallback(); });
      return true;
    }
  }catch(_){}
  function fallback(){
    try{
      const ta=document.createElement("textarea");
      ta.value=m; ta.setAttribute("readonly","");
      ta.style.position="fixed"; ta.style.left="-9999px";
      document.body.appendChild(ta); ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      done();
    }catch(__){ toast("CA "+m); }
  }
  fallback();
  return true;
}
function caBits(mint){
  const m=String(mint||"");
  if(!m) return `<div class="mint">no CA</div>`;
  return `<div class="mint"><button type="button" class="ca-copy" data-mint="${esc(m)}" title="${esc(m)}">COPY CA ${esc(shortMint(m))}</button><a href="https://dexscreener.com/solana/${esc(m)}" target="_blank" rel="noreferrer">dex</a><a href="https://pump.fun/coin/${esc(m)}" target="_blank" rel="noreferrer">pump</a></div>`;
}
function bindCa(root){
  if(!root) return;
  root.querySelectorAll("[data-mint]").forEach(b=>{
    b.onclick=ev=>{
      ev.preventDefault();
      ev.stopPropagation();
      copyCa(b.dataset.mint);
    };
  });
}
function histRowHtml(row, i){
  const pnl=+row.pnl||0;
  const side=String(row.side||"").toUpperCase();
  const kind=row.kind || (side==="BUY"?"fill":"close");
  const open=state._histOpen===i;
  const mint=String(row.mint||"");
  const mintLine=caBits(mint);
  const inMc=fmtMc(row.entryMc||0);
  const outMc=fmtMc(row.exitMc||row.mc||0);
  const mcLine=side==="BUY" ? ("in "+inMc) : ("in "+inMc+" → "+outMc);
  const extra=open
    ? `<div class="meta">${esc(kind)}${row.moon?" · moon":""} · CA ${esc(mint||"—")} · wallet ${(row.wallet||"").slice(0,4)}…${(row.wallet||"").slice(-4)} · paper tx ${(row.sig||"").slice(0,8)}… · P&L = size × (exitMC/entryMC − 1) · ${esc(inMc)} → ${esc(outMc)} · vol ${esc(fmtMc(row.vol||0))} · liq ${esc(fmtMc(row.liq||0))}${row.band?(" · "+esc(row.band)):""}${row.handle?(" · @"+esc(row.handle)):""}${row.holdMin?(" · "+Number(row.holdMin).toFixed(1)+"m"):""}${row.why?(" · "+esc(row.why)):""}</div>`
    : `<div class="meta">${esc(kind)} · ${esc(mcLine)}</div>`;
  const huntMark=isHuntTrade(row)?" <em>HUNT</em>":"";
  return `<div class="hist-row${open?" on":""}" data-h="${i}"><span class="side">${histWhen(row.t)}</span><span class="sym">$${esc(row.sym||"?")}${huntMark}</span><span class="pnl ${pnl>0?"up":pnl<0?"dn":""}">${side==="BUY"?"$"+Number(row.notional||0).toFixed(0):(pnl>=0?"+":"")+pnl.toFixed(2)}</span>${mintLine}${extra}</div>`;
}
function backfillTradeMcs(){
  const trades=book.trades||[];
  const lastBuy={};
  for(let i=trades.length-1;i>=0;i--){
    const t=trades[i];
    if(!t) continue;
    if(t.side==="buy"){
      t.entryMc=t.entryMc||t.mc||0;
      t.exitMc=t.exitMc||t.entryMc;
      if(t.mint) lastBuy[t.mint]=t;
      else if(t.sym) lastBuy["$"+t.sym]=t;
    } else {
      t.exitMc=t.exitMc||t.mc||0;
      const b=(t.mint && lastBuy[t.mint]) || lastBuy["$"+t.sym];
      t.entryMc=t.entryMc||(b&&(b.entryMc||b.mc))||0;
    }
  }
}
function renderHistory(){
  backfillTradeMcs();
  const rows=book.trades||[];
  const paint=(el, n)=>{
    if(!el) return;
    if(!rows.length){ el.innerHTML='<div class="hist-row"><span class="meta">no fills yet — tape will land here</span></div>'; return; }
    el.innerHTML=rows.slice(0,n).map((r,i)=>histRowHtml(r,i)).join("");
    el.querySelectorAll("[data-h]").forEach(b=>b.onclick=()=>{
      const i=+b.dataset.h;
      state._histOpen = state._histOpen===i ? -1 : i;
      renderHistory();
    });
    bindCa(el);
  };
  paint(document.getElementById("histBox"), 24);
  paint(document.getElementById("histFull"), 80);
  const st=document.getElementById("histStats");
  if(st){
    const sells=rows.filter(t=>t.side==="sell");
    const wins=sells.filter(t=>t.pnl>0);
    const real=sells.reduce((s,t)=>s+(+t.pnl||0),0);
    const n=rows.length;
    const hs=huntStats();
    st.innerHTML=`<div><em>${n}</em> prints</div><div><em>${sells.length}</em> exits</div><div><em>${wins.length?((wins.length/sells.length)*100).toFixed(0)+"%":"—"}</em> wr</div><div><em class="${real>=0?"up":"dn"}">${real>=0?"+":""}${real.toFixed(2)}</em> realized</div><div><em>${hs.n?((hs.wr*100).toFixed(0)+"%"):"—"}</em> hunt wr</div><div><em class="${hs.pnl>=0?"up":"dn"}">${hs.n?(hs.pnl>=0?"+":"")+hs.pnl.toFixed(2):"—"}</em> hunt pnl</div><div><em>${hs.open}</em> hunt open</div><div><em>${hs.avgIn?fmtMc(hs.avgIn):"—"}</em> hunt in</div>`;
  }
}
function studyHistory(){
  const sells=(book.trades||[]).filter(t=>t.side==="sell" && Math.abs(+t.pnl||0)>=0.25);
  if(!sells.length) return;
  const last=sells[0];
  const wins=sells.filter(t=>t.pnl>0);
  const loss=sells.filter(t=>t.pnl<0);
  const who=["QUANT","ARCHIVE","COACH","SEARCH"][(state._pulse||0)%4];
  let line="hist $"+last.sym+" "+(last.pnl>=0?"+":"")+Number(last.pnl||0).toFixed(2);
  if(last.entryMc||last.exitMc) line+=" · in "+fmtMc(last.entryMc||0)+" → "+fmtMc(last.exitMc||last.mc||0);
  if(last.vol) line+=" · vol "+fmtMc(last.vol);
  if(last.handle) line+=" · @"+last.handle;
  if(wins.length && loss.length && (state._pulse||0)%5===0){
    const w=wins[0], l=loss[0];
    line="compare $"+w.sym+" +"+(+w.pnl).toFixed(2)+" vs $"+l.sym+" "+(+l.pnl).toFixed(2);
    if(w.entryMc||l.entryMc) line+=" · "+fmtMc(w.entryMc||0)+"/"+fmtMc(l.entryMc||0);
  }
  const hs=huntStats();
  if(hs.n && (state._pulse||0)%3===0){
    line="hunt WR "+(hs.wr*100).toFixed(0)+"% · "+hs.n+" bags · "+(hs.pnl>=0?"+":"")+hs.pnl.toFixed(2)+" · in "+fmtMc(hs.avgIn)+(hs.open?(" · "+hs.open+" still open"):"");
  }
  lesson(who,"study",line,{tag:last.sym,mc:last.exitMc||last.mc});
  share(who, last.sym, line);
}
function toast(m){ const t=document.getElementById("toast"); if(!t) return; t.textContent=m; t.classList.add("show"); setTimeout(()=>t.classList.remove("show"),2200); }
function log(who,text,kind=""){
  const box=document.getElementById("feed");
  if(box){
    const row=document.createElement("div"); row.className="log";
    row.innerHTML=`<span class="who">${esc(who)}</span> <span class="${kind==="ok"?"up":kind==="no"?"dn":""}">${esc(text)}</span>`;
    box.prepend(row);
  }
  book.journal.unshift({t:new Date().toISOString(),who,text,kind,eq:equity()});
  if(book.journal.length>400) book.journal.pop();
}
function pop(id,text,bad=false){
  const layer=floorEl();
  layer.querySelectorAll(".bubble").forEach(n=>n.remove());
  const ag=state.agents[id]; if(!ag || ag.ghost) return;
  const b=document.createElement("div"); b.className="bubble"+(bad?" bad":""); b.textContent=text.slice(0,28);
  b.style.left=ag.x+"%"; b.style.top=ag.y+"%"; layer.appendChild(b); setTimeout(()=>b.remove(),1600);
}
function makeAgent(a){
  const el=document.createElement("div");
  const isHire=hired(a.id);
  el.className="agent sit"+(isHire?" hire":"");
  el.innerHTML=`<div class="spr"><i class="hair" style="background:${a.hair}"></i><i class="face"></i><i class="eye l"></i><i class="eye r"></i><i class="torso" style="background:${a.body}"></i><i class="visor"></i><i class="tie" style="background:${a.color}"></i><i class="arm l"></i><i class="arm r"></i><i class="leg l"></i><i class="leg r"></i></div>`;
  if(!isHire) floorEl().appendChild(el);
  state.agents[a.id]={el,x:48,y:40,tx:48,ty:40,sit:true,a,ghost:isHire};
}
function seatOf(who){
  if(state.view==="farm"){ const h=HUTS.find(x=>x.id===who)||HUTS[0]; return {x:h.x+6,y:h.y+8}; }
  const hires=((brain.desk&&brain.desk.hires)||[]);
  const hi=hires.findIndex(h=>h.id===who);
  if(hi>=0) return {x: 6+hi*18, y: 4};
  if(state.view==="alpha"){ const d=ALPHA_SEATS.find(x=>x.who===who); return d?{x:d.x+8,y:d.y+4}:{x:46,y:34}; }
  if(state.view==="night"){ const d=NIGHT_SEATS.find(x=>x.who===who); return d?{x:d.x+8,y:d.y+4}:{x:46,y:34}; }
  const d=DESKS[state.floor].find(x=>x.who===who); return d?{x:d.x+8,y:d.y+4}:{x:46,y:36};
}
function go(id,x,y,sit=false){ const ag=state.agents[id]; if(!ag) return; ag.tx=x; ag.ty=y; ag.sit=sit; }
function tickMove(){
  if (window.__gsKill) return;
  Object.values(state.agents).forEach(ag=>{
    const dx=ag.tx-ag.x, dy=ag.ty-ag.y;
    if(Math.hypot(dx,dy)<0.35){ ag.x=ag.tx; ag.y=ag.ty; ag.el.classList.toggle("sit",ag.sit); }
    else { ag.x+=dx*0.09; ag.y+=dy*0.09; ag.el.classList.remove("sit"); }
    ag.el.style.left=ag.x+"%"; ag.el.style.top=ag.y+"%";
  });
  requestAnimationFrame(tickMove);
}
function layout(){
  const layer=floorEl();
  layer.querySelectorAll(".agent,.desk,.hut,.bubble").forEach(n=>n.remove()); state.agents={};
  if(state.view==="farm") HUTS.forEach(h=>{
    const el=document.createElement("div"); el.className="hut "+h.cls; el.style.left=h.x+"%"; el.style.top=h.y+"%";
    el.innerHTML=`<div class="roof"></div><div class="tag">${h.id}</div>`; layer.appendChild(el);
  }); else {
    const seats=state.view==="alpha"?ALPHA_SEATS: state.view==="night"?NIGHT_SEATS:DESKS[state.floor];
    seats.forEach(d=>{
      const el=document.createElement("div"); el.className="desk on"; el.style.left=d.x+"%"; el.style.top=d.y+"%";
      el.innerHTML=`<div class="screen"></div>${state.view==="alpha"?'<div class="screen s2"></div><div class="keys"></div>':''}<div class="label">${d.who}</div>`; layer.appendChild(el);
    });
  }
  rosterList().forEach(makeAgent);
  rosterList().forEach(a=>{ const s=seatOf(a.id); go(a.id,s.x,s.y,true); });
  document.getElementById("roster").innerHTML=rosterList().map(a=>`<div class="seat" id="r-${a.id}"><div class="dot" style="background:${a.color}"></div>${a.id}<span>${a.role}</span></div>`).join("");
}
function fillPx(sym, side, mint){
  if(side==="buy") return 1;
  const p=(book.positions||[]).find(x=> mint ? x.mint===mint : x.sym===sym);
  if(p){
    const m=posMark(p);
    if(m>0 && isFinite(m)){
      const slip=(book.cfg.slipBps/1e4)*0.7;
      return side==="buy" ? m*(1+slip) : m*(1-slip);
    }
  }
  return 1;
}
function learnExit(why, pnl, notional){
  const pb=brain.playbook=brain.playbook||{};
  const text=String(why||"");
  if(/3min|4min|stale|recycle|max hold/i.test(text) && pnl<0){
    pb.staleMs=Math.min(18*60*1000, (pb.staleMs||10*60*1000)+45000);
    lesson("EXIT","study","early exit lost "+pnl.toFixed(2)+" — hold window up",{});
  }
  if(/take_profit|trim|runner/i.test(text) && pnl>0){
    lesson("EXIT","win","banked +"+pnl.toFixed(2)+" at TP "+((pb.tpPct||0.25)*100).toFixed(0)+"%",{});
  }
  if(/hard stop/i.test(text) && pnl<0){
    lesson("EXIT","lose","stop −"+Math.abs(pnl).toFixed(2)+" — SL now "+((pb.slPct||0.10)*100).toFixed(0)+"%",{});
  }
  agentTuneStops();
}
function exitWhy(p){
  if(!p || !(p.qty>0)) return null;
  const pnl=posPnl(p);
  const notional=Math.abs(p.qty)*p.avg;
  if(notional>0 && notional<DUST && !p.holdX) return "dust $"+notional.toFixed(2)+" — flatten";
  const pct=notional>0 ? pnl/notional : 0;
  if(p.holdX){
    const r=mcRatio(p);
    if(r>=p.holdX) return "APE "+p.holdX+"x HIT — bank $"+p.sym;
    if(r<=0.12 && holdAge(p)>4*60*1000) return "APE rug — MC gone $"+p.sym;
    return null;
  }
  const c=coinOfPos(p);
  const hint=c ? walletHint(c) : {dump:0,follow:0};
  const plan=profitPlan();
  const scalp=!!(p.feat&&p.feat.scalp) || (c && scalpHot(c) && !p.moon);
  const tp=scalp?(plan.scalpTp||0.20):plan.tp;
  const sl=scalp?(plan.scalpSl||0.10):plan.sl;
  const stale=plan.holdMs;
  const tape=tapeRead(p.sym);
  const mc=c?pumpMark(c):(p.liveMc||p.mc||0);
  if(mc>=HIGH_MC && !(c && volStrong(c)) && pct<=0 && !p.moon) return "outside $5M book — flatten";
  const raw=(p.entryMc>0 && (p.liveMc||mc)>0) ? (p.liveMc||mc)/p.entryMc : (1+pct);
  if(!p.moon && (pct<=-0.10 || raw<=0.90)) return "hard stop −10%";
  if(!p.holdX && p.entryMc>0 && p.entryMc<FLOOR_MC && !(p.feat&&p.feat.huntVol)) return "sub $15k no vol — flatten";
  const age=p.opened ? (Date.now()-new Date(p.opened).getTime()) : 0;
  const vr=c?volRead(c):{dead:false,chop:false,expand:false,heat:0};
  if(!p.moon && vr.dead && age>5*60*1000) return "vol died — out $"+p.sym;
  if(!p.moon && vr.chop && age>8*60*1000 && pct<0.12) return "chop stall — recycle $"+p.sym;
  if(c){
    const fl=flowRead(c);
    if(!p.moon && fl.ready && fl.sellPrint && pct<=-0.04 && age>30*1000) return "tape last print SELL — out";
    if(!p.moon && fl.ready && fl.exitLiq && pct<0.08 && age>45*1000) return "exit liq CVD vs MC — out";
  }
  const peak=p.peak||p.avg;
  if(p.qty>0 && mid(p.sym)>peak) p.peak=mid(p.sym);
  const trail=p.trailPct|| (p.moon?(plan.moonTrail||0.16): (vr.expand?0.12:(plan.trail||0.10)));
  if(p.moon){
    const r=mcRatio(p);
    const left=Math.abs(p.qty)*p.avg;
    if(left<DUST || left<MIN_BUY*0.4) return "moon dust $"+left.toFixed(2)+" — flatten";
    if(r<MOON_X) return "moon never "+MOON_X+"x — flatten leftover";
    if(p.peak && p.avg && mid(p.sym)>p.avg && (p.peak-mid(p.sym))/p.peak>=trail) return "moon trail from "+r.toFixed(1)+"x peak";
    if(tape.dump && pct<=0.15) return "moon dump after 4x — out";
    if(vr.dead) return "moon vol died — bank leftover";
    return null;
  }
  if(p.peak && p.avg && mid(p.sym)>p.avg && (p.peak-mid(p.sym))/p.peak>=trail) return "trailing stop from peak";
  if(pct>=tp && (p.partials||0)===0){
    return "take_profit bank +"+pnl.toFixed(2);
  }
  if(tape.dump && pct<=-Math.max(0.06, sl*0.75)) return "tape dumping $"+p.sym+" — sell";
  if(hint.dump>=2 && hint.follow===0 && pct<=-Math.max(0.06, sl*0.75)) return "wallets dumping $"+p.sym;
  if(age>(plan.holdMs||6*60*1000) && pct<=-0.04 && !isHuntPos(p)) return "stale red, recycle $"+p.sym;
  if(age>RISK.maxHoldMs && pct<0.02 && !isHuntPos(p)) return "max hold "+Math.round(age/60000)+"m";
  if(isHuntPos(p) && age>(plan.huntMs||15*60*1000) && pct<0.10) return "hunt bag 15m still flat";
  if(scalp && age>(plan.scalpMs||10*60*1000) && pct<0.10) return "scalp 10m still flat";
  return null;
}
function pickExit(){
  const hits=book.positions.map(p=>({pos:p, why:exitWhy(p), pnl:posPnl(p)})).filter(x=>x.why);
  if(hits.length){
    hits.sort((a,b)=>{
      const rank=w=>/take_profit|trim|runner/.test(w)?0: /hard stop/.test(w)?1:2;
      const ra=rank(a.why), rb=rank(b.why);
      if(ra!==rb) return ra-rb;
      return ra===0 ? b.pnl-a.pnl : a.pnl-b.pnl;
    });
    const h=hits[0];
    if(/take_profit/.test(h.why) && mcRatio(h.pos)>=MOON_X){
      const left=Math.abs(h.pos.qty)*h.pos.avg*0.45;
      if(left>=MIN_BUY) return {pos:h.pos, why:h.why+" · 4x moon keep", pnl:h.pnl, verb:"TRIM", frac:0.55};
    }
    return {pos:h.pos, why:h.why.replace("trim","bank"), pnl:h.pnl, verb:"CLOSE"};
  }
  if(book.positions.length && ((state._pulse||0)%4===0)){
    const p=book.positions.slice().sort((a,b)=>posPnl(b)-posPnl(a))[0];
    const hudd=huddleHold(p);
    if(hudd && hudd.verb==="CLOSE") return {pos:p, why:hudd.why, pnl:posPnl(p), verb:"CLOSE"};
    if(hudd && hudd.verb==="TRIM") return {pos:p, why:hudd.why, pnl:posPnl(p), verb:"CLOSE"};
    if(hudd && hudd.verb==="TIGHTEN"){
      p.trailPct=RISK.tightenPct;
      p.stopRaised=true;
      say("EXIT","TIGHTEN $"+p.sym+" trail "+(RISK.tightenPct*100).toFixed(0)+"%");
    }
  }
  return null;
}
function actExit(exit){
  if(!exit || !exit.pos) return false;
  const notional=Math.abs(exit.pos.qty)*exit.pos.avg;
  if(exit.verb==="TRIM"){
    shift.line="ALPHA TRIM  $"+exit.pos.sym+" — "+exit.why;
    say("EXIT","TRIM $"+exit.pos.sym+" — "+exit.why);
    say("HEAD","bank "+((profitPlan().trimFrac||0.7)*100).toFixed(0)+"% $"+exit.pos.sym+" · moon only if "+MOON_X+"x");
    lesson("EXIT","sell","TRIM $"+exit.pos.sym+" — "+exit.why,{tag:exit.pos.sym});
    trimPos(exit.pos.id, exit.frac||profitPlan().trimFrac||0.7, exit.why);
    shift.step="farm"; shift.coin=null; shift.tag=""; shift._mint="";
    renderLearn(); saveBrain(); renderShift();
    return true;
  }
  shift.line="ALPHA SELL  $"+exit.pos.sym+" — "+exit.why;
  say("EXIT","SELL $"+exit.pos.sym+" — "+exit.why);
  say("HEAD","ticket SELL $"+exit.pos.sym+" then SNIPER paper fills");
  lesson("EXIT","sell","SELL $"+exit.pos.sym+" — "+exit.why,{tag:exit.pos.sym});
  proposeTicket(exit.pos.sym, "sell", notional, exit.pos.mint, {closeId:exit.pos.id, why:exit.why});
  shift.step="farm"; shift.coin=null; shift.tag=""; shift._mint="";
  renderLearn(); saveBrain(); renderShift();
  return true;
}
async function openFill(t){
  if(t.side==="sell"){
    const pos = (t.closeId && book.positions.find(p=>p.id===t.closeId))
      || (t.mint && book.positions.find(p=>p.mint===t.mint && p.qty>0))
      || book.positions.find(p=>p.sym===t.sym && p.qty>0 && (!t.mint || p.mint===t.mint));
    if(!pos){ log("EXIT","no long $"+t.sym+" to sell","no"); talk("EXIT","no long $"+t.sym+" to sell"); t.status="DEAD"; return false; }
    if(wantLiveSell(pos)){
      t.status="CHAIN";
      talk("SNIPER","LIVE SELL $"+t.sym+" — Phantom sign");
      const sw=await liveSwap({side:"sell", mint:pos.mint, raw:String(pos.rawOut||""), usd:Math.abs(pos.qty)*pos.avg});
      if(!sw.ok){
        t.status="DEAD";
        log("SNIPER","LIVE SELL fail $"+t.sym+" — "+sw.err,"no");
        talk("RISK","chain sell failed — "+sw.err+" · paper bag still open");
        toast("LIVE SELL FAIL "+(sw.err||""));
        return false;
      }
      pos.liveSig=sw.sig;
      const ok=closePos(pos.id, (t.why||"live sell")+" · sig "+String(sw.sig||"").slice(0,8));
      if(ok){ t.status="LIVE"; t.fillPx=pos.avg; t.sig=sw.sig; talk("SNIPER","CHAIN SELL $"+t.sym+" "+String(sw.sig).slice(0,8)); }
      return ok;
    }
    const ok=closePos(pos.id, t.why||"paper sell");
    if(ok){
      t.status="LIVE";
      t.fillPx=pos.avg;
      talk("SNIPER","PAPER SELL $"+t.sym+" — live send off");
      pop("SNIPER","SELL "+t.sym);
      go("SNIPER",50,60,false); setTimeout(()=>{const s=seatOf("SNIPER"); if(s) go("SNIPER",s.x,s.y,true);},900);
    }
    return ok;
  }
  const px=fillPx(t.sym,t.side,t.mint);
  if(!(px>0) || !isFinite(px)){ log("SNIPER","reject "+t.id+" — no mark on "+t.sym,"no"); talk("SNIPER","no mark on $"+t.sym+" yet"); t.status="DEAD"; return false; }
  if(!t.mint){
    const cGuess=coinByTag(t.sym);
    if(cGuess && cGuess.mint) t.mint=cGuess.mint;
  }
  const cGate=coinByMint(t.mint)||coinByTag(t.sym);
  const blocked=(t.force||t.auto)
    ? (!(cGate && cGate.mint && tapeMc(cGate)>0) ? "no MC mark" : null)
    : liveGate(cGate);
  if(blocked){ log("SNIPER","reject "+t.id+" — "+blocked,"no"); t.status="DEAD"; return false; }
  const feeBps=book.cfg.feeBps/1e4; const notional=t.riskUsd; const fee=notional*feeBps;
  const qty = (notional-fee)/px;
  if(t.side==="buy"){
    if(!t.mint){
      const cGuess=coinByTag(t.sym);
      if(cGuess && cGuess.mint) t.mint=cGuess.mint;
    }
    if((book.positions||[]).some(p=>p.mint===t.mint)){
      log("SNIPER","reject "+t.id+" — already long $"+t.sym,"no");
      talk("SNIPER","already long $"+t.sym);
      t.status="DEAD";
      return false;
    }
    if(notional<MIN_BUY-1e-9){ log("SNIPER","reject "+t.id+" — min buy $"+MIN_BUY,"no"); t.status="DEAD"; return false; }
    if(book.cash<notional){ log("SNIPER","reject "+t.id+" — not enough cash","no"); t.status="DEAD"; return false; }
    const cFill=coinByMint(t.mint)||coinByTag(t.sym);
    const pump=pumpUsd(cFill);
    const dex=dexMark(cFill);
    t.entrySrc=pump>0?"pump":"dex";
    t.entryMc=t.entrySrc==="pump"?pump:dex;
    if(!(t.entryMc>0)){ log("SNIPER","reject "+t.id+" — no MC mark $"+t.sym,"no"); t.status="DEAD"; return false; }
    if(wantLiveFill(t)){
      t.status="CHAIN";
      talk("SNIPER","LIVE BUY $"+t.sym+" $"+notional.toFixed(0)+" — Phantom sign");
      const sw=await liveSwap({side:"buy", mint:t.mint, usd:notional});
      if(!sw.ok){
        t.status="DEAD";
        log("SNIPER","LIVE BUY fail $"+t.sym+" — "+sw.err,"no");
        talk("RISK","chain buy failed — "+sw.err+" · no paper fill");
        toast("LIVE BUY FAIL "+(sw.err||""));
        return false;
      }
      t.sig=sw.sig;
      t.rawOut=sw.outAmount;
      t.live=true;
    }
    book.cash -= notional;
  }
  else book.cash += notional-fee;
  book.feesPaid += fee;
  book.bought++;
  bumpFunnel("filled");
  const signed = t.side==="buy"? qty : -qty;
  const c0=coinByMint(t.mint)||coinByTag(t.sym);
  const intel0=c0?intelOf(c0):null;
  const entryMcLive=t.entryMc||tapeMc(c0)||mcOf(t.sym, t.mint);
  const entrySrc=t.entrySrc||(pumpUsd(c0)>0?"pump":"dex");
  book.positions.push({id:t.id,sym:t.sym,side:t.side,qty:signed,avg:px,lastPx:px,fee,mint:t.mint||(c0&&c0.mint)||"",src:t.src||"pump/dex",entrySrc,mc:entryMcLive,entryMc:entryMcLive,liveMc:entryMcLive,feat:Object.assign(featuresOf(c0),{huntVol:!!(c0&&huntVol(c0)),scalp:!!(c0&&scalpHot(c0)),vol:c0?coinVol(c0):0,liq:c0?coinLiq(c0):0,sigma:c0?coinVolat(c0):0,handle:(intel0&&intel0.handle)||(c0&&parseXHandle(c0.twitter))||""}),creator:(c0||{}).creator||"",peak:px,trailPct:RISK.trailPct,partials:0,moon:false,holdX:t.holdX||0,ape:!!t.ape,live:!!t.live,rawOut:t.rawOut||"",sig:t.sig||"",opened:new Date().toISOString()});
  stampMint(t.mint||(c0&&c0.mint)||"");
  t.fillPx=px; t.qty=signed; t.fee=fee; t.status="LIVE";
  state.ticket=null;
  const mem=t.mint && brain.memory[t.mint]; if(mem){ mem.fills++; mem.avg=px; }
  rollDay(); brain.day.trades=(brain.day.trades||0)+1;
  const cr=creatorOf((c0||{}).creator); if(cr) cr.bought=(cr.bought||0)+1;
  log("SNIPER",`${t.live?"CHAIN":"PAPER"} FILL ${t.id} ${t.side} ${t.sym} ${fmtMc(notional)} mc ${fmtMc(entryMcLive)} fee $${fee.toFixed(4)}${t.sig?(" sig "+String(t.sig).slice(0,8)):""}`,"ok");
  talk("SNIPER", (t.live?"CHAIN FILL $":"PAPER FILL $")+t.sym+" mc "+fmtMc(entryMcLive)+(t.live?(" · "+String(t.sig).slice(0,8)):" — live send off"));
  talk("COACH", "remember $"+t.sym+" — pump/dex packet is now in the book");
  lesson("SNIPER","fill","PAPER FILL $"+t.sym+" mc "+fmtMc(entryMcLive),{tag:t.sym,mc:entryMcLive});
  lesson("HEAD","fill","ticket $"+t.sym+" live in the book",{tag:t.sym});
  lesson("COACH","study","keep packets like $"+t.sym,{tag:t.sym});
  rememberCoin(c0||{symbol:t.sym,mint:t.mint},"fill","paper fill");
  recordTrade("buy", t.sym, px, 0, notional, {kind:t.ape?"ape":"fill", mint:t.mint||(c0&&c0.mint)||"", why:t.ape?("APE $"+notional.toFixed(0)+" hold "+(t.holdX||5)+"x"):"paper fill", mc:entryMcLive, entryMc:entryMcLive, exitMc:entryMcLive});
  debriefBuy(t.sym, notional);
  pop("SNIPER", t.side.toUpperCase()+" "+t.sym); persist(); updateBook(); renderPos(); renderLearn(); saveBrain(); return true;
}
function trimPos(id, fraction, why){
  const i=book.positions.findIndex(p=>p.id===id); if(i<0) return false;
  const p=book.positions[i];
  const r=mcRatio(p);
  if(r<MOON_X){
    return closePos(id, (why||"tp")+" — no moon under "+MOON_X+"x");
  }
  const plan=profitPlan();
  const frac=Math.max(0.5, Math.min(0.8, fraction||plan.trimFrac||0.7));
  const leftCost=Math.abs(p.qty)*p.avg*(1-frac);
  if(leftCost<MIN_BUY){
    return closePos(id, (why||"tp")+" — leftover would be dust $"+leftCost.toFixed(0));
  }
  const sellQty=Math.abs(p.qty)*frac;
  const c=coinOfPos(p);
  const sellCost=sellQty*p.avg;
  const proceeds=sellCost*r;
  const fee=proceeds*(book.cfg.feeBps/1e4);
  book.feesPaid += fee;
  book.cash += proceeds-fee;
  let pnl=sellCost*(r-1) - fee;
  if(pnl < -sellCost) pnl=-sellCost;
  p.qty -= sellQty;
  p.partials=(p.partials||0)+1;
  p.moon=true;
  p.trailPct=plan.moonTrail||0.22;
  p.stopRaised=true;
  book.sold=(book.sold||0)+1;
  book.realized=(book.realized||0)+pnl;
  const holdMinT=p.opened?Math.max(0,(Date.now()-new Date(p.opened).getTime())/60000):0;
  const exitMcT=pumpMark(c)||mcOf(p.sym, p.mint)||p.liveMc||p.mc||0;
  recordTrade("sell", p.sym, posMark(p)||p.avg, pnl, proceeds, {kind:"trim", why:why||"trim", moon:true, mint:p.mint, mc:exitMcT, entryMc:p.entryMc||p.mc, exitMc:exitMcT, holdMin:holdMinT, opened:p.opened});
  rollDay(); brain.day.pnl=(brain.day.pnl||0)+pnl;
  if(pnl>=0.05) brain.day.streak=0;
  const mem=(p.mint && brain.memory[p.mint]) || memByTag(p.sym);
  if(mem){ mem.pnl=(mem.pnl||0)+pnl; mem.sells=(mem.sells||0)+1; if(pnl>0) mem.last="win"; }
  digestTrade(p, pnl, why||"trim", "trim");
  const left=Math.abs(p.qty)*p.avg;
  talk("EXIT", "PAPER TRIM $"+p.sym+" "+(frac*100).toFixed(0)+"% "+(pnl>=0?"+":"")+pnl.toFixed(2)+" · "+MOON_X+"x moon $"+left.toFixed(2));
  log("EXIT",`TRIM ${id} ${p.sym} ${(frac*100).toFixed(0)}% mc ${fmtMc(exitMcT)} pnl $${pnl.toFixed(4)} moon $${left.toFixed(2)}${why?(" — "+why):""}`, pnl>=0?"ok":"no");
  pop("EXIT","MOON "+p.sym, pnl<0);
  say("HEAD","moon $"+p.sym+" "+mcRatio(p).toFixed(1)+"x · left $"+left.toFixed(2));
  lesson("EXIT","win","4x moon $"+p.sym+" left $"+left.toFixed(2),{tag:p.sym});
  if(left < MIN_BUY){
    return closePos(id, (why||"trim")+" then flatten dust");
  }
  persist(); updateBook(); renderPos(); renderLearn(); saveBrain();
  return true;
}
function closePos(id, why){
  const i=book.positions.findIndex(p=>p.id===id); if(i<0) return false;
  const p=book.positions[i];
  const mark=posMark(p) || p.avg;
  if(!(mark>0) || !isFinite(mark)){ log("EXIT","no MC mark on $"+p.sym+" — hold","no"); return false; }
  const cost=Math.abs(p.qty)*p.avg;
  const proceeds=cost*mcRatio(p);
  const fee=proceeds*(book.cfg.feeBps/1e4); book.feesPaid += fee;
  if(p.qty>0) book.cash += proceeds-fee; else book.cash -= proceeds+fee;
  let pnl = posPnl(p) - (p.fee||0) - fee;
  if(pnl < -cost) pnl=-cost;
  book.positions.splice(i,1);
  if(p.mint){ state._mintCd=state._mintCd||{}; state._mintCd[p.mint]=Date.now(); }
  book.sold=(book.sold||0)+1;
  book.realized=(book.realized||0)+pnl;
  const holdMinC=p.opened?Math.max(0,(Date.now()-new Date(p.opened).getTime())/60000):0;
  const exitMcC=mcOf(p.sym, p.mint)||pumpMark(coinOfPos(p))||p.liveMc||p.mc||0;
  recordTrade("sell", p.sym, mark, pnl, proceeds, {kind:p.moon?"moon":"close", why:why||"flatten", moon:!!p.moon, mint:p.mint, mc:exitMcC, entryMc:p.entryMc||p.mc, exitMc:exitMcC, holdMin:holdMinC, opened:p.opened, hunt:isHuntPos(p)});
  digestTrade(p, pnl, why||"flatten", p.moon?"moon":"close");
  markCreator(p.creator, pnl);
  learnExit(why||"", pnl, Math.abs(p.qty)*p.avg);
  rollDay(); brain.day.pnl=(brain.day.pnl||0)+pnl;
  if(pnl>=0.15) brain.day.streak=0;
  else if(pnl<=-0.4) brain.day.streak=(brain.day.streak||0)+1;
  brain.day.halted=false;
  brain.day.cooldownUntil=0;
  const mem=(p.mint && brain.memory[p.mint]) || memByTag(p.sym);
  if(mem){ mem.sells=(mem.sells||0)+1; }
  lesson("EXIT", pnl>=0?"win":"lose", "SELL $"+p.sym+" pnl "+(pnl>=0?"+":"")+pnl.toFixed(2)+(why?(" — "+why):""),{tag:p.sym});
  lesson("COACH", pnl>=0?"win":"lose", (pnl>=0?"keep":"tighten")+" packets like $"+p.sym,{tag:p.sym});
  if(!p._graded){
    if(pnl>=0){ brain.win++; } else { brain.lose++; }
  }
  if(pnl>=0) agentOf("SNIPER").wins++; else agentOf("SNIPER").losses++;
  agentOf("EXIT").fills++;
  rebuildPlaybook();
  expandDesk();
  rememberCoin(coinByTag(p.sym)||{symbol:p.sym,mint:p.mint}, "sell", why||"flatten");
  talk("EXIT", "PAPER SELL $"+p.sym+" "+(pnl>=0?"+":"")+pnl.toFixed(2)+(why?(" — "+why):"")+" · live send off");
  talk("QUANT", "realized "+(book.realized>=0?"+":"")+"$"+book.realized.toFixed(2)+" · open "+(unrealized()>=0?"+":"")+"$"+unrealized().toFixed(2));
  talk("WHALE", pnl>=0 ? ("follow wallets paid on $"+p.sym) : ("dump / bad follow on $"+p.sym+" — mark it"));
  talk("COACH", "$"+p.sym+" sell "+(pnl>=0?"+":"")+pnl.toFixed(2)+" — playbook min MC "+fmtMc((brain.playbook||{}).minMc));
  lesson("WHALE", pnl>=0?"win":"lose", (pnl>=0?"keep":"fade")+" wallets that printed $"+p.sym,{tag:p.sym});
  log("EXIT",`SELL ${id} ${p.sym} @ ${fmt(mark)} pnl $${pnl.toFixed(4)}${why?(" — "+why):""}`, pnl>=0?"ok":"no");
  pop("EXIT","SELL "+p.sym+(pnl>=0?" +":" ")+pnl.toFixed(2), pnl<0); persist(); updateBook(); renderPos(); renderLearn(); saveBrain();
  return true;
}
function proposeTicket(sym, side, riskUsd, mint, extra){
  const id="GS-"+String(state.seq++).padStart(4,"0");
  extra=extra||{};
  state.ticket={id,sym,side,riskUsd,risk:"OPEN",status:"RISK",venue:"paper",mint:mint||"",src:"pump/dex",closeId:extra.closeId||"",why:extra.why||"",ape:!!extra.ape,holdX:extra.holdX||0,auto:!!extra.auto,manual:!!extra.manual,force:!!extra.force,_at:Date.now()}; book.tickets++;
  log("HEAD",`intent ${id} ${side} ${sym} ${side==="sell"?"exit":"risk"} $${(+riskUsd||0).toFixed(2)} · pump/dex paper`); renderPipe();
}
function riskStamp(){
  const t=state.ticket; if(!t||t.status!=="RISK") return;
  const cap=Math.max(MIN_BUY, ticketSize()*1.15);
  if(!t.ape && t.side!=="sell" && t.riskUsd>cap+1e-9 && t.riskUsd>solCap()+1e-9){ t.risk="KILL"; t.status="DEAD"; talk("RISK", t.id+" KILL — over desk size"); talk("HEAD","re RISK — dead ticket"); log("RISK",t.id+" KILL — over desk size","no"); pop("RISK","KILL",true); }
  else {
    t.risk="CLEAR"; t.status="WAIT_APPROVE";
    if(t.side==="sell"){
      talk("RISK", t.id+" CLEAR SELL $"+t.sym+" — paper flatten, not a live send");
      talk("HEAD", t.id+" EXIT paper sell now — live send off");
      log("RISK",t.id+" CLEAR paper SELL","ok"); pop("RISK","SELL");
    } else {
      talk("RISK", t.id+" CLEAR $"+t.sym+" — paper stamp, not a live send");
      talk("HEAD", t.id+" paper fill now — live send off");
      log("RISK",t.id+" CLEAR paper stamp","ok"); pop("RISK","CLEAR");
    }
    renderPipe(); persist();
    approve();
    return;
  }
  renderPipe(); persist();
}
function approve(){
  const t=state.ticket; if(!t||t.status!=="WAIT_APPROVE"||t.risk!=="CLEAR") return;
  if(book.cfg.canWithdraw){ toast("WITHDRAW KEY REJECTED"); return; }
  Promise.resolve(openFill(t)).then(()=>{ renderPipe(); updateBook(); }).catch(e=>{ t.status="DEAD"; log("SNIPER","fill throw "+e,"no"); });
}
function ticketBusy(){
  const t=state.ticket;
  if(!t) return false;
  const age=Date.now()-(t._at||0);
  const chain=t.status==="CHAIN";
  if((t.status==="RISK"||t.status==="WAIT_APPROVE") && age>8000){
    t.status="DEAD"; state.ticket=null; return false;
  }
  if(chain && age>60000){
    t.status="DEAD"; state.ticket=null; talk("RISK","chain ticket stale — back to paper hunt"); return false;
  }
  return t.status==="RISK" || t.status==="WAIT_APPROVE" || chain;
}
function renderPipe(){
  const t=state.ticket;
  document.getElementById("approveBtn") && (document.getElementById("approveBtn").disabled=!(t&&t.status==="WAIT_APPROVE"&&t.risk==="CLEAR"));
  const pipe=document.getElementById("pipe");
  if(!pipe) return;
  const beat=window.__gsBeat?Math.round((Date.now()-window.__gsBeat)/1000):"?";
  pipe.innerHTML = t
    ? `<div class="ticket"><b>${esc(t.id)}</b> ${esc(t.side)} $${esc(t.sym)}<br>${t.side==="sell"?"exit":"risk"} $${(+t.riskUsd||0).toFixed(2)} · ${esc(t.venue)}${t.why?("<br>"+esc(t.why)):""}<br>RISK <span class="${t.risk==="CLEAR"?"up":t.risk==="KILL"?"dn":""}">${esc(t.risk)}</span> · ${esc(t.status)}${t.fillPx?`<br>fill ${fmt(t.fillPx)}`:""}${t.mint?caBits(t.mint):""}</div>`
    : `<div class="ticket">no ticket · desk ${esc(String(beat))}s · ${(state.coins||[]).length} names${window.__gsMiss?(" · "+esc(window.__gsMiss)):""}</div>`;
  bindCa(pipe);
}
function renderPos(){
  const box=document.getElementById("pos");
  if(!box) return;
  if(!book.positions.length){ box.innerHTML='<div class="pos">flat</div>'; return; }
  box.innerHTML=book.positions.map(p=>{
    const c=(p.mint && (state.coins||[]).find(x=>x.mint===p.mint)) || coinByTag(p.sym);
    const pnl=posPnl(p);
    const live=mcOf(p.sym);
    const r=mcRatio(p);
    const pct=(r-1)*100;
    const mint=caBits(p.mint);
    const pctTxt=!(live>0)?"…": (Math.abs(pct)<0.05?"flat":((pct>=0?"+":"")+pct.toFixed(1)+"%"));
    const tip="P&L = $"+((p.qty*p.avg)||0).toFixed(0)+" × (liveMC/entryMC − 1) · vol "+fmtMc(c?coinVol(c):0)+" · liq "+fmtMc(c?coinLiq(c):0)+" · σ "+(c?(coinVolat(c)*100).toFixed(1):"0")+"%";
    return `<div class="pos" title="${esc(tip)}"><span class="sym">$${esc(p.sym)}${p.holdX?" <em>APE "+p.holdX+"x</em>":p.moon?" <em>MOON</em>":""}${mint}</span><span class="mc">${fmtMc(p.entryMc||0)} → ${live>0?fmtMc(live):"…"}</span><span class="${pnl>=0?"up":"dn"}">${pnl>=0?"+":""}${pnl.toFixed(2)} <i>${pctTxt}</i></span><button data-c="${esc(p.id)}">SELL</button></div>`;
  }).join("");
  box.querySelectorAll("button[data-c]").forEach(b=>b.onclick=()=>{ closePos(b.dataset.c, "manual sell"); if(state.ticket&&state.ticket.id===b.dataset.c) state.ticket=null; renderPipe(); });
  bindCa(box);
}
function updateBook(){
  const eq=equity(), real=book.realized||0, open=unrealized(), pnl=real+open;
  const setTxt=(id,v)=>{ const n=document.getElementById(id); if(n) n.textContent=v; };
  setTxt("eq","$"+eq.toFixed(2));
  setTxt("cashH","$"+book.cash.toFixed(2));
  const cash=document.getElementById("cash"); if(cash) cash.textContent="VAULT $"+book.cash.toFixed(2);
  renderLive();
  const eqBig=document.getElementById("eqBig");
  if(eqBig){ eqBig.textContent="$"+eq.toFixed(2); eqBig.className=pnl>=0?"up":"dn"; }
  setTxt("refused", String(book.refused||0));
  setTxt("bought", String(book.bought||0));
  setTxt("sold", String(book.sold||0));
  setTxt("openN", String(book.positions.length));
  const el=document.getElementById("pnl");
  if(el){ el.textContent=(pnl>=0?"+$":"-$")+Math.abs(pnl).toFixed(2); el.style.color=pnl>=0?"var(--green)":"var(--red)"; }
  const realEl=document.getElementById("real");
  if(realEl){ realEl.textContent=(real>=0?"+$":"-$")+Math.abs(real).toFixed(2); realEl.style.color=real>=0?"var(--green)":"var(--red)"; }
  const wrEl=document.getElementById("wrChip");
  if(wrEl){
    const sells=(book.trades||[]).filter(t=>t.side==="sell" && Math.abs(+t.pnl||0)>=0.15);
    const wr=sells.length? ((sells.filter(t=>t.pnl>0).length/sells.length)*100).toFixed(0)+"%" : "—";
    const hs=huntStats();
    wrEl.textContent=hs.n? ("WR "+wr+" · HUNT "+(hs.wr*100).toFixed(0)+"% "+hs.n+"n") : ("WR "+wr);
    wrEl.style.color=hs.n?(hs.wr>=0.4?"var(--lime)":"var(--amber)"):"";
  }
  renderWatch();
  renderTrench();
  renderHistory();
}
function renderTrench(){
  const scan=document.getElementById("scanN");
  const kn=document.getElementById("killN");
  const kp=document.getElementById("killPct");
  const meta=document.getElementById("metaChip");
  const seen=brain.scanned||brain.seen||0;
  const kills=brain.veto||0;
  if(scan) scan.textContent=seen>=10000?((seen/1000).toFixed(0)+"k"):String(seen);
  if(kn) kn.textContent=kills>=10000?((kills/1000).toFixed(0)+"k"):String(kills);
  if(kp){
    const pct=seen?((kills/Math.max(1,brain.seen||seen))*100):0;
    kp.textContent=pct.toFixed(1)+"%";
  }
  if(meta){
    const pb=brain.playbook||{};
    meta.textContent="META "+(pb.rules&&pb.rules[0]||"book $15k+ · $2M needs vol");
  }
  const pc=document.getElementById("pulseChip");
  if(pc){
    const p=brain.pulse||pulseSignal();
    pc.textContent="PULSE "+(p.go||0).toFixed(2)+(p.go<0.3?" PAUSE":"");
    pc.style.color=p.go<0.3?"var(--red)":"var(--lime)";
  }
  const st=document.getElementById("streakChip");
  if(st){
    const n=(brain.day&&brain.day.streak)||0;
    st.textContent="STREAK "+n;
    st.style.color=n>=2?"var(--red)":"var(--lime)";
  }
  const cc=document.getElementById("coolChip");
  const goal=document.getElementById("goalChip");
  if(goal){
    const p=hourPace();
    const sign=p.pnl>=0?"+":"";
    goal.textContent="GOAL $"+p.min+"–$"+p.max+"/h · "+sign+p.pnl.toFixed(0);
    goal.style.color=p.enough?"var(--lime)": p.behind?"var(--red)":"var(--amber)";
  }
  if(cc){
    cc.textContent="GATE OPEN";
    cc.style.color="var(--lime)";
  }
  renderFunnel();
}
function fmt(n){ if(n==null||Number.isNaN(n))return "—"; if(Math.abs(n)>=1000)return n.toLocaleString(undefined,{maximumFractionDigits:2}); if(Math.abs(n)<0.01)return n.toExponential(2); return n.toFixed(2); }
function fmtMc(n){
  const x=+n;
  if(!isFinite(x) || x<=0) return "—";
  if(x>=1e9) return "$"+(x/1e9).toFixed(2)+"B";
  if(x>=1e6) return "$"+(x/1e6).toFixed(2)+"M";
  if(x>=1e3) return "$"+(x/1e3).toFixed(1)+"k";
  return "$"+Math.round(x);
}
function coinByTag(tag){ const t=String(tag||"").toUpperCase(); return (state.coins||[]).find(c=>pumpTag(c)===t) || null; }
function coinByMint(mint){
  if(!mint) return null;
  return (state.coins||[]).find(c=>c.mint===mint) || null;
}
function coinOfPos(p){
  if(!p) return null;
  return coinByMint(p.mint) || coinByTag(p.sym);
}
function mcOf(sym, mint){
  mint=mint||((book.positions||[]).find(x=>x.sym===sym&&x.mint)||{}).mint;
  if(mint){
    const p=(book.positions||[]).find(x=>x.mint===mint);
    if(p){
      const m=markOfPos(p);
      if(m>0) return m;
    }
    const live=tapeMc(coinByMint(mint));
    if(live>0) return live;
    if(state.mcMint && state.mcMint[mint]>0) return state.mcMint[mint];
    return 0;
  }
  return 0;
}
function chartNames(){
  const names=[];
  book.positions.forEach(p=>{ if(p.sym && names.indexOf(p.sym)<0) names.push(p.sym); });
  if(state.koth){ const t=pumpTag(state.koth); if(t && names.indexOf(t)<0) names.push(t); }
  (state.fomo||[]).forEach(c=>{ const t=pumpTag(c); if(t && names.indexOf(t)<0 && names.length<3) names.push(t); });
  (state.coins||[]).filter(c=>!isMajor(c)).forEach(c=>{ const t=pumpTag(c); if(t && names.indexOf(t)<0 && names.length<3) names.push(t); });
  while(names.length<3) names.push(["SOL","BTC","ETH"][names.length]);
  return names.slice(0,3);
}
function renderTickers(){
  const coins=(state.coins||[]).filter(c=>!isMajor(c)).slice(0,8);
  const seen=new Set();
  const list = [];
  coins.forEach(c=>{
    const sym=pumpTag(c); if(!sym || seen.has(sym)) return; seen.add(sym);
    list.push({sym, mc:pumpMark(c)});
  });
  document.getElementById("tickers").innerHTML=list.slice(0,4).map(x=>{
    const now=x.mc||0; const prev=SEED["_mc"+x.sym]||now; const cls=now>=prev?"up":"dn"; SEED["_mc"+x.sym]=now;
    return `<div class="tk">${esc(x.sym)} <b class="${cls}">${fmtMc(now)}</b></div>`;
  }).join("");
  const board=document.getElementById("boardRows");
  const tape=document.getElementById("tapeScroll");
  if(board){
    const names = list.length ? list : [{sym:"WAITING", mc:0}];
    board.innerHTML=names.slice(0,8).map(x=>{
      const now=x.mc||0; const prev=SEED["_mc"+x.sym]||now; const arrow=now>=prev?"▲":"▼";
      return `<div>${esc(x.sym)} ${arrow} ${fmtMc(now)}</div>`;
    }).join("");
  }
  if(tape){
    const w = book.cfg.watchAddr ? ("WATCH "+book.cfg.watchAddr.slice(0,4)+"…"+book.cfg.watchAddr.slice(-4)) : "WATCH —";
    tape.textContent = list.map(x=>x.sym+" "+fmtMc(x.mc)).join("   ·   ") + "   ·   MC TAPE · PAPER DESK · LIVE SEND OFF · "+w+"   ·   ";
  }
}
function setFeed(k, ok, extra){
  feeds[k] = ok ? "LIVE"+(extra?(" "+extra):"") : "DOWN";
  const bar=document.getElementById("feedsBar");
  if(bar) bar.textContent="FEEDS  HL "+feeds.hl+" · BN "+feeds.bn+" · YH "+feeds.yh+" · PF "+feeds.pf+" · DX "+feeds.dx;
}
async function pullBinance(){
  try {
    const res=await fetch("/api/tape?src=binance");
    if(!res.ok) { setFeed("bn", false); return; }
    const data=await res.json();
    if(!Array.isArray(data)) { setFeed("bn", false); return; }
    const map=Object.fromEntries(data.map(x=>[x.symbol,+x.price]));
    if(map.BTCUSDT) state.prices.BTC=map.BTCUSDT;
    if(map.ETHUSDT) state.prices.ETH=map.ETHUSDT;
    if(map.SOLUSDT) state.prices.SOL=map.SOLUSDT;
    if(map.DOGEUSDT) state.prices.DOGE=map.DOGEUSDT;
    setFeed("bn", true, res.headers.get("X-Tape-Host")||"ok");
  } catch(_){ setFeed("bn", false); }
}
async function pullHL(){
  try{
    const hl=await fetch("/api/tape?src=hl-mids");
    const mids=await hl.json();
    if(mids && mids.BTC){
      state.prices.BTC=+mids.BTC;
      if(mids.ETH) state.prices.ETH=+mids.ETH;
      if(mids.SOL) state.prices.SOL=+mids.SOL;
      setFeed("hl", true);
    } else setFeed("hl", false);
  }catch(_){ setFeed("hl", false); }
  try{
    const ctx=await fetch("/api/tape?src=hl-ctx");
    const pair=await ctx.json();
    const uni=pair[0].universe, acts=pair[1];
    ["BTC","ETH","SOL"].forEach(name=>{
      const i=uni.findIndex(a=>a.name===name);
      if(i>=0 && acts[i]){
        state.funding[name]=+acts[i].funding;
        state.oi[name]=+acts[i].openInterest;
        if(acts[i].midPx) state.prices[name]=+acts[i].midPx;
      }
    });
  }catch(_){}
}
async function pullYahoo(){
  const map={TSLA:"TSLA",NVDA:"NVDA",SPX:"^GSPC"};
  let ok=false;
  for (const [k,sym] of Object.entries(map)){
    try{
      const res=await fetch("/api/tape?src=yahoo&sym="+encodeURIComponent(sym));
      const j=await res.json();
      const meta=j.chart.result[0].meta;
      const px=meta.regularMarketPrice || meta.chartPreviousClose;
      if(px){ state.prices[k]=+px; ok=true; }
    }catch(_){}
  }
  setFeed("yh", ok);
}
function cheapKill(c){
  if(!c) return "empty packet";
  rollDay();
  const w=brain.weights;
  if(c.is_banned) return "banned mint";
  const blocked=creatorBlocked(c);
  if(blocked) return blocked;
  if(c.creator){
    const dw=brain.wallets[c.creator];
    if(dw && (((dw.follow||1)<0.55) || (dw.sells>=2 && dw.sells>=dw.buys))) return "deployer wallet history — kill first";
    const prior=Object.values(brain.memory||{}).filter(m=>m.creator===c.creator && m.pnl<-0.05);
    if(prior.length>=2) return "deployer rugged before under another name";
  }
  const mc=pumpMark(c);
  if(mc>0 && mc<FLOOR_MC){
    const vol=coinVol(c);
    if(!(justBonded(c) && liqOk(c) && vol>=Math.max(8000, mc*0.25) && (printing(c)||volHot(c)))) return "below $15k without vol";
  }
  if(mc>=HIGH_MC && !volStrong(c)) return "over $5M without strong vol";
  if(mc>=VOL_MC && mc<HIGH_MC && !justBonded(c) && !volStrong(c)) return "over $2M without good vol";
  if(huntBand(c) && !liqOk(c)) return "thin liq — no depth for $"+MIN_BUY;
  const met=c._metrics||analyzeCoin(c);
  if(met.sniperFarm) return "sniper farm — "+met.snipers+" first-block bots";
  if(met.sniperHot && !huntVol(c) && met.snipers>=8) return "sniper tape — "+met.snipers+" wallets in 20s";
  const vr=volRead(c);
  if(vr.dead && !justBonded(c) && pumpMark(c)>=FLOOR_MC) return "dead tape — no σ";
  const mem=c.mint && brain.memory[c.mint];
  if(mem && mem.last==="lose" && Date.now()-(mem.t||0)<6*60*1000 && (mem.pnl||0)<=-0.4) return "just lost $"+mem.tag+" — sit out";
  if(mem && mem.fills && mem.pnl < -1.5 && Date.now()-(mem.t||0)<12*60*1000) return "memory: $"+mem.tag+" already lost paper";
  if(mem && mem.veto>=12 && mem.clear===0 && Date.now()-(mem.t||0)<90*1000) return "memory: killed recently on pump/dex";
  if(patReady("huntThin") && avgPat("huntThin")<-3 && huntBand(c) && !huntVol(c)) return "learned: thin-vol $15k+ lost paper";
  if(patReady("chop") && avgPat("chop")<-2.5 && volRead(c).chop) return "learned: chop books bleed";
  if(patReady("lateHigh") && avgPat("lateHigh")<-3 && mc>=VOL_MC && !volStrong(c)) return "learned: late high MC lost";
  if(histTwin(c)<=-10) return "learned: twins of this packet lost";
  const hint=walletHint(c);
  if((w.wallet||1)>=0.9 && hint.dump>=3 && hint.follow===0) return "top wallets dumping this mint";
  const pb=brain.playbook||{};
  if(pb.avoidBoost && w.boost>=0.7 && state.boosts[c.mint]) return "paid DexScreener boost — treat as shill tape";
  if(w.boost>=0.7 && state.boosts[c.mint] && !pb.avoidBoost) return "paid DexScreener boost — treat as shill tape";
  const hasName = !!(c.name || c.symbol);
  if(w.metadata>=0.7 && !hasName && !c.image_uri && !c.description) return "no metadata / no name";
  if(w.social>=1.3 && !c.twitter && !c.website && !c.telegram && !c.image_uri && !c.description) return "no social pulse";
  if(w.cap>=1.3 && mc < 100 && (c.reply_count||0)===0 && !c.priceUsd) return "no pulse / thin cap";
  if(pb.avoidDump && hint.dump>=2 && hint.follow===0) return "study: dump wallets on this mint";
  if(pb.likeGrad && !c.complete && avgPat("curve")< -0.05 && mc<1e6) return "study: curve micros lost paper";
  if(tapeRead(pumpTag(c)).dump && mem && mem.pnl<0) return "study: tape dumping a known loser";
  const fl=flowRead(c);
  if(fl.ready){
    if(fl.sellPrint && fl.delta60<0 && !huntVol(c) && !printing(c)) return "last print SELL — no new bag";
    if(fl.exitLiq && !huntVol(c)) return "CVD down / MC up — exit liquidity";
    if(fl.sweep && fl.delta<0) return "sweep already dumping";
  }
  if(pb.likeSocial && w.social>=1.1 && !c.twitter && !c.website && !c.telegram && mc<5e6) return "study: thin social on small MC";
  return null;
}
function gradePaper(){
  book.positions.forEach(p=>{
    const m=mid(p.sym); if(!m || !p.avg) return;
    const pnl=p.qty*(m-p.avg);
    const mem = (p.mint && brain.memory[p.mint]) || memByTag(p.sym);
    if(mem) mem.mtm = pnl;
    if(p._graded) return;
    if(Math.abs(pnl)<0.25) return;
    if(pnl>0){
      lesson("QUANT","study","$"+p.sym+" MTM +"+pnl.toFixed(2),{tag:p.sym});
      talk("COACH", "$"+p.sym+" paper +"+pnl.toFixed(2)+" — keep packets that look like this");
    } else {
      lesson("QUANT","study","$"+p.sym+" MTM "+pnl.toFixed(2),{tag:p.sym});
      talk("COACH", "$"+p.sym+" paper "+pnl.toFixed(2)+" — next veto is tighter");
    }
    p._graded=true;
    rebuildPlaybook();
    expandDesk();
    saveBrain();
  });
  renderLearn();
}
function ingestCoins(data, src){
  try{
  if(!Array.isArray(data) || !data.length) return false;
  const by={};
  (state.coins||[]).forEach(c=>{ if(c && c.mint) by[c.mint]=c; });
  data.forEach(c=>{
    if(!c) return;
    if(isMajor(c)) return;
    const mint=c.mint || pumpTag(c);
    if(!mint) return;
    const prev=by[mint]||{};
    const incoming=c;
    by[mint]=Object.assign({}, prev, incoming);
    const merged=by[mint];
    const prevMc=+(prev.usd_market_cap||prev.market_cap_usd||0);
    const inMc=+(incoming.usd_market_cap||incoming.market_cap_usd||0);
    if(prevMc>0 && inMc>0 && (inMc/prevMc>2.2 || prevMc/inMc>2.2)){
      const keep=(inMc>prevMc*2.2)?prevMc:inMc;
      merged.usd_market_cap=keep;
      merged.market_cap_usd=keep;
    }
    if(!(+(incoming.usd_market_cap||incoming.market_cap_usd||0)>0) && pumpMark(prev)>0){
      merged.usd_market_cap=prev.usd_market_cap;
      merged.market_cap_usd=prev.market_cap_usd;
      merged.market_cap=prev.market_cap;
    }
    if(coinVol(incoming)<=0 && coinVol(prev)>0){
      merged.volume=prev.volume;
      merged.volume_24h=prev.volume_24h;
      merged.volume_1h=prev.volume_1h;
      merged.volume_6h=prev.volume_6h;
    }
    if(coinLiq(incoming)<=0 && coinLiq(prev)>0){
      merged.liquidity=prev.liquidity;
      merged.liquidity_usd=prev.liquidity_usd;
    }
    if(!(+incoming.priceUsd>0) && +prev.priceUsd>0) merged.priceUsd=prev.priceUsd;
    if(!(incoming._m5Tx>0) && prev._m5Tx>0) merged._m5Tx=prev._m5Tx;
    merged._tapeAt=Date.now();
    merged._src=src||merged._src||"";
    if(String(src||"").indexOf("dex")===0){
      const d=dexPairMc({marketCap:inMc, fdv:+(incoming.fdv||0), liquidity:incoming.liquidity});
      if(d>0) merged._dexMc=d;
      if(pumpUsd(prev)>0){
        merged.usd_market_cap=prev.usd_market_cap;
        merged.market_cap_usd=prev.market_cap_usd;
      } else if(!(pumpUsd(incoming)>0)){
        merged.usd_market_cap=0;
        merged.market_cap_usd=0;
      }
    }
    const tag=pumpTag(merged);
    const px=coinPx(merged);
    const mc=pumpMark(merged);
    if(tag && px) state.prices[tag]=px;
    if(tag && mc){
      state.mc = state.mc || {};
      state.mcMint = state.mcMint || {};
      state.mc[tag]=mc;
      if(merged.mint) state.mcMint[merged.mint]=mc;
      (state.series[tag]=state.series[tag]||[]).push(mc);
      if(state.series[tag].length>80) state.series[tag].shift();
      pushBar(tag, mc);
    }
    if(merged.creator) trackWallet(merged.creator, "creator", merged, 0);
  });
  const all=Object.values(by).filter(c=>c && !isMajor(c));
  const seen=new Set();
  const out=[];
  const take=(list, n)=>{
    for(const c of list){
      if(out.length>=96) break;
      const k=c.mint||pumpTag(c);
      if(!k || seen.has(k)) continue;
      seen.add(k); out.push(c);
      if(--n<=0) break;
    }
  };
  take(all.filter(c=>huntVol(c)).sort((a,b)=>trenchRank(b)-trenchRank(a)), 28);
  take(all.filter(c=>huntBand(c) && printing(c)).sort((a,b)=>trenchRank(b)-trenchRank(a)), 16);
  take(all.filter(c=>huntBand(c)).sort((a,b)=>trenchRank(b)-trenchRank(a)), 12);
  take(all.filter(tradableMc).sort((a,b)=>coinVol(b)-coinVol(a)), 18);
  take(all.filter(c=>justBonded(c) && pumpMark(c)<HIGH_MC).sort((a,b)=>trenchRank(b)-trenchRank(a)), 18);
  take(all.filter(c=>isTrench(c) && !justBonded(c)).sort((a,b)=>trenchRank(b)-trenchRank(a)), 16);
  take(all.filter(c=>{
    const born=+(c.created_timestamp||0);
    const age=born?Date.now()-born:1e15;
    const mc=pumpMark(c);
    return age<24*3600*1000 && mc>=8000 && mc<VOL_MC;
  }).sort((a,b)=>trenchRank(b)-trenchRank(a)), 14);
  take(all.filter(c=>mcBand(c)==="mid" && volStrong(c)).sort((a,b)=>coinVol(b)-coinVol(a)), 14);
  take(all.filter(c=>mcBand(c)==="high" && volStrong(c)).sort((a,b)=>coinVol(b)-coinVol(a)), 8);
  take(all.filter(tradableMc).sort((a,b)=>learnedScore(b)-learnedScore(a)), 10);
  (book.positions||[]).forEach(p=>{
    const live=all.find(c=>p.mint && c.mint===p.mint);
    if(!live) return;
    const k=live.mint||pumpTag(live);
    if(!k || seen.has(k)) return;
    if(out.length>=96) out.pop();
    seen.add(k); out.unshift(live);
  });
  state.coins=out.length?out:all.slice(0,96);
  keepOpenMarks();
  if(shift._mint && !shift.coin){
    shift.coin=state.coins.find(c=>c.mint===shift._mint)||null;
    if(shift.coin) shift.tag=pumpTag(shift.coin);
  }
  brain.scanned=(brain.scanned||0)+data.length;
  setFeed("pf", true, state.coins.length+" "+src);
  renderBoards();
  renderTrench();
  return true;
  }catch(e){ window.__gsTape=String(e&&e.stack||e); return false; }
}
function pairToCoin(p){
  const b=p.baseToken||{};
  const info=p.info||{};
  const sites=(info.websites||[]).map(w=>w.url||w).filter(Boolean);
  const socials=(info.socials||[]).map(s=>s.url||s).filter(Boolean);
  return {
    mint:b.address||p.pairAddress,
    name:b.name||b.symbol,
    symbol:b.symbol,
    description: p.description || info.imageUrl || "dex pair",
    image_uri: info.imageUrl || p.icon || "dex",
    twitter: socials.find(u=>/twitter|x\.com/i.test(u))||"",
    website: sites[0] || p.url || "",
    telegram: socials.find(u=>/t\.me/i.test(u))||"",
    created_timestamp: +(p.pairCreatedAt||0) || 0,
    last_trade_timestamp: 0,
    txns: p.txns || {},
    _m5Tx: +((p.txns&&p.txns.m5&&(p.txns.m5.buys+p.txns.m5.sells))||0),
    usd_market_cap:0,
    market_cap_usd:0,
    _dexMc:dexPairMc(p),
    fdv:+(p.fdv||0),
    volume_24h:+((p.volume&&p.volume.h24)||0),
    volume_1h:+((p.volume&&p.volume.h1)||0),
    volume_6h:+((p.volume&&p.volume.h6)||0),
    volume: p.volume || {},
    liquidity: p.liquidity || {},
    liquidity_usd:+((p.liquidity&&p.liquidity.usd)||0),
    reply_count: (p.txns&&p.txns.h1&&(p.txns.h1.buys+p.txns.h1.sells))||0,
    complete:true, is_banned:false,
    priceUsd:+(p.priceUsd||0),
    chg5:+((p.priceChange&&p.priceChange.m5)||0),
    chg1h:+((p.priceChange&&p.priceChange.h1)||0),
    chg6h:+((p.priceChange&&p.priceChange.h6)||0),
    chg24:+((p.priceChange&&p.priceChange.h24)||0)
  };
}
function ingestTrades(c, trades){
  if(!c || !Array.isArray(trades)) return;
  c._trades=trades.slice(0,80);
  c._traded=true;
  c._metrics=analyzeCoin(c);
  trades.slice(0,24).forEach(t=>{
    const row=parseTapeTrade(t);
    if(!row || !row.wallet) return;
    trackWallet(row.wallet, row.isBuy?"buy":"sell", c, row.usd||row.sol||0);
  });
}
async function enrichCoin(c){
  if(!c || !c.mint || c._enriching) return;
  if(c._traded && c._held) return;
  c._enriching=true;
  try{
    const [tr, ho, card] = await Promise.all([
      fetch("/api/tape?src=pump-trades&mint="+encodeURIComponent(c.mint)).then(r=>r.ok?r.json():null).catch(()=>null),
      fetch("/api/tape?src=pump-holders&mint="+encodeURIComponent(c.mint)).then(r=>r.ok?r.json():null).catch(()=>null),
      fetch("/api/tape?src=pump-coin&mint="+encodeURIComponent(c.mint)).then(r=>r.ok?r.json():null).catch(()=>null),
    ]);
    const trades=Array.isArray(tr)?tr:(tr&&tr.trades)||[];
    if(trades.length) ingestTrades(c, trades);
    else c._traded=true;
    const holders=Array.isArray(ho)?ho:(ho&&(ho.holders||ho.data))||[];
    if(holders.length){
      c._holders=holders; c._held=true; c._metrics=analyzeCoin(c);
      holders.slice(0,24).forEach(h=>{
        const row=parseHolder(h);
        if(row && row.address) trackWallet(row.address, row.isCreator?"creator":"hold", c, (row.share||0)*10000);
      });
    }
    else c._held=true;
    if(card && typeof card==="object" && !Array.isArray(card)){
      if(card.creator && !c.creator) c.creator=card.creator;
      if(card.description && !c.description) c.description=card.description;
      if(card.twitter) c.twitter=c.twitter||card.twitter;
      if(card.telegram) c.telegram=c.telegram||card.telegram;
      if(card.website) c.website=c.website||card.website;
    }
    await pullIntel(c);
  }catch(_){}
  c._enriching=false;
}
async function pullTrades(){
  const now=Date.now();
  if(state._tradeAt && now-state._tradeAt<12000) return;
  state._tradeAt=now;
  const coins=[];
  if(shift.coin) coins.push(shift.coin);
  (state.coins||[]).filter(huntVol).slice(0,6).forEach(c=>{ if(c && !coins.includes(c)) coins.push(c); });
  (state.fomo||state.coins||[]).slice(0,4).forEach(c=>{ if(c && !coins.includes(c)) coins.push(c); });
  for(const c of coins){
    if(!c || !c.mint) continue;
    if(c.creator) trackWallet(c.creator, "creator", c, 0);
    try{
      const res=await fetch("/api/tape?src=pump-trades&mint="+encodeURIComponent(c.mint));
      const j=await res.json();
      const trades=Array.isArray(j)?j:(j.trades||[]);
      if(Array.isArray(trades) && trades.length) ingestTrades(c, trades);
    }catch(_){}
  }
  pruneWallets();
  saveBrain();
  renderWallets();
}
function parseXHandle(s){
  const t=String(s||"").trim();
  const m=t.match(/(?:x\.com|twitter\.com)\/@?([A-Za-z0-9_]{1,15})/i);
  if(m) return m[1];
  const at=t.replace(/^@/,"");
  if(/^[A-Za-z0-9_]{1,15}$/.test(at) && !/^https?:/i.test(t)) return at;
  return "";
}
function intelOf(c){
  if(!c) return null;
  return (c.mint && brain.intel[c.mint]) || null;
}
function parseTg(s){
  const t=String(s||"");
  const m=t.match(/(?:t\.me|telegram\.me)\/([A-Za-z0-9_]{3,32})/i);
  return m?m[1]:"";
}
function absorbSocials(c, blob){
  if(!c || blob==null) return;
  const text=typeof blob==="string"?blob: JSON.stringify(blob);
  const x=parseXHandle(text) || parseXHandle(c.twitter) || parseXHandle(c.description);
  if(x && !c.twitter) c.twitter="https://x.com/"+x;
  const tg=parseTg(text) || parseTg(c.telegram) || parseTg(c.description);
  if(tg && !c.telegram) c.telegram="https://t.me/"+tg;
  if(typeof blob==="object"){
    if(blob.twitter) c.twitter=c.twitter||blob.twitter;
    if(blob.telegram) c.telegram=c.telegram||blob.telegram;
    if(blob.website) c.website=c.website||blob.website;
    if(blob.description && !c.description) c.description=blob.description;
  }
}
function markHandle(handle, win){
  if(!handle) return;
  const k=String(handle).replace(/^@/,"").toLowerCase();
  if(!k) return;
  brain.handles=brain.handles||{};
  const h=brain.handles[k]=brain.handles[k]||{handle:k,wins:0,losses:0,n:0};
  h.n++;
  if(win) h.wins++; else h.losses++;
  h.t=Date.now();
}
async function huntDexName(c){
  if(!c) return;
  const q=pumpTag(c);
  if(!q || q.length<2) return;
  try{
    const r=await fetch("/api/tape?src=dex-search&q="+encodeURIComponent(q));
    if(!r.ok) return;
    const j=await r.json();
    const pairs=(j.pairs||[]).filter(p=>p.chainId==="solana");
    const hit=pairs.find(p=>{
      const b=p.baseToken||{};
      return String(b.address||"")===c.mint || String(b.symbol||"").toUpperCase()===q;
    }) || pairs[0];
    if(!hit) return;
    const info=hit.info||{};
    (info.socials||[]).forEach(s=>{
      const url=s.url||s.handle||"";
      if(/twitter|x\.com/i.test(String(s.type||url))) c.twitter=c.twitter||url;
      if(/telegram|t\.me/i.test(String(s.type||url))) c.telegram=c.telegram||url;
    });
    const web=(info.websites||[])[0];
    if(web) c.website=c.website||web.url||web;
    if(+hit.priceUsd>0) c.priceUsd=c.priceUsd||+hit.priceUsd;
    stampChg(c, hit);
    absorbSocials(c, info);
    lesson("SEARCH","study","dex search $"+q+" · "+(c.twitter?"X hit":"no X")+" · "+pairs.length+" pairs",{tag:q,mc:pumpMark(c)});
  }catch(_){}
}
async function pullIntel(c){
  if(!c || !c.mint) return;
  const prev=brain.intel[c.mint];
  if(prev && Date.now()-(prev.t||0)<90000) return;
  brain.intel=brain.intel||{};
  absorbSocials(c, c.description);
  try{
    const r=await fetch("/api/tape?src=dex-token&mint="+encodeURIComponent(c.mint));
    const j=r.ok?await r.json():null;
    const pair=((j&&j.pairs)||[]).find(p=>p.chainId==="solana") || ((j&&j.pairs)||[])[0];
    if(pair){
      const info=pair.info||{};
      const socials=info.socials||[];
      const tw=socials.find(s=>/twitter|x/i.test(String(s.type||s.url||"")));
      const tg=socials.find(s=>/telegram|t\.me/i.test(String(s.type||s.url||"")));
      const web=(info.websites||[])[0];
      if(tw && (tw.url||tw.handle)) c.twitter=c.twitter||tw.url||tw.handle;
      if(tg && tg.url) c.telegram=c.telegram||tg.url;
      if(web && (web.url||typeof web==="string")) c.website=c.website||web.url||web;
      if(+pair.priceUsd>0) c.priceUsd=c.priceUsd||+pair.priceUsd;
      stampChg(c, pair);
      absorbSocials(c, info);
    }
  }catch(_){}
  if(!parseXHandle(c.twitter)) await huntDexName(c);
  const handle=parseXHandle(c.twitter);
  let followers=0, name="";
  if(handle){
    try{
      const xr=await fetch("/api/tape?src=x-follow&u="+encodeURIComponent(handle));
      const xj=xr.ok?await xr.json():null;
      const row=Array.isArray(xj)?xj[0]:xj;
      if(row && typeof row==="object"){
        followers=+(row.followers_count||0);
        name=row.name||"";
      }
    }catch(_){}
  }
  brain.intel[c.mint]={
    handle, followers, name,
    hasX:!!handle, hasTg:!!c.telegram, hasWeb:!!c.website,
    tag:pumpTag(c), t:Date.now()
  };
  if(handle){
    const rep=(brain.handles||{})[handle.toLowerCase()];
    const line=followers
      ? ("X @"+handle+" "+fmtMc(followers)+" flw on $"+pumpTag(c))
      : ("X @"+handle+" on $"+pumpTag(c)+(rep?(" · hist "+(rep.wins||0)+"W/"+(rep.losses||0)+"L"):" — counting"));
    lesson("SHILL","study",line,{tag:pumpTag(c)});
    share("SHILL", pumpTag(c), line);
    say("SHILL", line.slice(0,48));
  } else if(c.website || c.telegram){
    lesson("SHILL","study","$"+pumpTag(c)+" web/tg, no X handle",{tag:pumpTag(c)});
  } else {
    lesson("SEARCH","study","$"+pumpTag(c)+" still hunting socials on dex",{tag:pumpTag(c)});
  }
}
async function huntIntel(){
  const coins=[];
  const add=c=>{ if(c && c.mint && !coins.some(x=>x.mint===c.mint)) coins.push(c); };
  add(shift.coin);
  add(state.koth);
  book.positions.forEach(p=>{
    const c=(p.mint && (state.coins||[]).find(x=>x.mint===p.mint)) || coinByTag(p.sym);
    add(c);
  });
  (state.coins||[]).filter(huntVol).slice(0,10).forEach(add);
  (state.fomo||[]).slice(0,4).forEach(add);
  (state.coins||[]).filter(c=>c && (c.twitter||c.telegram)).slice(0,6).forEach(add);
  (state.coins||[]).filter(c=>justBonded(c)||isTrench(c)).slice(0,4).forEach(add);
  for(const c of coins.slice(0,14)) await pullIntel(c);
  const trend=xTrend();
  if(trend[0] && (state._pulse||0)%6===0){
    lesson("SHILL","study","X trend @"+trend[0].handle+" on "+trend[0].n+" names · vol "+fmtMc(trend[0].vol),{tag:trend[0].handle});
    say("SHILL","trend @"+trend[0].handle+" ×"+trend[0].n);
  }
}
function xTrend(){
  const hits={};
  (state.coins||[]).forEach(c=>{
    const h=parseXHandle(c.twitter) || ((intelOf(c)||{}).handle)||"";
    if(!h) return;
    const k=String(h).replace(/^@/,"").toLowerCase();
    const row=hits[k]=hits[k]||{handle:k,n:0,vol:0,mc:0};
    row.n++; row.vol+=coinVol(c); row.mc=Math.max(row.mc, pumpMark(c));
  });
  Object.values(brain.handles||{}).forEach(h=>{
    const k=String(h.handle||"").toLowerCase();
    if(!k) return;
    const row=hits[k]=hits[k]||{handle:k,n:0,vol:0,mc:0};
    row.wins=h.wins||0; row.losses=h.losses||0;
  });
  return Object.values(hits).sort((a,b)=> (b.n+((b.wins||0)*2)) - (a.n+((a.wins||0)*2)) || b.vol-a.vol);
}
async function pullPump(){
  try{
    const [freshRes, mcapRes, bondRes, volRes, liveRes] = await Promise.all([
      fetch("/api/tape?src=pump"),
      fetch("/api/tape?src=pump-mcap"),
      fetch("/api/tape?src=pump-bonded"),
      fetch("/api/tape?src=pump-vol"),
      fetch("/api/tape?src=pump-live"),
    ]);
    let ok=false;
    if(volRes.ok){
      const data=await volRes.json();
      if(ingestCoins(Array.isArray(data)?data:[], "pump-vol")) ok=true;
    }
    if(liveRes.ok){
      const data=await liveRes.json();
      if(ingestCoins(Array.isArray(data)?data:[], "pump-live")) ok=true;
    }
    if(freshRes.ok){
      const data=await freshRes.json();
      if(ingestCoins(data, "pump")) ok=true;
    }
    if(bondRes.ok){
      const data=await bondRes.json();
      if(ingestCoins(Array.isArray(data)?data:[], "pump-bonded")) ok=true;
    }
    if(mcapRes.ok){
      const data=await mcapRes.json();
      const rows=(Array.isArray(data)?data:[]).filter(c=>{
        const mc=pumpMark(c);
        const vol=coinVol(c);
        return (mc>=VOL_MC && mc<HIGH_MC && vol>=50000) || (mc>=HIGH_MC && vol>=150000);
      });
      if(rows.length) ingestCoins(rows, "pump-mcap");
    }
    if(ok){
      const now=Date.now();
      if(!state._extraAt || now-state._extraAt>14000){
        state._extraAt=now;
        await Promise.all(["pump-hot","pump-vol","pump-live","pump-bonded"].map(async src=>{
          try{
            const r=await fetch("/api/tape?src="+src);
            if(!r.ok) return;
            const d=await r.json();
            ingestCoins(Array.isArray(d)?d:[], src);
          }catch(_){}
        }));
        try{
          const dv=await fetch("/api/tape?src=dex-vol");
          const j=await dv.json();
          const pairs=(j.pairs||[]).filter(p=>{
            if(p.chainId!=="solana") return false;
            const mc=+(p.marketCap||p.fdv||0);
            const vol=Math.max(+((p.volume&&p.volume.h24)||0), +((p.volume&&p.volume.h1)||0)*10);
            if(mc<FLOOR_MC) return false;
            if(mc<VOL_MC) return true;
            if(mc<HIGH_MC) return vol>=25000;
            return vol>=Math.max(80000, mc*0.015);
          });
          ingestCoins(pairs.slice(0,36).map(pairToCoin), "dex-vol");
        }catch(_){}
        try{
          const dx=await fetch("/api/tape?src=dex-search&q=SOL");
          const j=await dx.json();
          const pairs=(j.pairs||[]).filter(p=>{
            if(p.chainId!=="solana") return false;
            const mc=+(p.marketCap||p.fdv||0);
            const vol=+((p.volume&&p.volume.h24)||0);
            if(mc<FLOOR_MC) return false;
            if(mc<VOL_MC) return true;
            if(mc<HIGH_MC) return vol>=50000;
            return vol>=Math.max(150000, mc*0.025);
          });
          pairs.sort((a,b)=>(+(b.volume&&b.volume.h24||b.marketCap||0))-(+(a.volume&&a.volume.h24||a.marketCap||0)));
          ingestCoins(pairs.slice(0,24).map(pairToCoin), "dex-mc");
        }catch(_){}
        await pullTrades();
      }
    }
  }catch(_){}
  if(!(state.coins||[]).length){
  try{
    const res=await fetch("/api/tape?src=dex-search&q=pumpfun");
    const j=await res.json();
    const pairs=(j.pairs||[]).filter(p=>{
      if(p.chainId!=="solana") return false;
      const mc=+(p.marketCap||p.fdv||0);
      const vol=+((p.volume&&p.volume.h24)||0);
      if(mc<FLOOR_MC) return false;
      if(mc<VOL_MC) return true;
      if(mc<HIGH_MC) return vol>=50000;
      return vol>=Math.max(150000, mc*0.025);
    });
    pairs.sort((a,b)=>(+(b.volume&&b.volume.h24||b.marketCap||0))-(+(a.volume&&a.volume.h24||a.marketCap||0)));
    const coins=pairs.slice(0,24).map(pairToCoin);
    ingestCoins(coins, "dex-pf");
  }catch(_){}
  }
  if(!(state.coins||[]).length) setFeed("pf", false);
  if((state.coins||[]).length) deskCycle();
}
async function pullDex(){
  try{
    const res=await fetch("/api/tape?src=dex-boosts");
    const data=await res.json();
    const list=Array.isArray(data)?data:(data.data||[]);
    state.boosts={};
    list.slice(0,40).forEach(b=>{ if(b.tokenAddress) state.boosts[b.tokenAddress]=true; });
    setFeed("dx", true, list.length+" boosts");
  }catch(_){ setFeed("dx", false); }
}
async function pullLive(){
  try{
    await Promise.allSettled([pullHL(), pullBinance(), pullYahoo(), pullPump(), pullDex(), huntIntel(), pullOpenMints()]);
    ["BTC","ETH","SOL","DOGE","TSLA","NVDA","SPX"].forEach(k=>{
      if(state.prices[k]){ (state.series[k]=state.series[k]||[]).push(state.prices[k]); if(state.series[k].length>80) state.series[k].shift(); pushBar(k, state.prices[k]); }
    });
    keepOpenMarks();
    clawFakeFdv();
    chartNames().forEach(tag=>{
      const mc=mcOf(tag); if(mc) pushBar(tag, mc);
    });
    pushBar("EQ", equity());
    gradePaper();
    renderTickers(); drawAll(); updateBook(); renderPos(); renderBoards();
    if((state.coins||[]).length) deskCycle();
  }catch(_){}
}
function pushBar(key, px){
  if(!key || !(px>0) || !isFinite(px)) return;
  state.ohlc=state.ohlc||{};
  const bars=state.ohlc[key]=state.ohlc[key]||[];
  const now=Date.now();
  const last=bars[bars.length-1];
  if(last && now-last.t<7000){
    last.h=Math.max(last.h,px); last.l=Math.min(last.l,px); last.c=px; last.v=(last.v||1)+1;
  } else {
    const o=last?last.c:px;
    bars.push({t:now,o,h:Math.max(o,px),l:Math.min(o,px),c:px,v:1});
    if(bars.length>56) bars.shift();
  }
}
function barsOf(key){
  const ohlc=state.ohlc && state.ohlc[key];
  if(ohlc && ohlc.length>1) return ohlc;
  const s=state.series[key]||[];
  const bars=[];
  for(let i=0;i<s.length;i++){
    const c=s[i], o=s[Math.max(0,i-1)];
    bars.push({t:i,o,h:Math.max(o,c),l:Math.min(o,c),c,v:1});
  }
  return bars;
}
function drawCandles(canvas, bars, asMc){
  if(!canvas) return;
  const ctx=canvas.getContext("2d");
  const w=canvas.width=Math.max(40, canvas.clientWidth*2);
  const h=canvas.height=Math.max(40, canvas.clientHeight*2);
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle="#06140c"; ctx.fillRect(0,0,w,h);
  if(!bars || bars.length<2){
    return;
  }
  const padL=8, padR=6, padT=8, volH=Math.floor(h*0.2), plotH=h-padT-volH-8;
  let min=Infinity, max=-Infinity, vmax=1;
  bars.forEach(b=>{ min=Math.min(min,b.l); max=Math.max(max,b.h); vmax=Math.max(vmax,b.v||1); });
  if(!(max>min)) { min=min*0.99; max=max*1.01 || 1; }
  const pad=(max-min)*0.12 || Math.abs(max)*0.02 || 1;
  min-=pad; max+=pad;
  const span=(max-min)||1;
  ctx.strokeStyle="#1a3a24"; ctx.lineWidth=1;
  for(let g=0;g<4;g++){
    const y=padT+(plotH*g/3);
    ctx.beginPath(); ctx.moveTo(padL,y); ctx.lineTo(w-padR,y); ctx.stroke();
  }
  const n=bars.length;
  const slot=(w-padL-padR)/n;
  const cw=Math.max(3, slot*0.62);
  bars.forEach((b,i)=>{
    const x=padL+i*slot+slot/2;
    const yO=padT+plotH-( (b.o-min)/span )*plotH;
    const yC=padT+plotH-( (b.c-min)/span )*plotH;
    const yH=padT+plotH-( (b.h-min)/span )*plotH;
    const yL=padT+plotH-( (b.l-min)/span )*plotH;
    const up=b.c>=b.o;
    ctx.strokeStyle=up?"#3dff8a":"#ff5b6e";
    ctx.fillStyle=up?"#3dff8a":"#ff5b6e";
    ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(x,yH); ctx.lineTo(x,yL); ctx.stroke();
    const top=Math.min(yO,yC), bh=Math.max(2, Math.abs(yC-yO));
    ctx.fillRect(x-cw/2, top, cw, bh);
    const vh=Math.max(1, ((b.v||1)/vmax)* (volH-6));
    ctx.globalAlpha=0.45;
    ctx.fillRect(x-cw/2, h-8-vh, cw, vh);
    ctx.globalAlpha=1;
  });
  const last=bars[bars.length-1];
  const yLast=padT+plotH-( (last.c-min)/span )*plotH;
  ctx.setLineDash([6,5]); ctx.strokeStyle=last.c>=last.o?"#3dff8a88":"#ff5b6e88";
  ctx.beginPath(); ctx.moveTo(padL,yLast); ctx.lineTo(w-padR,yLast); ctx.stroke();
  ctx.setLineDash([]);
}
function drawEquity(canvas){
  if(!canvas) return;
  const ctx=canvas.getContext("2d");
  const w=canvas.width=Math.max(40, canvas.clientWidth*2);
  const h=canvas.height=Math.max(40, canvas.clientHeight*2);
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle="#06140c"; ctx.fillRect(0,0,w,h);
  const bars=barsOf("EQ");
  const pts=bars.map(b=>b.c);
  if(pts.length<2) pts.push(book.start||1000, equity());
  const padL=10, padR=8, padT=8, padB=10;
  let min=Math.min(...pts, book.start||1000), max=Math.max(...pts, book.start||1000);
  const span=(max-min)||1;
  min-=span*0.08; max+=span*0.08;
  const sp=max-min;
  const yOf=v=> padT + (h-padT-padB) * (1-(v-min)/sp);
  ctx.strokeStyle="#1a3a24"; ctx.beginPath();
  const y0=yOf(book.start||1000);
  ctx.setLineDash([4,4]); ctx.moveTo(padL,y0); ctx.lineTo(w-padR,y0); ctx.stroke(); ctx.setLineDash([]);
  ctx.beginPath();
  pts.forEach((v,i)=>{
    const x=padL+(i/Math.max(1,pts.length-1))*(w-padL-padR);
    const y=yOf(v);
    i?ctx.lineTo(x,y):ctx.moveTo(x,y);
  });
  const last=pts[pts.length-1];
  const up=last>=(book.start||1000);
  ctx.strokeStyle=up?"#3dff8a":"#ff5b6e"; ctx.lineWidth=2.4; ctx.stroke();
  const xLast=w-padR, yLast=yOf(last);
  ctx.lineTo(xLast,h-padB); ctx.lineTo(padL,h-padB); ctx.closePath();
  ctx.fillStyle=up?"#3dff8a22":"#ff5b6e22"; ctx.fill();
}
function drawVol(canvas){
  if(!canvas) return;
  const ctx=canvas.getContext("2d");
  const w=canvas.width=Math.max(40, canvas.clientWidth*2);
  const h=canvas.height=Math.max(40, canvas.clientHeight*2);
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle="#06140c"; ctx.fillRect(0,0,w,h);
  const rows=(state.fomo||state.coins||[]).filter(c=>!isMajor(c)).slice(0,8).map(c=>({tag:pumpTag(c),v:coinVol(c)}));
  if(!rows.length){
    return;
  }
  const max=Math.max(1, ...rows.map(r=>r.v));
  const padL=10, padR=8, padT=8, padB=10;
  const slot=(w-padL-padR)/rows.length;
  rows.forEach((r,i)=>{
    const bh=Math.max(2, (r.v/max)*(h-padT-padB));
    const x=padL+i*slot+slot*0.18;
    ctx.fillStyle=i===0?"#3dff8a":"#1a6a3a";
    ctx.fillRect(x, h-padB-bh, slot*0.64, bh);
  });
}
function drawTrades(canvas){
  if(!canvas) return;
  const ctx=canvas.getContext("2d");
  const w=canvas.width=Math.max(40, canvas.clientWidth*2);
  const h=canvas.height=Math.max(40, canvas.clientHeight*2);
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle="#06140c"; ctx.fillRect(0,0,w,h);
  const ts=(book.trades||[]).slice(0,24).reverse();
  if(!ts.length){
    return;
  }
  const padL=10, padR=8, padT=8, padB=10;
  const max=Math.max(1, ...ts.map(t=>Math.abs(t.pnl||0)));
  const slot=(w-padL-padR)/ts.length;
  const midY=padT+(h-padT-padB)/2;
  ctx.strokeStyle="#1a3a24"; ctx.beginPath(); ctx.moveTo(padL,midY); ctx.lineTo(w-padR,midY); ctx.stroke();
  ts.forEach((t,i)=>{
    const bh=Math.max(2, (Math.abs(t.pnl||0)/max)*(h-padT-padB)*0.46);
    const x=padL+i*slot+slot*0.2;
    ctx.fillStyle=(t.pnl||0)>=0?"#3dff8a":"#ff5b6e";
    if((t.pnl||0)>=0) ctx.fillRect(x, midY-bh, slot*0.6, bh);
    else ctx.fillRect(x, midY, slot*0.6, bh);
  });
}
function drawSparks(){
  const el=document.getElementById("posSparks"); if(!el) return;
  const pos=book.positions||[];
  if(!pos.length){ el.innerHTML=""; return; }
  el.innerHTML=pos.slice(0,6).map((p,i)=>`<div class="spark"><label>$${esc(p.sym)}</label><canvas id="sp${i}"></canvas></div>`).join("");
  pos.slice(0,6).forEach((p,i)=>drawCandles(document.getElementById("sp"+i), barsOf(p.sym), true));
}
function drawChart(c,s,col){ drawCandles(c, Array.isArray(s)?s.map((v,i)=>({o:s[Math.max(0,i-1)],h:v,l:v,c:v,v:1})):barsOf(""), false); }
function drawAll(){
  const names=chartNames();
  names.forEach((n,i)=>{
    const lab=document.getElementById("c"+(i+1)+"l");
    const bars=barsOf(n);
    const last=bars[bars.length-1];
    const first=bars[0];
    const chg = last && first && first.o ? ((last.c-first.o)/first.o)*100 : 0;
    const chgTxt=Math.abs(chg)<0.05 ? "flat" : ((chg>=0?"+":"")+chg.toFixed(1)+"%");
    if(lab) lab.innerHTML = "$"+n+" <span>"+fmtMc(mcOf(n)|| (last&&last.c) || 0)+"</span> <em class=\""+(chg>=0?"up":"dn")+"\">"+chgTxt+"</em>";
    drawCandles(document.getElementById("c"+(i+1)), bars, true);
  });
  const lab4=document.getElementById("c4l");
  if(lab4) lab4.innerHTML = "EQUITY <span>$"+equity().toFixed(2)+"</span> <em class=\""+(totalPnl()>=0?"up":"dn")+"\">real "+(book.realized>=0?"+$":"-$")+Math.abs(book.realized||0).toFixed(2)+"</em>";
  drawEquity(document.getElementById("c4"));
  const lab5=document.getElementById("c5l");
  const hot=(state.fomo&&state.fomo[0]) || state.koth;
  if(lab5) lab5.innerHTML = "TAPE VOL <span>"+(hot?("$"+pumpTag(hot)): "—")+"</span>";
  drawVol(document.getElementById("c5"));
  const lab6=document.getElementById("c6l");
  const fills=(book.trades||[]).length;
  if(lab6) lab6.innerHTML = "TRADES <span>"+fills+"</span> <em class=\""+(totalPnl()>=0?"up":"dn")+"\">"+(totalPnl()>=0?"+":"-$")+Math.abs(totalPnl()).toFixed(2)+"</em>";
  drawTrades(document.getElementById("c6"));
  drawSparks();
  drawTv();
}
let sceneI=0;
function tickWindow(){
  const el=document.getElementById("pitScene");
  if(!el) return;
  const cycle={
    farm:["dawn","day","day","dusk"],
    office:["day","dusk","dusk","night"],
    night:["night","rain","night","neon"],
    alpha:["neon","dusk","rain","night"]
  };
  const list=cycle[state.view]||cycle.alpha;
  sceneI=(sceneI+1)%list.length;
  el.dataset.scene=list[sceneI];
}
function drawTv(){
  const c=document.getElementById("tvChart");
  const tag=(state.koth && pumpTag(state.koth)) || (chartNames()[0]||"");
  if(c && tag) drawCandles(c, barsOf(tag), true);
  const stories=tvStories();
  const head=document.getElementById("tvHeadline");
  if(head && stories.length){
    state._tvI=((state._tvI||0)+1)%stories.length;
    head.textContent=stories[state._tvI];
  }
  const crawl=document.getElementById("tvCrawl");
  if(crawl) crawl.textContent=stories.concat(["LASTPRINT PAPER · LIVE SEND OFF · $25 MIN"]).join("   ·   ")+"   ·   ";
  const lab=document.getElementById("tvTag");
  if(lab) lab.textContent = tag ? ("CH 7  $"+tag) : "CH 7  TRENCH";
}
function tvStories(){
  const out=[];
  if(state.koth) out.push("KOTH $"+pumpTag(state.koth)+"  "+fmtMc(pumpMark(state.koth))+"  on curve");
  (state.fomo||[]).slice(0,5).forEach(c=>{
    out.push("$"+pumpTag(c)+"  "+fmtMc(pumpMark(c))+"  vol "+fmtMc(coinVol(c)));
  });
  if(shift.tag) out.push((shift.line||("SCOUT $"+shift.tag)).slice(0,64));
  (book.journal||[]).slice(0,4).forEach(j=>{
    const t=String(j.text||j.msg||"").replace(/<[^>]+>/g," ").slice(0,56);
    if(t) out.push((j.who||"DESK")+"  "+t);
  });
  const f=brain.funnel||{};
  out.push("FUNNEL  "+(f.scanned||0)+" scan  "+(f.cleared||0)+" clear  "+(f.filled||0)+" fill");
  out.push((book.bought||0)+" PAPER BUYS   "+(book.positions||[]).length+" OPEN   CASH $"+((book.cash||0).toFixed(0)));
  out.push("TRENCH NEWS  $15k+  ·  over $2M needs vol  ·  they pick the tape  ·  live send off");
  return out.filter(Boolean);
}
function say(who, text, bad){
  talk(who, text);
  if(state.agents[who]) pop(who, text.slice(0,22), !!bad);
  const r=document.getElementById("r-"+who);
  if(r){ r.classList.add("busy"); setTimeout(()=>r.classList.remove("busy"),1200); }
}
function renderShift(){
  const bar=document.getElementById("shiftBar");
  if(bar){
    bar.querySelectorAll("[data-view]").forEach(b=>{
      b.classList.toggle("on", b.dataset.view===state.view);
      b.classList.toggle("hot", b.dataset.view===shift.room);
    });
  }
  const line=document.getElementById("shiftLine");
  if(line) line.textContent=shift.line;
  const hint=document.getElementById("hint");
  if(hint) hint.textContent=shift.line+" · live send off";
  document.querySelectorAll(".views [data-view]").forEach(b=>{
    b.classList.toggle("hot", b.dataset.view===shift.room);
  });
}
function pickShiftCoin(){
  const held=new Set(book.positions.map(p=>p.sym));
  const heldMint=new Set(book.positions.map(p=>p.mint).filter(Boolean));
  const pool=(state.coins||[]).filter(x=>{
    if(!tradableMc(x)) return false;
    const tag=pumpTag(x);
    if(!tag || held.has(tag) || (x.mint && heldMint.has(x.mint))) return false;
    if(x.mint && state._cool && Date.now()<(state._cool[x.mint]||0)) return false;
    const mem=x.mint && brain.memory[x.mint];
    if(mem && mem.last==="veto" && Date.now()-(mem.t||0)<18000) return false;
    return true;
  });
  if(!pool.length) return null;
  const scalp=pool.filter(scalpHot).sort((a,b)=>trenchRank(b)-trenchRank(a));
  if(scalp[0]){ scalp[0]._lane="scalp"; return scalp[0]; }
  shift.lane=(shift.lane||0)+1;
  const plan=profitPlan();
  const lane=plan.trenchOnly ? (shift.lane%5) : (shift.lane%6);
  let picked=null;
  const hunt=pool.filter(c=>huntVol(c)).sort((a,b)=>{
    const pa=printing(a)?1:0, pb=printing(b)?1:0;
    if(pb!==pa) return pb-pa;
    return trenchRank(b)-trenchRank(a);
  });
  if(lane<=3){
    picked=hunt[0];
    if(picked) picked._lane="hunt-vol";
  }
  if(!picked && lane<=2){
    const band=pool.filter(c=>huntBand(c) && printing(c)).sort((a,b)=>trenchRank(b)-trenchRank(a));
    picked=band[0];
    if(picked) picked._lane="hunt-print";
  }
  if(!picked && (lane===0 || lane===3)){
    const vol=pool.filter(c=>coinVol(c)>0 && pumpMark(c)<HIGH_MC).sort((a,b)=>coinVol(b)-coinVol(a));
    picked=vol[0];
    if(picked) picked._lane="vol";
  }
  if(!picked && lane<=2){
    const trench=pool.filter(c=>isTrench(c)||justBonded(c)).sort((a,b)=>trenchRank(b)-trenchRank(a));
    picked=trench[0];
    if(picked) picked._lane=justBonded(picked)?"bonded":"trench";
  }
  if(!picked && lane===3){
    const mid=pool.filter(c=>mcBand(c)==="mid" && volStrong(c)).sort((a,b)=>coinVol(b)-coinVol(a));
    picked=mid[0];
    if(picked) picked._lane="mid-vol";
  }
  if(!picked && !plan.trenchOnly && lane===4){
    const high=pool.filter(c=>mcBand(c)==="high" && volStrong(c)).sort((a,b)=>coinVol(b)-coinVol(a));
    picked=high[0];
    if(picked) picked._lane="high-vol";
  }
  if(!picked){
    const trench=pool.filter(c=>isTrench(c)||justBonded(c)).sort((a,b)=>trenchRank(b)-trenchRank(a));
    picked=trench[0] || pool.slice().sort((a,b)=>learnedScore(b)-learnedScore(a))[0];
    if(picked) picked._lane=mcBand(picked);
  }
  if(picked && state._lastScout && picked.mint===state._lastScout){
    const other=hunt.find(x=>x.mint!==state._lastScout) || pool.filter(x=>x.mint!==state._lastScout).sort((a,b)=>trenchRank(b)-trenchRank(a))[0];
    if(other){ picked=other; picked._lane=picked._lane||(huntBand(other)?"hunt-15k+":"trench"); }
  }
  brain.scanned=(brain.scanned||0)+1;
  if(picked && picked.mint) state._lastScout=picked.mint;
  return picked;
}
function keepMoving(){
  sanitizeDesk();
  const now=Date.now();
  const t=state.ticket;
  if(t){
    if(!t._at) t._at=now;
    if(t.status==="LIVE" || t.status==="DEAD"){ state.ticket=null; }
    else if(now-t._at>2500){
      try{
        if(t.status==="RISK") riskStamp();
        else if(t.status==="WAIT_APPROVE") approve();
      }catch(_){}
      if(state.ticket && now-(state.ticket._at||now)>4000){
        log("HEAD","unstick "+(t.id||"")+" $"+t.sym,"no");
        state.ticket=null;
      }
    }
  }
  (book.positions||[]).forEach(p=>{
    if(p.holdX) return;
    const age=p.opened ? now-new Date(p.opened).getTime() : 0;
    if(isHuntPos(p)){
      if(age>15*60*1000 && posPnl(p)<2.5) p._force="hunt bag 15m still flat";
      return;
    }
    if(!p.moon && age>RISK.maxHoldMs) p._force="max hold "+Math.round(age/60000)+"m";
    if(age>16*60*1000) p._force=p._force||("stale bag "+Math.round(age/60000)+"m");
  });
}
function forceStaleExit(){
  if(ticketBusy()) return false;
  const huntHit=(book.positions||[]).find(p=>p._force && isHuntPos(p) && holdAge(p)>10*60*1000);
  if(huntHit) return actExit({pos:huntHit, why:huntHit._force, pnl:posPnl(huntHit), verb:"CLOSE"});
  const hit=(book.positions||[]).find(p=>p._force && !p.holdX && !isHuntPos(p) && holdAge(p)>RISK.maxHoldMs);
  if(hit) return actExit({pos:hit, why:hit._force, pnl:posPnl(hit), verb:"CLOSE"});
  return false;
}
function nowGap(t){ return Date.now()-(+t||0); }
function starveFill(){
  if(serverLive()) return false;
  if(state.ticket && state.ticket.status!=="CHAIN" && Date.now()-(state.ticket._at||0)>2500) state.ticket=null;
  if(ticketBusy()) return false;
  if(livePosCount()>=deskMaxPos()) return false;
  const last=((book.trades||[])[0]||{}).t||0;
  const lastMs=last>1e12?last: last>1e9?last*1000:last;
  const pace=hourPace();
  const gap=(pace.behind||pace.hungry)?2500:7000;
  if(lastMs && nowGap(lastMs)<gap) return false;
  if(spendable()<MIN_BUY) return false;
  const bag=(state.coins||[]).filter(x=>{
    if(!x || !x.mint || isMajor(x) || x.is_banned) return false;
    const mc=pumpMark(x);
    if(!(mc>=FLOOR_MC) || mc>=MEGA_MC) return false;
    if(mintBusy(x.mint)) return false;
    if(mcRead(x).lie) return false;
    return huntBand(x) || printing(x) || justBonded(x);
  }).sort((a,b)=>{
    const ha=huntVol(a)?0:1, hb=huntVol(b)?0:1;
    if(ha!==hb) return ha-hb;
    const pa=printing(a)?0:1, pb=printing(b)?0:1;
    if(pa!==pb) return pa-pb;
    return lastPrintMs(b)-lastPrintMs(a);
  });
  const force=!!(pace.behind||pace.hungry);
  const pick=bag.filter(x=>huntVol(x)||printing(x)).slice(0, force?2:3);
  const tryBag=pick.length?pick:bag.slice(0,1);
  for(const c of tryBag){
    const miss=fillNow(c, force);
    if(!miss){ window.__gsMiss=""; return true; }
    window.__gsMiss="$"+pumpTag(c)+" "+miss;
  }
  if(!bag.length) window.__gsMiss="no $15k names on tape";
  return false;
}
function fillExtra(){
  if(spendable()<MIN_BUY) return;
  const extra=typeof pickShiftCoin==="function"?pickShiftCoin():null;
  if(!extra || !extra.mint) return;
  if(mintBusy(extra.mint)) return;
  fillNow(extra);
}
function fillNow(c, force){
  if(!c) return "empty";
  if(livePosCount()>=deskMaxPos()) return "book full — "+deskMaxPos()+" bags";
  if(!(c.mint && tapeMc(c)>0)) return "no MC mark";
  const gate0=liveGate(c);
  if(gate0) return gate0;
  const busy=mintBusy(c.mint);
  if(busy) return busy;
  const floorKill=cheapKill(c);
  if(floorKill && /below \$15k|thin liq|sniper farm|over \$/.test(floorKill)) return floorKill;
  const met=c._metrics||analyzeCoin(c);
  if(met.sniperFarm) return "sniper farm — "+met.snipers+" first-block bots";
  let hudd={size:ticketSize(),pass:false,buyN:2,passN:0};
  if(!force){
    hudd=huddleSize(c);
    if(hudd.pass) return "desk pass — "+(hudd.buyN||0)+" yes / "+(hudd.passN||0)+" no";
    const gate=riskGate(c, huntVol(c)?Math.max(0.5, scorePacket(c).total):scorePacket(c).total);
    if(gate) return gate;
    const plan=profitPlan();
    if(plan.needHunt && !(huntVol(c)||volHot(c)||printing(c))) return "DEFEND — wait for heat";
  }
  const sized=Math.max(MIN_BUY, Math.min(solCap(), hudd.size||ticketSize(), ticketSize()*(huntVol(c)?1.15:1)*(volRead(c).chop?0.85: volRead(c).expand?1.12:1), deskCeil(), spendable()));
  if(sized<MIN_BUY) return spendable()<MIN_BUY ? ("vault — keep $"+cashVault().toFixed(0)+" dry powder") : "LOCK parking size — not a kill";
  const p=pumpPacket(c);
  state._lastFill=Date.now();
  brain.seen++; brain.clear++; rememberCoin(c,"clear","paper");
  say("HEAD","ticket $"+p.tag+" $"+sized.toFixed(0)+" · "+(force?"FAST":"huddle"));
  proposeTicket(p.tag, "buy", sized, c.mint, {auto:true, force:!!force});
  const t=state.ticket;
  if(t){ t.risk="CLEAR"; t.status="WAIT_APPROVE"; t._at=Date.now(); }
  try{ approve(); }catch(_){}
  shift.line="FILL $"+p.tag+" $"+sized.toFixed(0)+(huntVol(c)?" hunt-vol":"")+" · paper";
  shift.step="farm"; shift.coin=null; shift.tag="";
  renderPipe(); renderPos();
  return null;
}
function deskCycle(){
  keepMoving();
  if(serverLive()) return;
  if(forceStaleExit()) return;
  if(starveFill()) return;
  if(nowGap(((book.trades||[])[0]||{}).t||state._t0||Date.now())>80*1000){
    shift.step="farm"; shift.coin=null; shift.tag=""; shift._mint="";
  }
  if(state.ticket && state.ticket.status==="WAIT_APPROVE"){
    const t=state.ticket;
    if(t.side==="buy" && book.positions.some(p=>t.mint && p.mint===t.mint)){
      t.status="LIVE";
      return;
    }
    if(t.side==="sell" && !book.positions.some(p=> (t.closeId && p.id===t.closeId) || (t.mint && p.mint===t.mint))){
      t.status="DEAD";
      state.ticket=null;
      return;
    }
    shift.room="alpha";
    shift.line="ALPHA SNIPER filling $"+t.sym;
    renderShift();
    approve();
    return;
  }
  if(state.ticket && state.ticket.status==="RISK"){
    shift.room="alpha";
    shift.line="ALPHA RISK stamping $"+state.ticket.sym;
    renderShift();
    riskStamp();
    return;
  }
  if(!ticketBusy()){
    const exit=pickExit();
    if(exit && exit.pos){ actExit(exit); return; }
  }
  if(!shift.coin && shift._mint){
    shift.coin=(state.coins||[]).find(c=>c.mint===shift._mint)||null;
    if(shift.coin){ shift.tag=pumpTag(shift.coin); shift._miss=0; }
  }
  if((shift.step==="office"||shift.step==="night"||shift.step==="check") && !shift.coin){
    shift._miss=(shift._miss||0)+1;
    if(shift._mint && shift._miss<1){
      renderShift();
      return;
    }
    shift.step="farm";
    shift._mint=""; shift.tag=""; shift._miss=0;
  }
  if(shift.step==="farm" || !shift.coin){
    let c=pickShiftCoin();
    if(!c){
      c=(state.fomo||[]).find(x=>x && tradableMc(x) && !book.positions.some(p=>p.mint===x.mint));
    }
    if(!c){
      const pulse=pulseSignal();
      if(book.positions.length){
        shift.step="farm";
        shift.coin=null; shift.tag=""; shift._mint="";
        shift.room="alpha";
        shift.line="SCOUT empty · EXIT watching open book";
        renderShift();
        return;
      }
      shift.room="farm";
      shift.line="SCOUT hunting tape · pulse "+pulse.go.toFixed(2);
      renderShift(); renderFunnel();
      return;
    }
    shift.coin=c;
    shift.tag=pumpTag(c);
    shift._mint=c.mint||"";
    shift.step="office";
    shift.room="farm";
    bumpFunnel("scanned");
    enrichCoin(c);
    const sc0=scorePacket(c);
    const lane=c._lane||mcBand(c);
    const laneTxt=lane==="bonded"?"just bonded": lane==="trench"?"trench": lane==="mid-vol"||lane==="mid"?"mid vol": lane==="high-vol"||lane==="high"?"high vol":lane;
    const r=mcRead(c);
    postThread(c,"SEARCH","scout", r.line+" score "+sc0.total.toFixed(2),{score:sc0});
    shift.line="SCOUT "+r.line+" · "+sc0.total.toFixed(2);
    rememberCoin(c,"seen","research");
    const bits=studyCoin(c);
    lesson("SEARCH","study","$"+shift.tag+" "+bits.slice(0,2).join(" · "),{tag:shift.tag,mc:pumpMark(c)});
    lesson("ARCHIVE","study","logged $"+shift.tag+" mc "+fmtMc(pumpMark(c))+" vol "+fmtMc(coinVol(c)),{tag:shift.tag,mc:pumpMark(c)});
    say("SEARCH","scout $"+shift.tag+" "+laneTxt+" "+fmtMc(pumpMark(c))+" — "+bits[0]);
    say("CHECK","re SEARCH — "+(bits[1]||"got packet"));
    share("SEARCH", shift.tag, bits[0]);
    if(scalpHot(c) || huntVol(c)){
      const met=c._metrics||analyzeCoin(c);
      const kill=cheapKill(c) || hardVeto(c, sc0) || (met.sniperFarm && "sniper farm — "+met.snipers+" bots");
      if(!kill){
        const miss=fillNow(c);
        if(!miss){ fillExtra(); return; }
        shift.line=(scalpHot(c)?"SCALP":"HUNT")+" GATE $"+shift.tag+" — "+miss;
      } else {
        shift.line="AUDIT REJECT  $"+shift.tag+" — "+kill;
        rememberCoin(c,"veto",kill);
        bumpFunnel("skipped");
        book.refused++;
        shift.coin=null; shift.tag="";
      }
    }
    renderShift(); renderFunnel();
    saveBrain();
    return;
  }
  if(shift.step==="office"){
    const c=shift.coin;
    enrichCoin(c);
    if(huntVol(c) && c._traded){
      const scH=scorePacket(c);
      const met=c._metrics||analyzeCoin(c);
      const kill=cheapKill(c) || hardVeto(c, scH) || (met.sniperFarm && ("sniper farm — "+met.snipers+" bots"));
      if(!kill){
        const miss=fillNow(c);
        if(!miss){ fillExtra(); return; }
        shift.line="HUNT GATE $"+shift.tag+" — "+miss;
        shift.step="farm"; shift.coin=null; shift.tag="";
        renderShift(); return;
      }
      if(met.sniperFarm){
        shift.line="AUDIT REJECT  $"+shift.tag+" — "+kill;
        rememberCoin(c,"veto",kill);
        bumpFunnel("skipped");
        book.refused++;
        shift.step="farm"; shift.coin=null; shift.tag="";
        renderShift(); return;
      }
    }
    const kill=cheapKill(c);
    const sc=scorePacket(c);
    const hard=kill || hardVeto(c, sc);
    if(hard){
      shift.room="office";
      shift.step="farm";
      shift.line="AUDIT REJECT  $"+shift.tag+" — "+hard;
      say("RUG","NO $"+shift.tag+" — "+hard, true);
      say("CHECKER","auditor rejected — terminal", true);
      postThread(c,"RUG","veto",hard);
      brain.seen++; brain.veto++; bumpReason(hard); rememberCoin(c,"veto",hard);
      bumpFunnel("skipped");
      lesson("RUG","veto","NO $"+shift.tag+" — "+hard,{tag:shift.tag,mc:pumpMark(c)});
      book.refused++;
      log("RUG","REFUSE $"+shift.tag+" — "+hard,"no");
      shift.coin=null; shift.tag="";
      renderLearn(); renderFunnel(); updateBook(); persist(); saveBrain(); renderShift();
      return;
    }
    shift.room="office";
    shift.step="night";
    shift.line="AUDIT $"+shift.tag+" audit "+sc.audit.toFixed(2)+" narr "+sc.narrative.toFixed(2);
    postThread(c,"RUG","audit","audit "+sc.audit.toFixed(2)+(walletHint(c).dump?" dump flags":" organic-ish"),{score:sc});
    postThread(c,"SHILL","narrative","narrative "+sc.narrative.toFixed(2)+(featuresOf(c).social?" has socials":" thin social")+(isDerivative(c)?" derivative −30%":""),{score:sc});
    postThread(c,"QUANT","timing","timing "+sc.timing.toFixed(2)+" pulse "+sc.go.toFixed(2),{score:sc});
    say("RUG","auditor $"+shift.tag+" "+sc.audit.toFixed(2));
    say("SHILL","narrative $"+shift.tag+" "+sc.narrative.toFixed(2));
    say("QUANT","timing $"+shift.tag+" pulse "+sc.go.toFixed(2));
    bumpFunnel("cleared");
    renderShift(); renderFunnel();
    return;
  }
  if(shift.step==="night"){
    const c=shift.coin;
    const flow=flowVote(c);
    const social=socialVote(c);
    postThread(c, flow.who, flow.ok?"flow":"veto", flow.line);
    postThread(c, social.who, social.ok?"social":"veto", social.line);
    say("WHALE", "$"+shift.tag+" FLOW "+(flow.ok?"yes":"no")+" — "+flow.line, !flow.ok);
    say("SHILL", "$"+shift.tag+" SOCIAL "+(social.ok?"yes":"no")+" — "+social.line, !social.ok);
    if(!flow.ok || !social.ok){
      const why=(!flow.ok?flow.line:social.line);
      shift.room="night";
      shift.step="farm";
      shift.line="FLOW/SOCIAL NO  $"+shift.tag+" — "+why;
      brain.seen++; brain.veto++; bumpReason(why); rememberCoin(c,"veto",why);
      bumpFunnel("skipped");
      book.refused++;
      log("WHALE","SKIP $"+shift.tag+" — "+why,"no");
      shift.coin=null; shift.tag="";
      renderLearn(); renderFunnel(); persist(); saveBrain(); renderShift();
      return;
    }
    shift.room="night";
    shift.step="check";
    shift.line="FLOW+SOCIAL yes $"+shift.tag+" → CHECKER";
    renderShift(); renderFunnel();
    return;
  }
  if(shift.step==="check"){
    const scN=scorePacket(shift.coin);
    const chk=checkerVeto(shift.coin, scN);
    if(chk){
      shift.room="night";
      shift.step="farm";
      shift.line="CHECKER NO  $"+shift.tag+" — "+chk;
      say("MONITOR","$"+shift.tag+" on the refuse board");
      say("CHECKER","NO $"+shift.tag+" — "+chk, true);
      postThread(shift.coin,"CHECKER","veto",chk);
      brain.seen++; brain.veto++; bumpReason(chk); rememberCoin(shift.coin,"veto",chk);
      bumpFunnel("skipped");
      lesson("CHECKER","veto","NO $"+shift.tag+" — "+chk,{tag:shift.tag,mc:pumpMark(shift.coin)});
      lesson("MONITOR","veto","$"+shift.tag+" refuse board",{tag:shift.tag});
      lesson("AUDITOR","study",chk,{tag:shift.tag});
      rebuildPlaybook();
      book.refused++;
      log("CHECKER","REFUSE $"+shift.tag+" — "+chk,"no");
      shift.coin=null; shift.tag="";
      renderLearn(); renderFunnel(); updateBook(); persist(); saveBrain(); renderShift();
      return;
    }
    shift.room="night";
    shift.step="alpha";
    bumpFunnel("confirmed");
    postThread(shift.coin,"CHECKER","clear","approve "+scN.total.toFixed(2)+" — no contradiction");
    const brief=composeBrief(shift.coin);
    say("ARCHIVE","brief $"+shift.tag+" · "+(brief.lines||[]).length+" facts · no new claims");
    shift.line="CHECKER YES  $"+shift.tag+" score "+scN.total.toFixed(2)+" → FILL";
    say("MONITOR","$"+shift.tag+" not killed — SEARCH");
    say("CHECKER","re MONITOR — pass $"+shift.tag+" score "+scN.total.toFixed(2));
    renderShift(); renderFunnel();
    return;
  }
  shift.room="alpha";
  if(ticketBusy()){ renderShift(); return; }
  const c=shift.coin;
  if(!c){ shift.step="farm"; renderShift(); return; }
  const miss=fillNow(c);
  if(!miss){ fillExtra(); return; }
  if(miss){
    const soft=/vault|heat cap|LOCK|desk pass|desk still|cluster|scratches/i.test(miss);
    shift.line=(soft?"HOLD  ":"RISK GATE  ")+"$"+pumpTag(c)+" — "+miss;
    say("RISK", "$"+pumpTag(c)+" "+miss, !soft);
    if(!soft) rememberCoin(c,"veto",miss);
    bumpFunnel("skipped");
    if(!soft) book.refused++;
    log("RISK",(soft?"HOLD":"SKIP")+" $"+pumpTag(c)+" — "+miss, soft?"":"no");
    shift.step="farm"; shift.coin=null; shift.tag="";
    renderLearn(); renderFunnel(); persist(); renderShift();
  }
}
function pulse(){
  try{
  window.__gsBeat=Date.now();
  const list=rosterList();
  const a=list[Math.floor(Math.random()*list.length)];
  const s=seatOf(a.id); go(a.id,s.x,s.y,true);
  const r=document.getElementById("r-"+a.id); if(r) r.classList.add("busy");
  setTimeout(()=>{ if(r) r.classList.remove("busy"); },1400);
  state._pulse=(state._pulse||0)+1;
  if(state._pulse%2===0) studyPulse();
  if(state._pulse%3===0) huntIntel();
  if(state._pulse%5===0) expandDesk();
  keepOpenMarks();
  updateBook();
  renderPos();
  if(Math.random()>0.35) chatter();
  deskCycle();
  if((state.coins||[]).some(scalpHot)) deskCycle();
  if(Math.random()>0.72){
    const w=list[Math.floor(Math.random()*list.length)];
    const s2=seatOf(w.id);
    go(w.id, s2.x+(Math.random()*6-3), s2.y+(Math.random()*4-2), false);
    setTimeout(()=>{ const back=seatOf(w.id); go(w.id,back.x,back.y,true); },1600);
  }
  }catch(e){ window.__gsPulse=String(e&&e.stack||e); }
}
function setView(v){
  const changing = state.view!==v;
  const rm=document.getElementById("room");
  if(changing && rm) rm.classList.add("swap");
  state.view=v;
  appEl.classList.add("alpha");
  appEl.classList.toggle("farm",v==="farm");
  appEl.classList.toggle("night",v==="night");
  document.querySelectorAll(".views button").forEach(b=>b.classList.toggle("on",b.dataset.view===v));
  const floorBtns=document.getElementById("floorBtns");
  if(floorBtns) floorBtns.style.display=v==="office"?"flex":"none";
  const mode=document.getElementById("modeTag");
  if(mode) mode.textContent="PAPER · "+v.toUpperCase();
  const bb=document.querySelector(".big-board b");
  if(bb) bb.textContent = v==="alpha" ? "LASTPRINT · pump.fun · PAPER" : v==="night" ? "LASTPRINT · REFUSE BOARD · PAPER" : v==="farm" ? "LASTPRINT · WORK FARM · PAPER" : "LASTPRINT · NYSE PIT · PAPER";
  const paint=()=>{
    layout(); renderTickers(); renderBoards(); renderShift();
    if(rm) rm.classList.remove("swap");
  };
  if(changing && rm){
    window.__gsTimers=window.__gsTimers||[];
    window.__gsTimers.push(setTimeout(paint, 140));
  } else paint();
}
function setFloor(f){ state.floor=f; document.querySelectorAll(".floors button").forEach(b=>b.classList.toggle("on",b.dataset.floor===f)); layout(); renderTickers(); }
function diskText(){
  return JSON.stringify({
    "keys.local.json": { venue:book.cfg.venue, watchAddr: book.cfg.watchAddr? book.cfg.watchAddr.slice(0,4)+"…":"", canWithdraw:false, liveSend:false },
    "tickets.json": state.ticket, "positions.json": book.positions,
    "wallets.json": topWallets().map(w=>({addr:shortAddr(w.addr),follow:w.follow,vol:w.vol,kind:w.kind,buys:w.buys,sells:w.sells})),
    "fomo.json": (state.fomo||[]).slice(0,6).map(c=>({tag:pumpTag(c),mc:pumpMark(c),fomo:+fomoScore(c).toFixed(0),live:!!c.is_currently_live})),
    "patterns.json": brain.patterns,
    "playbook.json": brain.playbook,
    "lessons.json": (brain.lessons||[]).slice(0,12),
    "agents.json": Object.values(brain.agents||{}).map(a=>({id:a.id,studied:a.studied,fills:a.fills,vetoes:a.vetoes,wins:a.wins,losses:a.losses,last:a.last})),
    "huddles.json": (brain.huddles||[]).slice(0,8),
    "inbox.json": (brain.inbox||[]).slice(0,8),
    "funnel.json": brain.funnel,
    "pulse.json": brain.pulse,
    "day.json": brain.day,
    "creators.json": Object.values(brain.creators||{}).slice(0,8),
    "briefs.json": (brain.briefs||[]).slice(0,3),
    "book.json": { cash:book.cash, equity:equity(), feesPaid:book.feesPaid, start:book.start, refused:book.refused, bought:book.bought, sold:book.sold||0, realized:book.realized||0, unrealized:unrealized(), pnl:totalPnl() }
  }, null, 2);
}
document.querySelectorAll(".views button").forEach(b=>b.onclick=()=>setView(b.dataset.view));
document.querySelectorAll("#shiftBar [data-view]").forEach(b=>b.onclick=()=>setView(b.dataset.view));
document.querySelectorAll(".floors button").forEach(b=>b.onclick=()=>setFloor(b.dataset.floor));
document.getElementById("railTabs") && document.getElementById("railTabs").querySelectorAll("button").forEach(b=>b.onclick=()=>{
  document.querySelectorAll("#railTabs button").forEach(x=>x.classList.toggle("on",x===b));
  document.querySelectorAll("#intelRail [data-pane]").forEach(s=>s.classList.toggle("show", s.dataset.pane===b.dataset.rail));
});
try{
document.getElementById("approveBtn") && (document.getElementById("approveBtn").onclick=()=>{
  if(state.ticket) state.ticket.manual=true;
  approve();
});
document.getElementById("setBtn").onclick=()=>{
  document.getElementById("venue").value=book.cfg.venue;
  document.getElementById("startCash").value=book.start;
  document.getElementById("riskPct").value=book.cfg.riskPct;
  document.getElementById("feeBps").value=book.cfg.feeBps;
  document.getElementById("slipBps").value=book.cfg.slipBps;
  document.getElementById("watchAddr").value=book.cfg.watchAddr||phantomPk()||"";
  const ls=document.getElementById("liveSend"); if(ls) ls.checked=!!book.cfg.liveSend;
  const la=document.getElementById("liveAuto"); if(la) la.checked=!!book.cfg.liveAuto;
  const lw=document.getElementById("liveAutoWord"); if(lw) lw.value="";
  document.getElementById("setModal").classList.add("on");
};
document.getElementById("closeSet").onclick=()=>document.getElementById("setModal").classList.remove("on");
const phC=document.getElementById("phConnect");
if(phC) phC.onclick=()=>connectPhantom();
const phD=document.getElementById("phDisconnect");
if(phD) phD.onclick=()=>disconnectPhantom();
function looksSecret(s){
  const t=(s||"").trim();
  if(!t) return false;
  if(/\b(seed|mnemonic|private|secret)\b/i.test(t)) return true;
  if(t.startsWith("[") || t.includes(",")) return true;
  if(/^[0-9a-fA-F]{64}$/.test(t)) return true;
  if(t.length>50) return true;
  return false;
}
function looksPub(s){
  const t=(s||"").trim();
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(t);
}
const saveKeys=document.getElementById("saveKeys");
if(saveKeys) saveKeys.onclick=()=>{
  const watch=document.getElementById("watchAddr").value.trim();
  if(watch && looksSecret(watch)){ toast("REJECTED — that looks like a secret"); log("SYSTEM","secret rejected","no"); return; }
  if(watch && !looksPub(watch)){ toast("REJECTED — public address only"); return; }
  const start=+document.getElementById("startCash").value;
  if(start>0 && Math.abs(start-book.start)>1e-9 && !book.positions.length){ book.start=start; book.cash=start; }
  book.cfg.venue=document.getElementById("venue").value;
  book.cfg.riskPct=+document.getElementById("riskPct").value;
  book.cfg.feeBps=+document.getElementById("feeBps").value;
  book.cfg.slipBps=+document.getElementById("slipBps").value;
  if(book.cfg.feeBps<40) book.cfg.feeBps=80;
  if(book.cfg.slipBps<40) book.cfg.slipBps=100;
  const live=!!(document.getElementById("liveSend")&&document.getElementById("liveSend").checked);
  const auto=!!(document.getElementById("liveAuto")&&document.getElementById("liveAuto").checked);
  const word=((document.getElementById("liveAutoWord")||{}).value||"").trim();
  if(live && !phantomOk()){ toast("CONNECT PHANTOM FIRST"); return; }
  if(auto && word!=="AUTO"){ toast("type AUTO to arm auto-spend"); return; }
  if(auto && !live){ toast("arm live swaps first"); return; }
  book.cfg.liveSend=live;
  book.cfg.liveAuto=!!(auto && word==="AUTO");
  book.cfg.canWithdraw=false;
  if(watch.length>=32){
    book.wallet=book.wallet||{chain:"solana",kind:phantomOk()?"phantom":"paper"};
    book.wallet.pubkey=watch;
    if(!phantomOk()) book.wallet.kind="paper";
  }
  if(phantomOk()){
    book.wallet={chain:"solana", kind:"phantom", pubkey:phantomPk(), t:Date.now()};
    book.cfg.watchAddr=book.wallet.pubkey;
  } else {
    book.cfg.watchAddr=ensurePaperWallet();
  }
  persist();
  renderWatch(); renderLive(); updateBook();
  toast(book.cfg.liveSend?(book.cfg.liveAuto?"LIVE AUTO — desk spends SOL":"LIVE ARMED — manual only"):"SAVED · paper");
  document.getElementById("setModal").classList.remove("on");
  log("SYSTEM", book.cfg.liveSend?(book.cfg.liveAuto?"AUTO LIVE armed":"live swaps armed · auto still paper"):"watch saved · live send off");
  talk("HEAD", book.cfg.liveSend?(book.cfg.liveAuto?"AUTO LIVE — huddle fills spend SOL via Phantom":"LIVE ARMED — APPROVE spends SOL, desk still paper"):"paper desk · Phantom optional");
};
document.getElementById("diskBtn").onclick=()=>{ document.getElementById("diskPre").textContent=diskText(); document.getElementById("diskModal").classList.add("on"); };
document.getElementById("closeDisk").onclick=()=>document.getElementById("diskModal").classList.remove("on");
document.getElementById("exportJ").onclick=()=>{
  const blob=new Blob([JSON.stringify({cash:book.cash,equity:equity(),feesPaid:book.feesPaid,positions:book.positions,trades:book.trades,journal:book.journal,exported:new Date().toISOString()},null,2)],{type:"application/json"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="lastprint-journal.json"; a.click();
};
document.getElementById("resetBook").onclick=()=>{
  book.cash=1000; book.start=1000; book.positions=[]; book.feesPaid=0; book.bought=0; book.sold=0; book.realized=0; book.refused=0; book.trades=[]; state.ticket=null;
  _ready=true; persist(); updateBook(); renderPos(); renderPipe(); toast("BOOK RESET $1000");
};
document.getElementById("ticketBtn").onclick=()=>{
  const sel=document.getElementById("tMkt");
  const extras=(state.coins||[]).slice(0,8).map(pumpTag).filter(Boolean);
  const core=["BTC","ETH","SOL","DOGE"];
  const names=[...new Set(core.concat(extras))];
  sel.innerHTML=names.map(n=>`<option>${esc(n)}</option>`).join("");
  document.getElementById("tRisk").value=ticketSize().toFixed(2);
  document.getElementById("tixModal").classList.add("on");
};
document.getElementById("closeTix") && (document.getElementById("closeTix").onclick=()=>document.getElementById("tixModal").classList.remove("on"));
document.getElementById("openTix") && (document.getElementById("openTix").onclick=()=>{
  proposeTicket(document.getElementById("tMkt").value, document.getElementById("tSide").value, +document.getElementById("tRisk").value, "", {manual:true});
  document.getElementById("tixModal").classList.remove("on"); setView("alpha");
});
}catch(e){ window.__gsBind=String(e&&e.stack||e); }
setView("alpha");
tickMove();
updateBook(); renderPos(); renderPipe(); renderWatch(); renderTrench();
function replayChat(){
  const box=document.getElementById("chat"); if(!box) return;
  box.innerHTML="";
  (brain.chat||[]).slice(0,16).reverse().forEach(c=>{
    const row=document.createElement("div"); row.className="log";
    row.innerHTML=`<span class="who">${esc(c.who)}</span> ${esc(c.text)}`;
    box.prepend(row);
  });
}
function replayJournal(){
  const feed=document.getElementById("feed"); if(!feed) return;
  feed.innerHTML="";
  (book.journal||[]).slice(0,24).reverse().forEach(j=>{
    const row=document.createElement("div"); row.className="log";
    row.innerHTML=`<span class="who">${esc(j.who)}</span> <span class="${j.kind==="ok"?"up":j.kind==="no"?"dn":""}">${esc(j.text)}</span>`;
    feed.prepend(row);
  });
}
replayChat();
replayJournal();
renderLearn();
renderHistory();
renderHuddle();
function pinCoin(c){
  if(!c || !c.mint) return null;
  state.coins=state.coins||[];
  const i=state.coins.findIndex(x=>x.mint===c.mint);
  if(i>=0){
    const old=state.coins[i];
    const oldMc=+(old.usd_market_cap||old.market_cap_usd||0);
    const newMc=+(c.usd_market_cap||c.market_cap_usd||0);
    state.coins[i]=Object.assign({}, old, c);
    if(oldMc>0 && newMc>0 && (newMc/oldMc>2.2 || oldMc/newMc>2.2)){
      const keep=(newMc>oldMc*2.2)?oldMc:newMc;
      state.coins[i].usd_market_cap=keep;
      state.coins[i].market_cap_usd=keep;
    } else if(oldMc>0 && !(newMc>0)){
      state.coins[i].usd_market_cap=oldMc;
      state.coins[i].market_cap_usd=oldMc;
    }
  } else state.coins.unshift(c);
  const tag=pumpTag(c);
  const hit=state.coins.find(x=>x.mint===c.mint);
  const mc=pumpMark(hit);
  if(mc>0){ state.mc=state.mc||{}; state.mcMint=state.mcMint||{}; state.mc[tag]=mc; if(c.mint) state.mcMint[c.mint]=mc; }
  const px=coinPx(hit);
  if(px>0) state.prices[tag]=px;
  return hit;
}
function pickDexPair(pairs, pumpMc){
  const list=(pairs||[]).filter(p=>p && (p.chainId||"solana")==="solana");
  const liq=p=>+((p.liquidity&&p.liquidity.usd)||0);
  if(pumpMc>0){
    const close=list.filter(p=>{
      const m=+(p.marketCap||0);
      return m>0 && m/pumpMc<2.2 && m/pumpMc>0.4;
    }).sort((a,b)=>liq(b)-liq(a));
    if(close[0]) return close[0];
  }
  return list.slice().sort((a,b)=>liq(b)-liq(a))[0] || (pairs||[])[0];
}
function applyDexPair(c, pair){
  if(!c || !pair) return c;
  const m=dexPairMc(pair);
  const fdv=+(pair.fdv||0);
  if(m>0) c._dexMc=m;
  if(fdv>0) c.fdv=fdv;
  if(pair.volume){
    c.volume=pair.volume;
    if(+pair.volume.h24>0) c.volume_24h=+pair.volume.h24;
    if(+pair.volume.h1>0) c.volume_1h=+pair.volume.h1;
    if(+pair.volume.h6>0) c.volume_6h=+pair.volume.h6;
  }
  if(pair.liquidity && +pair.liquidity.usd>0){
    c.liquidity=pair.liquidity;
    c.liquidity_usd=+pair.liquidity.usd;
  }
  if(+pair.priceUsd>0) c.priceUsd=+pair.priceUsd;
  stampChg(c, pair);
  const m5=+((pair.txns&&pair.txns.m5&&(pair.txns.m5.buys+pair.txns.m5.sells))||0);
  if(m5>0) c._m5Tx=m5;
  c._tapeAt=Date.now();
  c._src=(c._src?c._src+"+":"")+"dex";
  return c;
}
async function refreshMint(mint){
  mint=String(mint||"");
  if(!mint) return;
  try{
    const [pr, dr]=await Promise.all([
      fetch("/api/tape?src=pump-coin&mint="+encodeURIComponent(mint)).then(r=>r.ok?r.json():null).catch(()=>null),
      fetch("/api/tape?src=dex-token&mint="+encodeURIComponent(mint)).then(r=>r.ok?r.json():null).catch(()=>null),
    ]);
    let c=pr && typeof pr==="object" && !Array.isArray(pr) ? pr : ((state.coins||[]).find(x=>x.mint===mint)||null);
    if(c) c=pinCoin(c);
    const pair=pickDexPair((dr&&dr.pairs)||[], c?pumpMark(c):0);
    if(c && pair) applyDexPair(c, pair);
    else if(!c && pair) c=pinCoin(applyDexPair(pairToCoin(pair), pair));
    keepOpenMarks();
  }catch(_){}
}
async function pullOpenMints(){
  const mints=[...new Set((book.positions||[]).map(p=>p.mint).filter(Boolean))];
  if(brain._apeMint && mints.indexOf(brain._apeMint)<0) mints.push(brain._apeMint);
  const bag=mints.slice(0,24);
  for(let i=0;i<bag.length;i+=6){
    await Promise.all(bag.slice(i,i+6).map(refreshMint));
  }
  keepOpenMarks();
}
async function pullApeMint(){ return pullOpenMints(); }
async function apeInto(mint, usd, x, entryMc){
  mint=String(mint||"").trim();
  usd=Math.max(MIN_BUY, +usd||400);
  x=Math.max(2, +x||5);
  if(!mint) return;
  brain._apeMint=mint;
  const open=(book.positions||[]).find(p=>p.mint===mint);
  if(open){
    open.holdX=x; open.ape=true;
    if(entryMc>0){ open.entryMc=entryMc; open.mc=entryMc; }
    talk("HEAD","APE $"+open.sym+" already in book — hold till "+x+"x MC");
    say("HEAD","HOLD $"+open.sym+" till "+x+"x");
    persist(); renderPos(); updateBook(); return;
  }
  if(book.cash<usd) usd=Math.max(MIN_BUY, Math.floor((book.cash||0)*0.85));
  let c=(state.coins||[]).find(z=>z.mint===mint);
  if(!c){
    try{
      const r=await fetch("/api/tape?src=pump-coin&mint="+encodeURIComponent(mint));
      if(r.ok) c=pinCoin(await r.json());
    }catch(_){}
  } else pinCoin(c);
  if(!c || !pumpMark(c)){ toast("APE no MC on mint"); log("HEAD","APE fail — no MC","no"); return; }
  const tag=pumpTag(c);
  talk("HEAD","APE $"+tag+" $"+usd.toFixed(0)+" paper — hold till "+x+"x · entry "+fmtMc(entryMc||pumpMark(c)));
  say("SNIPER","APE $"+tag+" $"+usd.toFixed(0));
  proposeTicket(tag, "buy", usd, mint, {ape:true, holdX:x, why:"APE $"+usd.toFixed(0)+" hold "+x+"x"});
  const t=state.ticket;
  if(t){ t.ape=true; t.holdX=x; t.risk="CLEAR"; t.status="WAIT_APPROVE"; }
  approve();
  const p=(book.positions||[]).find(z=>z.mint===mint);
  if(p && entryMc>0){ p.entryMc=entryMc; p.mc=entryMc; persist(); updateBook(); renderPos(); }
  lesson("HEAD","fill","APE $"+tag+" $"+usd.toFixed(0)+" hold "+x+"x · in "+fmtMc(p&&p.entryMc||pumpMark(c)),{tag,mc:p&&p.entryMc||pumpMark(c)});
}
function dropHeeHaw(){
  if(state._dropHee) return;
  const mint="EEpng77ZPn9FbgbT4xsRjwuxNCcMBYq3HTwEscyTpump";
  brain._heeReopen="off";
  const list=book.positions||[];
  state._dropHee=true;
  for(let i=list.length-1;i>=0;i--){
    const p=list[i];
    if(!(p.mint===mint || /HEEHAW/i.test(p.sym||""))) continue;
    if(!closePos(p.id, "HeeHaw already sold — flatten")){
      const cost=Math.abs((p.qty||0)*(p.avg||0));
      book.cash=(book.cash||0)+cost;
      book.positions.splice(i,1);
      log("EXIT","drop $HEEHAW leftover at cost $"+cost.toFixed(2),"ok");
    }
  }
  state._dropHee=false;
}
function startDesk(){
  if(state._started) return;
  state._started=true;
  ensurePaperWallet();
  renderWatch();
  dropHeeHaw();
  if((book.bought||0)===0){
    shift.step="farm"; shift.coin=null; shift.tag=""; shift._mint=""; shift._miss=0;
    shift.line="SCOUT opening book — paper fill next";
  }
  pulse();
  pullLive();
  state._t0=Date.now();
  window.__gsTimers=window.__gsTimers||[];
  window.__gsTimers.push(setInterval(()=>{ const c=document.getElementById("clock"); if(c) c.textContent=new Date().toLocaleTimeString("en-GB",{hour12:false}); },1000));
  window.__gsTimers.push(setInterval(pullLive,5000));
  window.__gsTimers.push(setInterval(pulse,900));
  window.__gsTimers.push(setInterval(async ()=>{
    try{
      const r=await fetch("/api/tape?src=desk",{cache:"no-store"});
      if(!r.ok) return;
      const j=await r.json();
      if(j && j.loop==="server"){
        state._serverAt=j.serverAt||j.savedAt||Date.now();
        applyDesk(j);
        updateBook(); renderPos(); renderHistory(); renderPipe();
      }
    }catch(_){}
  },4000));
  window.__gsTimers.push(setInterval(persist,8000));
  window.__gsTimers.push(setInterval(tickWindow,11000));
  window.__gsTimers.push(setInterval(drawTv,2800));
  window.__gsTimers.push(setInterval(()=>{
    if(window.__gsKill) return;
    window.__gsBeat=window.__gsBeat||Date.now();
    if(Date.now()-(window.__gsBeat||0)>6000){ try{ pulse(); }catch(_){ } }
    if(!(state.coins||[]).length){ try{ pullLive(); }catch(_){ } }
    if(state.ticket && state.ticket.status!=="CHAIN" && Date.now()-(state.ticket._at||0)>8000) state.ticket=null;
    try{ persist(); renderPipe(); }catch(_){}
  },4000));
  tickWindow();
  drawTv();
}
hydrateDesk().then(startDesk).catch(()=>{ _ready=true; startDesk(); });
window.addEventListener("beforeunload", ()=>{ try{ persist(); flushDeskNow(); }catch(_){} });
document.addEventListener("visibilitychange", ()=>{
  if(document.hidden){ persist(); flushDeskNow(); }
  else { try{ keepMoving(); pulse(); }catch(_){} }
});
window.addEventListener("focus", ()=>{ try{ keepMoving(); pulse(); }catch(_){} });
window.__gsDebug = function(){
  return {
    coins:(state.coins||[]).slice(0,8).map(c=>({t:pumpTag(c),mc:pumpMark(c),vol:coinVol(c),bond:!!c.complete})),
    n:(state.coins||[]).length,
    shift:{step:shift.step,tag:shift.tag,line:shift.line,room:shift.room},
    agents:Object.keys(state.agents||{}),
    pulse:state._pulse,
    go:(brain.pulse&&brain.pulse.go)||0,
    funnel:brain.funnel,
    day:brain.day,
    ready:_ready,
    bought:book.bought,
    cash:book.cash,
    live:liveAudit(),
    ticket:state.ticket&&state.ticket.sym
  };
};

}