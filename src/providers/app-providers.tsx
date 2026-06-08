import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ClientWidgets } from "@/providers/client-widgets";
import { ThemeProvider } from "@/providers/theme-provider";
import { UiShell } from "@/providers/ui-shell";

/** Server shell — floating dock (chat) is a client island. */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <UiShell>
        <Navbar />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
        <ClientWidgets />
      </UiShell>
    </ThemeProvider>
  );
}
