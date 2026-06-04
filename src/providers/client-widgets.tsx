"use client";

import dynamic from "next/dynamic";

const PortfolioChat = dynamic(
  () => import("@/components/chat/portfolio-chat").then((m) => m.PortfolioChat),
  { ssr: false, loading: () => null }
);

const BackToTop = dynamic(
  () => import("@/components/layout/back-to-top").then((m) => m.BackToTop),
  { ssr: false, loading: () => null }
);

export function ClientWidgets() {
  return (
    <>
      <PortfolioChat />
      <BackToTop />
    </>
  );
}
