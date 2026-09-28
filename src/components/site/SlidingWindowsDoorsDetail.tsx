import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, ChevronLeft } from "lucide-react";

import type { Product } from "@/lib/products";
import { Reveal } from "./Reveal";

type SlidingWindowsDoorsDetailProps = { product: Product };

const TRACK_GROUPS = ["2 Track", "2.5 Track", "3 Track"] as const;

export function SlidingWindowsDoorsDetail({ product }: SlidingWindowsDoorsDetailProps) {
  const trackGroups = TRACK_GROUPS.map((track) => ({
    track,
    variants: product.variants.filter((variant) => variant.name.startsWith(track)),
  })).filter((group) => group.variants.length > 0);

  return (
    <main>
      <section className="bg-ink text-white">
        <div className="mx-auto grid min-h-[680px] max-w-[1500px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-between px-6 pb-12 pt-28 sm:px-10 sm:pt-32 lg:px-16 lg:py-16">
            <Link
              href="/services/family/upvc"
              className="eyebrow w-fit text-white/65 transition-colors hover:text-primary-soft"
            >
              <ChevronLeft aria-hidden="true" className="size-4" /> uPVC systems
            </Link>
            <Reveal className="my-14 max-w-2xl">
              <p className="eyebrow text-primary-soft">
                <span className="mr-3 inline-block h-px w-8 bg-primary-soft" />
                {product.eyebrow}
              </p>
              <h1 className="mt-5 text-5xl font-semibold leading-[0.96] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                Sliding Windows <span className="text-primary-soft">&amp;</span> Doors
              </h1>
              <p className="mt-6 max-w-xl text-xl font-medium leading-8 text-white/85">
                {product.description}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                {product.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href="/contact"
                  className="btn-sweep inline-flex items-center gap-3 bg-primary-soft px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-primary-soft-foreground transition-colors hover:text-white focus-visible:text-white"
                >
                  Discuss your project <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <a
                  href="#track-options"
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-white"
                >
                  Explore track options <ArrowDown aria-hidden="true" className="size-4" />
                </a>
              </div>
            </Reveal>
            <p className="border-t border-white/20 pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
              uPVC window and door systems
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-slate-300 sm:min-h-[560px] lg:min-h-[680px]">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/10 lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-ink/15" />
            <p className="absolute bottom-7 left-6 right-6 border-b border-white/60 pb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white sm:left-10 sm:right-10">
              {product.imageAlt}
            </p>
          </div>
        </div>
      </section>

      <section id="track-options" className="scroll-mt-20 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-10 grid gap-6 border-b border-border pb-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-primary">
                <span className="mr-3 inline-block h-px w-8 bg-primary" />
                Choose your track arrangement
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl">
                Window and door options.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:justify-self-end">
              The catalogue presents sliding windows and doors across these track arrangements. Talk
              with our team about the right opening for your project.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {trackGroups.map(({ track, variants }, index) => (
              <Reveal
                key={track}
                delay={index * 80}
                className="group overflow-hidden border border-border bg-secondary"
              >
                <div className="border-b border-border px-6 py-4 sm:px-7">
                  <span className="bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-heading">
                    {track}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <ul>
                    {variants.map((variant) => (
                      <li
                        key={variant.name}
                        className="border-b border-border py-5 last:border-0 last:pb-0"
                      >
                        <h3 className="text-lg font-semibold tracking-tight">
                          {variant.slug ? (
                            <Link
                              href={`/services/${variant.slug}`}
                              className="group/link inline-flex items-center gap-1 rounded-sm underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-primary hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                            >
                              {variant.name}
                              <span
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover/link:translate-x-1"
                              >
                                →
                              </span>
                            </Link>
                          ) : (
                            variant.name
                          )}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {variant.description}
                        </p>
                        <div className="relative mt-4 aspect-[16/7] overflow-hidden bg-white">
                          <Image
                            src={variant.image}
                            alt={variant.name}
                            fill
                            sizes="(max-width: 1024px) 100vw, 30vw"
                            className="object-contain"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow text-primary">
              <span className="mr-3 inline-block h-px w-8 bg-primary" />
              Considered for everyday use
            </p>
            <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl">
              A practical way to open a room.
            </h2>
          </div>
          <ul className="border-t border-border">
            {product.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-3 border-b border-border py-4 text-sm font-medium leading-6 text-foreground/85"
              >
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 px-6">
          <div>
            <p className="eyebrow text-primary-soft">
              <span className="mr-3 inline-block h-px w-8 bg-primary-soft" />
              Plan your project
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let’s find the right opening.
            </h2>
          </div>
          <Link
            href="/contact"
            className="btn-sweep inline-flex items-center gap-3 bg-primary-soft px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-primary-soft-foreground transition-colors hover:text-white focus-visible:text-white"
          >
            Talk to our team <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
