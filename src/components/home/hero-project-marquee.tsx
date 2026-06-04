import Image from "next/image";
import { projects } from "@/data/projects";

const marqueeItems = projects.slice(0, 8).map((p, i) => ({
  ...p,
  type: i % 3 === 1 ? ("mobile" as const) : ("website" as const),
}));

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...marqueeItems].reverse() : marqueeItems;
  const doubled = [...items, ...items];

  return (
    <div
      className={`flex w-max gap-4 ${reverse ? "animate-scroll-right" : "animate-scroll-left"}`}
    >
      {doubled.map((item, i) => (
        <div
          key={`${item.slug}-${i}`}
          className={`flex-shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-2xl ${
            item.type === "mobile" ? "h-56 w-32 sm:h-64 sm:w-36" : "h-40 w-64 sm:h-48 sm:w-72"
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={item.type === "mobile" ? 144 : 288}
            height={item.type === "mobile" ? 256 : 192}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

/** Background project strip — inspired by gratitude-digital-studio hero */
export function HeroProjectMarquee() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden opacity-[0.22] sm:opacity-[0.28]" aria-hidden>
      <div className="absolute top-[12%] left-0 right-0 overflow-hidden">
        <MarqueeRow />
      </div>
      <div className="absolute bottom-[18%] left-0 right-0 overflow-hidden">
        <MarqueeRow reverse />
      </div>
    </div>
  );
}
