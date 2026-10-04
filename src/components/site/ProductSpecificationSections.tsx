"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, PencilRuler, Ruler, Search, Wrench } from "lucide-react";

import {
  FINISH_COLLECTIONS,
  GLASS_OPTIONS,
  SERVICE_PROCESS_STEPS,
  type Product,
} from "@/lib/products";
import { Reveal } from "./Reveal";

const PROCESS_ICONS = [Search, Ruler, PencilRuler, Wrench] as const;

export function ProductSpecificationSections({ product }: { product: Product }) {
  const glassCarouselRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(carousel: HTMLDivElement | null, direction: -1 | 1) {
    carousel?.scrollBy({
      left: direction * Math.min(carousel.clientWidth * 0.82, 760),
      behavior: "smooth",
    });
  }

  return (
    <>
      <section id="finishes" className="bg-[#fbfaf6] py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-10 border-b border-[#d7e0e3] pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <Reveal from="left" className="max-w-xl">
              <p className="eyebrow text-[#927239]">Colour, texture, character</p>
              <h2 className="mt-5 font-serif text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-heading sm:text-6xl">
                Available colours &amp; finishes
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
                A curated range of timeless shades and textures to complement every space.
              </p>
            </Reveal>
            <Reveal
              as="figure"
              from="right"
              className="relative aspect-[16/8] min-h-56 overflow-hidden bg-[#e8e4da]"
            >
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#fbfaf6]/15" />
            </Reveal>
          </div>

          <div className="mt-12 space-y-10 sm:mt-16 sm:space-y-12">
            {FINISH_COLLECTIONS.map((collection, collectionIndex) => (
              <section
                key={collection.name}
                aria-labelledby={`finish-collection-${collectionIndex}`}
              >
                <Reveal from="left" className="mb-5 flex items-center gap-5 sm:mb-7">
                  <h3
                    id={`finish-collection-${collectionIndex}`}
                    className="shrink-0 text-xs font-extrabold uppercase tracking-[0.16em] text-heading sm:text-sm"
                  >
                    {collection.name}
                  </h3>
                  <span aria-hidden="true" className="h-px flex-1 bg-[#9fb4bd]/70" />
                </Reveal>
                <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-7">
                  {collection.options.map((finish, index) => (
                    <Reveal key={finish.name} as="article" delay={index * 45} className="min-w-0">
                      <div className="relative aspect-[4/5] overflow-hidden border border-black/10 bg-[#e8e4da]">
                        <Image
                          src={finish.image}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 14vw"
                          className="object-cover"
                        />
                      </div>
                      <h4 className="mt-3 text-sm font-medium leading-5 text-heading sm:text-base">
                        {finish.name}
                      </h4>
                    </Reveal>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#927239]">Available glass options</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-heading sm:text-5xl lg:text-6xl">
                Balance light, privacy, and performance.
              </h2>
            </div>
            <div className="flex flex-col gap-6 lg:items-end">
              <p className="max-w-xl text-sm leading-7 text-muted-foreground">
                Select the glass for the view, comfort, safety, sound control, and privacy required
                by each room.
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => scrollCarousel(glassCarouselRef.current, -1)}
                  aria-label="Show previous glass options"
                  className="grid size-11 place-items-center border border-heading/20 bg-white text-heading transition-colors hover:border-heading hover:bg-heading hover:text-white"
                >
                  <ArrowLeft aria-hidden="true" className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel(glassCarouselRef.current, 1)}
                  aria-label="Show next glass options"
                  className="grid size-11 place-items-center border border-heading/20 bg-white text-heading transition-colors hover:border-heading hover:bg-heading hover:text-white"
                >
                  <ArrowRight aria-hidden="true" className="size-4" />
                </button>
              </div>
            </div>
          </Reveal>

          <div
            ref={glassCarouselRef}
            role="region"
            aria-label="Available glass options"
            className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-4 [scrollbar-color:#9a793d_transparent] [scrollbar-width:thin]"
          >
            {GLASS_OPTIONS.map((option, index) => (
              <Reveal
                key={option.name}
                delay={index * 45}
                as="article"
                className="group w-[78vw] max-w-[340px] shrink-0 snap-start overflow-hidden border border-[#dce2e3] bg-[#f8faf9] sm:w-[300px]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e6ecec]">
                  <Image
                    src={option.image}
                    alt={option.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#927239]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-heading">
                    {option.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {option.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-[#d4b16c]">How we work</p>
            <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.045em] text-white sm:text-5xl">
              One team, from first visit to final fit.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PROCESS_STEPS.map((step, index) => {
              const Icon = PROCESS_ICONS[index]!;

              return (
                <Reveal
                  key={step.number}
                  as="article"
                  delay={index * 80}
                  className="bg-ink p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <Icon aria-hidden="true" className="size-7 text-[#d4b16c]" strokeWidth={1.6} />
                    <span className="text-sm font-bold tracking-[0.16em] text-white/35">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{step.description}</p>
                  <p className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#d4b16c]">
                    <Check aria-hidden="true" className="size-4" /> Planned with care
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
