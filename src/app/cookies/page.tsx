import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { CONTACT_EMAIL } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

const SECTIONS = [
  {
    title: "What are cookies?",
    body: "Cookies are small text files a website stores on your device. Sites also use similar browser storage, such as local storage, to remember things between visits.",
  },
  {
    title: "What this website stores",
    body: "The Zender Finance website does not set tracking, advertising, or third-party marketing cookies. The only thing it stores on your device is a small note in your browser's local storage that you have seen our cookie notice, so it is not shown on every visit. It contains no personal information.",
  },
  {
    title: "Visitor statistics",
    body: "We count page visits with Vercel Web Analytics, which does not use cookies and does not collect personal identifiers. It tells us which pages are read, not who read them.",
  },
  {
    title: "Other services we link to",
    body: "If you follow a link to WhatsApp, LinkedIn, X, Instagram, or our onboarding platform, those services may set their own cookies under their own policies.",
  },
  {
    title: "Managing storage",
    body: "You can clear cookies and site data at any time in your browser settings. Clearing it simply means the cookie notice appears again on your next visit.",
  },
  {
    title: "Updates",
    body: "If we add any cookie that is not strictly necessary, we will update this policy and ask for your consent before setting it. The version on this page is the current one.",
  },
] as const;

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "The Zender Finance website sets no tracking or advertising cookies. Here is what it does store and how to clear it.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Cookie Policy", path: "/cookies" }])} />
      <SiteHeader />
      <main className="overflow-hidden">
        <RichPageHero
          title="Cookie Policy"
          description="What the Zender Finance website stores on your device, and how to clear it."
        />
        <section className="section bg-white">
          <div className="mx-auto max-w-3xl space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-zender-navy">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zender-navy/70">
                  {section.body}
                </p>
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
