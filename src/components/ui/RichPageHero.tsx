type PageHeroProps = {
  title: string;
  description: string;
  visual?: React.ReactNode;
};

export function RichPageHero({ title, description, visual }: PageHeroProps) {
  return (
    <section className="bg-zender-tint px-6 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-36">
      <div
        className={`mx-auto grid items-center gap-12 ${
          visual ? "max-w-6xl lg:grid-cols-2" : "max-w-3xl"
        }`}
      >
        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zender-navy sm:text-5xl">
            {title}
          </h1>
          <p className="lede mt-6 max-w-xl text-lg">{description}</p>
        </div>
        {visual ? <div>{visual}</div> : null}
      </div>
    </section>
  );
}
