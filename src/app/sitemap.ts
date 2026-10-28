import type { MetadataRoute } from "next";
import { LANDING_PAGES } from "@/content/landing-pages";
import { RATE_PAIRS } from "@/content/rate-pairs";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

const STATIC_PATHS: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/fx-rates", priority: 0.9, changeFrequency: "daily" },
  { path: "/importers", priority: 0.9, changeFrequency: "weekly" },
  { path: "/products", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/cookies", priority: 0.2, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return [
    ...STATIC_PATHS.map(({ path, priority, changeFrequency }) => ({
      url: absoluteUrl(path),
      priority,
      changeFrequency,
    })),
    ...RATE_PAIRS.map((pair) => ({
      url: absoluteUrl(`/rates/${pair.slug}`),
      priority: 0.9,
      changeFrequency: "daily" as const,
    })),
    ...LANDING_PAGES.map((page) => ({
      url: absoluteUrl(`/${page.slug}`),
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.updated ?? post.date,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
  ];
}
