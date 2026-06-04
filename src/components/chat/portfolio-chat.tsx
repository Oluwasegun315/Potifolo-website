"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, Send, X, Sparkles } from "lucide-react";
import { chatQuickActions, chatWelcome, type ChatMessage } from "@/lib/chat-assistant";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function renderMarkdownLite(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: chatWelcome },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: ChatMessage = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? "Thanks — please try the Hire Me page for a direct reply." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I'm having trouble connecting. Email **${siteConfig.email}** or open **Hire Me** — Idowu replies within 24 hours.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [loading, messages]);

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full accent-gradient shadow-[0_0_35px_rgba(139,92,246,0.5)] transition-transform hover:scale-105"
          aria-label="Open project assistant chat"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}

      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 flex h-[min(520px,85vh)] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-violet-500/25 bg-[#12101c] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          role="dialog"
          aria-label="Portfolio assistant chat"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-violet-600/40 to-fuchsia-600/30 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <Sparkles className="h-4 w-4 text-cyan-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Project Assistant</p>
                <p className="text-[10px] text-white/60">Typically replies instantly</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                  msg.role === "user"
                    ? "ml-auto bg-violet-600/80 text-white"
                    : "mr-auto border border-white/[0.08] bg-white/[0.04] text-white/75"
                )}
              >
                {renderMarkdownLite(msg.content)}
              </div>
            ))}
            {loading && (
              <div className="mr-auto flex gap-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400 [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400 [animation-delay:300ms]" />
              </div>
            )}
          </div>

          {messages.length <= 2 && (
            <div className="flex flex-wrap gap-2 border-t border-white/[0.06] px-3 py-2">
              {chatQuickActions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  onClick={() => sendMessage(action.message)}
                  className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-200 hover:bg-violet-500/20"
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}

          <div className="border-t border-white/10 p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about services, timeline, hire…"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-violet-500/50 focus:outline-none"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl accent-gradient text-white disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-2 flex flex-wrap gap-2 text-center">
              <Link
                href="/hire-me"
                className="text-[10px] font-medium text-accent hover:underline"
              >
                Hire Me →
              </Link>
              <span className="text-white/20">·</span>
              <Link
                href="/contact"
                className="text-[10px] font-medium text-white/50 hover:text-accent"
              >
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
        </div>
      )}
    </>
  );
}
