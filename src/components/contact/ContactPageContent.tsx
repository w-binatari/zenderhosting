import { OnboardingCta } from "@/components/ui/OnboardingCta";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { CONTACT_EMAIL, CONTACT_OFFICE, CONTACT_PHONE } from "@/lib/site";

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

        <form className="glass-card relative overflow-hidden rounded-2xl p-8 shadow-xl">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-zender-teal/10 blur-2xl" />
          <h3 className="relative text-lg font-semibold text-zender-navy">
            Send an enquiry
          </h3>
          <p className="relative mt-2 text-sm text-zender-navy/55">
            Share a few details and we&apos;ll get back to you.
          </p>
          <div className="relative mt-6 space-y-4">
            {[
              { id: "name", label: "Full name", type: "text", placeholder: "Your name" },
              { id: "email", label: "Email", type: "email", placeholder: "you@company.com" },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="mt-1.5 w-full rounded-xl border border-zender-navy/15 px-4 py-3 text-sm text-zender-navy outline-none transition focus:border-zender-teal"
                />
              </div>
            ))}
            <div>
              <label htmlFor="subject" className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55">
                Enquiry type
              </label>
              <select
                id="subject"
                className="mt-1.5 w-full rounded-xl border border-zender-navy/15 px-4 py-3 text-sm text-zender-navy outline-none transition focus:border-zender-teal"
              >
                <option>Cross-border payments</option>
                <option>OTC &amp; treasury</option>
                <option>Lending solutions</option>
                <option>Partnerships</option>
                <option>Platform support</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your needs"
                className="mt-1.5 w-full resize-none rounded-xl border border-zender-navy/15 px-4 py-3 text-sm text-zender-navy outline-none transition focus:border-zender-teal"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-zender-teal py-3.5 text-sm font-semibold text-white transition hover:bg-zender-navy"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
