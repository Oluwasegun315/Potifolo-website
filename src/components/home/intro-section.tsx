import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Palette, LineChart, ShoppingBag } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const highlights = [
  {
    title: "Product Design & UI",
    desc: "Premium interfaces with Tailwind and React — polished on every screen size.",
    icon: Palette,
    tag: "Frontend",
  },
  {
    title: "APIs, Auth & Payments",
    desc: "Secure backends, Stripe checkout, webhooks, and integrations that just work.",
    icon: ShoppingBag,
    tag: "Backend",
  },
  {
    title: "Growth & Automation",
    desc: "Funnels, CRM flows, and analytics so your product earns after launch.",
    icon: LineChart,
    tag: "Growth",
  },
];

export function IntroSection() {
  return (
    <section id="intro" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Work With Me"
          title="One Full Stack Partner — Not Three Vendors"
          description="You get design, development, data, and deployment from one builder who cares how the whole system performs — not just how the homepage looks."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="glow-border transition-colors hover:border-violet-500/20 hover:bg-white/[0.04]"
              >
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <Badge variant="muted" className="normal-case tracking-normal">
                      {item.tag}
                    </Badge>
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0" />
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-accent hover:text-accent"
          >
            Discover my story
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
