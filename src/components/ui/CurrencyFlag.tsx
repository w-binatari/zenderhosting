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
        <span className="text-xs font-medium text-zender-navy/70">
          {code}
        </span>
      )}
    </div>
  );
}

export function CurrencyRegionGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {Object.entries(SUPPORTED_CURRENCIES).map(([region, codes]) => (
        <div key={region}>
          <h3 className="border-b border-zender-navy/12 pb-3 text-base font-semibold text-zender-navy">
            {region}
          </h3>
          <div className="mt-5 flex flex-wrap gap-4">
            {codes.map((code) => (
              <CurrencyFlagChip key={code} code={code} size="md" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** @deprecated Use CurrencyFlag */
export const CurrencyFlagCircle = CurrencyFlag;
