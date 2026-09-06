import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, formatPostDate } from "@/lib/sanity/posts";
import { ArticleBody } from "@/components/site/ArticleBody";
import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  return {
    title: `${title} | Veer Windows`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      ...(post.author ? { authors: [post.author] } : {}),
      images: post.coverImage
        ? [{ url: `${post.coverImage.url}?w=1200&auto=format`, alt: post.coverImage.alt }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.coverImage ? [post.coverImage.url] : [],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  return (
    <>
      <PageHero
        eyebrow={post.categories.join(" / ") || "Blog"}
        title={post.title}
        description={post.excerpt}
      />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <article>
          <div className="mb-8 flex flex-wrap gap-4 text-muted-foreground">
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            {post.author && <span>By {post.author}</span>}
          </div>
          {post.coverImage && (
            <img
              src={`${post.coverImage.url}?w=1600&auto=format&q=85`}
              alt={post.coverImage.alt}
              width={1600}
              height={1000}
              className="mb-10 max-h-[600px] w-full object-cover"
            />
          )}
          <ArticleBody body={post.body} />
        </article>
        <Link href="/blog" className="mt-12 inline-block font-bold text-primary underline">
          Back to all articles
        </Link>
      </main>
      <Footer />
    </>
  );
}
