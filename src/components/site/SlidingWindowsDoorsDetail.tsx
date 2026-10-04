import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, Frame, House, Wind } from "lucide-react";

import type { Product } from "@/lib/products";
import { ProductSpecificationSections } from "./ProductSpecificationSections";
import { Reveal } from "./Reveal";

type SlidingWindowsDoorsDetailProps = { product: Product };

export function SlidingWindowsDoorsDetail({ product }: SlidingWindowsDoorsDetailProps) {
  const doorVariants = product.variants.filter((variant) => variant.name.endsWith("Door"));
  const heroImage = doorVariants[0]?.image ?? product.image;
  const lifestyleImage = doorVariants.at(-1)?.image ?? heroImage;
  const heroCallouts = product.benefits.slice(0, 2).map((title, index) => ({
    title,
    image: product.variants[index]?.image ?? heroImage,
  }));

  return (
    <main className="bg-[#f7f4ed]">
      <section className="relative isolate overflow-hidden bg-[#062f42] pb-8 pt-24 text-white sm:pb-10 sm:pt-28 lg:pb-8 lg:pt-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_52%_115%,rgba(98,140,157,0.24),transparent_52%),linear-gradient(110deg,#062f42_0%,#0b3e54_55%,#052a3a_100%)]" />
        <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-14">
          <Reveal from="left" className="w-fit">
            <Link
              href="/services/family/upvc"
              className="eyebrow w-fit text-white/55 transition-colors hover:text-[#d0ad62]"
            >
              <ChevronLeft aria-hidden="true" className="size-4" /> uPVC systems
            </Link>
          </Reveal>

          <div className="mt-6 grid gap-8 lg:mt-5 lg:min-h-[350px] lg:grid-cols-[1.08fr_1.42fr_0.62fr] lg:items-center lg:gap-7">
            <Reveal className="relative z-10 max-w-xl py-4 lg:py-5">
              <p className="eyebrow text-[#d0ad62]">{product.eyebrow}</p>
              <h1 className="mt-4 text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-[#f8f4eb] sm:text-6xl lg:text-[3.65rem] xl:text-[4rem]">
                {product.title}
              </h1>
              <p className="mt-5 max-w-md text-lg font-medium leading-7 text-white/90 sm:text-xl">
                More light. More space. A more connected home.
              </p>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                Veer sliding windows and doors bring together elegant design, smooth performance,
                and lasting everyday comfort.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href="#finishes"
                  className="inline-flex items-center gap-3 bg-[#a27e3d] px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#bd9a56] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d0ad62]"
                >
                  Explore the range <ArrowRight aria-hidden="true" className="size-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-white/90 transition-colors hover:text-[#d0ad62]"
                >
                  Get expert advice <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal
              as="figure"
              from="zoom"
              className="relative min-h-[250px] overflow-hidden sm:min-h-[360px] lg:h-[350px] lg:min-h-0"
            >
              <Image
                src={heroImage}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#062f42]/45 via-transparent to-[#062f42]/25 lg:from-[#062f42]/20 lg:to-[#062f42]/35" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#062f42]/75 to-transparent" />
              <p className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white/85 sm:bottom-6 sm:left-6">
                uPVC windows &amp; doors · Made to measure
              </p>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
              {heroCallouts.map(({ image, title }, index) => (
                <Reveal
                  as="article"
                  key={`${title}-${index}`}
                  delay={index * 100}
                  className="flex items-center gap-4 lg:gap-3"
                >
                  <div className="relative size-[76px] shrink-0 overflow-hidden rounded-full border border-[#c6a257] bg-white/10 sm:size-[88px] lg:size-[92px]">
                    <Image src={image} alt="" fill sizes="92px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <span className="mb-1 block text-[9px] font-extrabold tracking-[0.2em] text-[#d0ad62]">
                      0{index + 1}
                    </span>
                    <h2 className="text-xs font-extrabold uppercase leading-5 tracking-[0.1em] text-white sm:text-sm">
                      {title}
                    </h2>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-[#f1ece2] lg:grid-cols-[1.18fr_0.82fr]">
        <Reveal
          as="figure"
          from="left"
          className="relative min-h-[430px] overflow-hidden bg-[#ddd6c9] sm:min-h-[600px] lg:min-h-[720px]"
        >
          <Image
            src={lifestyleImage}
            alt="Sliding doors creating a seamless connection between indoor and outdoor spaces"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </Reveal>

        <div className="flex items-center px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-[#8a6a31]"> A more open way to live</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.045em] text-heading sm:text-5xl lg:text-6xl">
              Spaces that flow with life
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
              Veer sliding windows and doors create a seamless connection between indoor and outdoor
              spaces, bringing in natural light, fresh air, and a sense of freedom.
            </p>

            <ul className="mt-8 space-y-5">
              {[
                {
                  title: "Seamless indoor-outdoor living",
                  description: "Expand your space and enjoy the view.",
                  icon: House,
                },
                {
                  title: "Stylish, contemporary design",
                  description: "Slim uPVC frames for a clean, modern look.",
                  icon: Frame,
                },
                {
                  title: "Comfort all year round",
                  description: "Better light, ventilation, and insulation.",
                  icon: Wind,
                },
              ].map(({ title, description, icon: Icon }) => (
                <li key={title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#a27e3d]/35 text-[#a27e3d]">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-heading">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ProductSpecificationSections />

      <section className="relative isolate overflow-hidden bg-ink py-12 text-white sm:py-16">
        <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-8 px-6">
          <Reveal from="left">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                Let&apos;s build a brighter home
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Book a consultation
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                Our team can help you find the right sliding windows and doors for your space.
              </p>
            </div>
          </Reveal>
          <Reveal from="right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 bg-[#a27e3d] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Get a consultation <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
