"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingCta } from "@/components/layout/floating-cta";

/** Performance-first: no smooth scroll, particles, cursor FX, or loading gate */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative z-10 min-h-screen">{children}</main>
      <Footer />
      <FloatingCta />
    </>
  );
}
