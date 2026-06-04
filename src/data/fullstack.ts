import type { LucideIcon } from "lucide-react";
import {
  LayoutTemplate,
  Server,
  Database,
  Rocket,
  Shield,
  Zap,
} from "lucide-react";

export type StackLayer = {
  title: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
};

export const fullStackLayers: StackLayer[] = [
  {
    title: "Frontend",
    description: "Premium UI, responsive layouts, and fast client experiences.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: LayoutTemplate,
  },
  {
    title: "Backend & APIs",
    description: "Auth, payments, webhooks, and business logic that scales.",
    skills: ["Node.js", "REST APIs", "Supabase", "Stripe"],
    icon: Server,
  },
  {
    title: "Database & Data",
    description: "Structured data, real-time features, and secure storage.",
    skills: ["PostgreSQL", "Supabase", "Prisma", "Firebase"],
    icon: Database,
  },
];

export const fullStackPillars = [
  {
    title: "Design to Deploy",
    description: "One partner from wireframe to production — no handoff gaps.",
    icon: Rocket,
  },
  {
    title: "Secure by Default",
    description: "Auth flows, validation, and safe API patterns built in.",
    icon: Shield,
  },
  {
    title: "Built for Speed",
    description: "Optimized Next.js apps that load fast and rank well.",
    icon: Zap,
  },
];
