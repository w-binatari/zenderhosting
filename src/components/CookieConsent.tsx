"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "zender-cookie-consent";

/**
 * A notice, not a consent gate: the site sets no tracking or marketing
 * cookies, so there is nothing optional to switch off. If an analytics or ad
 * script that uses cookies is ever added, replace this with a real opt-in that
 * blocks the script until the visitor accepts.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      // Earlier versions stored "accepted" or "necessary"; any value means seen.
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "seen");
    } catch {
      // Ignore storage failures; still hide the notice for this session.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-zender-navy/10 bg-white px-4 py-3 shadow-[0_-8px_30px_rgba(3,28,102,0.12)]"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <p className="text-xs leading-relaxed text-zender-navy/75 sm:text-sm">
          We don&apos;t use tracking or advertising cookies.{" "}
          <Link href="/cookies" className="text-link whitespace-nowrap">
            Cookie Policy
          </Link>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="btn btn-primary shrink-0 px-4 py-2 text-sm"
        >
          OK
        </button>
      </div>
    </div>
  );
}
