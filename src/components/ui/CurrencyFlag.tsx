import Image from "next/image";
import { getCircleFlagUrl } from "@/lib/currency-flags";
import { SUPPORTED_CURRENCIES } from "@/lib/site";

const SIZE_PX = {
  sm: 32,
  md: 44,
  lg: 56,
} as const;

type FlagSize = keyof typeof SIZE_PX;

type CurrencyFlagProps = {
  code: string;
  size?: FlagSize;
  className?: string;
};

export function CurrencyFlag({ code, size = "md", className = "" }: CurrencyFlagProps) {
  const px = SIZE_PX[size];

  return (
    <Image
      src={getCircleFlagUrl(code)}
      alt={`${code} flag`}
      width={px}
      height={px}
      className={`shrink-0 rounded-full ${className}`}
      unoptimized
    />
  );
}

type CurrencyFlagChipProps = {
  code: string;
  size?: FlagSize;
  showCode?: boolean;
};

export function CurrencyFlagChip({
  code,
  size = "md",
  showCode = true,
}: CurrencyFlagChipProps) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <CurrencyFlag code={code} size={size} />
      {showCode && (
        <span className="text-[10px] font-semibold uppercase tracking-wide text-zender-navy/55">
          {code}
        </span>
      )}
    </div>
  );
}

type CurrencyRegionGridProps = {
  layout?: "cards" | "compact";
};

export function CurrencyRegionGrid({ layout = "cards" }: CurrencyRegionGridProps) {
  return (
    <div
      className={
        layout === "cards"
          ? "grid gap-4 sm:grid-cols-2"
          : "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      }
    >
      {Object.entries(SUPPORTED_CURRENCIES).map(([region, codes]) => (
        <div
          key={region}
          className={
            layout === "cards"
              ? "glass-card rounded-2xl p-5"
              : "glass-card rounded-2xl p-6"
          }
        >
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zender-teal">
            {region}
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {codes.map((code) => (
              <CurrencyFlagChip key={code} code={code} size="md" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CurrencyFlagCloud() {
  const allCodes = Object.values(SUPPORTED_CURRENCIES).flat();

  return (
    <div className="flex flex-wrap items-end justify-center gap-5">
      {allCodes.map((code, i) => (
        <div
          key={code}
          className="transition-transform hover:-translate-y-1"
          style={{ marginTop: i % 3 === 1 ? "0.5rem" : i % 3 === 2 ? "1rem" : "0" }}
        >
          <CurrencyFlagChip code={code} size="lg" />
        </div>
      ))}
    </div>
  );
}

/** @deprecated Use CurrencyFlag */
export const CurrencyFlagCircle = CurrencyFlag;
