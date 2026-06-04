import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn("glass glow-border rounded-2xl p-6", className)}>
      {children}
    </div>
  );
}
