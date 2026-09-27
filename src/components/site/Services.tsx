import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PRODUCTS } from "@/lib/products";
import { Reveal } from "./Reveal";

const SERVICE_OVERVIEW_PRODUCTS = PRODUCTS.filter(
  (product) => product.family === "upvc" || product.slug === "system-aluminium-series",
);

const PROCESS_STEPS = [
  {
    title: "We Visit",
    text: "A site inspection helps us understand your space and project needs.",
    image: "/services/process/visit.jpg",
    imageAlt: "A site professional inspecting a window",
  },
  {
    title: "We Measure",
    text: "Accurate dimensions provide the basis for a made-to-measure fit.",
    image: "/services/process/measure.jpg",
    imageAlt: "A worker measuring a window frame",
  },
  {
    title: "We Design",
    text: "We design a custom solution around your chosen system and space.",
    image: "/services/process/design.jpg",
    imageAlt: "An architect reviewing a building design drawing",
  },
  {
    title: "We Install",
    text: "Our team completes the project with professional installation.",
    image: "/services/process/install.jpg",
    imageAlt: "A tradesperson fitting a window in a home",
  },
];

export function Services() {
  return (
    <>
      <section id="product-range" className="scroll-mt-24 bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">
                <span className="h-px w-8 bg-primary" /> Product systems
              </span>
              <h2 className="mt-5 text-4xl sm:text-5xl">Explore product systems.</h2>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                Browse our uPVC and system aluminium windows and doors.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services/family/upvc"
                className="border border-border bg-background px-4 py-3 text-xs font-extrabold uppercase tracking-[0.12em] transition-colors hover:border-primary hover:text-primary"
              >
                uPVC collection <ArrowUpRight className="ml-1 inline size-4" />
              </Link>
              <Link
                href="/services/family/system-aluminium"
                className="border border-border bg-background px-4 py-3 text-xs font-extrabold uppercase tracking-[0.12em] transition-colors hover:border-primary hover:text-primary"
              >
                Aluminium collection <ArrowUpRight className="ml-1 inline size-4" />
              </Link>
            </div>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SERVICE_OVERVIEW_PRODUCTS.map((product, index) => (
              <Reveal
                key={product.slug}
                delay={index * 45}
                as="article"
                className="group overflow-hidden border border-border bg-background transition-colors hover:border-primary"
              >
                <Link
                  href={
                    product.slug === "system-aluminium-series"
                      ? "/services/family/system-aluminium"
                      : `/services/${product.slug}`
                  }
                  className="block"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      unoptimized={product.family === "system-aluminium"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-primary">
                      {product.family === "upvc" ? "uPVC" : "System aluminium"}
                    </span>
                    <h3 className="mt-2 text-xl">{product.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.13em] text-primary">
                      View system
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary" /> How we work
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl">A simple path to the right fit.</h2>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {PROCESS_STEPS.map(({ title, text, image, imageAlt }, index) => (
              <Reveal
                as="article"
                key={title}
                delay={index * 55}
                className="overflow-hidden border border-border bg-secondary"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 bg-ink px-6 py-6 text-ink-foreground sm:px-8">
            <p className="text-xl font-bold">Planning a window or door project?</p>
            <Link
              href="/contact"
              className="btn-sweep-light bg-primary-soft px-7 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-soft-foreground"
            >
              Talk to our team <ArrowUpRight className="ml-2 inline size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
