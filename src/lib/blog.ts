import { readdir, readFile } from "fs/promises";
import path from "path";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. 2026-10-28 */
  date: string;
  updated?: string;
  author: string;
  keywords: string[];
  draft: boolean;
  html: string;
  readingMinutes: number;
};

/**
 * Minimal front matter: `key: value` lines between `---` fences.
 * `keywords` is a comma-separated list; `draft: true` hides a post.
 */
function parseFrontMatter(source: string): { data: Record<string, string>; body: string } {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: source };

  const data: Record<string, string> = {};
  for (const line of match[1]!.split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    if (key) data[key] = value;
  }
  return { data, body: match[2]! };
}

async function readPost(file: string): Promise<BlogPost> {
  const source = await readFile(path.join(BLOG_DIR, file), "utf8");
  const { data, body } = parseFrontMatter(source);
  const slug = file.replace(/\.md$/, "");
  const words = body.split(/\s+/).filter(Boolean).length;

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    updated: data.updated || undefined,
    author: data.author ?? "Zender Treasury Desk",
    keywords: (data.keywords ?? "")
      .split(",")
      .map((keyword) => keyword.trim())
      .filter(Boolean),
    draft: data.draft === "true",
    html: await marked.parse(body),
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
}

/** Published posts, newest first. Files starting with "_" (like the template) are skipped. */
export async function getAllPosts(): Promise<BlogPost[]> {
  const files = (await readdir(BLOG_DIR)).filter(
    (file) => file.endsWith(".md") && !file.startsWith("_"),
  );
  const posts = await Promise.all(files.map(readPost));
  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<BlogPost | undefined> {
  return (await getAllPosts()).find((post) => post.slug === slug);
}

export function formatPostDate(date: string): string {
  const parsed = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed);
}
