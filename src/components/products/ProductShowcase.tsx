import { PRODUCTS } from "@/lib/site";
import { ProductMockup } from "@/components/products/ProductVisuals";

export function ProductShowcase() {
  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-6xl space-y-24">
        {PRODUCTS.map((product, index) => {
          const reversed = index % 2 === 1;

          return (
            <article
              key={product.slug}
              id={product.slug}
              className={`grid scroll-mt-28 items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ProductMockup slug={product.slug} />

              <div>
                <h2 className="section-h2 text-zender-navy">{product.title}</h2>
                <p className="lede">{product.description}</p>
                <ul className="mt-6 divide-y divide-zender-navy/10 border-y border-zender-navy/10">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 py-3 text-sm text-zender-navy/70"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zender-teal" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
