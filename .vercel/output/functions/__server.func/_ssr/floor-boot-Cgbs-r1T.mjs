//#region node_modules/.nitro/vite/services/ssr/assets/floor-boot-Cgbs-r1T.js
function stopFloor() {
	const w = window;
	w.__gsKill = true;
	w.__gsInnerBoot = false;
	(w.__gsTimers || []).forEach((id) => {
		try {
			clearInterval(id);
		} catch (_) {}
		try {
			clearTimeout(id);
		} catch (_) {}
	});
	w.__gsTimers = [];
	try {
		if (w.__gsFlushNow) w.__gsFlushNow();
	} catch (_) {}
}
function bootFloor() {
	const w = window;
	if ((w.__gsBooted || w.__gsInnerBoot) && document.getElementById("app") && !w.__gsKill) return;
	w.__gsKill = false;
	w.__gsTimers = w.__gsTimers || [];
	w.__gsClean = stopFloor;
	w.__gsErr = null;
	w.__gsInnerBoot = true;
	try {
		bootFloorInner();
		w.__gsBooted = true;
		w.__gsBootAt = w.__gsBootAt || Date.now();
	} catch (e) {
		w.__gsErr = String(e && e.stack || e);
		w.__gsInnerBoot = false;
		console.error(e);
	}
}
function bootFloorInner() {
	const FLOOR_AGENTS = [
		{
			id: "CHIEF",
			color: "#d4af37",
			hair: "#1a120c",
			body: "#2a2a32",
			role: "routes"
		},
		{
			id: "TAPE",
			color: "#3dff8a",
			hair: "#2a2010",
			body: "#1c3a28",
			role: "prints"
		},
		{
			id: "VERIFY",
			color: "#6ad",
			hair: "#111",
			body: "#1a2838",
			role: "kills lies"
		},
		{
			id: "QUANT",
			color: "#c8f",
			hair: "#2a1020",
			body: "#321848",
			role: "models"
		},
		{
			id: "MACRO",
			color: "#f6c26b",
			hair: "#3a2010",
			body: "#3a2a10",
			role: "session"
		},
		{
			id: "RISK",
			color: "#ff5b6e",
			hair: "#1a0808",
			body: "#3a1518",
			role: "veto"
		},
		{
			id: "FLOW",
			color: "#5ee",
			hair: "#082028",
			body: "#103038",
			role: "sweeps"
		},
		{
			id: "ARCHIVE",
			color: "#bbb",
			hair: "#333",
			body: "#2a2a2a",
			role: "journal"
		}
	];
	const ALPHA_AGENTS = [
		{
			id: "HEAD",
			color: "#d4af37",
			hair: "#1a120c",
			body: "#2a2a32",
			role: "never trades"
		},
		{
			id: "SEARCH",
			color: "#3dff8a",
			hair: "#1a3010",
			body: "#1c3a28",
			role: "sources"
		},
		{
			id: "RISK",
			color: "#ff5b6e",
			hair: "#1a0808",
			body: "#3a1518",
			role: "CLEAR/KILL"
		},
		{
			id: "SNIPER",
			color: "#f93",
			hair: "#201000",
			body: "#3a2008",
			role: "one send"
		},
		{
			id: "WHALE",
			color: "#6ad",
			hair: "#111",
			body: "#1a2838",
			role: "wallets"
		},
		{
			id: "RUG",
			color: "#f66",
			hair: "#200",
			body: "#301010",
			role: "LP watch"
		},
		{
			id: "EXIT",
			color: "#ee8",
			hair: "#222200",
			body: "#333010",
			role: "flatten"
		},
		{
			id: "SHILL",
			color: "#c8f",
			hair: "#201030",
			body: "#281838",
			role: "noise"
		}
	];
	const NIGHT_AGENTS = [
		{
			id: "MONITOR",
			color: "#6df",
			hair: "#123",
			body: "#1a3a48",
			role: "stream kill"
		},
		{
			id: "AUDITOR",
			color: "#f84",
			hair: "#310",
			body: "#3a2010",
			role: "same funder"
		},
		{
			id: "NARRATIVE",
			color: "#fd6",
			hair: "#330",
			body: "#3a3010",
			role: "spread score"
		},
		{
			id: "TIMING",
			color: "#c8f",
			hair: "#201030",
			body: "#281838",
			role: "session veto"
		},
		{
			id: "CHECKER",
			color: "#f66",
			hair: "#200",
			body: "#301018",
			role: "last no"
		}
	];
	const NIGHT_SEATS = [
		{
			who: "MONITOR",
			x: 6,
			y: 18
		},
		{
			who: "AUDITOR",
			x: 30,
			y: 18
		},
		{
			who: "NARRATIVE",
			x: 54,
			y: 18
		},
		{
			who: "TIMING",
			x: 18,
			y: 62
		},
		{
			who: "CHECKER",
			x: 54,
			y: 62
		}
	];
	const FARM_AGENTS = [
		{
			id: "RESEARCH",
			color: "#b8f",
			hair: "#211",
			body: "#534",
			role: "research"
		},
		{
			id: "BUILD",
			color: "#6af",
			hair: "#123",
			body: "#246",
			role: "build"
		},
		{
			id: "TOOLS",
			color: "#f84",
			hair: "#310",
			body: "#421",
			role: "tools"
		},
		{
			id: "INBOX",
			color: "#fd6",
			hair: "#330",
			body: "#432",
			role: "inbox"
		},
		{
			id: "TEST",
			color: "#6df",
			hair: "#123",
			body: "#145",
			role: "test"
		},
		{
			id: "CHECK",
			color: "#6f8",
			hair: "#131",
			body: "#142",
			role: "verify"
		},
		{
			id: "DELIVER",
			color: "#f66",
			hair: "#300",
			body: "#412",
			role: "deliver"
		}
	];
	const DESKS = {
		CRYPTO: [
			{
				x: 6,
				y: 18,
				who: "TAPE"
			},
			{
				x: 30,
				y: 18,
				who: "FLOW"
			},
			{
				x: 54,
				y: 18,
				who: "CHIEF"
			},
			{
				x: 78,
				y: 18,
				who: "VERIFY"
			},
			{
				x: 6,
				y: 62,
				who: "QUANT"
			},
			{
				x: 30,
				y: 62,
				who: "MACRO"
			},
			{
				x: 54,
				y: 62,
				who: "RISK"
			},
			{
				x: 78,
				y: 62,
				who: "ARCHIVE"
			}
		],
		MEME: [
			{
				x: 6,
				y: 18,
				who: "TAPE"
			},
			{
				x: 30,
				y: 18,
				who: "FLOW"
			},
			{
				x: 54,
				y: 18,
				who: "CHIEF"
			},
			{
				x: 78,
				y: 18,
				who: "VERIFY"
			},
			{
				x: 6,
				y: 62,
				who: "QUANT"
			},
			{
				x: 30,
				y: 62,
				who: "MACRO"
			},
			{
				x: 54,
				y: 62,
				who: "RISK"
			},
			{
				x: 78,
				y: 62,
				who: "ARCHIVE"
			}
		],
		INDEX: [
			{
				x: 6,
				y: 18,
				who: "TAPE"
			},
			{
				x: 30,
				y: 18,
				who: "FLOW"
			},
			{
				x: 54,
				y: 18,
				who: "CHIEF"
			},
			{
				x: 78,
				y: 18,
				who: "VERIFY"
			},
			{
				x: 6,
				y: 62,
				who: "QUANT"
			},
			{
				x: 30,
				y: 62,
				who: "MACRO"
			},
			{
				x: 54,
				y: 62,
				who: "RISK"
			},
			{
				x: 78,
				y: 62,
				who: "ARCHIVE"
			}
		]
	};
	const ALPHA_SEATS = [
		{
			who: "SEARCH",
			x: 6,
			y: 18
		},
		{
			who: "SHILL",
			x: 30,
			y: 18
		},
		{
			who: "SNIPER",
			x: 54,
			y: 18
		},
		{
			who: "EXIT",
			x: 78,
			y: 18
		},
		{
			who: "WHALE",
			x: 6,
			y: 62
		},
		{
			who: "RISK",
			x: 30,
			y: 62
		},
		{
			who: "RUG",
			x: 54,
			y: 62
		},
		{
			who: "HEAD",
			x: 78,
			y: 62
		}
	];
	const HUTS = [
		{
			id: "RESEARCH",
			x: 6,
			y: 16,
			cls: "purple"
		},
		{
			id: "BUILD",
			x: 30,
			y: 16,
			cls: ""
		},
		{
			id: "TOOLS",
			x: 54,
			y: 16,
			cls: "red"
		},
		{
			id: "INBOX",
			x: 78,
			y: 16,
			cls: ""
		},
		{
			id: "CHECK",
			x: 12,
			y: 60,
			cls: ""
		},
		{
			id: "TEST",
			x: 42,
			y: 60,
			cls: "blue"
		},
		{
			id: "DELIVER",
			x: 72,
			y: 60,
			cls: "red"
		}
	];
	const SEED = {
		BTC: 111e3,
		ETH: 4280,
		SOL: 248,
		DOGE: .22,
		TSLA: 248,
		NVDA: 180,
		SPX: 6400
	};
	const feeds = {
		hl: "…",
		bn: "…",
		yh: "…",
		pf: "…",
		dx: "…"
	};
	const book = {
		cash: 1e3,
		start: 1e3,
		positions: [],
		journal: [],
		feesPaid: 0,
		tickets: 0,
		refused: 0,
		bought: 0,
		sold: 0,
		realized: 0,
		trades: [],
		cfg: {
			venue: "paper",
			riskPct: 1,
			feeBps: 4,
			slipBps: 5,
			apiKey: "",
			watchAddr: "",
			canWithdraw: false,
			liveSend: false
		}
	};
	const state = {
		view: "alpha",
		floor: "MEME",
		prices: {},
		mc: {},
		series: {},
		ohlc: {},
		agents: {},
		ticket: null,
		seq: 1,
		funding: {},
		oi: {},
		coins: [],
		boosts: {},
		koth: null,
		fomo: [],
		_tradeAt: 0,
		_extraAt: 0
	};
	const shift = {
		step: "farm",
		room: "farm",
		coin: null,
		tag: "",
		line: "one desk · farm researches · office prints · night kills · alpha paper-fills",
		lane: 0
	};
	let brain;
	try {
		brain = JSON.parse(localStorage.getItem("gs-brain") || "null");
	} catch (_) {
		brain = null;
	}
	brain = brain || {
		seen: 0,
		veto: 0,
		clear: 0,
		fills: 0,
		win: 0,
		lose: 0,
		reasons: {},
		weights: {
			metadata: 1,
			pulse: 1,
			boost: 1,
			social: 1,
			cap: 1,
			wallet: 1
		},
		chat: [],
		memory: {},
		notes: [],
		wallets: {}
	};
	if (!brain.memory) brain.memory = {};
	if (!brain.notes) brain.notes = [];
	if (!brain.weights) brain.weights = {
		metadata: 1,
		pulse: 1,
		boost: 1,
		social: 1,
		cap: 1,
		wallet: 1
	};
	if (brain.weights.wallet == null) brain.weights.wallet = 1;
	if (!brain.chat) brain.chat = [];
	if (!brain.wallets) brain.wallets = {};
	if (!brain.intel) brain.intel = {};
	if (!brain.agents) brain.agents = {};
	if (!brain.lessons) brain.lessons = [];
	if (!brain.playbook) brain.playbook = {
		minMc: 15e3,
		preferMc: false,
		avoidBoost: false,
		followMin: 1.15,
		lastRule: "",
		tpPct: .1,
		slPct: .5,
		staleMs: 18e4,
		rules: []
	};
	if (brain.playbook.minMc == null || brain.playbook.minMc > 2e6) brain.playbook.minMc = 15e3;
	if (brain.playbook.slPct == null || brain.playbook.slPct < .2) brain.playbook.slPct = .5;
	if (!brain.patterns) brain.patterns = {};
	if (!brain.regimes) brain.regimes = {};
	if (!brain.scanned) brain.scanned = 0;
	if (!brain.inbox) brain.inbox = [];
	if (!brain.huddles) brain.huddles = [];
	if (!brain.savedAt) brain.savedAt = 0;
	if (!brain.day) brain.day = {
		key: "",
		pnl: 0,
		trades: 0,
		halted: false,
		streak: 0,
		cooldownUntil: 0
	};
	if (brain.day.streak == null) brain.day.streak = 0;
	if (brain.day.cooldownUntil == null) brain.day.cooldownUntil = 0;
	if (!brain.funnel) brain.funnel = {
		scanned: 0,
		cleared: 0,
		confirmed: 0,
		filled: 0,
		skipped: 0,
		reported: 0
	};
	if (!brain.creators) brain.creators = {};
	if (!brain.threads) brain.threads = {};
	if (!brain.pulse) brain.pulse = {
		go: .5,
		t: 0,
		why: "cold"
	};
	if (!brain.briefs) brain.briefs = [];
	let _ready = false;
	let _bootLocalAt = +(brain.savedAt || 0);
	function saveBrain() {
		try {
			if ((brain.chat || []).length > 40) brain.chat = brain.chat.slice(0, 40);
			if ((brain.lessons || []).length > 50) brain.lessons = brain.lessons.slice(0, 50);
			if ((brain.notes || []).length > 30) brain.notes = brain.notes.slice(0, 30);
			if ((brain.inbox || []).length > 40) brain.inbox = brain.inbox.slice(0, 40);
			if (!_ready) return;
			brain.savedAt = Date.now();
			localStorage.setItem("gs-brain", JSON.stringify(brain));
		} catch (_) {
			if (!_ready) return;
			try {
				brain.chat = (brain.chat || []).slice(0, 16);
				brain.lessons = (brain.lessons || []).slice(0, 16);
				brain.inbox = (brain.inbox || []).slice(0, 10);
				localStorage.setItem("gs-brain", JSON.stringify(brain));
			} catch (__) {}
		}
	}
	function agentOf(who) {
		brain.agents = brain.agents || {};
		return brain.agents[who] = brain.agents[who] || {
			id: who,
			studied: 0,
			fills: 0,
			vetoes: 0,
			wins: 0,
			losses: 0,
			last: "",
			lessons: []
		};
	}
	function lesson(who, kind, text, extra) {
		const a = agentOf(who);
		a.studied++;
		a.last = String(text || "").slice(0, 90);
		if (kind === "fill") a.fills++;
		if (kind === "veto") a.vetoes++;
		if (kind === "win") a.wins++;
		if (kind === "lose") a.losses++;
		const row = {
			t: Date.now(),
			who,
			kind,
			text: a.last,
			tag: extra && extra.tag || "",
			mc: extra && extra.mc || 0
		};
		a.lessons.unshift(row);
		if (a.lessons.length > 8) a.lessons.pop();
		brain.lessons = brain.lessons || [];
		brain.lessons.unshift(row);
		if (brain.lessons.length > 80) brain.lessons.pop();
		note(who + ": " + a.last);
		saveBrain();
	}
	function talk(who, text) {
		brain.chat.unshift({
			t: Date.now(),
			who,
			text
		});
		if (brain.chat.length > 80) brain.chat.pop();
		const box = document.getElementById("chat");
		if (box) {
			const row = document.createElement("div");
			row.className = "log";
			row.innerHTML = `<span class="who">${esc(who)}</span> ${esc(text)}`;
			box.prepend(row);
		}
		saveBrain();
	}
	function bumpReason(r) {
		const key = (r || "other").slice(0, 40);
		brain.reasons[key] = (brain.reasons[key] || 0) + 1;
	}
	function note(text) {
		brain.notes.unshift({
			t: Date.now(),
			text: String(text).slice(0, 80)
		});
		if (brain.notes.length > 40) brain.notes.pop();
	}
	function rememberCoin(c, verdict, why) {
		if (!c) return;
		const mint = c.mint || pumpTag(c) || "?";
		const m = brain.memory[mint] = brain.memory[mint] || {
			tag: "",
			n: 0,
			veto: 0,
			clear: 0,
			fills: 0,
			sells: 0,
			pnl: 0,
			src: "pump/dex"
		};
		m.tag = pumpTag(c) || m.tag;
		m.n++;
		m.last = verdict;
		m.why = (why || "").slice(0, 60);
		m.px = coinPx(c);
		m.mc = pumpMark(c);
		m.t = Date.now();
		m.feat = featuresOf(c);
		if (c.creator) m.creator = c.creator;
		if (verdict === "veto") m.veto++;
		if (verdict === "clear") m.clear++;
		if (verdict === "fill") m.fills++;
		if (verdict === "sell") m.sells = (m.sells || 0) + 1;
		const keys = Object.keys(brain.memory);
		if (keys.length > 90) {
			keys.sort((a, b) => (brain.memory[a].t || 0) - (brain.memory[b].t || 0));
			keys.slice(0, keys.length - 90).forEach((k) => delete brain.memory[k]);
		}
		saveBrain();
	}
	function featuresOf(c) {
		if (!c) return {
			bucket: "micro",
			graduated: false,
			social: false,
			live: false,
			boost: false,
			curve: 0,
			follow: 0,
			dump: 0
		};
		const mc = pumpMark(c);
		const hint = walletHint(c);
		return {
			bucket: mc >= 5e7 ? "mega" : mc >= 1e6 ? "mid" : "micro",
			graduated: !!c.complete,
			social: !!(c.twitter || c.website || c.telegram || c.image_uri),
			live: !!c.is_currently_live,
			boost: !!(c.mint && state.boosts[c.mint]),
			curve: curvePct(c),
			follow: hint.follow || 0,
			dump: hint.dump || 0,
			mc
		};
	}
	function pat(k) {
		brain.patterns = brain.patterns || {};
		return brain.patterns[k] = brain.patterns[k] || {
			n: 0,
			pnl: 0,
			wins: 0,
			losses: 0
		};
	}
	function learnFromTrade(p, pnl) {
		const c = coinByTag(p && p.sym);
		const f = p && p.feat || c && featuresOf(c) || {};
		const bump = (k) => {
			const s = pat(k);
			s.n++;
			s.pnl += pnl;
			if (pnl > .01) s.wins++;
			else if (pnl < -.01) s.losses++;
		};
		bump(f.bucket || "micro");
		bump(f.graduated ? "graduated" : "curve");
		bump(f.social ? "social" : "thin");
		if (f.follow >= 1) bump("follow");
		if (f.dump >= 2) bump("dump");
		if (f.boost) bump("boost");
		const tape = tapeRead(p && p.sym);
		if (tape.dump) bump("tapeDump");
		if (tape.pump) bump("tapePump");
		const a = agentOf("QUANT");
		a.studied++;
		rebuildPlaybook();
	}
	function avgPat(k) {
		const s = brain.patterns && brain.patterns[k];
		return s && s.n ? s.pnl / s.n : 0;
	}
	function tapeRead(tag) {
		const bars = typeof barsOf === "function" ? barsOf(tag) : [];
		if (!bars || bars.length < 3) return {
			trend: "flat",
			dump: false,
			pump: false,
			chg: 0
		};
		const a = bars[0].o || bars[0].c, b = bars[bars.length - 1].c;
		const chg = a > 0 ? (b - a) / a : 0;
		const downs = bars.filter((x) => x.c < x.o).length;
		return {
			trend: chg > .04 ? "up" : chg < -.04 ? "down" : "flat",
			dump: downs >= Math.ceil(bars.length * .65) && chg < -.03,
			pump: chg > .08,
			chg
		};
	}
	function rebuildPlaybook() {
		const pb = brain.playbook = brain.playbook || {};
		const mem = Object.values(brain.memory || {});
		const wins = mem.filter((m) => m.pnl > .02);
		const losses = mem.filter((m) => m.pnl < -.02);
		const avg = (arr) => arr.length ? arr.reduce((s, m) => s + (m.mc || 0), 0) / arr.length : 0, winMc = avg(wins);
		avg(losses);
		if (winMc > 0) pb.minMc = Math.max(15e3, Math.min(2e6, winMc * .35));
		pb.preferMc = false;
		pb.likeGrad = avgPat("graduated") >= avgPat("curve");
		pb.likeSocial = avgPat("social") >= avgPat("thin");
		pb.likeFollow = avgPat("follow") >= 0;
		pb.avoidDump = avgPat("dump") < 0 || (brain.weights.wallet || 1) >= 1;
		pb.avoidBoost = (brain.weights.boost || 1) > 1.15 || avgPat("boost") < -.02;
		pb.followMin = 1.1 + Math.min(.4, (brain.weights.wallet || 1) - .8);
		const sells = (book.trades || []).filter((t) => t.side === "sell" && t.notional);
		const winPct = sells.filter((t) => t.pnl > 0).map((t) => t.pnl / Math.max(.01, t.notional));
		sells.filter((t) => t.pnl < 0).map((t) => t.pnl / Math.max(.01, t.notional));
		const mean = (a) => a.length ? a.reduce((s, x) => s + x, 0) / a.length : 0;
		if (winPct.length >= 3) pb.tpPct = Math.max(.05, Math.min(.25, mean(winPct) * .85 || .1));
		else pb.tpPct = pb.tpPct || .1;
		pb.slPct = .5;
		pb.staleMs = 18e4;
		if ((brain.weights.social || 1) > 1.2 && !pb.likeSocial) brain.weights.social = Math.min(2, (brain.weights.social || 1) + .01);
		if (pb.likeSocial) brain.weights.social = Math.max(.4, (brain.weights.social || 1) - .01);
		if (pb.avoidDump) brain.weights.wallet = Math.min(2, (brain.weights.wallet || 1) + .01);
		const reasons = Object.entries(brain.reasons || {}).sort((a, b) => b[1] - a[1]);
		pb.lastRule = reasons[0] ? reasons[0][0] : pb.preferMc ? "prefer MC book" : "mix fresh";
		const wr = brain.win + brain.lose ? brain.win / (brain.win + brain.lose) : .5;
		if (wr < .35) pb.minMc = Math.min(2e6, Math.max(15e3, (pb.minMc || 15e3) * 1.05));
		if (wr > .65) pb.minMc = Math.max(15e3, (pb.minMc || 15e3) * .95);
		pb.minMc = Math.max(15e3, Math.min(2e6, pb.minMc || 15e3));
		pb.rules = [
			"trench ≥$15k or just bonded",
			"scout → audit → flow/social/X → checker",
			"desk huddle sizes the ticket · copy last wins",
			"follow FLW≥" + (pb.followMin || 1.2).toFixed(1) + " · dump wallets = sell",
			Object.keys(brain.intel || {}).length ? "X intel on " + Object.keys(brain.intel).length + " mints" : "hunt X handles on every packet",
			"tp trim / trail " + (RISK.trailPct * 100).toFixed(0) + "% / sl 50% / 3min red"
		];
		return pb;
	}
	function studyCoin(c) {
		if (!c) return ["empty tape"];
		const tag = pumpTag(c);
		const mc = pumpMark(c);
		const mem = c.mint && brain.memory[c.mint];
		const hint = walletHint(c);
		const pb = brain.playbook || {};
		const feat = featuresOf(c);
		const tape = tapeRead(tag);
		const bits = [];
		if (mem && mem.pnl < -.05) bits.push("study: last book on $" + tag + " lost paper");
		if (mem && mem.pnl > .05) bits.push("study: $" + tag + " paid last time");
		if (mem && mem.veto >= 2) bits.push("study: vetoed " + mem.veto + "×");
		if (hint.dump >= 2) bits.push("wallets dumping");
		if (hint.follow >= 1) bits.push("follow wallets in");
		const intel = intelOf(c);
		if (intel && intel.handle) bits.push("X @" + intel.handle + (intel.followers ? " " + fmtMc(intel.followers) + " flw" : ""));
		else if (!feat.social) bits.push("no X / socials");
		if (feat.graduated) bits.push("graduated / MC book");
		if (feat.social) bits.push("has socials");
		else bits.push("thin social");
		if (tape.dump) bits.push("tape dumping " + (tape.chg * 100).toFixed(0) + "%");
		if (tape.pump) bits.push("tape pumping " + (tape.chg * 100).toFixed(0) + "%");
		if (pb.minMc && mc > 0 && mc < pb.minMc) bits.push("below learned min MC " + fmtMc(pb.minMc));
		if (feat.boost && pb.avoidBoost) bits.push("paid boost — shill tape");
		if (pb.likeGrad && !feat.graduated) bits.push("playbook prefers graduated");
		const vol = coinVol(c);
		if (justBonded(c)) bits.push("just bonded vol " + fmtMc(vol));
		else bits.push("vol " + fmtMc(vol));
		bits.push(feat.bucket + " mc " + fmtMc(mc));
		return bits;
	}
	function learnedScore(c) {
		let s = fomoScore(c);
		const mem = c && c.mint && brain.memory[c.mint];
		if (mem && mem.pnl > .05) s += 28;
		if (mem && mem.pnl < -.05) s -= 45;
		if (mem && mem.veto >= 2 && mem.clear === 0) s -= 24;
		const hint = walletHint(c);
		s += hint.follow * 12 * (brain.weights.wallet || 1);
		s -= hint.dump * 16;
		const pb = brain.playbook || {};
		const feat = featuresOf(c);
		if (pb.preferMc) s += Math.log10(Math.max(1, pumpMark(c))) * 5;
		if (pb.minMc && pumpMark(c) < pb.minMc) s -= 18;
		if (pb.avoidBoost && feat.boost) s -= 32;
		if (pb.likeGrad && feat.graduated) s += 14;
		if (pb.likeSocial && feat.social) s += 8;
		if (pb.likeSocial && !feat.social) s -= 10;
		if (pb.likeFollow && feat.follow >= 1) s += 12;
		if (pb.avoidDump && feat.dump >= 2) s -= 20;
		const intel = intelOf(c);
		if (intel && intel.followers >= 1e3) s += 8;
		if (intel && intel.followers >= 1e4) s += 10;
		if (intel && intel.hasX) s += 4;
		if (feat.bucket === "mega" && avgPat("mega") > 0) s += 10;
		if (feat.bucket === "micro" && avgPat("micro") < 0) s -= 12;
		const tape = tapeRead(pumpTag(c));
		if (tape.dump) s -= 14;
		if (tape.pump && tape.chg < .4) s += 8;
		const vol = coinVol(c);
		s += Math.log10(1 + vol) * 4;
		if (justBonded(c)) s += 18;
		if (vol > medianVol()) s += 10;
		return s;
	}
	function studyTopic(who) {
		const pb = brain.playbook || {};
		const c = shift.coin || state.koth || (state.coins || [])[0];
		const tag = c ? pumpTag(c) : "";
		if (who === "WHALE") {
			const top = topWallets()[0];
			const dump = topWallets().filter((w) => w.sells > w.buys * 2 && w.sells >= 3 || (w.follow || 1) < .55).length;
			const n = Object.keys(brain.wallets || {}).length;
			return top ? "board #1 " + shortAddr(top.addr) + " flw " + (top.follow || 1).toFixed(1) + " · " + n + " wallets · " + dump + " dump" : "no wallets yet — hunting first prints";
		}
		if (who === "SHILL") {
			const intel = c && intelOf(c);
			if (intel && intel.handle) return "X @" + intel.handle + (intel.followers ? " " + fmtMc(intel.followers) + " flw" : "") + " on $" + tag;
			if (c && (c.twitter || c.telegram || c.website)) return "$" + tag + " has " + [
				c.twitter && "X",
				c.telegram && "tg",
				c.website && "web"
			].filter(Boolean).join("/");
			return tag ? "$" + tag + " no X handle yet" : "hunting X on the tape";
		}
		if (who === "RUG") return pb.likeGrad ? "rug: graduated books paid · curve avg " + avgPat("curve").toFixed(2) : "rug: curve still tradable · grad avg " + avgPat("graduated").toFixed(2);
		if (who === "SHILL") return pb.avoidBoost ? "shill: paid boosts get vetoed" : "shill: boost tape is noise, not a kill yet";
		if (who === "EXIT") {
			const open = book.positions[0];
			if (open) {
				const tape = tapeRead(open.sym);
				return "exit $" + open.sym + " tape " + tape.trend + " · tp " + ((pb.tpPct || .1) * 100).toFixed(0) + "% sl " + ((pb.slPct || .07) * 100).toFixed(0) + "%";
			}
			return "exit rules tp " + ((pb.tpPct || .1) * 100).toFixed(0) + "% / sl " + ((pb.slPct || .07) * 100).toFixed(0) + "%";
		}
		if (who === "QUANT" || who === "ARCHIVE") {
			const wr = brain.win + brain.lose ? Math.round(100 * brain.win / (brain.win + brain.lose)) : 0;
			return "playbook min MC " + fmtMc(pb.minMc) + " wr " + wr + "% · " + (pb.rules && pb.rules[0] || pb.lastRule || "open");
		}
		if (c) {
			const bits = studyCoin(c);
			return "$" + tag + " " + bits.slice(0, 2).join(" · ");
		}
		return "waiting tape · playbook min MC " + fmtMc(pb.minMc);
	}
	function studyPulse() {
		rebuildPlaybook();
		const desk = [
			"SEARCH",
			"WHALE",
			"RUG",
			"SHILL",
			"EXIT",
			"QUANT",
			"RESEARCH",
			"CHECK"
		];
		const who = desk[(state._pulse || 0) % desk.length];
		const line = studyTopic(who);
		const c = shift.coin || state.koth || (state.coins || [])[0];
		const tag = c ? pumpTag(c) : "desk";
		lesson(who, "study", line, {
			tag,
			mc: c ? pumpMark(c) : 0
		});
		share(who, tag, line);
		if (state.agents[who]) say(who, "study " + line);
		else if (state.agents.SEARCH) say("SEARCH", "study " + line);
		const reader = desk[((state._pulse || 0) + 3) % desk.length];
		const note = (brain.inbox || []).find((x) => x.who !== reader);
		if (note) {
			const reply = "re " + note.who + " — " + note.text.slice(0, 48);
			if (state.agents[reader]) say(reader, reply);
			else if (state.agents.HEAD) say("HEAD", reply);
			share(reader, note.topic || tag, reply);
		}
		renderLearn();
		renderHuddle();
		crossLearn();
	}
	function crossLearn() {
		const lessons = (brain.lessons || []).slice(0, 16);
		if (lessons.length < 2) return;
		const a = lessons[0];
		const b = lessons.find((l) => l.who !== a.who);
		if (!b) return;
		const reader = b.who;
		const line = "copied " + a.who + " — " + String(a.text || "").slice(0, 42);
		share(reader, a.tag || "desk", line);
		const st = agentOf(reader);
		st.heard = (st.heard || 0) + 1;
		if (a.kind === "win") {
			brain.weights.wallet = Math.min(2, (brain.weights.wallet || 1) + .015);
			if ((state._pulse || 0) % 4 === 0) lesson(reader, "study", line, { tag: a.tag });
		} else if (a.kind === "lose") {
			brain.weights.social = Math.min(2, (brain.weights.social || 1) + .015);
			if ((state._pulse || 0) % 4 === 1) lesson(reader, "study", line, { tag: a.tag });
		}
		rebuildPlaybook();
	}
	function debriefBuy(sym, sized) {
		const c = coinByTag(sym);
		const hint = c ? walletHint(c) : {
			follow: 0,
			dump: 0,
			best: null
		};
		const intel = c ? intelOf(c) : null;
		lesson("SEARCH", "fill", "scout packet $" + sym + " paper $" + Number(sized || 0).toFixed(0), {
			tag: sym,
			mc: c ? pumpMark(c) : 0
		});
		lesson("WHALE", "study", hint.best ? "followed " + shortAddr(hint.best.addr) + " into $" + sym + " flw " + (hint.best.follow || 1).toFixed(1) : "$" + sym + " first prints · " + (hint.follow || 0) + " follow / " + (hint.dump || 0) + " dump", { tag: sym });
		lesson("SHILL", "study", intel && intel.handle ? "X @" + intel.handle + (intel.followers ? " " + fmtMc(intel.followers) + " flw" : "") : c && (c.twitter || c.telegram) ? "$" + sym + " has socials" : "$" + sym + " no X yet", { tag: sym });
		if (c) lesson("RUG", "study", c.complete ? "$" + sym + " graduated" : "$" + sym + " still on curve " + curvePct(c).toFixed(0) + "%", { tag: sym });
		say("WHALE", hint.best ? "copied " + shortAddr(hint.best.addr) + " on $" + sym : "watching wallets on $" + sym);
		say("SHILL", intel && intel.handle ? "X @" + intel.handle + " on $" + sym : "no X handle $" + sym);
		share("HEAD", sym, "paper fill $" + sym + " $" + Number(sized || 0).toFixed(0));
		crossLearn();
	}
	function memByTag(tag) {
		return Object.values(brain.memory || {}).find((x) => x.tag === tag);
	}
	function renderLearn() {
		const el = document.getElementById("learnBox");
		if (!el) return;
		const pb = brain.playbook || {};
		const wr = brain.win + brain.lose ? (brain.win / (brain.win + brain.lose) * 100).toFixed(0) : "—";
		const mem = Object.values(brain.memory || {}).sort((a, b) => b.n - a.n).slice(0, 4).map((m) => "$" + m.tag + " ×" + m.n + " " + (m.last || "")).join(" · ") || "no memory";
		const cards = (brain.lessons || []).slice(0, 4).map((l) => l.who + " — " + l.text).join("<br>") || "no lessons yet";
		const xn = Object.values(brain.intel || {}).filter((x) => x.handle).length;
		const wn = Object.keys(brain.wallets || {}).length;
		el.innerHTML = `<div class="funnel-stats"><div><em>${brain.seen || 0}</em> seen</div><div><em>${brain.veto || 0}</em> veto</div><div><em>${wr}%</em> wr</div><div><em>${book.positions.length}</em> open</div></div>
<div class="rejects">${esc((pb.rules || []).join(" · "))}</div>
<div class="rejects">wallets ${wn} · X ${xn} · lessons ${(brain.lessons || []).length}</div>
<div class="rejects">${esc(mem)}</div>
<div class="rejects">${cards}</div>`;
		rosterList().forEach((a) => {
			const seat = document.getElementById("r-" + a.id);
			if (!seat) return;
			const st = agentOf(a.id);
			const span = seat.querySelector("span");
			if (span) span.textContent = a.role + " · " + (st.studied || 0);
		});
	}
	function shortAddr(a) {
		const t = String(a || "");
		return t.length > 8 ? t.slice(0, 4) + "…" + t.slice(-4) : t || "—";
	}
	function coinImg(c, size) {
		const tag = pumpTag(c) || "?";
		const raw = c && c.image_uri && /^https?:/i.test(c.image_uri) ? c.image_uri : "";
		const src = raw ? "/api/tape?src=img&u=" + encodeURIComponent(raw) : "";
		const ph = `<span class="ph">${esc(tag.slice(0, 2))}</span>`;
		if (!src) return ph;
		return `<span class="ava" style="width:${size}px;height:${size}px">${ph}<img src="${esc(src)}" alt="" width="${size}" height="${size}"/></span>`;
	}
	function curvePct(c) {
		if (!c) return 0;
		if (c.complete) return 100;
		const sol = +(c.virtual_sol_reserves || 0) / 1e9;
		if (sol > 0) return Math.max(2, Math.min(99, sol / 85 * 100));
		const mc = pumpMark(c);
		return mc > 0 ? Math.max(2, Math.min(99, Math.log10(mc + 1) * 12)) : 0;
	}
	function fomoScore(c) {
		if (!c) return 0;
		const ageMin = c.created_timestamp ? (Date.now() - c.created_timestamp) / 6e4 : 999;
		const recency = Math.max(0, 36 - ageMin / 4);
		const tradeRec = c.last_trade_timestamp ? Math.max(0, 24 - (Date.now() - c.last_trade_timestamp) / 6e4) : 0;
		const replies = Math.min(30, +(c.reply_count || 0));
		const live = c.is_currently_live ? 16 : 0;
		const mc = Math.log10(Math.max(1, Math.min(pumpMark(c), 5e6))) * 10;
		const koth = state.koth && c.mint && c.mint === state.koth.mint ? 12 : 0;
		const graduated = justBonded(c) ? 22 : c.complete ? 10 : 0;
		const vol = Math.log10(1 + coinVol(c)) * 8;
		return recency + tradeRec * 1.2 + replies + live + mc + koth + graduated + vol;
	}
	function pickKoth() {
		const list = (state.coins || []).filter((c) => c && !c.is_banned && !isMajor(c));
		if (!list.length) return null;
		const bonded = list.filter((c) => justBonded(c) || c.complete);
		return (bonded.length ? bonded : list).slice().sort((a, b) => coinVol(b) + fomoScore(b) - (coinVol(a) + fomoScore(a)))[0] || null;
	}
	function trackWallet(addr, kind, coin, usd) {
		if (!addr || String(addr).length < 20) return;
		if (coin && coin.mint && addr === coin.mint) return;
		const w = brain.wallets[addr] = brain.wallets[addr] || {
			addr,
			buys: 0,
			sells: 0,
			holds: 0,
			vol: 0,
			coins: {},
			follow: 1,
			last: 0,
			kind: "trader"
		};
		if (kind === "creator") w.kind = "creator";
		if (kind === "buy") w.buys++;
		if (kind === "sell") w.sells++;
		if (kind === "hold") w.holds = (w.holds || 0) + 1;
		w.vol += Math.abs(+usd || 0);
		w.last = Date.now();
		const mint = coin && (coin.mint || pumpTag(coin));
		if (mint) {
			const slot = w.coins[mint] = w.coins[mint] || {
				tag: pumpTag(coin),
				n: 0,
				side: kind
			};
			slot.n++;
			slot.tag = pumpTag(coin) || slot.tag;
			if (kind === "buy" || kind === "sell") slot.side = kind;
			slot.t = Date.now();
		}
	}
	function pruneWallets() {
		const list = Object.values(brain.wallets || {});
		if (list.length <= 80) return;
		list.sort((a, b) => walletScore(b) - walletScore(a));
		const keep = {};
		list.slice(0, 80).forEach((w) => {
			keep[w.addr] = w;
		});
		brain.wallets = keep;
	}
	function walletHint(c) {
		const mint = c && c.mint;
		let follow = 0, dump = 0, best = null;
		if (!mint) return {
			follow: 0,
			dump: 0,
			best: null
		};
		Object.values(brain.wallets || {}).forEach((w) => {
			const slot = w.coins && w.coins[mint];
			if (!slot) return;
			if (w.sells > w.buys * 2 && w.sells >= 3 || (w.follow || 1) < .55) dump++;
			if ((w.follow || 1) >= 1.25 && slot.side === "buy") {
				follow++;
				if (!best || w.follow > best.follow) best = w;
			}
		});
		return {
			follow,
			dump,
			best
		};
	}
	function walletLearnFromFill(p, pnl) {
		if (!p || !p.mint) return;
		Object.values(brain.wallets || {}).forEach((w) => {
			const slot = w.coins && w.coins[p.mint];
			if (!slot) return;
			if (pnl > 0 && slot.side === "buy") w.follow = Math.min(3, (w.follow || 1) + .08);
			if (pnl < 0 && slot.side === "buy") w.follow = Math.max(.2, (w.follow || 1) - .06);
			if (slot.side === "sell" && pnl < 0) w.follow = Math.max(.2, (w.follow || 1) - .1);
		});
		brain.weights.wallet = Math.max(.4, Math.min(2, (brain.weights.wallet || 1) + (pnl > 0 ? .02 : -.02)));
	}
	function walletScore(w) {
		if (!w) return 0;
		const coins = Object.keys(w.coins || {}).length;
		const rec = Math.max(0, 1 - (Date.now() - (w.last || 0)) / 36e5);
		const dump = w.sells > w.buys * 2 && w.sells >= 3 || (w.follow || 1) < .55;
		let s = (w.follow || 1) * 55 + Math.log10(1 + (w.vol || 0)) * 14 + coins * 8 + rec * 18 + (w.buys || 0) * 1.5;
		if (w.kind === "creator") s += 6;
		if (dump) s *= .35;
		return s;
	}
	function topWallets() {
		return Object.values(brain.wallets || {}).sort((a, b) => walletScore(b) - walletScore(a)).slice(0, 10);
	}
	function renderWallets() {
		const html = `<div class="wal-head"><span>#</span><span>WALLET</span><span>B/S</span><span>VOL</span><span>FLW</span></div>` + (topWallets().map((w, i) => {
			const dump = w.sells > w.buys * 2 && w.sells >= 3 || (w.follow || 1) < .55;
			const last = Object.values(w.coins || {}).sort((a, b) => (b.t || 0) - (a.t || 0))[0];
			const kind = w.kind === "creator" ? " DEV" : "";
			return `<div class="wal-row${dump ? " dump" : ""}"><span class="rk">${i + 1}</span><span class="sym">${esc(shortAddr(w.addr))}${kind}</span><span class="vol">${w.buys || 0}/${w.sells || 0}</span><span class="mc">${fmtMc(w.vol || 0)}</span><span class="flw">${dump ? "DUMP" : (w.follow || 1).toFixed(1)}</span></div>` + (last ? `<div class="wal-last">${esc(last.side || "")} $${esc(last.tag || "")} · ${Object.keys(w.coins || {}).length} mints</div>` : "");
		}).join("") || "watching first prints…");
		const board = document.getElementById("whaleRows");
		if (board) board.innerHTML = html;
		const box = document.getElementById("walList");
		if (box) box.innerHTML = html;
	}
	function renderFomo() {
		const ranked = (state.coins || []).slice().sort((a, b) => fomoScore(b) - fomoScore(a));
		state.fomo = ranked.slice(0, 8);
		const rows = state.fomo.map((c) => {
			const tag = pumpTag(c);
			const live = c.is_currently_live ? " <span class=\"up\">LIVE</span>" : "";
			return `<div class="fomo-row">${coinImg(c, 18)}<span class="sym">$${esc(tag)}${live}</span><span class="mc">${fmtMc(pumpMark(c))}</span><span class="score">${fomoScore(c).toFixed(0)}</span></div>`;
		}).join("") || "waiting pump tape…";
		const board = document.getElementById("fomoRows");
		if (board) board.innerHTML = rows;
		const list = document.getElementById("fomoList");
		if (list) list.innerHTML = rows;
	}
	function renderKoth() {
		const c = state.koth = pickKoth();
		const el = document.getElementById("kothBar");
		if (!el) return;
		if (!c) {
			el.innerHTML = `<span class="ph">PF</span><div><div class="tag">KOTH — waiting tape</div><div class="meta">pump.fun paper</div></div>`;
			return;
		}
		const live = c.is_currently_live ? "<i class=\"live-dot\"></i>" : "";
		el.innerHTML = `${coinImg(c, 24)}${live}<div><div class="tag">KOTH $${esc(pumpTag(c))}</div><div class="meta">mc ${fmtMc(pumpMark(c))} · ${curvePct(c).toFixed(0)}% curve</div></div><div class="meta">${c.is_currently_live ? "LIVE" : "on curve"}</div>`;
	}
	function renderCoinStrip() {
		const el = document.getElementById("coinStrip");
		if (!el) return;
		const koth = state.koth && state.koth.mint;
		el.innerHTML = (state.fomo || state.coins || []).slice(0, 6).map((c) => {
			const cls = ["coin-chip"];
			if (c.is_currently_live) cls.push("live");
			if (koth && c.mint === koth) cls.push("koth");
			return `<div class="${cls.join(" ")}">${coinImg(c, 32)}<span>$${esc(pumpTag(c))}</span><span>${fmtMc(pumpMark(c))}</span></div>`;
		}).join("");
	}
	function drawCurve(c) {
		const svg = document.getElementById("curveSvg");
		const fill = document.getElementById("curveFill");
		const tag = document.getElementById("curveTag");
		const meta = document.getElementById("curveMeta");
		const pct = curvePct(c);
		if (tag) tag.textContent = c ? "$" + pumpTag(c) : "—";
		if (fill) fill.style.width = pct + "%";
		if (meta) {
			const sol = c ? +(c.virtual_sol_reserves || 0) / 1e9 : 0;
			meta.textContent = c ? (sol ? sol.toFixed(1) + " SOL · " : "") + pct.toFixed(0) + "% to graduate · paper" : "paper · pump.fun · live send off";
		}
		if (!svg) return;
		let d = "M 0 68 ";
		for (let i = 1; i <= 24; i++) {
			const x = i / 24 * 200;
			const y = 68 - Math.pow(i / 24, 2.15) * 58;
			d += "L " + x.toFixed(1) + " " + y.toFixed(1) + " ";
		}
		const vis = Math.max(4, pct * 2);
		svg.innerHTML = `<path d="${d} L 200 72 L 0 72 Z" fill="#0a3a1822"/><path d="${d}" fill="none" stroke="#1a4a2a" stroke-width="2"/><path d="${d}" fill="none" stroke="#3dff8a" stroke-width="2.2" stroke-dasharray="${vis} 400" stroke-linecap="round"/>`;
	}
	function renderBoards() {
		renderKoth();
		renderFomo();
		renderWallets();
		renderCoinStrip();
		drawCurve(state.koth || state.fomo && state.fomo[0] || state.coins && state.coins[0] || null);
	}
	const BANTER = {
		office: [
			["TAPE", "SOL print is live"],
			["FLOW", "ack tape — no sweep"],
			["CHIEF", "keep it paper, nobody sends"],
			["RISK", "0.5% cap, don't get cute"],
			["VERIFY", "that print is real"],
			["QUANT", "vol is a nap"],
			["MACRO", "session is fine"],
			["ARCHIVE", "logged"]
		],
		alpha: [
			["SEARCH", "fresh pump name on the tape"],
			["WHALE", "first 20 wallets — scoring follow"],
			["RUG", "mint auth still a question"],
			["SHILL", "timeline smells same-day"],
			["RISK", "packet or we kill it"],
			["HEAD", "CLEAR is not a send"],
			["SNIPER", "paper stamp only — live send off"],
			["EXIT", "SELL when wallets dump or the paper is stale"]
		],
		night: [
			["MONITOR", "another mint, same movie"],
			["AUDITOR", "funder cluster, I don't like it"],
			["NARRATIVE", "spread score is junk"],
			["TIMING", "curve is asleep"],
			["CHECKER", "no"]
		],
		farm: [
			["RESEARCH", "need a source not a vibe"],
			["BUILD", "desk is wired"],
			["CHECK", "don't ship a lie"],
			["DELIVER", "paper only"]
		]
	};
	function chatter() {
		const tag = shift.tag;
		if (tag && Math.random() > .45) {
			const tied = {
				farm: ["RESEARCH", "$" + tag + " still in the farm packet"],
				office: ["TAPE", "$" + tag + " still on the pit tape"],
				night: ["MONITOR", "$" + tag + " still in the night stack"],
				alpha: ["SEARCH", "$" + tag + " still in ALPHA"]
			};
			const [who, line] = tied[state.view] || tied.office;
			if (state.agents[who]) {
				talk(who, line);
				pop(who, line.slice(0, 20));
			}
			return;
		}
		const pack = BANTER[state.view] || BANTER.office;
		if (!pack.length) return;
		const i = Math.floor(Math.random() * pack.length);
		const [who, line] = pack[i];
		const [who2, line2] = pack[(i + 1) % pack.length];
		if (state.agents[who]) {
			talk(who, line);
			pop(who, line.slice(0, 20));
		}
		if (who2 && state.agents[who2]) setTimeout(() => {
			if (!state.agents[who2]) return;
			talk(who2, "re " + who + " — " + line2);
			pop(who2, line2.slice(0, 20));
		}, 650);
	}
	try {
		const saved = JSON.parse(localStorage.getItem("gs-book") || "null");
		if (saved && typeof saved.cash === "number") {
			Object.assign(book, saved, { cfg: Object.assign(book.cfg, saved.cfg || {}) });
			book.savedAt = saved.savedAt || 0;
			if (saved.seq) state.seq = saved.seq;
			if (saved.ticket) state.ticket = saved.ticket;
			if (saved.ohlc) state.ohlc = saved.ohlc;
			if (saved.shift) {
				shift.step = saved.shift.step || shift.step;
				shift.room = saved.shift.room || shift.room;
				shift.tag = saved.shift.tag || "";
				shift.line = saved.shift.line || shift.line;
				shift.lane = saved.shift.lane || 0;
				shift._mint = saved.shift.mint || "";
			}
		}
	} catch (_) {}
	book.cfg.liveSend = false;
	book.cfg.canWithdraw = false;
	if (!(book.cfg.riskPct >= 1)) book.cfg.riskPct = 1;
	book.sold = book.sold || 0;
	book.realized = book.realized || 0;
	book.trades = book.trades || [];
	book.journal = book.journal || [];
	if (!state.ohlc) state.ohlc = {};
	_bootLocalAt = Math.max(_bootLocalAt, +(book.savedAt || brain.savedAt || 0));
	pushBar("EQ", book.start || 1e3);
	pushBar("EQ", equity());
	const room = document.getElementById("room");
	const appEl = document.getElementById("app");
	function floorEl() {
		return document.getElementById("agentLayer") || room;
	}
	function persist() {
		if (!_ready) return;
		try {
			const snap = snapshotDesk();
			localStorage.setItem("gs-book", JSON.stringify(snap.bookBag));
			localStorage.setItem("gs-brain", JSON.stringify(snap.brain));
			idbPut(snap);
			queueDeskFlush(snap);
			markSaved(true);
		} catch (_) {
			try {
				saveBrain();
				markSaved(false);
			} catch (__) {}
		}
	}
	function snapshotDesk() {
		const ohlc = {};
		Object.keys(state.ohlc || {}).slice(0, 12).forEach((k) => {
			ohlc[k] = (state.ohlc[k] || []).slice(-20);
		});
		const mem = {};
		Object.entries(brain.memory || {}).sort((a, b) => (b[1].t || 0) - (a[1].t || 0)).slice(0, 80).forEach(([k, v]) => {
			mem[k] = v;
		});
		const wallets = {};
		Object.entries(brain.wallets || {}).sort((a, b) => walletScore(b[1]) - walletScore(a[1])).slice(0, 60).forEach(([k, v]) => {
			wallets[k] = v;
		});
		const agents = {};
		Object.entries(brain.agents || {}).forEach(([k, v]) => {
			agents[k] = {
				id: v.id,
				studied: v.studied,
				fills: v.fills,
				vetoes: v.vetoes,
				wins: v.wins,
				losses: v.losses,
				last: v.last,
				lessons: (v.lessons || []).slice(0, 4)
			};
		});
		const savedAt = Date.now();
		brain.savedAt = savedAt;
		const bookBag = {
			savedAt,
			cash: book.cash,
			start: book.start,
			positions: book.positions,
			journal: (book.journal || []).slice(0, 120),
			feesPaid: book.feesPaid,
			tickets: book.tickets,
			refused: book.refused,
			bought: book.bought,
			sold: book.sold,
			realized: book.realized,
			trades: (book.trades || []).slice(0, 80),
			cfg: book.cfg,
			seq: state.seq,
			ticket: state.ticket,
			ohlc,
			shift: {
				step: shift.step,
				room: shift.room,
				tag: shift.tag,
				line: shift.line,
				lane: shift.lane,
				mint: shift.coin && shift.coin.mint || shift._mint || ""
			}
		};
		return {
			savedAt,
			bookBag,
			brain: {
				seen: brain.seen,
				veto: brain.veto,
				clear: brain.clear,
				fills: brain.fills,
				win: brain.win,
				lose: brain.lose,
				reasons: brain.reasons,
				weights: brain.weights,
				chat: (brain.chat || []).slice(0, 40),
				memory: mem,
				notes: (brain.notes || []).slice(0, 30),
				wallets,
				agents,
				lessons: (brain.lessons || []).slice(0, 50),
				playbook: brain.playbook,
				patterns: brain.patterns,
				regimes: brain.regimes,
				scanned: brain.scanned,
				inbox: (brain.inbox || []).slice(0, 30),
				huddles: (brain.huddles || []).slice(0, 20),
				savedAt,
				funnel: brain.funnel,
				pulse: brain.pulse,
				day: brain.day,
				briefs: (brain.briefs || []).slice(0, 8),
				creators: Object.fromEntries(Object.entries(brain.creators || {}).slice(0, 40)),
				intel: Object.fromEntries(Object.entries(brain.intel || {}).slice(0, 40)),
				threads: Object.fromEntries(Object.entries(brain.threads || {}).slice(0, 24).map(([k, v]) => [k, {
					mint: v.mint,
					tag: v.tag,
					score: v.score,
					msgs: (v.msgs || []).slice(0, 8)
				}]))
			},
			book: bookBag
		};
	}
	function applyDesk(snap) {
		if (!snap) return false;
		const bag = snap.bookBag || snap.book || snap;
		if (bag && typeof bag.cash === "number") {
			Object.assign(book, {
				cash: bag.cash,
				start: bag.start,
				positions: bag.positions || [],
				journal: bag.journal || [],
				feesPaid: bag.feesPaid || 0,
				tickets: bag.tickets || 0,
				refused: bag.refused || 0,
				bought: bag.bought || 0,
				sold: bag.sold || 0,
				realized: bag.realized || 0,
				trades: bag.trades || []
			});
			if (bag.cfg) Object.assign(book.cfg, bag.cfg);
			if (bag.seq) state.seq = bag.seq;
			if (bag.savedAt) book.savedAt = bag.savedAt;
			if (bag.ticket) state.ticket = bag.ticket;
			if (bag.ohlc) state.ohlc = bag.ohlc;
			if (bag.shift) {
				shift.step = bag.shift.step || shift.step;
				shift.room = bag.shift.room || shift.room;
				shift.tag = bag.shift.tag || "";
				shift.line = bag.shift.line || shift.line;
				shift.lane = bag.shift.lane || 0;
				shift._mint = bag.shift.mint || "";
			}
		}
		if (snap.brain) {
			Object.assign(brain, snap.brain);
			if (!brain.memory) brain.memory = {};
			if (!brain.inbox) brain.inbox = [];
			if (!brain.huddles) brain.huddles = [];
			if (!brain.agents) brain.agents = {};
			if (!brain.funnel) brain.funnel = {
				scanned: 0,
				cleared: 0,
				confirmed: 0,
				filled: 0,
				skipped: 0,
				reported: 0
			};
			if (!brain.creators) brain.creators = {};
			if (!brain.threads) brain.threads = {};
			if (!brain.intel) brain.intel = {};
			if (!brain.pulse) brain.pulse = {
				go: .5,
				t: 0,
				why: "cold"
			};
			if (!brain.day) brain.day = {
				key: "",
				pnl: 0,
				trades: 0,
				halted: false,
				streak: 0,
				cooldownUntil: 0
			};
			if (brain.day.streak == null) brain.day.streak = 0;
			if (!brain.briefs) brain.briefs = [];
		}
		book.cfg.liveSend = false;
		book.cfg.canWithdraw = false;
		return true;
	}
	function idbPut(snap) {
		try {
			const req = indexedDB.open("gs-desk", 1);
			req.onupgradeneeded = () => {
				req.result.createObjectStore("kv");
			};
			req.onsuccess = () => {
				try {
					req.result.transaction("kv", "readwrite").objectStore("kv").put(snap, "desk");
				} catch (_) {}
			};
		} catch (_) {}
	}
	function idbGet() {
		return new Promise((resolve) => {
			try {
				const req = indexedDB.open("gs-desk", 1);
				req.onupgradeneeded = () => {
					req.result.createObjectStore("kv");
				};
				req.onsuccess = () => {
					try {
						const g = req.result.transaction("kv").objectStore("kv").get("desk");
						g.onsuccess = () => resolve(g.result || null);
						g.onerror = () => resolve(null);
					} catch (_) {
						resolve(null);
					}
				};
				req.onerror = () => resolve(null);
			} catch (_) {
				resolve(null);
			}
		});
	}
	let _flushT = 0;
	let _flushSnap = null;
	function queueDeskFlush(snap) {
		_flushSnap = snap;
		clearTimeout(_flushT);
		_flushT = setTimeout(() => {
			const body = _flushSnap;
			_flushSnap = null;
			if (!body) return;
			fetch("/api/tape?src=desk", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body)
			}).catch(() => {});
		}, 1500);
	}
	function flushDeskNow() {
		if (!_flushSnap) return;
		const body = _flushSnap;
		_flushSnap = null;
		clearTimeout(_flushT);
		try {
			navigator.sendBeacon && navigator.sendBeacon("/api/tape?src=desk", new Blob([JSON.stringify(body)], { type: "application/json" }));
		} catch (_) {
			fetch("/api/tape?src=desk", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
				keepalive: true
			}).catch(() => {});
		}
	}
	window.__gsFlushNow = flushDeskNow;
	function markSaved(ok) {
		const el = document.getElementById("saveChip");
		if (!el) return;
		el.textContent = ok ? "DISK " + (/* @__PURE__ */ new Date()).toLocaleTimeString("en-GB", { hour12: false }) : "DISK FAIL";
		el.style.color = ok ? "var(--lime)" : "var(--red)";
	}
	function deskStamp(snap) {
		if (!snap || snap.empty) return 0;
		return +(snap.savedAt || snap.bookBag && snap.bookBag.savedAt || snap.brain && snap.brain.savedAt || 0);
	}
	function deskScore(snap) {
		if (!snap || snap.empty) return -1;
		const bag = snap.bookBag || snap.book || {};
		const br = snap.brain || {};
		const f = br.funnel || {};
		return (bag.bought || 0) * 300 + (bag.sold || 0) * 300 + (bag.positions || []).length * 120 + (f.filled || 0) * 200 + (f.confirmed || 0) * 20 + (f.cleared || 0) * 8 + (f.scanned || 0) + (br.seen || 0) + (br.win || 0) * 50 + Math.round(Math.abs(+(bag.realized || 0)) * 20) + Object.keys(br.memory || {}).length + Object.keys(br.creators || {}).length * 3 + (br.lessons || []).length;
	}
	function betterSnap(a, b) {
		if (!a || a.empty) return b || null;
		if (!b || b.empty) return a;
		const sa = deskScore(a), sb = deskScore(b);
		if (sa !== sb) return sa > sb ? a : b;
		return deskStamp(a) >= deskStamp(b) ? a : b;
	}
	async function hydrateDesk() {
		let remote = null, idb = null;
		try {
			const r = await fetch("/api/tape?src=desk");
			if (r.ok) remote = await r.json();
		} catch (_) {}
		try {
			idb = await idbGet();
		} catch (_) {}
		const localSnap = {
			savedAt: _bootLocalAt,
			bookBag: {
				savedAt: _bootLocalAt,
				cash: book.cash,
				start: book.start,
				positions: book.positions,
				journal: book.journal,
				feesPaid: book.feesPaid,
				tickets: book.tickets,
				refused: book.refused,
				bought: book.bought,
				sold: book.sold,
				realized: book.realized,
				trades: book.trades,
				cfg: book.cfg,
				seq: state.seq,
				ticket: state.ticket,
				ohlc: state.ohlc,
				shift: {
					step: shift.step,
					room: shift.room,
					tag: shift.tag,
					line: shift.line,
					lane: shift.lane,
					mint: shift._mint || ""
				}
			},
			brain
		};
		const best = betterSnap(betterSnap(localSnap, idb), remote);
		if (best && best !== localSnap) applyDesk(best);
		_ready = true;
		if ((book.bought || 0) === 0) Object.values(brain.memory || {}).forEach((m) => {
			if ((m.fills || 0) === 0 && (m.veto || 0) > 1) {
				m.veto = 1;
				if (m.last === "veto") m.last = "seen";
			}
		});
		replayChat();
		replayJournal();
		updateBook();
		renderPos();
		renderPipe();
		renderLearn();
		renderHuddle();
		renderTrench();
		renderShift();
		persist();
		if (best && best !== localSnap) log("SYSTEM", "desk restored from disk · cash $" + book.cash.toFixed(2) + " · buys " + (book.bought || 0) + " sells " + (book.sold || 0));
	}
	function esc(s) {
		return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
	}
	function renderWatch() {
		const el = document.getElementById("watchChip");
		if (!el) return;
		const w = (book.cfg.watchAddr || "").trim();
		el.textContent = w ? "WATCH " + w.slice(0, 4) + "…" + w.slice(-4) : "WATCH —";
		el.title = w || "no public watch address";
	}
	function rosterList() {
		return state.view === "farm" ? FARM_AGENTS : state.view === "alpha" ? ALPHA_AGENTS : state.view === "night" ? NIGHT_AGENTS : FLOOR_AGENTS;
	}
	function mid(sym) {
		return state.prices[sym] || SEED[sym] || 0;
	}
	function pumpTag(c) {
		if (!c) return "";
		return (c.symbol || c.name || "UNK").replace(/[^A-Za-z0-9]/g, "").slice(0, 10).toUpperCase() || "UNK";
	}
	function isMajor(c) {
		return /^(SOL|WSOL|USDC|USDT|USD1|DAI|ETH|WETH|BTC|WBTC|JLP|JITOSOL|MSOL|CBBTC|USDS)$/.test(pumpTag(c));
	}
	function pumpMark(c) {
		if (!c) return 0;
		const usd = +(c.usd_market_cap || c.market_cap_usd || 0);
		if (usd > 0) return usd;
		const sol = +(c.market_cap || 0);
		const solPx = state.prices.SOL || SEED.SOL || 200;
		return sol > 0 ? sol * solPx : 0;
	}
	const FLOOR_MC = 15e3, MEGA_MC = 2e7, MIN_BUY = 10;
	function justBonded(c) {
		if (!c || !c.complete) return false;
		const t = c.last_trade_timestamp || c.created_timestamp || 0;
		return t > 0 && Date.now() - t < 864e5;
	}
	function isTrench(c) {
		if (!c || isMajor(c) || c.is_banned) return false;
		if (justBonded(c)) return true;
		return pumpMark(c) >= FLOOR_MC;
	}
	function coinVol(c) {
		if (!c) return 0;
		const v = +(c.volume_24h || c.volume_usd || c.usd_volume || 0);
		if (v > 0) return v;
		if (c.volume && typeof c.volume === "object") return +(c.volume.h24 || c.volume.h1 || 0);
		if (+c.volume > 0 && +c.volume < 0xe8d4a51000) return +c.volume;
		const last = c.last_trade_timestamp || 0;
		const recency = last ? Math.max(0, 1 - (Date.now() - last) / 36e5) : 0;
		const sol = +(c.virtual_sol_reserves || 0) / 1e9 * (state.prices.SOL || SEED.SOL || 200);
		return +(c.reply_count || 0) * 80 + sol * (.5 + recency) + recency * 2e4;
	}
	function medianVol() {
		const vs = (state.coins || []).map(coinVol).filter((v) => v > 0).sort((a, b) => a - b);
		if (!vs.length) return 5e3;
		return vs[Math.floor(vs.length / 2)] || 5e3;
	}
	function solCap() {
		return Math.max(MIN_BUY, (state.prices.SOL || SEED.SOL || 200) * .1);
	}
	function ticketSize() {
		const pct = Math.max(1, book.cfg.riskPct || 1) / 100;
		return Math.max(MIN_BUY, Math.min(solCap(), equity() * pct, 40));
	}
	function share(who, topic, text) {
		brain.inbox = brain.inbox || [];
		const row = {
			t: Date.now(),
			who,
			topic: String(topic || "desk").slice(0, 16),
			text: String(text || "").slice(0, 140)
		};
		brain.inbox.unshift(row);
		if (brain.inbox.length > 40) brain.inbox.pop();
	}
	const SCORE_W = {
		audit: .3,
		narrative: .25,
		timing: .15,
		metrics: .3
	};
	const MIN_SCORE = .42;
	const RISK = {
		dailyLoss: 80,
		maxTrades: 9999,
		maxPos: 9999,
		cooldownAfter: 3,
		cooldownMs: 48e4,
		remainingShare: .3,
		exposurePct: .95,
		trailPct: .12,
		tightenPct: .06,
		maxHoldMs: 48e4
	};
	function dayKey() {
		return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	}
	function rollDay() {
		brain.day = brain.day || {
			key: "",
			pnl: 0,
			trades: 0,
			halted: false,
			streak: 0,
			cooldownUntil: 0
		};
		const k = dayKey();
		if (brain.day.key !== k) brain.day = {
			key: k,
			pnl: 0,
			trades: 0,
			halted: false,
			streak: 0,
			cooldownUntil: 0
		};
		if ((brain.day.pnl || -0) <= -RISK.dailyLoss) brain.day.halted = true;
		return brain.day;
	}
	function coolingDown() {
		const d = rollDay();
		return !!(d.cooldownUntil && Date.now() < d.cooldownUntil);
	}
	function cooldownLeft() {
		const d = brain.day || {};
		return Math.max(0, (d.cooldownUntil || 0) - Date.now());
	}
	function bookExposure() {
		return book.positions.reduce((s, p) => s + Math.abs(p.qty || 0) * (p.avg || 0), 0);
	}
	function creatorOf(addr) {
		if (!addr) return null;
		brain.creators = brain.creators || {};
		return brain.creators[addr] = brain.creators[addr] || {
			addr,
			n: 0,
			rugs: 0,
			pnl: 0,
			last: 0,
			seen: 0,
			bought: 0
		};
	}
	function markCreator(addr, pnl) {
		const cr = creatorOf(addr);
		if (!cr) return;
		cr.n++;
		cr.pnl += pnl;
		cr.last = Date.now();
		if (pnl < -.12) cr.rugs++;
	}
	function creatorBlocked(c) {
		const cr = c && c.creator && brain.creators && brain.creators[c.creator];
		if (!cr) return null;
		if (cr.rugs >= 2) return "creator memory — rugged " + cr.rugs + "×";
		if (book.positions.some((p) => p.creator && c.creator && p.creator === c.creator)) return "one position per creator";
		return null;
	}
	function threadOf(mint) {
		if (!mint) return {
			mint: "?",
			msgs: []
		};
		brain.threads = brain.threads || {};
		return brain.threads[mint] = brain.threads[mint] || {
			mint,
			tag: "",
			msgs: [],
			score: null,
			addr: mint
		};
	}
	function postThread(c, who, kind, text, extra) {
		const mint = c && c.mint || pumpTag(c) || "?";
		const th = threadOf(mint);
		if (th.addr && c && c.mint && th.addr !== c.mint) {
			log("ARCHIVE", "address drift $" + pumpTag(c) + " thread " + String(th.addr).slice(0, 6) + " vs " + String(c.mint).slice(0, 6), "no");
			return th;
		}
		th.addr = th.addr || mint;
		th.tag = pumpTag(c) || th.tag;
		th.msgs.unshift({
			t: Date.now(),
			who,
			kind,
			text: String(text || "").slice(0, 140),
			mint
		});
		if (th.msgs.length > 12) th.msgs.pop();
		if (extra && extra.score) th.score = extra.score;
		share(who, pumpTag(c) || mint.slice(0, 6), text);
		return th;
	}
	function pulseSignal() {
		state.prices.SOL || SEED.SOL;
		const bars = typeof barsOf === "function" ? barsOf("SOL") : [];
		const chg = bars.length > 3 && bars[0].o ? (bars[bars.length - 1].c - bars[0].o) / bars[0].o : 0;
		const launches = (state.coins || []).filter((c) => !c.complete && Date.now() - (c.created_timestamp || 0) < 18e5).length;
		const volMed = medianVol();
		let go = .5 + Math.max(-.25, Math.min(.25, chg * 4));
		if (launches >= 8) go += .08;
		if (launches <= 2) go -= .12;
		if (volMed < 800) go -= .08;
		if (brain.day && brain.day.halted) go = .1;
		if (coolingDown()) go = Math.min(go, .22);
		go = Math.max(.05, Math.min(.95, go));
		const why = brain.day && brain.day.halted ? "daily loss halt" : coolingDown() ? "loss streak cooldown" : go < .3 ? "tape cold — pause" : chg > .01 ? "SOL bid, launches live" : "mixed tape";
		brain.pulse = {
			go,
			t: Date.now(),
			why,
			launches,
			chg
		};
		return brain.pulse;
	}
	function parseTapeTrade(t) {
		if (!t || typeof t !== "object") return null;
		let ts = +(t.timestamp || t.time || t.slot || 0);
		if (ts > 0xe8d4a51000) ts = ts / 1e3;
		else if (ts > 1e11) ts = ts / 1e3;
		const type = String(t.type || t.txType || "").toLowerCase();
		const isBuy = t.is_buy != null ? !!t.is_buy : !/sell/i.test(type);
		return {
			wallet: String(t.userAddress || t.user || t.traderPublicKey || t.traderPublic || t.trader || t.wallet || t.maker || t.owner || t.userPublicKey || ""),
			isBuy,
			sol: +(t.sol_amount || t.solAmount || t.amountSol || t.sol || 0),
			usd: +(t.amountUsd || t.usd || t.tokenAmountUsd || t.usd_amount || t.priceInUsd || 0),
			ts
		};
	}
	function parseHolder(h) {
		if (!h || typeof h !== "object") return null;
		const share = h.share != null ? +h.share : h.percentage != null ? +h.percentage / 100 : 0;
		return {
			address: String(h.address || h.wallet || h.owner || ""),
			share: share || 0,
			isCreator: !!(h.is_creator || h.isCreator)
		};
	}
	function analyzeCoin(c) {
		const trades = (c && c._trades || []).map(parseTapeTrade).filter(Boolean);
		const holders = (c && c._holders || []).map(parseHolder).filter(Boolean);
		const buys = trades.filter((t) => t.isBuy);
		const sells = trades.filter((t) => !t.isBuy);
		const wallets = new Set(trades.map((t) => t.wallet).filter(Boolean));
		const top5 = holders.slice().sort((a, b) => b.share - a.share).slice(0, 5).reduce((s, h) => s + h.share, 0);
		const creatorShare = holders.find((h) => h.isCreator || c.creator && h.address === c.creator)?.share || 0;
		const born = c.created_timestamp ? c.created_timestamp > 0xe8d4a51000 ? c.created_timestamp / 1e3 : c.created_timestamp : 0;
		const snipers = born ? new Set(buys.filter((t) => t.ts && t.ts <= born + 15).map((t) => t.wallet).filter(Boolean)).size : 0;
		let uniqueness = 0, concentration = 1;
		if (buys.length) {
			const vol = {};
			buys.forEach((t) => {
				if (t.wallet) vol[t.wallet] = (vol[t.wallet] || 0) + (t.sol || t.usd || 1);
			});
			const vals = Object.values(vol);
			const tot = vals.reduce((s, v) => s + v, 0) || 1;
			uniqueness = Object.keys(vol).length / buys.length;
			concentration = Math.max(0, ...vals) / tot;
		}
		const diversity = Math.max(0, Math.min(1, uniqueness * (1 - concentration)));
		const amounts = buys.map((t) => t.sol || t.usd).filter((v) => v > 0);
		let wash = false, coordinated = false, bundled = false;
		if (amounts.length >= 4) {
			const sorted = amounts.slice().sort((a, b) => a - b);
			const mid = sorted[Math.floor(sorted.length / 2)] || 1;
			if (amounts.filter((a) => Math.abs(a - mid) / mid < .08).length >= 4) wash = true;
		}
		if (buys.length >= 3) {
			const stamped = buys.filter((t) => t.ts).sort((a, b) => a.ts - b.ts);
			for (let i = 1; i < stamped.length; i++) {
				const dt = stamped[i].ts - stamped[i - 1].ts;
				const a = stamped[i].sol || stamped[i].usd, b = stamped[i - 1].sol || stamped[i - 1].usd;
				if (dt > 0 && dt < 5 && a > 0 && b > 0 && Math.abs(a - b) / Math.max(a, b) < .05 && stamped[i].wallet !== stamped[i - 1].wallet) {
					coordinated = true;
					break;
				}
			}
		}
		if (c.creator && born) bundled = buys.some((t) => t.wallet === c.creator && t.ts && t.ts <= born + 15);
		const ratio = sells.length ? buys.length / sells.length : buys.length;
		let risk = 0;
		risk += Math.min(3, top5 * 3.75);
		risk += Math.min(3, creatorShare * 10);
		risk += Math.min(2, snipers * .25);
		risk += (1 - diversity) * 1.5;
		if (trades.length && trades.length < 8) risk += 1;
		if (wash) risk = Math.max(risk, 8);
		if (coordinated) risk = Math.max(risk, 8.5);
		if (creatorShare >= .25 || top5 >= .8) risk = 10;
		const quality = Math.max(0, Math.min(1, 1 - risk / 10));
		const met = {
			unique: wallets.size,
			buys: buys.length,
			sells: sells.length,
			ratio,
			snipers,
			diversity,
			top5,
			creatorShare,
			wash,
			coordinated,
			bundled,
			risk,
			quality,
			traded: !!(c && c._traded)
		};
		if (c) c._metrics = met;
		return met;
	}
	function isDerivative(c) {
		const name = (c && c.name || "") + " " + (c && c.symbol || "");
		if (/\b(2\.0|v2|copy|clone|baby|mini)\b/i.test(name)) return true;
		const koth = state.koth && pumpTag(state.koth);
		if (koth && pumpTag(c) !== koth && new RegExp(koth, "i").test(name) && name.length > koth.length + 2) return true;
		return false;
	}
	function scorePacket(c) {
		const hint = walletHint(c);
		const feat = featuresOf(c);
		const tape = tapeRead(pumpTag(c));
		const vol = coinVol(c);
		const med = medianVol();
		const mem = c.mint && brain.memory[c.mint];
		const ageMin = c.created_timestamp ? (Date.now() - c.created_timestamp) / 6e4 : 999;
		const met = c._metrics || analyzeCoin(c);
		let audit = .55;
		if (hint.dump >= 2) audit -= .28;
		if (hint.follow >= 1) audit += .18;
		if (feat.boost) audit -= .12;
		if (c.creator && (brain.creators[c.creator] || {}).rugs) audit -= .2 * brain.creators[c.creator].rugs;
		if (mem && mem.pnl < -.05) audit -= .15;
		if (met.wash) audit = Math.min(audit, .15);
		if (met.coordinated) audit = Math.min(audit, .12);
		if (met.bundled) audit -= .22;
		if (met.snipers >= 6) audit -= .12;
		audit = Math.max(0, Math.min(1, audit));
		let narrative = feat.social ? .62 : .32;
		const intel = intelOf(c);
		const name = c.name || c.symbol || "";
		if (/inu|pepe|elon|trump|ai|hood|sol/i.test(name)) narrative += .06;
		if (!c.description && !c.image_uri) narrative -= .18;
		if (feat.live) narrative += .1;
		if (intel && intel.hasX) narrative += .06;
		if (intel && intel.followers >= 1e3) narrative += .06;
		if (intel && intel.followers >= 1e4) narrative += .08;
		if (intel && intel.hasTg) narrative += .03;
		if (isDerivative(c)) narrative *= .7;
		narrative = Math.max(0, Math.min(1, narrative));
		const pulse = pulseSignal();
		let timing = pulse.go;
		if (tape.dump) timing -= .2;
		if (tape.pump) timing += .12;
		if (justBonded(c)) timing += .08;
		timing = Math.max(0, Math.min(1, timing));
		let metrics = met.traded ? met.quality : .4;
		metrics += Math.min(.22, Math.log10(1 + vol) / 10);
		if (vol > med) metrics += .1;
		if (feat.graduated) metrics += .08;
		if (ageMin < 2 && !c.complete) metrics -= .15;
		if (ageMin > 2 && ageMin < 180) metrics += .08;
		if (met.ratio >= 1.4) metrics += .08;
		if (met.ratio > 0 && met.ratio < .6) metrics -= .12;
		const curve = curvePct(c);
		if (!c.complete && curve > 85) metrics -= .08;
		metrics = Math.max(0, Math.min(1, metrics));
		const total = audit * SCORE_W.audit + narrative * SCORE_W.narrative + timing * SCORE_W.timing + metrics * SCORE_W.metrics;
		return {
			audit,
			narrative,
			timing,
			metrics,
			total,
			go: pulse.go,
			met
		};
	}
	function hardVeto(c, sc) {
		if (!c) return "empty packet";
		const met = sc && sc.met || c._metrics || analyzeCoin(c);
		if (met.wash) return "veto_wash_trading";
		if (met.coordinated) return "veto_coordinated_buys";
		if (met.bundled) return "veto_bundled_launch";
		if (met.creatorShare >= .25) return "creator holds " + Math.round(met.creatorShare * 100) + "%";
		if (met.top5 >= .8) return "top-5 wallets hold " + Math.round(met.top5 * 100) + "%";
		if (sc && sc.go < .3) return "veto_market_paused";
		return null;
	}
	function flowVote(c) {
		const hint = walletHint(c);
		const met = c._metrics || analyzeCoin(c);
		const reasons = [];
		if (hint.dump >= 2 && hint.follow === 0) reasons.push("dump wallets");
		if (met.top5 >= .55) reasons.push("flow:top_concentration");
		if (met.snipers >= 8) reasons.push("flow:sniper_share_high");
		if (met.bundled) reasons.push("flow:bundled_wallets");
		if (met.diversity < .25 && met.traded) reasons.push("flow:low_diversity");
		const ok = reasons.length === 0 || (book.bought || 0) === 0 && reasons.length <= 2;
		return {
			ok,
			who: "FLOW",
			line: ok ? "distribution holds · uniq " + met.unique : reasons[0]
		};
	}
	function socialVote(c) {
		const feat = featuresOf(c);
		const reasons = [];
		if (!feat.social) reasons.push("social:author_count_low");
		if (isDerivative(c)) reasons.push("social:derivative");
		if (!c.description && !c.image_uri && !c.twitter) reasons.push("social:no_pulse");
		const ok = reasons.length <= 1;
		return {
			ok,
			who: "SHILL",
			line: ok ? feat.live ? "live attention" : "social clear" : reasons[0]
		};
	}
	function checkerVeto(c, sc) {
		if (!sc) return "checker: empty packet — no";
		const hint = walletHint(c);
		if (hint.dump >= 2 && hint.follow === 0) return "checker: dump wallets, no follow — no";
		if (sc.audit < .35) return "checker: audit too weak — no";
		if (sc.total < MIN_SCORE) return "checker: score " + sc.total.toFixed(2) + " < 0.42 — no";
		if (sc.go < .3) return "checker: pulse go " + sc.go.toFixed(2) + " pauses market — no";
		if (sc.narrative > .7 && sc.audit < .4) return "checker: meme high, organics low — no";
		if (sc.metrics > .7 && sc.audit < .35) return "checker: curve good, concentration dumps — no";
		const th = c.mint && brain.threads[c.mint];
		const nos = (th && th.msgs || []).filter((m) => m.kind === "veto" || /no|kill|dump|rug/i.test(m.text || "")).length;
		if (nos >= 2 && sc.total < .55) return "checker: thread already has " + nos + " nos — no";
		return null;
	}
	function sizeFromScore(score) {
		rollDay();
		const s = Math.max(0, Math.min(1, score || 0));
		const byExp = Math.max(0, equity() * RISK.exposurePct - bookExposure());
		const scaled = ticketSize() * (.85 + s);
		const n = Math.min(solCap(), scaled, byExp || solCap(), book.cash || 0, 40);
		if (book.cash >= MIN_BUY && byExp >= MIN_BUY && n > 0 && n < MIN_BUY) return MIN_BUY;
		return Math.max(0, n);
	}
	function riskGate(c, score) {
		rollDay();
		if (brain.day.halted) return "daily_loss_limit_hit";
		if (coolingDown()) return "cooldown_after_losses " + Math.ceil(cooldownLeft() / 6e4) + "m";
		if (c && c.mint && book.positions.some((p) => p.mint === c.mint || p.sym === pumpTag(c))) return "already_open";
		if (book.cash < MIN_BUY) return "out_of_cash";
		const size = sizeFromScore(score);
		if (size < 9.999999999) return "size_too_small $" + size.toFixed(2);
		return null;
	}
	function composeBrief(c) {
		const mint = c && c.mint || "";
		const th = threadOf(mint);
		const lines = (th.msgs || []).slice().reverse().map((m) => m.who + " [" + m.kind + "] " + m.text);
		const brief = {
			t: Date.now(),
			tag: pumpTag(c),
			mint,
			score: th.score,
			lines
		};
		brain.briefs = brain.briefs || [];
		brain.briefs.unshift(brief);
		if (brain.briefs.length > 8) brain.briefs.pop();
		bumpFunnel("reported");
		return brief;
	}
	function bumpFunnel(k) {
		brain.funnel = brain.funnel || {
			scanned: 0,
			cleared: 0,
			confirmed: 0,
			filled: 0,
			skipped: 0,
			reported: 0
		};
		brain.funnel[k] = (brain.funnel[k] || 0) + 1;
	}
	function funnelRates() {
		const f = brain.funnel || {};
		const scanned = f.scanned || 0, cleared = f.cleared || 0, confirmed = f.confirmed || 0;
		return {
			scanned,
			cleared,
			confirmed,
			filled: f.filled || 0,
			skipped: f.skipped || 0,
			reported: f.reported || 0,
			clearRate: scanned ? cleared / scanned : 0,
			confirmRate: cleared ? confirmed / cleared : 0
		};
	}
	function topRejects(n) {
		return Object.entries(brain.reasons || {}).sort((a, b) => b[1] - a[1]).slice(0, n || 5);
	}
	function renderFunnel() {
		const el = document.getElementById("funnelBox");
		if (!el) return;
		const r = funnelRates();
		const sc = shift.coin ? scorePacket(shift.coin) : null;
		const pulse = brain.pulse || {};
		const rejects = topRejects(3).map(([k, v]) => esc(String(v) + " " + k)).join(" · ") || "none";
		el.innerHTML = `<div class="funnel-stats">
    <div><em>${r.scanned}</em> scan</div>
    <div><em>${r.cleared}</em> clear</div>
    <div><em>${r.confirmed}</em> ok</div>
    <div><em>${r.filled}</em> fill</div>
  </div>
  <div class="meter"><span>CLEAR</span><div class="track"><i style="width:${Math.min(100, r.clearRate * 100).toFixed(0)}%"></i></div><b>${(r.clearRate * 100).toFixed(0)}%</b></div>
  <div class="meter"><span>PASS</span><div class="track"><i style="width:${Math.min(100, r.confirmRate * 100).toFixed(0)}%"></i></div><b>${(r.confirmRate * 100).toFixed(0)}%</b></div>
  <div class="rejects">pulse ${(pulse.go || 0).toFixed(2)} · ${esc(pulse.why || "cold")} · min ${MIN_SCORE}</div>
  ${sc ? `<div class="score-grid">
    <div>AUD <b>${sc.audit.toFixed(2)}</b></div>
    <div>NAR <b>${sc.narrative.toFixed(2)}</b></div>
    <div>TIM <b>${sc.timing.toFixed(2)}</b></div>
    <div>MET <b>${sc.metrics.toFixed(2)}</b></div>
    <div class="total">$${esc(shift.tag)} <b>${sc.total.toFixed(2)}</b></div>
  </div>` : "<div class=\"rejects\">waiting packet</div>"}
  <div class="rejects">${rejects}</div>`;
	}
	function huddleSize(c) {
		const tag = pumpTag(c);
		const vol = coinVol(c);
		const hint = walletHint(c);
		const tape = tapeRead(tag);
		const med = medianVol();
		const votes = [];
		const push = (who, mul, act, line) => {
			votes.push({
				who,
				mul,
				act,
				line
			});
		};
		push("SEARCH", vol > med * 1.4 ? 1.35 : vol < med * .35 ? .7 : 1, vol < med * .2 ? "pass" : "buy", (justBonded(c) ? "just bonded " : "trench ") + "vol " + fmtMc(vol));
		if (hint.dump >= 2 && hint.follow === 0) push("WHALE", .5, "pass", "dump wallets, no follow");
		else if (hint.follow >= 1) push("WHALE", 1.4, "buy", "follow " + hint.follow + " in $" + tag);
		else push("WHALE", 1, "buy", "first prints $" + tag);
		push("QUANT", tape.dump ? .55 : tape.pump ? 1.3 : vol > med ? 1.2 : .85, tape.dump ? "pass" : "buy", "tape " + tape.trend + (vol > med ? " high vol" : " thin vol"));
		push("RISK", 1, "buy", "size inside $10–0.1SOL");
		push("EXIT", 1, tape.dump ? "pass" : "hold", "hold unless −50% / 3min red");
		const passN = votes.filter((v) => v.act === "pass").length;
		const mul = votes.reduce((s, v) => s + v.mul, 0) / Math.max(1, votes.length);
		const size = Math.max(MIN_BUY, Math.min(solCap(), ticketSize() * mul, 40));
		votes.forEach((v) => {
			const bit = v.act === "pass" ? "PASS" : v.act === "hold" ? "HOLD" : "$" + size.toFixed(0) + " BUY";
			say(v.who, "$" + tag + " " + v.line + " → " + bit);
			share(v.who, tag, v.line + " → " + bit);
			lesson(v.who, "huddle", "$" + tag + " " + bit + " · " + v.line, {
				tag,
				mc: pumpMark(c)
			});
		});
		const hudd = {
			t: Date.now(),
			tag,
			size,
			pass: passN >= 2,
			votes: votes.map((v) => v.who + ":" + v.act),
			vol
		};
		brain.huddles = brain.huddles || [];
		brain.huddles.unshift(hudd);
		if (brain.huddles.length > 24) brain.huddles.pop();
		renderHuddle();
		return hudd;
	}
	function huddleHold(p) {
		if (!p) return null;
		const hard = exitWhy(p);
		if (hard) return {
			verb: hard.indexOf("take_profit") >= 0 && !p.partials ? "TRIM" : "CLOSE",
			why: hard
		};
		const c = coinByTag(p.sym);
		const pnl = posPnl(p);
		const notional = Math.abs(p.qty) * p.avg;
		const pct = notional > 0 ? pnl / notional : 0;
		const tape = tapeRead(p.sym);
		const hint = c ? walletHint(c) : {
			dump: 0,
			follow: 0
		};
		const vol = c ? coinVol(c) : 0;
		const med = medianVol();
		const votes = [];
		const push = (who, act, line) => {
			votes.push({
				who,
				act,
				line
			});
		};
		push("EXIT", pct >= .1 ? "trim" : pct <= -.18 ? "close" : pct >= .06 ? "tighten" : "hold", pct >= .1 ? "TIGHTEN/TRIM" : "still working");
		push("WHALE", hint.dump >= 2 && hint.follow === 0 ? "close" : "hold", hint.dump >= 2 ? "wallets dumping" : "no dump");
		push("QUANT", tape.dump && pnl <= 0 || vol < med * .25 ? "close" : "hold", tape.dump ? "tape dump" : "vol " + fmtMc(vol));
		push("RISK", pct <= -.18 ? "close" : pct >= .08 ? "tighten" : "hold", pct <= -.18 ? "cut heat" : "hold size");
		push("SEARCH", justBonded(c) && tape.pump ? "hold" : "hold", "re desk — " + (c ? "mc " + fmtMc(pumpMark(c)) : "open"));
		const closes = votes.filter((v) => v.act === "close").length;
		const trims = votes.filter((v) => v.act === "trim").length;
		const tights = votes.filter((v) => v.act === "tighten").length;
		votes.forEach((v) => {
			const verb = v.act === "close" ? "CLOSE" : v.act === "trim" ? "TRIM" : v.act === "tighten" ? "TIGHTEN" : "HOLD";
			say(v.who, "$" + p.sym + " " + v.line + " → " + verb);
			share(v.who, p.sym, v.line + " → " + verb);
		});
		const hudd = {
			t: Date.now(),
			tag: p.sym,
			size: notional,
			pass: false,
			votes: votes.map((v) => v.who + ":" + v.act),
			vol,
			hold: closes < 3
		};
		brain.huddles = brain.huddles || [];
		brain.huddles.unshift(hudd);
		if (brain.huddles.length > 24) brain.huddles.pop();
		renderHuddle();
		if (closes >= 3) return {
			verb: "CLOSE",
			why: "exit_manager CLOSE " + closes + "–" + (votes.length - closes)
		};
		if (trims >= 2 && (p.partials || 0) === 0) return {
			verb: "TRIM",
			why: "exit_manager TRIM " + trims
		};
		if (tights >= 2 && !p.stopRaised) return {
			verb: "TIGHTEN",
			why: "exit_manager TIGHTEN trail"
		};
		lesson("HEAD", "hold", "$" + p.sym + " HOLD " + (votes.length - closes) + "-" + closes, { tag: p.sym });
		say("HEAD", "$" + p.sym + " HOLD — exit_manager " + (votes.length - closes) + " to " + closes);
		return null;
	}
	function renderHuddle() {
		const el = document.getElementById("huddleBox");
		if (!el) return;
		el.innerHTML = (brain.huddles || []).slice(0, 6).map((h) => {
			return "$" + (h.tag || "?") + " " + (h.pass ? "PASS" : h.hold ? "HOLD" : "$" + (+(h.size || 0)).toFixed(0)) + " · " + (h.votes || []).slice(0, 3).join(" ");
		}).join("<br>") || "no huddle yet";
		renderFunnel();
	}
	function coinPx(c) {
		if (!c) return 0;
		if (+c.priceUsd > 0) return +c.priceUsd;
		const sol = +(c.virtual_sol_reserves || 0), tok = +(c.virtual_token_reserves || 0);
		if (sol > 0 && tok > 0) {
			const solPx = state.prices.SOL || SEED.SOL || 200;
			return sol / 1e9 * solPx / (tok / 1e6);
		}
		const mc = pumpMark(c);
		return mc > 0 ? mc / 1e9 : 0;
	}
	function pumpPacket(c) {
		const tag = pumpTag(c);
		const gh = [
			c.website,
			c.twitter,
			c.telegram
		].filter(Boolean).find((u) => /github\.com/i.test(u || "")) || "";
		const socials = [
			c.twitter,
			c.website,
			c.telegram
		].filter(Boolean);
		return {
			tag,
			mint: c.mint,
			name: c.name,
			mc: pumpMark(c),
			ageMin: c.created_timestamp ? Math.max(0, (Date.now() - c.created_timestamp) / 6e4) : null,
			socials,
			github: gh,
			replies: c.reply_count || 0,
			complete: !!c.complete
		};
	}
	function equity() {
		let m = 0;
		book.positions.forEach((p) => m += p.qty * mid(p.sym));
		return book.cash + m;
	}
	function unrealized() {
		return book.positions.reduce((s, p) => s + posPnl(p), 0);
	}
	function totalPnl() {
		return (book.realized || 0) + unrealized();
	}
	function recordTrade(side, sym, px, pnl, notional) {
		book.trades = book.trades || [];
		book.trades.unshift({
			t: Date.now(),
			side,
			sym,
			px,
			pnl: +pnl || 0,
			notional: +notional || 0
		});
		if (book.trades.length > 60) book.trades.pop();
		pushBar("EQ", equity());
	}
	function toast(m) {
		const t = document.getElementById("toast");
		t.textContent = m;
		t.classList.add("show");
		setTimeout(() => t.classList.remove("show"), 2200);
	}
	function log(who, text, kind = "") {
		const row = document.createElement("div");
		row.className = "log";
		row.innerHTML = `<span class="who">${esc(who)}</span> <span class="${kind === "ok" ? "up" : kind === "no" ? "dn" : ""}">${esc(text)}</span>`;
		document.getElementById("feed").prepend(row);
		book.journal.unshift({
			t: (/* @__PURE__ */ new Date()).toISOString(),
			who,
			text,
			kind,
			eq: equity()
		});
		if (book.journal.length > 400) book.journal.pop();
	}
	function pop(id, text, bad = false) {
		const layer = floorEl();
		layer.querySelectorAll(".bubble").forEach((n) => n.remove());
		const ag = state.agents[id];
		if (!ag) return;
		const b = document.createElement("div");
		b.className = "bubble" + (bad ? " bad" : "");
		b.textContent = text.slice(0, 28);
		b.style.left = ag.x + "%";
		b.style.top = ag.y + "%";
		layer.appendChild(b);
		setTimeout(() => b.remove(), 1600);
	}
	function makeAgent(a) {
		const el = document.createElement("div");
		el.className = "agent sit";
		el.innerHTML = `<div class="spr"><i class="hair" style="background:${a.hair}"></i><i class="face"></i><i class="eye l"></i><i class="eye r"></i><i class="torso" style="background:${a.body}"></i><i class="visor"></i><i class="tie" style="background:${a.color}"></i><i class="arm l"></i><i class="arm r"></i><i class="leg l"></i><i class="leg r"></i></div>`;
		floorEl().appendChild(el);
		state.agents[a.id] = {
			el,
			x: 48,
			y: 40,
			tx: 48,
			ty: 40,
			sit: true,
			a
		};
	}
	function seatOf(who) {
		if (state.view === "farm") {
			const h = HUTS.find((x) => x.id === who) || HUTS[0];
			return {
				x: h.x + 6,
				y: h.y + 8
			};
		}
		if (state.view === "alpha") {
			const d = ALPHA_SEATS.find((x) => x.who === who);
			return d ? {
				x: d.x + 6,
				y: d.y + 6
			} : {
				x: 46,
				y: 34
			};
		}
		if (state.view === "night") {
			const d = NIGHT_SEATS.find((x) => x.who === who);
			return d ? {
				x: d.x + 6,
				y: d.y + 6
			} : {
				x: 46,
				y: 34
			};
		}
		const d = DESKS[state.floor].find((x) => x.who === who);
		return d ? {
			x: d.x + 6,
			y: d.y + 6
		} : {
			x: 46,
			y: 36
		};
	}
	function go(id, x, y, sit = false) {
		const ag = state.agents[id];
		if (!ag) return;
		ag.tx = x;
		ag.ty = y;
		ag.sit = sit;
	}
	function tickMove() {
		if (window.__gsKill) return;
		Object.values(state.agents).forEach((ag) => {
			const dx = ag.tx - ag.x, dy = ag.ty - ag.y;
			if (Math.hypot(dx, dy) < .35) {
				ag.x = ag.tx;
				ag.y = ag.ty;
				ag.el.classList.toggle("sit", ag.sit);
			} else {
				ag.x += dx * .09;
				ag.y += dy * .09;
				ag.el.classList.remove("sit");
			}
			ag.el.style.left = ag.x + "%";
			ag.el.style.top = ag.y + "%";
		});
		requestAnimationFrame(tickMove);
	}
	function layout() {
		const layer = floorEl();
		layer.querySelectorAll(".agent,.desk,.hut,.bubble").forEach((n) => n.remove());
		state.agents = {};
		if (state.view === "farm") HUTS.forEach((h) => {
			const el = document.createElement("div");
			el.className = "hut " + h.cls;
			el.style.left = h.x + "%";
			el.style.top = h.y + "%";
			el.innerHTML = `<div class="roof"></div><div class="tag">${h.id}</div>`;
			layer.appendChild(el);
		});
		else (state.view === "alpha" ? ALPHA_SEATS : state.view === "night" ? NIGHT_SEATS : DESKS[state.floor]).forEach((d) => {
			const el = document.createElement("div");
			el.className = "desk on";
			el.style.left = d.x + "%";
			el.style.top = d.y + "%";
			el.innerHTML = `<div class="screen"></div>${state.view === "alpha" ? "<div class=\"screen s2\"></div><div class=\"keys\"></div>" : ""}<div class="label">${d.who}</div>`;
			layer.appendChild(el);
		});
		rosterList().forEach(makeAgent);
		rosterList().forEach((a) => {
			const s = seatOf(a.id);
			go(a.id, s.x, s.y, true);
		});
		document.getElementById("roster").innerHTML = rosterList().map((a) => `<div class="seat" id="r-${a.id}"><div class="dot" style="background:${a.color}"></div>${a.id}<span>${a.role}</span></div>`).join("");
	}
	function fillPx(sym, side) {
		const m = mid(sym);
		const slip = book.cfg.slipBps / 1e4 * (.6 + Math.random() * .8);
		return side === "buy" ? m * (1 + slip) : m * (1 - slip);
	}
	function posPnl(p) {
		if (!p) return 0;
		const m = mid(p.sym);
		if (!m || !p.avg) return 0;
		return p.qty * (m - p.avg);
	}
	function exitWhy(p) {
		if (!p || !(p.qty > 0)) return null;
		const pnl = posPnl(p);
		const notional = Math.abs(p.qty) * p.avg;
		const pct = notional > 0 ? pnl / notional : 0;
		const c = coinByTag(p.sym);
		const hint = c ? walletHint(c) : {
			dump: 0,
			follow: 0
		};
		const pb = brain.playbook || {};
		const tp = pb.tpPct || .1;
		const tape = tapeRead(p.sym);
		if (pct <= -.5) return "kill rule −50% no feelings";
		const age = p.opened ? Date.now() - new Date(p.opened).getTime() : 0;
		if (age > 18e4 && pnl < 0) return "three-minute stop, red";
		const peak = p.peak || p.avg;
		if (p.qty > 0 && mid(p.sym) > peak) p.peak = mid(p.sym);
		const trail = p.trailPct || RISK.trailPct;
		if (p.peak && p.avg && mid(p.sym) > p.avg && (p.peak - mid(p.sym)) / p.peak >= trail) return "trailing stop from peak";
		if (c && c.complete && p.src === "pump/dex" && pct < .02 && age > 12e4) return "graduated / Raydium — flatten";
		if (pct >= tp && (p.partials || 0) === 0) return "take_profit trim +" + pnl.toFixed(2);
		if ((p.partials || 0) > 0 && (pct >= tp * 1.6 || pnl >= .18)) return "take profit runner +" + pnl.toFixed(2);
		if (tape.dump && pnl <= 0) return "tape dumping $" + p.sym + " — sell";
		if ((pb.avoidDump || hint.dump >= 2) && hint.follow === 0 && hint.dump >= 2) return "wallets dumping $" + p.sym;
		const mem = p.mint && brain.memory[p.mint] || memByTag(p.sym);
		if (mem && mem.last === "lose" && pnl < -.02) return "study: cut loser $" + p.sym;
		if (c && c.mint && state.boosts[c.mint] && pb.avoidBoost) return "boost tape — sell $" + p.sym;
		if (age > (pb.staleMs || 18e4) && Math.abs(pnl) < .015) return "stale paper, recycle $" + p.sym;
		if (age > RISK.maxHoldMs && pct < .04) return "max hold " + Math.round(age / 6e4) + "m";
		return null;
	}
	function pickExit() {
		const hits = book.positions.map((p) => ({
			pos: p,
			why: exitWhy(p),
			pnl: posPnl(p)
		})).filter((x) => x.why);
		if (hits.length) {
			hits.sort((a, b) => a.pnl - b.pnl);
			const h = hits[0];
			if (h.why.indexOf("take_profit trim") >= 0) return {
				pos: h.pos,
				why: h.why,
				pnl: h.pnl,
				verb: "TRIM",
				frac: .5
			};
			return {
				pos: h.pos,
				why: h.why,
				pnl: h.pnl,
				verb: "CLOSE"
			};
		}
		if (book.positions.length && (state._pulse || 0) % 4 === 0) {
			const p = book.positions.slice().sort((a, b) => posPnl(a) - posPnl(b))[0];
			const hudd = huddleHold(p);
			if (hudd && hudd.verb === "CLOSE") return {
				pos: p,
				why: hudd.why,
				pnl: posPnl(p),
				verb: "CLOSE"
			};
			if (hudd && hudd.verb === "TRIM") return {
				pos: p,
				why: hudd.why,
				pnl: posPnl(p),
				verb: "TRIM",
				frac: .5
			};
			if (hudd && hudd.verb === "TIGHTEN") {
				p.trailPct = RISK.tightenPct;
				p.stopRaised = true;
				say("EXIT", "TIGHTEN $" + p.sym + " trail " + (RISK.tightenPct * 100).toFixed(0) + "%");
				log("EXIT", "TIGHTEN $" + p.sym + " trail " + (RISK.tightenPct * 100).toFixed(0) + "%", "ok");
			}
		}
		return null;
	}
	function openFill(t) {
		if (t.side === "sell") {
			const pos = t.closeId && book.positions.find((p) => p.id === t.closeId) || book.positions.find((p) => p.sym === t.sym && p.qty > 0);
			if (!pos) {
				log("EXIT", "no long $" + t.sym + " to sell", "no");
				talk("EXIT", "no long $" + t.sym + " to sell");
				return false;
			}
			const ok = closePos(pos.id, t.why || "paper sell");
			if (ok) {
				t.status = "LIVE";
				t.fillPx = pos.avg;
				talk("SNIPER", "PAPER SELL $" + t.sym + " — live send off");
				pop("SNIPER", "SELL " + t.sym);
				go("SNIPER", 50, 60, false);
				setTimeout(() => {
					const s = seatOf("SNIPER");
					if (s) go("SNIPER", s.x, s.y, true);
				}, 900);
			}
			return ok;
		}
		const px = fillPx(t.sym, t.side);
		if (!(px > 0) || !isFinite(px)) {
			log("SNIPER", "reject " + t.id + " — no mark on " + t.sym, "no");
			talk("SNIPER", "no mark on $" + t.sym + " yet");
			return false;
		}
		const feeBps = book.cfg.feeBps / 1e4;
		const notional = t.riskUsd;
		const fee = notional * feeBps;
		const qty = (notional - fee) / px;
		if (t.side === "buy") {
			if (book.positions.some((p) => p.sym === t.sym || t.mint && p.mint === t.mint)) {
				log("SNIPER", "reject " + t.id + " — never average down $" + t.sym, "no");
				talk("SNIPER", "never add to $" + t.sym);
				return false;
			}
			if (notional < 9.999999999) {
				log("SNIPER", "reject " + t.id + " — min buy $10", "no");
				return false;
			}
			if (book.cash < notional) {
				log("SNIPER", "reject " + t.id + " — not enough cash", "no");
				return false;
			}
			book.cash -= notional;
		} else book.cash += notional - fee;
		book.feesPaid += fee;
		book.bought++;
		const signed = t.side === "buy" ? qty : -qty;
		book.positions.push({
			id: t.id,
			sym: t.sym,
			side: t.side,
			qty: signed,
			avg: px,
			fee,
			mint: t.mint || "",
			src: t.src || "pump/dex",
			mc: mcOf(t.sym) || pumpMark(coinByTag(t.sym)),
			feat: featuresOf(coinByTag(t.sym)),
			creator: (coinByTag(t.sym) || {}).creator || "",
			peak: px,
			trailPct: RISK.trailPct,
			partials: 0,
			opened: (/* @__PURE__ */ new Date()).toISOString()
		});
		t.fillPx = px;
		t.qty = signed;
		t.fee = fee;
		t.status = "LIVE";
		const mem = t.mint && brain.memory[t.mint];
		if (mem) {
			mem.fills++;
			mem.avg = px;
		}
		rollDay();
		brain.day.trades = (brain.day.trades || 0) + 1;
		const cr = creatorOf((coinByTag(t.sym) || {}).creator);
		if (cr) cr.bought = (cr.bought || 0) + 1;
		log("SNIPER", `PAPER FILL ${t.id} ${t.side} ${t.sym} ${fmtMc(notional)} mc ${fmtMc(mcOf(t.sym))} fee $${fee.toFixed(4)}`, "ok");
		talk("SNIPER", "PAPER FILL $" + t.sym + " mc " + fmtMc(mcOf(t.sym)) + " — live send off");
		talk("COACH", "remember $" + t.sym + " — pump/dex packet is now in the book");
		lesson("SNIPER", "fill", "PAPER FILL $" + t.sym + " mc " + fmtMc(mcOf(t.sym)), {
			tag: t.sym,
			mc: mcOf(t.sym)
		});
		lesson("HEAD", "fill", "ticket $" + t.sym + " live in the book", { tag: t.sym });
		lesson("COACH", "study", "keep packets like $" + t.sym, { tag: t.sym });
		rememberCoin(coinByTag(t.sym) || {
			symbol: t.sym,
			mint: t.mint
		}, "fill", "paper fill");
		recordTrade("buy", t.sym, px, 0, notional);
		debriefBuy(t.sym, notional);
		pop("SNIPER", t.side.toUpperCase() + " " + t.sym);
		persist();
		updateBook();
		renderPos();
		renderLearn();
		saveBrain();
		return true;
	}
	function trimPos(id, fraction, why) {
		const i = book.positions.findIndex((p) => p.id === id);
		if (i < 0) return false;
		const p = book.positions[i];
		const frac = Math.max(.2, Math.min(.7, fraction || .5));
		const px = fillPx(p.sym, "sell");
		if (!(px > 0) || !isFinite(px)) {
			log("EXIT", "no mark on $" + p.sym + " — hold trim", "no");
			return false;
		}
		const sellQty = Math.abs(p.qty) * frac;
		const proceeds = sellQty * px;
		const fee = proceeds * (book.cfg.feeBps / 1e4);
		book.feesPaid += fee;
		book.cash += proceeds - fee;
		const pnl = (px - p.avg) * sellQty - fee;
		p.qty -= sellQty;
		p.partials = (p.partials || 0) + 1;
		p.trailPct = RISK.tightenPct;
		p.stopRaised = true;
		book.sold = (book.sold || 0) + 1;
		book.realized = (book.realized || 0) + pnl;
		recordTrade("sell", p.sym, px, pnl, proceeds);
		rollDay();
		brain.day.pnl = (brain.day.pnl || 0) + pnl;
		const mem = p.mint && brain.memory[p.mint] || memByTag(p.sym);
		if (mem) {
			mem.pnl = (mem.pnl || 0) + pnl;
			mem.sells = (mem.sells || 0) + 1;
		}
		talk("EXIT", "PAPER TRIM $" + p.sym + " " + (frac * 100).toFixed(0) + "% " + (pnl >= 0 ? "+" : "") + pnl.toFixed(2) + (why ? " — " + why : ""));
		log("EXIT", `TRIM ${id} ${p.sym} ${(frac * 100).toFixed(0)}% @ ${fmt(px)} pnl $${pnl.toFixed(4)}${why ? " — " + why : ""}`, pnl >= 0 ? "ok" : "no");
		pop("EXIT", "TRIM " + p.sym, pnl < 0);
		if (Math.abs(p.qty) * p.avg < MIN_BUY) return closePos(id, (why || "trim") + " then flatten dust");
		persist();
		updateBook();
		renderPos();
		renderLearn();
		saveBrain();
		return true;
	}
	function closePos(id, why) {
		const i = book.positions.findIndex((p) => p.id === id);
		if (i < 0) return false;
		const p = book.positions[i];
		const side = p.qty > 0 ? "sell" : "buy";
		const px = fillPx(p.sym, side);
		if (!(px > 0) || !isFinite(px)) {
			log("EXIT", "no mark on $" + p.sym + " — hold", "no");
			return false;
		}
		const proceeds = Math.abs(p.qty) * px;
		const fee = proceeds * (book.cfg.feeBps / 1e4);
		book.feesPaid += fee;
		if (p.qty > 0) book.cash += proceeds - fee;
		else book.cash -= proceeds + fee;
		const pnl = p.qty > 0 ? (px - p.avg) * p.qty - p.fee - fee : (p.avg - px) * Math.abs(p.qty) - p.fee - fee;
		book.positions.splice(i, 1);
		book.sold = (book.sold || 0) + 1;
		book.realized = (book.realized || 0) + pnl;
		recordTrade("sell", p.sym, px, pnl, proceeds);
		learnFromTrade(p, pnl);
		markCreator(p.creator, pnl);
		rollDay();
		brain.day.pnl = (brain.day.pnl || 0) + pnl;
		if (pnl >= 0) brain.day.streak = 0;
		else {
			brain.day.streak = (brain.day.streak || 0) + 1;
			if (brain.day.streak >= RISK.cooldownAfter) {
				brain.day.cooldownUntil = Date.now() + RISK.cooldownMs;
				talk("RISK", brain.day.streak + " losses in a row — cooldown " + RISK.cooldownMs / 6e4 + "m");
				log("RISK", "cooldown after " + brain.day.streak + " losses", "no");
			}
		}
		if (brain.day.pnl <= -RISK.dailyLoss) brain.day.halted = true;
		const mem = p.mint && brain.memory[p.mint] || memByTag(p.sym);
		if (mem) {
			mem.pnl = (mem.pnl || 0) + pnl;
			mem.last = pnl >= 0 ? "win" : "lose";
			mem.sells = (mem.sells || 0) + 1;
		}
		lesson("EXIT", pnl >= 0 ? "win" : "lose", "SELL $" + p.sym + " pnl " + (pnl >= 0 ? "+" : "") + pnl.toFixed(2) + (why ? " — " + why : ""), { tag: p.sym });
		lesson("COACH", pnl >= 0 ? "win" : "lose", (pnl >= 0 ? "keep" : "tighten") + " packets like $" + p.sym, { tag: p.sym });
		if (!p._graded) {
			if (pnl >= 0) brain.win++;
			else brain.lose++;
		}
		if (pnl >= 0) agentOf("SNIPER").wins++;
		else agentOf("SNIPER").losses++;
		agentOf("EXIT").fills++;
		walletLearnFromFill(p, pnl);
		rebuildPlaybook();
		rememberCoin(coinByTag(p.sym) || {
			symbol: p.sym,
			mint: p.mint
		}, "sell", why || "flatten");
		talk("EXIT", "PAPER SELL $" + p.sym + " " + (pnl >= 0 ? "+" : "") + pnl.toFixed(2) + (why ? " — " + why : "") + " · live send off");
		talk("QUANT", "realized " + (book.realized >= 0 ? "+" : "") + "$" + book.realized.toFixed(2) + " · open " + (unrealized() >= 0 ? "+" : "") + "$" + unrealized().toFixed(2));
		talk("WHALE", pnl >= 0 ? "follow wallets paid on $" + p.sym : "dump / bad follow on $" + p.sym + " — mark it");
		talk("COACH", "$" + p.sym + " sell " + (pnl >= 0 ? "+" : "") + pnl.toFixed(2) + " — playbook min MC " + fmtMc((brain.playbook || {}).minMc));
		lesson("WHALE", pnl >= 0 ? "win" : "lose", (pnl >= 0 ? "keep" : "fade") + " wallets that printed $" + p.sym, { tag: p.sym });
		lesson("QUANT", pnl >= 0 ? "win" : "lose", "pattern $" + p.sym + " " + (pnl >= 0 ? "paid" : "lost") + " · wr replay", { tag: p.sym });
		crossLearn();
		log("EXIT", `SELL ${id} ${p.sym} @ ${fmt(px)} pnl $${pnl.toFixed(4)}${why ? " — " + why : ""}`, pnl >= 0 ? "ok" : "no");
		pop("EXIT", "SELL " + p.sym + (pnl >= 0 ? " +" : " ") + pnl.toFixed(2), pnl < 0);
		persist();
		updateBook();
		renderPos();
		renderLearn();
		saveBrain();
		return true;
	}
	function proposeTicket(sym, side, riskUsd, mint, extra) {
		const id = "GS-" + String(state.seq++).padStart(4, "0");
		state.ticket = {
			id,
			sym,
			side,
			riskUsd,
			risk: "OPEN",
			status: "RISK",
			venue: "paper",
			mint: mint || "",
			src: "pump/dex",
			closeId: extra && extra.closeId || "",
			why: extra && extra.why || ""
		};
		book.tickets++;
		log("HEAD", `intent ${id} ${side} ${sym} ${side === "sell" ? "exit" : "risk"} $${(+riskUsd || 0).toFixed(2)} · pump/dex paper`);
		renderPipe();
		persist();
	}
	function riskStamp() {
		const t = state.ticket;
		if (!t || t.status !== "RISK") return;
		const cap = equity() * (book.cfg.riskPct / 100);
		if (t.side !== "sell" && t.riskUsd > Math.max(MIN_BUY, cap) + 1e-9 && t.riskUsd > solCap() + 1e-9) {
			t.risk = "KILL";
			t.status = "DEAD";
			talk("RISK", t.id + " KILL — over 0.1 SOL cap");
			talk("HEAD", "re RISK — dead ticket");
			log("RISK", t.id + " KILL — over 0.1 SOL cap", "no");
			pop("RISK", "KILL", true);
		} else {
			t.risk = "CLEAR";
			t.status = "WAIT_APPROVE";
			if (t.side === "sell") {
				talk("RISK", t.id + " CLEAR SELL $" + t.sym + " — paper flatten, not a live send");
				talk("HEAD", t.id + " EXIT paper sell now — live send off");
				log("RISK", t.id + " CLEAR paper SELL", "ok");
				pop("RISK", "SELL");
			} else {
				talk("RISK", t.id + " CLEAR $" + t.sym + " — paper stamp, not a live send");
				talk("HEAD", t.id + " paper fill now — live send off");
				log("RISK", t.id + " CLEAR paper stamp", "ok");
				pop("RISK", "CLEAR");
			}
			renderPipe();
			persist();
			approve();
			return;
		}
		renderPipe();
		persist();
	}
	function approve() {
		const t = state.ticket;
		if (!t || t.status !== "WAIT_APPROVE" || t.risk !== "CLEAR") return;
		if (book.cfg.canWithdraw) {
			toast("WITHDRAW KEY REJECTED");
			return;
		}
		if (book.cfg.liveSend) {
			toast("LIVE SEND IS OFF");
			return;
		}
		if (openFill(t)) {
			go("SNIPER", 50, 60, false);
			setTimeout(() => {
				const s = seatOf("SNIPER");
				if (s) go("SNIPER", s.x, s.y, true);
			}, 900);
		}
		renderPipe();
	}
	function ticketBusy() {
		const t = state.ticket;
		return !!(t && (t.status === "RISK" || t.status === "WAIT_APPROVE"));
	}
	function renderPipe() {
		const t = state.ticket;
		document.getElementById("approveBtn").disabled = !(t && t.status === "WAIT_APPROVE" && t.risk === "CLEAR");
		document.getElementById("pipe").innerHTML = t ? `<div class="ticket"><b>${esc(t.id)}</b> ${esc(t.side)} ${esc(t.sym)}<br>${t.side === "sell" ? "exit" : "risk"} $${(+t.riskUsd || 0).toFixed(2)} · ${esc(t.venue)}${t.why ? "<br>" + esc(t.why) : ""}<br>RISK <span class="${t.risk === "CLEAR" ? "up" : t.risk === "KILL" ? "dn" : ""}">${esc(t.risk)}</span> · ${esc(t.status)}${t.fillPx ? `<br>fill ${fmt(t.fillPx)}` : ""}</div>` : `<div class="ticket">no ticket</div>`;
	}
	function renderPos() {
		const box = document.getElementById("pos");
		if (!box) return;
		if (!book.positions.length) {
			box.innerHTML = "<div class=\"pos\">flat</div>";
			return;
		}
		box.innerHTML = book.positions.map((p) => {
			const pnl = posPnl(p);
			return `<div class="pos"><span class="sym">$${esc(p.sym)}</span><span>${fmtMc(Math.abs(p.qty) * p.avg)}</span><span class="${pnl >= 0 ? "up" : "dn"}">${pnl >= 0 ? "+" : ""}${pnl.toFixed(2)}</span><button data-c="${esc(p.id)}">SELL</button></div>`;
		}).join("");
		box.querySelectorAll("button[data-c]").forEach((b) => b.onclick = () => {
			closePos(b.dataset.c, "manual sell");
			if (state.ticket && state.ticket.id === b.dataset.c) state.ticket = null;
			renderPipe();
		});
	}
	function updateBook() {
		const eq = equity(), real = book.realized || 0, pnl = real + unrealized();
		const setTxt = (id, v) => {
			const n = document.getElementById(id);
			if (n) n.textContent = v;
		};
		setTxt("eq", "$" + eq.toFixed(2));
		setTxt("cashH", "$" + book.cash.toFixed(2));
		const cash = document.getElementById("cash");
		if (cash) cash.textContent = "VAULT $" + eq.toFixed(2);
		const eqBig = document.getElementById("eqBig");
		if (eqBig) {
			eqBig.textContent = "$" + eq.toFixed(2);
			eqBig.className = pnl >= 0 ? "up" : "dn";
		}
		setTxt("refused", String(book.refused || 0));
		setTxt("bought", String(book.bought || 0));
		setTxt("sold", String(book.sold || 0));
		setTxt("openN", String(book.positions.length));
		const el = document.getElementById("pnl");
		if (el) {
			el.textContent = (pnl >= 0 ? "+$" : "-$") + Math.abs(pnl).toFixed(2);
			el.style.color = pnl >= 0 ? "var(--green)" : "var(--red)";
		}
		const realEl = document.getElementById("real");
		if (realEl) {
			realEl.textContent = (real >= 0 ? "+$" : "-$") + Math.abs(real).toFixed(2);
			realEl.style.color = real >= 0 ? "var(--green)" : "var(--red)";
		}
		const wrEl = document.getElementById("wrChip");
		if (wrEl) wrEl.textContent = "WR " + (brain.win + brain.lose ? (brain.win / (brain.win + brain.lose) * 100).toFixed(0) + "%" : "—");
		renderWatch();
		renderTrench();
	}
	function renderTrench() {
		const scan = document.getElementById("scanN");
		const kn = document.getElementById("killN");
		const kp = document.getElementById("killPct");
		const meta = document.getElementById("metaChip");
		const seen = brain.scanned || brain.seen || 0;
		const kills = brain.veto || 0;
		if (scan) scan.textContent = String(seen);
		if (kn) kn.textContent = String(kills);
		if (kp) kp.textContent = (seen ? kills / Math.max(1, brain.seen || seen) * 100 : 0).toFixed(1) + "%";
		if (meta) {
			const pb = brain.playbook || {};
			meta.textContent = "META " + (pb.rules && pb.rules[0] || "trench ≥$15k / just bonded");
		}
		const pc = document.getElementById("pulseChip");
		if (pc) {
			const p = brain.pulse || pulseSignal();
			pc.textContent = "PULSE " + (p.go || 0).toFixed(2) + (p.go < .3 ? " PAUSE" : "");
			pc.style.color = p.go < .3 ? "var(--red)" : "var(--lime)";
		}
		const st = document.getElementById("streakChip");
		if (st) {
			const n = brain.day && brain.day.streak || 0;
			st.textContent = "STREAK " + n;
			st.style.color = n >= 2 ? "var(--red)" : "var(--lime)";
		}
		const cc = document.getElementById("coolChip");
		if (cc) {
			if (brain.day && brain.day.halted) {
				cc.textContent = "HALT −$80";
				cc.style.color = "var(--red)";
			} else if (coolingDown()) {
				cc.textContent = "COOL " + Math.ceil(cooldownLeft() / 6e4) + "m";
				cc.style.color = "var(--red)";
			} else {
				cc.textContent = "GATE OPEN";
				cc.style.color = "var(--lime)";
			}
		}
		renderFunnel();
	}
	function fmt(n) {
		if (n == null || Number.isNaN(n)) return "—";
		if (Math.abs(n) >= 1e3) return n.toLocaleString(void 0, { maximumFractionDigits: 2 });
		if (Math.abs(n) < .01) return n.toExponential(2);
		return n.toFixed(2);
	}
	function fmtMc(n) {
		const x = +n;
		if (!isFinite(x) || x <= 0) return "—";
		if (x >= 1e9) return "$" + (x / 1e9).toFixed(2) + "B";
		if (x >= 1e6) return "$" + (x / 1e6).toFixed(2) + "M";
		if (x >= 1e3) return "$" + (x / 1e3).toFixed(1) + "k";
		return "$" + Math.round(x);
	}
	function coinByTag(tag) {
		const t = String(tag || "").toUpperCase();
		return (state.coins || []).find((c) => pumpTag(c) === t) || null;
	}
	function mcOf(sym) {
		const c = coinByTag(sym);
		if (c) return pumpMark(c);
		if (state.mc && state.mc[sym]) return state.mc[sym];
		const p = (book.positions || []).find((x) => x.sym === sym);
		if (p && p.mc) return p.mc;
		return 0;
	}
	function chartNames() {
		const names = [];
		book.positions.forEach((p) => {
			if (p.sym && names.indexOf(p.sym) < 0) names.push(p.sym);
		});
		if (state.koth) {
			const t = pumpTag(state.koth);
			if (t && names.indexOf(t) < 0) names.push(t);
		}
		(state.fomo || []).forEach((c) => {
			const t = pumpTag(c);
			if (t && names.indexOf(t) < 0 && names.length < 3) names.push(t);
		});
		(state.coins || []).filter((c) => !isMajor(c)).forEach((c) => {
			const t = pumpTag(c);
			if (t && names.indexOf(t) < 0 && names.length < 3) names.push(t);
		});
		while (names.length < 3) names.push([
			"SOL",
			"BTC",
			"ETH"
		][names.length]);
		return names.slice(0, 3);
	}
	function renderTickers() {
		const coins = (state.coins || []).filter((c) => !isMajor(c)).slice(0, 8);
		const seen = /* @__PURE__ */ new Set();
		const list = [];
		coins.forEach((c) => {
			const sym = pumpTag(c);
			if (!sym || seen.has(sym)) return;
			seen.add(sym);
			list.push({
				sym,
				mc: pumpMark(c)
			});
		});
		document.getElementById("tickers").innerHTML = list.slice(0, 4).map((x) => {
			const now = x.mc || 0;
			const cls = now >= (SEED["_mc" + x.sym] || now) ? "up" : "dn";
			SEED["_mc" + x.sym] = now;
			return `<div class="tk">${esc(x.sym)} <b class="${cls}">${fmtMc(now)}</b></div>`;
		}).join("");
		const board = document.getElementById("boardRows");
		const tape = document.getElementById("tapeScroll");
		if (board) board.innerHTML = (list.length ? list : [{
			sym: "WAITING",
			mc: 0
		}]).slice(0, 8).map((x) => {
			const now = x.mc || 0;
			const arrow = now >= (SEED["_mc" + x.sym] || now) ? "▲" : "▼";
			return `<div>${esc(x.sym)} ${arrow} ${fmtMc(now)}</div>`;
		}).join("");
		if (tape) {
			const w = book.cfg.watchAddr ? "WATCH " + book.cfg.watchAddr.slice(0, 4) + "…" + book.cfg.watchAddr.slice(-4) : "WATCH —";
			tape.textContent = list.map((x) => x.sym + " " + fmtMc(x.mc)).join("   ·   ") + "   ·   MC TAPE · PAPER DESK · LIVE SEND OFF · " + w + "   ·   ";
		}
	}
	function setFeed(k, ok, extra) {
		feeds[k] = ok ? "LIVE" + (extra ? " " + extra : "") : "DOWN";
		const bar = document.getElementById("feedsBar");
		if (bar) bar.textContent = "FEEDS  HL " + feeds.hl + " · BN " + feeds.bn + " · YH " + feeds.yh + " · PF " + feeds.pf + " · DX " + feeds.dx;
	}
	async function pullBinance() {
		try {
			const res = await fetch("/api/tape?src=binance");
			if (!res.ok) {
				setFeed("bn", false);
				return;
			}
			const data = await res.json();
			if (!Array.isArray(data)) {
				setFeed("bn", false);
				return;
			}
			const map = Object.fromEntries(data.map((x) => [x.symbol, +x.price]));
			if (map.BTCUSDT) state.prices.BTC = map.BTCUSDT;
			if (map.ETHUSDT) state.prices.ETH = map.ETHUSDT;
			if (map.SOLUSDT) state.prices.SOL = map.SOLUSDT;
			if (map.DOGEUSDT) state.prices.DOGE = map.DOGEUSDT;
			setFeed("bn", true, res.headers.get("X-Tape-Host") || "ok");
		} catch (_) {
			setFeed("bn", false);
		}
	}
	async function pullHL() {
		try {
			const mids = await (await fetch("/api/tape?src=hl-mids")).json();
			if (mids && mids.BTC) {
				state.prices.BTC = +mids.BTC;
				if (mids.ETH) state.prices.ETH = +mids.ETH;
				if (mids.SOL) state.prices.SOL = +mids.SOL;
				setFeed("hl", true);
			} else setFeed("hl", false);
		} catch (_) {
			setFeed("hl", false);
		}
		try {
			const pair = await (await fetch("/api/tape?src=hl-ctx")).json();
			const uni = pair[0].universe, acts = pair[1];
			[
				"BTC",
				"ETH",
				"SOL"
			].forEach((name) => {
				const i = uni.findIndex((a) => a.name === name);
				if (i >= 0 && acts[i]) {
					state.funding[name] = +acts[i].funding;
					state.oi[name] = +acts[i].openInterest;
					if (acts[i].midPx) state.prices[name] = +acts[i].midPx;
				}
			});
		} catch (_) {}
	}
	async function pullYahoo() {
		const map = {
			TSLA: "TSLA",
			NVDA: "NVDA",
			SPX: "^GSPC"
		};
		let ok = false;
		for (const [k, sym] of Object.entries(map)) try {
			const meta = (await (await fetch("/api/tape?src=yahoo&sym=" + encodeURIComponent(sym))).json()).chart.result[0].meta;
			const px = meta.regularMarketPrice || meta.chartPreviousClose;
			if (px) {
				state.prices[k] = +px;
				ok = true;
			}
		} catch (_) {}
		setFeed("yh", ok);
	}
	function cheapKill(c) {
		if (!c) return "empty packet";
		rollDay();
		if (brain.day && brain.day.halted) return "daily loss halt — desk paused";
		if (coolingDown()) return "cooldown after " + (brain.day.streak || 0) + " losses";
		const w = brain.weights;
		if (c.is_banned) return "banned mint";
		const blocked = creatorBlocked(c);
		if (blocked) return blocked;
		const pulse = pulseSignal();
		if (pulse.go < .3) return "pulse go " + pulse.go.toFixed(2) + " — market pause";
		if (c.creator) {
			const dw = brain.wallets[c.creator];
			if (dw && ((dw.follow || 1) < .55 || dw.sells >= 2 && dw.sells >= dw.buys)) return "deployer wallet history — kill first";
			if (Object.values(brain.memory || {}).filter((m) => m.creator === c.creator && m.pnl < -.05).length >= 2) return "deployer rugged before under another name";
		}
		const mc = pumpMark(c);
		if (!justBonded(c) && mc > 0 && mc < FLOOR_MC) return "below $15k trench floor";
		if (!justBonded(c) && coinVol(c) < Math.max(400, medianVol() * .08)) return "no volume on this mint";
		const mem = c.mint && brain.memory[c.mint];
		const hungry = (book.bought || 0) === 0;
		if (!hungry && mem && mem.veto >= 8 && mem.clear === 0 && Date.now() - (mem.t || 0) < 18e4) return "memory: killed recently on pump/dex";
		if (!hungry && mem && mem.fills && mem.pnl < -2) return "memory: $" + mem.tag + " already lost paper";
		if (hungry) return null;
		if (mem && mem.last === "lose" && (mem.pnl || -0) < -1) return "study: last flatten on $" + mem.tag + " lost paper";
		const hint = walletHint(c);
		if ((w.wallet || 1) >= .9 && hint.dump >= 3 && hint.follow === 0) return "top wallets dumping this mint";
		const pb = brain.playbook || {};
		if (pb.avoidBoost && w.boost >= .7 && state.boosts[c.mint]) return "paid DexScreener boost — treat as shill tape";
		if (w.boost >= .7 && state.boosts[c.mint] && !pb.avoidBoost) return "paid DexScreener boost — treat as shill tape";
		const hasName = !!(c.name || c.symbol);
		if (w.metadata >= .7 && !hasName && !c.image_uri && !c.description) return "no metadata / no name";
		if (w.social >= 1.3 && !c.twitter && !c.website && !c.telegram && !c.image_uri && !c.description) return "no social pulse";
		if (w.cap >= 1.3 && mc < 100 && (c.reply_count || 0) === 0 && !c.priceUsd) return "no pulse / thin cap";
		if (pb.avoidDump && hint.dump >= 2 && hint.follow === 0) return "study: dump wallets on this mint";
		if (pb.likeGrad && !c.complete && avgPat("curve") < -.05 && mc < 1e6) return "study: curve micros lost paper";
		if (tapeRead(pumpTag(c)).dump && mem && mem.pnl < 0) return "study: tape dumping a known loser";
		if (pb.likeSocial && w.social >= 1.1 && !c.twitter && !c.website && !c.telegram && mc < 5e6) return "study: thin social on small MC";
		return null;
	}
	function gradePaper() {
		book.positions.forEach((p) => {
			const m = mid(p.sym);
			if (!m || !p.avg) return;
			const pnl = p.qty * (m - p.avg);
			const mem = p.mint && brain.memory[p.mint] || memByTag(p.sym);
			if (mem) mem.pnl = pnl;
			if (p._graded) return;
			if (Math.abs(pnl) < .02) return;
			if (pnl > 0) {
				brain.win++;
				brain.weights.social = Math.max(.4, (brain.weights.social || 1) - .03);
				walletLearnFromFill(p, pnl);
				lesson("QUANT", "win", "$" + p.sym + " MTM +" + pnl.toFixed(2), { tag: p.sym });
				talk("COACH", "$" + p.sym + " paper +" + pnl.toFixed(2) + " — keep packets that look like this");
				note("win $" + p.sym + " +" + pnl.toFixed(2));
			} else {
				brain.lose++;
				brain.weights.metadata = Math.min(2, (brain.weights.metadata || 1) + .05);
				brain.weights.boost = Math.min(2, (brain.weights.boost || 1) + .04);
				walletLearnFromFill(p, pnl);
				lesson("QUANT", "lose", "$" + p.sym + " MTM " + pnl.toFixed(2), { tag: p.sym });
				talk("COACH", "$" + p.sym + " paper " + pnl.toFixed(2) + " — next veto is tighter on thin pump names");
				note("lose $" + p.sym + " " + pnl.toFixed(2));
			}
			p._graded = true;
			brain.fills = brain.win + brain.lose;
			rebuildPlaybook();
			saveBrain();
		});
		renderLearn();
	}
	function ingestCoins(data, src) {
		try {
			if (!Array.isArray(data) || !data.length) return false;
			const by = {};
			(state.coins || []).forEach((c) => {
				if (c && c.mint) by[c.mint] = c;
			});
			data.forEach((c) => {
				if (!c) return;
				if (isMajor(c)) return;
				const mint = c.mint || pumpTag(c);
				if (!mint) return;
				const prev = by[mint] || {};
				by[mint] = Object.assign({}, prev, c);
				const merged = by[mint];
				const tag = pumpTag(merged);
				const px = coinPx(merged);
				const mc = pumpMark(merged);
				if (tag && px) state.prices[tag] = px;
				if (tag && mc) {
					state.mc = state.mc || {};
					state.mc[tag] = mc;
					(state.series[tag] = state.series[tag] || []).push(mc);
					if (state.series[tag].length > 80) state.series[tag].shift();
					pushBar(tag, mc);
				}
				if (merged.creator) trackWallet(merged.creator, "creator", merged, 0);
			});
			const all = Object.values(by).filter((c) => c && !isMajor(c));
			const seen = /* @__PURE__ */ new Set();
			const out = [];
			const take = (list, n) => {
				for (const c of list) {
					if (out.length >= 56) break;
					const k = c.mint || pumpTag(c);
					if (!k || seen.has(k)) continue;
					seen.add(k);
					out.push(c);
					if (--n <= 0) break;
				}
			};
			take(all.filter(justBonded).sort((a, b) => coinVol(b) - coinVol(a)), 20);
			take(all.filter((c) => c.complete).sort((a, b) => coinVol(b) - coinVol(a)), 14);
			take(all.slice().sort((a, b) => coinVol(b) - coinVol(a)), 16);
			take(all.filter((c) => pumpMark(c) >= FLOOR_MC).sort((a, b) => learnedScore(b) - learnedScore(a)), 10);
			state.coins = out.length ? out : all.slice(0, 56);
			if (shift._mint && !shift.coin) {
				shift.coin = state.coins.find((c) => c.mint === shift._mint) || null;
				if (shift.coin) shift.tag = pumpTag(shift.coin);
			}
			brain.scanned = (brain.scanned || 0) + data.length;
			setFeed("pf", true, state.coins.length + " " + src);
			renderBoards();
			renderTrench();
			return true;
		} catch (e) {
			window.__gsTape = String(e && e.stack || e);
			return false;
		}
	}
	function pairToCoin(p) {
		const b = p.baseToken || {};
		const info = p.info || {};
		const sites = (info.websites || []).map((w) => w.url || w).filter(Boolean);
		const socials = (info.socials || []).map((s) => s.url || s).filter(Boolean);
		return {
			mint: b.address || p.pairAddress,
			name: b.name || b.symbol,
			symbol: b.symbol,
			description: p.description || info.imageUrl || "dex pair",
			image_uri: info.imageUrl || p.icon || "dex",
			twitter: socials.find((u) => /twitter|x\.com/i.test(u)) || "",
			website: sites[0] || p.url || "",
			telegram: socials.find((u) => /t\.me/i.test(u)) || "",
			created_timestamp: p.pairCreatedAt || Date.now(),
			last_trade_timestamp: p.pairCreatedAt || Date.now(),
			usd_market_cap: +(p.marketCap || p.fdv || 0),
			market_cap_usd: +(p.marketCap || 0),
			volume_24h: +(p.volume && p.volume.h24 || 0),
			reply_count: p.txns && p.txns.h1 && p.txns.h1.buys + p.txns.h1.sells || 0,
			complete: true,
			is_banned: false,
			priceUsd: +(p.priceUsd || 0)
		};
	}
	function ingestTrades(c, trades) {
		if (!c || !Array.isArray(trades)) return;
		c._trades = trades.slice(0, 80);
		c._traded = true;
		c._metrics = analyzeCoin(c);
		trades.slice(0, 24).forEach((t) => {
			const row = parseTapeTrade(t);
			if (!row || !row.wallet) return;
			trackWallet(row.wallet, row.isBuy ? "buy" : "sell", c, row.usd || row.sol || 0);
		});
	}
	async function enrichCoin(c) {
		if (!c || !c.mint || c._enriching) return;
		if (c._traded && c._held) return;
		c._enriching = true;
		try {
			const [tr, ho, card] = await Promise.all([
				fetch("/api/tape?src=pump-trades&mint=" + encodeURIComponent(c.mint)).then((r) => r.ok ? r.json() : null).catch(() => null),
				fetch("/api/tape?src=pump-holders&mint=" + encodeURIComponent(c.mint)).then((r) => r.ok ? r.json() : null).catch(() => null),
				fetch("/api/tape?src=pump-coin&mint=" + encodeURIComponent(c.mint)).then((r) => r.ok ? r.json() : null).catch(() => null)
			]);
			const trades = Array.isArray(tr) ? tr : tr && tr.trades || [];
			if (trades.length) ingestTrades(c, trades);
			else c._traded = true;
			const holders = Array.isArray(ho) ? ho : ho && (ho.holders || ho.data) || [];
			if (holders.length) {
				c._holders = holders;
				c._held = true;
				c._metrics = analyzeCoin(c);
				holders.slice(0, 24).forEach((h) => {
					const row = parseHolder(h);
					if (row && row.address) trackWallet(row.address, row.isCreator ? "creator" : "hold", c, (row.share || 0) * 1e4);
				});
			} else c._held = true;
			if (card && typeof card === "object" && !Array.isArray(card)) {
				if (card.creator && !c.creator) c.creator = card.creator;
				if (card.description && !c.description) c.description = card.description;
				if (card.twitter) c.twitter = c.twitter || card.twitter;
				if (card.telegram) c.telegram = c.telegram || card.telegram;
				if (card.website) c.website = c.website || card.website;
			}
			await pullIntel(c);
		} catch (_) {}
		c._enriching = false;
	}
	async function pullTrades() {
		const now = Date.now();
		if (state._tradeAt && now - state._tradeAt < 12e3) return;
		state._tradeAt = now;
		const coins = [];
		if (shift.coin) coins.push(shift.coin);
		(state.fomo || state.coins || []).slice(0, 4).forEach((c) => {
			if (c && !coins.includes(c)) coins.push(c);
		});
		for (const c of coins) {
			if (!c || !c.mint) continue;
			if (c.creator) trackWallet(c.creator, "creator", c, 0);
			try {
				const j = await (await fetch("/api/tape?src=pump-trades&mint=" + encodeURIComponent(c.mint))).json();
				const trades = Array.isArray(j) ? j : j.trades || [];
				if (Array.isArray(trades) && trades.length) ingestTrades(c, trades);
			} catch (_) {}
		}
		pruneWallets();
		saveBrain();
		renderWallets();
	}
	function parseXHandle(s) {
		const t = String(s || "").trim();
		const m = t.match(/(?:x\.com|twitter\.com)\/@?([A-Za-z0-9_]{1,15})/i);
		if (m) return m[1];
		const at = t.replace(/^@/, "");
		if (/^[A-Za-z0-9_]{1,15}$/.test(at) && !/^https?:/i.test(t)) return at;
		return "";
	}
	function intelOf(c) {
		if (!c) return null;
		return c.mint && brain.intel[c.mint] || null;
	}
	async function pullIntel(c) {
		if (!c || !c.mint) return;
		const prev = brain.intel[c.mint];
		if (prev && Date.now() - (prev.t || 0) < 9e4) return;
		brain.intel = brain.intel || {};
		try {
			const r = await fetch("/api/tape?src=dex-token&mint=" + encodeURIComponent(c.mint));
			const j = r.ok ? await r.json() : null;
			const pair = (j && j.pairs || []).find((p) => p.chainId === "solana") || (j && j.pairs || [])[0];
			if (pair) {
				const info = pair.info || {};
				const socials = info.socials || [];
				const tw = socials.find((s) => /twitter|x/i.test(String(s.type || s.url || "")));
				const tg = socials.find((s) => /telegram|t\.me/i.test(String(s.type || s.url || "")));
				const web = (info.websites || [])[0];
				if (tw && (tw.url || tw.handle)) c.twitter = c.twitter || tw.url || tw.handle;
				if (tg && tg.url) c.telegram = c.telegram || tg.url;
				if (web && (web.url || typeof web === "string")) c.website = c.website || web.url || web;
				if (+pair.priceUsd > 0) c.priceUsd = c.priceUsd || +pair.priceUsd;
				if (+pair.marketCap > 0 && !pumpMark(c)) c.usd_market_cap = +pair.marketCap;
			}
		} catch (_) {}
		const handle = parseXHandle(c.twitter);
		let followers = 0, name = "";
		if (handle) try {
			const xr = await fetch("/api/tape?src=x-follow&u=" + encodeURIComponent(handle));
			const xj = xr.ok ? await xr.json() : null;
			const row = Array.isArray(xj) ? xj[0] : xj;
			if (row && typeof row === "object") {
				followers = +(row.followers_count || 0);
				name = row.name || "";
			}
		} catch (_) {}
		brain.intel[c.mint] = {
			handle,
			followers,
			name,
			hasX: !!handle,
			hasTg: !!c.telegram,
			hasWeb: !!c.website,
			tag: pumpTag(c),
			t: Date.now()
		};
		if (handle) {
			const line = followers ? "X @" + handle + " " + fmtMc(followers) + " flw on $" + pumpTag(c) : "X @" + handle + " on $" + pumpTag(c) + " — counting";
			lesson("SHILL", "study", line, { tag: pumpTag(c) });
			share("SHILL", pumpTag(c), line);
		} else if (c.website || c.telegram) lesson("SHILL", "study", "$" + pumpTag(c) + " web/tg, no X handle", { tag: pumpTag(c) });
	}
	async function huntIntel() {
		const coins = [];
		if (shift.coin) coins.push(shift.coin);
		if (state.koth && !coins.includes(state.koth)) coins.push(state.koth);
		(state.fomo || state.coins || []).slice(0, 3).forEach((c) => {
			if (c && !coins.includes(c)) coins.push(c);
		});
		for (const c of coins.slice(0, 4)) await pullIntel(c);
	}
	async function pullPump() {
		try {
			const [freshRes, mcapRes, bondRes] = await Promise.all([
				fetch("/api/tape?src=pump"),
				fetch("/api/tape?src=pump-mcap"),
				fetch("/api/tape?src=pump-bonded")
			]);
			let ok = false;
			if (freshRes.ok) {
				if (ingestCoins(await freshRes.json(), "pump")) ok = true;
			}
			if (bondRes.ok) {
				const data = await bondRes.json();
				if (ingestCoins(Array.isArray(data) ? data : [], "pump-bonded")) ok = true;
			}
			if (mcapRes.ok) {
				const data = await mcapRes.json();
				if (ingestCoins(Array.isArray(data) ? data : [], "pump-mcap")) ok = true;
			}
			if (ok) {
				const now = Date.now();
				if (!state._extraAt || now - state._extraAt > 14e3) {
					state._extraAt = now;
					await Promise.all([
						"pump-hot",
						"pump-live",
						"pump-bonded"
					].map(async (src) => {
						try {
							const r = await fetch("/api/tape?src=" + src);
							if (!r.ok) return;
							const d = await r.json();
							ingestCoins(Array.isArray(d) ? d : [], src);
						} catch (_) {}
					}));
					try {
						const pairs = ((await (await fetch("/api/tape?src=dex-search&q=SOL")).json()).pairs || []).filter((p) => p.chainId === "solana" && +(p.marketCap || p.fdv || 0) >= FLOOR_MC && +(p.marketCap || p.fdv || 0) < MEGA_MC);
						pairs.sort((a, b) => +(b.volume && b.volume.h24 || b.marketCap || 0) - +(a.volume && a.volume.h24 || a.marketCap || 0));
						ingestCoins(pairs.slice(0, 24).map(pairToCoin), "dex-mc");
					} catch (_) {}
					await pullTrades();
				}
			}
		} catch (_) {}
		if (!(state.coins || []).length) try {
			const pairs = ((await (await fetch("/api/tape?src=dex-search&q=pumpfun")).json()).pairs || []).filter((p) => p.chainId === "solana" && +(p.marketCap || 0) >= FLOOR_MC && +(p.marketCap || p.fdv || 0) < MEGA_MC);
			pairs.sort((a, b) => +(b.volume && b.volume.h24 || b.marketCap || 0) - +(a.volume && a.volume.h24 || a.marketCap || 0));
			ingestCoins(pairs.slice(0, 24).map(pairToCoin), "dex-pf");
		} catch (_) {}
		if (!(state.coins || []).length) setFeed("pf", false);
		if ((state.coins || []).length) deskCycle();
	}
	async function pullDex() {
		try {
			const data = await (await fetch("/api/tape?src=dex-boosts")).json();
			const list = Array.isArray(data) ? data : data.data || [];
			state.boosts = {};
			list.slice(0, 40).forEach((b) => {
				if (b.tokenAddress) state.boosts[b.tokenAddress] = true;
			});
			setFeed("dx", true, list.length + " boosts");
		} catch (_) {
			setFeed("dx", false);
		}
	}
	async function pullLive() {
		try {
			await Promise.allSettled([
				pullHL(),
				pullBinance(),
				pullYahoo(),
				pullPump(),
				pullDex(),
				huntIntel()
			]);
			[
				"BTC",
				"ETH",
				"SOL",
				"DOGE",
				"TSLA",
				"NVDA",
				"SPX"
			].forEach((k) => {
				if (state.prices[k]) {
					(state.series[k] = state.series[k] || []).push(state.prices[k]);
					if (state.series[k].length > 80) state.series[k].shift();
					pushBar(k, state.prices[k]);
				}
			});
			chartNames().forEach((tag) => {
				const mc = mcOf(tag);
				if (mc) pushBar(tag, mc);
			});
			pushBar("EQ", equity());
			gradePaper();
			renderTickers();
			drawAll();
			updateBook();
			renderPos();
			renderBoards();
			if ((state.coins || []).length) deskCycle();
		} catch (_) {}
	}
	function pushBar(key, px) {
		if (!key || !(px > 0) || !isFinite(px)) return;
		state.ohlc = state.ohlc || {};
		const bars = state.ohlc[key] = state.ohlc[key] || [];
		const now = Date.now();
		const last = bars[bars.length - 1];
		if (last && now - last.t < 7e3) {
			last.h = Math.max(last.h, px);
			last.l = Math.min(last.l, px);
			last.c = px;
			last.v = (last.v || 1) + 1;
		} else {
			const o = last ? last.c : px;
			bars.push({
				t: now,
				o,
				h: Math.max(o, px),
				l: Math.min(o, px),
				c: px,
				v: 1
			});
			if (bars.length > 56) bars.shift();
		}
	}
	function barsOf(key) {
		const ohlc = state.ohlc && state.ohlc[key];
		if (ohlc && ohlc.length > 1) return ohlc;
		const s = state.series[key] || [];
		const bars = [];
		for (let i = 0; i < s.length; i++) {
			const c = s[i], o = s[Math.max(0, i - 1)];
			bars.push({
				t: i,
				o,
				h: Math.max(o, c),
				l: Math.min(o, c),
				c,
				v: 1
			});
		}
		return bars;
	}
	function drawCandles(canvas, bars, asMc) {
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		const w = canvas.width = Math.max(40, canvas.clientWidth * 2);
		const h = canvas.height = Math.max(40, canvas.clientHeight * 2);
		ctx.clearRect(0, 0, w, h);
		ctx.fillStyle = "#06140c";
		ctx.fillRect(0, 0, w, h);
		if (!bars || bars.length < 2) return;
		const padL = 8, padR = 6, padT = 8, volH = Math.floor(h * .2), plotH = h - padT - volH - 8;
		let min = Infinity, max = -Infinity, vmax = 1;
		bars.forEach((b) => {
			min = Math.min(min, b.l);
			max = Math.max(max, b.h);
			vmax = Math.max(vmax, b.v || 1);
		});
		const span = max - min || 1;
		ctx.strokeStyle = "#1a3a24";
		ctx.lineWidth = 1;
		for (let g = 0; g < 4; g++) {
			const y = padT + plotH * g / 3;
			ctx.beginPath();
			ctx.moveTo(padL, y);
			ctx.lineTo(w - padR, y);
			ctx.stroke();
		}
		const n = bars.length;
		const slot = (w - padL - padR) / n;
		const cw = Math.max(3, slot * .62);
		bars.forEach((b, i) => {
			const x = padL + i * slot + slot / 2;
			const yO = padT + plotH - (b.o - min) / span * plotH;
			const yC = padT + plotH - (b.c - min) / span * plotH;
			const yH = padT + plotH - (b.h - min) / span * plotH;
			const yL = padT + plotH - (b.l - min) / span * plotH;
			const up = b.c >= b.o;
			ctx.strokeStyle = up ? "#3dff8a" : "#ff5b6e";
			ctx.fillStyle = up ? "#3dff8a" : "#ff5b6e";
			ctx.lineWidth = 1.5;
			ctx.beginPath();
			ctx.moveTo(x, yH);
			ctx.lineTo(x, yL);
			ctx.stroke();
			const top = Math.min(yO, yC), bh = Math.max(2, Math.abs(yC - yO));
			ctx.fillRect(x - cw / 2, top, cw, bh);
			const vh = Math.max(1, (b.v || 1) / vmax * (volH - 6));
			ctx.globalAlpha = .45;
			ctx.fillRect(x - cw / 2, h - 8 - vh, cw, vh);
			ctx.globalAlpha = 1;
		});
		const last = bars[bars.length - 1];
		const yLast = padT + plotH - (last.c - min) / span * plotH;
		ctx.setLineDash([6, 5]);
		ctx.strokeStyle = last.c >= last.o ? "#3dff8a88" : "#ff5b6e88";
		ctx.beginPath();
		ctx.moveTo(padL, yLast);
		ctx.lineTo(w - padR, yLast);
		ctx.stroke();
		ctx.setLineDash([]);
	}
	function drawEquity(canvas) {
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		const w = canvas.width = Math.max(40, canvas.clientWidth * 2);
		const h = canvas.height = Math.max(40, canvas.clientHeight * 2);
		ctx.clearRect(0, 0, w, h);
		ctx.fillStyle = "#06140c";
		ctx.fillRect(0, 0, w, h);
		const pts = barsOf("EQ").map((b) => b.c);
		if (pts.length < 2) pts.push(book.start || 1e3, equity());
		const padL = 10, padR = 8, padT = 8, padB = 10;
		let min = Math.min(...pts, book.start || 1e3), max = Math.max(...pts, book.start || 1e3);
		const span = max - min || 1;
		min -= span * .08;
		max += span * .08;
		const sp = max - min;
		const yOf = (v) => padT + (h - padT - padB) * (1 - (v - min) / sp);
		ctx.strokeStyle = "#1a3a24";
		ctx.beginPath();
		const y0 = yOf(book.start || 1e3);
		ctx.setLineDash([4, 4]);
		ctx.moveTo(padL, y0);
		ctx.lineTo(w - padR, y0);
		ctx.stroke();
		ctx.setLineDash([]);
		ctx.beginPath();
		pts.forEach((v, i) => {
			const x = padL + i / Math.max(1, pts.length - 1) * (w - padL - padR);
			const y = yOf(v);
			i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
		});
		const last = pts[pts.length - 1];
		const up = last >= (book.start || 1e3);
		ctx.strokeStyle = up ? "#3dff8a" : "#ff5b6e";
		ctx.lineWidth = 2.4;
		ctx.stroke();
		const xLast = w - padR;
		yOf(last);
		ctx.lineTo(xLast, h - padB);
		ctx.lineTo(padL, h - padB);
		ctx.closePath();
		ctx.fillStyle = up ? "#3dff8a22" : "#ff5b6e22";
		ctx.fill();
	}
	function drawVol(canvas) {
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		const w = canvas.width = Math.max(40, canvas.clientWidth * 2);
		const h = canvas.height = Math.max(40, canvas.clientHeight * 2);
		ctx.clearRect(0, 0, w, h);
		ctx.fillStyle = "#06140c";
		ctx.fillRect(0, 0, w, h);
		const rows = (state.fomo || state.coins || []).filter((c) => !isMajor(c)).slice(0, 8).map((c) => ({
			tag: pumpTag(c),
			v: coinVol(c)
		}));
		if (!rows.length) return;
		const max = Math.max(1, ...rows.map((r) => r.v));
		const padL = 10, padR = 8, padT = 8, padB = 10;
		const slot = (w - padL - padR) / rows.length;
		rows.forEach((r, i) => {
			const bh = Math.max(2, r.v / max * (h - padT - padB));
			const x = padL + i * slot + slot * .18;
			ctx.fillStyle = i === 0 ? "#3dff8a" : "#1a6a3a";
			ctx.fillRect(x, h - padB - bh, slot * .64, bh);
		});
	}
	function drawTrades(canvas) {
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		const w = canvas.width = Math.max(40, canvas.clientWidth * 2);
		const h = canvas.height = Math.max(40, canvas.clientHeight * 2);
		ctx.clearRect(0, 0, w, h);
		ctx.fillStyle = "#06140c";
		ctx.fillRect(0, 0, w, h);
		const ts = (book.trades || []).slice(0, 24).reverse();
		if (!ts.length) return;
		const padL = 10, padR = 8, padT = 8, padB = 10;
		const max = Math.max(1, ...ts.map((t) => Math.abs(t.pnl || 0)));
		const slot = (w - padL - padR) / ts.length;
		const midY = padT + (h - padT - padB) / 2;
		ctx.strokeStyle = "#1a3a24";
		ctx.beginPath();
		ctx.moveTo(padL, midY);
		ctx.lineTo(w - padR, midY);
		ctx.stroke();
		ts.forEach((t, i) => {
			const bh = Math.max(2, Math.abs(t.pnl || 0) / max * (h - padT - padB) * .46);
			const x = padL + i * slot + slot * .2;
			ctx.fillStyle = (t.pnl || 0) >= 0 ? "#3dff8a" : "#ff5b6e";
			if ((t.pnl || 0) >= 0) ctx.fillRect(x, midY - bh, slot * .6, bh);
			else ctx.fillRect(x, midY, slot * .6, bh);
		});
	}
	function drawSparks() {
		const el = document.getElementById("posSparks");
		if (!el) return;
		const pos = book.positions || [];
		if (!pos.length) {
			el.innerHTML = "";
			return;
		}
		el.innerHTML = pos.slice(0, 6).map((p, i) => `<div class="spark"><label>$${esc(p.sym)}</label><canvas id="sp${i}"></canvas></div>`).join("");
		pos.slice(0, 6).forEach((p, i) => drawCandles(document.getElementById("sp" + i), barsOf(p.sym), true));
	}
	function drawAll() {
		chartNames().forEach((n, i) => {
			const lab = document.getElementById("c" + (i + 1) + "l");
			const bars = barsOf(n);
			const last = bars[bars.length - 1];
			const first = bars[0];
			const chg = last && first && first.o ? (last.c - first.o) / first.o * 100 : 0;
			if (lab) lab.innerHTML = "$" + n + " <span>" + fmtMc(mcOf(n) || last && last.c || 0) + "</span> <em class=\"" + (chg >= 0 ? "up" : "dn") + "\">" + (chg >= 0 ? "+" : "") + chg.toFixed(1) + "%</em>";
			drawCandles(document.getElementById("c" + (i + 1)), bars, true);
		});
		const lab4 = document.getElementById("c4l");
		if (lab4) lab4.innerHTML = "EQUITY <span>$" + equity().toFixed(2) + "</span> <em class=\"" + (totalPnl() >= 0 ? "up" : "dn") + "\">real " + (book.realized >= 0 ? "+$" : "-$") + Math.abs(book.realized || 0).toFixed(2) + "</em>";
		drawEquity(document.getElementById("c4"));
		const lab5 = document.getElementById("c5l");
		const hot = state.fomo && state.fomo[0] || state.koth;
		if (lab5) lab5.innerHTML = "TAPE VOL <span>" + (hot ? "$" + pumpTag(hot) : "—") + "</span>";
		drawVol(document.getElementById("c5"));
		const lab6 = document.getElementById("c6l");
		const fills = (book.trades || []).length;
		if (lab6) lab6.innerHTML = "TRADES <span>" + fills + "</span> <em class=\"" + (totalPnl() >= 0 ? "up" : "dn") + "\">" + (totalPnl() >= 0 ? "+" : "-$") + Math.abs(totalPnl()).toFixed(2) + "</em>";
		drawTrades(document.getElementById("c6"));
		drawSparks();
		drawTv();
	}
	let sceneI = 0;
	function tickWindow() {
		const el = document.getElementById("pitScene");
		if (!el) return;
		const cycle = {
			farm: [
				"dawn",
				"day",
				"day",
				"dusk"
			],
			office: [
				"day",
				"dusk",
				"dusk",
				"night"
			],
			night: [
				"night",
				"rain",
				"night",
				"neon"
			],
			alpha: [
				"neon",
				"dusk",
				"rain",
				"night"
			]
		};
		const list = cycle[state.view] || cycle.alpha;
		sceneI = (sceneI + 1) % list.length;
		el.dataset.scene = list[sceneI];
	}
	function drawTv() {
		const c = document.getElementById("tvChart");
		const tag = state.koth && pumpTag(state.koth) || chartNames()[0] || "";
		if (c && tag) drawCandles(c, barsOf(tag), true);
		const stories = tvStories();
		const head = document.getElementById("tvHeadline");
		if (head && stories.length) {
			state._tvI = ((state._tvI || 0) + 1) % stories.length;
			head.textContent = stories[state._tvI];
		}
		const crawl = document.getElementById("tvCrawl");
		if (crawl) crawl.textContent = stories.concat(["GROKSTREET PAPER · LIVE SEND OFF · $10 MIN"]).join("   ·   ") + "   ·   ";
		const lab = document.getElementById("tvTag");
		if (lab) lab.textContent = tag ? "CH 7  $" + tag : "CH 7  TRENCH";
	}
	function tvStories() {
		const out = [];
		if (state.koth) out.push("KOTH $" + pumpTag(state.koth) + "  " + fmtMc(pumpMark(state.koth)) + "  on curve");
		(state.fomo || []).slice(0, 5).forEach((c) => {
			out.push("$" + pumpTag(c) + "  " + fmtMc(pumpMark(c)) + "  vol " + fmtMc(coinVol(c)));
		});
		if (shift.tag) out.push((shift.line || "SCOUT $" + shift.tag).slice(0, 64));
		(book.journal || []).slice(0, 4).forEach((j) => {
			const t = String(j.text || j.msg || "").replace(/<[^>]+>/g, " ").slice(0, 56);
			if (t) out.push((j.who || "DESK") + "  " + t);
		});
		const f = brain.funnel || {};
		out.push("FUNNEL  " + (f.scanned || 0) + " scan  " + (f.cleared || 0) + " clear  " + (f.filled || 0) + " fill");
		out.push((book.bought || 0) + " PAPER BUYS   " + (book.positions || []).length + " OPEN   CASH $" + (book.cash || 0).toFixed(0));
		out.push("TRENCH NEWS  bonded + $15k  ·  live send off");
		return out.filter(Boolean);
	}
	function say(who, text, bad) {
		talk(who, text);
		if (state.agents[who]) pop(who, text.slice(0, 22), !!bad);
		const r = document.getElementById("r-" + who);
		if (r) {
			r.classList.add("busy");
			setTimeout(() => r.classList.remove("busy"), 1200);
		}
	}
	function renderShift() {
		const bar = document.getElementById("shiftBar");
		if (bar) bar.querySelectorAll("[data-view]").forEach((b) => {
			b.classList.toggle("on", b.dataset.view === state.view);
			b.classList.toggle("hot", b.dataset.view === shift.room);
		});
		const line = document.getElementById("shiftLine");
		if (line) line.textContent = shift.line;
		const hint = document.getElementById("hint");
		if (hint) hint.textContent = shift.line + " · live send off";
		document.querySelectorAll(".views [data-view]").forEach((b) => {
			b.classList.toggle("hot", b.dataset.view === shift.room);
		});
	}
	function pickShiftCoin() {
		const held = new Set(book.positions.map((p) => p.sym));
		const heldMint = new Set(book.positions.map((p) => p.mint).filter(Boolean));
		const pool = (state.coins || []).filter((x) => {
			if (!isTrench(x) && !justBonded(x)) return false;
			const tag = pumpTag(x);
			if (!tag || held.has(tag) || x.mint && heldMint.has(x.mint)) return false;
			const mem = x.mint && brain.memory[x.mint];
			if (mem && mem.last === "veto" && Date.now() - (mem.t || 0) < 18e3) return false;
			return true;
		});
		if (!pool.length) return null;
		shift.lane = (shift.lane || 0) + 1;
		const lane = shift.lane % 3;
		let picked = null;
		if (lane === 0) {
			picked = pool.filter((c) => justBonded(c)).sort((a, b) => coinVol(b) - coinVol(a))[0];
			if (picked) picked._lane = "bonded";
		} else if (lane === 1) {
			picked = pool.filter((c) => pumpMark(c) < MEGA_MC).slice().sort((a, b) => coinVol(b) - coinVol(a))[0];
			if (picked) picked._lane = justBonded(picked) ? "bonded" : "vol";
		}
		if (!picked) {
			picked = pool.slice().sort((a, b) => learnedScore(b) - learnedScore(a))[0];
			if (picked) picked._lane = justBonded(picked) ? "bonded" : "vol";
		}
		brain.scanned = (brain.scanned || 0) + 1;
		return picked;
	}
	function deskCycle() {
		if (state.ticket && state.ticket.status === "RISK") {
			shift.room = "alpha";
			shift.line = "ALPHA RISK stamping $" + state.ticket.sym;
			renderShift();
			riskStamp();
			return;
		}
		if (!shift.coin && shift._mint) {
			shift.coin = (state.coins || []).find((c) => c.mint === shift._mint) || null;
			if (shift.coin) {
				shift.tag = pumpTag(shift.coin);
				shift._miss = 0;
			}
		}
		if ((shift.step === "office" || shift.step === "night" || shift.step === "check") && !shift.coin) {
			shift._miss = (shift._miss || 0) + 1;
			if (shift._mint && shift._miss < 3) {
				renderShift();
				return;
			}
			shift.step = "farm";
			shift._mint = "";
			shift.tag = "";
			shift._miss = 0;
		}
		if (shift.step === "farm" || !shift.coin) {
			const c = pickShiftCoin();
			if (!c) {
				const pulse = pulseSignal();
				if (book.positions.length) {
					shift.step = "alpha";
					shift.room = "alpha";
					shift.line = "SCOUT empty · EXIT reviews open book";
					renderShift();
					return;
				}
				if (shift._mint || shift.tag) {
					shift.line = shift.tag ? "SCOUT hold $" + shift.tag + " · waiting tape" : shift.line || "SCOUT waiting tape";
					renderShift();
					renderFunnel();
					return;
				}
				shift.room = "farm";
				shift.line = pulse.go < .3 ? "SCOUT pause · pulse " + pulse.go.toFixed(2) + " · " + pulse.why : "SCOUT waiting pump.fun + DexScreener";
				say("SEARCH", shift.line);
				renderShift();
				renderFunnel();
				return;
			}
			shift.coin = c;
			shift.tag = pumpTag(c);
			shift._mint = c.mint || "";
			shift.step = "office";
			shift.room = "farm";
			bumpFunnel("scanned");
			enrichCoin(c);
			const sc0 = scorePacket(c);
			postThread(c, "SEARCH", "scout", "$" + shift.tag + " " + (c._lane === "bonded" ? "just bonded" : "vol") + " " + fmtMc(pumpMark(c)) + " score " + sc0.total.toFixed(2), { score: sc0 });
			shift.line = "SCOUT $" + shift.tag + " " + (c._lane === "bonded" ? "just bonded" : "vol") + " " + fmtMc(pumpMark(c)) + " · " + sc0.total.toFixed(2);
			rememberCoin(c, "seen", "research");
			const bits = studyCoin(c);
			lesson("SEARCH", "study", "$" + shift.tag + " " + bits.slice(0, 2).join(" · "), {
				tag: shift.tag,
				mc: pumpMark(c)
			});
			lesson("ARCHIVE", "study", "logged $" + shift.tag + " mc " + fmtMc(pumpMark(c)) + " vol " + fmtMc(coinVol(c)), {
				tag: shift.tag,
				mc: pumpMark(c)
			});
			say("SEARCH", "scout $" + shift.tag + " " + (c._lane === "bonded" ? "just bonded" : "vol") + " " + fmtMc(pumpMark(c)) + " — " + bits[0]);
			say("CHECK", "re SEARCH — " + (bits[1] || "got packet"));
			share("SEARCH", shift.tag, bits[0]);
			renderShift();
			renderFunnel();
			saveBrain();
			return;
		}
		if (shift.step === "office") {
			const c = shift.coin;
			enrichCoin(c);
			const kill = cheapKill(c);
			const sc = scorePacket(c);
			const hard = kill || hardVeto(c, sc);
			if (hard) {
				shift.room = "office";
				shift.step = "farm";
				shift.line = "AUDIT REJECT  $" + shift.tag + " — " + hard;
				say("RUG", "NO $" + shift.tag + " — " + hard, true);
				say("CHECKER", "auditor rejected — terminal", true);
				postThread(c, "RUG", "veto", hard);
				brain.seen++;
				brain.veto++;
				bumpReason(hard);
				rememberCoin(c, "veto", hard);
				bumpFunnel("skipped");
				lesson("RUG", "veto", "NO $" + shift.tag + " — " + hard, {
					tag: shift.tag,
					mc: pumpMark(c)
				});
				book.refused++;
				log("RUG", "REFUSE $" + shift.tag + " — " + hard, "no");
				shift.coin = null;
				shift.tag = "";
				renderLearn();
				renderFunnel();
				updateBook();
				persist();
				saveBrain();
				renderShift();
				return;
			}
			shift.room = "office";
			shift.step = "night";
			shift.line = "AUDIT $" + shift.tag + " audit " + sc.audit.toFixed(2) + " narr " + sc.narrative.toFixed(2);
			postThread(c, "RUG", "audit", "audit " + sc.audit.toFixed(2) + (walletHint(c).dump ? " dump flags" : " organic-ish"), { score: sc });
			postThread(c, "SHILL", "narrative", "narrative " + sc.narrative.toFixed(2) + (featuresOf(c).social ? " has socials" : " thin social") + (isDerivative(c) ? " derivative −30%" : ""), { score: sc });
			postThread(c, "QUANT", "timing", "timing " + sc.timing.toFixed(2) + " pulse " + sc.go.toFixed(2), { score: sc });
			say("RUG", "auditor $" + shift.tag + " " + sc.audit.toFixed(2));
			say("SHILL", "narrative $" + shift.tag + " " + sc.narrative.toFixed(2));
			say("QUANT", "timing $" + shift.tag + " pulse " + sc.go.toFixed(2));
			bumpFunnel("cleared");
			renderShift();
			renderFunnel();
			return;
		}
		if (shift.step === "night") {
			const c = shift.coin;
			const flow = flowVote(c);
			const social = socialVote(c);
			postThread(c, flow.who, flow.ok ? "flow" : "veto", flow.line);
			postThread(c, social.who, social.ok ? "social" : "veto", social.line);
			say("WHALE", "$" + shift.tag + " FLOW " + (flow.ok ? "yes" : "no") + " — " + flow.line, !flow.ok);
			say("SHILL", "$" + shift.tag + " SOCIAL " + (social.ok ? "yes" : "no") + " — " + social.line, !social.ok);
			if (!flow.ok || !social.ok) {
				const why = !flow.ok ? flow.line : social.line;
				shift.room = "night";
				shift.step = "farm";
				shift.line = "FLOW/SOCIAL NO  $" + shift.tag + " — " + why;
				brain.seen++;
				brain.veto++;
				bumpReason(why);
				rememberCoin(c, "veto", why);
				bumpFunnel("skipped");
				book.refused++;
				log("WHALE", "SKIP $" + shift.tag + " — " + why, "no");
				shift.coin = null;
				shift.tag = "";
				renderLearn();
				renderFunnel();
				persist();
				saveBrain();
				renderShift();
				return;
			}
			shift.room = "night";
			shift.step = "check";
			shift.line = "FLOW+SOCIAL yes $" + shift.tag + " → CHECKER";
			renderShift();
			renderFunnel();
			return;
		}
		if (shift.step === "check") {
			const scN = scorePacket(shift.coin);
			const chk = checkerVeto(shift.coin, scN);
			if (chk) {
				shift.room = "night";
				shift.step = "farm";
				shift.line = "CHECKER NO  $" + shift.tag + " — " + chk;
				say("MONITOR", "$" + shift.tag + " on the refuse board");
				say("CHECKER", "NO $" + shift.tag + " — " + chk, true);
				postThread(shift.coin, "CHECKER", "veto", chk);
				brain.seen++;
				brain.veto++;
				bumpReason(chk);
				rememberCoin(shift.coin, "veto", chk);
				bumpFunnel("skipped");
				lesson("CHECKER", "veto", "NO $" + shift.tag + " — " + chk, {
					tag: shift.tag,
					mc: pumpMark(shift.coin)
				});
				lesson("MONITOR", "veto", "$" + shift.tag + " refuse board", { tag: shift.tag });
				lesson("AUDITOR", "study", chk, { tag: shift.tag });
				rebuildPlaybook();
				book.refused++;
				log("CHECKER", "REFUSE $" + shift.tag + " — " + chk, "no");
				shift.coin = null;
				shift.tag = "";
				renderLearn();
				renderFunnel();
				updateBook();
				persist();
				saveBrain();
				renderShift();
				return;
			}
			shift.room = "night";
			shift.step = "alpha";
			bumpFunnel("confirmed");
			postThread(shift.coin, "CHECKER", "clear", "approve " + scN.total.toFixed(2) + " — no contradiction");
			const brief = composeBrief(shift.coin);
			say("ARCHIVE", "brief $" + shift.tag + " · " + (brief.lines || []).length + " facts · no new claims");
			shift.line = "CHECKER YES  $" + shift.tag + " score " + scN.total.toFixed(2) + " → FILL";
			say("MONITOR", "$" + shift.tag + " not killed — SEARCH");
			say("CHECKER", "re MONITOR — pass $" + shift.tag + " score " + scN.total.toFixed(2));
			renderShift();
			renderFunnel();
			return;
		}
		shift.room = "alpha";
		if (ticketBusy()) {
			renderShift();
			return;
		}
		const exit = pickExit();
		if (exit && exit.pos) {
			const notional = Math.abs(exit.pos.qty) * exit.pos.avg;
			if (exit.verb === "TRIM") {
				shift.line = "ALPHA TRIM  $" + exit.pos.sym + " — " + exit.why;
				say("EXIT", "TRIM $" + exit.pos.sym + " — " + exit.why);
				say("HEAD", "partial flatten $" + exit.pos.sym + " then trail");
				lesson("EXIT", "sell", "TRIM $" + exit.pos.sym + " — " + exit.why, { tag: exit.pos.sym });
				trimPos(exit.pos.id, exit.frac || .5, exit.why);
				shift.step = "farm";
				shift.coin = null;
				shift.tag = "";
				renderLearn();
				saveBrain();
				renderShift();
				return;
			}
			shift.line = "ALPHA SELL  $" + exit.pos.sym + " — " + exit.why;
			say("EXIT", "SELL $" + exit.pos.sym + " — " + exit.why);
			say("WHALE", exit.why.indexOf("dump") >= 0 ? "re EXIT — wallets dumping $" + exit.pos.sym : "re EXIT — paper sell $" + exit.pos.sym);
			say("HEAD", "ticket SELL $" + exit.pos.sym + " then SNIPER paper fills");
			lesson("EXIT", "sell", "SELL $" + exit.pos.sym + " — " + exit.why, { tag: exit.pos.sym });
			proposeTicket(exit.pos.sym, "sell", notional, exit.pos.mint, {
				closeId: exit.pos.id,
				why: exit.why
			});
			shift.step = "farm";
			shift.coin = null;
			shift.tag = "";
			renderLearn();
			saveBrain();
			renderShift();
			return;
		}
		const c = shift.coin;
		if (!c) {
			shift.step = "farm";
			renderShift();
			return;
		}
		const p = pumpPacket(c);
		const hint = walletHint(c);
		const scA = scorePacket(c);
		const gate = riskGate(c, scA.total);
		const hungry = (book.bought || 0) === 0;
		if (gate && !hungry) {
			shift.line = "RISK GATE  $" + p.tag + " — " + gate;
			say("RISK", "$" + p.tag + " " + gate, true);
			postThread(c, "RISK", "veto", gate);
			brain.seen++;
			brain.veto++;
			bumpReason(gate);
			if (!/^size_too_small/.test(gate)) rememberCoin(c, "veto", gate);
			bumpFunnel("skipped");
			book.refused++;
			log("RISK", "SKIP $" + p.tag + " — " + gate, "no");
			shift.step = "farm";
			shift.coin = null;
			shift.tag = "";
			renderLearn();
			renderFunnel();
			persist();
			renderShift();
			return;
		}
		const hudd = huddleSize(c);
		const sized = Math.max(MIN_BUY, Math.min(solCap(), hudd.size * (.7 + scA.total), sizeFromScore(Math.max(scA.total, .5)), book.cash || 0, 40));
		if (!hungry && hudd.pass && scA.total < .5) {
			const why = "huddle pass";
			shift.line = "FILL SKIP  $" + p.tag + " — huddle pass";
			brain.seen++;
			brain.veto++;
			bumpReason(why);
			bumpFunnel("skipped");
			book.refused++;
			log("HEAD", "SKIP $" + p.tag + " — huddle pass", "no");
			postThread(c, "HEAD", "veto", why);
			shift.step = "farm";
			shift.coin = null;
			shift.tag = "";
			renderLearn();
			renderFunnel();
			persist();
			renderShift();
			return;
		}
		brain.seen++;
		brain.clear++;
		rememberCoin(c, "clear", "paper");
		bumpFunnel("filled");
		const bits = studyCoin(c);
		lesson("SEARCH", "study", "$" + p.tag + " " + bits[0], {
			tag: p.tag,
			mc: p.mc
		});
		lesson("WHALE", "study", hint.best ? shortAddr(hint.best.addr) + " follow on $" + p.tag : "$" + p.tag + " first prints", { tag: p.tag });
		lesson("RUG", "study", c.complete ? "$" + p.tag + " graduated" : "$" + p.tag + " curve " + curvePct(c).toFixed(0) + "%", { tag: p.tag });
		say("RUG", c.complete ? "$" + p.tag + " graduated — MC book " + fmtMc(p.mc) : "$" + p.tag + " still on curve " + curvePct(c).toFixed(0) + "%");
		say("HEAD", "ticket $" + p.tag + " $" + sized.toFixed(0) + " · score " + scA.total.toFixed(2));
		postThread(c, "HEAD", "fill", "paper $" + sized.toFixed(0) + " score " + scA.total.toFixed(2));
		proposeTicket(p.tag, "buy", sized, c.mint);
		log("SEARCH", "PUMP/DEX " + p.tag + " mint " + (p.mint || "").slice(0, 6) + "… mc " + fmtMc(p.mc) + " vol " + fmtMc(coinVol(c)) + " score " + scA.total.toFixed(2) + " size $" + sized.toFixed(0));
		shift.line = "FILL $" + p.tag + " $" + sized.toFixed(0) + " score " + scA.total.toFixed(2) + " · paper";
		shift.step = "farm";
		shift.coin = null;
		shift.tag = "";
		renderLearn();
		renderFunnel();
		persist();
		renderShift();
	}
	function pulse() {
		try {
			const list = rosterList();
			const a = list[Math.floor(Math.random() * list.length)];
			const s = seatOf(a.id);
			go(a.id, s.x, s.y, true);
			const r = document.getElementById("r-" + a.id);
			if (r) r.classList.add("busy");
			setTimeout(() => {
				if (r) r.classList.remove("busy");
			}, 1400);
			state._pulse = (state._pulse || 0) + 1;
			if (state._pulse % 3 === 1) studyPulse();
			if (Math.random() > .55) chatter();
			deskCycle();
			if (Math.random() > .72) {
				const w = list[Math.floor(Math.random() * list.length)];
				const s2 = seatOf(w.id);
				go(w.id, s2.x + (Math.random() * 6 - 3), s2.y + (Math.random() * 4 - 2), false);
				setTimeout(() => {
					const back = seatOf(w.id);
					go(w.id, back.x, back.y, true);
				}, 1600);
			}
		} catch (e) {
			window.__gsPulse = String(e && e.stack || e);
		}
	}
	function setView(v) {
		const changing = state.view !== v;
		const rm = document.getElementById("room");
		if (changing && rm) rm.classList.add("swap");
		state.view = v;
		appEl.classList.add("alpha");
		appEl.classList.toggle("farm", v === "farm");
		appEl.classList.toggle("night", v === "night");
		document.querySelectorAll(".views button").forEach((b) => b.classList.toggle("on", b.dataset.view === v));
		const floorBtns = document.getElementById("floorBtns");
		if (floorBtns) floorBtns.style.display = v === "office" ? "flex" : "none";
		const mode = document.getElementById("modeTag");
		if (mode) mode.textContent = "PAPER · " + v.toUpperCase();
		const bb = document.querySelector(".big-board b");
		if (bb) bb.textContent = v === "alpha" ? "GROKSTREET · pump.fun · PAPER" : v === "night" ? "GROKSTREET · REFUSE BOARD · PAPER" : v === "farm" ? "GROKSTREET · WORK FARM · PAPER" : "GROKSTREET · NYSE PIT · PAPER";
		const paint = () => {
			layout();
			renderTickers();
			renderBoards();
			renderShift();
			if (rm) rm.classList.remove("swap");
		};
		if (changing && rm) {
			window.__gsTimers = window.__gsTimers || [];
			window.__gsTimers.push(setTimeout(paint, 140));
		} else paint();
	}
	function setFloor(f) {
		state.floor = f;
		document.querySelectorAll(".floors button").forEach((b) => b.classList.toggle("on", b.dataset.floor === f));
		layout();
		renderTickers();
	}
	function diskText() {
		return JSON.stringify({
			"keys.local.json": {
				venue: book.cfg.venue,
				watchAddr: book.cfg.watchAddr ? book.cfg.watchAddr.slice(0, 4) + "…" : "",
				canWithdraw: false,
				liveSend: false
			},
			"tickets.json": state.ticket,
			"positions.json": book.positions,
			"wallets.json": topWallets().map((w) => ({
				addr: shortAddr(w.addr),
				follow: w.follow,
				vol: w.vol,
				kind: w.kind,
				buys: w.buys,
				sells: w.sells
			})),
			"fomo.json": (state.fomo || []).slice(0, 6).map((c) => ({
				tag: pumpTag(c),
				mc: pumpMark(c),
				fomo: +fomoScore(c).toFixed(0),
				live: !!c.is_currently_live
			})),
			"patterns.json": brain.patterns,
			"playbook.json": brain.playbook,
			"lessons.json": (brain.lessons || []).slice(0, 12),
			"agents.json": Object.values(brain.agents || {}).map((a) => ({
				id: a.id,
				studied: a.studied,
				fills: a.fills,
				vetoes: a.vetoes,
				wins: a.wins,
				losses: a.losses,
				last: a.last
			})),
			"huddles.json": (brain.huddles || []).slice(0, 8),
			"inbox.json": (brain.inbox || []).slice(0, 8),
			"funnel.json": brain.funnel,
			"pulse.json": brain.pulse,
			"day.json": brain.day,
			"creators.json": Object.values(brain.creators || {}).slice(0, 8),
			"briefs.json": (brain.briefs || []).slice(0, 3),
			"book.json": {
				cash: book.cash,
				equity: equity(),
				feesPaid: book.feesPaid,
				start: book.start,
				refused: book.refused,
				bought: book.bought,
				sold: book.sold || 0,
				realized: book.realized || 0,
				unrealized: unrealized(),
				pnl: totalPnl()
			}
		}, null, 2);
	}
	document.querySelectorAll(".views button").forEach((b) => b.onclick = () => setView(b.dataset.view));
	document.querySelectorAll("#shiftBar [data-view]").forEach((b) => b.onclick = () => setView(b.dataset.view));
	document.querySelectorAll(".floors button").forEach((b) => b.onclick = () => setFloor(b.dataset.floor));
	document.getElementById("railTabs") && document.getElementById("railTabs").querySelectorAll("button").forEach((b) => b.onclick = () => {
		document.querySelectorAll("#railTabs button").forEach((x) => x.classList.toggle("on", x === b));
		document.querySelectorAll("#intelRail [data-pane]").forEach((s) => s.classList.toggle("show", s.dataset.pane === b.dataset.rail));
	});
	document.getElementById("approveBtn").onclick = approve;
	document.getElementById("setBtn").onclick = () => {
		document.getElementById("venue").value = book.cfg.venue;
		document.getElementById("startCash").value = book.start;
		document.getElementById("riskPct").value = book.cfg.riskPct;
		document.getElementById("feeBps").value = book.cfg.feeBps;
		document.getElementById("slipBps").value = book.cfg.slipBps;
		document.getElementById("watchAddr").value = book.cfg.watchAddr || "";
		document.getElementById("setModal").classList.add("on");
	};
	document.getElementById("closeSet").onclick = () => document.getElementById("setModal").classList.remove("on");
	function looksSecret(s) {
		const t = (s || "").trim();
		if (!t) return false;
		if (/\b(seed|mnemonic|private|secret)\b/i.test(t)) return true;
		if (t.startsWith("[") || t.includes(",")) return true;
		if (/^[0-9a-fA-F]{64}$/.test(t)) return true;
		if (t.length > 50) return true;
		return false;
	}
	function looksPub(s) {
		const t = (s || "").trim();
		return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(t);
	}
	document.getElementById("saveKeys").onclick = () => {
		const watch = document.getElementById("watchAddr").value.trim();
		if (watch && looksSecret(watch)) {
			toast("REJECTED — that looks like a secret");
			log("SYSTEM", "secret rejected", "no");
			return;
		}
		if (watch && !looksPub(watch)) {
			toast("REJECTED — public address only");
			return;
		}
		const start = +document.getElementById("startCash").value;
		if (start > 0 && Math.abs(start - book.start) > 1e-9 && !book.positions.length) {
			book.start = start;
			book.cash = start;
		}
		book.cfg.venue = document.getElementById("venue").value;
		book.cfg.riskPct = +document.getElementById("riskPct").value;
		book.cfg.feeBps = +document.getElementById("feeBps").value;
		book.cfg.slipBps = +document.getElementById("slipBps").value;
		book.cfg.watchAddr = watch;
		book.cfg.canWithdraw = false;
		book.cfg.liveSend = false;
		persist();
		renderWatch();
		updateBook();
		toast(watch ? "WATCH " + watch.slice(0, 4) + "…" + watch.slice(-4) : "SAVED · no spend key");
		document.getElementById("setModal").classList.remove("on");
		log("SYSTEM", "watch saved · live send still off · " + (watch ? watch.slice(0, 6) + "…" : "none"));
	};
	document.getElementById("diskBtn").onclick = () => {
		document.getElementById("diskPre").textContent = diskText();
		document.getElementById("diskModal").classList.add("on");
	};
	document.getElementById("closeDisk").onclick = () => document.getElementById("diskModal").classList.remove("on");
	document.getElementById("exportJ").onclick = () => {
		const blob = new Blob([JSON.stringify({
			cash: book.cash,
			equity: equity(),
			feesPaid: book.feesPaid,
			positions: book.positions,
			journal: book.journal,
			exported: (/* @__PURE__ */ new Date()).toISOString()
		}, null, 2)], { type: "application/json" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = "grokstreet-journal.json";
		a.click();
	};
	document.getElementById("resetBook").onclick = () => {
		book.cash = 1e3;
		book.start = 1e3;
		book.positions = [];
		book.feesPaid = 0;
		book.bought = 0;
		book.sold = 0;
		book.realized = 0;
		book.refused = 0;
		book.trades = [];
		state.ticket = null;
		_ready = true;
		persist();
		updateBook();
		renderPos();
		renderPipe();
		toast("BOOK RESET $1000");
	};
	document.getElementById("ticketBtn").onclick = () => {
		const sel = document.getElementById("tMkt");
		const extras = (state.coins || []).slice(0, 8).map(pumpTag).filter(Boolean);
		sel.innerHTML = [...new Set([
			"BTC",
			"ETH",
			"SOL",
			"DOGE"
		].concat(extras))].map((n) => `<option>${esc(n)}</option>`).join("");
		document.getElementById("tRisk").value = ticketSize().toFixed(2);
		document.getElementById("tixModal").classList.add("on");
	};
	document.getElementById("closeTix").onclick = () => document.getElementById("tixModal").classList.remove("on");
	document.getElementById("openTix").onclick = () => {
		proposeTicket(document.getElementById("tMkt").value, document.getElementById("tSide").value, +document.getElementById("tRisk").value);
		document.getElementById("tixModal").classList.remove("on");
		setView("alpha");
	};
	setView("alpha");
	tickMove();
	updateBook();
	renderPos();
	renderPipe();
	renderWatch();
	renderTrench();
	function replayChat() {
		const box = document.getElementById("chat");
		if (!box) return;
		box.innerHTML = "";
		(brain.chat || []).slice(0, 16).reverse().forEach((c) => {
			const row = document.createElement("div");
			row.className = "log";
			row.innerHTML = `<span class="who">${esc(c.who)}</span> ${esc(c.text)}`;
			box.prepend(row);
		});
	}
	function replayJournal() {
		const feed = document.getElementById("feed");
		if (!feed) return;
		feed.innerHTML = "";
		(book.journal || []).slice(0, 24).reverse().forEach((j) => {
			const row = document.createElement("div");
			row.className = "log";
			row.innerHTML = `<span class="who">${esc(j.who)}</span> <span class="${j.kind === "ok" ? "up" : j.kind === "no" ? "dn" : ""}">${esc(j.text)}</span>`;
			feed.prepend(row);
		});
	}
	replayChat();
	replayJournal();
	renderLearn();
	renderHuddle();
	function startDesk() {
		if (state._started) return;
		state._started = true;
		if ((book.bought || 0) === 0) {
			shift.step = "farm";
			shift.coin = null;
			shift.tag = "";
			shift._mint = "";
			shift._miss = 0;
			shift.line = "SCOUT opening book — paper fill next";
		}
		pulse();
		pullLive();
		window.__gsTimers = window.__gsTimers || [];
		window.__gsTimers.push(setInterval(() => {
			const c = document.getElementById("clock");
			if (c) c.textContent = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-GB", { hour12: false });
		}, 1e3));
		window.__gsTimers.push(setInterval(pullLive, 5e3));
		window.__gsTimers.push(setInterval(pulse, 1800));
		window.__gsTimers.push(setInterval(persist, 8e3));
		window.__gsTimers.push(setInterval(tickWindow, 11e3));
		window.__gsTimers.push(setInterval(drawTv, 2800));
		tickWindow();
		drawTv();
	}
	hydrateDesk().then(startDesk).catch(() => {
		_ready = true;
		startDesk();
	});
	window.addEventListener("beforeunload", () => {
		try {
			persist();
			flushDeskNow();
		} catch (_) {}
	});
	document.addEventListener("visibilitychange", () => {
		if (document.hidden) {
			persist();
			flushDeskNow();
		}
	});
	window.__gsDebug = function() {
		return {
			coins: (state.coins || []).slice(0, 8).map((c) => ({
				t: pumpTag(c),
				mc: pumpMark(c),
				vol: coinVol(c),
				bond: !!c.complete
			})),
			n: (state.coins || []).length,
			shift: {
				step: shift.step,
				tag: shift.tag,
				line: shift.line,
				room: shift.room
			},
			agents: Object.keys(state.agents || {}),
			pulse: state._pulse,
			go: brain.pulse && brain.pulse.go || 0,
			funnel: brain.funnel,
			day: brain.day,
			ready: _ready,
			bought: book.bought,
			cash: book.cash,
			ticket: state.ticket && state.ticket.sym
		};
	};
}
//#endregion
export { bootFloor, stopFloor };
