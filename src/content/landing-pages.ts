import type { Enquiry } from "@/lib/enquiries";

/**
 * Search landing pages. They are not in the main navigation; they are linked
 * from the footer, the blog, and the sitemap so search engines find them.
 *
 * To add one: copy an entry, give it a new `slug` (this becomes the URL), and
 * write copy for the searches it should rank for. Keep claims to what the
 * desk actually does; rates on the site are indicative.
 */
export type LandingPage = {
  slug: string;
  /** Browser/search title, ideally under 60 characters before the brand suffix. */
  metaTitle: string;
  /** Search snippet, ideally 140–160 characters. */
  metaDescription: string;
  keywords: string[];
  breadcrumb: string;
  h1: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
  enquiry: {
    segment: Enquiry["segment"];
    currency: Enquiry["currency"];
    corridor: Enquiry["corridor"];
    heading: string;
  };
  related: { label: string; href: string }[];
};

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: "pay-suppliers-in-china-from-nigeria",
    metaTitle: "Pay Chinese Suppliers from Nigeria (NGN to CNY or USD)",
    metaDescription:
      "Paying a factory or trading company in China from Nigeria? Send the invoice amount, currency, and deadline to the Zender treasury desk in Lagos.",
    keywords: [
      "pay Chinese supplier from Nigeria",
      "send money to China from Nigeria",
      "naira to yuan",
      "NGN to CNY",
      "pay factory in China from Lagos",
      "import from China payment Nigeria",
    ],
    breadcrumb: "Pay suppliers in China",
    h1: "Pay suppliers in China from Nigeria",
    intro:
      "Factories and trading companies in Guangzhou, Yiwu, Shenzhen, and beyond usually invoice in US dollars or Chinese yuan. The Zender treasury desk in Lagos talks you through the naira side, the indicative level, and whether the timeline fits the supplier's shipping date.",
    sections: [
      {
        heading: "Who this is for",
        paragraphs: [
          "Traders in Alaba, Trade Fair, Idumota, and Onitsha, manufacturers buying machinery or raw materials, and online sellers restocking from Chinese suppliers. If you hold naira and the invoice is in USD or CNY, this is the conversation to start.",
        ],
      },
      {
        heading: "How a China supplier payment works with Zender",
        paragraphs: [
          "You share the invoice facts. The desk replies with an indicative rate and what it needs to move forward. Nothing moves until you and the desk agree the level and the timeline.",
        ],
        bullets: [
          "Invoice amount and currency (USD or CNY)",
          "The date the supplier needs to see funds",
          "Supplier name and country for the payment note",
          "Your contact details so the desk can reply",
        ],
      },
      {
        heading: "Dollar or yuan?",
        paragraphs: [
          "Many Chinese suppliers accept either. Ask your supplier which they prefer and whether their bank charges differ. The desk can talk through both corridors so you can compare before you commit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I pay a Chinese supplier in yuan from Nigeria?",
        answer:
          "Yes, NGN to CNY is one of the corridors the Zender desk discusses, alongside NGN to USD. Send the invoice details and the desk will confirm the next step.",
      },
      {
        question: "Is the rate on the website the rate I will get?",
        answer:
          "No. Website rates are indicative desk references. The final rate is confirmed by the treasury desk before any funds move.",
      },
      {
        question: "What documents should I have ready?",
        answer:
          "At minimum, the supplier's invoice or proforma invoice with their name, amount, and currency. The desk will tell you if anything else is needed for your payment.",
      },
    ],
    enquiry: {
      segment: "importers",
      currency: "USD",
      corridor: "NGN → CNY",
      heading: "China supplier payment enquiry",
    },
    related: [
      { label: "Importer payments", href: "/importers" },
      { label: "Dollar to naira rate", href: "/rates/usd-to-ngn" },
      { label: "Pay suppliers in Dubai", href: "/pay-suppliers-in-dubai-from-nigeria" },
    ],
  },
  {
    slug: "pay-suppliers-in-dubai-from-nigeria",
    metaTitle: "Pay Dubai Suppliers from Nigeria (NGN to AED or USD)",
    metaDescription:
      "Paying an agent, wholesaler, or free-zone seller in Dubai from Nigeria? Share the invoice amount and deadline with the Zender treasury desk in Lagos.",
    keywords: [
      "pay Dubai supplier from Nigeria",
      "send money to Dubai from Nigeria",
      "naira to dirham",
      "NGN to AED",
      "pay UAE supplier from Lagos",
    ],
    breadcrumb: "Pay suppliers in Dubai",
    h1: "Pay suppliers in Dubai from Nigeria",
    intro:
      "Dubai agents, wholesalers, and free-zone sellers commonly bill in UAE dirham or US dollars. The Zender treasury desk helps you plan the naira side, compare an indicative level, and line the payment up with your supplier's deadline.",
    sections: [
      {
        heading: "Who this is for",
        paragraphs: [
          "Nigerian businesses buying electronics, vehicles and parts, textiles, and general goods through Dubai, and companies paying UAE-based service providers.",
        ],
      },
      {
        heading: "What the desk needs from you",
        paragraphs: [
          "Start with the invoice. The desk replies with an indicative rate and the next step, and nothing moves until the level and timeline are agreed.",
        ],
        bullets: [
          "Invoice amount and currency (AED or USD)",
          "The date the supplier needs the funds",
          "Supplier name for the payment note",
          "Your email so the desk can reply",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I pay a supplier in dirham from Nigeria?",
        answer:
          "Yes, NGN to AED is one of the corridors the Zender desk discusses, as well as NGN to USD. Send the invoice details and the desk will reply.",
      },
      {
        question: "How do I know the rate before I pay?",
        answer:
          "The desk confirms the rate with you before any funds move. Rates shown on the website are indicative references only.",
      },
    ],
    enquiry: {
      segment: "importers",
      currency: "AED",
      corridor: "NGN → AED",
      heading: "Dubai supplier payment enquiry",
    },
    related: [
      { label: "Importer payments", href: "/importers" },
      { label: "Pay suppliers in China", href: "/pay-suppliers-in-china-from-nigeria" },
      { label: "Dollar to naira rate", href: "/rates/usd-to-ngn" },
    ],
  },
  {
    slug: "otc-fx-desk-lagos",
    metaTitle: "OTC FX Desk in Lagos for Businesses",
    metaDescription:
      "Talk to an OTC and treasury desk in Lagos about USD, GBP, and EUR needs, FX exposure, and liquidity. Indicative pricing, confirmed by the Zender desk.",
    keywords: [
      "OTC desk Lagos",
      "OTC FX Nigeria",
      "treasury desk Nigeria",
      "business FX Lagos",
      "buy dollars for business Nigeria",
    ],
    breadcrumb: "OTC FX desk",
    h1: "An OTC and treasury desk in Lagos",
    intro:
      "For businesses with larger or recurring FX needs, a conversation with a desk beats refreshing a rate screen. Zender's treasury desk discusses USD, GBP, and EUR requirements, timing, and indicative pricing with you directly.",
    sections: [
      {
        heading: "When an OTC conversation makes sense",
        paragraphs: [
          "Recurring supplier payments, payroll or service fees in foreign currency, and one-off larger conversions where timing and pricing need to be agreed in advance.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Tell the desk the currency, the approximate amount, and your timeline. The desk shares an indicative level and talks through structure. Pricing is confirmed with you before anything is executed.",
        ],
        bullets: [
          "Structured conversations, not a trading screen",
          "Indicative references, confirmed by the desk",
          "Relationship-based follow-through",
        ],
      },
    ],
    faqs: [
      {
        question: "What currencies does the desk cover?",
        answer:
          "The desk's indicative references cover USD, GBP, and EUR against the naira, and cross-border conversations also cover currencies such as CNY and AED.",
      },
      {
        question: "Is there a minimum amount?",
        answer:
          "Contact the desk with your amount and timeline and it will confirm whether it can take the conversation.",
      },
    ],
    enquiry: {
      segment: "general",
      currency: "USD",
      corridor: "NGN → USD",
      heading: "OTC desk enquiry",
    },
    related: [
      { label: "Services", href: "/products" },
      { label: "FX rates", href: "/fx-rates" },
      { label: "Pound to naira rate", href: "/rates/gbp-to-ngn" },
    ],
  },
];

export function getLandingPage(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((page) => page.slug === slug);
}
