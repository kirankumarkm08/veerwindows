import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const PROJECTS = [
  { img: p1.src, title: "Premium Entry Door Design", tag: "Doors" },
  { img: p2.src, title: "Energy Efficient Installations", tag: "Windows" },
  { img: p3.src, title: "Modern Sliding Door Systems", tag: "Doors" },
  { img: p4.src, title: "Custom Glass Window Solutions", tag: "Custom" },
  { img: p5.src, title: "Complete Home Renovation Upgrade", tag: "Renovation" },
  { img: p6.src, title: "Luxury Window Installation", tag: "Windows" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal as="span" className="eyebrow">
          <span className="h-px w-8 bg-primary" />
          Our Portfolio
        </Reveal>
        <Reveal
          delay={120}
          as="h2"
          className="mt-6 block max-w-3xl text-4xl sm:text-5xl lg:text-6xl"
        >
          Recent work built with precision.
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Reveal
              as="article"
              key={project.title}
              delay={(index % 3) * 130}
              className="group relative overflow-hidden"
            >
              <img
                src={project.img}
                alt={project.title}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/50 to-transparent p-6">
                <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-primary">
                  {project.tag}
                </span>
                <h3 className="mt-2 flex items-center justify-between gap-3 text-xl text-ink-foreground">
                  {project.title}
                  <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
