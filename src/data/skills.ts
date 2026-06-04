import {
  LayoutTemplate,
  Server,
  Database,
  Shield,
  Zap,
  ShoppingBag,
  Filter,
  Cpu,
} from "lucide-react";

export type SkillCategory = {
  slug: string;
  title: string;
  description: string;
  icon: typeof LayoutTemplate;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    description: "End-to-end web products — UI, APIs, databases, and deployment.",
    icon: LayoutTemplate,
    skills: ["Next.js", "React", "TypeScript", "Node.js", "REST APIs", "Vercel"],
  },
  {
    slug: "frontend-excellence",
    title: "Frontend Excellence",
    description: "Premium interfaces that feel fast, polished, and conversion-ready.",
    icon: Zap,
    skills: ["Tailwind CSS", "Responsive UI", "Component systems", "Accessibility", "Figma handoff"],
  },
  {
    slug: "backend-architecture",
    title: "Backend & APIs",
    description: "Secure backends, auth, payments, and integrations that scale.",
    icon: Server,
    skills: ["Node.js", "Supabase", "Stripe", "Webhooks", "Auth flows", "API design"],
  },
  {
    slug: "database-design",
    title: "Database & Data",
    description: "Structured data models and real-time features built to last.",
    icon: Database,
    skills: ["PostgreSQL", "Supabase", "Schema design", "Migrations", "Row-level security"],
  },
  {
    slug: "ecommerce-funnels",
    title: "E-commerce & Funnels",
    description: "Stores and funnels engineered to convert visitors into buyers.",
    icon: ShoppingBag,
    skills: ["Shopify", "Checkout UX", "Landing pages", "A/B-ready layouts", "Cart recovery"],
  },
  {
    slug: "automation-growth",
    title: "Automation & Growth",
    description: "Workflows and systems that save time and grow revenue after launch.",
    icon: Cpu,
    skills: ["Zapier", "Make.com", "Email automation", "CRM sync", "Analytics setup"],
  },
  {
    slug: "security-performance",
    title: "Security & Performance",
    description: "Production-ready apps that stay fast, safe, and reliable.",
    icon: Shield,
    skills: ["Auth hardening", "Core Web Vitals", "SEO basics", "Error handling", "Monitoring"],
  },
  {
    slug: "brand-strategy",
    title: "Brand & Strategy",
    description: "Positioning and messaging that make your digital presence unforgettable.",
    icon: Filter,
    skills: ["Brand voice", "UX strategy", "Content structure", "Conversion copy", "Visual systems"],
  },
];
