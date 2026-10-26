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
            ? "text-zender-navy/70 hover:text-zender-teal"
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
            <div className="relative mx-auto max-w-6xl">
              <div className="flex items-center justify-between">
                <p className="nav-link text-zender-navy">{navLabel("Menu")}</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="nav-link text-zender-navy/70 transition hover:text-zender-teal"
                >
                  {navLabel("Close")}
                </button>
              </div>

              <div className="mt-8 divide-y divide-zender-navy/10 border-y border-zender-navy/10">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-4 transition ${
                        active ? "text-zender-teal" : "text-zender-navy hover:text-zender-teal"
                      }`}
                    >
                      <span className="nav-link">{navLabel(link.label)}</span>
                      <span className="text-sm text-zender-navy/70">→</span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full"
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
