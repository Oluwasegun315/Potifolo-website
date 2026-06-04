/** Static fire + electricity accents (no JS, performance-safe) */
export function HeroEnergy() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      <div className="absolute left-[10%] top-[20%] h-px w-[30%] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="absolute right-[25%] top-[35%] h-[2px] w-[20%] rotate-[-12deg] bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />
      <div className="absolute right-[15%] bottom-[30%] h-px w-[25%] rotate-[8deg] bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
      <div className="absolute left-[20%] bottom-[25%] h-24 w-24 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute right-[30%] top-[15%] h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
    </div>
  );
}
