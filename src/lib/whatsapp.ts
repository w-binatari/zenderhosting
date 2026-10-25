type WhatsAppTextMessage = {
  from: string;
  id: string;
  timestamp: string;
  type: string;
  text?: { body: string };
};

type WhatsAppChange = {
  value?: {
    messages?: WhatsAppTextMessage[];
    metadata?: { display_phone_number?: string; phone_number_id?: string };
  };
};

export type IncomingWhatsAppMessage = {
  from: string;
  body: string;
  phoneNumberId: string;
};

export function extractWhatsAppMessages(
  payload: unknown,
): IncomingWhatsAppMessage[] {
  if (!payload || typeof payload !== "object") return [];

  const entry = (payload as { entry?: Array<{ changes?: WhatsAppChange[] }> })
    .entry;
  if (!Array.isArray(entry)) return [];

  const messages: IncomingWhatsAppMessage[] = [];

  for (const item of entry) {
    for (const change of item.changes ?? []) {
      const value = change.value;
      const phoneNumberId = value?.metadata?.phone_number_id ?? "";
      for (const message of value?.messages ?? []) {
        if (message.type !== "text" || !message.text?.body) continue;
        messages.push({
          from: message.from,
          body: message.text.body,
          phoneNumberId,
        });
      }
    }
  }

  return messages;
}

export function isAllowedWhatsAppSender(from: string): boolean {
  const allowlist = (process.env.WHATSAPP_ALLOWED_NUMBERS ?? "")
    .split(",")
    .map((n) => n.trim().replace(/^\+/, ""))
    .filter(Boolean);

  if (allowlist.length === 0) return false;

  const normalized = from.replace(/^\+/, "");
  return allowlist.includes(normalized);
}

export async function sendWhatsAppText(
  phoneNumberId: string,
  to: string,
  body: string,
): Promise<void> {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  if (!token || !phoneNumberId) return;

  await fetch(
    `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body },
      }),
    },
  );
}
