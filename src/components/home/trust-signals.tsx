import { Card, CardContent } from "@/components/ui/card";
import { trustSignals } from "@/data/trust";

export function TrustSignals() {
  return (
    <section className="section-container py-16 sm:py-20">
      <div className="grid gap-5 md:grid-cols-3">
        {trustSignals.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="glow-border text-center">
              <CardContent className="pt-8 pb-8">
                <Icon className="mx-auto mb-4 h-10 w-10 text-violet-400" />
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/50">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
