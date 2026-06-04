import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyHirePoints } from "@/data/credibility";

export function WhyHireSection() {
  return (
    <section className="section-container py-16 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <SectionHeading
          label="Why Clients Choose Me"
          title="Premium Builds That Earn Trust on First Visit"
          description="Visitors decide in seconds. I make sure your site looks credible, loads fast, and moves people toward becoming customers."
          align="left"
          className="mb-0 lg:mb-0"
        />
        <ul className="space-y-4">
          {whyHirePoints.map((point) => (
            <li
              key={point.title}
              className="card-premium flex gap-4 p-5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
              <div>
                <h3 className="font-display font-semibold text-white">{point.title}</h3>
                <p className="mt-1 text-sm text-white/50">{point.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
