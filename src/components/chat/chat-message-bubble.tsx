import { memo } from "react";
import { cn } from "@/lib/utils";

function formatText(text: string) {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1");
}

type ChatMessageBubbleProps = {
  role: "user" | "assistant";
  content: string;
};

export const ChatMessageBubble = memo(function ChatMessageBubble({
  role,
  content,
}: ChatMessageBubbleProps) {
  return (
    <div
      className={cn(
        "max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
        role === "user"
          ? "ml-auto bg-violet-600/80 text-white"
          : "mr-auto border border-white/[0.08] bg-white/[0.04] text-white/75"
      )}
    >
      {formatText(content)}
    </div>
  );
});
