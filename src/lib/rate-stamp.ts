/** Desk snapshots older than this are not labelled with a date. */
const RATE_STAMP_MAX_AGE_MS = 48 * 60 * 60 * 1000;

/**
 * Date label for a rate snapshot, or null when the snapshot is missing,
 * unreadable, or older than 48 hours. A stale "Updated 8 Sept" stamp is
 * worse than no stamp on an FX desk.
 */
export function formatUpdatedAt(
  utcString: string,
  now = Date.now(),
): string | null {
  const time = new Date(utcString).getTime();
  if (Number.isNaN(time)) return null;

  const age = now - time;
  if (age < 0 || age > RATE_STAMP_MAX_AGE_MS) return null;

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Lagos",
  }).format(new Date(time));
}
