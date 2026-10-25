import Link from "next/link";
import { FramedPhoto } from "@/components/ui/FramedPhoto";
import { PHOTOS } from "@/lib/photos";
import { BRAND_POSITIONING, BRAND_TAGLINE } from "@/lib/site";

export function AboutTeaser() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <FramedPhoto
          photo={PHOTOS.deskWork}
          className="aspect-[4/3]"
          imageClassName="object-cover object-[center_20%]"
          sizes="(min-width: 1024px) 36rem, 100vw"
        />
        <div className="rounded-[2rem] border border-zender-navy/8 p-8 lg:p-12">
          <p className="nav-link text-zender-teal">About Zender</p>
          <h2 className="mt-3 text-3xl font-semibold text-zender-navy">{BRAND_TAGLINE}</h2>
          <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
            {BRAND_POSITIONING}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-zender-navy/65">
            Calm, intelligent, and relationship-focused, built for African
            businesses navigating cross-border finance with greater confidence.
          </p>
          <Link
            href="/about"
            className="nav-link mt-8 inline-flex text-zender-teal transition hover:text-zender-navy"
          >
            Our story →
          </Link>
        </div>
      </div>
    </section>
  );
}
