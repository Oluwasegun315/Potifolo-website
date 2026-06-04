"use client";

const items = [
  "Web Development",
  "Funnel Architecture",
  "E-commerce Growth",
  "Automation Systems",
  "Brand Strategy",
  "UI/UX Design",
  "Landing Pages",
  "Digital Transformation",
];

export function HeroMarquee() {
  const row = [...items, ...items];

  return (
    <div className="hero-marquee relative z-20 border-y border-white/[0.06] bg-[#0a0812]/40 py-3 backdrop-blur-md">
      <div className="flex animate-hero-marquee whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.25em] text-white/35"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
