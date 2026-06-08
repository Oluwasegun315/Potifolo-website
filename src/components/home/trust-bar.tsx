import { trustBarItems } from "@/data/credibility";

export function TrustBar() {
  return (
    <section className="relative z-10 border-y border-violet-500/15 bg-white/92 backdrop-blur-sm dark:border-white/[0.06] dark:bg-[#0a0812]/90">
      <div className="section-container py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
          {trustBarItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-white/50 sm:text-[11px]"
            >
              <Icon className="h-4 w-4 shrink-0 text-violet-600 dark:text-violet-400" aria-hidden />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
