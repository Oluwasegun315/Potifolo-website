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
    <div className="border-t border-violet-500/15 bg-white p-3 dark:border-white/10 dark:bg-transparent">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          defaultValue=""
          onInput={(e) => setCanSend(e.currentTarget.value.trim().length > 0)}
          placeholder="Ask about services, timeline, hire…"
          className="flex-1 rounded-xl border border-violet-500/25 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500/60 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-violet-500/50"
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
      <div className="mt-2 space-y-1 text-center">
        <a
          href={`mailto:${siteConfig.email}`}
          className="block truncate text-[11px] font-medium text-violet-700 hover:text-violet-900 dark:text-violet-300 dark:hover:text-accent"
        >
          {siteConfig.email}
        </a>
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            href="/hire-me"
            className="text-[10px] font-medium text-violet-700 hover:underline dark:text-accent"
          >
            Hire Me
          </Link>
          <span className="text-zinc-300 dark:text-white/20">·</span>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-medium text-zinc-500 hover:text-violet-700 dark:text-white/50 dark:hover:text-accent"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
});
