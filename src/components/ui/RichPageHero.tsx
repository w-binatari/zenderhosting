type RichPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  pills?: string[];
  visual?: React.ReactNode;
};

export function RichPageHero({
  eyebrow,
  title,
  description,
  pills,
  visual,
}: RichPageHeroProps) {
  return (
    <section className="page-mesh relative overflow-hidden px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-36">
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-zender-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-zender-navy/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="nav-link text-zender-teal">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zender-navy sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zender-navy/65">
            {description}
          </p>
          {pills && pills.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-3">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="glass-card rounded-full px-4 py-2 text-xs font-medium text-zender-navy/70"
                >
                  {pill}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        {visual ? <div className="relative">{visual}</div> : null}
      </div>
    </section>
  );
}
