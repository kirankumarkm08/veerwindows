import { Reveal } from "./Reveal";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const POSTS = [
  {
    img: b1.src,
    category: "Windows",
    date: "March 15, 2026",
    title: "Energy-efficient windows for modern homes.",
  },
  {
    img: b2.src,
    category: "Doors",
    date: "March 13, 2026",
    title: "Choosing the right doors for security and style.",
  },
  {
    img: b3.src,
    category: "Maintenance",
    date: "March 12, 2026",
    title: "Simple tips to maintain windows & doors longer.",
  },
];

export function Blog() {
  return (
    <section id="blog" className="section">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal as="span" className="eyebrow">
          <span className="h-px w-8 bg-primary" />
          Our Blog
        </Reveal>
        <Reveal
          delay={120}
          as="h2"
          className="mt-6 block max-w-3xl text-4xl sm:text-5xl lg:text-6xl"
        >
          Insights &amp; ideas for better homes.
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {POSTS.map((post, index) => (
            <Reveal as="article" key={post.title} delay={index * 140} className="group">
              <div className="overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-center gap-4 text-[0.65rem] font-extrabold uppercase tracking-[0.2em]">
                <span className="bg-primary-deep px-3 py-1.5 text-primary-foreground">
                  {post.category}
                </span>
                <span className="text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="mt-4 text-2xl transition-colors group-hover:text-muted-foreground">
                {post.title}
              </h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
