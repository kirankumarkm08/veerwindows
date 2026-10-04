import Link from "next/link";
import { Reveal } from "./Reveal";
import { formatPostDate, type BlogPost } from "@/lib/sanity/posts";

export function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="section">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal as="span" className="eyebrow">
          {" "}
          Our Blog
        </Reveal>
        <h2 className="mt-6 max-w-3xl text-4xl sm:text-5xl">
          Insights &amp; ideas for better homes.
        </h2>
        {posts.length === 0 ? (
          <p className="mt-10 text-muted-foreground">
            Our latest articles will appear here soon. Please check back.
          </p>
        ) : (
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post._id} className="group">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {post.coverImage && (
                    <div className="overflow-hidden">
                      <img
                        src={`${post.coverImage.url}?w=900&auto=format&q=80`}
                        alt={post.coverImage.alt}
                        width={900}
                        height={600}
                        loading="lazy"
                        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest">
                    {post.categories[0] && (
                      <span className="bg-primary-deep px-3 py-1.5 text-primary-foreground">
                        {post.categories[0]}
                      </span>
                    )}
                    <time dateTime={post.publishedAt} className="text-muted-foreground">
                      {formatPostDate(post.publishedAt)}
                    </time>
                  </div>
                  <h3 className="mt-4 text-2xl group-hover:text-primary">{post.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-5 inline-block font-bold text-primary">
                    Read article <span aria-hidden="true">?</span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
