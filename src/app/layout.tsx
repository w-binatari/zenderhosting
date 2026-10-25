import type { Metadata } from "next";
import { DM_Sans, Oswald } from "next/font/google";
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
  title: `${BRAND_NAME} | ${BRAND_TAGLINE}`,
  description: BRAND_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
