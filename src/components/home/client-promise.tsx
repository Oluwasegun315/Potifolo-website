import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { clientPromises } from "@/data/credibility";

export function ClientPromise() {
  return (
    <section className="section-container py-16 sm:py-24">
      <SectionHeading
        label="My Commitment"
        title="What You Can Expect When We Work Together"
        description="Premium delivery isn't just design — it's trust, clarity, and results you can measure."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {clientPromises.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="glow-border border-violet-500/10">
              <CardContent className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15">
                  <Icon className="h-5 w-5 text-violet-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <p className="mt-8 text-center text-sm text-white/45">
        Questions before starting?{" "}
        <Link href="/hire-me" className="font-medium text-accent hover:text-accent-bright">
          Send a project brief
          <FiArrowRight className="ml-1 inline" />
        </Link>
      </p>
    </section>
  );
}
