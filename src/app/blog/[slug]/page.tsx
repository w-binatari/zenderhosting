import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { formatPostDate, getAllPosts, getPost } from "@/lib/blog";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getAllPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params) {
  const post = await getPost((await params).slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: `/blog/${post.slug}/opengraph-image`,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: Params) {
  const post = await getPost((await params).slug);
  if (!post) notFound();

  const others = (await getAllPosts()).filter((other) => other.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated ?? post.date,
            keywords: post.keywords.join(", "),
            mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
            image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
            author: { "@type": "Organization", name: post.author, url: SITE_URL },
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
        ]}
      />
      <SiteHeader />
      <main className="overflow-hidden">
        <article>
          <header className="bg-zender-tint px-6 pb-14 pt-32 lg:px-8 lg:pt-36">
            <div className="mx-auto max-w-3xl">
              <Link href="/blog" className="text-link">
                ← All guides
              </Link>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zender-navy sm:text-5xl">
                {post.title}
              </h1>
              <p className="lede text-lg">{post.description}</p>
              <p className="mt-6 text-xs font-medium text-zender-navy/70">
                {post.author} · <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                {" · "}
                {post.readingMinutes} min read
              </p>
            </div>
          </header>
          <div className="section bg-white">
            <div
              className="prose-zender mx-auto max-w-3xl"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="mx-auto mt-14 max-w-3xl">
              <div className="panel p-6 sm:p-8">
                <p className="text-lg font-semibold text-zender-navy">
                  Planning a payment like this?
                </p>
                <p className="mt-2 text-sm text-zender-navy/70">
                  Send the amount, currency, and deadline to the treasury desk and it
                  will reply with an indicative level and the next step.
                </p>
                <Link href="/contact#enquiry" className="btn btn-primary mt-5">
                  Contact the treasury desk
                </Link>
              </div>
              {others.length > 0 ? (
                <RelatedLinks
                  heading="More guides"
                  links={others.map((other) => ({
                    label: other.title,
                    href: `/blog/${other.slug}`,
                  }))}
                />
              ) : null}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
