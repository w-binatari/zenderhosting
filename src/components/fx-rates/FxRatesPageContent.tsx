import { FxRatesCard } from "@/components/FxRatesCard";
import { CurrencyConverter } from "@/components/fx-rates/CurrencyConverter";
import { FxMockup } from "@/components/products/ProductVisuals";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { CurrencyRegionGrid } from "@/components/ui/CurrencyFlag";
import { quoteCurrencies } from "@/lib/convert";
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
      description="Try an amount against the desk references, then ask the treasury desk to confirm the level before anything moves."
      pills={["Amount converter", "Indicative only", "Confirm with the desk"]}
      visual={<FxHeroVisual />}
    />
  );
}

export function FxRatesContent({ data }: { data: FxRatesData }) {
  const currencies = quoteCurrencies(data);

  return (
    <>
      <section id="convert" className="scroll-mt-28 bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="nav-link text-zender-teal">Convert</p>
            <h2 className="mt-4 text-3xl font-semibold text-zender-navy sm:text-4xl">
              Change the pair. Enter an amount.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
              USD, GBP, and EUR convert through the same naira desk references
              on this page. Swap the pair to see the other side, then send
              that amount to the treasury desk.
            </p>
          </div>
          <CurrencyConverter currencies={currencies} />
        </div>
      </section>

      <section className="dot-grid relative bg-white px-6 pb-20 lg:px-8">
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
