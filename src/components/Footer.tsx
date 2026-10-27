import Image from "next/image";
import Link from "next/link";
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
  Platform: [
    { label: "Open Platform", href: ONBOARDING_URL, external: true },
    { label: "How it works", href: "/products#how-it-works" },
  ],
};

export function Footer() {
  return (
    <footer className="overflow-hidden bg-zender-navy pt-16 text-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              {BRAND_TAGLINE} A modern African cross-border finance and treasury
              partner built on responsiveness, execution, and trusted relationships.
            </p>
            <SocialLinks className="mt-6" variant="dark" />
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

      <div className="mt-10 w-full px-3 pb-2 sm:px-4 sm:pb-3 lg:px-5">
        <Link href="/" aria-label="Zender Finance home" className="block">
          <Image
            src="/zender_wordmark.png"
            alt="Zender"
            width={631}
            height={114}
            priority={false}
            className="h-auto w-full select-none object-contain object-center"
            sizes="100vw"
          />
        </Link>
      </div>
    </footer>
  );
}
