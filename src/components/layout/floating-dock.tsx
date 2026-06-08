"use client";

import dynamic from "next/dynamic";
import { useState, startTransition } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { cn } from "@/lib/utils";

const ChatPanel = dynamic(() => import("@/components/chat/chat-panel").then((m) => m.ChatPanel), {
  ssr: false,
  loading: () => null,
});

/** Single premium dock — chat + optional back-to-top (no stacked circles) */
export function FloatingDock() {
  const [open, setOpen] = useState(false);
  const showTop = useScrollThreshold(500);

  if (open) {
    return <ChatPanel onClose={() => startTransition(() => setOpen(false))} />;
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex flex-col items-stretch gap-1 rounded-2xl border p-1.5 shadow-lg backdrop-blur-md",
        "border-violet-500/20 bg-white/95 shadow-violet-500/10",
        "dark:border-white/10 dark:bg-[#12101c]/95 dark:shadow-black/40"
      )}
    >
      {showTop && (
        <>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-violet-600 transition-colors hover:bg-violet-500/10 dark:text-violet-300 dark:hover:bg-white/10"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          <div className="mx-2 h-px bg-violet-500/15 dark:bg-white/10" />
        </>
      )}
      <button
        type="button"
        onClick={() => startTransition(() => setOpen(true))}
        className="flex h-11 w-11 items-center justify-center rounded-xl accent-gradient shadow-[0_4px_18px_rgba(139,92,246,0.35)] transition-transform hover:scale-[1.03]"
        aria-label="Open project assistant chat"
      >
        <MessageCircle className="h-5 w-5 text-white" />
      </button>
    </div>
  );
}
