"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { PageTransition } from "@/components/layout/page-transition";
import {
  timeline,
  skills,
  certifications,
  platforms,
  achievements,
} from "@/data/experience";

export default function ExperiencePage() {
  return (
    <PageTransition>
      <section className="pt-32 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Experience"
            title="4+ Years of Digital Excellence"
            description="A journey of growth, mastery, and delivering transformative results for clients worldwide."
          />

          <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a, i) => (
              <GlassCard key={a}>
                <p className="text-sm text-white/70">{a}</p>
              </GlassCard>
            ))}
          </div>

          <SectionHeading label="Timeline" title="Career Journey" className="mb-12" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent bg-accent/10 font-mono text-xs text-accent">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="mt-2 w-[2px] flex-1 bg-gradient-to-b from-accent/50 to-transparent" />
                  )}
                </div>
                <GlassCard className="flex-1" hover={false}>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-accent">{item.company}</p>
                  <p className="mt-2 text-white/50">{item.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>

          <div className="mt-24 grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                label="Skills"
                title="Core Expertise"
                align="left"
                className="mb-8"
              />
              <div className="space-y-4">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="text-accent">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                label="Credentials"
                title="Certifications"
                align="left"
                className="mb-8"
              />
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/70"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>

              <h3 className="font-display mt-12 mb-4 text-xl font-semibold text-white">
                Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <span
                    key={p}
                    className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/60"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
