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
