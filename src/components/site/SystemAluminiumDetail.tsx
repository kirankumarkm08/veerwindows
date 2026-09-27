import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

import type { Product } from "@/lib/products";
import { PRODUCTS } from "@/lib/products";

type SystemAluminiumDetailProps = { product: Product };

const aluminiumSystems = PRODUCTS.filter(
  (item) => item.family === "system-aluminium" && item.menuGroup,
);

function AluminiumProductLinks({ currentSlug }: { currentSlug: string }) {
  const groups = [
    { label: "Windows", menuGroup: "window" },
    { label: "Doors", menuGroup: "door" },
  ] as const;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
      {groups.map((group) => (
        <section key={group.label}>
          <h3 className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
            {group.label}
          </h3>
          <ul className="grid gap-1">
            {aluminiumSystems
              .filter((item) => item.menuGroup === group.menuGroup)
              .map((item) => {
                const active = item.slug === currentSlug;

                return (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between gap-3 px-3 py-2.5 text-sm transition-colors ${
                        active
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary hover:text-primary"
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronRight className="size-4 shrink-0" />
                    </Link>
                  </li>
                );
              })}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function SystemAluminiumDetail({ product }: SystemAluminiumDetailProps) {
  return (
    <main>
      <section className="bg-background pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-[1400px] px-6">
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">Home</Link>
            <ChevronRight className="size-3" />
            <Link href="/services/family/system-aluminium" className="transition-colors hover:text-primary">
              Aluminium Products
            </Link>
            <ChevronRight className="size-3" />
            <span aria-current="page" className="text-primary">{product.title}</span>
          </nav>

          <details className="mb-7 border border-border bg-secondary p-4 lg:hidden">
            <summary className="cursor-pointer text-sm font-bold">Browse aluminium products</summary>
            <div className="mt-4">
              <AluminiumProductLinks currentSlug={product.slug} />
            </div>
          </details>

          <div className="grid gap-10 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-14">
            <aside className="hidden self-start border border-border bg-background p-5 lg:sticky lg:top-28 lg:block">
              <h2 className="mb-6 text-xl font-bold">Aluminium Products</h2>
              <AluminiumProductLinks currentSlug={product.slug} />
              <div className="mt-7 border-t border-border pt-5">
                <p className="text-sm font-semibold">Planning a project?</p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-primary"
                >
                  Talk to our team <ArrowRight className="size-4" />
                </Link>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
                <div className="relative order-2 aspect-[4/3] overflow-hidden bg-secondary lg:order-1">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <p className="eyebrow text-primary">{product.eyebrow}</p>
                  <h1 className="mt-3 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                    {product.title}
                  </h1>
                  <p className="mt-4 text-lg font-medium">{product.description}</p>
                  <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{product.intro}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className="btn-sweep inline-flex items-center gap-3 bg-primary px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-primary-foreground"
                    >
                      Talk to our team <ArrowRight className="size-4" />
                    </Link>
                    <a
                      href="#advantages"
                      className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
                    >
                      Product details ↓
                    </a>
                  </div>
                </div>
              </div>

              <nav aria-label="Product information" className="mt-12 flex gap-8 border-b border-border">
                <a href="#advantages" className="border-b-2 border-primary px-1 pb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-primary">
                  Advantages
                </a>
                <a href="#performance" className="border-b-2 border-transparent px-1 pb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  Performance
                </a>
              </nav>

              <section id="advantages" className="scroll-mt-24 py-10">
                <h2 className="text-2xl font-bold sm:text-3xl">Advantages</h2>
                <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 leading-6 text-foreground/85">
                      <Check className="mt-1 size-4 shrink-0 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="performance" className="scroll-mt-24 border-t border-border py-10">
                <h2 className="text-2xl font-bold sm:text-3xl">Performance</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {product.specifications?.map((specification) => (
                    <li key={specification} className="border-b border-border pb-3 text-sm leading-6 text-muted-foreground">
                      {specification}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
