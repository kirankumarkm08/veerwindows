import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import { Header } from "./Header";
import { Reveal } from "./Reveal";

export function ProjectsHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary text-heading">
      <Header solid />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 hidden size-[520px] rotate-12 border border-primary/10 lg:block"
      >
        <div className="absolute inset-10 border border-primary/10" />
        <div className="absolute inset-20 border border-primary/10" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-primary/10" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-primary/10" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 pb-16 pt-36 sm:pb-20 sm:pt-40 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
        <Reveal>
          <span className="eyebrow text-primary">
            <span className="h-px w-8 bg-primary" />
            Veer Windows / Projects
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Made to fit.
            <br />
            Made for living.
          </h1>
        </Reveal>

        <Reveal
          delay={120}
          className="max-w-xl border-l-2 border-primary/20 pl-6 lg:justify-self-end lg:pb-1"
        >
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Explore window and door projects for homes, apartments, workplaces, and community
            spaces.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="btn-sweep inline-flex items-center gap-3 bg-primary px-5 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary-deep"
            >
              Explore projects <ArrowDown aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-border bg-background px-5 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-heading transition-colors hover:border-primary hover:text-primary"
            >
              Plan a project <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
