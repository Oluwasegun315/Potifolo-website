import { faqs } from "@/data/faq";
import { services } from "@/data/services";
import { siteConfig, stats } from "@/data/site";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const quickTopics = [
  { keys: ["price", "pricing", "budget", "cost", "how much", "rate", "charge"], id: "pricing" },
  { keys: ["timeline", "how long", "duration", "weeks", "deadline", "when"], id: "timeline" },
  { keys: ["service", "what do you", "offer", "build", "help with", "do you do"], id: "services" },
  { keys: ["hire", "start", "work together", "project", "contact", "book"], id: "hire" },
  { keys: ["project", "portfolio", "work", "example", "sample", "oluwasegun", "store"], id: "projects" },
  { keys: ["skill", "stack", "tech", "next.js", "full stack", "developer"], id: "skills" },
  { keys: ["trust", "reliable", "safe", "legit", "why you", "choose"], id: "trust" },
  { keys: ["email", "gmail", "mail", "contact", "reach you", "call"], id: "contact" },
  { keys: ["hello", "hi", "hey", "good morning", "good evening"], id: "greeting" },
];

function matchTopic(text: string): string | null {
  const lower = text.toLowerCase();
  for (const topic of quickTopics) {
    if (topic.keys.some((k) => lower.includes(k))) return topic.id;
  }
  return null;
}

function matchFaq(text: string): string | null {
  const lower = text.toLowerCase();
  for (const item of faqs) {
    const words = item.question.toLowerCase().split(/\s+/).filter((w) => w.length > 4);
    if (words.some((w) => lower.includes(w))) return item.answer;
  }
  return null;
}

const replies: Record<string, string> = {
  greeting: `Hi — I'm ${siteConfig.name}'s assistant. I can help with services, timelines, pricing approach, and how to start a project. What are you looking to build?`,

  pricing: `Investment depends on scope (pages, store, integrations, automation). Most client sites land in structured milestone payments so you stay in control. For a tailored quote, use the **Hire Me** form — you'll get a reply within 24 hours. Fair pricing for premium work is part of my commitment.`,

  timeline: `Typical launches run **${stats.find((s) => s.label === "Go-Live Speed")?.value}${stats.find((s) => s.label === "Go-Live Speed")?.suffix ?? ""}** after kickoff, depending on content and features. We'll agree on clear milestones (design → build → launch) before work starts.`,

  services: `I deliver end-to-end as a full-stack developer:\n\n${services
    .slice(0, 6)
    .map((s) => `• **${s.title}** — ${s.description}`)
    .join("\n")}\n\nWant the full list? Visit the Services page or tell me your industry.`,

  hire: `Great — here's the fastest path:\n\n1. Open **/hire-me** and submit your project brief\n2. Or email **${siteConfig.email}**\n3. Or use WhatsApp from the Contact page\n\nI'll respond within **24 hours** with next steps and a realistic plan.`,

  projects: `You can review real work on the **Projects** page — including **Oluwasegun Clothing Hub**, a live e-commerce store on Vercel. I focus on premium UI, solid backends, and launches that convert — not template sites.`,

  skills: `Core stack: ${siteConfig.role.split("|").slice(0, 3).join(", ")}. See the **Skills** page for full-stack, frontend, backend, e-commerce, and automation details. Everything is built to be fast, secure, and maintainable.`,

  trust: `Clients work with me for clear communication, premium finish, and production-ready code. Rated **${stats.find((s) => s.label === "Client Rating")?.value}${stats.find((s) => s.label === "Client Rating")?.suffix ?? ""}**, **${stats.find((s) => s.label === "Happy Clients")?.value}${stats.find((s) => s.label === "Happy Clients")?.suffix ?? ""}** happy clients, and live projects you can verify before hiring.`,
};

export function getChatReply(userMessage: string): string {
  const trimmed = userMessage.trim();
  if (!trimmed) {
    return "Ask me about services, timeline, pricing, or how to hire Idowu for your project.";
  }

  const faqAnswer = matchFaq(trimmed);
  if (faqAnswer) return faqAnswer;

  const topic = matchTopic(trimmed);
  if (topic && replies[topic]) return replies[topic];

  return `Thanks for your message. For "${trimmed.slice(0, 40)}${trimmed.length > 40 ? "…" : ""}" — the best next step is a quick project brief on **Hire Me** or email **${siteConfig.email}**. I typically reply within 24h with timeline, approach, and honest pricing guidance.`;
}

export const chatQuickActions = [
  { label: "Email me", message: "What is your email address?" },
  { label: "Services", message: "What services do you offer?" },
  { label: "Timeline", message: "How long does a project take?" },
  { label: "Hire you", message: "I want to hire you for a project" },
];

export const chatWelcome = `Welcome — I'm here to help you explore working with **${siteConfig.name}** (${siteConfig.experience}). Ask about services, timelines, live projects, or how to start.`;
