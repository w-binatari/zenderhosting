import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import {
  FxRatesContent,
  FxRatesHero,
} from "@/components/fx-rates/FxRatesPageContent";
import { RichCta } from "@/components/ui/RichCta";
import { getFxRates } from "@/lib/fx-rates";

export default async function FxRatesPage() {
  const fxRates = await getFxRates();

  return (
    <>
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
