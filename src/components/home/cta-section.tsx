import { Clock, ShieldCheck } from "lucide-react";
import { Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function CtaSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Card className="glow-border overflow-hidden border-violet-500/15">
          <CardContent className="p-10 sm:p-16">
            <Badge variant="gradient" className="mb-6 gap-2 normal-case tracking-normal">
              <Code2 className="h-3.5 w-3.5" />
              Full Stack Developer · Available
            </Badge>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready to Ship Your Next Product?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/60">
              From design to database to deployment — let&apos;s build something premium that
              converts visitors into paying clients.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white/45">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-violet-400" />
                Reply within 24 hours
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-violet-400" />
                Clear milestones · no surprises
              </span>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <MagneticButton href="/hire-me">Start Your Project</MagneticButton>
              <MagneticButton href="/projects" variant="outline">
                Explore Work
              </MagneticButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
