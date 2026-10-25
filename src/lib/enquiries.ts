export const ENQUIRY_CURRENCIES = ["USD", "EUR", "GBP", "CNY", "AED", "NGN"] as const;
export const ENQUIRY_CORRIDORS = [
  "NGN → USD",
  "NGN → EUR",
  "NGN → GBP",
  "NGN → CNY",
  "NGN → AED",
  "Other",
] as const;
export const ENQUIRY_TIMELINES = [
  "This week",
  "Within two weeks",
  "This month",
  "Planning ahead",
] as const;
export const ENQUIRY_SEGMENTS = ["importers", "general"] as const;

export type Enquiry = {
  name: string;
  email: string;
  amount: string;
  currency: (typeof ENQUIRY_CURRENCIES)[number];
  corridor: (typeof ENQUIRY_CORRIDORS)[number];
  timeline: (typeof ENQUIRY_TIMELINES)[number];
  segment: (typeof ENQUIRY_SEGMENTS)[number];
  note: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

function text(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export function parseEnquiry(
  value: unknown,
): { ok: true; enquiry: Enquiry } | { ok: true; ignored: true } | { ok: false; error: string } {
  const body = asRecord(value);
  if (!body) return { ok: false, error: "Send the enquiry as JSON." };

  if (text(body.companyWebsite, 200)) {
    return { ok: true, ignored: true };
  }

  const name = text(body.name, 80);
  const email = text(body.email, 120).toLowerCase();
  const amountRaw = text(body.amount, 24).replace(/,/g, "");
  const currency = text(body.currency, 8).toUpperCase();
  const corridor = text(body.corridor, 40);
  const timeline = text(body.timeline, 40);
  const segment = text(body.segment, 20) || "general";
  const note = text(body.note, 1000);

  if (name.length < 2) return { ok: false, error: "Add your name." };
  if (!EMAIL.test(email)) return { ok: false, error: "Add a valid email." };

  const amount = Number(amountRaw);
  if (!Number.isFinite(amount) || amount <= 0 || amount > 1_000_000_000_000) {
    return { ok: false, error: "Add the invoice amount." };
  }

  if (!ENQUIRY_CURRENCIES.includes(currency as Enquiry["currency"])) {
    return { ok: false, error: "Choose a currency." };
  }
  if (!ENQUIRY_CORRIDORS.includes(corridor as Enquiry["corridor"])) {
    return { ok: false, error: "Choose a corridor." };
  }
  if (!ENQUIRY_TIMELINES.includes(timeline as Enquiry["timeline"])) {
    return { ok: false, error: "Choose a timeline." };
  }
  if (!ENQUIRY_SEGMENTS.includes(segment as Enquiry["segment"])) {
    return { ok: false, error: "Choose an enquiry type." };
  }

  return {
    ok: true,
    enquiry: {
      name,
      email,
      amount: amount.toString(),
      currency: currency as Enquiry["currency"],
      corridor: corridor as Enquiry["corridor"],
      timeline: timeline as Enquiry["timeline"],
      segment: segment as Enquiry["segment"],
      note,
    },
  };
}
