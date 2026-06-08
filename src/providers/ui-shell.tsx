"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

export function UiShell({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider delay={200}>
      {children}
      <Toaster position="top-center" richColors closeButton />
    </TooltipProvider>
  );
}
