import Link from "next/link";

type RelatedLinksProps = {
  heading?: string;
  links: readonly { label: string; href: string }[];
};

/** Internal links to related pages, so visitors and crawlers find the next useful page. */
export function RelatedLinks({ heading = "Related", links }: RelatedLinksProps) {
  return (
    <nav aria-label={heading} className="mt-12">
      <h2 className="text-sm font-semibold text-zender-navy">{heading}</h2>
      <ul className="mt-3 flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="btn btn-secondary !px-4 !py-2 text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
