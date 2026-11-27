import { getRatePair, RATE_PAIRS } from "@/content/rate-pairs";
import { brandedOgImage, OG_SIZE } from "@/lib/og";

export const alt = "Indicative naira exchange rate from Zender Finance";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return RATE_PAIRS.map((pair) => ({ pair: pair.slug }));
}

export default async function Image({ params }: { params: Promise<{ pair: string }> }) {
  const pair = getRatePair((await params).pair);
  return brandedOgImage({
    eyebrow: "Indicative desk rate",
    title: pair ? `${pair.everyday} to naira (${pair.code} to NGN)` : "Naira exchange rates",
  });
}
