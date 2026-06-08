"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/data/site";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrollThreshold(40);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100]",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
            scrolled && "glass glow-border rounded-2xl py-3"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/icon.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
              priority
            />
            <span className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
              IE<span className="text-accent">.</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.slice(0, 8).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-xs font-medium uppercase tracking-wider",
                  pathname === link.href
                    ? "text-accent"
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Tooltip>
              <TooltipTrigger className="inline-flex">
                <ThemeToggle />
              </TooltipTrigger>
              <TooltipContent>Switch light / dark mode</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                className="btn-premium hidden items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold text-white sm:inline-flex"
                render={<Link href="/hire-me" />}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Hire Me
              </TooltipTrigger>
              <TooltipContent>Start your project — open for work</TooltipContent>
            </Tooltip>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[99] flex flex-col bg-[#f8f6fc] dark:bg-[#0a0812] lg:hidden">
          <div className="flex flex-1 flex-col justify-center gap-2 px-8 pt-24">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-3 font-display text-2xl font-semibold",
                  pathname === link.href ? "text-accent" : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="/hire-me"
                className="btn-premium inline-flex rounded-full px-8 py-3 font-semibold text-white"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
