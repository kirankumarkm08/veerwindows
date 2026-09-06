import Link from "next/link";

export default function BlogNotFound() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl">Article or page not found</h1>
      <p className="mt-4">This content may no longer be available.</p>
      <Link href="/blog" className="mt-6 inline-block text-primary underline">
        Browse all articles
      </Link>
    </main>
  );
}
