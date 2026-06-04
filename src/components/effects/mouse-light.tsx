"use client";

import { useEffect, useState } from "react";

export function MouseLight() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, rgba(192,132,252,0.08), rgba(244,114,182,0.04) 35%, transparent 55%)`,
      }}
      aria-hidden
    />
  );
}
