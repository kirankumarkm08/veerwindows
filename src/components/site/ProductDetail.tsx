import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";

import type { Product } from "@/lib/products";
import { GLASS_OPTIONS, PRODUCTS } from "@/lib/products";
import { Reveal } from "./Reveal";
import { SystemAluminiumDetail } from "./SystemAluminiumDetail";

type ProductDetailProps = { product: Product };

export function ProductDetail({ product }: ProductDetailProps) {
  if (product.family === "system-aluminium" && product.menuGroup) {
    return <SystemAluminiumDetail product={product} />;
  }

  return (
    <main>
      <section className="bg-background pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <Reveal className="relative order-2 aspect-[4/3] overflow-hidden bg-secondary lg:order-1">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              unoptimized={product.family === "system-aluminium"}
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <div className="flex flex-col items-start">
              <Link
                href={product.family === "system-aluminium" ? "/services/family/system-aluminium" : "/services"}
                className="eyebrow transition-colors hover:text-primary"
              >
                <ChevronLeft className="size-4" /> All systems
              </Link>
              <p className="eyebrow mt-8 text-primary">{product.eyebrow}</p>
            </div>
            <h1 className="mt-3 max-w-2xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
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
                href={product.variants.length > 0 ? "#product-range" : "#product-details"}
                className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
              >
                {product.variants.length > 0 ? "View configurations ↓" : "View product details ↓"}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {product.variants.length > 0 && (
        <section id="product-range" className="scroll-mt-20 bg-secondary py-16 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="eyebrow"><span className="h-px w-8 bg-primary" /> Product range</p>
                <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">Choose your configuration.</h2>
              </div>
              <p className="max-w-md leading-6 text-muted-foreground">
                Compare the options in this system and find the right fit for your space.
              </p>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.variants.map((variant, index) => (
                <Reveal key={variant.name} delay={index * 60} as="article" className="group bg-background">
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                    <Image
                      src={variant.image}
                      alt={variant.name}
                      fill
                      unoptimized={product.family === "system-aluminium"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <span className="text-xs font-bold tracking-widest text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-xl">{variant.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{variant.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="product-details" className="scroll-mt-20 bg-ink py-14 text-ink-foreground sm:py-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-ink-foreground/60"><span className="h-px w-8 bg-primary-soft" /> Made for your project</p>
            <h2 className="mt-4 max-w-lg text-3xl text-ink-foreground sm:text-4xl">The details are in the choice.</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-6 text-ink-foreground/80">
                  <Check className="mt-1 size-4 shrink-0 text-primary-soft" /> {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-ink-foreground/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="eyebrow text-ink-foreground/60">
              {product.specifications?.length ? "Technical details" : "Glass options"}
            </p>
            {product.specifications?.length ? (
              <>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-ink-foreground/80 sm:grid-cols-2">
                  {product.specifications.map((specification) => (
                    <li key={specification} className="border-b border-ink-foreground/15 pb-3">
                      {specification}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p className="mt-3 max-w-xl text-sm leading-6 text-ink-foreground/70">
                  Select glazing to suit your priorities for privacy, safety, insulation, and light.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {GLASS_OPTIONS.map((option) => (
                    <span key={option.name} className="border border-ink-foreground/20 px-3 py-2 text-xs text-ink-foreground/85">
                      {option.name}
                    </span>
                  ))}
                </div>
              </>
            )}
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-soft hover:text-ink-foreground">
              Get help choosing <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-14">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="eyebrow"><span className="h-px w-8 bg-primary" /> Keep exploring</p>
              <h2 className="mt-3 text-2xl sm:text-3xl">More window and door systems</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {PRODUCTS.filter(
                (item) =>
                  item.family === product.family &&
                  item.slug !== product.slug &&
                  item.slug !== "system-aluminium-series",
              )
                .slice(0, 3)
                .map((item) => (
                  <Link key={item.slug} href={`/services/${item.slug}`} className="border border-border px-4 py-3 text-xs font-bold uppercase tracking-[0.1em] transition-colors hover:border-primary hover:text-primary">
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
