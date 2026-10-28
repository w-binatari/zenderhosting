import type { MetadataRoute } from "next";

const SITE_URL = "https://www.zenderfinance.com";
const PATHS = ["", "/products", "/importers", "/fx-rates", "/about", "/faq", "/contact", "/cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({ url: `${SITE_URL}${path}` }));
}
