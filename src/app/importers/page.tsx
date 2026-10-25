import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { ImportersPageContent } from "@/components/importers/ImportersPageContent";

export const metadata: Metadata = {
  title: "Supplier payments for importers | Zender Finance",
  description:
    "For Nigerian importers paying overseas suppliers. Send the invoice amount, currency corridor, and the date the supplier needs the funds.",
};

export default function ImportersPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">
        <ImportersPageContent />
      </main>
      <Footer />
    </>
  );
}
