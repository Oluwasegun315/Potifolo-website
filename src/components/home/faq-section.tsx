"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-container bg-white/[0.02] py-16 sm:py-24">
      <SectionHeading
        label="FAQ"
        title="Common Questions"
        description="Straight answers so you know exactly what working together looks like."
      />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((item, index) => {
          const isOpen = open === index;
          return (
            <div
              key={item.question}
              className="card-premium overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-sm font-semibold text-white sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-violet-400 transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              {isOpen && (
                <p className="border-t border-white/[0.06] px-5 pb-4 pt-2 text-sm leading-relaxed text-white/55">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-8 text-center text-sm text-white/45">
        Still unsure?{" "}
        <Link href="/contact" className="text-accent hover:underline">
          Book a free intro call
        </Link>{" "}
        or{" "}
        <Link href="/hire-me" className="text-accent hover:underline">
          submit your project details
        </Link>
        .
      </p>
    </section>
  );
}
