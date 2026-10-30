import { createHmac, timingSafeEqual } from "crypto";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import {
  formatRatesSummary,
  parseRatesMessage,
  saveDeskRates,
} from "@/lib/desk-rates";
import {
  extractWhatsAppMessages,
  isAllowedWhatsAppSender,
  sendWhatsAppText,
} from "@/lib/whatsapp";

export const runtime = "nodejs";

/** Meta webhook verification */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (
    mode === "subscribe" &&
    token &&
    token === process.env.WHATSAPP_VERIFY_TOKEN &&
    challenge
  ) {
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

/** Meta signs each webhook body with the app secret; anything unsigned is forged. */
function hasValidSignature(rawBody: string, header: string | null): boolean {
  const secret = process.env.WHATSAPP_APP_SECRET;
  if (!secret || !header?.startsWith("sha256=")) return false;

  const expected = createHmac("sha256", secret).update(rawBody).digest();
  const received = Buffer.from(header.slice("sha256=".length), "hex");
  return received.length === expected.length && timingSafeEqual(received, expected);
}

/** Incoming WhatsApp messages, update desk rates */
export async function POST(request: Request) {
  const rawBody = await request.text();
  if (!hasValidSignature(rawBody, request.headers.get("x-hub-signature-256"))) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let payload: unknown;

  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const messages = extractWhatsAppMessages(payload);

  // Always 200 quickly so Meta doesn't retry
  if (messages.length === 0) {
    return NextResponse.json({ ok: true });
  }

  for (const message of messages) {
    if (!isAllowedWhatsAppSender(message.from)) {
      await sendWhatsAppText(
        message.phoneNumberId,
        message.from,
        "This number is not authorised to update Zender rates.",
      );
      continue;
    }

    const parsed = parseRatesMessage(message.body);
    if (!parsed) {
      await sendWhatsAppText(
        message.phoneNumberId,
        message.from,
        "Send rates like:\nUSD 1650\nGBP 2100\nEUR 1780",
      );
      continue;
    }

    try {
      const stored = await saveDeskRates(parsed, `whatsapp:${message.from}`);
      revalidatePath("/");
      revalidatePath("/fx-rates");

      await sendWhatsAppText(
        message.phoneNumberId,
        message.from,
        `Rates updated ✓\n${formatRatesSummary(stored)}`,
      );
    } catch (error) {
      const detail =
        error instanceof Error ? error.message : "Could not save rates.";
      await sendWhatsAppText(
        message.phoneNumberId,
        message.from,
        `Update failed: ${detail}`,
      );
    }
  }

  return NextResponse.json({ ok: true });
}
