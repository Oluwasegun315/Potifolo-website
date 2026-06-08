"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FiSearch, FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { projects, projectCategories } from "@/data/projects";
import { ProjectCover } from "@/components/projects/project-cover";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProjectGrid() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [category, search]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-xs">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Tabs value={category} onValueChange={setCategory}>
          <TabsList
            variant="line"
            className="h-auto flex-wrap justify-start gap-1 bg-transparent p-0"
          >
            {projectCategories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="rounded-full px-4 py-1.5 text-xs font-medium data-active:accent-gradient data-active:text-white"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {filtered.map((project) => (
          <article
            key={project.slug}
            className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl glass glow-border"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <ProjectCover project={project} className="absolute inset-0" />
              {project.isOwn && (
                <span className="absolute left-2 top-2 z-10 rounded-full accent-gradient px-2 py-0.5 text-[9px] font-bold uppercase text-white">
                  My build
                </span>
              )}
              <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 bg-black/50 opacity-0 group-hover:opacity-100">
                <Link
                  href={`/projects/${project.slug}`}
                  className="accent-gradient flex h-10 w-10 items-center justify-center rounded-full text-white"
                >
                  <FiArrowUpRight />
                </Link>
                {project.live?.startsWith("http") && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
                  >
                    <FiExternalLink />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
                  >
                    <FiGithub />
                  </a>
                )}
              </div>
            </div>
            <div className="p-5">
              <span className="text-xs uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <h3 className="font-display mt-1 text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-white/50">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-white/40">No projects match your search.</p>
      )}
    </div>
  );
}
