import { PRODUCTS } from "@/lib/site";
import { PRODUCT_VISUALS } from "@/lib/product-visuals";
import { ProductIcon, ProductMockup } from "@/components/products/ProductVisuals";

export function ProductShowcase() {
  return (
    <section className="dot-grid relative bg-white px-6 py-8 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl space-y-28 lg:space-y-36">
        {PRODUCTS.map((product, index) => {
          const visual = PRODUCT_VISUALS[product.slug];
          const reversed = index % 2 === 1;

          return (
            <article
              key={product.slug}
              id={product.slug}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div
                  className={`pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br ${visual.accent} opacity-70 blur-2xl`}
                />
                <div className="relative">
                  <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-zender-teal/20" />
                  <ProductMockup slug={product.slug} />
                </div>
              </div>

              <div>
                <span className="nav-link text-zender-teal">{visual.tag}</span>
                <div className="mt-4 flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${visual.iconBg}`}
                  >
                    <ProductIcon slug={product.slug} />
                  </span>
                  <h2 className="text-2xl font-semibold text-zender-navy sm:text-3xl">
                    {product.title}
                  </h2>
                </div>
                <p className="mt-5 text-base leading-relaxed text-zender-navy/65">
                  {product.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-zender-navy/8 bg-zender-mint/30 px-4 py-3 text-sm text-zender-navy/75"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-zender-teal" />
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
