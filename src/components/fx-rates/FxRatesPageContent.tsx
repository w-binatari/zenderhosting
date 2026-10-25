import { FxRatesCard } from "@/components/FxRatesCard";
import { FxMockup } from "@/components/products/ProductVisuals";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { CurrencyRegionGrid } from "@/components/ui/CurrencyFlag";
import type { FxRatesData } from "@/lib/fx-rates";

function FxHeroVisual() {
  return (
    <>
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-zender-teal/20 to-zender-navy/10" />
      <div className="relative">
        <FxMockup />
      </div>
    </>
  );
}

export function FxRatesHero() {
  return (
    <RichPageHero
      eyebrow="FX Rates"
      title="Indicative exchange rate references"
      description="Rates are indicative treasury desk references. Final pricing is confirmed through our treasury desk or onboarding platform at the point of transfer."
      pills={["Indicative only", "Confirm with the desk"]}
      visual={<FxHeroVisual />}
    />
  );
}

export function FxRatesContent({ data }: { data: FxRatesData }) {
  return (
    <>
      <section className="dot-grid relative bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-zender-teal/15 to-transparent" />
            <FxRatesCard data={data} className="relative mt-0" />
          </div>
          <p className="mt-6 text-center text-xs leading-relaxed text-zender-navy/50">
            Indicative rates only. Zender does not guarantee execution at displayed
            levels. Contact the treasury desk for confirmed pricing.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-zender-mint/40 to-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="nav-link text-zender-teal">Coverage</p>
            <h2 className="mt-4 text-3xl font-semibold text-zender-navy">
              Currencies we support
            </h2>
            <p className="mt-4 text-base text-zender-navy/65">
              Cross-border and treasury conversations across major African,
              European, American, and Asia Pacific currencies.
            </p>
          </div>
          <div className="mt-14">
            <CurrencyRegionGrid layout="compact" />
          </div>
        </div>
      </section>
    </>
  );
}
