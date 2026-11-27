import Link from "next/link";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { formatPostDate, getAllPosts } from "@/lib/blog";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog: Cross-Border Payments & FX Guides for Nigerian Businesses",
  description:
    "Practical guides from the Zender treasury desk on paying overseas suppliers, understanding FX rates, and moving money across borders from Nigeria.",
  path: "/blog",
  keywords: ["cross-border payments blog", "FX guide Nigeria", "pay overseas suppliers guide"],
});

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Blog", path: "/blog" }])} />
      <SiteHeader />
      <main className="overflow-hidden">
        <RichPageHero
          title="Guides from the treasury desk"
          description="Practical notes on paying overseas suppliers, reading FX rates, and moving money across borders from Nigeria."
        />
        <section className="section bg-white">
          <ul className="mx-auto max-w-3xl divide-y divide-zender-navy/10 border-y border-zender-navy/10">
            {posts.map((post) => (
              <li key={post.slug} className="py-8">
                <p className="text-xs font-medium text-zender-navy/70">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  {" · "}
                  {post.readingMinutes} min read
                </p>
                <h2 className="mt-2 text-xl font-semibold text-zender-navy">
                  <Link href={`/blog/${post.slug}`} className="transition hover:text-zender-teal">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zender-navy/70">
                  {post.description}
                </p>
                <Link href={`/blog/${post.slug}`} className="text-link mt-3 inline-block">
                  Read the guide →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
