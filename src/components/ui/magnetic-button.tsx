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
          "border border-white/20 text-white hover:border-accent hover:text-accent-bright",
        className
      )}
    >
      {children}
    </Link>
  );
}
