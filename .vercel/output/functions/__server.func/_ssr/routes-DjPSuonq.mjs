import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DjPSuonq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function extractBody(html) {
	const m = String(html || "").match(/<body[^>]*>([\s\S]*)<\/body>/i);
	return (m ? m[1] : String(html || "")).replace(/<script\b[\s\S]*?<\/script>/gi, "");
}
function pitHost() {
	let host = document.getElementById("gs-pit-root");
	if (!host) {
		host = document.createElement("div");
		host.id = "gs-pit-root";
		host.className = "gs-host";
		document.body.appendChild(host);
	}
	return host;
}
function pitLive() {
	const w = window;
	const host = document.getElementById("gs-pit-root");
	if (!host || !host.querySelector("#app")) return false;
	if (!host.querySelector("#eqBig") || !host.querySelector("#pitWall")) return false;
	return !!(w.__gsBooted || w.__gsInnerBoot) && !w.__gsKill;
}
var bootOnce = null;
function ensurePit() {
	if (typeof window === "undefined") return Promise.resolve();
	if (pitLive()) return Promise.resolve();
	if (bootOnce) return bootOnce;
	bootOnce = (async () => {
		if (pitLive()) return;
		const host = pitHost();
		const [{ bootFloor, stopFloor }, res] = await Promise.all([import("./floor-boot-Cgbs-r1T.mjs"), fetch("/floor.html", { cache: "no-store" })]);
		if (pitLive()) return;
		if (host.querySelector("#app")) {
			try {
				stopFloor();
			} catch (_) {}
			const w = window;
			w.__gsBooted = false;
			w.__gsInnerBoot = false;
		}
		const body = extractBody(res.ok ? await res.text() : "");
		if (!body.includes("id=\"app\"")) throw new Error("pit markup missing");
		if (pitLive()) return;
		host.innerHTML = body;
		bootFloor();
		window.__gsBooted = true;
	})().catch((err) => {
		bootOnce = null;
		console.error(err);
	});
	return bootOnce;
}
function FloorHost() {
	(0, import_react.useLayoutEffect)(() => {
		ensurePit();
	}, []);
	return null;
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "sr-only",
		children: "GROKSTREET paper trading pit — live send off"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloorHost, {})] });
}
//#endregion
export { Home as component };
