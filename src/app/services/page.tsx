"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { PageTransition } from "@/components/layout/page-transition";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <PageTransition>
      <section className="pt-32 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Services"
            title="Solutions That Scale Your Vision"
            description="End-to-end digital services engineered for premium brands, creators, and businesses ready to dominate their market."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <GlassCard key={service.title}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {service.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <p className="mb-6 text-white/60">
              Ready to elevate your digital presence?
            </p>
            <MagneticButton href="/contact">Get a Custom Quote</MagneticButton>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
