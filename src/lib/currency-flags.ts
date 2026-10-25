/** ISO 4217 currency → ISO 3166-1 alpha-2 for circle-flags CDN */
export const CURRENCY_COUNTRY_CODES: Record<string, string> = {
  NGN: "ng",
  GHS: "gh",
  KES: "ke",
  ZAR: "za",
  UGX: "ug",
  XOF: "sn",
  XAF: "cm",
  EGP: "eg",
  EUR: "eu",
  GBP: "gb",
  CHF: "ch",
  USD: "us",
  CAD: "ca",
  AED: "ae",
  INR: "in",
  CNY: "cn",
};

const CIRCLE_FLAGS_CDN = "https://hatscripts.github.io/circle-flags/flags";

/** Circular SVG flag from circle-flags (HatScripts) */
export function getCircleFlagUrl(currencyCode: string): string {
  const country = CURRENCY_COUNTRY_CODES[currencyCode] ?? currencyCode.toLowerCase();
  return `${CIRCLE_FLAGS_CDN}/${country}.svg`;
}

export function getCurrencyCountryCode(currencyCode: string): string {
  return CURRENCY_COUNTRY_CODES[currencyCode] ?? currencyCode.toLowerCase();
}
