import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { PlatformSnapshot } from "@/components/products/PlatformSnapshot";
import { ProductShowcase } from "@/components/products/ProductShowcase";
import { ProductsCta } from "@/components/products/ProductsCta";
import { ProductsHero, ProductsTrustStrip } from "@/components/products/ProductsHero";
import { ProductsWorkflow } from "@/components/products/ProductsWorkflow";

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">
        <ProductsHero />
        <ProductsTrustStrip />
        <ProductShowcase />
        <PlatformSnapshot />
        <ProductsWorkflow />
        <ProductsCta
          title="Start a conversation, or onboard when ready"
          description="Contact our treasury desk to discuss your needs, or access our web onboarding platform to get started, relationship-led, no mobile app."
        />
      </main>
      <Footer />
    </>
  );
}
