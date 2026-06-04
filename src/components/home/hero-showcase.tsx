import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Code2, Database, LayoutTemplate, Server } from "lucide-react";
import { ProfilePhoto } from "@/components/ui/profile-photo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/data/site";

const stackPreview = [
  { label: "Frontend", icon: LayoutTemplate },
  { label: "Backend", icon: Server },
  { label: "Database", icon: Database },
];

export function HeroShowcase() {
  return (
    <div className="relative">
      <Card className="glow-border overflow-hidden border-violet-500/20 bg-[#12101c]/90">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col items-center text-center">
            <ProfilePhoto size="md" priority className="mb-5 ring-2 ring-violet-500/30" />
            <Badge variant="gradient" className="mb-3 gap-1.5 normal-case tracking-normal">
              <Code2 className="h-3 w-3" />
              Full Stack Developer
            </Badge>
            <p className="font-display text-xl font-bold text-white sm:text-2xl">
              {siteConfig.name}
            </p>
            <p className="mt-1 max-w-xs text-sm text-white/50">
              UI → API → Database → Live on Vercel
            </p>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-3 gap-2">
            {stackPreview.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-2 py-3 text-center"
              >
                <Icon className="mx-auto mb-1.5 h-4 w-4 text-violet-300" />
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center">
              <p className="font-display text-2xl font-bold text-white">
                4.9<span className="text-sm text-accent">/5</span>
              </p>
              <p className="text-[10px] uppercase tracking-wider text-white/40">Client rating</p>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center">
              <p className="font-display text-2xl font-bold text-white">
                2–4<span className="text-sm text-accent"> wk</span>
              </p>
              <p className="text-[10px] uppercase tracking-wider text-white/40">Go-live speed</p>
            </div>
          </div>

          <Link
            href="/projects/oluwasegun-clothing-hub"
            className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-violet-500/25 bg-violet-500/10 py-3 text-sm text-white/80 transition-colors hover:bg-violet-500/20 hover:text-white"
          >
            Featured build — Oluwasegun Hub
            <FiArrowUpRight size={14} />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
