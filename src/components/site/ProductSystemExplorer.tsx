"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const SYSTEMS = [
  {
    id: "upvc-systems",
    tab: "uPVC Systems",
    title: "uPVC windows and doors for everyday comfort.",
    description:
      "Low-maintenance uPVC systems configured for insulation, controlled ventilation, secure access, and smooth everyday operation.",
    image: "/products/2-track-door.jpg",
    href: "/services/family/upvc",
    cta: "Explore uPVC systems",
    options: ["Casement windows", "Sliding windows", "Sliding doors", "Lift and slide"],
  },
  {
    id: "system-aluminium",
    tab: "System Aluminium",
    title: "Slim profiles for ambitious architectural spaces.",
    description:
      "High-performance aluminium systems bring refined sightlines, strength, and flexibility to larger residential and commercial projects.",
    image: "/products/aluminium-sliding-door.jpg",
    href: "/services/family/system-aluminium",
    cta: "Explore aluminium systems",
    options: ["Sliding systems", "Casement systems", "Lift and slide", "Facade systems"],
  },
] as const;

export function ProductSystemExplorer() {
  const [activeSystemId, setActiveSystemId] = useState<(typeof SYSTEMS)[number]["id"]>(
    SYSTEMS[0].id,
  );
  const activeSystem = SYSTEMS.find((system) => system.id === activeSystemId) ?? SYSTEMS[0];

  return (
    <div className="overflow-hidden border border-primary/20 bg-primary text-white shadow-[0_28px_80px_rgba(4,61,84,0.14)]">
      <div
        role="tablist"
        aria-label="Product system ranges"
        className="grid border-b border-white/15 sm:grid-cols-2"
      >
        {SYSTEMS.map((system) => {
          const isActive = system.id === activeSystem.id;

          return (
            <button
              key={system.id}
              id={`${system.id}-tab`}
              type="button"
              role="tab"
              aria-controls={`${system.id}-panel`}
              aria-selected={isActive}
              onClick={() => setActiveSystemId(system.id)}
              className={`relative min-h-16 px-6 py-4 text-left text-sm font-black uppercase tracking-[0.12em] transition-colors sm:text-center ${
                isActive
                  ? "bg-white text-heading"
                  : "border-white/15 text-white/65 hover:bg-white/10 hover:text-white sm:border-l first:sm:border-l-0"
              }`}
            >
              {system.tab}
              <span
                className={`absolute inset-x-0 bottom-0 h-1 bg-primary-soft transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div
        key={activeSystem.id}
        id={`${activeSystem.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${activeSystem.id}-tab`}
        className="animate-rise grid lg:grid-cols-[0.82fr_1.18fr]"
      >
        <div className="flex flex-col justify-center px-7 py-12 sm:px-10 lg:px-14 lg:py-16">
          <h3 className="max-w-xl text-3xl text-white sm:text-4xl lg:text-5xl">
            {activeSystem.title}
          </h3>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/72">
            {activeSystem.description}
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {activeSystem.options.map((option) => (
              <li key={option} className="flex items-center gap-3 text-sm font-bold text-white/90">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-primary-soft/50 text-primary-soft">
                  <Check className="size-4" />
                </span>
                {option}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href={activeSystem.href}
              className="group inline-flex items-center gap-4 bg-primary-soft px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-primary-soft-foreground transition-colors hover:bg-white"
            >
              {activeSystem.cta}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-white transition-colors hover:text-primary-soft"
            >
              Get expert advice
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden lg:min-h-[610px]">
          <Image
            src={activeSystem.image}
            alt={activeSystem.tab}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/25 via-transparent to-transparent lg:block" />
          <div className="absolute bottom-0 left-0 bg-white px-6 py-4 text-heading shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.16em]">{activeSystem.tab}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
