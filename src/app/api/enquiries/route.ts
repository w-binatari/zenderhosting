import { recordEnquiry } from "@/lib/crm";
import { parseEnquiry } from "@/lib/enquiries";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Send the enquiry as JSON." }, { status: 400 });
  }

  const parsed = parseEnquiry(payload);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }
  if ("ignored" in parsed) {
    return NextResponse.json({ ok: true });
  }

  try {
    await recordEnquiry(parsed.enquiry);
  } catch (error) {
    console.error(
      "enquiry crm failed",
      error instanceof Error ? error.message : "unknown",
    );
    return NextResponse.json(
      { ok: false, error: "The desk could not record this enquiry." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
