import Link from "next/link";
import { BRAND_POSITIONING, BRAND_TAGLINE } from "@/lib/site";

export function AboutTeaser() {
  return (
    <section className="bg-gradient-to-b from-zender-mint/30 to-white px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] glass-card p-10 lg:grid-cols-2 lg:items-center lg:p-14">
        <div>
          <p className="nav-link text-zender-teal">About Zender</p>
          <h2 className="mt-3 text-3xl font-semibold text-zender-navy">{BRAND_TAGLINE}</h2>
          <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
            {BRAND_POSITIONING}
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <p className="max-w-md text-sm leading-relaxed text-zender-navy/65 lg:text-right">
            Calm, intelligent, and relationship-focused, built for African
            businesses navigating cross-border finance with greater confidence.
          </p>
          <Link
            href="/about"
            className="nav-link text-zender-teal transition hover:text-zender-navy lg:text-right"
          >
            Our story →
          </Link>
        </div>
      </div>
    </section>
  );
}
