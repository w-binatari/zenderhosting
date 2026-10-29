import type { Metadata } from "next";
import {
  BRAND_DESCRIPTION,
  BRAND_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SOCIAL_LINKS,
} from "@/lib/site";

export const SITE_URL = "https://www.zenderfinance.com";

type PageMetadataInput = {
  /** Page title; the layout template appends "| Zender Finance". */
  title: string;
  description: string;
  /** Path from the site root, e.g. "/fx-rates". Used for the canonical URL. */
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  /** Use the title as-is, without the brand suffix. */
  absoluteTitle?: boolean;
  /** Share image path; pages with their own opengraph-image file pass `${path}/opengraph-image`. */
  image?: string;
};

/**
 * Per-page metadata with a canonical URL and matching Open Graph/Twitter
 * fields. Preview images come from the nearest opengraph-image file.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  publishedTime,
  absoluteTitle = false,
  image = "/opengraph-image",
}: PageMetadataInput): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | ${BRAND_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_NG",
      url: path,
      siteName: BRAND_NAME,
      title: socialTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

/** Business details for search engines, rendered once in the root layout. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo-512.png"),
      width: 512,
      height: 512,
    },
    image: absoluteUrl("/og-image.jpg"),
    description: BRAND_DESCRIPTION,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    areaServed: ["Nigeria", "Africa"],
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BRAND_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
