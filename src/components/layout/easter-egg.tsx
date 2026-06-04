"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EasterEgg() {
  const [show, setShow] = useState(false);
  const [sequence, setSequence] = useState("");

  useEffect(() => {
    const target = "build";
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setSequence((prev) => {
        const next = (prev + key).slice(-target.length);
        if (next === target) {
          setShow(true);
          setTimeout(() => setShow(false), 4000);
          return "";
        }
        return next;
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed bottom-24 left-1/2 z-[200] -translate-x-1/2 rounded-2xl glass glow-border px-8 py-4 text-center"
        >
          <p className="font-display text-lg font-bold text-accent">
            You found the secret.
          </p>
          <p className="mt-1 text-sm text-white/60">
            Let&apos;s build something extraordinary together.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
