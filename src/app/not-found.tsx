import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const destinations = [
  {
    href: "/fx-rates",
    title: "Today's FX rates",
    description: "Indicative dollar, pound and euro to naira rates from our desk.",
  },
  {
    href: "/products",
    title: "Services",
    description: "Cross-border payments, OTC and treasury, lending and partnerships.",
  },
  {
    href: "/importers",
    title: "For importers",
    description: "Pay suppliers in China, Dubai and beyond, settled on time.",
  },
  {
    href: "/contact",
    title: "Treasury desk",
    description: "Talk to the team directly about a payment or a rate.",
  },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">
        <section className="bg-zender-tint px-6 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-36">
          <div className="mx-auto max-w-3xl">
            <p className="font-nav text-sm font-medium uppercase tracking-[0.2em] text-zender-teal">
              Error 404
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zender-navy sm:text-5xl">
              This page didn&apos;t make the transfer
            </h1>
            <p className="lede mt-6 max-w-xl text-lg">
              The address may be mistyped, or the page has moved. Everything
              else is where you left it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/" className="btn btn-primary">
                Back to home
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Treasury Desk
              </Link>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-zender-navy">
              Where people usually head next
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {destinations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group block h-full rounded-lg border border-zender-navy/10 p-5 transition hover:border-zender-teal"
                  >
                    <span className="flex items-center justify-between gap-3 font-semibold text-zender-navy">
                      {item.title}
                      <span
                        aria-hidden="true"
                        className="text-zender-teal transition group-hover:translate-x-0.5"
                      >
                        &rarr;
                      </span>
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-zender-navy/70">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
