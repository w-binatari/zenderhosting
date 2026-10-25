import { SiteHeader } from "@/components/SiteHeader";
import { Hero, HeroBackground } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import {
  HomeCurrencyCoverage,
  HomeFaqPreview,
  HomeIntro,
  HomePlatformPreview,
  HomeServices,
  HomeStats,
  HomeTreasuryBand,
  HomeTradeBand,
  HomeWhoWeServe,
} from "@/components/home/HomeSections";
import { HomeHowItWorksScroll } from "@/components/home/HomeHowItWorksScroll";
import { RichCta } from "@/components/ui/RichCta";
import { getFxRates } from "@/lib/fx-rates";

export default async function Home() {
  const fxRates = await getFxRates();

  return (
    <>
      <SiteHeader />

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
      <HomePlatformPreview />
      <HomeCurrencyCoverage />
      <HomeHowItWorksScroll />
      <HomeFaqPreview />
      <AboutTeaser />
      <HomeTreasuryBand />
      <RichCta
        title="Ready to move money the Zender way?"
        description="Start with a conversation at our treasury desk, or onboard through our web platform when you're ready, no mobile app required."
      />
      <Footer />
    </>
  );
}
