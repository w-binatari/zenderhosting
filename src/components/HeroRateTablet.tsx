"use client";

import { useState } from "react";
import Link from "next/link";
import { CurrencyFlag } from "@/components/ui/CurrencyFlag";
import { ENQUIRY_CORRIDORS } from "@/lib/enquiries";
import {
  equivalentRows,
  formatMoney,
  quoteCurrencies,
} from "@/lib/convert";
import type { FxRatesData } from "@/lib/fx-rates";
import { formatUpdatedAt } from "@/lib/rate-stamp";

const CURRENCIES = ["USD", "GBP", "EUR", "NGN"] as const;

type HeroRateTabletProps = {
  data: FxRatesData;
};

export function HeroRateTablet({ data }: HeroRateTabletProps) {
  const currencies = quoteCurrencies(data);
  const [amountText, setAmountText] = useState("1");
  const [fromCode, setFromCode] = useState<(typeof CURRENCIES)[number]>("USD");

  const available = CURRENCIES.filter((code) =>
    currencies.some((currency) => currency.code === code),
  );
  const from = available.includes(fromCode) ? fromCode : available[0];
  const amount = amountText === "" ? Number.NaN : Number(amountText);
  const rows = from ? equivalentRows(amount, from, currencies) : [];
  const customised = amountText !== "1" || from !== "USD";
  const deskHref =
    customised && data.source !== "fallback" && from
      ? enquiryHref(amountText, amount, from, rows)
      : "/contact";

  const updatedLabel = formatUpdatedAt(data.updatedAt);
  const rateLine =
    data.source === "market"
      ? "Indicative market references"
      : data.source === "fallback"
        ? "Indicative references"
        : "Indicative desk rates";

  return (
    <>
      <div
        className="glass-panel mt-10 flex w-full max-w-3xl flex-col justify-center rounded-[2rem] px-6 py-7 sm:px-8 sm:py-8"
        aria-label="Convert an amount against indicative rates"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0 flex-1 text-left">
            <label
              htmlFor="hero-amount"
              className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/50"
            >
              Amount
            </label>
            <input
              id="hero-amount"
              inputMode="decimal"
              autoComplete="off"
              value={amountText}
              placeholder="0"
              onChange={(event) =>
                setAmountText(event.target.value.replace(/[^\d.]/g, ""))
              }
              className="mt-1 w-full bg-transparent text-3xl font-semibold tabular-nums text-white outline-none placeholder:text-white/30 sm:text-4xl"
            />
          </div>
          <div
            role="radiogroup"
            aria-label="Currency of the amount"
            className="flex shrink-0 gap-1 self-start rounded-full bg-white/15 p-1 sm:self-auto"
          >
            {available.map((code) => {
              const selected = code === from;
              return (
                <button
                  key={code}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setFromCode(code)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    selected
                      ? "bg-white text-zender-navy"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {code}
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 sm:space-y-3.5">
          {rows.map((row) => (
            <li key={row.code} className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <CurrencyFlag code={row.code} size="sm" />
                <div className="min-w-0 text-left">
                  <p className="text-sm font-semibold text-white">
                    {from}
                    <span className="mx-1.5 text-white/35">→</span>
                    {row.code}
                  </p>
                  <p className="truncate text-xs text-white/55">{row.name}</p>
                </div>
              </div>
              <p className="shrink-0 text-right text-sm font-semibold tabular-nums text-white sm:text-base">
                {row.value === null ? "—" : formatMoney(row.value, row.code)}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-center text-[10px] text-white/40">
          {updatedLabel ? `${rateLine} · Updated ${updatedLabel}` : rateLine}
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href={deskHref}
          className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-zender-mint px-8 py-3.5 text-[15px] font-semibold text-zender-navy transition hover:bg-white"
        >
          Contact Treasury Desk
        </Link>
        <a
          href="#hero-amount"
          onClick={(event) => {
            event.preventDefault();
            document.getElementById("hero-amount")?.focus();
          }}
          className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/60 bg-transparent px-8 py-3.5 text-[15px] font-semibold text-white transition hover:border-white hover:bg-white/10"
        >
          Convert an amount
        </a>
      </div>
    </>
  );
}

function enquiryHref(
  amountText: string,
  amount: number,
  fromCode: string,
  rows: { code: string; value: number | null }[],
): string {
  if (!(amount > 0)) return "/contact";

  const foreign = fromCode === "NGN" ? "USD" : fromCode;
  const corridor =
    ENQUIRY_CORRIDORS.find((item) => item === `NGN → ${foreign}`) ?? "Other";
  const foreignValue =
    fromCode === "NGN" ? rows.find((row) => row.code === "USD")?.value : amount;
  if (foreignValue == null || !(foreignValue > 0)) return "/contact";

  const note = `Indicative conversion: ${amountText} ${fromCode} → ${rows
    .map((row) =>
      row.value === null ? `${row.code} —` : formatMoney(row.value, row.code),
    )
    .join("; ")}`;

  const params = new URLSearchParams({
    amount: foreignValue.toFixed(2),
    currency: foreign,
    corridor,
    note,
  });
  return `/contact?${params.toString()}#enquiry`;
}
