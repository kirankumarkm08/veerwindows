import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";

import type { Product } from "@/lib/products";
import { Reveal } from "./Reveal";
import { SlidingWindowsDoorsDetail } from "./SlidingWindowsDoorsDetail";
import { SystemAluminiumDetail } from "./SystemAluminiumDetail";

type ProductDetailProps = { product: Product };

export function ProductDetail({ product }: ProductDetailProps) {
  if (product.slug === "sliding-windows-doors") {
    return <SlidingWindowsDoorsDetail product={product} />;
  }

  if (product.family === "system-aluminium" && product.menuGroup) {
    return <SystemAluminiumDetail product={product} />;
  }

  const familyHref = product.family === "system-aluminium" ? "/services/family/system-aluminium" : "/services/family/upvc";
  const familyLabel = product.family === "system-aluminium" ? "System Aluminium" : "uPVC systems";

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-x-0 top-0 z-20 h-1 bg-primary-soft" />
        <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal className="relative z-10 flex min-h-[580px] flex-col justify-between px-6 pb-10 pt-28 sm:px-10 sm:pb-14 sm:pt-32 lg:min-h-[690px] lg:px-16 lg:pb-16">
            <Link href={familyHref} className="eyebrow w-fit text-ink-foreground/65 transition-colors hover:text-primary-soft">
              <ChevronLeft aria-hidden="true" className="size-4" /> {familyLabel}
            </Link>

            <div className="my-12">
              <p className="eyebrow text-primary-soft">
                <span className="mr-3 inline-block h-px w-8 bg-primary-soft" />
                {product.eyebrow}
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                {product.title}
              </h1>
              <p className="mt-6 max-w-lg text-xl font-medium leading-8 text-white/90 sm:text-2xl">
                {product.description}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                {product.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href="/contact"
                  className="btn-sweep inline-flex items-center gap-3 bg-primary-soft px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-primary-soft-foreground"
                >
                  Plan your project <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <a
                  href={product.variants.length ? "#product-range" : "#product-details"}
                  className="text-xs font-bold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-white"
                >
                  Explore the system <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="border-t border-white/20 pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
              Thoughtfully designed for your space
            </div>
          </Reveal>

          <Reveal delay={120} className="relative min-h-[380px] overflow-hidden sm:min-h-[500px] lg:min-h-[690px]">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              unoptimized={product.family === "system-aluminium"}
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/10 lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-ink/20" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 border-b border-white/55 pb-3 text-white sm:bottom-10 sm:left-10 sm:right-10">
              <p className="max-w-xs text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-white/90">
                {product.imageAlt}
              </p>
              <span className="text-xs font-bold tracking-[0.16em] text-white/80">VEER / {product.family === "upvc" ? "UPVC" : "AL"}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {product.variants.length > 0 && (
        <section id="product-range" className="scroll-mt-20 bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid gap-6 border-b border-border pb-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="eyebrow text-primary"><span className="mr-3 inline-block h-px w-8 bg-primary" />Configurations</p>
                <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                  Find the right opening.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:justify-self-end">
                Every layout is measured for its space. Compare the opening styles and choose the one that fits how you use the room.
              </p>
            </div>

            <ul className="mt-2">
              {product.variants.map((variant, index) => (
                <Reveal key={variant.name} as="li" delay={index * 45} className="grid gap-5 border-b border-border py-7 sm:py-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(300px,0.8fr)] lg:items-center lg:gap-9">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{variant.name}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{variant.description}</p>
                  </div>
                  <div className={`relative overflow-hidden bg-secondary ${index % 2 ? "aspect-[16/8]" : "aspect-[16/9]"}`}>
                    <Image
                      src={variant.image}
                      alt={variant.name}
                      fill
                      unoptimized={product.family === "system-aluminium"}
                      sizes="(max-width: 1024px) 100vw, 38vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section id="product-details" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="eyebrow text-primary"><span className="mr-3 inline-block h-px w-8 bg-primary" />The difference is in the detail</p>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-5xl">
              Performance shaped around your space.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              From the way it opens to the way it seals, each choice helps create a more comfortable room.
            </p>
            <ul className="mt-9">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-4 border-t border-border py-4 text-sm leading-6">
                  <span className="flex gap-3 font-medium text-foreground"><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="eyebrow text-primary"><span className="mr-3 inline-block h-px w-8 bg-primary" />Made for your project</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">A considered fit for your space.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              Available configurations and finishes can be discussed with our team. Product-specific technical values are shared after the final system and opening are confirmed.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-primary transition-colors hover:text-heading">
              Discuss specifications <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
