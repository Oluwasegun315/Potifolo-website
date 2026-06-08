import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function HeroMiniReviews() {
  const featured = testimonials.slice(0, 3);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 px-4 sm:gap-4">
      {featured.map((t) => (
        <div
          key={t.name}
          className="flex w-full max-w-[280px] items-center gap-3 rounded-full border border-white/10 bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur-md dark:bg-[#12101c]/85 sm:w-auto sm:max-w-[300px]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-500/35 bg-gradient-to-br from-violet-600/40 to-fuchsia-600/30 text-xs font-bold text-violet-100">
            {t.avatar}
          </div>
          <div className="min-w-0 text-left">
            <div className="flex items-center gap-1.5">
              <span className="truncate text-sm font-semibold text-white">{t.name}</span>
              <div className="flex shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-violet-400 text-violet-400" />
                ))}
              </div>
            </div>
            <p className="truncate text-xs text-white/50">{t.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
