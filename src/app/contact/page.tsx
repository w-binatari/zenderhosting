import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import {
  ContactHero,
  ContactPageContent,
} from "@/components/contact/ContactPageContent";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">
        <ContactHero />
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
