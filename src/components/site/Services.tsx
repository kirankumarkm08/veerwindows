import { ArrowUpRight, DoorOpen, Hammer, PanelsTopLeft, Ruler } from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: PanelsTopLeft,
    title: "Window Installation",
    text: "Professional installation of energy-efficient windows for lasting performance.",
  },
  {
    icon: DoorOpen,
    title: "Door Installation",
    text: "Stylish and secure doors designed to complement every property.",
  },
  {
    icon: Hammer,
    title: "Replacement Services",
    text: "Upgrade outdated windows and doors with durable modern solutions.",
  },
  {
    icon: Ruler,
    title: "Custom Solutions",
    text: "Tailor-made window and door designs to match your vision and requirements.",
  },
];

export function Services() {
  return (
    <section id="services" className="section bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal as="span" className="eyebrow">
          <span className="h-px w-8 bg-primary" />
          Our Services
        </Reveal>
        <Reveal
          delay={120}
          as="h2"
          className="mt-6 block max-w-3xl text-4xl sm:text-5xl lg:text-6xl"
        >
          Expert services crafted for success.
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              as="article"
              key={title}
              delay={index * 110}
              className="group bg-background p-9 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="size-10 stroke-[1.5] transition-colors" />
              <h3 className="mt-8 text-2xl transition-colors group-hover:text-primary-foreground">
                {title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                {text}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors">
                Find Out More <ArrowUpRight className="size-4" />
              </span>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 bg-ink px-9 py-8">
          <p className="max-w-xl text-xl font-bold text-ink-foreground">
            Secure your home with smart, reliable window and door solutions.
          </p>
          <a
            href="/contact"
            className="btn-sweep-light bg-primary-soft px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-soft-foreground"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
