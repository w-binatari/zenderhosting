import { OnboardingCta } from "@/components/ui/OnboardingCta";
import Link from "next/link";

type RichCtaProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function RichCta({
  title,
  description,
  primaryLabel = "Contact Treasury Desk",
  primaryHref = "/contact",
  secondaryHref,
  secondaryLabel = "Open Platform",
}: RichCtaProps) {
  const showOnboardingSecondary = !secondaryHref;

  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-zender-navy via-[#052a6e] to-zender-navy" />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-zender-teal/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 rounded-[2rem] border border-white/10 bg-white/5 px-8 py-14 text-center backdrop-blur-sm sm:px-14">
        <p className="nav-link text-zender-teal">Next step</p>
        <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/70">
          {description}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-zender-navy transition hover:bg-zender-mint"
          >
            {primaryLabel}
          </Link>
          {showOnboardingSecondary ? (
            <OnboardingCta
              variant="white"
              className="border border-white/30 !bg-transparent !text-white hover:!bg-white/10"
            >
              {secondaryLabel}
            </OnboardingCta>
          ) : (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-white/35 px-8 py-3.5 text-[15px] font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
