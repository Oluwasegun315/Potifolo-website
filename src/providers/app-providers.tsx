import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ClientWidgets } from "@/providers/client-widgets";

/** Server shell — only chat/back-to-top are client islands. */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative z-10 min-h-screen">{children}</main>
      <Footer />
      <ClientWidgets />
    </>
  );
}
