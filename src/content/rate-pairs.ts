/** Currency-pair rate pages at /rates/<slug>. Codes must exist in the desk snapshot. */
export const RATE_PAIRS = [
  {
    slug: "usd-to-ngn",
    code: "USD",
    name: "US Dollar",
    everyday: "Dollar",
    keywords: ["dollar to naira", "dollar to naira rate today", "USD to NGN", "1 dollar to naira", "naira to dollar"],
  },
  {
    slug: "gbp-to-ngn",
    code: "GBP",
    name: "British Pound",
    everyday: "Pound",
    keywords: ["pound to naira", "pound to naira rate today", "GBP to NGN", "1 pound to naira", "naira to pound"],
  },
  {
    slug: "eur-to-ngn",
    code: "EUR",
    name: "Euro",
    everyday: "Euro",
    keywords: ["euro to naira", "euro to naira rate today", "EUR to NGN", "1 euro to naira", "naira to euro"],
  },
] as const;

export type RatePair = (typeof RATE_PAIRS)[number];

export function getRatePair(slug: string): RatePair | undefined {
  return RATE_PAIRS.find((pair) => pair.slug === slug);
}
