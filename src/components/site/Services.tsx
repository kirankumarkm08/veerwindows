import { ArrowUpRight, DoorOpen, Hammer, PanelsTopLeft, Ruler } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { PRODUCTS } from "@/lib/products";

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
          <span className="h-px w-8 bg-primary" /> Services
        </Reveal>
        <Reveal as="h2" delay={100} className="mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
          Choose the right window and door system for your space.
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Link
            href="/services/family/upvc"
            className="group relative min-h-80 overflow-hidden bg-ink p-8 text-ink-foreground sm:p-10"
          >
            <img
              src="/sliders/1.png"
              alt="uPVC windows and doors"
              className="absolute inset-0 size-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
            <div className="relative flex h-full min-h-60 flex-col justify-end">
              <span className="eyebrow text-ink-foreground/70">01 / uPVC</span>
              <h3 className="mt-4 text-3xl text-ink-foreground">uPVC Windows & Doors</h3>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-soft">
                View collection{" "}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </Link>
          <Link
            href="/services/family/system-aluminium"
            className="group relative min-h-80 overflow-hidden bg-ink p-8 text-ink-foreground sm:p-10"
          >
            <img
              src="/sliders/9.png"
              alt="System aluminium windows and doors"
              className="absolute inset-0 size-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
            <div className="relative flex h-full min-h-60 flex-col justify-end">
              <span className="eyebrow text-ink-foreground/70">02 / Aluminium</span>
              <h3 className="mt-4 text-3xl text-ink-foreground">System Aluminium</h3>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-soft">
                View collection{" "}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </Link>
        </div>

        <Reveal as="span" className="eyebrow">
          <span className="h-px w-8 bg-primary" />
          Installation Services
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
              <Link
                href={`/services/${PRODUCTS[index]?.slug ?? "casement-windows-doors"}`}
                className="mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
              >
                Find Out More <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal as="span" className="eyebrow">
            <span className="h-px w-8 bg-primary" /> Product range
          </Reveal>
          <Reveal as="h2" delay={100} className="mt-6 max-w-3xl text-4xl sm:text-5xl">
            Explore the systems in our brochure.
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, index) => (
              <Reveal
                key={product.slug}
                delay={index * 70}
                as="article"
                className="group border border-border bg-background p-7 transition-colors hover:border-primary"
              >
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-2xl">{product.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {product.description}
                </p>
                <Link
                  href={`/services/${product.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-primary"
                >
                  View system{" "}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            ))}
          </div>
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
