import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { ImportersPageContent } from "@/components/importers/ImportersPageContent";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pay Overseas Suppliers from Nigeria: Importer Payments",
  description:
    "For Nigerian importers paying suppliers in China, Dubai, Europe, the UK, and the US. Send the invoice amount, currency, and deadline and the treasury desk replies.",
  path: "/importers",
  keywords: ["pay overseas supplier from Nigeria", "importer payments Nigeria", "pay Chinese supplier from Nigeria", "supplier payment USD Nigeria"],
});

export default function ImportersPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Importers", path: "/importers" }])} />
      <SiteHeader />
      <main className="overflow-hidden">
        <ImportersPageContent />
      </main>
      <Footer />
    </>
  );
}
