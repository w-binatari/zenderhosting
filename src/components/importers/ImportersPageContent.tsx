import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { FramedPhoto } from "@/components/ui/FramedPhoto";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { PHOTOS } from "@/lib/photos";

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
    <FramedPhoto
      photo={PHOTOS.lagosHarbour}
      className="min-h-[24rem]"
      imageClassName="object-cover object-center"
      sizes="(min-width: 1024px) 36rem, 100vw"
    />
  );
}

export function ImportersPageContent() {
  return (
    <>
      <RichPageHero
        title="Pay an overseas supplier without guessing the timeline."
        description="For Nigerian businesses settling invoices with factories, wholesalers, and agents abroad. Start with the amount, the corridor, and the date the supplier needs the funds."
        visual={<InvoiceVisual />}
      />

      <section className="section bg-white">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
          <div>
            <h2 className="section-h2 text-zender-navy">
              The invoice is in their currency. Your account is in naira.
            </h2>
            <p className="lede">
              A factory in Ningbo, a wholesaler in Hamburg, or an agent in Dubai
              has sent a bill. The shipment moves when they see the funds. The
              useful question is not a slogan about trust. It is whether the
              desk can talk through this invoice, at what indicative level, and
              whether that fits the supplier&apos;s date.
            </p>
            <p className="lede">
              This page opens that conversation. It does not confirm a rate and
              it is not a payment instruction.
            </p>
            <Link
              href="/fx-rates"
              className="text-link mt-6 inline-block"
            >
              Indicative FX references →
            </Link>
          </div>
          <ol className="divide-y divide-zender-navy/10 border-y border-zender-navy/10 self-start">
            {STEPS.map((item) => (
              <li key={item.step} className="py-6">
                <h3 className="font-semibold text-zender-navy">
                  {item.step}. {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zender-navy/70">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-zender-tint">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-h2 max-w-2xl text-zender-navy">
            Supplier currencies the desk is asked about
          </h2>
          <dl className="mt-10 divide-y divide-zender-navy/10 border-y border-zender-navy/10">
            {CORRIDORS.map((item) => (
              <div key={item.pair} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <dt className="font-semibold text-zender-navy">{item.pair}</dt>
                <dd className="text-sm text-zender-navy/70">{item.use}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-2">
          <div>
            <h2 className="section-h2 text-zender-navy">
              Three facts, then the invoice if you have it
            </h2>
            <ul className="mt-8 divide-y divide-zender-navy/10 border-y border-zender-navy/10 text-sm text-zender-navy/70">
              {[
                "Invoice amount and the currency the supplier billed",
                "Corridor, from naira to that currency",
                "The date the supplier needs the funds",
                "Supplier name and country, if you want them on the note",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 py-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zender-teal" />
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
