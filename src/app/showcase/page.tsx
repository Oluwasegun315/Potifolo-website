import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageTransition } from "@/components/layout/page-transition";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function ShowcasePage() {
  return (
    <PageTransition>
      <section className="pt-32 pb-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeading
            label="Showcase"
            title="Design & Development Samples"
            description="Focused on fast, clear experiences for clients. Explore live projects and case studies."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton href="/projects/oluwasegun-clothing-hub">
              Oluwasegun Clothing Hub
            </MagneticButton>
            <MagneticButton href="/projects" variant="outline">
              All Projects
            </MagneticButton>
          </div>
          <p className="mt-8 text-sm text-white/40">
            <Link href="/contact" className="text-accent hover:underline">
              Contact me
            </Link>{" "}
            to build something for your brand.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
