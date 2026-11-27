import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { FaqList } from "@/components/seo/FaqList";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { getLandingPage, LANDING_PAGES } from "@/content/landing-pages";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ landing: string }> };

/** Only the slugs in landing-pages.ts exist; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return LANDING_PAGES.map((page) => ({ landing: page.slug }));
}

export async function generateMetadata({ params }: Params) {
  const page = getLandingPage((await params).landing);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
    keywords: page.keywords,
  });
}

export default async function LandingPageRoute({ params }: Params) {
  const page = getLandingPage((await params).landing);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: page.breadcrumb, path: `/${page.slug}` }]),
          faqJsonLd(page.faqs),
        ]}
      />
      <SiteHeader />
      <main className="overflow-hidden">
        <RichPageHero title={page.h1} description={page.intro} />

        <section className="section bg-white">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
            <div>
              {page.sections.map((section) => (
                <div key={section.heading} className="mb-12 last:mb-0">
                  <h2 className="section-h2 text-zender-navy">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="lede">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="mt-5 divide-y divide-zender-navy/10 border-y border-zender-navy/10 text-sm text-zender-navy/75">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 py-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zender-teal" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
              <RelatedLinks links={page.related} />
            </div>
            <EnquiryForm
              id={`${page.slug}-enquiry`}
              segment={page.enquiry.segment}
              heading={page.enquiry.heading}
              defaults={{
                currency: page.enquiry.currency,
                corridor: page.enquiry.corridor,
              }}
            />
          </div>
        </section>

        <section className="section bg-zender-tint">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-h2 mb-8 text-zender-navy">Common questions</h2>
            <FaqList items={page.faqs} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
