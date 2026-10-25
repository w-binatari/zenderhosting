import { TRUST_STATS } from "@/lib/site";

export function StatsRow() {
  return (
    <section className="border-y border-zender-navy/8 bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
        {TRUST_STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold text-zender-teal sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-zender-navy/65">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
