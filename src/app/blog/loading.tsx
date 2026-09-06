export default function BlogLoading() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24" aria-busy="true" aria-label="Loading blog">
      <p role="status">Loading articles…</p>
      <div className="mt-8 h-64 animate-pulse bg-secondary motion-reduce:animate-none" />
    </main>
  );
}
