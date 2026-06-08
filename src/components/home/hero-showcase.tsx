import Image from "next/image";
import { projects } from "@/data/projects";

type ShowcaseItem = {
  image: string;
  type: "phone" | "desktop";
};

const pool: ShowcaseItem[] = projects.slice(0, 6).flatMap((p, i) => [
  { image: p.image, type: i % 2 === 0 ? "phone" : "desktop" },
  { image: p.image, type: i % 2 === 1 ? "phone" : "desktop" },
]);

function PhoneMockup({ image }: { image: string }) {
  return (
    <div className="relative shrink-0 rounded-[1.35rem] border-[3px] border-zinc-600/90 bg-zinc-950 p-[4px] shadow-[0_12px_40px_rgba(0,0,0,0.45)] dark:border-zinc-700">
      <div className="absolute left-1/2 top-2 z-10 h-1 w-9 -translate-x-1/2 rounded-full bg-zinc-600" />
      <div className="relative h-48 w-[92px] overflow-hidden rounded-[1.1rem] sm:h-56 sm:w-[108px]">
        <Image src={image} alt="" fill className="object-cover object-top" sizes="108px" />
        <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent" />
      </div>
    </div>
  );
}

function DesktopMockup({ image }: { image: string }) {
  return (
    <div className="relative shrink-0 overflow-hidden rounded-xl border border-white/20 bg-zinc-950 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-zinc-800/95 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/90" />
        <span className="h-2 w-2 rounded-full bg-amber-400/90" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
        <span className="ml-2 h-2 flex-1 max-w-[80px] rounded-full bg-white/10" />
      </div>
      <div className="relative h-36 w-56 sm:h-40 sm:w-64">
        <Image src={image} alt="" fill className="object-cover object-top" sizes="256px" />
      </div>
    </div>
  );
}

function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  return item.type === "phone" ? <PhoneMockup image={item.image} /> : <DesktopMockup image={item.image} />;
}

function MarqueeRow({ items, reverse = false }: { items: ShowcaseItem[]; reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={`hero-marquee-track flex w-max gap-4 sm:gap-5 ${reverse ? "hero-marquee-right" : "hero-marquee-left"}`}
      >
        {doubled.map((item, i) => (
          <ShowcaseCard key={`${item.image}-${item.type}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

const rowA = pool.slice(0, 8);
const rowB = [...pool.slice(4), ...pool.slice(0, 4)];
const rowC = [...pool.slice(2), ...pool.slice(0, 2)];

/** Animated phones + websites — hero only, gratitude-digital-studio style */
export function HeroShowcase() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      <div className="absolute inset-0 flex scale-[0.92] flex-col justify-center gap-4 py-20 opacity-[0.38] blur-[0.5px] sm:gap-5 sm:opacity-[0.42] dark:opacity-[0.32] dark:sm:opacity-[0.36]">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
        <MarqueeRow items={rowC} />
      </div>

      {/* Strong center mask — text stays crisp, mockups visible at edges only */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_48%_44%_at_50%_40%,rgba(248,246,252,0.99)_0%,rgba(248,246,252,0.88)_38%,rgba(248,246,252,0.45)_62%,transparent_100%)] dark:bg-[radial-gradient(ellipse_48%_44%_at_50%_40%,rgba(10,8,18,0.97)_0%,rgba(10,8,18,0.82)_38%,rgba(10,8,18,0.4)_62%,transparent_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f6fc]/70 via-transparent to-[#f8f6fc]/90 dark:from-[#0a0812]/60 dark:to-[#0a0812]/92" />
    </div>
  );
}
