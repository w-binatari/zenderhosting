import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { FaqList } from "@/components/seo/FaqList";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { CurrencyFlag } from "@/components/ui/CurrencyFlag";
import { getRatePair, RATE_PAIRS } from "@/content/rate-pairs";
import { formatMoney } from "@/lib/convert";
import { getFxRates } from "@/lib/fx-rates";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ pair: string }> };

export const dynamicParams = false;
/** Re-read desk and market rates hourly instead of freezing them at build time. */
export const revalidate = 3600;

const FOREIGN_AMOUNTS = [1, 10, 100, 500, 1_000, 5_000, 10_000, 50_000];
const NAIRA_AMOUNTS = [1_000, 10_000, 50_000, 100_000, 500_000, 1_000_000, 5_000_000, 10_000_000];

export function generateStaticParams() {
  return RATE_PAIRS.map((pair) => ({ pair: pair.slug }));
}

export async function generateMetadata({ params }: Params) {
  const pair = getRatePair((await params).pair);
  if (!pair) return {};
  return pageMetadata({
    title: `${pair.everyday} to Naira Rate Today (${pair.code} to NGN)`,
    description: `Indicative ${pair.name} to Nigerian naira (${pair.code}/NGN) desk rate with a quick conversion table. Confirm the final rate with the Zender treasury desk in Lagos.`,
    path: `/rates/${pair.slug}`,
    image: `/rates/${pair.slug}/opengraph-image`,
    keywords: [...pair.keywords],
  });
}

function faqsFor(pair: (typeof RATE_PAIRS)[number], rateText: string) {
  return [
    {
      question: `How much is 1 ${pair.code} in naira today?`,
      answer: `The current indicative Zender desk reference is 1 ${pair.code} = ${rateText}. It is a reference only; the treasury desk confirms the final rate before any transfer.`,
    },
    {
      question: `Why do ${pair.everyday.toLowerCase()} to naira rates differ between sources?`,
      answer:
        "Banks, desks, and market sources quote at different times, for different amounts, and with different spreads. Always confirm the rate for your specific amount and timeline before you commit.",
    },
    {
      question: `Can I pay an overseas invoice in ${pair.code} from Nigeria?`,
      answer: `Yes. Send the invoice amount, currency, and deadline to the Zender treasury desk and it will reply with an indicative level and the next step.`,
    },
  ];
}

export default async function RatePairPage({ params }: Params) {
  const pair = getRatePair((await params).pair);
  if (!pair) notFound();

  const data = await getFxRates();
  const rate = data.rates.find((item) => item.code === pair.code)?.rate;
  if (!rate) notFound();

  const rateText = formatMoney(rate, "NGN");
  const faqs = faqsFor(pair, rateText);
  const sourceLabel =
    data.source === "market" ? "Indicative market reference" : "Indicative desk reference";
  const enquiryHref = `/contact?${new URLSearchParams({
    currency: pair.code,
    corridor: `NGN → ${pair.code}`,
  }).toString()}#enquiry`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "FX Rates", path: "/fx-rates" },
            { name: `${pair.code} to NGN`, path: `/rates/${pair.slug}` },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <SiteHeader />
      <main className="overflow-hidden">
        <section className="bg-zender-tint px-6 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-36">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zender-navy sm:text-5xl">
              {pair.everyday} to naira rate ({pair.code} to NGN)
            </h1>
            <div className="panel mt-8 flex items-center justify-between gap-6 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <CurrencyFlag code={pair.code} size="md" />
                <div>
                  <p className="text-sm font-medium text-zender-navy/70">1 {pair.name}</p>
                  <p className="text-3xl font-semibold tabular-nums text-zender-navy sm:text-4xl">
                    {rateText}
                  </p>
                </div>
              </div>
              <CurrencyFlag code="NGN" size="md" />
            </div>
            <p className="mt-4 text-xs text-zender-navy/70">
              {sourceLabel}. Not a quote: the treasury desk confirms the final
              rate for your amount before any funds move.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={enquiryHref} className="btn btn-primary">
                Get a confirmed {pair.code} rate
              </Link>
              <Link href="/fx-rates#convert" className="btn btn-secondary">
                Open the converter
              </Link>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            <ConversionTable
              caption={`${pair.code} to NGN`}
              from={pair.code}
              to="NGN"
              amounts={FOREIGN_AMOUNTS}
              convert={(amount) => amount * rate}
            />
            <ConversionTable
              caption={`NGN to ${pair.code}`}
              from="NGN"
              to={pair.code}
              amounts={NAIRA_AMOUNTS}
              convert={(amount) => amount / rate}
            />
          </div>
        </section>

        <section className="section bg-zender-tint">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-h2 text-zender-navy">
              About this {pair.everyday.toLowerCase()} to naira rate
            </h2>
            <p className="lede">
              This is the indicative {pair.name} to naira reference the Zender
              treasury desk publishes for businesses planning supplier payments,
              invoices, and treasury conversations. The desk updates it, and it
              is not a quote.
            </p>
            <p className="lede">
              For a payment, the desk confirms the rate for your exact amount and
              timeline. Share the amount, currency, and deadline and the desk
              replies with the next step.
            </p>
            <h2 className="section-h2 mb-8 mt-14 text-zender-navy">Common questions</h2>
            <FaqList items={faqs} />
            <RelatedLinks
              heading="Other rates and guides"
              links={[
                ...RATE_PAIRS.filter((other) => other.slug !== pair.slug).map((other) => ({
                  label: `${other.everyday} to naira`,
                  href: `/rates/${other.slug}`,
                })),
                { label: "All FX rates", href: "/fx-rates" },
                { label: "Pay overseas suppliers", href: "/importers" },
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ConversionTable({
  caption,
  from,
  to,
  amounts,
  convert,
}: {
  caption: string;
  from: string;
  to: string;
  amounts: number[];
  convert: (amount: number) => number;
}) {
  return (
    <table className="w-full text-left text-sm">
      <caption className="mb-4 text-left text-lg font-semibold text-zender-navy">
        {caption}
      </caption>
      <thead>
        <tr className="border-b border-zender-navy/15 text-zender-navy/70">
          <th scope="col" className="py-3 font-medium">{from}</th>
          <th scope="col" className="py-3 text-right font-medium">{to}</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-zender-navy/10 tabular-nums text-zender-navy">
        {amounts.map((amount) => (
          <tr key={amount}>
            <td className="py-3">{formatMoney(amount, from)}</td>
            <td className="py-3 text-right font-semibold">{formatMoney(convert(amount), to)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
