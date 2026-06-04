"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { PageTransition } from "@/components/layout/page-transition";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="glass glow-border rounded-2xl p-6">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <span key={i} className="text-accent">
            ★
          </span>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-white/70">&ldquo;{t.content}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-xs font-bold text-accent">
          {t.avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{t.name}</p>
          <p className="text-xs text-white/40">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <PageTransition>
      <section className="pt-32 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="Trusted by Visionaries"
            description="Real stories from clients who transformed their digital presence and achieved extraordinary growth."
          />

          <div className="mb-12 flex flex-wrap justify-center gap-8">
            {[
              { label: "Client Satisfaction", value: "4.9/5" },
              { label: "Typical Go-Live", value: "2–4 Weeks" },
              { label: "Repeat Clients", value: "85%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
