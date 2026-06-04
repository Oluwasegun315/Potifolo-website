"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingCta() {
  return (
    <Link
      href="/hire-me"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full accent-gradient shadow-[0_0_30px_rgba(139,92,246,0.45)] transition-transform hover:scale-105"
      aria-label="Hire me — start a project"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Link>
  );
}
