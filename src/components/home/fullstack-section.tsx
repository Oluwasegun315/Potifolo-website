import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/ui/section-heading";
import { fullStackLayers, fullStackPillars } from "@/data/fullstack";
import { techStack } from "@/data/site";

export function FullStackSection() {
  return (
    <section id="fullstack" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <Badge variant="gradient" className="gap-2 px-4 py-1.5 normal-case tracking-normal">
            <Code2 className="h-3.5 w-3.5" />
            Full Stack Developer
          </Badge>
        </div>

        <SectionHeading
          label="End-to-End Delivery"
          title="From Interface to Database — One Builder"
          description="I architect, code, and ship complete digital products — not just pages. Frontend polish, backend logic, databases, and launch-ready hosting in one premium workflow."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {fullStackLayers.map((layer) => {
            const Icon = layer.icon;
            return (
              <Card
                key={layer.title}
                className="group glow-border transition-colors hover:border-violet-500/25 hover:bg-white/[0.05]"
              >
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/25 bg-violet-500/10">
                    <Icon className="h-5 w-5 text-violet-600 dark:text-violet-300" />
                  </div>
                  <CardTitle>{layer.title}</CardTitle>
                  <CardDescription>{layer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {layer.skills.map((skill) => (
                      <Badge key={skill} variant="muted" className="normal-case tracking-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Separator className="my-14" />

        <div className="grid gap-5 sm:grid-cols-3">
          {fullStackPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-violet-500/15 bg-violet-50/50 p-5 dark:border-white/[0.07] dark:bg-white/[0.02]"
              >
                <Icon className="mb-3 h-5 w-5 text-fuchsia-600 dark:text-fuchsia-400" />
                <h3 className="font-display font-semibold text-zinc-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-white/50">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        <Card className="mt-10 glow-border overflow-hidden">
          <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-600 dark:text-accent">
                Stack I ship with
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="normal-case tracking-normal">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-2 rounded-full accent-gradient px-6 py-3 text-sm font-semibold text-white"
            >
              See services
              <FiArrowRight />
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
