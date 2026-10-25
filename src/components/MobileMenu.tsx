"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navLabel, navLinks } from "@/lib/nav";

type MobileMenuProps = {
  light?: boolean;
};

export function MobileMenu({ light = false }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div ref={rootRef} className="relative lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
        className={`nav-link px-1 py-2 transition ${
          light
            ? "text-zender-navy/80 hover:text-zender-teal"
            : "text-white/90 hover:text-white"
        }`}
      >
        {open ? navLabel("Close") : navLabel("Menu")}
      </button>

      {open ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-white"
            onClick={() => setOpen(false)}
          />
          <nav
            id={menuId}
            aria-label="Mobile navigation"
            className="relative h-full bg-white px-6 pt-24"
          >
            <div className="pointer-events-none absolute inset-0 page-mesh opacity-80" />
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
            <div className="relative mx-auto max-w-6xl">
              <div className="flex items-center justify-between">
                <p className="nav-link text-zender-teal">{navLabel("Menu")}</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="nav-link text-zender-navy/70 transition hover:text-zender-teal"
                >
                  {navLabel("Close")}
                </button>
              </div>

              <div className="mt-10 space-y-2">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl border px-5 py-4 transition ${
                        active
                          ? "border-zender-teal/25 bg-zender-mint/60 text-zender-navy"
                          : "border-zender-navy/10 bg-white/70 text-zender-navy/80 hover:border-zender-teal/30 hover:bg-zender-mint/40"
                      }`}
                    >
                      <span className="nav-link">{navLabel(link.label)}</span>
                      <span className="text-sm text-zender-navy/35">→</span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-10 rounded-2xl border border-zender-navy/10 bg-white/80 p-6 backdrop-blur">
                <p className="text-sm font-semibold text-zender-navy">Treasury Desk</p>
                <p className="mt-2 text-sm text-zender-navy/60">
                  Start a conversation about payments, FX, treasury, or partnerships.
                </p>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-zender-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-zender-navy"
                >
                  Contact Treasury Desk
                </Link>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
