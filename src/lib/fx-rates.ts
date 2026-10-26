import { getDeskRatesStore, type DeskRatesStore } from "@/lib/desk-rates";

const FX_API_URL = "https://open.er-api.com/v6/latest/USD";
const REVALIDATE_SECONDS = 86_400;

export const MAJOR_CURRENCIES = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "EUR", name: "Euro", symbol: "€" },
] as const;

export type FxRate = {
  code: string;
  name: string;
  symbol: string;
  rate: number;
};

export type FxRatesData = {
  rates: FxRate[];
  updatedAt: string;
  quoteCurrency: "NGN";
  source?: "desk" | "market" | "fallback";
};

type ErApiResponse = {
  result: string;
  base_code: string;
  rates: Record<string, number>;
  time_last_update_utc: string;
};

const FALLBACK_NGN_PER_USD = 1534.2;

function deskStoreToFxData(store: DeskRatesStore): FxRatesData | null {
  const rates = MAJOR_CURRENCIES.map(({ code, name, symbol }) => {
    const rate = store.rates[code as keyof typeof store.rates];
    if (typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0) {
      return null;
    }
    return { code, name, symbol, rate };
  });

  if (rates.some((r) => r === null)) return null;

  return {
    quoteCurrency: "NGN",
    updatedAt: store.updatedAt,
    rates: rates as FxRate[],
  };
}

function buildFallbackRates(): FxRatesData {
  const usdToNgn = FALLBACK_NGN_PER_USD;

  return {
    quoteCurrency: "NGN",
    updatedAt: new Date().toUTCString(),
    source: "fallback",
    rates: MAJOR_CURRENCIES.map(({ code, name, symbol }) => {
      const crossRates: Record<string, number> = {
        USD: usdToNgn,
        GBP: usdToNgn / 0.756,
        EUR: usdToNgn / 0.877,
      };

      return { code, name, symbol, rate: crossRates[code] ?? usdToNgn };
    }),
  };
}

async function getMarketRates(): Promise<FxRatesData | null> {
  try {
    const response = await fetch(FX_API_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) return null;

    const data = (await response.json()) as ErApiResponse;

    if (data.result !== "success" || !data.rates.NGN) return null;

    const ngnPerUsd = data.rates.NGN;

    const rates: FxRate[] = MAJOR_CURRENCIES.map(({ code, name, symbol }) => {
      const unitsPerUsd = data.rates[code];

      if (!unitsPerUsd) {
        return { code, name, symbol, rate: ngnPerUsd };
      }

      const ngnPerUnit = code === "USD" ? ngnPerUsd : ngnPerUsd / unitsPerUsd;

      return { code, name, symbol, rate: ngnPerUnit };
    });

    return {
      quoteCurrency: "NGN",
      rates,
      updatedAt: data.time_last_update_utc,
      source: "market",
    };
  } catch {
    return null;
  }
}

/** Prefer treasury desk rates (WhatsApp-updated); fall back to market API. */
export async function getFxRates(): Promise<FxRatesData> {
  try {
    const desk = deskStoreToFxData(await getDeskRatesStore());
    if (desk) {
      return { ...desk, source: "desk" };
    }
  } catch {
    // continue to market / fallback
  }

  return (await getMarketRates()) ?? buildFallbackRates();
}

export function formatNgnRate(rate: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rate);
}

export { formatUpdatedAt } from "@/lib/rate-stamp";
