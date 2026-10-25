"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CurrencyFlag } from "@/components/ui/CurrencyFlag";
import { ENQUIRY_CORRIDORS, ENQUIRY_CURRENCIES } from "@/lib/enquiries";
import {
  convertAmount,
  formatMoney,
  type QuoteCurrency,
} from "@/lib/convert";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-zender-navy/15 bg-white px-4 py-3 text-sm text-zender-navy outline-none transition focus:border-zender-teal";

type CurrencyConverterProps = {
  currencies: QuoteCurrency[];
};

export function CurrencyConverter({ currencies }: CurrencyConverterProps) {
  const usd = currencies.some((currency) => currency.code === "USD");
  const [amountText, setAmountText] = useState("1000");
  const [fromCode, setFromCode] = useState(usd ? "USD" : currencies[0]?.code ?? "NGN");
  const [toCode, setToCode] = useState(
    currencies.some((currency) => currency.code === "NGN") ? "NGN" : currencies[1]?.code ?? "NGN",
  );

  const from = currencies.find((currency) => currency.code === fromCode) ?? currencies[0];
  const to = currencies.find((currency) => currency.code === toCode) ?? currencies[0];
  const amount = Number(amountText);
  const result =
    from && to ? convertAmount(amount, from.ngnPerUnit, to.ngnPerUnit) : null;
  const unit =
    from && to ? convertAmount(1, from.ngnPerUnit, to.ngnPerUnit) : null;

  const deskHref = useMemo(() => {
    if (!from || !to || result === null || !(amount > 0)) return "/contact#enquiry";

    const foreign = from.code === "NGN" ? to.code : to.code === "NGN" ? from.code : null;
    const corridor =
      (foreign && ENQUIRY_CORRIDORS.find((item) => item === `NGN → ${foreign}`)) || "Other";
    const invoiceAmount = foreign && from.code === "NGN" ? result : amount;
    const currency =
      foreign ??
      (ENQUIRY_CURRENCIES.includes(from.code as (typeof ENQUIRY_CURRENCIES)[number])
        ? from.code
        : "USD");
    const params = new URLSearchParams({
      amount: invoiceAmount.toFixed(2),
      currency,
      corridor,
      note: `Indicative conversion: ${amountText || amount} ${from.code} → ${formatMoney(result, to.code)}`,
    });
    return `/contact?${params.toString()}#enquiry`;
  }, [amount, amountText, from, result, to]);

  if (!from || !to) return null;

  return (
    <div className="glass-card rounded-2xl p-6 shadow-xl sm:p-8">
      <div>
        <label htmlFor="convert-amount" className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55">
          Amount
        </label>
        <input
          id="convert-amount"
          inputMode="decimal"
          value={amountText}
          onChange={(event) => setAmountText(event.target.value.replace(/[^\d.]/g, ""))}
          className={fieldClass}
        />
      </div>

      <div className="mt-4 grid items-end gap-3 sm:grid-cols-[1fr_auto_1fr]">
        <CurrencySelect
          id="convert-from"
          label="From"
          value={from.code}
          currencies={currencies}
          onChange={setFromCode}
        />
        <button
          type="button"
          onClick={() => {
            setFromCode(to.code);
            setToCode(from.code);
          }}
          className="mb-0.5 inline-flex h-12 w-12 items-center justify-center justify-self-center rounded-full border border-zender-navy/15 text-zender-navy transition hover:border-zender-teal hover:text-zender-teal"
          aria-label="Swap currencies"
        >
          ⇄
        </button>
        <CurrencySelect
          id="convert-to"
          label="To"
          value={to.code}
          currencies={currencies}
          onChange={setToCode}
        />
      </div>

      <div className="mt-6 rounded-2xl bg-zender-mint/60 px-5 py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-zender-teal">
          Indicative amount
        </p>
        <p className="mt-2 text-3xl font-semibold tabular-nums text-zender-navy">
          {result === null ? "—" : formatMoney(result, to.code)}
        </p>
        {unit !== null && from.code !== to.code ? (
          <p className="mt-2 text-sm text-zender-navy/60">
            1 {from.code} = {formatMoney(unit, to.code)}
          </p>
        ) : null}
      </div>

      <Link
        href={deskHref}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-zender-teal px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-zender-navy"
      >
        Confirm this amount with the desk
      </Link>
      <p className="mt-3 text-center text-xs leading-relaxed text-zender-navy/50">
        Same desk references as the rate board on this page. This is not a
        confirmed rate and it is not a payment instruction.
      </p>
    </div>
  );
}

function CurrencySelect({
  id,
  label,
  value,
  currencies,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  currencies: QuoteCurrency[];
  onChange: (code: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55">
        {label}
      </label>
      <div className="relative mt-1.5">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
          <CurrencyFlag code={value} size="sm" className="h-6 w-6" />
        </span>
        <select
          id={id}
          value={value}
          title={currencies.find((currency) => currency.code === value)?.name}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-xl border border-zender-navy/15 bg-white py-3 pl-12 pr-8 text-sm font-medium text-zender-navy outline-none transition focus:border-zender-teal"
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
