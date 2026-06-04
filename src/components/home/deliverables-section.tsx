import { SectionHeading } from "@/components/ui/section-heading";
import { deliverables } from "@/data/offerings";

export function DeliverablesSection() {
  return (
    <section className="section-container py-16 sm:py-20">
      <SectionHeading
        label="What You Get"
        title="Every Project Includes"
        description="No vague deliverables — you leave with something real, live, and usable."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {deliverables.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-sm text-violet-300">
              ✓
            </span>
            <span className="text-sm font-medium text-white/80">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
