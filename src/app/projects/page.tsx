"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { PageTransition } from "@/components/layout/page-transition";
import { ProjectGrid } from "@/components/projects/project-grid";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="pt-32 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Portfolio"
            title="Projects That Inspire"
            description="Premium digital experiences across web development, e-commerce, funnels, automation, and branding."
          />
          <ProjectGrid />
        </div>
      </section>
    </PageTransition>
  );
}
