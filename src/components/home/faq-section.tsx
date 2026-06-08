"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

export function FaqSection() {
  return (
    <section className="section-container bg-white/[0.02] py-16 sm:py-24">
      <SectionHeading
        label="FAQ"
        title="Common Questions"
        description="Straight answers so you know exactly what working together looks like."
      />
      <Accordion
        defaultValue={[faqs[0]?.question ?? ""]}
        className="mx-auto max-w-3xl space-y-3"
      >
        {faqs.map((item) => (
          <AccordionItem
            key={item.question}
            value={item.question}
            className="card-premium overflow-hidden rounded-2xl border-b-0 px-5"
          >
            <AccordionTrigger className="py-4 font-display text-sm font-semibold text-white hover:no-underline sm:text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="border-t border-white/[0.06] pb-4 text-sm leading-relaxed text-white/60">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
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
