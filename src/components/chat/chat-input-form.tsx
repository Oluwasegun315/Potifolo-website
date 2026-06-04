"use client";

import { memo, useRef, useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { siteConfig } from "@/data/site";

type ChatInputFormProps = {
  loading: boolean;
  onSend: (text: string) => void;
};

/** Isolated input — typing does not re-render the message list (fixes INP lag) */
export const ChatInputForm = memo(function ChatInputForm({ loading, onSend }: ChatInputFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [canSend, setCanSend] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value.trim() ?? "";
    if (!value || loading) return;
    onSend(value);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setCanSend(false);
  };

  return (
    <div className="border-t border-white/10 p-3">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          defaultValue=""
          onInput={(e) => setCanSend(e.currentTarget.value.trim().length > 0)}
          placeholder="Ask about services, timeline, hire…"
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-violet-500/50 focus:outline-none"
          disabled={loading}
          autoComplete="off"
          spellCheck={false}
        />
        <button
          type="submit"
          disabled={loading || !canSend}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl accent-gradient text-white disabled:opacity-40"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
      <div className="mt-2 flex flex-wrap gap-2 text-center">
        <Link href="/hire-me" className="text-[10px] font-medium text-accent hover:underline">
          Hire Me
        </Link>
        <span className="text-white/20">·</span>
        <Link href="/contact" className="text-[10px] font-medium text-white/50 hover:text-accent">
          Contact
        </Link>
        <span className="text-white/20">·</span>
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-medium text-white/50 hover:text-accent"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
});
