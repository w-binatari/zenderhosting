import { BRAND_POSITIONING, SERVICES, TRUST_SIGNALS } from "@/lib/site";
import { RichPageHero } from "@/components/ui/RichPageHero";

function ProductsHeroVisual() {
  return (
    <>
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-zender-teal/20 via-transparent to-zender-navy/10" />
      <div className="relative grid gap-4 sm:grid-cols-2">
        <div className="glass-card rounded-2xl p-5 shadow-xl sm:translate-y-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-zender-teal">
            Focus
          </p>
          <p className="mt-2 text-lg font-semibold leading-snug text-zender-navy">
            Cross-border finance &amp; treasury
          </p>
          <p className="mt-1 text-sm text-zender-navy/55">Built for African markets</p>
        </div>
        <div className="glass-card-dark rounded-2xl bg-zender-navy/90 p-5 text-white shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-zender-teal">
            Approach
          </p>
          <p className="mt-2 text-lg font-semibold">Relationship-led</p>
          <p className="mt-1 text-sm text-white/60">Responsive, clear, accountable</p>
        </div>
        <div className="glass-card col-span-full rounded-2xl p-5 shadow-lg">
          <p className="text-sm font-semibold text-zender-navy">
            {SERVICES.length} core service areas
          </p>
          <p className="mt-1 text-xs text-zender-navy/55">
            Payments · OTC &amp; Treasury · Lending · Partnerships
          </p>
        </div>
      </div>
    </>
  );
}

export function ProductsHero() {
  return (
    <RichPageHero
      eyebrow="Services"
      title="Cross-border finance and treasury support for African business"
      description={BRAND_POSITIONING}
      pills={["Web onboarding platform", "Treasury desk", "No mobile app"]}
      visual={<ProductsHeroVisual />}
    />
  );
}

export function ProductsTrustStrip() {
  return (
    <section className="border-y border-zender-navy/8 bg-zender-mint/20 px-6 py-10 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4">
        {TRUST_SIGNALS.map((signal) => (
          <div key={signal.label} className="text-center">
            <p className="text-xl font-bold text-zender-teal sm:text-2xl">{signal.value}</p>
            <p className="mt-1 text-xs text-zender-navy/60 sm:text-sm">{signal.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
