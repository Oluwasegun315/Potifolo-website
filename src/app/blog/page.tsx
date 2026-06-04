"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FiSearch, FiClock, FiArrowRight } from "react-icons/fi";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Input } from "@/components/ui/input";
import { PageTransition } from "@/components/layout/page-transition";
import { blogPosts, blogCategories } from "@/data/blog";

export default function BlogPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, search]);

  const featured = blogPosts.filter((p) => p.featured);

  return (
    <PageTransition>
      <section className="pt-32 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Insights"
            title="Thoughts & Digital Wisdom"
            description="Articles on web development, growth, automation, design, and building premium digital experiences."
          />

          <div className="mb-12 grid gap-6 lg:grid-cols-2">
            {featured.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <GlassCard className="h-full">
                  <span className="text-xs uppercase tracking-wider text-accent">
                    Featured · {post.category}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-bold text-white sm:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/50 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-white/40">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <FiClock size={12} /> {post.readTime}
                    </span>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-xs">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <Input
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-3 py-1 text-xs transition-all ${
                    category === cat
                      ? "accent-gradient text-white"
                      : "border border-white/10 text-white/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <div key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <GlassCard className="group h-full">
                    <span className="text-xs text-accent">{post.category}</span>
                    <h3 className="font-display mt-2 text-lg font-semibold text-white group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-white/50">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs text-accent">
                      Read more <FiArrowRight />
                    </span>
                  </GlassCard>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
