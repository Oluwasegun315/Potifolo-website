"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { siteConfig } from "@/data/site";

export function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 25,
  });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const [first, last] = siteConfig.name.split(" ");

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="hero-portrait relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none lg:mx-0"
    >
      {/* Decorative rings */}
      <div className="absolute -inset-8 rounded-[2rem] border border-white/[0.04] sm:-inset-12" />
      <div className="absolute -inset-4 rounded-[1.75rem] border border-violet-500/10 sm:-inset-6" />

      {/* Rotating gradient frame */}
      <div className="relative overflow-hidden rounded-[1.5rem] p-[2px]">
        <div
          className="hero-portrait-ring absolute -inset-[100%] opacity-100"
          aria-hidden
        />
        <div className="relative overflow-hidden rounded-[1.35rem] bg-[#0a0812]">
          <div className="relative aspect-[3/4] w-full sm:aspect-[4/5] lg:aspect-[3/4] lg:min-h-[520px]">
            {!failed && siteConfig.profileImage ? (
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.profileImageAlt}
                fill
                priority
                className="object-cover object-[center_12%]"
                sizes="(max-width: 1024px) 90vw, 480px"
                onError={() => setFailed(true)}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-violet-900/50 to-fuchsia-900/30 font-display text-6xl font-bold text-white">
                IE
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0812] via-transparent to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0812]/40 via-transparent to-transparent lg:opacity-100" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent-cyan">
              Creative Digital Builder
            </p>
            <p className="font-display mt-1 text-xl font-bold text-white sm:text-2xl">
              {first} {last}
            </p>
          </div>
        </div>
      </div>

      {/* Glow behind */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-violet-600/25 blur-3xl" />
    </motion.div>
  );
}
