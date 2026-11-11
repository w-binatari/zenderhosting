import { timingSafeEqual } from "crypto";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import {
  formatRatesSummary,
  getDeskRatesStore,
  parseRatesMessage,
  saveDeskRates,
} from "@/lib/desk-rates";

export const runtime = "nodejs";

function isAuthorized(request: Request, secret: string): boolean {
  const received = Buffer.from(request.headers.get("authorization") ?? "");
  const expected = Buffer.from(`Bearer ${secret}`);
  return received.length === expected.length && timingSafeEqual(received, expected);
}

/**
 * Backup update endpoint (curl / Shortcuts) when WhatsApp is unavailable.
 * Authorization: Bearer <RATES_UPDATE_SECRET>
 * Body: { "text": "USD 1650 GBP 2100" } or { "rates": { "USD": 1650 } }
 */
export async function POST(request: Request) {
  const secret = process.env.RATES_UPDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "RATES_UPDATE_SECRET is not configured" },
      { status: 503 },
    );
  }

  if (!isAuthorized(request, secret)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { text?: string; rates?: Record<string, number> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed =
    body.rates && Object.keys(body.rates).length > 0
      ? body.rates
      : body.text
        ? parseRatesMessage(body.text)
        : null;

  if (!parsed) {
    return NextResponse.json(
      {
        error: "Could not parse rates",
        hint: 'Send { "text": "USD 1650 GBP 2100 EUR 1780" }',
      },
      { status: 400 },
    );
  }

  try {
    const stored = await saveDeskRates(parsed, "api");
    revalidatePath("/");
    revalidatePath("/fx-rates");

    return NextResponse.json({
      ok: true,
      summary: formatRatesSummary(stored),
      store: stored,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Save failed",
      },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  const secret = process.env.RATES_UPDATE_SECRET;

  if (!secret || !isAuthorized(request, secret)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const store = await getDeskRatesStore();
  return NextResponse.json(store);
}
