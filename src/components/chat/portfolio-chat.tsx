"use client";

import dynamic from "next/dynamic";
import { useState, startTransition } from "react";
import { MessageCircle } from "lucide-react";

const ChatPanel = dynamic(() => import("./chat-panel").then((m) => m.ChatPanel), {
  ssr: false,
  loading: () => null,
});

export function PortfolioChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => startTransition(() => setOpen(true))}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full accent-gradient shadow-[0_0_35px_rgba(139,92,246,0.5)]"
          aria-label="Open project assistant chat"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}

      {open && <ChatPanel onClose={() => startTransition(() => setOpen(false))} />}
    </>
  );
}
