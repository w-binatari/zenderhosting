import Image from "next/image";
import { getCircleFlagUrl } from "@/lib/currency-flags";

type ProductIconProps = {
  slug: string;
  className?: string;
};

export function ProductIcon({ slug, className = "h-6 w-6" }: ProductIconProps) {
  if (slug === "cross-border-payments" || slug === "cross-border-transfers") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 8h11l-3-3m3 3-3 3M20 16H9l3 3m-3-3 3-3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (slug === "fx-treasury" || slug === "otc-treasury") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 18V6m0 12h16M8 14l3-4 3 2 4-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (slug === "corporate-payments" || slug === "lending-solutions") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18M7 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v18M7 8h10a3 3 0 010 6H9a3 3 0 000 6h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TransferMockup() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white p-5 shadow-2xl shadow-zender-navy/10">
      <div className="flex items-center justify-between border-b border-zender-navy/8 pb-4">
        <div>
          <p className="text-xs text-zender-navy/45">Send transfer</p>
          <p className="text-lg font-semibold text-zender-navy">£2,500.00</p>
        </div>
        <span className="rounded-full bg-zender-mint px-3 py-1 text-xs font-semibold text-zender-teal">
          Live rate
        </span>
      </div>
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between rounded-xl bg-zender-mint/60 px-4 py-3">
          <span className="text-sm text-zender-navy/70">GBP → NGN</span>
          <span className="font-semibold text-zender-navy">₦4,545,000</span>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-zender-navy/8 px-4 py-3">
          <Image
            src={getCircleFlagUrl("NGN")}
            alt="Nigeria"
            width={28}
            height={28}
            className="shrink-0 rounded-full"
            unoptimized
          />
          <div>
            <p className="text-sm font-medium text-zender-navy">Lagos Business Account</p>
            <p className="text-xs text-zender-navy/45">Settlement · Same day</p>
          </div>
        </div>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-zender-mint">
        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-zender-teal to-zender-navy" />
      </div>
      <p className="mt-2 text-xs text-zender-navy/45">Processing transfer…</p>
    </div>
  );
}

export function FxMockup() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white p-5 shadow-2xl shadow-zender-navy/10">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs text-zender-navy/45">USD / NGN</p>
          <p className="text-2xl font-semibold text-zender-navy">1,378.21</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
          +0.12%
        </span>
      </div>
      <svg viewBox="0 0 280 80" className="mt-4 w-full" aria-hidden="true">
        <defs>
          <linearGradient id="fxFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00BB76" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00BB76" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 55 C40 48, 80 62, 120 40 S200 20, 280 30 L280 80 L0 80 Z"
          fill="url(#fxFill)"
        />
        <path
          d="M0 55 C40 48, 80 62, 120 40 S200 20, 280 30"
          fill="none"
          stroke="#00BB76"
          strokeWidth="2.5"
        />
      </svg>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {["USD", "GBP", "EUR"].map((c) => (
          <div key={c} className="rounded-lg bg-zender-mint/50 px-2 py-2 text-center text-xs font-semibold text-zender-navy">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CorporateMockup() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white p-5 shadow-2xl shadow-zender-navy/10">
      <p className="text-xs font-semibold uppercase tracking-wider text-zender-teal">
        Bulk payout · 12 recipients
      </p>
      <div className="mt-4 space-y-2">
        {[
          { name: "Vendor A, Accra", amount: "$4,200" },
          { name: "Vendor B, Nairobi", amount: "$1,850" },
          { name: "Vendor C, Lagos", amount: "₦2.1M" },
        ].map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between rounded-xl border border-zender-navy/8 px-3 py-2.5"
          >
            <span className="text-sm text-zender-navy/75">{row.name}</span>
            <span className="text-sm font-semibold text-zender-navy">{row.amount}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-xl bg-zender-navy px-4 py-3 text-white">
        <span className="text-sm">Approve batch</span>
        <span className="text-xs text-white/60">3 of 3 verified</span>
      </div>
    </div>
  );
}

export function CollectionsMockup() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white p-5 shadow-2xl shadow-zender-navy/10">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-zender-navy">Incoming collections</p>
        <span className="text-xs text-zender-navy/45">Today</span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-zender-mint/70 p-4">
          <p className="text-2xl font-bold text-zender-teal">₦8.4M</p>
          <p className="mt-1 text-xs text-zender-navy/55">Received</p>
        </div>
        <div className="rounded-xl border border-zender-navy/8 p-4">
          <p className="text-2xl font-bold text-zender-navy">14</p>
          <p className="mt-1 text-xs text-zender-navy/55">Transactions</p>
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-dashed border-zender-teal/40 bg-zender-teal/5 px-4 py-3 text-center text-xs text-zender-navy/60">
        Payment link · zender.finance/pay/acme-co
      </div>
    </div>
  );
}

export function ProductMockup({ slug }: { slug: string }) {
  switch (slug) {
    case "cross-border-payments":
    case "cross-border-transfers":
      return <TransferMockup />;
    case "fx-treasury":
    case "otc-treasury":
      return <FxMockup />;
    case "corporate-payments":
    case "lending-solutions":
      return <CorporateMockup />;
    case "collections":
    case "partnerships":
      return <CollectionsMockup />;
    default:
      return <TransferMockup />;
  }
}

export function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zender-navy/10 bg-white shadow-2xl shadow-zender-navy/15">
      <div className="flex items-center gap-2 border-b border-zender-navy/8 bg-zender-mint/40 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-[10px] text-zender-navy/40">
          app.zenderfinance.com
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
