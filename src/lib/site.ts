export const BRAND_NAME = "Zender Finance";
export const BRAND_TAGLINE = "Move money the Zender way.";

export const BRAND_POSITIONING =
  "A modern African cross-border finance and treasury partner built on responsiveness, execution, relationships, and regional understanding.";

export const BRAND_DESCRIPTION =
  "Zender Finance helps African businesses and individuals navigate cross-border payments, FX, and treasury needs with responsiveness, clarity, and trusted execution.";

export const HERO_HEADLINE =
  "Africa's Cross Border Finance Partner, built on trust.";

export const HERO_SUBCOPY =
  "We help African businesses and individuals move money across borders with clearer communication, responsive handling, and execution built around long-term trust, not transactional noise.";

/** Swap to app.zenderfinance.com once that domain is attached to the zender-portal project. */
export const ONBOARDING_URL = "https://zender-portal-alpha.vercel.app/login";

/** Public desk line. Digits only, no plus. Env overrides the published number. */
const PUBLISHED_WHATSAPP_E164 = "2349035573575";

export const WHATSAPP_E164 = (
  (process.env.NEXT_PUBLIC_WHATSAPP_E164 ?? "").replace(/\D/g, "") ||
  PUBLISHED_WHATSAPP_E164
);

export function whatsAppHref(text: string): string | null {
  if (!WHATSAPP_E164) return null;
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

export const CONTACT_EMAIL = "hello@zenderfinance.com";
export const CONTACT_PHONE = "+234 903 557 3575";
export const CONTACT_OFFICE = "Lagos, Nigeria";

export const SOCIAL_LINKS = [
  {
    label: "X",
    href: "https://x.com/zenderfinance",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/zender-finance/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zender_finance",
  },
] as const;

export const ZENDER_WAY_PILLARS = [
  {
    title: "Responsiveness",
    description:
      "Clear communication and attentive handling when cross-border timelines and expectations matter.",
  },
  {
    title: "Regional understanding",
    description:
      "Practical knowledge of how African businesses experience international payments, FX, and settlement.",
  },
  {
    title: "Execution with integrity",
    description:
      "Professional, accountable processes designed to protect trust in every relationship.",
  },
] as const;

export const SERVICES = [
  {
    slug: "cross-border-payments",
    title: "Cross-Border Payments",
    description:
      "Support for African SMEs, importers, exporters, and globally connected professionals who need international payments handled with clarity and care.",
    features: [
      "Cross-border payment coordination",
      "Clear settlement communication",
      "Relationship-based support",
    ],
  },
  {
    slug: "otc-treasury",
    title: "OTC & Treasury Solutions",
    description:
      "Treasury and OTC support for businesses managing FX exposure, liquidity needs, and cross-border financial activity across African markets.",
    features: [
      "FX and treasury desk support",
      "Indicative rate references",
      "Structured OTC conversations",
    ],
  },
  {
    slug: "lending-solutions",
    title: "Lending Solutions",
    description:
      "Licensed lending support for eligible businesses seeking structured financial solutions alongside their cross-border activity.",
    features: [
      "Licensed lending operations",
      "Measured, compliant positioning",
      "Support for eligible clients",
    ],
  },
  {
    slug: "partnerships",
    title: "Partnerships & Ecosystem",
    description:
      "Building African financial connectivity through regional partnerships, infrastructure relationships, and collaborative cross-border support.",
    features: [
      "Partnership-led growth",
      "Regional ecosystem collaboration",
      "Infrastructure relationships",
    ],
  },
] as const;

/** @deprecated Use SERVICES */
export const PRODUCTS = SERVICES;

export const CUSTOMER_PROFILES = [
  "African SMEs",
  "Importers & exporters",
  "Startups & digital businesses",
  "Remote-first companies",
  "Freelancers",
  "Globally connected professionals",
] as const;

export const SUPPORTED_CURRENCIES = {
  Africa: ["NGN", "GHS", "KES", "ZAR", "UGX", "XOF", "XAF", "EGP"],
  Europe: ["EUR", "GBP", "CHF"],
  Americas: ["USD", "CAD"],
  "Asia Pacific": ["AED", "INR", "CNY"],
} as const;

export const TRUST_SIGNALS = [
  { value: "20+", label: "Years of collective experience" },
  { value: "Licensed", label: "Lending operations" },
  { value: "OTC", label: "Treasury desk support" },
  { value: "Regional", label: "African market focus" },
] as const;

/** @deprecated Use TRUST_SIGNALS */
export const TRUST_STATS = TRUST_SIGNALS;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Start a conversation",
    description:
      "Tell us about your cross-border payment, FX, or treasury needs. We begin with clarity, not complexity.",
  },
  {
    step: "02",
    title: "Structure the right approach",
    description:
      "We assess your requirements and outline a practical path forward, with transparent communication throughout.",
  },
  {
    step: "03",
    title: "Execute with accountability",
    description:
      "Responsive handling, professional execution, and relationship-led support through completion.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What does Zender Finance do?",
    answer:
      "Zender helps African businesses and individuals navigate cross-border finance, including payments, FX, treasury conversations, lending support, and partnership-led solutions, with a focus on responsiveness, execution, and trusted relationships.",
  },
  {
    question: "Who is Zender built for?",
    answer:
      "Our typical clients include African SMEs, importers and exporters, startups, digital businesses, remote-first companies, freelancers, and globally connected professionals who need reliable cross-border financial support.",
  },
  {
    question: "Does Zender have a mobile app?",
    answer:
      "Zender is currently relationship and conversation-driven. Clients can onboard and manage activity through our web platform. There is no mobile app at this stage.",
  },
  {
    question: "How are FX rates shown on the website?",
    answer:
      "Rates on the website are indicative treasury desk references and are updated by our team. Final rates are confirmed at the point of transfer or treasury conversation on our platform or desk.",
  },
  {
    question: "Is Zender licensed?",
    answer:
      "Zender currently holds a lending license directly. All descriptions of treasury operations, partnerships, and cross-border capabilities are positioned carefully and in line with our current operational scope.",
  },
  {
    question: "How do I get started?",
    answer:
      "The best first step is to contact our treasury desk to discuss your needs. If you are ready to onboard, you can also access our web onboarding platform.",
  },
] as const;

export const ABOUT_STORY = {
  origin:
    "Zender was born from firsthand experience inside cross-border payments and offshore finance, where trust, accountability, and operational control are often tested by fragmented processes and misaligned incentives.",
  conviction:
    "We built Zender to create a structure where integrity, responsiveness, and execution quality are foundational, not optional. A relationship-driven approach to cross-border finance for African businesses and globally connected Africans.",
  familyExplanation:
    "Zender helps African individuals and businesses move money across borders, manage foreign exchange needs, and access financial support without the usual complexity, delays, and friction of international finance.",
} as const;

export const TEAM_MEMBERS = [
  {
    name: "Nwogo Onyejepu",
    role: "Chief Experience Officer",
    bio: "Shapes how clients experience Zender, building a treasury partner rooted in trust, execution, and African market understanding.",
    image: null as string | null,
  },
  {
    name: "Chika Ononye",
    role: "CFO",
    bio: "Oversees financial strategy, controls, and the structures that keep Zender’s operations accountable and growth-ready.",
    image: null as string | null,
  },
  {
    name: "Binatari Wariowei",
    role: "Product & Tech Lead",
    bio: "Leads Zender’s product and technology, building the platform and tools that keep every transfer clear from start to finish.",
    image: null as string | null,
  },
  {
    name: "Rebecca Martins",
    role: "Treasury",
    bio: "Owns desk conversations, indicative pricing, and structured FX support for clients moving value across borders.",
    image: null as string | null,
  },
] as const;
