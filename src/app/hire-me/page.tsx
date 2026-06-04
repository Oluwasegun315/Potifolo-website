import { Award, Clock, DollarSign } from "lucide-react";
import { PageTransition } from "@/components/layout/page-transition";
import { ProjectRequestForm } from "@/components/hire/project-request-form";
import { trustSignals } from "@/data/trust";

export default function HireMePage() {
  return (
    <PageTransition>
      <section className="section-container pt-32 pb-24">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Let&apos;s{" "}
            <span className="accent-gradient-text">Work Together</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/55">
            Ready to bring your project to life? Fill out the form below and I&apos;ll get back to
            you within 24 hours.
          </p>
        </div>

        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {trustSignals.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card-premium p-6 text-center">
                <Icon className="mx-auto mb-3 h-10 w-10 text-violet-400" />
                <h3 className="font-display font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/50">{item.description}</p>
              </div>
            );
          })}
        </div>

        <ProjectRequestForm />
      </section>
    </PageTransition>
  );
}
