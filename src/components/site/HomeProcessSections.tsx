import Image from "next/image";
import { ArrowRight, Check, PencilRuler, Ruler, Search, Wrench } from "lucide-react";

import { SERVICE_PROCESS_STEPS } from "@/lib/products";
import { Reveal } from "./Reveal";

const PROCESS_ICONS = [Search, Ruler, PencilRuler, Wrench] as const;

export function HomeProcessSection() {
  return (
    <section id="home-process" className="bg-ink py-16 text-white sm:py-20">
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
  );
}

export function WeFabricateSection() {
  return (
    <section id="we-fabricate" className="bg-[#f5f0e8] py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-16">
        <Reveal from="left" className="max-w-xl">
          <p className="eyebrow text-[#a9472d]">We fabricate</p>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-heading sm:text-5xl">
            Made for the opening. Built to your specifications.
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            Our team plans and manufactures the selected uPVC or aluminium system to your project
            specifications, with the finishes and configuration chosen for your space.
          </p>
          <a
            href="/services/family/upvc"
            className="mt-7 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-heading transition-colors hover:text-primary"
          >
            Explore our systems
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </Reveal>

        <Reveal from="right" delay={100} className="relative min-w-0">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#ddd4c5]">
            <Image
              src="/products/aluminium-sliding-window.jpg"
              alt="Finished aluminium sliding window in a contemporary room"
              fill
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#766b5d]">
            uPVC and System Aluminium · Made to project specification
          </p>
        </Reveal>
      </div>
    </section>
  );
}
