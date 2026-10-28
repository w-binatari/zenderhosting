import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import {
  AboutHero,
  AboutStory,
  AboutTeam,
} from "@/components/about/AboutPageContent";
import { RichCta } from "@/components/ui/RichCta";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us: Lagos Cross-Border Finance & Treasury Team",
  description:
    "Zender Finance is a Lagos-based cross-border finance and treasury partner for African businesses, built on responsiveness, execution, and trusted relationships.",
  path: "/about",
  keywords: ["Zender Finance", "Lagos treasury company", "African cross-border finance"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
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
