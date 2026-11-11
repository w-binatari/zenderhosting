import { ProfileIcon } from "@/components/ui/ProfileIcon";
import {
  BRAND_POSITIONING,
  BRAND_TAGLINE,
  CUSTOMER_PROFILES,
  FAQ_ITEMS,
  SERVICES,
  TRUST_SIGNALS,
} from "@/lib/site";
import { FramedPhoto } from "@/components/ui/FramedPhoto";
import { PHOTOS } from "@/lib/photos";
import Image from "next/image";
import Link from "next/link";

export function HomeStats() {
  return (
    <section className="border-b border-zender-navy/10 bg-zender-tint px-6 py-12 lg:px-8">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
        {TRUST_SIGNALS.map((signal) => (
          <div key={signal.label}>
            <dd className="text-2xl font-semibold text-zender-navy sm:text-3xl">
              {signal.value}
            </dd>
            <dt className="mt-1 text-sm text-zender-navy/70">{signal.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function HomeIntro() {
  return (
    <section className="section bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <h2 className="section-h2 text-zender-navy">{BRAND_TAGLINE}</h2>
          <p className="lede">{BRAND_POSITIONING}</p>
          <p className="lede">
            We combine regional understanding with professional execution, so
            cross-border payments, FX, and treasury conversations feel clearer,
            more responsive, and more human.
          </p>
        </div>

        <FramedPhoto
          photo={PHOTOS.lekkiBridge}
          className="h-[30rem]"
          imageClassName="object-cover object-[center_30%]"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>
    </section>
  );
}

export function HomeWhoWeServe() {
  return (
    <section className="section bg-zender-tint">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-h2 text-zender-navy">
              Built for African business in motion
            </h2>
            <p className="lede">
              From SMEs and importers to remote teams and globally connected
              professionals, Zender supports clients who need dependable
              cross-border financial handling.
            </p>

            <ul className="mt-8 divide-y divide-zender-navy/10 border-y border-zender-navy/10">
              {CUSTOMER_PROFILES.map((profile) => {
                const importer = profile === "Importers & exporters";
                const row = (
                  <>
                    <span className="flex min-w-0 items-center gap-4 text-zender-teal">
                      <ProfileIcon profile={profile} />
                      <span className="text-sm font-semibold text-zender-navy">
                        {profile}
                      </span>
                    </span>
                    {importer ? (
                      <span className="text-link shrink-0 whitespace-nowrap">
                        <span className="hidden sm:inline">Supplier payments </span>→
                      </span>
                    ) : null}
                  </>
                );

                return (
                  <li key={profile}>
                    {importer ? (
                      <Link
                        href="/importers"
                        className="flex items-center justify-between gap-4 py-4 transition hover:bg-white/60"
                      >
                        {row}
                      </Link>
                    ) : (
                      <div className="flex items-center justify-between gap-4 py-4">
                        {row}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <FramedPhoto
            photo={PHOTOS.lagosColleagues}
            className="aspect-[4/5]"
            sizes="(min-width: 1024px) 36rem, 100vw"
          />
        </div>
      </div>
    </section>
  );
}

export function HomeServices() {
  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="section-h2 text-zender-navy">
            End-to-end cross-border finance support
          </h2>
          <p className="lede">
            Payments, OTC &amp; treasury, licensed lending, and partnerships,
            structured around how African businesses actually operate across
            borders.
          </p>
        </div>

        <div className="mt-12 divide-y divide-zender-navy/10 border-y border-zender-navy/10">
          {SERVICES.map((service) => (
            <article
              key={service.slug}
              className="grid gap-6 py-10 lg:grid-cols-[1fr_1.4fr_1fr] lg:gap-12"
            >
              <h3 className="text-xl font-semibold text-zender-navy">
                {service.title}
              </h3>
              <div>
                <p className="text-base leading-relaxed text-zender-navy/70">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  <Link href={`/products#${service.slug}`} className="text-link">
                    Learn more →
                  </Link>
                  {service.slug === "cross-border-payments" ? (
                    <Link href="/importers" className="text-link">
                      Importers paying overseas suppliers →
                    </Link>
                  ) : null}
                </div>
              </div>
              <ul className="space-y-2 text-sm text-zender-navy/70">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zender-teal" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-zender-navy/70">
          Clients also use the{" "}
          <Link href="/products#how-it-works" className="text-link">
            web platform
          </Link>{" "}
          to onboard and track activity, and can check the{" "}
          <Link href="/fx-rates" className="text-link">
            indicative rates and supported currencies
          </Link>{" "}
          at any time.
        </p>
      </div>
    </section>
  );
}

export function HomeTradeBand() {
  const photo = PHOTOS.containerTerminal;

  return (
    <section className="on-dark relative isolate min-h-[26rem] overflow-hidden">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#021540]/85 via-[#021540]/55 to-[#021540]/15" />
      <div className="relative mx-auto flex min-h-[26rem] max-w-6xl flex-col justify-end px-6 py-14 lg:px-8">
        <h2 className="section-h2 max-w-xl text-white">
          The shipment moves when the supplier sees the funds.
        </h2>
        <p className="lede max-w-lg">
          For importers, the useful conversation is the invoice amount, the
          corridor, and the date the other side needs the money.
        </p>
        <Link href="/importers" className="btn btn-primary mt-8 w-fit">
          Importer payments
        </Link>
      </div>
    </section>
  );
}

export function HomeFaqPreview() {
  const items = FAQ_ITEMS.slice(0, 4);

  return (
    <section className="section bg-zender-tint">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="section-h2 text-zender-navy">
            Common questions, clear answers
          </h2>
          <p className="lede">
            Straightforward information about how Zender works and how to get
            started.
          </p>
          <Link href="/faq" className="text-link mt-6 inline-block">
            View all FAQs →
          </Link>
        </div>

        <div className="divide-y divide-zender-navy/10 border-y border-zender-navy/10">
          {items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none text-base font-semibold text-zender-navy marker:content-none">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zender-navy/70">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
