import { techStack } from "@/data/site";

export function TechStackMarquee() {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {techStack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white/60"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
