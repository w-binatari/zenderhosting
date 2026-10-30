import { BrowserChrome } from "@/components/products/ProductVisuals";
import { OnboardingCta } from "@/components/ui/OnboardingCta";

export function PlatformSnapshot() {
  return (
    <section className="on-dark section bg-zender-navy text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="section-h2">
            Clear visibility across your cross-border activity
          </h2>
          <p className="lede">
            Zender does not have a mobile app. Clients onboard and manage
            activity through our web platform: monitor transfers, reference FX,
            and reach a responsive treasury desk when a conversation is what
            you need.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/70">
            {[
              "Onboard and verify through the web",
              "Monitor transfers and FX references",
              "Access treasury desk support directly",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zender-teal" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <OnboardingCta>Open Platform</OnboardingCta>
          </div>
        </div>

        <BrowserChrome>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Balance", "₦12.4M"],
              ["Pending", "3"],
              ["FX pairs", "8"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-zender-navy/10 p-4">
                <p className="text-xs text-zender-navy/70">{label}</p>
                <p className="mt-1 text-lg font-semibold text-zender-navy">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {[
              ["Transfer to Accra", "Processing"],
              ["FX trade USD→NGN", "Complete"],
              ["Collection received", "New"],
            ].map(([item, status]) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-lg border border-zender-navy/10 px-3 py-2.5 text-sm"
              >
                <span className="text-zender-navy/70">{item}</span>
                <span className="text-xs font-semibold text-zender-teal">{status}</span>
              </div>
            ))}
          </div>
        </BrowserChrome>
      </div>
    </section>
  );
}
