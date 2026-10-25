import { TRUST_SIGNALS } from "@/lib/site";
import { BrowserChrome } from "@/components/products/ProductVisuals";

export function PlatformSnapshot() {
  return (
    <section className="relative overflow-hidden bg-zender-navy px-6 py-24 text-white lg:px-8">
      <div className="pointer-events-none absolute inset-0 page-mesh-dark opacity-60" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-zender-teal/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="nav-link text-zender-teal">Web platform</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Clear visibility across your cross-border activity
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65">
            Monitor transfers, reference FX, and manage activity from a single
            web interface, supported by a responsive treasury desk when you need
            a human conversation.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {TRUST_SIGNALS.map((signal) => (
              <div
                key={signal.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <p className="text-2xl font-bold text-zender-teal">{signal.value}</p>
                <p className="mt-1 text-xs text-white/55">{signal.label}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <BrowserChrome>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-zender-mint/80 p-4">
                  <p className="text-xs text-zender-navy/45">Balance</p>
                  <p className="mt-1 text-lg font-bold text-zender-navy">₦12.4M</p>
                </div>
                <div className="rounded-xl border border-zender-navy/8 p-4">
                  <p className="text-xs text-zender-navy/45">Pending</p>
                  <p className="mt-1 text-lg font-bold text-zender-navy">3</p>
                </div>
                <div className="rounded-xl border border-zender-navy/8 p-4">
                  <p className="text-xs text-zender-navy/45">FX pairs</p>
                  <p className="mt-1 text-lg font-bold text-zender-navy">8</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {["Transfer to Accra", "FX trade USD→NGN", "Collection received"].map(
                  (item, i) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-lg border border-zender-navy/8 px-3 py-2.5 text-sm"
                    >
                      <span className="text-zender-navy/70">{item}</span>
                      <span
                        className={`text-xs font-semibold ${
                          i === 2 ? "text-zender-teal" : "text-zender-navy/45"
                        }`}
                      >
                        {i === 0 ? "Processing" : i === 1 ? "Complete" : "New"}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </BrowserChrome>
          </div>
        </div>
      </div>
    </section>
  );
}
