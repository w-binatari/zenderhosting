"use client";

import { useEffect, useId, useRef, useState } from "react";

type Country = {
  code: string;
  name: string;
  flag: React.ReactNode;
};

export const countries: Country[] = [
  {
    code: "NG",
    name: "Nigeria",
    flag: (
      <svg viewBox="0 0 36 24" className="h-5 w-8" aria-hidden="true">
        <rect width="12" height="24" fill="#008751" />
        <rect x="12" width="12" height="24" fill="white" />
        <rect x="24" width="12" height="24" fill="#008751" />
      </svg>
    ),
  },
  {
    code: "GH",
    name: "Ghana",
    flag: (
      <svg viewBox="0 0 36 24" className="h-5 w-8" aria-hidden="true">
        <rect width="36" height="24" fill="#CE1126" />
        <rect width="36" height="16" fill="#FCD116" />
        <rect width="36" height="8" fill="#006B3F" />
        <polygon points="0,0 14,12 0,24" fill="#000" />
      </svg>
    ),
  },
  {
    code: "KE",
    name: "Kenya",
    flag: (
      <svg viewBox="0 0 36 24" className="h-5 w-8" aria-hidden="true">
        <rect width="36" height="24" fill="white" />
        <rect width="36" height="7" fill="#000" />
        <rect y="17" width="36" height="7" fill="#000" />
        <rect y="7" width="36" height="3" fill="#BB0000" />
        <rect y="14" width="36" height="3" fill="#006600" />
        <polygon points="0,0 10,12 0,24" fill="#BB0000" />
        <polygon points="0,0 8,12 0,24" fill="white" />
        <polygon points="0,0 6,12 0,24" fill="#000" />
      </svg>
    ),
  },
  {
    code: "ZA",
    name: "South Africa",
    flag: (
      <svg viewBox="0 0 36 24" className="h-5 w-8" aria-hidden="true">
        <rect width="36" height="24" fill="#002395" />
        <polygon points="0,0 14,12 0,24" fill="#000" />
        <polygon points="0,0 12,12 0,24" fill="#FFB612" />
        <polygon points="0,0 10,12 0,24" fill="#007A4D" />
      </svg>
    ),
  },
  {
    code: "SN",
    name: "Senegal",
    flag: (
      <svg viewBox="0 0 36 24" className="h-5 w-8" aria-hidden="true">
        <rect width="12" height="24" fill="#00853F" />
        <rect x="12" width="12" height="24" fill="#FDEF42" />
        <rect x="24" width="12" height="24" fill="#E31B23" />
        <circle cx="12" cy="12" r="3.5" fill="#00853F" />
      </svg>
    ),
  },
  {
    code: "RW",
    name: "Rwanda",
    flag: (
      <svg viewBox="0 0 36 24" className="h-5 w-8" aria-hidden="true">
        <rect width="36" height="8" fill="#00A1DE" />
        <rect y="8" width="36" height="8" fill="#FAD201" />
        <rect y="16" width="36" height="8" fill="#20603D" />
        <circle cx="16" cy="11" r="3" fill="#FAD201" stroke="#00A1DE" strokeWidth="0.5" />
      </svg>
    ),
  },
];

export function CountrySelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(countries[0]);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

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

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={`Select country: ${selected.name}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((current) => !current)}
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full p-0 transition hover:bg-white/10 hover:opacity-95"
      >
        <span className="relative -top-px">{selected.flag}</span>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="African countries"
          className="absolute right-0 top-full z-50 mt-3 min-w-[11rem] overflow-hidden rounded-lg border border-white/15 bg-[#031C66] py-1.5"
        >
          {countries.map((country) => {
            const isSelected = country.code === selected.code;

            return (
              <li key={country.code} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected(country);
                    setOpen(false);
                  }}
                  className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-white transition hover:bg-white/10"
                >
                  <span className="relative -top-px">{country.flag}</span>
                  <span className={isSelected ? "font-semibold" : "font-normal"}>
                    {country.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
