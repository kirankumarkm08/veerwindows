import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import type { Product } from "@/lib/products";
import { Reveal } from "./Reveal";

type ProductFamilyProps = {
  title: string;
  intro: string;
  products: Product[];
};

export function ProductFamily({ title, intro, products }: ProductFamilyProps) {
  const productGroups =
    products[0]?.family === "system-aluminium"
      ? [
          {
            label: "Windows",
            products: products.filter((product) => product.menuGroup === "window"),
          },
          { label: "Doors", products: products.filter((product) => product.menuGroup === "door") },
        ]
      : [{ label: "", products }];

  return (
    <main>
      <section className="section bg-background">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="max-w-3xl">
            <Reveal as="span" className="eyebrow">
              {" "}
              Product family
            </Reveal>
            <Reveal as="h2" delay={100} className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
              {title}
            </Reveal>
            <Reveal delay={180} className="mt-6 text-lg leading-8 text-muted-foreground">
              {intro}
            </Reveal>
          </div>

          <div className="mt-14 space-y-14">
            {productGroups.map((group) => (
              <section key={group.label || "products"} aria-label={group.label || title}>
                {group.label && (
                  <div className="mb-6 flex items-end justify-between border-b border-border pb-4">
                    <h3 className="text-3xl sm:text-4xl">{group.label}</h3>
                  </div>
                )}
                <div className="grid gap-6 md:grid-cols-2">
                  {group.products.map((product, index) => (
                    <Reveal
                      key={product.slug}
                      delay={index * 90}
                      as="article"
                      className="group overflow-hidden border border-border bg-secondary"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          fill
                          unoptimized={product.family === "system-aluminium"}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-7 sm:p-9">
                        <h4 className="text-3xl">{product.title}</h4>
                        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                          {product.intro}
                        </p>
                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                          {product.benefits.slice(0, 4).map((benefit) => (
                            <span
                              key={benefit}
                              className="flex items-start gap-2 text-sm text-foreground/80"
                            >
                              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                              {benefit}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/services/${product.slug}`}
                          className="mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-primary"
                        >
                          Explore product{" "}
                          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 text-ink-foreground">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 px-6">
          <p className="max-w-2xl text-2xl font-bold text-ink-foreground">
            Not sure which system fits your project?
          </p>
          <Link
            href="/contact"
            className="btn-sweep-light bg-primary-soft px-7 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-soft-foreground"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </main>
  );
}
