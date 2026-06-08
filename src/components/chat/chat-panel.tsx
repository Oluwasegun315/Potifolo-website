"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import { X, Sparkles } from "lucide-react";
import {
  chatQuickActions,
  chatWelcome,
  getChatReply,
  type ChatMessage,
} from "@/lib/chat-assistant";
import { ChatMessageBubble } from "./chat-message-bubble";
import { ChatInputForm } from "./chat-input-form";
import { ScrollArea } from "@/components/ui/scroll-area";

type ChatPanelProps = {
  onClose: () => void;
};

type MessageItem = ChatMessage & { id: number };

export const ChatPanel = memo(function ChatPanel({ onClose }: ChatPanelProps) {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<MessageItem[]>([
    { id: 0, role: "assistant", content: chatWelcome },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  }, [messages.length, loading]);

  const sendMessage = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userId = idRef.current++;
    const userMsg: MessageItem = { id: userId, role: "user", content: trimmed };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    // Client-side reply — no fetch, no main-thread block from network
    queueMicrotask(() => {
      const reply = getChatReply(trimmed);
      const assistantId = idRef.current++;
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: reply },
      ]);
      setLoading(false);
    });
  }, [loading]);

  const showQuickActions = messages.length <= 2;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex h-[min(520px,85vh)] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-violet-500/25 bg-white shadow-[0_20px_60px_rgba(139,92,246,0.18)] dark:border-violet-500/25 dark:bg-[#12101c] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      role="dialog"
      aria-label="Portfolio assistant chat"
    >
      <div className="flex items-center justify-between border-b border-violet-500/15 bg-gradient-to-r from-violet-100 to-fuchsia-50 px-4 py-3 dark:border-white/10 dark:from-violet-600/40 dark:to-fuchsia-600/30">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/15 dark:bg-white/10">
            <Sparkles className="h-4 w-4 text-violet-600 dark:text-cyan-300" />
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">Project Assistant</p>
            <p className="text-[10px] text-zinc-600 dark:text-white/60">Instant answers</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-1.5 text-zinc-600 hover:bg-violet-500/10 hover:text-zinc-900 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Close chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <ScrollArea className="flex-1 bg-zinc-50/50 dark:bg-transparent">
        <div ref={scrollRef} className="space-y-3 p-4">
          {messages.map((msg) => (
            <ChatMessageBubble key={msg.id} role={msg.role} content={msg.content} />
          ))}
          {loading && (
            <div className="mr-auto rounded-2xl border border-violet-500/15 bg-violet-50 px-4 py-3 text-xs text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/50">
              Typing…
            </div>
          )}
        </div>
      </ScrollArea>

      {showQuickActions && (
        <div className="flex flex-wrap gap-2 border-t border-violet-500/10 bg-white px-3 py-2 dark:border-white/[0.06] dark:bg-transparent">
          {chatQuickActions.map((action) => (
            <button
              key={action.label}
              type="button"
              onClick={() => sendMessage(action.message)}
              className="rounded-full border border-violet-500/30 bg-violet-50 px-3 py-1 text-[11px] font-medium text-violet-700 hover:bg-violet-100 dark:bg-violet-500/10 dark:text-violet-200 dark:hover:bg-violet-500/20"
            >
              {action.label}
            </button>
          ))}
        </div>
      )}

      <ChatInputForm loading={loading} onSend={sendMessage} />
    </div>
  );
});
