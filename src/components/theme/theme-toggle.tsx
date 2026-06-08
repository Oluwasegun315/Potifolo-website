"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className={cn(
        "theme-toggle relative flex h-10 w-[4.75rem] shrink-0 items-center rounded-full border border-white/25 bg-white/10 p-1 shadow-[0_0_12px_rgba(139,92,246,0.2)] transition-colors",
        "hover:border-violet-400/60 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50",
        className
      )}
    >
      <Sun
        className={cn(
          "absolute left-2.5 z-10 h-3.5 w-3.5 transition-colors",
          isDark ? "text-amber-400/70" : "text-amber-500"
        )}
        aria-hidden
      />
      <Moon
        className={cn(
          "absolute right-2.5 z-10 h-3.5 w-3.5 transition-colors",
          isDark ? "text-violet-200" : "text-violet-400/50"
        )}
        aria-hidden
      />
      <span
        className={cn(
          "relative z-20 h-7 w-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_2px_8px_rgba(139,92,246,0.45)] transition-transform duration-300 ease-out",
          isDark ? "translate-x-[2.125rem]" : "translate-x-0"
        )}
      />
    </button>
  );
}
