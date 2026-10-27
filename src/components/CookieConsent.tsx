"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "zender-cookie-consent";

type ConsentValue = "accepted" | "necessary";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== "accepted" && stored !== "necessary") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function save(value: ConsentValue) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Ignore storage failures; still hide the banner for this session.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-zender-navy/10 bg-white p-4 shadow-[0_-8px_30px_rgba(3,28,102,0.12)] sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="text-sm leading-relaxed text-zender-navy/75">
          We use cookies to make this site work and to remember your preferences.
          Necessary cookies are always on. See our{" "}
          <Link href="/cookies" className="text-link">
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => save("necessary")}
            className="btn btn-secondary"
          >
            Necessary only
          </button>
          <button
            type="button"
            onClick={() => save("accepted")}
            className="btn btn-primary"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
