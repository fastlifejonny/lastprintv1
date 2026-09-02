import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, _ as useRouter, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B6FrUHqd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-CryZJljr.css";
var APP_NAME = "GROKSTREET";
var Route$3 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#120e0a"
			},
			{
				name: "description",
				content: "Paper trading pit. Live send off. Not financial advice."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "m-0 bg-ink text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter = () => import("./routes-DjPSuonq.mjs");
var Route$2 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var memory = null;
var Route$1 = createFileRoute("/api/desk")({ server: { handlers: {
	GET: async () => Response.json(memory || {
		savedAt: 0,
		empty: true
	}),
	POST: async ({ request }) => {
		try {
			memory = await request.json();
		} catch {
			return Response.json({ ok: false }, { status: 400 });
		}
		return Response.json({
			ok: true,
			savedAt: Date.now()
		});
	}
} } });
var TIMEOUT = 8e3;
var BROWSER = {
	"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
	Accept: "application/json,text/plain,*/*"
};
async function getJson(url, init) {
	const ac = new AbortController();
	const t = setTimeout(() => ac.abort(), TIMEOUT);
	try {
		const res = await fetch(url, {
			...init,
			signal: ac.signal
		});
		const text = await res.text();
		return {
			ok: res.ok,
			status: res.status,
			body: text
		};
	} finally {
		clearTimeout(t);
	}
}
function imgHostOk(host) {
	const h = host.toLowerCase();
	if (!h || h === "localhost" || h.endsWith(".local") || h.endsWith(".internal")) return false;
	if (/^\d{1,3}(\.\d{1,3}){3}$/.test(h)) return false;
	return h === "ipfs.io" || h === "cf-ipfs.com" || h === "cloudflare-ipfs.com" || h === "arweave.net" || h === "gateway.irys.xyz" || h === "pbs.twimg.com" || h === "images.pump.fun" || h === "gmgn.ai" || h.endsWith(".mypinata.cloud") || h.endsWith(".ipfs.io") || h.endsWith(".myfilebase.com") || h.endsWith(".nftstorage.link") || h.endsWith(".pump.fun") || h.endsWith(".axiom-cdn.io") || h.endsWith(".imagedelivery.net");
}
function rewriteImgUrl(raw) {
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
	return new Response("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\"/>", {
		status: 200,
		headers: {
			"Content-Type": "image/svg+xml",
			"Cache-Control": "public, max-age=60"
		}
	});
}
function passthrough(body) {
	return new Response(body, {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
}
function deskScore(snap) {
	if (!snap || typeof snap !== "object") return -1;
	const s = snap;
	if (s.empty) return -1;
	const bag = s.bookBag || s.book || {};
	const br = s.brain || {};
	const f = br.funnel || {};
	return (bag.bought || 0) * 300 + (bag.sold || 0) * 300 + (bag.positions || []).length * 120 + (f.filled || 0) * 200 + (f.confirmed || 0) * 20 + (f.cleared || 0) * 8 + (f.scanned || 0) + (br.seen || 0) + (br.win || 0) * 50 + Math.round(Math.abs(+(bag.realized || 0)) * 20) + Object.keys(br.memory || {}).length + Object.keys(br.creators || {}).length * 3 + (br.lessons || []).length;
}
var Route = createFileRoute("/api/tape")({ server: { handlers: {
	GET: async ({ request }) => {
		const src = new URL(request.url).searchParams.get("src") || "";
		try {
			if (src === "hl-mids") {
				const r = await getJson("https://api.hyperliquid.xyz/info", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						...BROWSER
					},
					body: JSON.stringify({ type: "allMids" })
				});
				if (!r.ok) return Response.json({});
				return passthrough(r.body);
			}
			if (src === "hl-ctx") {
				const r = await getJson("https://api.hyperliquid.xyz/info", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						...BROWSER
					},
					body: JSON.stringify({ type: "metaAndAssetCtxs" })
				});
				if (!r.ok) return Response.json([]);
				return passthrough(r.body);
			}
			if (src === "binance") {
				for (const host of ["https://api.binance.com/api/v3/ticker/price", "https://api.binance.us/api/v3/ticker/price"]) {
					const r = await getJson(host, { headers: BROWSER });
					if (r.ok) return new Response(r.body, {
						status: 200,
						headers: {
							"Content-Type": "application/json",
							"X-Tape-Host": host.includes(".us") ? "us" : "com"
						}
					});
				}
				return Response.json([]);
			}
			if (src === "yahoo") {
				const sym = new URL(request.url).searchParams.get("sym") || "TSLA";
				if (!/^[A-Za-z0-9%^._-]{1,20}$/.test(sym)) return Response.json({ chart: { result: [] } });
				for (const host of ["https://query1.finance.yahoo.com/v8/finance/chart/", "https://query2.finance.yahoo.com/v8/finance/chart/"]) {
					const r = await getJson(host + encodeURIComponent(sym) + "?interval=1m&range=1d", { headers: BROWSER });
					if (r.ok && r.body.includes("regularMarketPrice")) return passthrough(r.body);
				}
				return Response.json({ chart: { result: [] } });
			}
			if (src === "pump") {
				const r = await getJson("https://frontend-api-v3.pump.fun/coins?offset=0&limit=20&sort=created_timestamp&order=DESC&includeNsfw=false", { headers: {
					...BROWSER,
					Origin: "https://pump.fun",
					Referer: "https://pump.fun/"
				} });
				if (!r.ok) return Response.json([]);
				return passthrough(r.body);
			}
			if (src === "pump-hot") {
				const r = await getJson("https://frontend-api-v3.pump.fun/coins?offset=0&limit=24&sort=last_trade_timestamp&order=DESC&includeNsfw=false", { headers: {
					...BROWSER,
					Origin: "https://pump.fun",
					Referer: "https://pump.fun/"
				} });
				if (!r.ok) return Response.json([]);
				return passthrough(r.body);
			}
			if (src === "pump-mcap") {
				const r = await getJson("https://frontend-api-v3.pump.fun/coins?offset=0&limit=24&sort=market_cap&order=DESC&includeNsfw=false", { headers: {
					...BROWSER,
					Origin: "https://pump.fun",
					Referer: "https://pump.fun/"
				} });
				if (!r.ok) return Response.json([]);
				return passthrough(r.body);
			}
			if (src === "pump-live") {
				const r = await getJson("https://frontend-api-v3.pump.fun/coins/currently-live", { headers: {
					...BROWSER,
					Origin: "https://pump.fun",
					Referer: "https://pump.fun/"
				} });
				if (!r.ok) return Response.json([]);
				try {
					const d = JSON.parse(r.body);
					return Response.json(Array.isArray(d) ? d.slice(0, 24) : []);
				} catch {
					return Response.json([]);
				}
			}
			if (src === "pump-bonded") {
				const r = await getJson("https://frontend-api-v3.pump.fun/coins?offset=0&limit=30&sort=last_trade_timestamp&order=DESC&includeNsfw=false&complete=true", { headers: {
					...BROWSER,
					Origin: "https://pump.fun",
					Referer: "https://pump.fun/"
				} });
				if (!r.ok) return Response.json([]);
				return passthrough(r.body);
			}
			if (src === "img") {
				const parsed = rewriteImgUrl(new URL(request.url).searchParams.get("u") || "");
				if (!parsed || parsed.protocol !== "https:" || !imgHostOk(parsed.hostname)) return emptyImg();
				const ac = new AbortController();
				const t = setTimeout(() => ac.abort(), 5e3);
				try {
					const r = await fetch(parsed.toString(), {
						headers: {
							"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
							Accept: "image/avif,image/webp,image/*,*/*;q=0.8"
						},
						signal: ac.signal
					});
					if (!r.ok) return emptyImg();
					const ct = (r.headers.get("content-type") || "").split(";")[0].trim();
					if (!ct.startsWith("image/")) return emptyImg();
					const buf = await r.arrayBuffer();
					if (buf.byteLength > 15e5) return emptyImg();
					return new Response(buf, {
						status: 200,
						headers: {
							"Content-Type": ct,
							"Cache-Control": "public, max-age=300"
						}
					});
				} catch {
					return emptyImg();
				} finally {
					clearTimeout(t);
				}
			}
			if (src === "pump-trades") {
				const mint = new URL(request.url).searchParams.get("mint") || "";
				if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(mint)) return Response.json({ trades: [] });
				const r = await getJson("https://swap-api.pump.fun/v2/coins/" + encodeURIComponent(mint) + "/trades?limit=20", { headers: {
					...BROWSER,
					Origin: "https://pump.fun",
					Referer: "https://pump.fun/"
				} });
				if (!r.ok) return Response.json({ trades: [] });
				return passthrough(r.body);
			}
			if (src === "pump-holders") {
				const mint = new URL(request.url).searchParams.get("mint") || "";
				if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(mint)) return Response.json([]);
				const r = await getJson("https://frontend-api-v3.pump.fun/coins/" + encodeURIComponent(mint) + "/holders?limit=50&offset=0", { headers: {
					...BROWSER,
					Origin: "https://pump.fun",
					Referer: "https://pump.fun/"
				} });
				if (!r.ok) return Response.json([]);
				return passthrough(r.body);
			}
			if (src === "pump-coin") {
				const mint = new URL(request.url).searchParams.get("mint") || "";
				if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(mint)) return Response.json({});
				const r = await getJson("https://frontend-api-v3.pump.fun/coins/" + encodeURIComponent(mint), { headers: {
					...BROWSER,
					Origin: "https://pump.fun",
					Referer: "https://pump.fun/"
				} });
				if (!r.ok) return Response.json({});
				return passthrough(r.body);
			}
			if (src === "dex-search") {
				const q = new URL(request.url).searchParams.get("q") || "pumpfun";
				if (!/^[A-Za-z0-9 _-]{1,40}$/.test(q)) return Response.json({ pairs: [] });
				const r = await getJson("https://api.dexscreener.com/latest/dex/search?q=" + encodeURIComponent(q), { headers: BROWSER });
				if (!r.ok) return Response.json({ pairs: [] });
				return passthrough(r.body);
			}
			if (src === "dex-boosts") {
				const r = await getJson("https://api.dexscreener.com/token-boosts/top/v1", { headers: BROWSER });
				if (!r.ok) return Response.json([]);
				return passthrough(r.body);
			}
			if (src === "dex-token") {
				const mint = new URL(request.url).searchParams.get("mint") || "";
				if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(mint)) return Response.json({ pairs: [] });
				const r = await getJson("https://api.dexscreener.com/latest/dex/tokens/" + encodeURIComponent(mint), { headers: BROWSER });
				if (!r.ok) return Response.json({ pairs: [] });
				return passthrough(r.body);
			}
			if (src === "x-follow") {
				const u = (new URL(request.url).searchParams.get("u") || "").replace(/^@/, "");
				if (!/^[A-Za-z0-9_]{1,15}$/.test(u)) return Response.json([]);
				const r = await getJson("https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=" + encodeURIComponent(u), { headers: {
					...BROWSER,
					Accept: "application/json",
					Referer: "https://platform.twitter.com/"
				} });
				if (!r.ok) return Response.json([]);
				return passthrough(r.body);
			}
			if (src === "desk") try {
				const fs = await import("node:fs/promises");
				const file = (await import("node:path")).join(process.cwd(), "data", "desk.json");
				return passthrough(await fs.readFile(file, "utf8"));
			} catch {
				return Response.json({
					savedAt: 0,
					empty: true
				});
			}
			return Response.json({ error: "unknown src" });
		} catch {
			return Response.json({});
		}
	},
	POST: async ({ request }) => {
		if ((new URL(request.url).searchParams.get("src") || "") !== "desk") return Response.json({ ok: false }, { status: 404 });
		const text = await request.text();
		if (!text || text.length > 18e5) return Response.json({
			ok: false,
			err: "too large"
		}, { status: 413 });
		let incoming;
		try {
			incoming = JSON.parse(text);
		} catch {
			return Response.json({
				ok: false,
				err: "bad json"
			}, { status: 400 });
		}
		try {
			const fs = await import("node:fs/promises");
			const path = await import("node:path");
			const file = path.join(process.cwd(), "data", "desk.json");
			await fs.mkdir(path.dirname(file), { recursive: true });
			try {
				const prev = JSON.parse(await fs.readFile(file, "utf8"));
				if (deskScore(incoming) < deskScore(prev)) return Response.json({
					ok: true,
					kept: true
				});
			} catch {}
			await fs.writeFile(file, text, "utf8");
		} catch {}
		return Response.json({ ok: true });
	}
} } });
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	ApiDeskRoute: Route$1.update({
		id: "/api/desk",
		path: "/api/desk",
		getParentRoute: () => Route$3
	}),
	ApiTapeRoute: Route.update({
		id: "/api/tape",
		path: "/api/tape",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { getRouter };
