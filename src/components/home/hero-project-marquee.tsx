import Image from "next/image";
import { projects } from "@/data/projects";

const stripItems = projects.slice(0, 6).map((p, i) => ({
  ...p,
  type: i % 3 === 1 ? ("mobile" as const) : ("website" as const),
}));

/** Static background strip — no CSS animation (saves main-thread work on scroll/click). */
export function HeroProjectMarquee() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden opacity-[0.18] sm:opacity-[0.24]"
      aria-hidden
    >
      <div className="absolute top-[14%] left-0 right-0">
        <div className="flex justify-center gap-3 px-4 sm:gap-4">
          {stripItems.map((item) => (
            <div
              key={item.slug}
              className={`flex-shrink-0 overflow-hidden rounded-xl border border-white/10 ${
                item.type === "mobile" ? "h-48 w-28 sm:h-56 sm:w-32" : "h-36 w-52 sm:h-44 sm:w-64"
              }`}
            >
              <Image
                src={item.image}
                alt=""
                width={item.type === "mobile" ? 128 : 256}
                height={item.type === "mobile" ? 224 : 176}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
