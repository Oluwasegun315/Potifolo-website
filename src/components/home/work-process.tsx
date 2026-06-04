import { SectionHeading } from "@/components/ui/section-heading";
import { workProcess } from "@/data/process";

export function WorkProcess() {
  return (
    <section className="section-container py-16 sm:py-24">
      <SectionHeading
        label="How I Work"
        title="A Clear Path From Idea to Launch"
        description="Structured delivery so you always know what's happening — no surprises, no chaos."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {workProcess.map((step) => (
          <div
            key={step.step}
            className="card-premium relative overflow-hidden p-6"
          >
            <span className="font-display text-4xl font-bold text-violet-500/25">{step.step}</span>
            <h3 className="font-display mt-2 text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/50">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
