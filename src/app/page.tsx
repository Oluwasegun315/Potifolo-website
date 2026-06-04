import { Hero } from "@/components/home/hero";
import { TrustSignals } from "@/components/home/trust-signals";
import { HomeAbout } from "@/components/home/home-about";
import { FullStackSection } from "@/components/home/fullstack-section";
import { WorkProcess } from "@/components/home/work-process";
import { IntroSection } from "@/components/home/intro-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { HomeTestimonials } from "@/components/home/home-testimonials";
import { CtaSection } from "@/components/home/cta-section";
import { PageTransition } from "@/components/layout/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <TrustSignals />
      <HomeAbout />
      <FullStackSection />
      <WorkProcess />
      <IntroSection />
      <FeaturedProjects />
      <HomeTestimonials />
      <CtaSection />
    </PageTransition>
  );
}
