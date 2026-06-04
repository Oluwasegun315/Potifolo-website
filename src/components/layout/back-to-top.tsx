"use client";

import { ArrowUp } from "lucide-react";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";

export function BackToTop() {
  const visible = useScrollThreshold(500);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
      className="fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#12101c]/90 text-white/70 backdrop-blur-sm hover:border-accent hover:text-accent"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
