"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { blogPosts } from "@/data/blog";
import { PageTransition } from "@/components/layout/page-transition";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-32">
        <p className="text-white/50">Article not found.</p>
      </div>
    );
  }

  return (
    <PageTransition>
      <article className="pt-32 pb-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 hover:text-accent"
          >
            <FiArrowLeft /> Back to Insights
          </Link>

          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            {post.category}
          </span>
          <h1 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex gap-4 text-sm text-white/40">
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
          </div>

          <div className="prose prose-invert mt-12 max-w-none">
            <p className="text-lg leading-relaxed text-white/70">{post.excerpt}</p>
            <p className="mt-6 leading-relaxed text-white/60">
              This is a premium insights article placeholder. Replace this content with your
              full article body — share your expertise on {post.category.toLowerCase()},
              strategies, and lessons learned from real client work.
            </p>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
