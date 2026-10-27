import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { CONTACT_EMAIL } from "@/lib/site";

const SECTIONS = [
  {
    title: "What are cookies?",
    body: "Cookies are small text files stored on your device when you visit a website. They help the site remember information about your visit, such as your preferences or whether you have accepted cookies before.",
  },
  {
    title: "How we use cookies",
    body: "Zender Finance uses cookies only where they are needed for the website to function properly and to remember your cookie preferences. We do not use advertising or third-party marketing cookies on this site.",
  },
  {
    title: "Types of cookies we use",
    body: null,
    list: [
      {
        label: "Necessary cookies",
        text: "Required for the site to work. This includes storing your cookie consent choice so we do not show the banner on every visit.",
      },
      {
        label: "Preference cookies",
        text: "Remember choices you make on the site (for example, country selection where available) so you do not have to set them again.",
      },
    ],
  },
  {
    title: "Managing cookies",
    body: "You can accept all cookies or choose necessary cookies only using the banner on this website. You can also clear or block cookies in your browser settings. If you block necessary cookies, some parts of the site may not work as expected.",
  },
  {
    title: "How long cookies last",
    body: "Consent and preference cookies are stored on your device until they expire, you clear them, or you change your choice. Exact durations depend on your browser and settings.",
  },
  {
    title: "Updates",
    body: "We may update this Cookie Policy from time to time. The version on this page is the current one.",
  },
] as const;

export default function CookiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">
        <RichPageHero
          title="Cookie Policy"
          description="A short explanation of the cookies used on the Zender Finance website and how you can manage them."
        />
        <section className="section bg-white">
          <div className="mx-auto max-w-3xl space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-zender-navy">
                  {section.title}
                </h2>
                {section.body ? (
                  <p className="mt-3 text-sm leading-relaxed text-zender-navy/70">
                    {section.body}
                  </p>
                ) : null}
                {"list" in section && section.list ? (
                  <ul className="mt-4 divide-y divide-zender-navy/10 border-y border-zender-navy/10">
                    {section.list.map((item) => (
                      <li key={item.label} className="py-4">
                        <p className="text-sm font-semibold text-zender-navy">
                          {item.label}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-zender-navy/70">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            <p className="text-sm leading-relaxed text-zender-navy/70">
              Questions about cookies or this policy? Contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">
                {CONTACT_EMAIL}
              </a>{" "}
              or through our{" "}
              <Link href="/contact" className="text-link">
                treasury desk
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
