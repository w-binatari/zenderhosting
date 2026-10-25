export const navLinks = [
  { label: "Services", href: "/products" },
  { label: "Importers", href: "/importers" },
  { label: "FX Rates", href: "/fx-rates" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export function navLabel(label: string) {
  return label.toUpperCase();
}
