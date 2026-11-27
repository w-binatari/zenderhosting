import { getAllPosts, getPost } from "@/lib/blog";
import { brandedOgImage, OG_SIZE } from "@/lib/og";

export const alt = "Zender Finance guide";
export const size = OG_SIZE;
export const contentType = "image/png";

export async function generateStaticParams() {
  return (await getAllPosts()).map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPost((await params).slug);
  return brandedOgImage({ eyebrow: "Zender Finance guide", title: post?.title ?? "Zender Finance" });
}
