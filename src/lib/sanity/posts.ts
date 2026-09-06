import "server-only";
import { cache } from "react";
import { createClient } from "next-sanity";
import { z } from "zod";
import { getSanityConfig } from "./config";

export const PAGE_SIZE = 9;
const imageSchema = z.object({
  url: z
    .string()
    .url()
    .refine((value) => new URL(value).origin === "https://cdn.sanity.io"),
  alt: z.string(),
});
const blockSchema = z.object({
  _key: z.string(),
  _type: z.literal("block"),
  style: z.string().optional(),
  listItem: z.string().optional(),
  level: z.number().optional(),
  children: z.array(
    z.object({
      _key: z.string(),
      _type: z.literal("span"),
      text: z.string(),
      marks: z.array(z.string()).optional(),
    }),
  ),
  markDefs: z
    .array(z.object({ _key: z.string(), _type: z.string(), href: z.string().optional() }))
    .optional(),
});
const postSchema = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  excerpt: z.string(),
  publishedAt: z.string().datetime({ offset: true }),
  coverImage: imageSchema.nullable(),
  author: z.string().nullable(),
  categories: z.array(z.string()),
});
const articleSchema = postSchema.extend({
  body: z.array(blockSchema),
  seoTitle: z.string().nullable(),
  seoDescription: z.string().nullable(),
});
export type BlogPost = z.infer<typeof postSchema>;
export type Article = z.infer<typeof articleSchema>;
const filter = `_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()`;
const projection = `_id, title, "slug": slug.current, excerpt, publishedAt,
  "coverImage": select(defined(coverImage.asset->url) => {"url": coverImage.asset->url, "alt": coalesce(coverImage.alt, title)}, null),
  "author": author->name, "categories": coalesce(categories[]->title, [])`;

async function query(queryText: string, params: Record<string, string | number>) {
  const config = getSanityConfig();
  if (!config) return null;
  try {
    return await createClient({
      ...config,
      useCdn: false,
      perspective: "published",
    }).fetch<unknown>(queryText, params, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(10000),
    });
  } catch (error) {
    console.error(
      "Sanity blog request failed",
      error instanceof Error ? error.name : "Unknown error",
    );
    throw new Error("Blog content is temporarily unavailable.");
  }
}

export const getPosts = cache(async (page: number) => {
  const start = (page - 1) * PAGE_SIZE;
  const result = await query(
    `{"posts": *[${filter}] | order(publishedAt desc, _id asc)[$start...$end]{${projection}}, "total": count(*[${filter}])}`,
    { start, end: start + PAGE_SIZE },
  );
  if (result === null) return { posts: [], total: 0 };
  return z
    .object({ posts: z.array(postSchema), total: z.number().int().nonnegative() })
    .parse(result);
});

export const getPost = cache(async (slug: string) => {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 96) return null;
  const result = await query(
    `*[${filter} && slug.current == $slug][0]{${projection}, body, seoTitle, seoDescription}`,
    { slug },
  );
  return result === null ? null : articleSchema.parse(result);
});

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "long", timeZone: "Asia/Kolkata" }).format(
    new Date(date),
  );
}
