import Image from "next/image";
import { projects } from "@/data/projects";

type Tile = {
  image: string;
  w: number;
  h: number;
};

const row1: Tile[] = [
  { image: projects[0].image, w: 160, h: 220 },
  { image: projects[1].image, w: 280, h: 160 },
  { image: projects[2].image, w: 200, h: 140 },
  { image: projects[3].image, w: 160, h: 220 },
  { image: projects[4].image, w: 240, h: 150 },
];

const row2: Tile[] = [
  { image: projects[5].image, w: 200, h: 140 },
  { image: projects[0].image, w: 280, h: 160 },
  { image: projects[2].image, w: 160, h: 220 },
  { image: projects[1].image, w: 240, h: 150 },
  { image: projects[3].image, w: 200, h: 140 },
];

const row3: Tile[] = [
  { image: projects[4].image, w: 160, h: 220 },
  { image: projects[3].image, w: 280, h: 160 },
  { image: projects[5].image, w: 200, h: 140 },
  { image: projects[0].image, w: 240, h: 150 },
  { image: projects[2].image, w: 160, h: 220 },
];

function ProjectRow({ tiles }: { tiles: Tile[] }) {
  return (
    <div className="flex justify-center gap-2 sm:gap-3">
      {tiles.map((tile, i) => (
        <div
          key={i}
          className="relative shrink-0 overflow-hidden rounded-lg border border-white/10 bg-zinc-900/60 shadow-2xl"
          style={{ width: tile.w, height: tile.h }}
        >
          <Image src={tile.image} alt="" fill className="object-cover object-top" sizes={`${tile.w}px`} />
        </div>
      ))}
    </div>
  );
}

/** Project mockup wall behind centered hero — gratitude-digital-studio style */
export function HeroProjectGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      <div className="absolute left-1/2 top-1/2 flex w-max -translate-x-1/2 -translate-y-1/2 flex-col gap-2 opacity-[0.34] sm:gap-3 sm:opacity-[0.4]">
        <ProjectRow tiles={row1} />
        <ProjectRow tiles={row2} />
        <ProjectRow tiles={row3} />
      </div>
      <div className="absolute inset-0 bg-[#f8f6fc]/82 dark:bg-[#0a0812]/78" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_42%,transparent_0%,#f8f6fc_70%)] dark:bg-[radial-gradient(ellipse_65%_55%_at_50%_42%,transparent_0%,#0a0812_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f6fc]/55 via-transparent to-[#f8f6fc]/94 dark:from-[#0a0812]/50 dark:to-[#0a0812]/92" />
    </div>
  );
}
