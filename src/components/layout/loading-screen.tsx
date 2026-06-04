"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0a0812]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-8 text-center"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                IE
              </span>
              <span className="font-mono text-sm font-bold text-accent-bright">
                &lt;/&gt;
              </span>
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.35em] text-white/40">
              Idowu Elijah · Digital Builder
            </p>
          </motion.div>

          <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10 sm:w-64">
            <motion.div
              className="h-full rounded-full bg-accent"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <span className="mt-3 font-mono text-xs text-accent">
            {Math.min(Math.floor(progress), 100)}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
