import { Check, Factory, PencilRuler, Ruler, Search, Wrench } from "lucide-react";

import { SERVICE_PROCESS_STEPS } from "@/lib/products";
import { Reveal } from "./Reveal";

const PROCESS_ICONS = [Search, Ruler, PencilRuler, Factory, Wrench] as const;

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

        <div className="mt-12 grid gap-px overflow-hidden bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICE_PROCESS_STEPS.map((step, index) => {
            const Icon = PROCESS_ICONS[index]!;

            return (
              <Reveal
                key={step.number}
                as="article"
                delay={index * 80}
                className="flex h-full flex-col bg-ink p-6 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <Icon aria-hidden="true" className="size-7 text-[#d4b16c]" strokeWidth={1.6} />
                  <span className="text-sm font-bold tracking-[0.16em] text-white/35">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{step.description}</p>
                <p className="mt-auto flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-[0.12em] text-[#d4b16c]">
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
