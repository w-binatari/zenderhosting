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
  return (
    <section className="on-dark section bg-zender-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="section-h2">{title}</h2>
          <p className="lede">{description}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link href={primaryHref} className="btn btn-primary">
            {primaryLabel}
          </Link>
          {secondaryHref ? (
            <Link href={secondaryHref} className="btn btn-secondary">
              {secondaryLabel}
            </Link>
          ) : (
            <OnboardingCta variant="secondary">{secondaryLabel}</OnboardingCta>
          )}
        </div>
      </div>
    </section>
  );
}
