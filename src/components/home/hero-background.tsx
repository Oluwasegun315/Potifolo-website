export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#f8f6fc] dark:bg-[#0a0812]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_30%,rgba(139,92,246,0.18),transparent_55%)]" />
      <div className="absolute inset-0 grid-bg opacity-25" />
    </div>
  );
}
