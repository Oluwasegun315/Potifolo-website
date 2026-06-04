import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-violet-500/30 bg-violet-500/15 text-violet-200",
        gradient:
          "border-transparent accent-gradient text-white shadow-[0_0_20px_rgba(139,92,246,0.35)]",
        outline: "border-white/15 bg-transparent text-white/80",
        success:
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
        muted: "border-white/10 bg-white/5 text-white/60",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
