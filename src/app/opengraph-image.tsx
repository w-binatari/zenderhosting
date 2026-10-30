import { brandedOgImage, OG_SIZE } from "@/lib/og";

export const alt = "Zender Finance: cross-border payments and FX desk in Lagos";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return brandedOgImage({
    eyebrow: "Cross-border payments · FX · Treasury",
    title: "Move money across borders the Zender way.",
  });
}
