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
            <p className="text-[10px] text-white/60">Instant answers</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
          aria-label="Close chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4 overscroll-contain">
        {messages.map((msg) => (
          <ChatMessageBubble key={msg.id} role={msg.role} content={msg.content} />
        ))}
        {loading && (
          <div className="mr-auto rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/50">
            Typing…
          </div>
        )}
      </div>

      {showQuickActions && (
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

      <ChatInputForm loading={loading} onSend={sendMessage} />
    </div>
  );
});
