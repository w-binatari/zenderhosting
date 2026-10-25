import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import {
  AboutHero,
  AboutStory,
  AboutTeam,
} from "@/components/about/AboutPageContent";
import { RichCta } from "@/components/ui/RichCta";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">
        <AboutHero />
        <AboutStory />
        <AboutTeam />
        <RichCta
          title="Let's talk about your cross-border needs"
          description="Whether you're exploring payments, FX, treasury support, or partnerships, our treasury desk is the right first step."
        />
      </main>
      <Footer />
    </>
  );
}
