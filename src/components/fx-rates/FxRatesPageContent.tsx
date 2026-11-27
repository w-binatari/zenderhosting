import { FxRatesCard } from "@/components/FxRatesCard";
import { CurrencyConverter } from "@/components/fx-rates/CurrencyConverter";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { CurrencyRegionGrid } from "@/components/ui/CurrencyFlag";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { RATE_PAIRS } from "@/content/rate-pairs";
import { quoteCurrencies } from "@/lib/convert";
import type { FxRatesData } from "@/lib/fx-rates";

export function FxRatesHero() {
  return (
    <RichPageHero
      title="Indicative exchange rate references"
      description="Try an amount against the desk references, then ask the treasury desk to confirm the level before anything moves."
    />
  );
}

export function FxRatesContent({ data }: { data: FxRatesData }) {
  const currencies = quoteCurrencies(data);

  return (
    <>
      <section id="convert" className="section scroll-mt-28 bg-white">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-h2 text-zender-navy">
              Change the pair. Enter an amount.
            </h2>
            <p className="lede">
              USD, GBP, and EUR convert through the same naira desk references
              on this page. Swap the pair to see the other side, then send
              that amount to the treasury desk.
            </p>
          </div>
          <CurrencyConverter currencies={currencies} />
        </div>
      </section>

      <section className="bg-zender-tint px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FxRatesCard data={data} className="mt-0 !bg-zender-navy" />
          <p className="mt-6 text-center text-xs leading-relaxed text-zender-navy/70">
            Indicative rates only. Zender does not guarantee execution at displayed
            levels. Contact the treasury desk for confirmed pricing.
          </p>
          <RelatedLinks
            heading="Rate pages"
            links={RATE_PAIRS.map((pair) => ({
              label: `${pair.everyday} to naira (${pair.code}/NGN)`,
              href: `/rates/${pair.slug}`,
            }))}
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="section-h2 text-zender-navy">Currencies we support</h2>
            <p className="lede">
              Cross-border and treasury conversations across major African,
              European, American, and Asia Pacific currencies.
            </p>
          </div>
          <div className="mt-12">
            <CurrencyRegionGrid />
          </div>
        </div>
      </section>
    </>
  );
}
