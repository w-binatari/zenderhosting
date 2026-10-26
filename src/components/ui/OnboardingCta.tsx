import Link from "next/link";
import { ONBOARDING_URL } from "@/lib/site";

type OnboardingCtaProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
};

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
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
      className={`btn ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
