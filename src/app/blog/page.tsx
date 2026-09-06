import type { Metadata } from "next";

import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts, PAGE_SIZE } from "@/lib/sanity/posts";
import { Ventures } from "@/components/site/VeerWindowsSections";

export const metadata: Metadata = {
  title: "Blog - Veer Windows Insights",
  description:
    "Read Veer Windows updates and practical insights on uPVC windows, aluminium systems, airtight fenestration, maintenance, design, and installation.",
  openGraph: {
    title: "Veer Windows Blog",
    description:
      "Window and door insights, product updates, maintenance tips, and fenestration trends from Veer Windows.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { page: pageParam } = await searchParams;
  if (
    pageParam !== undefined &&
    (typeof pageParam !== "string" || !/^[1-9]\d{0,5}$/.test(pageParam))
  )
    notFound();
  const page = Number(pageParam ?? 1);
  const { posts, total } = await getPosts(page);
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  if (page > pages) notFound();
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Blog"
        title="Insights for better windows, doors, and long-lasting homes."
        description="Explore practical guidance, product updates, and design ideas for choosing and maintaining high-performance uPVC and aluminium systems."
      />
      <main>
        <Blog posts={posts} />
        {pages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="mx-auto flex max-w-[1400px] items-center justify-center gap-8 px-6 pb-16"
          >
            {page > 1 && (
              <Link className="underline" href={page === 2 ? "/blog" : `/blog?page=${page - 1}`}>
                Previous
              </Link>
            )}
            <span>
              Page {page} of {pages}
            </span>
            {page < pages && (
              <Link className="underline" href={`/blog?page=${page + 1}`}>
                Next
              </Link>
            )}
          </nav>
        )}
      </main>
      <Ventures />
      <Footer />
    </div>
  );
}
