"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const HERO_BACKGROUNDS = [
  {
    src: "/sliders/1.png",
    caption: "Bring more daylight into the spaces you live in.",
  },
  {
    src: "/sliders/2.png",
    caption: "Create a considered connection between indoors and out.",
  },
  {
    src: "/sliders/4.png",
    caption: "Choose an opening style that works for your home.",
  },
  {
    src: "/sliders/5.png",
    caption: "Frame your view with windows made for everyday living.",
  },
  {
    src: "/sliders/6.png",
    caption: "Explore window and door systems for your next project.",
  },
  {
    src: "/sliders/7.png",
    caption: "Thoughtful details for a more comfortable space.",
  },
  {
    src: "/sliders/9.png",
    caption: "Find the right balance of light, privacy, and openness.",
  },
];

export function Hero() {
  const [activeBackground, setActiveBackground] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  useEffect(() => {
    if (isCarouselPaused) return;

    const interval = setInterval(() => {
      setActiveBackground((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isCarouselPaused]);

  const goToPreviousBackground = () => {
    setActiveBackground((prev) => (prev - 1 + HERO_BACKGROUNDS.length) % HERO_BACKGROUNDS.length);
  };

  const goToNextBackground = () => {
    setActiveBackground((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
  };

  const activeSlide = HERO_BACKGROUNDS[activeBackground] ?? HERO_BACKGROUNDS[0]!;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ink">
      <div
        className="absolute inset-0 overflow-hidden"
      >
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeBackground * 100}%)` }}
        >
          {HERO_BACKGROUNDS.map((image) => (
            <div
              key={image.src}
              aria-hidden="true"
              className="h-full min-w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url("${image.src}")` }}
            />
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/40 via-ink/45 to-ink/70"
      />
      <div
        className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 sm:right-10"
        onMouseEnter={() => setIsCarouselPaused(true)}
        onMouseLeave={() => setIsCarouselPaused(false)}
      >
        <button
          type="button"
          aria-label="Previous hero image"
          onClick={goToPreviousBackground}
          className="flex size-11 items-center justify-center border border-ink-foreground/45 bg-ink/30 text-ink-foreground backdrop-blur-sm transition-colors hover:border-primary-soft hover:bg-primary-soft hover:text-primary-soft-foreground"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next hero image"
          onClick={goToNextBackground}
          className="flex size-11 items-center justify-center border border-ink-foreground/45 bg-ink/30 text-ink-foreground backdrop-blur-sm transition-colors hover:border-primary-soft hover:bg-primary-soft hover:text-primary-soft-foreground"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div
        className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 pt-32 pb-16"
        onMouseEnter={() => setIsCarouselPaused(true)}
        onMouseLeave={() => setIsCarouselPaused(false)}
      >
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <img
              src="/veer-logo-white.png"
              alt="Veer Windows"
              width={400}
              height={120}
              className="mx-auto mb-8 h-20 w-auto sm:h-24 lg:h-28"
            />
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-5xl text-ink-foreground sm:text-6xl lg:text-7xl">
              Premium windows &amp; doors for modern living
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-ink-foreground/75">
              Delivering quality craftsmanship, security, and style for homes and businesses.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a
              href="/services/family/upvc"
              className="btn-sweep-light mt-9 inline-block bg-primary-soft px-9 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-soft-foreground"
            >
              Explore Products
            </a>
          </Reveal>
        </div>

        <div className="mt-auto grid gap-10 pt-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal key={activeSlide.src} delay={120} className="max-w-md">
            <p className="border-l-2 border-primary-soft pl-4 text-xl font-semibold leading-tight text-ink-foreground sm:text-2xl">
              {activeSlide.caption}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {HERO_BACKGROUNDS.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Show hero image ${index + 1}`}
            aria-current={index === activeBackground ? "true" : undefined}
            onClick={() => setActiveBackground(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeBackground
                ? "w-10 bg-primary-soft"
                : "w-5 bg-ink-foreground/45 hover:bg-ink-foreground/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
