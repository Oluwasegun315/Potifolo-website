import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";

export function ProofStrip() {
  return (
    <section className="section-container py-10">
      <div className="card-premium flex flex-col items-center justify-between gap-6 border-violet-500/20 bg-gradient-to-r from-violet-950/40 via-[#12101c] to-fuchsia-950/30 p-6 sm:flex-row sm:p-8">
        <div className="text-center sm:text-left">
          <div className="mb-2 inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live & verifiable
          </div>
          <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
            See a real store I built & deployed
          </h3>
          <p className="mt-2 max-w-md text-sm text-white/50">
            Oluwasegun Clothing Hub — full e-commerce experience, live on Vercel. Click through
            before you hire.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:items-end">
          <div className="flex items-center gap-1 text-sm text-white/60">
            <Star className="h-4 w-4 fill-violet-400 text-violet-400" />
            <span>4.9/5 client satisfaction focus</span>
          </div>
          <Link
            href="https://oluwasegun-clothing-hub-h1n7.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white"
          >
            View live site
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
