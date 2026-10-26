export type QuoteCurrency = {
  code: string;
  name: string;
  /** Naira per 1 unit. NGN itself is 1. */
  ngnPerUnit: number;
};

type RateSnapshot = {
  rates: { code: string; name: string; rate: number }[];
};

/** Currencies the converter can use: naira plus whatever the desk snapshot includes. */
export function quoteCurrencies(data: RateSnapshot): QuoteCurrency[] {
  return [
    { code: "NGN", name: "Nigerian Naira", ngnPerUnit: 1 },
    ...data.rates.map((rate) => ({
      code: rate.code,
      name: rate.name,
      ngnPerUnit: rate.rate,
    })),
  ];
}

/** Convert through naira so any two desk currencies share one calculation. */
export function convertAmount(
  amount: number,
  fromNgnPerUnit: number,
  toNgnPerUnit: number,
): number | null {
  if (!Number.isFinite(amount) || amount < 0) return null;
  if (!(fromNgnPerUnit > 0) || !(toNgnPerUnit > 0)) return null;
  return (amount * fromNgnPerUnit) / toNgnPerUnit;
}

export type EquivalentRow = {
  code: string;
  name: string;
  value: number | null;
};

/**
 * Other currencies for one amount. Naira is the first row unless the amount
 * is already in naira, in which case the desk currencies stay in snapshot order.
 */
export function equivalentRows(
  amount: number,
  fromCode: string,
  currencies: QuoteCurrency[],
): EquivalentRow[] {
  const from = currencies.find((currency) => currency.code === fromCode);
  if (!from) return [];

  const ordered =
    fromCode === "NGN"
      ? currencies.filter((currency) => currency.code !== "NGN")
      : [
          ...currencies.filter((currency) => currency.code === "NGN"),
          ...currencies.filter(
            (currency) => currency.code !== "NGN" && currency.code !== fromCode,
          ),
        ];

  return ordered.map((currency) => ({
    code: currency.code,
    name: currency.name,
    value: convertAmount(amount, from.ngnPerUnit, currency.ngnPerUnit),
  }));
}

export function formatMoney(amount: number, currency: string): string {
  const abs = Math.abs(amount);
  const digits = abs > 0 && abs < 100 ? 4 : 2;

  try {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: digits,
    }).format(amount);
  } catch {
    return `${amount.toFixed(digits)} ${currency}`;
  }
}
