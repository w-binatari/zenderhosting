import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { PlatformSnapshot } from "@/components/products/PlatformSnapshot";
import { ProductShowcase } from "@/components/products/ProductShowcase";
import { ProductsHero } from "@/components/products/ProductsHero";
import { ProductsWorkflow } from "@/components/products/ProductsWorkflow";
import { RichCta } from "@/components/ui/RichCta";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cross-Border Payments, OTC & Treasury Services",
  description:
    "Cross-border payments, OTC and treasury desk support, licensed lending, and partnerships for Nigerian and African businesses moving money internationally.",
  path: "/products",
  keywords: ["cross-border payment services Nigeria", "OTC treasury Nigeria", "business FX Nigeria"],
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/products" }])} />
      <SiteHeader />
      <main className="overflow-hidden">
        <ProductsHero />
        <ProductShowcase />
        <PlatformSnapshot />
        <ProductsWorkflow />
        <RichCta
          title="Start a conversation, or onboard when ready"
          description="Contact our treasury desk to discuss your needs, or access our web onboarding platform to get started. Relationship-led, no mobile app."
        />
      </main>
      <Footer />
    </>
  );
}
