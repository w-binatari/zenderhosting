"use client";

import { useState } from "react";
import {
  ENQUIRY_CORRIDORS,
  ENQUIRY_CURRENCIES,
  ENQUIRY_TIMELINES,
  type Enquiry,
} from "@/lib/enquiries";
import { CONTACT_EMAIL, whatsAppHref } from "@/lib/site";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-zender-navy/15 px-4 py-3 text-sm text-zender-navy outline-none transition focus:border-zender-teal";

type EnquiryFormProps = {
  id?: string;
  segment?: Enquiry["segment"];
  heading?: string;
  intro?: string;
};

export function EnquiryForm({
  id = "enquiry",
  segment = "general",
  heading = "Send an enquiry",
  intro = "Amount, corridor, and timeline are enough for the desk to reply.",
}: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const whatsApp = whatsAppHref(
    "Hello Zender desk. I would like to discuss a supplier or cross-border payment.",
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const body = {
      name: data.get("name"),
      email: data.get("email"),
      amount: data.get("amount"),
      currency: data.get("currency"),
      corridor: data.get("corridor"),
      timeline: data.get("timeline"),
      note: data.get("note"),
      segment,
      companyWebsite: data.get("companyWebsite"),
    };

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setStatus("error");
        setMessage(
          result?.error ??
            `The desk could not record this. Email ${CONTACT_EMAIL} with the amount, corridor, and timeline.`,
        );
        return;
      }
      setStatus("sent");
      setMessage("Sent to the treasury desk. We'll reply by email.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        `The desk could not record this. Email ${CONTACT_EMAIL} with the amount, corridor, and timeline.`,
      );
    }
  }

  return (
    <form id={id} onSubmit={onSubmit} className="glass-card relative overflow-hidden rounded-2xl p-8 shadow-xl">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-zender-teal/10 blur-2xl" />
      <h3 className="relative text-lg font-semibold text-zender-navy">{heading}</h3>
      <p className="relative mt-2 text-sm text-zender-navy/55">{intro}</p>

      <div className="relative mt-6 space-y-4">
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor={`${id}-company-website`}>Company website</label>
          <input id={`${id}-company-website`} name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label htmlFor={`${id}-name`} className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55">
            Full name
          </label>
          <input id={`${id}-name`} name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55">
            Work email
          </label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={fieldClass} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${id}-amount`} className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55">
              Amount
            </label>
            <input id={`${id}-amount`} name="amount" type="number" required min="1" step="0.01" inputMode="decimal" placeholder="25000" className={fieldClass} />
          </div>
          <div>
            <label htmlFor={`${id}-currency`} className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55">
              Currency
            </label>
            <select id={`${id}-currency`} name="currency" required defaultValue="USD" className={fieldClass}>
              {ENQUIRY_CURRENCIES.map((currency) => (
                <option key={currency}>{currency}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor={`${id}-corridor`} className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55">
            Corridor
          </label>
          <select id={`${id}-corridor`} name="corridor" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Where are the funds going?
            </option>
            {ENQUIRY_CORRIDORS.map((corridor) => (
              <option key={corridor}>{corridor}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-timeline`} className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55">
            Timeline
          </label>
          <select id={`${id}-timeline`} name="timeline" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              When does the supplier need the funds?
            </option>
            {ENQUIRY_TIMELINES.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-note`} className="block text-xs font-medium uppercase tracking-wider text-zender-navy/55">
            Invoice note <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <textarea id={`${id}-note`} name="note" rows={3} placeholder="Supplier country, invoice reference, or anything the desk should know" className={`${fieldClass} resize-none`} />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-zender-teal py-3.5 text-sm font-semibold text-white transition hover:bg-zender-navy disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send to the desk"}
        </button>

        {message ? (
          <p role="status" className={`text-sm ${status === "error" ? "text-red-700" : "text-zender-navy/70"}`}>
            {message}
          </p>
        ) : null}

        {whatsApp ? (
          <a
            href={whatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#128C7E]/30 bg-[#128C7E] py-3.5 text-sm font-semibold text-white transition hover:bg-[#075E54]"
          >
            <WhatsAppIcon />
            WhatsApp the desk
          </a>
        ) : null}
      </div>
    </form>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}
