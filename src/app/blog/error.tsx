"use client";

import Link from "next/link";

export default function BlogError({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24" role="alert">
      <h1 className="text-3xl">We couldn’t load the blog</h1>
      <p className="mt-4 text-muted-foreground">Please try again in a moment.</p>
      <button
        onClick={reset}
        className="mt-6 bg-primary px-6 py-3 font-bold text-primary-foreground"
      >
        Try again
      </button>
      <Link href="/blog" className="ml-6 underline">
        All articles
      </Link>
    </main>
  );
}
