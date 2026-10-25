import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PRODUCTS } from "@/lib/site";

type ProductsGridProps = {
  showAll?: boolean;
};

export function ProductsGrid({ showAll = false }: ProductsGridProps) {
  const items = showAll ? PRODUCTS : PRODUCTS.slice(0, 3);

  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Products"
          title="Financial infrastructure for cross-border business"
          description="Payments, FX, treasury, and collections, unified on one web platform built for African markets."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {items.map((product, index) => (
            <article
              key={product.slug}
              className="group rounded-2xl border border-zender-navy/8 bg-white p-8 shadow-sm transition hover:border-zender-teal/30 hover:shadow-md"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zender-mint text-sm font-bold text-zender-teal">
                {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-zender-navy">
                {product.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zender-navy/65">
                {product.description}
              </p>
              <ul className="mt-5 space-y-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-zender-navy/70"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-zender-teal" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {!showAll ? (
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="text-sm font-semibold text-zender-teal transition hover:text-zender-navy"
            >
              View all products →
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
