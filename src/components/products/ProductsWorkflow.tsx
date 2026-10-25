import { HOW_IT_WORKS, ONBOARDING_URL } from "@/lib/site";
import Link from "next/link";

export function ProductsWorkflow() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-b from-white via-zender-mint/40 to-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="nav-link text-zender-teal">How it works</p>
          <h2 className="mt-4 text-3xl font-semibold text-zender-navy sm:text-4xl">
            From conversation to execution
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zender-navy/65">
            We begin with clarity about your needs, structure a practical path
            forward, and execute with accountability, supported by our web
            platform when you are ready to onboard.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-zender-teal via-zender-navy/20 to-zender-teal md:left-1/2 md:block" />

          <div className="space-y-12">
            {HOW_IT_WORKS.map((item, index) => (
              <div
                key={item.step}
                className={`relative grid items-center gap-8 md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className={`${index % 2 === 0 ? "md:text-right" : "md:pl-12"}`}
                >
                  <span className="font-nav text-4xl font-semibold text-zender-teal/30">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-zender-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zender-navy/65">
                    {item.description}
                  </p>
                </div>

                <div
                  className={`rounded-2xl border border-zender-navy/8 bg-white p-6 shadow-lg ${
                    index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                  }`}
                >
                  <div className="flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-zender-mint to-white">
                    <span className="font-nav text-5xl font-semibold text-zender-navy/15">
                      {item.step}
                    </span>
                  </div>
                </div>

                <div className="absolute left-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-zender-teal shadow md:left-1/2 md:block" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href={ONBOARDING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link inline-flex rounded-full bg-zender-teal px-8 py-3.5 text-white transition hover:bg-zender-navy"
          >
            Open Platform
          </Link>
        </div>
      </div>
    </section>
  );
}
