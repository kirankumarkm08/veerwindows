"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, PencilRuler, Ruler, Search, Wrench } from "lucide-react";

import { FINISH_OPTIONS, GLASS_OPTIONS, SERVICE_PROCESS_STEPS } from "@/lib/products";
import { Reveal } from "./Reveal";

const PROCESS_ICONS = [Search, Ruler, PencilRuler, Wrench] as const;

export function ProductSpecificationSections() {
  const finishCarouselRef = useRef<HTMLDivElement>(null);
  const glassCarouselRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(carousel: HTMLDivElement | null, direction: -1 | 1) {
    carousel?.scrollBy({
      left: direction * Math.min(carousel.clientWidth * 0.82, 760),
      behavior: "smooth",
    });
  }

  return (
    <>
      <section id="finishes" className="bg-[#f5f1e8] py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#927239]">Choose a finish</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-heading sm:text-5xl lg:text-6xl">
                Finishes that complement your space.
              </h2>
            </div>
            <div className="flex flex-col gap-6 lg:items-end">
              <p className="max-w-xl text-sm leading-7 text-muted-foreground">
                The Veer catalogue offers three coordinated finish collections, from natural wood
                tones to contemporary aluminium shades.
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => scrollCarousel(finishCarouselRef.current, -1)}
                  aria-label="Show previous finishes"
                  className="grid size-11 place-items-center border border-heading/20 bg-white text-heading transition-colors hover:border-heading hover:bg-heading hover:text-white"
                >
                  <ArrowLeft aria-hidden="true" className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel(finishCarouselRef.current, 1)}
                  aria-label="Show next finishes"
                  className="grid size-11 place-items-center border border-heading/20 bg-white text-heading transition-colors hover:border-heading hover:bg-heading hover:text-white"
                >
                  <ArrowRight aria-hidden="true" className="size-4" />
                </button>
              </div>
            </div>
          </Reveal>

          <div
            ref={finishCarouselRef}
            role="region"
            aria-label="Available frame finishes"
            className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pb-4 [scrollbar-color:#9a793d_transparent] [scrollbar-width:thin]"
          >
            {FINISH_OPTIONS.map((finish, index) => (
              <Reveal
                key={finish.name}
                as="article"
                delay={index * 45}
                className="w-[72vw] max-w-[260px] shrink-0 snap-start border border-[#ddd6c8] bg-white p-3 sm:w-[230px]"
              >
                <div
                  aria-hidden="true"
                  className="aspect-[4/3] border border-black/5"
                  style={{ background: finish.swatch }}
                />
                <p className="mt-4 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#927239]">
                  {String(index + 1).padStart(2, "0")} / {finish.group}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-6 text-heading">{finish.name}</h3>
              </Reveal>
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
