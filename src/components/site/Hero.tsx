"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_DURATION_MS = 5500;

const HERO_BACKGROUNDS = [
  {
    src: "/sliders/modern-sliding-door-screen.png",
    width: 1536,
    height: 1024,
    title: "Open your home to more light.",
    accent: "Comfort, with a clearer view.",
    description:
      "Modern sliding doors bring natural light and fresh air into your home, with an insect screen for everyday comfort.",
  },
  {
    src: "/sliders/woodgrain-sliding-window-screen.jpg",
    width: 1448,
    height: 1086,
    title: "A warmer frame for every view.",
    accent: "Designed around your home.",
    description:
      "Explore the rich look of woodgrain finishes with the smooth movement and practical protection of a sliding screen.",
  },
  {
    src: "/sliders/twin-sash-window.jpg",
    width: 1122,
    height: 1402,
    title: "Light, airflow, and added protection.",
    accent: "Thoughtful in every detail.",
    description:
      "Twin sash windows combine glass, mesh, and grille in a practical design for comfortable everyday living.",
  },
  {
    src: "/sliders/1.png",
    width: 1672,
    height: 941,
    title: "Open your home to more light.",
    accent: "Live more beautifully.",
    description:
      "Expansive window and door systems that create brighter rooms and an effortless connection with the outdoors.",
  },
  {
    src: "/sliders/2.png",
    width: 1660,
    height: 948,
    title: "A clearer connection to outdoors.",
    accent: "Beautifully framed.",
    description:
      "Thoughtfully designed openings bring natural light, fresh air, and uninterrupted views into everyday spaces.",
  },
  {
    src: "/sliders/4.png",
    width: 1672,
    height: 941,
    title: "Designed around the way you live.",
    accent: "Made to fit.",
    description:
      "Choose from practical opening styles and tailored configurations for homes, apartments, and commercial projects.",
  },
  {
    src: "/sliders/5.png",
    width: 1672,
    height: 941,
    title: "Frame every view with confidence.",
    accent: "Built to last.",
    description:
      "Precision engineered frames deliver smooth performance, dependable security, and lasting everyday comfort.",
  },
  {
    src: "/sliders/6.png",
    width: 1672,
    height: 941,
    title: "Windows and doors for ambitious spaces.",
    accent: "Made precise.",
    description:
      "Versatile uPVC and aluminium systems give architects and homeowners more freedom to shape distinctive spaces.",
  },
  {
    src: "/sliders/7.png",
    width: 1672,
    height: 941,
    title: "Comfort in every detail.",
    accent: "Beauty in every line.",
    description:
      "Refined profiles, quality hardware, and careful installation come together in a finish made for daily living.",
  },
  {
    src: "/sliders/9.png",
    width: 1536,
    height: 1024,
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
      className="relative isolate flex min-h-[calc(100svh-5.5rem)] w-full min-w-0 flex-col justify-end overflow-hidden bg-[#031e2c]"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden bg-[#031e2c]">
        <div
          className="flex h-full w-full will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeBackground * 100}%)` }}
        >
          {HERO_BACKGROUNDS.map((slide) => (
            <div key={slide.src} className="relative h-full min-w-full">
              <Image
                src={slide.src}
                alt=""
                fill
                priority={slide.src === HERO_BACKGROUNDS[0].src}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[linear-gradient(0deg,rgba(3,30,44,0.98)_0%,rgba(3,30,44,0.76)_42%,rgba(3,30,44,0.28)_76%,rgba(3,30,44,0.18)_100%)] lg:bg-[linear-gradient(90deg,rgba(3,30,44,0.9)_0%,rgba(3,30,44,0.66)_38%,rgba(3,30,44,0.16)_76%,rgba(3,30,44,0.3)_100%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5.5rem)] w-full max-w-[1400px] flex-col justify-end px-6 pb-32 pt-24 sm:px-10 lg:justify-center lg:px-12 lg:pb-28 lg:pt-32 xl:px-16">
        <div key={activeSlide.src} aria-live="polite" className="hero-slide-content w-full min-w-0 max-w-3xl">
          <div>
            <h1 className="max-w-3xl text-[clamp(1.65rem,3.2vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.045em] text-white">
              {activeSlide.title}
              <span className="mt-2 block text-white/80">{activeSlide.accent}</span>
            </h1>
          </div>

          <div>
            <p className="mt-6 max-w-xl border-l border-primary-soft/70 pl-5 text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
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

      <div className="absolute bottom-5 right-5 z-20 flex flex-row gap-2 sm:bottom-8 sm:right-8 lg:bottom-auto lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:flex-col xl:right-12">
        <button
          type="button"
          aria-label="Previous hero image"
          onClick={goToPreviousBackground}
          className="flex size-11 items-center justify-center border border-white/45 bg-ink/30 text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white hover:text-heading sm:size-14"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next hero image"
          onClick={goToNextBackground}
          className="flex size-11 items-center justify-center bg-primary-soft text-primary-soft-foreground shadow-xl transition-colors hover:bg-white sm:size-14"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  );
}
