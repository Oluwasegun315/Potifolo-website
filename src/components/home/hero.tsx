import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { Code2, Layers } from "lucide-react";
import { siteConfig, stats } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { ProfilePhoto } from "@/components/ui/profile-photo";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { HeroBackground } from "./hero-background";
import { HeroPhonesBackdrop } from "./hero-phones-backdrop";
import { HeroEnergy } from "./hero-energy";
import { HeroProjectMarquee } from "./hero-project-marquee";
import { HeroMiniReviews } from "./hero-mini-reviews";
import { Typewriter } from "./typewriter";
import { TechStackMarquee } from "./tech-stack-marquee";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-x-hidden pt-24 pb-14">
      <HeroBackground />
      <HeroProjectMarquee />
      <HeroPhonesBackdrop />
      <HeroEnergy />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:items-start lg:items-start">
            <ProfilePhoto size="hero" priority className="ring-2 ring-violet-500/40" />
            <div className="min-w-0 pt-0 sm:pt-1">
              <div className="mb-3 flex flex-wrap justify-center gap-2 lg:justify-start">
                <Badge variant="gradient" className="gap-2 px-3 py-1 normal-case tracking-normal">
                  <Code2 className="h-3.5 w-3.5" />
                  Full Stack Developer
                </Badge>
                <Badge variant="success" className="normal-case tracking-normal">
                  {siteConfig.experience} · Open for work
                </Badge>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
                {siteConfig.name}
              </p>
            </div>
          </div>

          <h1 className="font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            {siteConfig.headline.split("Premium").length > 1 ? (
              <>
                {siteConfig.headline.split("Premium")[0]}
                <span className="accent-gradient-text">Premium</span>
                {siteConfig.headline.split("Premium")[1]}
              </>
            ) : (
              siteConfig.headline
            )}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg lg:mx-0">
            {siteConfig.subtext}
          </p>

          <div className="mt-5 flex items-center justify-center gap-2 font-mono text-sm text-accent-bright lg:justify-start">
            <Layers className="h-4 w-4 shrink-0 text-white/35" />
            <Typewriter
              words={[
                "Full Stack Developer",
                "Next.js Engineer",
                "API & Database Builder",
                "E-commerce Architect",
              ]}
            />
          </div>

          <HeroMiniReviews />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
            <MagneticButton href="/hire-me">Hire Me</MagneticButton>
            <MagneticButton href="/projects" variant="outline">
              View My Work
            </MagneticButton>
            <Link
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 text-sm text-white/45 hover:text-accent"
            >
              <FiGithub size={14} />
              GitHub
            </Link>
          </div>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4 lg:mx-0 lg:max-w-2xl">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-premium px-3 py-4 text-center sm:px-4 sm:text-left lg:text-center"
              >
                <p className="font-display text-xl font-bold text-white sm:text-2xl">
                  {stat.value}
                  <span className="text-base font-semibold text-white/45">{stat.suffix}</span>
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8">
          <TechStackMarquee />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-[9px] uppercase tracking-[0.35em] text-white/35 hover:text-accent"
        aria-label="Scroll to explore"
      >
        <span className="h-8 w-5 rounded-full border-2 border-violet-500/40 p-1">
          <span className="mx-auto block h-1.5 w-1 rounded-full bg-violet-400" />
        </span>
        Scroll
      </a>
    </section>
  );
}
