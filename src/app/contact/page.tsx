import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import {
  ContactHero,
  ContactPageContent,
} from "@/components/contact/ContactPageContent";

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
