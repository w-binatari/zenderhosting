import { whatsAppHref } from "@/lib/site";

const DESK_TEXT =
  "Hello Zender desk. I would like to discuss a supplier or cross-border payment.";

export function WhatsAppButton() {
  const href = whatsAppHref(DESK_TEXT);
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#128C7E] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-zender-navy/20 transition hover:bg-[#075E54]"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9.1 9.1 0 1 1 12 20.5Z" />
      </svg>
      WhatsApp
    </a>
  );
}
