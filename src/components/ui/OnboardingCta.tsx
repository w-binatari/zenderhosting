import Link from "next/link";
import { ONBOARDING_URL } from "@/lib/site";

type OnboardingCtaProps = {
  variant?: "primary" | "outline" | "white";
  className?: string;
  children?: React.ReactNode;
};

const variants = {
  primary:
    "bg-zender-teal text-white hover:bg-zender-navy",
  outline:
    "border border-zender-navy/20 text-zender-navy hover:border-zender-teal hover:text-zender-teal",
  white:
    "bg-white text-zender-navy hover:bg-zender-mint",
};

export function OnboardingCta({
  variant = "primary",
  className = "",
  children = "Open Platform",
}: OnboardingCtaProps) {
  return (
    <Link
      href={ONBOARDING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
