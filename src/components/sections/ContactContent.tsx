import { OnboardingCta } from "@/components/ui/OnboardingCta";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTACT_PHONE } from "@/lib/site";

export function ContactContent() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="We're here to help"
            description="Reach out for sales enquiries, partnership discussions, or platform support. Our team typically responds within one business day."
          />

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zender-teal">
                Email
              </p>
              <a
                href="mailto:hello@zenderfinance.com"
                className="mt-1 block text-zender-navy transition hover:text-zender-teal"
              >
                hello@zenderfinance.com
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zender-teal">
                Phone
              </p>
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                className="mt-1 block text-zender-navy transition hover:text-zender-teal"
              >
                {CONTACT_PHONE}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zender-teal">
                Office
              </p>
              <p className="mt-1 text-zender-navy/70">
                Lagos, Nigeria
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zender-navy/10 bg-zender-mint/40 p-6">
            <p className="text-sm font-semibold text-zender-navy">
              Already have an account?
            </p>
            <p className="mt-2 text-sm text-zender-navy/65">
              Access the onboarding platform to manage your account and transfers.
            </p>
            <div className="mt-4">
              <OnboardingCta className="!px-6 !py-3 text-sm">
                Open Platform
              </OnboardingCta>
            </div>
          </div>
        </div>

        <form className="rounded-2xl border border-zender-navy/10 bg-white p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-zender-navy">
            Send us a message
          </h3>
          <div className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="mt-1.5 w-full rounded-xl border border-zender-navy/15 px-4 py-3 text-sm text-zender-navy outline-none transition focus:border-zender-teal"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="mt-1.5 w-full rounded-xl border border-zender-navy/15 px-4 py-3 text-sm text-zender-navy outline-none transition focus:border-zender-teal"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55"
              >
                Subject
              </label>
              <select
                id="subject"
                className="mt-1.5 w-full rounded-xl border border-zender-navy/15 px-4 py-3 text-sm text-zender-navy outline-none transition focus:border-zender-teal"
              >
                <option>Sales enquiry</option>
                <option>Platform support</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can we help?"
                className="mt-1.5 w-full resize-none rounded-xl border border-zender-navy/15 px-4 py-3 text-sm text-zender-navy outline-none transition focus:border-zender-teal"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-zender-teal py-3.5 text-sm font-semibold text-white transition hover:bg-zender-navy"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
