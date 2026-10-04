"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_DURATION_MS = 5500;

const HERO_BACKGROUNDS = [
  {
    src: "/sliders/1.png",
    title: "Open your home to more light.",
    accent: "Live more beautifully.",
    description:
      "Expansive window and door systems that create brighter rooms and an effortless connection with the outdoors.",
  },
  {
    src: "/sliders/2.png",
    title: "A clearer connection to outdoors.",
    accent: "Beautifully framed.",
    description:
      "Thoughtfully designed openings bring natural light, fresh air, and uninterrupted views into everyday spaces.",
  },
  {
    src: "/sliders/4.png",
    title: "Designed around the way you live.",
    accent: "Made to fit.",
    description:
      "Choose from practical opening styles and tailored configurations for homes, apartments, and commercial projects.",
  },
  {
    src: "/sliders/5.png",
    title: "Frame every view with confidence.",
    accent: "Built to last.",
    description:
      "Precision engineered frames deliver smooth performance, dependable security, and lasting everyday comfort.",
  },
  {
    src: "/sliders/6.png",
    title: "Windows and doors for ambitious spaces.",
    accent: "Made precise.",
    description:
      "Versatile uPVC and aluminium systems give architects and homeowners more freedom to shape distinctive spaces.",
  },
  {
    src: "/sliders/7.png",
    title: "Comfort in every detail.",
    accent: "Beauty in every line.",
    description:
      "Refined profiles, quality hardware, and careful installation come together in a finish made for daily living.",
  },
  {
    src: "/sliders/9.png",
    title: "Balance light, privacy, and openness.",
    accent: "Your space, your way.",
    description:
      "Our team helps you select the right glass, frame, and opening system for comfort throughout the day.",
  },
] as const;

export function Hero() {
  const [activeBackground, setActiveBackground] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveBackground((previous) => (previous + 1) % HERO_BACKGROUNDS.length);
    }, SLIDE_DURATION_MS);

    return () => window.clearInterval(interval);
  }, []);

  const goToPreviousBackground = () => {
    setActiveBackground(
      (previous) => (previous - 1 + HERO_BACKGROUNDS.length) % HERO_BACKGROUNDS.length,
    );
  };

  const goToNextBackground = () => {
    setActiveBackground((previous) => (previous + 1) % HERO_BACKGROUNDS.length);
  };

  const activeSlide = HERO_BACKGROUNDS[activeBackground] ?? HERO_BACKGROUNDS[0];

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Veer Windows product highlights"
      className="relative min-h-[780px] overflow-hidden bg-ink sm:min-h-[820px] lg:min-h-screen"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ transform: `translateX(-${activeBackground * 100}%)` }}
        >
          {HERO_BACKGROUNDS.map((image, index) => (
            <div key={image.src} aria-hidden="true" className="h-full min-w-full overflow-hidden">
              <div
                className={`h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-out motion-reduce:transform-none ${
                  index === activeBackground ? "scale-[1.055]" : "scale-100"
                }`}
                style={{ backgroundImage: `url("${image.src}")` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(3,30,44,0.88)_0%,rgba(3,30,44,0.64)_38%,rgba(3,30,44,0.2)_72%,rgba(3,30,44,0.34)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/20 via-transparent to-ink/85"
      />

      <div className="relative z-10 mx-auto flex min-h-[780px] max-w-[1400px] flex-col justify-center px-6 pb-24 pt-36 sm:min-h-[820px] sm:pt-40 lg:min-h-screen">
        <div
          key={activeSlide.src}
          aria-live="polite"
          className="animate-rise max-w-5xl pr-0 sm:pr-24"
        >
          <div>
            <h1 className="max-w-5xl text-[clamp(3.4rem,7vw,7.25rem)] font-bold leading-[0.93] tracking-[-0.055em] text-white">
              {activeSlide.title}
              <span className="mt-2 block text-white/82">{activeSlide.accent}</span>
            </h1>
          </div>

          <div>
            <p className="mt-8 max-w-xl border-l border-primary-soft pl-5 text-base leading-7 text-white/78 sm:text-lg">
              {activeSlide.description}
            </p>
          </div>

          <div className="mt-9">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-5 bg-primary-soft px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-primary-soft-foreground transition-colors hover:bg-white"
            >
              Book a free consultation
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute right-5 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 sm:right-8 lg:right-12">
        <button
          type="button"
          aria-label="Previous hero image"
          onClick={goToPreviousBackground}
          className="flex size-12 items-center justify-center border border-white/45 bg-ink/30 text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white hover:text-heading sm:size-14"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next hero image"
          onClick={goToNextBackground}
          className="flex size-12 items-center justify-center bg-primary-soft text-primary-soft-foreground shadow-xl transition-colors hover:bg-white sm:size-14"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  );
}
