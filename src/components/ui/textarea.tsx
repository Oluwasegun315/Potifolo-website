"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border px-4 py-3 text-sm transition-all duration-300 focus:outline-none focus:ring-2",
        "border-violet-500/20 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500/50 focus:ring-violet-500/20",
        "dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30 dark:focus:border-accent dark:focus:bg-white/[0.07] dark:focus:ring-accent/20",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
