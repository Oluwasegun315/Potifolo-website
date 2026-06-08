import Link from "next/link";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
}: MagneticButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold",
        variant === "primary" && "accent-gradient text-white",
        variant === "outline" &&
          "border-2 border-zinc-300 bg-white/80 text-zinc-800 hover:border-violet-500 hover:text-violet-700 dark:border-white/25 dark:bg-transparent dark:text-white dark:hover:border-accent dark:hover:text-accent-bright",
        className
      )}
    >
      {children}
    </Link>
  );
}
