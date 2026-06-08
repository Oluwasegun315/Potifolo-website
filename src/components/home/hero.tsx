import Image from "next/image";
import { siteConfig } from "@/data/site";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { HeroBackground } from "./hero-background";
import { HeroShowcase } from "./hero-showcase";
import { HeroMiniReviews } from "./hero-mini-reviews";

/** Centered hero with animated device showcase — gratitude-digital-studio style */
export function Hero() {
  return (
    <section className="hero-section relative flex min-h-[100dvh] flex-col items-center justify-center overflow-x-hidden px-4 pt-24 pb-36 sm:px-6">
      <HeroBackground />
      <HeroShowcase />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <div className="hero-content-panel w-full max-w-3xl rounded-3xl px-6 py-10 sm:px-10 sm:py-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/35 bg-gradient-to-br from-violet-600/35 to-fuchsia-600/25 shadow-[0_0_40px_rgba(139,92,246,0.3)] sm:h-20 sm:w-20">
            <Image
              src="/icon.svg"
              alt=""
              width={48}
              height={48}
              className="h-10 w-10 sm:h-12 sm:w-12"
              priority
            />
          </div>

          <h1 className="hero-title font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>

          <p className="mt-2 font-display text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="accent-gradient-text">Full Stack Developer</span>
          </p>

          <p className="hero-tagline mt-5 text-base font-semibold sm:text-lg md:text-xl">
            {siteConfig.tagline}
          </p>

          <p className="hero-desc mt-3 text-sm leading-relaxed sm:text-base">
            I create modern digital products, build profitable systems, and help brands grow with
            confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <MagneticButton href="/hire-me">Hire Me</MagneticButton>
            <MagneticButton href="/projects" variant="outline">
              View My Work
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-0 right-0 z-10 sm:bottom-24">
        <HeroMiniReviews />
      </div>

      <a
        href="#about"
        className="hero-scroll-hint absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-[9px] uppercase tracking-[0.35em] hover:text-violet-500"
        aria-label="Scroll to explore"
      >
        <span className="h-8 w-5 rounded-full border-2 border-violet-500/40 p-1">
          <span className="mx-auto block h-1.5 w-1 animate-bounce rounded-full bg-violet-500" />
        </span>
        Scroll
      </a>
    </section>
  );
}
