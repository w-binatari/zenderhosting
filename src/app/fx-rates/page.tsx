import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import {
  FxRatesContent,
  FxRatesHero,
} from "@/components/fx-rates/FxRatesPageContent";
import { RichCta } from "@/components/ui/RichCta";
import { getFxRates } from "@/lib/fx-rates";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Dollar, Pound & Euro to Naira Rates (USD, GBP, EUR to NGN)",
  description:
    "Indicative USD, GBP, and EUR to naira desk rates with a currency converter. Confirm the final rate with the Zender treasury desk before you transfer.",
  path: "/fx-rates",
  keywords: ["dollar to naira rate", "pound to naira rate", "euro to naira rate", "USD to NGN", "naira exchange rate today"],
});

/** Re-read desk and market rates hourly instead of freezing them at build time. */
export const revalidate = 3600;

export default async function FxRatesPage() {
  const fxRates = await getFxRates();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "FX Rates", path: "/fx-rates" }])} />
      <SiteHeader />
      <main className="overflow-hidden">
        <FxRatesHero />
        <FxRatesContent data={fxRates} />
        <RichCta
          title="Need a confirmed rate?"
          description="Displayed rates are indicative. Contact our treasury desk for confirmed pricing on your transfer or OTC conversation."
          secondaryHref="/products"
          secondaryLabel="Explore Services"
        />
      </main>
      <Footer />
    </>
  );
}
