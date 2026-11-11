import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import {
  ContactHero,
  ContactPageContent,
} from "@/components/contact/ContactPageContent";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact the Treasury Desk",
  description:
    "Talk to the Zender treasury desk in Lagos about supplier payments, FX, OTC, lending, or partnerships. Send an enquiry, email, or WhatsApp the desk.",
  path: "/contact",
  keywords: ["contact FX desk Lagos", "treasury desk Nigeria", "WhatsApp FX desk"],
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{
    amount?: string;
    currency?: string;
    corridor?: string;
    note?: string;
  }>;
}) {
  const params = await searchParams;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <SiteHeader />
      <main className="overflow-hidden">
        <ContactHero />
        <ContactPageContent
          defaults={{
            amount: params.amount,
            currency: params.currency,
            corridor: params.corridor,
            note: params.note,
          }}
        />
      </main>
      <Footer />
    </>
  );
}
