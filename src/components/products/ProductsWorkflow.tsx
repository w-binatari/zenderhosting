import { HOW_IT_WORKS } from "@/lib/site";

export function ProductsWorkflow() {
  return (
    <section id="how-it-works" className="section scroll-mt-28 bg-zender-tint">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="section-h2 text-zender-navy">
            From conversation to execution
          </h2>
          <p className="lede">
            We begin with clarity about your needs, structure a practical path
            forward, and execute with accountability, supported by our web
            platform when you are ready to onboard.
          </p>
        </div>

        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {HOW_IT_WORKS.map((item) => (
            <li key={item.step} className="border-t-2 border-zender-navy pt-5">
              <h3 className="text-lg font-semibold text-zender-navy">
                {item.step}. {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zender-navy/70">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
