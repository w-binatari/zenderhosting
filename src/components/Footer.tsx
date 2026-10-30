import Link from "next/link";
import { ZenderLogo, ZenderWordmark } from "@/components/brand/ZenderLogo";
import { SocialLinks } from "@/components/SocialLinks";
import { BRAND_TAGLINE, ONBOARDING_URL } from "@/lib/site";

const footerLinks = {
  Services: [
    { label: "Importers", href: "/importers" },
    { label: "Cross-Border Payments", href: "/products#cross-border-payments" },
    { label: "OTC & Treasury", href: "/products#otc-treasury" },
    { label: "Lending Solutions", href: "/products#lending-solutions" },
    { label: "Partnerships", href: "/products#partnerships" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "FX Rates", href: "/fx-rates" },
    { label: "FAQ", href: "/faq" },
    { label: "Treasury Desk", href: "/contact" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Dollar to naira", href: "/rates/usd-to-ngn" },
    { label: "Pound to naira", href: "/rates/gbp-to-ngn" },
    { label: "Euro to naira", href: "/rates/eur-to-ngn" },
    { label: "Pay suppliers in China", href: "/pay-suppliers-in-china-from-nigeria" },
    { label: "Pay suppliers in Dubai", href: "/pay-suppliers-in-dubai-from-nigeria" },
    { label: "OTC desk in Lagos", href: "/otc-fx-desk-lagos" },
  ],
  Platform: [
    { label: "Open Platform", href: ONBOARDING_URL, external: true },
    { label: "How it works", href: "/products#how-it-works" },
  ],
};

export function Footer() {
  return (
    <footer className="overflow-hidden bg-zender-navy pt-16 text-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" aria-label="Zender Finance home" className="inline-block">
              <ZenderLogo title="" className="h-10 w-auto text-white" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              {BRAND_TAGLINE} A modern African cross-border finance and treasury
              partner built on responsiveness, execution, and trusted relationships.
            </p>
            <SocialLinks className="mt-6" variant="dark" />
            <p className="mt-6 inline-flex items-center gap-2 rounded-lg border border-zender-teal/40 bg-white/5 px-3 py-2 text-xs font-semibold text-white">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-zender-teal"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              Fully licensed &amp; regulated partners
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white">
                {title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <p className="text-xs text-white/70">
              &copy; {new Date().getFullYear()} Zender Finance. All rights
              reserved.
            </p>
            <Link
              href="/cookies"
              className="text-xs text-white/70 transition hover:text-white"
            >
              Cookie Policy
            </Link>
          </div>
          <p className="max-w-md text-center text-xs text-white/70 sm:text-right">
            Information on this website is provided for general reference. Final
            terms are confirmed through direct engagement with Zender.
          </p>
        </div>
      </div>

      {/* Signature wordmark: traced vector, so it stays sharp at any width. */}
      <div className="mt-12 px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8">
        <ZenderWordmark
          title=""
          className="mx-auto block h-auto w-full max-w-[90rem] select-none text-white"
        />
      </div>
    </footer>
  );
}
