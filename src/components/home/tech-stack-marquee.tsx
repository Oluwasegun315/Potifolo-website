import { techStack } from "@/data/site";

export function TechStackMarquee() {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {techStack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-violet-400/25 bg-violet-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-violet-900 dark:border-white/10 dark:bg-white/5 dark:text-white/60"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
