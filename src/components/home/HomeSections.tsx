import {
  CurrencyFlagCloud,
  CurrencyRegionGrid,
} from "@/components/ui/CurrencyFlag";
import { ProfileIcon } from "@/components/ui/ProfileIcon";
import { PRODUCT_VISUALS } from "@/lib/product-visuals";
import {
  BRAND_POSITIONING,
  BRAND_TAGLINE,
  CUSTOMER_PROFILES,
  FAQ_ITEMS,
  SERVICES,
  TRUST_SIGNALS,
  ZENDER_WAY_PILLARS,
} from "@/lib/site";
import {
  BrowserChrome,
  ProductIcon,
  ProductMockup,
} from "@/components/products/ProductVisuals";
import { FramedPhoto, PhotoCredit } from "@/components/ui/FramedPhoto";
import { OnboardingCta } from "@/components/ui/OnboardingCta";
import { PHOTOS } from "@/lib/photos";
import Image from "next/image";
import Link from "next/link";

export function HomeStats() {
  return (
    <section className="page-mesh border-y border-zender-navy/8 px-6 py-14 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
        {TRUST_SIGNALS.map((signal) => (
          <div key={signal.label} className="text-center">
            <p className="text-2xl font-bold text-zender-teal sm:text-3xl">{signal.value}</p>
            <p className="mt-2 text-sm text-zender-navy/65">{signal.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomeIntro() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="nav-link text-zender-teal">Why Zender</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-zender-navy sm:text-4xl">
            {BRAND_TAGLINE}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zender-navy/65">
            {BRAND_POSITIONING}
          </p>
          <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
            We combine regional understanding with professional execution, so
            cross-border payments, FX, and treasury conversations feel clearer,
            more responsive, and more human.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Relationship-led", "Web platform", "Treasury desk"].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-zender-teal/25 bg-zender-mint/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-zender-navy/70"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <FramedPhoto
            photo={PHOTOS.lekkiBridge}
            className="h-[34rem]"
            imageClassName="object-cover object-[center_30%]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>

      <ol className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-3">
        {ZENDER_WAY_PILLARS.map((pillar, i) => (
          <li key={pillar.title} className="rounded-2xl border border-zender-navy/8 bg-white p-5">
            <span className="font-nav text-2xl font-semibold text-zender-teal/30">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-semibold text-zender-navy">{pillar.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zender-navy/60">{pillar.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function HomeWhoWeServe() {
  return (
    <section className="page-mesh px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="nav-link text-zender-teal">Who we serve</p>
            <h2 className="mt-4 text-3xl font-semibold text-zender-navy sm:text-4xl">
              Built for African business in motion
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
              From SMEs and importers to remote teams and globally connected
              professionals, Zender supports clients who need dependable
              cross-border financial handling.
            </p>
          </div>
          <FramedPhoto
            photo={PHOTOS.lagosColleagues}
            className="aspect-[3/2]"
            sizes="(min-width: 1024px) 36rem, 100vw"
          />
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CUSTOMER_PROFILES.map((profile) => {
            const importer = profile === "Importers & exporters";
            const className =
              "glass-card flex items-center gap-4 rounded-2xl p-5 transition hover:border-zender-teal/30 hover:shadow-md";
            const body = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zender-teal/10 text-zender-teal">
                  <ProfileIcon profile={profile} />
                </span>
                <span>
                  <p className="text-sm font-semibold text-zender-navy">{profile}</p>
                  {importer ? (
                    <p className="mt-1 text-xs font-semibold text-zender-teal">
                      Supplier payments →
                    </p>
                  ) : null}
                </span>
              </>
            );

            return importer ? (
              <Link key={profile} href="/importers" className={className}>
                {body}
              </Link>
            ) : (
              <div key={profile} className={className}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeServices() {
  return (
    <section className="dot-grid bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="nav-link text-zender-teal">Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-zender-navy sm:text-4xl">
              End-to-end cross-border finance support
            </h2>
            <p className="mt-4 max-w-xl text-base text-zender-navy/65">
              Payments, OTC &amp; treasury, licensed lending, and partnerships , 
              structured around how African businesses actually operate across
              borders.
            </p>
          </div>
          <Link
            href="/products"
            className="nav-link text-zender-teal transition hover:text-zender-navy"
          >
            View all services →
          </Link>
        </div>

        <div className="mt-16 space-y-20 lg:space-y-28">
          {SERVICES.map((service, index) => {
            const visual = PRODUCT_VISUALS[service.slug];
            const reversed = index % 2 === 1;

            return (
              <article
                key={service.slug}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div
                    className={`pointer-events-none absolute -inset-5 rounded-[2rem] bg-gradient-to-br ${visual.accent} opacity-60 blur-2xl`}
                  />
                  <div className="relative origin-top scale-[0.92] lg:scale-100">
                    <ProductMockup slug={service.slug} />
                  </div>
                </div>

                <div>
                  <span className="nav-link text-zender-teal">{visual.tag}</span>
                  <div className="mt-3 flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${visual.iconBg}`}
                    >
                      <ProductIcon slug={service.slug} className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold text-zender-navy sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-zender-navy/75"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-zender-teal" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col items-start gap-3">
                    <Link
                      href={`/products#${service.slug}`}
                      className="inline-flex text-sm font-semibold text-zender-teal transition hover:text-zender-navy"
                    >
                      Learn more →
                    </Link>
                    {service.slug === "cross-border-payments" ? (
                      <Link
                        href="/importers"
                        className="inline-flex text-sm font-semibold text-zender-teal transition hover:text-zender-navy"
                      >
                        Importers paying overseas suppliers →
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeTradeBand() {
  const photo = PHOTOS.containerTerminal;

  return (
    <section className="relative isolate min-h-[28rem] overflow-hidden">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#021540]/85 via-[#031C66]/55 to-[#031C66]/20" />
      <div className="relative mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-end px-6 py-14 lg:px-8">
        <p className="nav-link text-zender-teal">Supplier cargo</p>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold text-white sm:text-4xl">
          The shipment moves when the supplier sees the funds.
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">
          For importers, the useful conversation is the invoice amount, the
          corridor, and the date the other side needs the money.
        </p>
        <Link
          href="/importers"
          className="mt-8 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-zender-navy transition hover:bg-zender-mint"
        >
          Importer payments
        </Link>
        <PhotoCredit photo={photo} tone="light" className="mt-8" />
      </div>
    </section>
  );
}

export function HomePlatformPreview() {
  return (
    <section className="relative overflow-hidden bg-zender-navy px-6 py-24 text-white lg:px-8">
      <div className="pointer-events-none absolute inset-0 page-mesh-dark opacity-60" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-zender-teal/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="nav-link text-zender-teal">Web platform</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Manage cross-border activity from your browser
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Zender does not have a mobile app. Clients onboard and manage
              activity through our web platform, with a responsive treasury
              desk when a conversation is what you need.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Onboard and verify through the web",
                "Monitor transfers and FX references",
                "Access treasury desk support directly",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/75">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zender-teal/20 text-zender-teal">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <OnboardingCta className="!px-6 !py-3 text-sm">Open Platform</OnboardingCta>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Treasury Desk
              </Link>
            </div>
          </div>

          <div>
            <BrowserChrome>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-zender-mint/80 p-4">
                  <p className="text-xs text-zender-navy/45">Balance</p>
                  <p className="mt-1 text-lg font-bold text-zender-navy">₦12.4M</p>
                </div>
                <div className="rounded-xl border border-zender-navy/8 p-4">
                  <p className="text-xs text-zender-navy/45">Active</p>
                  <p className="mt-1 text-lg font-bold text-zender-navy">3</p>
                </div>
                <div className="rounded-xl border border-zender-navy/8 p-4">
                  <p className="text-xs text-zender-navy/45">FX pairs</p>
                  <p className="mt-1 text-lg font-bold text-zender-navy">8</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {[
                  { label: "Transfer to Accra", status: "Processing" },
                  { label: "FX trade USD→NGN", status: "Complete" },
                  { label: "Treasury enquiry", status: "New" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-lg border border-zender-navy/8 px-3 py-2.5 text-sm"
                  >
                    <span className="text-zender-navy/70">{row.label}</span>
                    <span className="text-xs font-semibold text-zender-teal">{row.status}</span>
                  </div>
                ))}
              </div>
            </BrowserChrome>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeCurrencyCoverage() {
  return (
    <section className="bg-gradient-to-b from-zender-mint/40 to-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="nav-link text-zender-teal">Coverage</p>
            <h2 className="mt-4 text-3xl font-semibold text-zender-navy sm:text-4xl">
              Currencies across African and global corridors
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
              Cross-border and treasury conversations across major African,
              European, American, and Asia Pacific currencies, with indicative
              rates available on our FX page.
            </p>
            <Link
              href="/fx-rates"
              className="mt-6 inline-flex text-sm font-semibold text-zender-teal transition hover:text-zender-navy"
            >
              View FX rates →
            </Link>
          </div>

          <CurrencyRegionGrid layout="cards" />
        </div>

        <div className="mt-16 border-t border-zender-navy/8 pt-14">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-wider text-zender-navy/45">
            16 currencies · African &amp; global corridors
          </p>
          <CurrencyFlagCloud />
        </div>
      </div>
    </section>
  );
}

export function HomeFaqPreview() {
  const items = FAQ_ITEMS.slice(0, 4);

  return (
    <section className="page-mesh px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="nav-link text-zender-teal">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-zender-navy sm:text-4xl">
              Common questions, clear answers
            </h2>
            <p className="mt-4 max-w-lg text-base text-zender-navy/65">
              Straightforward information about how Zender works and how to get
              started.
            </p>
          </div>
          <Link
            href="/faq"
            className="nav-link text-zender-teal transition hover:text-zender-navy"
          >
            View all FAQs →
          </Link>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {items.map((item) => (
            <details
              key={item.question}
              className="glass-card group rounded-2xl p-6 open:border-zender-teal/30"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-zender-navy marker:content-none">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zender-navy/65">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeTreasuryBand() {
  const photo = PHOTOS.victoriaIsland;

  return (
    <section className="relative isolate overflow-hidden border-y border-white/10 px-6 py-20 text-white lg:px-8">
      <Image
        src={photo.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-[#021540]/72" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
        <div className="max-w-xl">
          <p className="nav-link text-zender-teal">Treasury desk</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Prefer a conversation first?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/65">
            Our desk handles payments, FX, treasury, lending enquiries, and
            partnership conversations, with clarity and care.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-zender-teal px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-zender-navy"
          >
            Contact Treasury Desk
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            About Zender
          </Link>
        </div>
      </div>
      <PhotoCredit
        photo={photo}
        tone="light"
        className="relative mx-auto mt-10 max-w-6xl text-center lg:text-left"
      />
    </section>
  );
}

/** @deprecated Use HomeServices */
export const HomeProductsPreview = HomeServices;
