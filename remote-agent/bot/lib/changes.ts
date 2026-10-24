import * as z from "zod/v4";

export const MOBILE_AGENT_SECRET = "MOBILE_AGENT_TOKEN";

export const requestIdSchema = z
  .string()
  .regex(/^[A-Za-z0-9_-]{8,64}$/);

export type ChangeView = {
  requestId: string;
  status: "missing" | "accepted" | "done" | "failed";
  reply: string | null;
  summary: string | null;
  files: string[];
  updatedAt: string | null;
};

type JsonRecord = Record<string, unknown>;

export function changeKey(requestId: string): string {
  return `mobile-change:${requestId}`;
}

export function filesKey(requestId: string): string {
  return `mobile-change:${requestId}:files`;
}

export function continuationKey(requestId: string): string {
  return `change:${requestId}`;
}

/** Relative site paths only. `null` when any entry escapes the workspace. */
export function siteRelativePaths(files: string[]): string[] | null {
  const cleaned: string[] = [];
  for (const file of files) {
    const normalized = file.replaceAll("\\", "/").replace(/^\.\/+/, "");
    const parts = normalized.split("/");
    if (
      normalized === "" ||
      normalized.startsWith("/") ||
      parts.some((part) => part === "" || part === "..")
    ) {
      return null;
    }
    cleaned.push(normalized);
  }
  return cleaned;
}

export function presentChange(
  requestId: string,
  statusValue: unknown,
  filesValue: unknown,
): ChangeView {
  const statusRecord = asRecord(statusValue);
  const filesRecord = asRecord(filesValue);
  const reply = readString(statusRecord, "reply");
  const storedStatus = readString(statusRecord, "status");
  const summary = readString(filesRecord, "summary");
  const files = readStringList(filesRecord, "files");
  let status: ChangeView["status"] = "missing";
  if (storedStatus === "failed") {
    status = "failed";
  } else if (storedStatus === "done" || reply !== null) {
    status = "done";
  } else if (storedStatus === "accepted" || summary !== null || files.length > 0) {
    status = "accepted";
  }
  return {
    requestId,
    status,
    reply,
    summary,
    files,
    updatedAt: readString(statusRecord, "updatedAt"),
  };
}

function asRecord(value: unknown): JsonRecord | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return null;
  }
  const record: JsonRecord = {};
  for (const [key, entry] of Object.entries(value)) {
    record[key] = entry;
  }
  return record;
}

function readString(record: JsonRecord | null, key: string): string | null {
  const value = record?.[key];
  return typeof value === "string" ? value : null;
}

function readStringList(record: JsonRecord | null, key: string): string[] {
  const value = record?.[key];
  if (!Array.isArray(value)) return [];
  return value.filter((entry): entry is string => typeof entry === "string");
}
