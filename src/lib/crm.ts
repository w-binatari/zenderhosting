import type { Enquiry } from "@/lib/enquiries";

/** HubSpot connector created with `vercel connect create hubspot --name zender-finance`. */
const HUBSPOT_CONNECTOR = "hubspot/zender-finance";
const NOTE_TO_CONTACT = 202;

type HubSpotObject = { id?: string };

function noteBody(enquiry: Enquiry): string {
  const lines = [
    "Website enquiry",
    `Segment: ${enquiry.segment}`,
    `Amount: ${enquiry.amount} ${enquiry.currency}`,
    `Corridor: ${enquiry.corridor}`,
    `Timeline: ${enquiry.timeline}`,
  ];
  if (enquiry.note) lines.push(`Note: ${enquiry.note}`);
  return lines.join("\n");
}

async function hubspot(
  token: string,
  path: string,
  body: unknown,
): Promise<{ status: number; json: HubSpotObject & { message?: string } }> {
  const response = await fetch(`https://api.hubapi.com${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = (await response.json().catch(() => ({}))) as HubSpotObject & {
    message?: string;
  };
  return { status: response.status, json };
}

async function contactIdForEmail(token: string, email: string): Promise<string | null> {
  const found = await hubspot(token, "/crm/v3/objects/contacts/search", {
    filterGroups: [
      {
        filters: [{ propertyName: "email", operator: "EQ", value: email }],
      },
    ],
    limit: 1,
  });
  if (found.status !== 200) return null;
  const results = (found.json as { results?: HubSpotObject[] }).results;
  return results?.[0]?.id ?? null;
}

/**
 * Creates or updates a HubSpot contact and attaches the amount, corridor,
 * and timeline as a note. Requires the zender-finance HubSpot connector.
 */
export async function recordEnquiry(enquiry: Enquiry): Promise<void> {
  const { getToken } = await import("@vercel/connect");
  const token = await getToken(HUBSPOT_CONNECTOR, { subject: { type: "app" } });

  const [first, ...rest] = enquiry.name.split(/\s+/);
  const created = await hubspot(token, "/crm/v3/objects/contacts", {
    properties: {
      email: enquiry.email,
      firstname: first,
      ...(rest.length > 0 ? { lastname: rest.join(" ") } : {}),
    },
  });

  let contactId = created.json.id;
  if (created.status === 409) {
    const existing = created.json.message?.match(/Existing ID:\s*(\d+)/)?.[1];
    contactId = existing ?? (await contactIdForEmail(token, enquiry.email)) ?? undefined;
  }

  if (!contactId || (created.status !== 201 && created.status !== 409)) {
    throw new Error(`HubSpot contact was not recorded (${created.status})`);
  }

  const noted = await hubspot(token, "/crm/v3/objects/notes", {
    properties: {
      hs_timestamp: new Date().toISOString(),
      hs_note_body: noteBody(enquiry),
    },
    associations: [
      {
        to: { id: contactId },
        types: [
          {
            associationCategory: "HUBSPOT_DEFINED",
            associationTypeId: NOTE_TO_CONTACT,
          },
        ],
      },
    ],
  });

  if (noted.status !== 201) {
    throw new Error(`HubSpot note was not recorded (${noted.status})`);
  }
}
