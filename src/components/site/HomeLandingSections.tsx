import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";

import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import { ProductSystemExplorer } from "./ProductSystemExplorer";
import { Reveal } from "./Reveal";

type CustomerReview = {
  name: string;
  location: string;
  text: string;
  avatar: StaticImageData;
};

const PARTNER_LOGOS = [
  { name: "DNV", image: "/companies/Screenshot 2026-08-11 231342.png" },
  { name: "Wallplast by Trends", image: "/companies/Screenshot 2026-08-11 231353.png" },
  { name: "Pego", image: "/companies/Screenshot 2026-08-11 231409.png" },
  { name: "Aluplast", image: "/companies/Screenshot 2026-08-11 231418.png" },
  { name: "Saint-Gobain", image: "/companies/saint-gobain.jpg" },
];

const FEATURED_REVIEW: CustomerReview = {
  name: "Jenson Arisseril",
  location: "Homeowner, Bengaluru",
  text: "From start to finish, the team was professional, knowledgeable and a pleasure to work with. Our home feels brighter, more modern and truly transformed.",
  avatar: avatar1,
};

const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    name: "Mahesh S",
    location: "Homeowner, Karnataka",
    text: "I had a wonderful experience with Veer Windows. The team followed up carefully and delivered the installation on time.",
    avatar: avatar2,
  },
  {
    name: "Shiva Raj",
    location: "Homeowner, Bengaluru",
    text: "The team stayed in touch with regular updates and completed the work within the agreed delivery time.",
    avatar: avatar3,
  },
];

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-heading transition-colors hover:text-primary"
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

function StarRating({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`flex gap-1 ${light ? "text-amber-300" : "text-primary"}`}
      aria-label="Five out of five stars"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-current" aria-hidden="true" />
      ))}
    </div>
  );
}

export function ProductFamiliesSection() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <Reveal from="left">
            <h2 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              Two material systems. One precise fit.
            </h2>
          </Reveal>
          <Reveal from="right" delay={100} className="lg:justify-self-end">
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              Choose uPVC for efficient everyday comfort or System Aluminium for slim profiles and
              expansive architectural openings.
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <ProductSystemExplorer />
        </div>
      </div>
    </section>
  );
}

export function HomeStorySection() {
  return (
    <section className="overflow-hidden bg-primary text-white">
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal
          from="left"
          className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24"
        >
          <h2 className="max-w-xl text-4xl text-white sm:text-5xl lg:text-6xl">
            Crafted for a brighter tomorrow.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/75">
            We believe better spaces create brighter lives. Watch our story to see how thoughtful
            design, careful manufacturing, and precise installation shape every Veer Windows
            project.
          </p>
          <Link
            href="/about#our-story"
            className="group mt-8 inline-flex w-fit items-center gap-4 bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary-soft"
          >
            Watch our story
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal
          from="right"
          delay={100}
          className="relative min-h-[360px] bg-black lg:min-h-[560px]"
        >
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/ewICfNs3cVg?rel=0&playsinline=1"
            title="Veer Windows company story"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}

export function HomePartnersSection() {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <Reveal from="left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              Trusted brands. Proven performance.
            </h2>
          </Reveal>
          <Reveal from="right" delay={100}>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground lg:ml-auto">
              We work with global partners who share our commitment to quality, innovation, and
              dependable performance.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {PARTNER_LOGOS.map((partner, index) => (
            <Reveal
              key={partner.name}
              delay={index * 70}
              className="flex h-28 items-center justify-center border border-border bg-white px-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={220}
                height={84}
                sizes="220px"
                className="max-h-16 w-auto max-w-full object-contain"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeTestimonialsSection() {
  return (
    <section className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal from="left">
          <h2 className="max-w-2xl text-4xl text-white sm:text-5xl lg:text-6xl">
            Trusted by more than 3k clients.
          </h2>
          <figure className="mt-9 max-w-2xl">
            <Quote className="size-11 fill-primary-soft text-primary-soft" aria-hidden="true" />
            <blockquote className="mt-5 text-2xl leading-relaxed text-white sm:text-3xl">
              {FEATURED_REVIEW.text}
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4">
              <Image
                src={FEATURED_REVIEW.avatar}
                alt=""
                width={56}
                height={56}
                className="size-14 rounded-full object-cover"
              />
              <span>
                <span className="block text-sm font-black uppercase tracking-[0.14em] text-white">
                  {FEATURED_REVIEW.name}
                </span>
                <span className="mt-1 block text-xs text-white/60">{FEATURED_REVIEW.location}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-5">
          {CUSTOMER_REVIEWS.map((review, index) => (
            <Reveal
              as="figure"
              key={review.name}
              from="right"
              delay={index * 100}
              className="bg-white p-7 text-heading shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:p-8"
            >
              <StarRating />
              <blockquote className="mt-5 text-base leading-7 text-muted-foreground">
                {review.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                <Image
                  src={review.avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <span>
                  <span className="block text-sm font-black text-heading">{review.name}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {review.location}
                  </span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeConsultationSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">
        <Reveal
          from="left"
          className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24"
        >
          <h2 className="max-w-xl text-4xl sm:text-5xl lg:text-6xl">
            Ready to bring more light into your space?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
            Get in touch with our team for expert advice, detailed product information, and a
            personalised quotation for your project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 bg-primary px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-heading"
            >
              Request a quote
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <ArrowLink href="/contact">Talk to our team</ArrowLink>
          </div>
        </Reveal>

        <Reveal from="right" delay={100} className="relative min-h-[360px] lg:min-h-[520px]">
          <Image
            src="/sliders/5.png"
            alt="Sunlit dining space with expansive sliding windows"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
