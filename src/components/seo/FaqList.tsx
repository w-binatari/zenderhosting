type FaqListProps = {
  items: readonly { question: string; answer: string }[];
};

/** Expandable question list, styled like the main FAQ page. */
export function FaqList({ items }: FaqListProps) {
  return (
    <div className="divide-y divide-zender-navy/10 border-y border-zender-navy/10">
      {items.map((item) => (
        <details key={item.question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-zender-navy marker:content-none [&::-webkit-details-marker]:hidden">
            {item.question}
            <span
              aria-hidden="true"
              className="shrink-0 text-xl leading-none text-zender-teal transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-relaxed text-zender-navy/70">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
