import { CurrencyFlag } from "@/components/ui/CurrencyFlag";
import { formatNgnRate, type FxRatesData } from "@/lib/fx-rates";
import { formatUpdatedAt } from "@/lib/rate-stamp";

type FxRatesCardProps = {
  data: FxRatesData;
  className?: string;
};

export function FxRatesCard({ data, className = "" }: FxRatesCardProps) {
  const updatedLabel = formatUpdatedAt(data.updatedAt);

  return (
    <div
      className={`glass-panel flex w-full max-w-3xl flex-col justify-center rounded-lg px-6 py-7 sm:aspect-[5/2] sm:min-h-[280px] sm:px-8 sm:py-8 lg:min-h-[320px] ${className || "mt-10"}`}
      aria-label="Major currency exchange rates against Nigerian Naira"
    >
      <ul className="space-y-3 sm:space-y-3.5">
        {data.rates.map((rate) => (
          <li
            key={rate.code}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex min-w-0 items-center gap-3">
              <CurrencyFlag code={rate.code} size="sm" />
              <div className="min-w-0 text-left">
                <p className="text-sm font-semibold text-white">
                  {rate.code}
                  <span className="mx-1.5 text-white/70">→</span>
                  {data.quoteCurrency}
                </p>
                <p className="truncate text-xs text-white/70">{rate.name}</p>
              </div>
            </div>
            <p className="shrink-0 text-right text-sm font-semibold tabular-nums text-white sm:text-base">
              {formatNgnRate(rate.rate)}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-center text-[10px] text-white/70">
        {updatedLabel
          ? `Indicative desk rates · Updated ${updatedLabel}`
          : "Indicative desk rates"}
      </p>
    </div>
  );
}
