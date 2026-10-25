import Link from "next/link";
import Image from "next/image";
import { FxRatesCard } from "@/components/FxRatesCard";
import type { FxRatesData } from "@/lib/fx-rates";
import { HERO_HEADLINE, HERO_SUBCOPY } from "@/lib/site";

type HeroProps = {
  fxRates: FxRatesData;
};

export function Hero({ fxRates }: HeroProps) {
  return (
    <section
      id="fx-rates"
      className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-20 pt-4 text-center lg:px-8"
    >
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
        {HERO_HEADLINE}
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
        {HERO_SUBCOPY}
      </p>

      <FxRatesCard data={fxRates} />

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/contact"
          className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-zender-mint px-8 py-3.5 text-[15px] font-semibold text-zender-navy transition hover:bg-white"
        >
          Contact Treasury Desk
        </Link>
        <Link
          href="/fx-rates#convert"
          className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/60 bg-transparent px-8 py-3.5 text-[15px] font-semibold text-white transition hover:border-white hover:bg-white/10"
        >
          Convert an amount
        </Link>
      </div>
    </section>
  );
}

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Image
        src="/hero.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#00BB76] to-[#031C66] opacity-80"
        aria-hidden="true"
      />
    </div>
  );
}
