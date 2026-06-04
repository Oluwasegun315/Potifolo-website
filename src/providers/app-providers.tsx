"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PortfolioChat } from "@/components/chat/portfolio-chat";
import { BackToTop } from "@/components/layout/back-to-top";

/** Performance-first: no smooth scroll, particles, cursor FX, or loading gate */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative z-10 min-h-screen">{children}</main>
      <Footer />
      <PortfolioChat />
      <BackToTop />
    </>
  );
}
