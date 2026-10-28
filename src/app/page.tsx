import { SiteHeader } from "@/components/SiteHeader";
import { Hero, HeroBackground } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import {
  HomeFaqPreview,
  HomeIntro,
  HomeServices,
  HomeStats,
  HomeTradeBand,
  HomeWhoWeServe,
} from "@/components/home/HomeSections";
import { RichCta } from "@/components/ui/RichCta";
import { getFxRates } from "@/lib/fx-rates";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Zender Finance | Cross-Border Payments & FX Desk in Lagos, Nigeria",
  description:
    "Pay overseas suppliers, convert USD, GBP, and EUR to naira, and talk to a Lagos treasury desk. Indicative FX rates, cross-border payments, OTC, and lending support for African businesses.",
  path: "/",
  keywords: ["cross-border payments Nigeria", "FX desk Lagos", "dollar to naira", "pay overseas suppliers from Nigeria", "OTC desk Nigeria"],
  absoluteTitle: true,
});

/** Re-read desk and market rates hourly instead of freezing them at build time. */
export const revalidate = 3600;

export default async function Home() {
  const fxRates = await getFxRates();

  return (
    <>
      <SiteHeader />

      <main>
        <section id="hero" className="relative min-h-screen overflow-hidden">
          <HeroBackground />
          <div className="relative flex min-h-screen flex-col pt-[5.5rem]">
            <Hero fxRates={fxRates} />
          </div>
        </section>

        <HomeStats />
        <HomeIntro />
        <HomeWhoWeServe />
        <HomeTradeBand />
        <HomeServices />
        <HomeFaqPreview />
        <RichCta
          title="Prefer a conversation first?"
          description="Our desk handles payments, FX, treasury, lending enquiries, and partnership conversations. Start there, or onboard through our web platform when you are ready. There is no mobile app."
        />
      </main>
      <Footer />
    </>
  );
}
