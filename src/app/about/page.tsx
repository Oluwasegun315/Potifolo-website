"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ProfilePhoto } from "@/components/ui/profile-photo";
import { PageTransition } from "@/components/layout/page-transition";
import { timeline, skills } from "@/data/experience";
import { siteConfig, techStack } from "@/data/site";

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="About Me"
            title="Full Stack Builder. Growth Mindset."
            description="I'm Idowu Elijah — a full stack developer who ships complete products: premium UI, APIs, databases, and launch-ready hosting."
            align="left"
          />

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6 leading-relaxed text-white/60">
              <p>
                For over 4 years, I&apos;ve worked on building impactful digital experiences,
                helping brands grow online, automating businesses, designing conversion-focused
                systems, and creating modern solutions that stand out in today&apos;s digital world.
              </p>
              <p>
                I believe every idea deserves exceptional execution, and my mission is to create
                experiences that not only look beautiful but also deliver real results.
              </p>
              <p className="font-medium text-accent">{siteConfig.role}</p>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <ProfilePhoto size="md" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Journey" title="Experience Timeline" />
          <div className="space-y-6">
            {timeline.map((item) => (
              <GlassCard key={item.year} hover={false}>
                <span className="font-mono text-sm text-accent">{item.year}</span>
                <h3 className="font-display mt-1 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-accent/80">{item.company}</p>
                <p className="mt-2 text-sm text-white/50">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Expertise" title="Skills & Mastery" />
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-accent">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-400"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Tech Stack" title="Tools I Master" />
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="glass rounded-xl px-4 py-2 text-sm text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
