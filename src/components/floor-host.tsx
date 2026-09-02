import { useLayoutEffect } from "react";

function extractBody(html: string) {
  const m = String(html || "").match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const inner = m ? m[1] : String(html || "");
  return inner.replace(/<script\b[\s\S]*?<\/script>/gi, "");
}

function pitHost(): HTMLDivElement {
  let host = document.getElementById("gs-pit-root") as HTMLDivElement | null;
  if (!host) {
    host = document.createElement("div");
    host.id = "gs-pit-root";
    host.className = "gs-host";
    document.body.appendChild(host);
  }
  return host;
}

type GsWindow = Window & {
  __gsBooted?: boolean;
  __gsInnerBoot?: boolean;
  __gsKill?: boolean;
  __gsForceBoot?: boolean;
  __gsClean?: () => void;
};

export function FloorHost() {
  useLayoutEffect(() => {
    const w = window as GsWindow;
    let booting = false;
    const boot = async () => {
      if (booting) return;
      booting = true;
      try {
        try { w.__gsClean?.(); } catch (_) {}
        w.__gsKill = false;
        w.__gsForceBoot = true;
        w.__gsBooted = false;
        w.__gsInnerBoot = false;
        const host = pitHost();
        const [{ bootFloor, stopFloor }, res] = await Promise.all([
          import("@/lib/floor-boot"),
          fetch("/floor.html", { cache: "no-store" }),
        ]);
        try { stopFloor(); } catch (_) {}
        w.__gsKill = false;
        w.__gsForceBoot = true;
        const html = res.ok ? await res.text() : "";
        const body = extractBody(html);
        if (!body.includes('id="app"')) throw new Error("pit markup missing");
        host.innerHTML = body;
        bootFloor();
        w.__gsBooted = true;
        w.__gsBeat = Date.now();
      } catch (err) {
        console.error("LASTPRINT boot", err);
      } finally {
        booting = false;
      }
    };
    void boot();
    const id = window.setInterval(() => {
      const beat = w.__gsBeat || 0;
      if (Date.now() - beat > 30000) void boot();
    }, 8000);
    return () => window.clearInterval(id);
  }, []);
  return null;
}