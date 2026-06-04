export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  technologies: string[];
  results: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  /** Your own build — shows a badge on cards */
  isOwn?: boolean;
  gradient: string;
};

export const projectCategories = [
  "All",
  "Web Development",
  "E-commerce",
  "Funnels",
  "Automation",
  "Branding",
];

export const projects: Project[] = [
  {
    slug: "oluwasegun-clothing-hub",
    title: "Oluwasegun Clothing Hub",
    description:
      "Full streetwear e-commerce hub — men's, kids', and trending drops with real inventory photos and USD checkout.",
    longDescription:
      "Designed and built Oluwasegun Clothing Hub from the ground up — a premium clothing store experience with category worlds (Men, Kids, Streetwear), curated style edits, auto-sliding product rails, promo code integration (OLUWASEGUN10), and a boutique feel that rivals top fashion sites. Every listing uses real rack photography, clear USD pricing, and a conversion-focused shop flow deployed live on Vercel.",
    category: "E-commerce",
    image: "/projects/oluwasegun-clothing-hub.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    results: ["80+ products live", "3 shop categories", "Live production site"],
    live: "https://oluwasegun-clothing-hub-h1n7.vercel.app/",
    featured: true,
    isOwn: true,
    gradient: "from-violet-600/30 to-fuchsia-500/15",
  },
  {
    slug: "luxury-ecommerce-revamp",
    title: "Luxury E-commerce Revamp",
    description:
      "Premium storefront redesign with conversion-focused UX and automated fulfillment flows.",
    longDescription:
      "Transformed a stagnant fashion brand into a high-converting luxury e-commerce experience with custom product storytelling, optimized checkout, and integrated email automation.",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Next.js", "Shopify", "Stripe", "Klaviyo"],
    results: ["+142% revenue", "3.2x conversion rate", "48% cart recovery"],
    live: "#",
    gradient: "from-violet-500/25 to-fuchsia-500/10",
  },
  {
    slug: "saas-funnel-system",
    title: "SaaS Funnel System",
    description:
      "End-to-end acquisition funnel with landing pages, webinars, and CRM automation.",
    longDescription:
      "Built a multi-step funnel ecosystem for a B2B SaaS startup — from awareness ads to onboarding sequences — driving predictable pipeline growth.",
    category: "Funnels",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "GoHighLevel", "Zapier", "Analytics"],
    results: ["+89% qualified leads", "2.1x demo bookings", "$120K MRR path"],
    live: "#",
    featured: true,
    gradient: "from-fuchsia-500/25 to-pink-500/10",
  },
  {
    slug: "brand-automation-hub",
    title: "Brand Automation Hub",
    description:
      "Centralized automation platform connecting CRM, email, and social workflows.",
    longDescription:
      "Designed and implemented a custom automation hub that eliminated manual ops for a growing agency — saving 30+ hours weekly.",
    category: "Automation",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Make.com", "Airtable", "API", "Webhooks"],
    results: ["30hrs/week saved", "99.2% uptime", "Zero manual handoffs"],
    live: "#",
    gradient: "from-purple-500/25 to-violet-600/10",
  },
  {
    slug: "creator-portfolio-platform",
    title: "Creator Portfolio Platform",
    description:
      "Award-worthy portfolio with cinematic motion and 3D interactions.",
    longDescription:
      "Crafted an immersive personal brand site with scroll-driven storytelling, WebGL accents, and premium micro-interactions.",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Next.js", "GSAP", "Three.js", "Framer Motion"],
    results: ["Viral launch", "10K+ visits week 1", "Featured on communities"],
    live: "#",
    featured: true,
    gradient: "from-pink-500/25 to-violet-500/10",
  },
  {
    slug: "fitness-brand-growth",
    title: "Fitness Brand Growth",
    description:
      "Full-funnel digital growth system — store, ads, email, and community.",
    longDescription:
      "Launched a fitness brand from zero to six figures with strategic funnel architecture, UGC campaigns, and retention loops.",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Shopify", "Meta Ads", "Klaviyo", "Canva"],
    results: ["$180K first year", "4.8x ROAS", "12K community"],
    live: "#",
    gradient: "from-violet-600/25 to-fuchsia-400/10",
  },
  {
    slug: "real-estate-lead-engine",
    title: "Real Estate Lead Engine",
    description:
      "High-intent lead capture with dynamic property showcases and CRM sync.",
    longDescription:
      "Developed a lead engine for a real estate firm with interactive listings, instant follow-up sequences, and agent dashboards.",
    category: "Funnels",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    technologies: ["WordPress", "Elementor", "HubSpot", "Zapier"],
    results: ["+210% leads", "67% faster response", "Top market share"],
    live: "#",
    gradient: "from-cyan-400/20 to-violet-500/15",
  },
];

/** Featured on home — your build always first */
export function getFeaturedProjects(limit = 3) {
  return [...projects]
    .filter((p) => p.featured)
    .sort((a, b) => (b.isOwn ? 1 : 0) - (a.isOwn ? 1 : 0))
    .slice(0, limit);
}
