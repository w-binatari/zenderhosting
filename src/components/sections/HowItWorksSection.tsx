import { SectionHeader } from "@/components/ui/SectionHeader";
import { HOW_IT_WORKS } from "@/lib/site";

export function HowItWorksSection() {
  return (
    <section className="bg-zender-mint/30 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="How it works"
          title="Get started on our web platform"
          description="No mobile app required. Complete onboarding, verify your account, and start moving money, all from your browser."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {HOW_IT_WORKS.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-zender-navy/8 bg-white p-8"
            >
              <span className="font-nav text-2xl font-semibold text-zender-teal">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-zender-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zender-navy/65">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
