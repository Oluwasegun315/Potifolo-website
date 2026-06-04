import type { ReactNode } from "react";
import Image from "next/image";
import { FiHome, FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import { cn } from "@/lib/utils";

function PhoneShell({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-b from-orange-500/30 via-violet-500/20 to-cyan-400/25 blur-2xl" />
      <div className="relative rounded-[2.5rem] border-[3px] border-zinc-800/80 bg-zinc-950/90 p-[6px] shadow-[0_0_40px_rgba(251,146,60,0.15),0_0_60px_rgba(103,232,249,0.12)]">
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-[26%] -translate-x-1/2 rounded-full bg-zinc-800/90" />
        <div className="relative aspect-[9/19.5] w-[min(42vw,220px)] overflow-hidden rounded-[2rem] bg-[#0a0812] sm:w-[200px] md:w-[240px] lg:w-[260px]">
          {children}
        </div>
      </div>
    </div>
  );
}

function WebsiteScreen() {
  return (
    <>
      <Image
        src="/projects/oluwasegun-clothing-hub.jpg"
        alt=""
        fill
        className="object-cover object-top"
        sizes="260px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0812]/90 via-[#0a0812]/20 to-orange-500/10 mix-blend-overlay" />
    </>
  );
}

function AppScreen() {
  return (
    <div className="flex h-full flex-col bg-[#0a0812] text-white">
      <div className="bg-gradient-to-br from-orange-500/40 via-fuchsia-600/50 to-cyan-500/30 p-4 pt-8">
        <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-200">Live App</p>
        <p className="mt-1 text-sm font-bold">Streetwear Hub</p>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2 p-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-lg border border-cyan-400/20 bg-gradient-to-br from-violet-900/40 to-orange-900/20"
          />
        ))}
      </div>
      <div className="flex justify-around border-t border-white/10 py-3 text-cyan-300/80">
        <FiHome size={14} />
        <FiSearch size={14} />
        <FiShoppingBag size={14} />
        <FiUser size={14} />
      </div>
    </div>
  );
}

/** Decorative phones — background only, static glow (server-rendered). */
export function HeroPhonesBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      <div className="hero-energy-core absolute right-[0%] top-1/2 h-[min(85vh,720px)] w-[min(75vw,640px)] -translate-y-1/2 md:right-[-2%]" />
      <div className="hero-energy-sparks absolute right-[10%] top-[30%] h-48 w-48 md:right-[18%]" />
      <div className="hero-energy-sparks absolute right-[22%] bottom-[22%] h-36 w-36 opacity-70" />

      <div className="absolute right-[-4%] top-1/2 flex -translate-y-1/2 items-end gap-4 opacity-[0.42] sm:right-[2%] sm:gap-8 sm:opacity-[0.48] md:opacity-[0.52] lg:right-[4%] lg:gap-10">
        <PhoneShell className="-rotate-12 translate-y-6 sm:-rotate-[14deg]">
          <WebsiteScreen />
        </PhoneShell>
        <PhoneShell className="z-10 -translate-y-8 rotate-12 sm:rotate-[14deg]">
          <AppScreen />
        </PhoneShell>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0812] from-35% via-[#0a0812]/92 via-55% to-transparent md:from-40% md:via-60%" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0812] via-transparent to-[#0a0812]/40" />
    </div>
  );
}
