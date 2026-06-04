export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  problem: string;
  solution: string;
  results: {
    metric: string;
    before: string;
    after: string;
    change: string;
  }[];
  gradient: string;
  liveUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "oluwasegun-clothing-hub",
    title: "Oluwasegun Clothing Hub",
    industry: "Fashion & Streetwear E-commerce",
    problem:
      "A clothing brand needed a real online boutique — not a generic template — with men's, kids', and streetwear lanes, real product photos, and clear USD pricing.",
    solution:
      "Built a full Next.js storefront with category worlds, trending auto-sliders, style edits, promo codes, testimonial sections, and a premium streetwear aesthetic deployed on Vercel.",
    results: [
      { metric: "Products Live", before: "0 online", after: "80+ pieces", change: "Launch" },
      { metric: "Shop Categories", before: "1 generic grid", after: "Men · Kids · Street", change: "3 worlds" },
      { metric: "Checkout UX", before: "Unclear pricing", after: "USD + OLUWASEGUN10", change: "Clear" },
    ],
    gradient: "from-violet-600/30 to-fuchsia-900/20",
    liveUrl: "https://oluwasegun-clothing-hub-h1n7.vercel.app/",
  },
  {
    slug: "luxe-collective",
    title: "Luxe Collective",
    industry: "Fashion E-commerce",
    problem:
      "Stagnant sales, outdated UX, and high cart abandonment on a premium fashion brand.",
    solution:
      "Full storefront redesign, conversion UX audit, automated email recovery, and premium product storytelling.",
    results: [
      { metric: "Revenue Growth", before: "$42K/mo", after: "$102K/mo", change: "+142%" },
      { metric: "Conversion Rate", before: "1.2%", after: "3.8%", change: "+217%" },
      { metric: "Cart Recovery", before: "12%", after: "48%", change: "+300%" },
    ],
    gradient: "from-violet-600/30 to-fuchsia-900/20",
  },
  {
    slug: "scaleflow-saas",
    title: "ScaleFlow SaaS",
    industry: "B2B Software",
    problem:
      "Inconsistent lead flow and low demo-to-close rates from fragmented marketing.",
    solution:
      "Multi-touch funnel system with webinar automation, CRM integration, and retargeting sequences.",
    results: [
      { metric: "Qualified Leads", before: "45/mo", after: "85/mo", change: "+89%" },
      { metric: "Demo Bookings", before: "22/mo", after: "46/mo", change: "+109%" },
      { metric: "Pipeline Value", before: "$80K", after: "$195K", change: "+144%" },
    ],
    gradient: "from-fuchsia-500/30 to-purple-900/20",
  },
  {
    slug: "fitforge",
    title: "FitForge",
    industry: "Fitness & Wellness",
    problem:
      "New brand with no digital presence, no funnel, and no community infrastructure.",
    solution:
      "Launch strategy, Shopify store, UGC campaigns, email retention, and community building.",
    results: [
      { metric: "Year 1 Revenue", before: "$0", after: "$180K", change: "Launch" },
      { metric: "ROAS", before: "N/A", after: "4.8x", change: "Peak" },
      { metric: "Community", before: "0", after: "12K", change: "+12K" },
    ],
    gradient: "from-pink-500/30 to-violet-900/20",
  },
];
