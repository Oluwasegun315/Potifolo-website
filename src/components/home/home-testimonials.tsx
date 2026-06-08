import Link from "next/link";
import { Star } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";

export function HomeTestimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="section-container bg-white/[0.02] py-16 sm:py-24">
      <SectionHeading
        label="Client Testimonials"
        title="What People Say About Working With Me"
        description="Real feedback from founders and brands — the kind of trust your visitors need before they hire."
      />
      <p className="-mt-10 mb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-100 px-4 py-1.5 text-xs font-medium text-violet-800 dark:border-violet-500/25 dark:bg-violet-500/10 dark:text-violet-200">
          ★ 4.9/5 average client satisfaction
        </span>
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((t) => (
          <Card key={t.name} className="glow-border">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <Avatar size="lg" className="border border-violet-500/30 bg-violet-500/15">
                  <AvatarFallback className="bg-violet-500/20 font-bold text-violet-200">
                    {t.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-white/45">{t.role}</p>
                </div>
              </div>
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-violet-400 text-violet-400" />
                ))}
              </div>
              <p className="text-sm italic leading-relaxed text-zinc-600 dark:text-white/55">
                &ldquo;{t.content}&rdquo;
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-bright"
        >
          Read all testimonials
          <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}
