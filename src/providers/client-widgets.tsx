"use client";

import dynamic from "next/dynamic";

const FloatingDock = dynamic(
  () => import("@/components/layout/floating-dock").then((m) => m.FloatingDock),
  { ssr: false, loading: () => null }
);

export function ClientWidgets() {
  return <FloatingDock />;
}
