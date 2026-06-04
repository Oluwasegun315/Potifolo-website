"use client";

import { useEffect, useState } from "react";

/** Scroll listener that only re-renders when crossing the threshold (better INP). */
export function useScrollThreshold(threshold: number) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const next = window.scrollY > threshold;
      setPast((prev) => (prev === next ? prev : next));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return past;
}
