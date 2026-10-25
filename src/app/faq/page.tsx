import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { RichCta } from "@/components/ui/RichCta";
import { FAQ_ITEMS } from "@/lib/site";

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">
        <RichPageHero
          eyebrow="FAQ"
          title="Clear answers, no noise"
          description="Straightforward information about how Zender works, who we serve, and how to get started."
          pills={["Measured", "Compliant", "Transparent"]}
        />
        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="glass-card group rounded-2xl p-6 open:border-zender-teal/30"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-zender-navy marker:content-none">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zender-navy/65">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
        <RichCta
          title="Still have questions?"
          description="Contact our treasury desk to discuss your cross-border payment, FX, or treasury needs directly."
          primaryLabel="Contact Treasury Desk"
          secondaryHref="/products"
          secondaryLabel="Explore Services"
        />
      </main>
      <Footer />
    </>
  );
}
