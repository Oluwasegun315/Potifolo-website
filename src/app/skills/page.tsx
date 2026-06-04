import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { PageTransition } from "@/components/layout/page-transition";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";

export default function SkillsPage() {
  return (
    <PageTransition>
      <section className="section-container pt-32 pb-24">
        <SectionHeading
          label="Skills"
          title="Full-Stack Expertise & Digital Craft"
          description="Strategic skills across development, design, e-commerce, and automation — built for premium client work."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card key={cat.slug} className="glow-border group transition-colors hover:border-violet-500/25">
                <CardHeader>
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/25 bg-violet-500/10">
                    <Icon className="h-5 w-5 text-violet-300" />
                  </div>
                  <CardTitle>{cat.title}</CardTitle>
                  <CardDescription>{cat.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
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

        <div className="mt-14 text-center">
          <Link href="/hire-me" className="btn-premium inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold text-white">
            Hire me for your next project
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
