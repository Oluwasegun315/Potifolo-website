import { Globe2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { globalRegions } from "@/data/offerings";

export function GlobalReach() {
  return (
    <section className="section-container py-16 sm:py-24">
      <div className="card-premium overflow-hidden border-violet-500/15 p-8 sm:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
              <Globe2 className="h-3.5 w-3.5" />
              Available worldwide
            </div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Remote-first.{" "}
              <span className="accent-gradient-text">Global-ready.</span>
            </h2>
            <p className="mt-4 text-white/55 leading-relaxed">
              I work with founders and brands across time zones — clear async updates,
              video calls when needed, and launches that go live wherever your customers are.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {globalRegions.map((region) => (
              <span
                key={region}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
