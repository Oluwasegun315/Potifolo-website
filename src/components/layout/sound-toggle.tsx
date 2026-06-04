"use client";

import { useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { motion } from "framer-motion";

export function SoundToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2 }}
      onClick={() => setEnabled(!enabled)}
      className="fixed bottom-6 left-6 z-[90] flex h-11 w-11 items-center justify-center rounded-full glass glow-border text-white/60 transition-colors hover:text-accent"
      aria-label={enabled ? "Mute sound" : "Enable sound"}
      title="Sound toggle (ambient — coming soon)"
    >
      {enabled ? <FiVolume2 size={18} /> : <FiVolumeX size={18} />}
    </motion.button>
  );
}
