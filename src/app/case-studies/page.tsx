"use client";

import { FiExternalLink } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageTransition } from "@/components/layout/page-transition";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudiesPage() {
  return (
    <PageTransition>
      <section className="pt-32 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Case Studies"
            title="Results That Speak Louder"
            description="Problem → Solution → Result. Real metrics from real transformations."
          />

          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <article
                key={study.slug}
                className="overflow-hidden rounded-3xl glass glow-border"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${study.gradient}`}
                />
                <div className="p-8 sm:p-12">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent">
                    {study.industry}
                  </span>
                  <h2 className="font-display mt-2 text-3xl font-bold text-white">
                    {study.title}
                  </h2>
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-bright"
                    >
                      View live website <FiExternalLink size={14} />
                    </a>
                  )}

                  <div className="mt-8 grid gap-8 lg:grid-cols-3">
                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-red-400/80">
                        Problem
                      </h4>
                      <p className="text-sm text-white/60">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                        Solution
                      </h4>
                      <p className="text-sm text-white/60">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                        Results
                      </h4>
                      <div className="space-y-4">
                        {study.results.map((r) => (
                          <div key={r.metric} className="rounded-xl bg-white/5 p-4">
                            <p className="text-xs text-white/40">{r.metric}</p>
                            <div className="mt-2 flex items-end justify-between gap-4">
                              <div>
                                <p className="text-xs text-white/30">Before</p>
                                <p className="text-sm text-white/50 line-through">
                                  {r.before}
                                </p>
                              </div>
                              <div className="text-center">
                                <p className="font-display text-lg font-bold text-accent">
                                  {r.change}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-white/30">After</p>
                                <p className="text-sm font-medium text-white">
                                  {r.after}
                                </p>
                              </div>
                            </div>
                            <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-accent/50 to-accent" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
