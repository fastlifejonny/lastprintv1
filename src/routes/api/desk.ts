import { createFileRoute } from "@tanstack/react-router";

let memory: unknown = null;

export const Route = createFileRoute("/api/desk")({
  server: {
    handlers: {
      GET: async () => Response.json(memory || { savedAt: 0, empty: true }),
      POST: async ({ request }) => {
        try {
          memory = await request.json();
        } catch {
          return Response.json({ ok: false }, { status: 400 });
        }
        return Response.json({ ok: true, savedAt: Date.now() });
      },
    },
  },
});
