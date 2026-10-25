import { put, list } from "@vercel/blob";
import { readFile } from "fs/promises";
import path from "path";

export const DESK_RATE_CODES = ["USD", "GBP", "EUR"] as const;

export type DeskRateCode = (typeof DESK_RATE_CODES)[number];

export type DeskRatesStore = {
  quoteCurrency: "NGN";
  updatedAt: string;
  updatedBy?: string;
  rates: Partial<Record<DeskRateCode, number>>;
};

const BLOB_PATHNAME = "desk-rates.json";

function seedPath() {
  return path.join(process.cwd(), "data", "desk-rates.json");
}

async function readSeed(): Promise<DeskRatesStore> {
  const raw = await readFile(seedPath(), "utf8");
  return JSON.parse(raw) as DeskRatesStore;
}

async function readFromBlob(): Promise<DeskRatesStore | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;

  try {
    const { blobs } = await list({
      prefix: BLOB_PATHNAME,
      limit: 1,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    const blob = blobs.find((b) => b.pathname === BLOB_PATHNAME) ?? blobs[0];
    if (!blob?.url) return null;

    const response = await fetch(blob.url, { cache: "no-store" });
    if (!response.ok) return null;

    return (await response.json()) as DeskRatesStore;
  } catch {
    return null;
  }
}

export async function getDeskRatesStore(): Promise<DeskRatesStore> {
  const fromBlob = await readFromBlob();
  if (fromBlob?.rates) return fromBlob;
  return readSeed();
}

export function parseRatesMessage(text: string): Record<string, number> | null {
  const cleaned = text
    .replace(/^(rates?|update|set)\s*[:=\-]?\s*/i, "")
    .trim();

  if (!cleaned) return null;

  const pairs = [
    ...cleaned.matchAll(
      /\b(USD|GBP|EUR)\b\s*[:=\-]?\s*([\d,]+(?:\.\d+)?)/gi,
    ),
  ];

  if (pairs.length === 0) return null;

  const rates: Record<string, number> = {};
  for (const match of pairs) {
    const code = match[1].toUpperCase();
    const value = Number(match[2].replace(/,/g, ""));
    if (!Number.isFinite(value) || value <= 0) continue;
    rates[code] = value;
  }

  return Object.keys(rates).length > 0 ? rates : null;
}

export async function saveDeskRates(
  partialRates: Record<string, number>,
  updatedBy: string,
): Promise<DeskRatesStore> {
  const current = await getDeskRatesStore();
  const next: DeskRatesStore = {
    quoteCurrency: "NGN",
    updatedAt: new Date().toISOString(),
    updatedBy,
    rates: {
      ...current.rates,
      ...partialRates,
    },
  };

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error(
      "BLOB_READ_WRITE_TOKEN is not set. Add Vercel Blob to persist rate updates.",
    );
  }

  await put(BLOB_PATHNAME, JSON.stringify(next, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  return next;
}

export function formatRatesSummary(store: DeskRatesStore): string {
  return DESK_RATE_CODES.map((code) => {
    const value = store.rates[code];
    return value != null ? `${code} ${value}` : null;
  })
    .filter(Boolean)
    .join(" · ");
}
