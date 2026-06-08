"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2",
        "border-violet-500/20 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500/50 focus:ring-violet-500/20",
        "dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30 dark:focus:border-accent dark:focus:bg-white/[0.07] dark:focus:ring-accent/20",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
