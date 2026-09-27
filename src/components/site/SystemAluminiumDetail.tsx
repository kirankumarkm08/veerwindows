import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, ChevronRight } from "lucide-react";

import type { Product } from "@/lib/products";
import { PRODUCTS } from "@/lib/products";
import { Reveal } from "./Reveal";

type SystemAluminiumDetailProps = { product: Product };

const aluminiumSystems = PRODUCTS.filter(
  (item) => item.family === "system-aluminium" && item.menuGroup,
);

const aluminiumGroups = [
  { label: "Windows", menuGroup: "window" },
  { label: "Doors & architectural systems", menuGroup: "door" },
] as const;

export function SystemAluminiumDetail({ product }: SystemAluminiumDetailProps) {
  const catalogueDoesNotListSystemAluminiumLiftSlide = product.slug === "system-aluminium-lift-slide-door";

  return (
    <main>
      <section className="bg-background pb-8 pt-28 sm:pt-32">
        <div className="mx-auto max-w-[1500px] px-6">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <ChevronRight aria-hidden="true" className="size-3" />
            <Link href="/services/family/system-aluminium" className="transition-colors hover:text-primary">System Aluminium</Link>
            <ChevronRight aria-hidden="true" className="size-3" />
            <span aria-current="page" className="text-primary">{product.title}</span>
          </nav>

          <div className="relative isolate min-h-[580px] overflow-hidden bg-ink text-white sm:min-h-[660px] lg:min-h-[720px]">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              unoptimized
              priority
              sizes="100vw"
              className="-z-20 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,30,44,0.94)_0%,rgba(3,30,44,0.78)_38%,rgba(3,30,44,0.18)_78%),linear-gradient(0deg,rgba(3,30,44,0.48)_0%,transparent_40%)]" />
            <div className="relative flex min-h-[580px] flex-col justify-between px-6 py-8 sm:min-h-[660px] sm:px-12 sm:py-12 lg:min-h-[720px] lg:px-16 lg:py-14">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow text-white/75"><span className="mr-3 inline-block h-px w-8 bg-primary-soft" />{product.eyebrow}</p>
              </div>

              <Reveal className="max-w-3xl py-12">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-soft">System Aluminium</p>
                <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
                  {product.title}
                </h1>
                <p className="mt-6 max-w-xl text-xl font-medium leading-8 text-white/90 sm:text-2xl">{product.description}</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">{product.intro}</p>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <Link href="/contact" className="btn-sweep inline-flex items-center gap-3 bg-primary-soft px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-primary-soft-foreground">
                    Discuss your project <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                  <a href="#advantages" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-white">
                    Explore the system <ArrowDown aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </Reveal>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/25 pt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white/65">
                <span>Veer Windows / Architectural aluminium</span>
                <span>{product.imageAlt}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="scroll-mt-20 bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-primary"><span className="mr-3 inline-block h-px w-8 bg-primary" />{catalogueDoesNotListSystemAluminiumLiftSlide ? "Catalogue listing" : "Why this system"}</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl">
              {catalogueDoesNotListSystemAluminiumLiftSlide ? "Check the available material." : "Precision in every profile."}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              {catalogueDoesNotListSystemAluminiumLiftSlide
                ? "The Veer catalogue lists Lift & Slide under uPVC special systems, not System Aluminium. Contact our team to confirm whether an aluminium version is available."
                : "The right system balances the opening, the view, and the performance your project requires."}
            </p>
          </div>

          <ul className="border-t border-border">
            {product.benefits.map((benefit, index) => (
              <Reveal key={benefit} as="li" delay={index * 55} className="grid gap-3 border-b border-border py-5 sm:grid-cols-[1fr_auto] sm:gap-6 sm:py-7">
                <div className="flex items-start justify-between gap-4">
                  <p className="max-w-2xl text-xl font-medium leading-7 tracking-tight sm:text-2xl">{benefit}</p>
                  <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="performance" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-6 border-b border-border pb-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="eyebrow text-primary"><span className="mr-3 inline-block h-px w-8 bg-primary" />{catalogueDoesNotListSystemAluminiumLiftSlide ? "Product availability" : "Project planning"}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">{catalogueDoesNotListSystemAluminiumLiftSlide ? "Confirm this system with our team." : "Find the right configuration."}</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:justify-self-end">
              {catalogueDoesNotListSystemAluminiumLiftSlide
                ? "The catalogue does not provide System Aluminium specifications for Lift & Slide. Please confirm the material and product details with Veer before specifying it."
                : "The catalogue introduces the system range without publishing technical schedules. Our team can confirm the appropriate configuration, glazing, and project details with you."}
            </p>
          </div>

          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-primary transition-colors hover:text-heading">
            Ask our team for details <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/20 pb-7">
            <div>
              <p className="eyebrow text-primary-soft"><span className="mr-3 inline-block h-px w-8 bg-primary-soft" />Explore more systems</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Find your aluminium system.</h2>
            </div>
            <Link href="/services/family/system-aluminium" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.13em] text-primary-soft transition-colors hover:text-white">
              All aluminium systems <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="grid gap-x-10 gap-y-10 pt-8 md:grid-cols-2">
            {aluminiumGroups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/50">{group.label}</h3>
                <ul className="border-t border-white/20">
                  {aluminiumSystems.filter((item) => item.menuGroup === group.menuGroup).map((item) => {
                    const active = item.slug === product.slug;

                    return (
                      <li key={item.slug} className="border-b border-white/15">
                        <Link
                          href={`/services/${item.slug}`}
                          aria-current={active ? "page" : undefined}
                          className={`group flex items-center justify-between gap-4 py-3.5 transition-colors ${active ? "text-primary-soft" : "text-white/80 hover:text-white"}`}
                        >
                          <span className="flex items-center gap-4">
                            <span className="text-sm font-medium sm:text-base">{item.title}</span>
                          </span>
                          <ArrowRight aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
