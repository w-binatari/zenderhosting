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
          title="Clear answers, no noise"
          description="Straightforward information about how Zender works, who we serve, and how to get started."
        />
        <section className="section bg-white">
          <div className="mx-auto max-w-3xl divide-y divide-zender-navy/10 border-y border-zender-navy/10">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-zender-navy marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl leading-none text-zender-teal transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zender-navy/70">
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
