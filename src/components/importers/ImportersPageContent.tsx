import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { RichPageHero } from "@/components/ui/RichPageHero";

const STEPS = [
  {
    step: "01",
    title: "Send the invoice facts",
    description:
      "The amount on the supplier invoice, the currency they bill in, and the date they need to receive the funds.",
  },
  {
    step: "02",
    title: "The desk replies with a level",
    description:
      "We confirm whether the desk can take the conversation and share an indicative rate. The website rates are not that confirmation.",
  },
  {
    step: "03",
    title: "Agree the timeline before funds move",
    description:
      "Shipment dates and supplier cut-offs come first. Nothing is treated as a payment instruction from this page.",
  },
] as const;

const CORRIDORS = [
  { pair: "NGN → USD", use: "US and dollar invoices" },
  { pair: "NGN → CNY", use: "Chinese factories and trading houses" },
  { pair: "NGN → EUR", use: "Eurozone wholesalers" },
  { pair: "NGN → GBP", use: "UK suppliers" },
  { pair: "NGN → AED", use: "Dubai agents and free-zone sellers" },
] as const;

function InvoiceVisual() {
  return (
    <>
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-zender-teal/15 to-zender-navy/10" />
      <div className="relative glass-card rounded-2xl border border-zender-navy/10 p-6 shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-zender-teal">
          Supplier invoice
        </p>
        <p className="mt-2 text-lg font-semibold text-zender-navy">USD 48,500</p>
        <p className="mt-1 text-sm text-zender-navy/55">Ningbo factory · due in 9 days</p>
        <dl className="mt-6 space-y-3 text-sm">
          {[
            ["Corridor", "NGN → USD"],
            ["Timeline", "This week"],
            ["Status", "Waiting on the desk"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between rounded-xl bg-zender-mint/50 px-4 py-3">
              <dt className="text-zender-navy/55">{label}</dt>
              <dd className="font-medium text-zender-navy">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}

export function ImportersPageContent() {
  return (
    <>
      <RichPageHero
        eyebrow="Importers"
        title="Pay an overseas supplier without guessing the timeline."
        description="For Nigerian businesses settling invoices with factories, wholesalers, and agents abroad. Start with the amount, the corridor, and the date the supplier needs the funds."
        pills={["Supplier invoices", "NGN to USD, CNY, EUR, GBP, AED", "Desk conversation"]}
        visual={<InvoiceVisual />}
      />

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
          <div>
            <p className="nav-link text-zender-teal">The payment</p>
            <h2 className="mt-4 text-3xl font-semibold text-zender-navy">
              The invoice is in their currency. Your account is in naira.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
              A factory in Ningbo, a wholesaler in Hamburg, or an agent in Dubai
              has sent a bill. The shipment moves when they see the funds. The
              useful question is not a slogan about trust. It is whether the
              desk can talk through this invoice, at what indicative level, and
              whether that fits the supplier&apos;s date.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
              This page opens that conversation. It does not confirm a rate and
              it is not a payment instruction.
            </p>
            <Link
              href="/fx-rates"
              className="mt-6 inline-flex text-sm font-semibold text-zender-teal transition hover:text-zender-navy"
            >
              Indicative FX references →
            </Link>
          </div>
          <ol className="space-y-4">
            {STEPS.map((item) => (
              <li key={item.step} className="glass-card rounded-2xl p-5">
                <p className="font-nav text-sm font-semibold text-zender-teal">{item.step}</p>
                <h3 className="mt-2 font-semibold text-zender-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zender-navy/65">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-mesh px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="nav-link text-zender-teal">Corridors</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-zender-navy">
            Supplier currencies the desk is asked about
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORRIDORS.map((item) => (
              <li key={item.pair} className="glass-card rounded-2xl p-5">
                <p className="font-semibold text-zender-navy">{item.pair}</p>
                <p className="mt-2 text-sm text-zender-navy/60">{item.use}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dot-grid bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-2">
          <div>
            <p className="nav-link text-zender-teal">Have ready</p>
            <h2 className="mt-4 text-3xl font-semibold text-zender-navy">
              Three facts, then the invoice if you have it
            </h2>
            <ul className="mt-8 space-y-3 text-sm text-zender-navy/75">
              {[
                "Invoice amount and the currency the supplier billed",
                "Corridor, from naira to that currency",
                "The date the supplier needs the funds",
                "Supplier name and country, if you want them on the note",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-zender-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <EnquiryForm
            id="importer-enquiry"
            segment="importers"
            heading="Supplier payment enquiry"
            intro="This goes to the treasury desk with the amount, corridor, and timeline."
          />
        </div>
      </section>
    </>
  );
}
