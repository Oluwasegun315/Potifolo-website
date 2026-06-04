export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(139,92,246,0.25),transparent_50%)]" />
      <div className="absolute -right-[20%] top-[10%] h-[50vh] w-[50vh] rounded-full bg-fuchsia-600/15 blur-[80px]" />
      <div className="absolute -left-[15%] bottom-[5%] h-[40vh] w-[40vh] rounded-full bg-violet-600/15 blur-[70px]" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0812_75%)]" />
    </div>
  );
}
