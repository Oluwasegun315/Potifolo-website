import { stats } from "@/data/site";

export function StatsCounter() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="glass glow-border rounded-2xl p-4 text-center sm:p-6"
        >
          <p className="font-display text-2xl font-bold text-accent sm:text-3xl md:text-4xl">
            {stat.value}
            {stat.suffix}
          </p>
          <p className="mt-1 text-xs text-white/50 sm:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
