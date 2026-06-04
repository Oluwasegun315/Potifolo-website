import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function HeroMiniReviews() {
  const featured = testimonials.slice(0, 3);

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {featured.map((t) => (
        <div
          key={t.name}
          className="flex max-w-[240px] items-center gap-3 rounded-full border border-white/10 bg-[#0a0812]/80 px-3 py-2 backdrop-blur-sm"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/20 text-xs font-bold text-violet-200">
            {t.avatar}
          </div>
          <div className="min-w-0 text-left">
            <div className="flex items-center gap-1">
              <span className="truncate text-xs font-medium text-white">{t.name}</span>
              <div className="flex shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-2.5 w-2.5 fill-violet-400 text-violet-400" />
                ))}
              </div>
            </div>
            <p className="truncate text-[10px] text-white/45">{t.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
