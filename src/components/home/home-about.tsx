import { ProfilePhoto } from "@/components/ui/profile-photo";
import { vision, values } from "@/data/site";

export function HomeAbout() {
  return (
    <section id="about" className="section-container py-16 sm:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm md:max-w-md">
          <div
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-400 opacity-30 blur-lg"
            aria-hidden
          />
          <ProfilePhoto size="lg" priority className="relative mx-auto w-full max-w-[280px]" />
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            About{" "}
            <span className="accent-gradient-text">Me</span>
          </h2>
          <p className="text-lg leading-relaxed text-white/60">
            I&apos;m <span className="font-semibold text-violet-300">Idowu Elijah</span> — a
            full-stack developer who builds premium websites, stores, and growth systems that
            create real business impact.
          </p>
          <p className="leading-relaxed text-white/50">
            I combine design sensibility with solid engineering — so your product doesn&apos;t
            just look world-class, it performs under real users and real revenue pressure.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-premium p-5">
              <h3 className="font-display text-lg font-semibold text-violet-300">{vision.title}</h3>
              <p className="mt-2 text-sm text-white/50">{vision.text}</p>
            </div>
            <div className="card-premium p-5">
              <h3 className="font-display text-lg font-semibold text-violet-300">{values.title}</h3>
              <p className="mt-2 text-sm text-white/50">{values.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
