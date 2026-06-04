"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Copy, Check, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ContactStrip() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  return (
    <section className="section-container py-12">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-950/50 to-fuchsia-950/30 p-6 sm:flex-row sm:p-8">
        <div className="text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Direct line
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 block font-display text-xl font-bold text-white hover:text-accent sm:text-2xl"
          >
            {siteConfig.email}
          </a>
          <p className="mt-1 text-sm text-white/50">Reply within 24 hours · English & async-friendly</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy email"}
          </button>
          <a
            href={`mailto:${siteConfig.email}`}
            className="btn-premium inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white"
          >
            <Mail className="h-4 w-4" />
            Email now
          </a>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-200"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <Link
            href="/hire-me"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 hover:text-white"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </section>
  );
}
