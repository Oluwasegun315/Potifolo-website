import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicePackages } from "@/data/offerings";

export function PricingPreview() {
  return (
    <section className="section-container bg-white/[0.02] py-16 sm:py-24">
      <SectionHeading
        label="Investment"
        title="Flexible Packages for Serious Projects"
        description="Every build is scoped to your goals — these tiers help you see what's possible before we talk."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {servicePackages.map((pkg) => (
          <Card
            key={pkg.name}
            className={`glow-border ${pkg.featured ? "border-violet-500/30 ring-1 ring-violet-500/20" : ""}`}
          >
            <CardHeader>
              {pkg.featured && (
                <Badge variant="gradient" className="mb-2 w-fit normal-case tracking-normal">
                  {pkg.note}
                </Badge>
              )}
              <CardTitle>{pkg.name}</CardTitle>
              <p className="text-sm text-violet-300/80">{pkg.bestFor}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-white/55">
                    <span className="text-accent">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              {!pkg.featured && (
                <p className="mt-4 text-xs text-white/40">{pkg.note}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-white/45">
        Exact pricing depends on scope.{" "}
        <Link href="/hire-me" className="font-medium text-accent hover:underline">
          Get a custom quote
          <FiArrowRight className="ml-1 inline" />
        </Link>
      </p>
    </section>
  );
}
