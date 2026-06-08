import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";

export function HeroMiniReviews() {
  const featured = testimonials.slice(0, 3);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 px-4 sm:gap-4">
      {featured.map((t) => (
        <div
          key={t.name}
          className="flex w-full max-w-[280px] items-center gap-3 rounded-full border border-violet-500/20 bg-white/95 px-4 py-2.5 shadow-[0_8px_24px_rgba(139,92,246,0.15)] backdrop-blur-md dark:border-white/15 dark:bg-[#12101c]/90 dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] sm:w-auto sm:max-w-[300px]"
        >
          <Avatar className="h-10 w-10 border border-violet-500/35 bg-gradient-to-br from-violet-600/40 to-fuchsia-600/30">
            <AvatarFallback className="bg-transparent text-xs font-bold text-violet-100">
              {t.avatar}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 text-left">
            <div className="flex items-center gap-1.5">
              <span className="truncate text-sm font-semibold text-zinc-900 dark:text-white">
                {t.name}
              </span>
              <div className="flex shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-violet-400 text-violet-400" />
                ))}
              </div>
            </div>
            <p className="truncate text-xs text-zinc-600 dark:text-white/55">{t.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
