type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zender-teal">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-zender-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/80" : "text-zender-navy/65"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
