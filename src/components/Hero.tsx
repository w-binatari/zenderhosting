import Image from "next/image";
import { HeroRateTablet } from "@/components/HeroRateTablet";
import type { FxRatesData } from "@/lib/fx-rates";
import { PHOTOS } from "@/lib/photos";
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

      <HeroRateTablet data={fxRates} />
    </section>
  );
}

export function HeroBackground() {
  const photo = PHOTOS.lekkiLagoon;

  return (
    <div className="pointer-events-none absolute inset-0">
      <Image
        src={photo.src}
        alt=""
        fill
        priority
        className="object-cover object-[center_35%]"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#021540]/80 via-[#021540]/50 to-[#021540]/85"
        aria-hidden="true"
      />
    </div>
  );
}
