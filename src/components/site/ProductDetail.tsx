import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";

import type { Product } from "@/lib/products";
import { GLASS_OPTIONS, PRODUCTS } from "@/lib/products";
import { Reveal } from "./Reveal";

type ProductDetailProps = { product: Product };

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <main>
      <section className="section bg-background pt-16 sm:pt-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-20">
          <Reveal className="relative aspect-[4/3] overflow-hidden bg-secondary">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal delay={120}>
            <Link href="/services" className="eyebrow transition-colors hover:text-primary">
              <ChevronLeft className="size-4" /> Back to services
            </Link>
            <h2 className="mt-7 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              {product.description}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              {product.intro}
            </p>
            <Link
              href="/contact"
              className="btn-sweep mt-9 inline-flex items-center gap-3 bg-primary px-7 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-foreground"
            >
              Request a consultation <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="product-range" className="section scroll-mt-24 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal as="span" className="eyebrow">
            <span className="h-px w-8 bg-primary" /> Product range
          </Reveal>
          <Reveal as="h2" delay={100} className="mt-6 max-w-3xl text-4xl sm:text-5xl">
            Built around the way you use your space.
          </Reveal>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
            {product.variants.map((variant, index) => (
              <Reveal
                key={variant.name}
                delay={index * 80}
                as="article"
                className="group overflow-hidden bg-background"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                  <Image
                    src={variant.image}
                    alt={variant.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <span className="text-sm font-bold text-primary">0{index + 1}</span>
                  <h3 className="mt-8 text-2xl">{variant.name}</h3>
                  <p className="mt-4 max-w-md leading-7 text-muted-foreground">
                    {variant.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-primary" /> Available glass options
              </span>
              <h2 className="mt-6 text-4xl sm:text-5xl">Choose the right glass for your space.</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-2xl leading-7 text-muted-foreground">
                Match your window or door system with the privacy, safety, thermal, and visual
                performance your project needs.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GLASS_OPTIONS.map((option, index) => (
              <Reveal
                key={option.name}
                delay={index * 60}
                as="article"
                className="overflow-hidden border border-border bg-secondary"
              >
                <div className="relative aspect-[3/2] overflow-hidden border-b border-border bg-surface">
                  <Image
                    src={option.image}
                    alt={option.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-primary">0{index + 1}</span>
                  <h3 className="mt-4 text-xl">{option.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {option.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <span className="eyebrow text-ink-foreground/60">
              <span className="h-px w-8 bg-primary-soft" /> Why Veer
            </span>
            <h2 className="mt-6 max-w-lg text-4xl text-ink-foreground sm:text-5xl">
              Detail that performs for years.
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {product.benefits.map((benefit, index) => (
              <Reveal
                key={benefit}
                delay={index * 70}
                className="flex gap-4 border-t border-ink-foreground/15 py-5"
              >
                <Check className="mt-0.5 size-5 shrink-0 text-primary-soft" />
                <span className="text-lg text-ink-foreground/85">{benefit}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <h2 className="text-3xl sm:text-4xl">Explore more product systems.</h2>
            <div className="flex flex-wrap gap-3">
              {PRODUCTS.filter((item) => item.slug !== product.slug)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="border border-border px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:border-primary hover:text-primary"
                  >
                    {item.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
