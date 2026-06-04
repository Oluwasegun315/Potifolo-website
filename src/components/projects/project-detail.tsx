import Link from "next/link";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/projects";
import { ProjectCover } from "@/components/projects/project-cover";
import { PageTransition } from "@/components/layout/page-transition";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <PageTransition>
      <article className="pt-32 pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 hover:text-accent"
          >
            <FiArrowLeft /> Back to Projects
          </Link>

          <div className="mb-10 overflow-hidden rounded-2xl glow-border">
            <ProjectCover project={project} priority className="aspect-video" />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {project.category}
            </span>
            {project.isOwn && (
              <span className="rounded-full accent-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Built by Idowu Elijah
              </span>
            )}
          </div>
          <h1 className="font-display mt-2 text-4xl font-bold text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            {project.longDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {project.results.map((r) => (
              <div key={r} className="glass rounded-xl p-4 text-center">
                <p className="text-sm font-medium text-accent">{r}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {project.live?.startsWith("http") && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                Visit Live Site <FiExternalLink />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white"
              >
                GitHub <FiGithub />
              </a>
            )}
            <MagneticButton href="/contact" variant="outline">
              Start Similar Project
            </MagneticButton>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
