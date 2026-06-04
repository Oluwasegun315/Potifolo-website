"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

type ProjectCoverProps = {
  project: Project;
  priority?: boolean;
  className?: string;
};

export function ProjectCover({ project, priority = false, className }: ProjectCoverProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#12101c]",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
          project.gradient,
          !failed && "opacity-40"
        )}
        aria-hidden
      />
      {!failed && project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category} project preview`}
          fill
          priority={priority}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setFailed(true)}
        />
      ) : null}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0a0812] via-[#0a0812]/30 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-fuchsia-900/10 mix-blend-overlay"
        aria-hidden
      />
    </div>
  );
}
