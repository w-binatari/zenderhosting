import { OnboardingCta } from "@/components/ui/OnboardingCta";

type CtaBandProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  title,
  description,
  primaryLabel = "Open Platform",
  secondaryHref = "/contact",
  secondaryLabel = "Contact Sales",
}: CtaBandProps) {
  return (
    <section className="bg-zender-navy px-6 py-16 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
          {description}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <OnboardingCta variant="white">{primaryLabel}</OnboardingCta>
          <a
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-[15px] font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
