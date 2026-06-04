import { NextResponse } from "next/server";
import { getChatReply, type ChatMessage } from "@/lib/chat-assistant";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages = (body.messages ?? []) as ChatMessage[];
    const lastUser = [...messages].reverse().find((m) => m.role === "user");

    if (!lastUser?.content?.trim()) {
      return NextResponse.json(
        { reply: "Please type a question — I'm here to help with your project." },
        { status: 400 }
      );
    }

    const reply = getChatReply(lastUser.content);
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      {
        reply:
          "Something went wrong on my side. Please use the Hire Me page or email hello@idowuelijah.com — you'll get a personal reply within 24 hours.",
      },
      { status: 500 }
    );
  }
}
