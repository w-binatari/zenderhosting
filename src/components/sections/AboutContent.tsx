import { SectionHeader } from "@/components/ui/SectionHeader";
import { ZENDER_WAY_PILLARS, TRUST_STATS } from "@/lib/site";

export function AboutContent() {
  return (
    <>
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Our story"
            title="Built for businesses operating across borders"
            description="Zender Finance was founded on a simple belief: moving money across borders shouldn't feel complicated, opaque, or uncertain. We combine deep African market knowledge with international standards to deliver a platform businesses can trust."
          />
          <p className="mt-6 text-base leading-relaxed text-zender-navy/70">
            From Lagos to London, Accra to Dubai, we power transfers, FX, and
            treasury for individuals and enterprises who need reliability,
            transparency, and speed. Our web-based onboarding platform means you
            can get started without downloading an app.
          </p>
        </div>
      </section>

      <section className="border-y border-zender-navy/8 bg-zender-mint/30 px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-zender-navy/8 bg-white p-6 text-center"
            >
              <p className="text-3xl font-bold text-zender-teal">{stat.value}</p>
              <p className="mt-2 text-sm text-zender-navy/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Our values"
            title="What the Zender way means"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {ZENDER_WAY_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="border-l-2 border-zender-teal pl-6"
              >
                <h3 className="text-lg font-semibold text-zender-navy">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zender-navy/65">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
