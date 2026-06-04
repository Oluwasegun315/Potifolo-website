"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUpRight } from "react-icons/fi";
import { navLinks, siteConfig } from "@/data/site";

const socialIcons = [
  { href: siteConfig.social.github, icon: FiGithub, label: "GitHub" },
  { href: siteConfig.social.linkedin, icon: FiLinkedin, label: "LinkedIn" },
  { href: siteConfig.social.twitter, icon: FiTwitter, label: "Twitter" },
  { href: siteConfig.social.instagram, icon: FiInstagram, label: "Instagram" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0812]">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl font-bold text-white">
              {siteConfig.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
              {siteConfig.subtext}
            </p>
            <div className="mt-6 flex gap-3">
              {socialIcons.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-all hover:border-accent hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Get in Touch
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-1 text-sm text-white/70 hover:text-accent"
            >
              {siteConfig.email}
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/contact"
              className="mt-4 inline-flex rounded-full border border-accent/30 px-5 py-2 text-xs font-medium text-accent transition-all hover:accent-gradient hover:border-transparent hover:text-white"
            >
              Start a Project
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            © {year} {siteConfig.name}. Crafted with precision.
          </p>
          <p className="text-xs text-white/30">
            Turning Vision Into Digital Reality
          </p>
        </div>
      </div>
    </footer>
  );
}
