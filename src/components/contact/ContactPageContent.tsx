import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { OnboardingCta } from "@/components/ui/OnboardingCta";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { CONTACT_EMAIL, CONTACT_OFFICE, CONTACT_PHONE, whatsAppHref } from "@/lib/site";

function ContactHeroVisual() {
  return (
    <>
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-zender-teal/15 to-zender-navy/10" />
      <div className="relative glass-card rounded-2xl border border-zender-navy/10 p-6 shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-zender-teal">
          Treasury desk
        </p>
        <p className="mt-2 text-lg font-semibold text-zender-navy">
          Relationship-led support
        </p>
        <p className="mt-1 text-sm text-zender-navy/55">
          Sales, partnerships, and platform enquiries
        </p>
        <div className="mt-6 space-y-3">
          {["Cross-border payments", "OTC & treasury", "Lending enquiries"].map(
            (team) => (
              <div
                key={team}
                className="flex items-center justify-between rounded-xl bg-zender-mint/50 px-4 py-3 text-sm"
              >
                <span className="text-zender-navy/75">{team}</span>
                <span className="h-2 w-2 rounded-full bg-zender-teal" />
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
}

export function ContactHero() {
  return (
    <RichPageHero
      eyebrow="Treasury Desk"
      title="Start a conversation"
      description="Zender is relationship and conversation-driven. Reach out to discuss payments, FX, treasury needs, lending enquiries, or partnerships."
      pills={["Sales", "Support", "Partnerships"]}
      visual={<ContactHeroVisual />}
    />
  );
}

export function ContactPageContent() {
  const whatsApp = whatsAppHref(
    "Hello Zender desk. I would like to discuss a supplier or cross-border payment.",
  );

  return (
    <section className="dot-grid bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <p className="nav-link text-zender-teal">Reach us</p>
          <h2 className="mt-4 text-2xl font-semibold text-zender-navy">
            We respond with clarity and care
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
            Tell us about your cross-border payment, FX, or treasury needs. Our
            team will follow up to understand your requirements and outline the
            right next step.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
              { label: "Phone", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}` },
              { label: "Office", value: CONTACT_OFFICE, href: undefined },
              ...(whatsApp
                ? [{ label: "WhatsApp", value: "Message the desk", href: whatsApp }]
                : []),
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-zender-navy/8 bg-zender-mint/30 px-5 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-zender-teal">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-1 block font-medium text-zender-navy transition hover:text-zender-teal"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 font-medium text-zender-navy">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-zender-teal">
              Follow us
            </p>
            <SocialLinks className="mt-3" variant="light" />
          </div>

          <div className="mt-8 rounded-2xl border border-zender-teal/20 bg-gradient-to-r from-zender-mint to-white p-6">
            <p className="text-sm font-semibold text-zender-navy">
              Ready to onboard?
            </p>
            <p className="mt-2 text-sm text-zender-navy/65">
              Existing clients and approved new accounts can access our web
              onboarding platform, no mobile app required.
            </p>
            <div className="mt-4">
              <OnboardingCta className="!px-6 !py-3 text-sm">
                Open Platform
              </OnboardingCta>
            </div>
          </div>
        </div>

        <EnquiryForm id="enquiry" />
      </div>
    </section>
  );
}
