import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { FramedPhoto } from "@/components/ui/FramedPhoto";
import { OnboardingCta } from "@/components/ui/OnboardingCta";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { PHOTOS } from "@/lib/photos";
import { SocialLinks } from "@/components/SocialLinks";
import { CONTACT_EMAIL, CONTACT_OFFICE, CONTACT_PHONE, whatsAppHref } from "@/lib/site";

function ContactHeroVisual() {
  return (
    <FramedPhoto
      photo={PHOTOS.deskWork}
      className="min-h-[24rem]"
      imageClassName="object-cover object-[center_15%]"
      sizes="(min-width: 1024px) 36rem, 100vw"
    />
  );
}

export function ContactHero() {
  return (
    <RichPageHero
      title="Start a conversation"
      description="Zender is relationship and conversation-driven. Reach out to discuss payments, FX, treasury needs, lending enquiries, or partnerships."
      visual={<ContactHeroVisual />}
    />
  );
}

export function ContactPageContent({
  defaults,
}: {
  defaults?: { amount?: string; currency?: string; corridor?: string; note?: string };
}) {
  const whatsApp = whatsAppHref(
    "Hello Zender desk. I would like to discuss a supplier or cross-border payment.",
  );

  return (
    <section className="section bg-white">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <h2 className="section-h2 text-zender-navy">
            We respond with clarity and care
          </h2>
          <p className="lede">
            Tell us about your cross-border payment, FX, or treasury needs. Our
            team will follow up to understand your requirements and outline the
            right next step.
          </p>

          <dl className="mt-10 divide-y divide-zender-navy/10 border-y border-zender-navy/10">
            {[
              { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
              { label: "Phone", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}` },
              { label: "Office", value: CONTACT_OFFICE, href: undefined },
              ...(whatsApp
                ? [{ label: "WhatsApp", value: CONTACT_PHONE, href: whatsApp }]
                : []),
            ].map((item) => (
              <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <dt className="text-sm text-zender-navy/70">{item.label}</dt>
                <dd>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="font-medium text-zender-navy transition hover:text-zender-teal"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-medium text-zender-navy">{item.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <p className="text-sm text-zender-navy/70">Follow us</p>
            <SocialLinks className="mt-3" variant="light" />
          </div>

          <div className="mt-10 border-t border-zender-navy/10 pt-8">
            <h3 className="text-lg font-semibold text-zender-navy">Ready to onboard?</h3>
            <p className="mt-2 text-sm leading-relaxed text-zender-navy/70">
              Existing clients and approved new accounts can access our web
              onboarding platform, no mobile app required.
            </p>
            <div className="mt-4">
              <OnboardingCta variant="secondary">Open Platform</OnboardingCta>
            </div>
          </div>
        </div>

        <EnquiryForm id="enquiry" defaults={defaults} />
      </div>
    </section>
  );
}
