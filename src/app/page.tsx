import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { TrustSignals } from "@/components/home/trust-signals";
import { HomeAbout } from "@/components/home/home-about";
import { FullStackSection } from "@/components/home/fullstack-section";
import { WhyHireSection } from "@/components/home/why-hire-section";
import { WorkProcess } from "@/components/home/work-process";
import { IntroSection } from "@/components/home/intro-section";
import { ProofStrip } from "@/components/home/proof-strip";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ClientPromise } from "@/components/home/client-promise";
import { HomeTestimonials } from "@/components/home/home-testimonials";
import { GlobalReach } from "@/components/home/global-reach";
import { PricingPreview } from "@/components/home/pricing-preview";
import { DeliverablesSection } from "@/components/home/deliverables-section";
import { ContactStrip } from "@/components/home/contact-strip";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/home/cta-section";
import { PageTransition } from "@/components/layout/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <TrustBar />
      <TrustSignals />
      <HomeAbout />
      <FullStackSection />
      <GlobalReach />
      <WhyHireSection />
      <DeliverablesSection />
      <WorkProcess />
      <IntroSection />
      <PricingPreview />
      <ProofStrip />
      <FeaturedProjects />
      <ClientPromise />
      <HomeTestimonials />
      <ContactStrip />
      <FaqSection />
      <CtaSection />
    </PageTransition>
  );
}
