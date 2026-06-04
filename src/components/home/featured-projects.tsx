import Link from "next/link";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCover } from "@/components/projects/project-cover";
import { getFeaturedProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export function FeaturedProjects() {
  const featured = getFeaturedProjects(3);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Selected Work"
          title="Projects That Define Excellence"
          description="Real builds and premium digital experiences — including stores and platforms engineered for growth."
        />
        <p className="-mt-10 mb-10 text-center">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-bright"
          >
            <FiGithub />
            View all projects on GitHub
          </a>
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((project) => (
            <article
              key={project.slug}
              className={`overflow-hidden rounded-2xl glass glow-border ${
                project.isOwn ? "ring-1 ring-violet-500/30" : ""
              }`}
            >
              <div className="relative">
                <ProjectCover project={project} className="aspect-[16/10]" />
                {project.isOwn && (
                  <span className="absolute left-3 top-3 z-10 rounded-full accent-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Built by me
                  </span>
                )}
              </div>

              <div className="border-t border-white/5 p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <h3 className="font-display mt-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/60">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-1 text-xs font-medium text-accent-bright"
                  >
                    View case <FiArrowUpRight />
                  </Link>
                  {project.live?.startsWith("http") && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-white/50 hover:text-white"
                    >
                      Live site <FiExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white hover:border-accent hover:text-accent"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
