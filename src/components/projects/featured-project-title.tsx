"use client";

import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type FeaturedProjectTitleProps = {
  title: string;
  technologies: string[];
};

export function FeaturedProjectTitle({ title, technologies }: FeaturedProjectTitleProps) {
  return (
    <HoverCard>
      <HoverCardTrigger className="block w-full cursor-default text-left">
        <h3 className="font-display mt-2 text-xl font-bold text-white underline-offset-4 hover:underline">
          {title}
        </h3>
      </HoverCardTrigger>
      <HoverCardContent className="w-72 border-violet-500/20 bg-[#12101c] p-4 dark:bg-[#12101c]">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-violet-300">
          Tech stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <Badge key={tech} variant="muted" className="normal-case tracking-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
