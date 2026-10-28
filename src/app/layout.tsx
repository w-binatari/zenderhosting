import type { Metadata } from "next";
import { DM_Sans, Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { organizationJsonLd, SITE_URL, websiteJsonLd } from "@/lib/seo";
import { BRAND_DESCRIPTION, BRAND_NAME, BRAND_TAGLINE } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} | ${BRAND_TAGLINE}`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: BRAND_DESCRIPTION,
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} | ${BRAND_TAGLINE}`,
    description: BRAND_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} | ${BRAND_TAGLINE}`,
    description: BRAND_DESCRIPTION,
  },
  // Paste the codes from Google Search Console / Bing Webmaster into these Vercel env vars.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <body className={`${dmSans.variable} ${oswald.variable} font-sans antialiased`}>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        {children}
        <WhatsAppButton />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
