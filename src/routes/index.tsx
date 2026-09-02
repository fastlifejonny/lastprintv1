import { createFileRoute } from "@tanstack/react-router";
import { FloorHost } from "@/components/floor-host";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <h1 className="sr-only">LASTPRINT paper trading pit — live send off</h1>
      <FloorHost />
    </>
  );
}
