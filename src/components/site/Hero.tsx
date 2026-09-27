"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import { Reveal } from "./Reveal";

const HERO_BACKGROUNDS = [
  {
    src: "/sliders/1.png",
  },
  {
    src: "/sliders/2.png",
  },
  {
    src: "/sliders/4.png",
  },
  {
    src: "/sliders/5.png",
  },
  {
    src: "/sliders/6.png",
  },
  {
    src: "/sliders/7.png",
  },
  {
    src: "/sliders/9.png",
  },
];

const trustedPeople = [
  { src: avatar1.src, name: "Sarah Whitfield" },
  { src: avatar2.src, name: "Daniel Ross" },
  { src: avatar3.src, name: "Aisha Verma" },
  { src: avatar4.src, name: "Marco Silva" },
];

const HERO_REVIEWS = [
  {
    text: "Quality windows exceeded expectations. Installation and outstanding service.",
    name: "Michael Anderson",
    role: "Homeowner",
    avatar: avatar2.src,
  },
  {
    text: "The team was professional from start to finish. Our home looks stunning.",
    name: "Sarah Whitfield",
    role: "Interior Designer",
    avatar: avatar1.src,
  },
  {
    text: "Energy efficiency improved noticeably. Highly recommend their premium range.",
    name: "Daniel Ross",
    role: "Architect",
    avatar: avatar3.src,
  },
  {
    text: "Reliable, punctual, and the craftsmanship is second to none.",
    name: "Aisha Verma",
    role: "Builder",
    avatar: avatar4.src,
  },
];

export function Hero() {
  const [offset, setOffset] = useState(0);
  const [activeReview, setActiveReview] = useState(0);
  const [activeBackground, setActiveBackground] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveReview((prev) => (prev + 1) % HERO_REVIEWS.length);
        setIsAnimating(false);
      }, 400);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

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

  const review = HERO_REVIEWS[activeReview] ?? HERO_REVIEWS[0]!;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ink">
      <div
        className="absolute inset-0 overflow-hidden will-change-transform"
        style={{ transform: `translate3d(0, ${offset * 0.25}px, 0)` }}
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
              href="#portfolio"
              className="btn-sweep-light mt-9 inline-block bg-primary-soft px-9 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-soft-foreground"
            >
              Explore Products
            </a>
          </Reveal>
        </div>

        <div className="mt-auto grid gap-10 pt-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal delay={120} className="max-w-md">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {trustedPeople.map((person) => (
                  <img
                    key={person.name}
                    src={person.src}
                    alt={person.name}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="size-12 rounded-full border-2 border-ink-foreground/80 object-cover shadow-lg transition-transform duration-300 hover:z-10 hover:scale-110"
                  />
                ))}
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-ink-foreground/80">
                2,400+ happy clients
              </span>
            </div>
            <p className="mt-5 text-xl font-bold leading-tight text-ink-foreground">
              Trusted by homeowners, builders, and architects for exceptional window and door
              solutions
            </p>
          </Reveal>

          <Reveal delay={260}>
            <figure className="w-full max-w-sm overflow-hidden bg-card p-8">
              <div className="flex gap-1 text-primary-soft">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote
                className="mt-5 min-h-[3.5rem] text-xl font-bold leading-snug text-card-foreground transition-all duration-400 ease-out"
                style={{
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ? "translateY(12px)" : "translateY(0)",
                }}
              >
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption
                className="mt-6 flex items-center gap-3 transition-all duration-400 ease-out"
                style={{
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ? "translateY(10px)" : "translateY(0)",
                }}
              >
                <img
                  src={review.avatar}
                  alt={review.name}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="size-11 rounded-full object-cover"
                />
                <span>
                  <span className="block font-bold">{review.name}</span>
                  <span className="block text-sm text-muted-foreground">{review.role}</span>
                </span>
              </figcaption>
              <div className="mt-6 flex items-center gap-2">
                {HERO_REVIEWS.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show review ${index + 1}`}
                    onClick={() => {
                      if (index === activeReview) return;
                      setIsAnimating(true);
                      setTimeout(() => {
                        setActiveReview(index);
                        setIsAnimating(false);
                      }, 400);
                    }}
                    className="group relative h-1.5 flex-1 rounded-full bg-border/60 transition-colors hover:bg-border"
                  >
                    <span
                      className="absolute inset-y-0 left-0 rounded-full bg-primary-soft transition-all duration-300"
                      style={{
                        width: index === activeReview ? "100%" : "0%",
                        opacity: index <= activeReview ? 1 : 0.5,
                      }}
                    />
                  </button>
                ))}
              </div>
            </figure>
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
