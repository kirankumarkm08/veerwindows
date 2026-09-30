import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  Frame,
  PanelsTopLeft,
  ShieldCheck,
} from "lucide-react";

import type { Product, ProductVariant } from "@/lib/products";
import { Reveal } from "./Reveal";
import { SlidingWindowsDoorsDetail } from "./SlidingWindowsDoorsDetail";

type ProductDetailProps = { product: Product };

const HERO_FEATURES = [
  {
    description: "Planned around the opening and the way the room is used.",
    Icon: Frame,
  },
  {
    description: "A practical configuration for light, airflow, and access.",
    Icon: PanelsTopLeft,
  },
  {
    description: "Specified for dependable performance in everyday use.",
    Icon: ShieldCheck,
  },
] as const;

function VariantCard({
  variant,
  index,
  isAluminium,
}: {
  variant: ProductVariant;
  index: number;
  isAluminium: boolean;
}) {
  const content = (
    <article className="group flex h-full flex-col overflow-hidden border border-[#ddd7ca] bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-36px_rgba(22,43,51,0.55)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#ebe5d9]">
        <Image
          src={variant.image}
          alt={variant.name}
          fill
          unoptimized={isAluminium}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#927239]">
          Configuration {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-heading">
          {variant.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{variant.description}</p>
        {variant.slug ? (
          <span className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-heading transition-colors group-hover:text-[#927239]">
            View configuration
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </span>
        ) : null}
      </div>
    </article>
  );

  return variant.slug ? (
    <Link href={`/services/${variant.slug}`} className="block h-full">
      {content}
    </Link>
  ) : (
    content
  );
}

export function ProductDetail({ product }: ProductDetailProps) {
  if (product.slug === "sliding-windows-doors") {
    return <SlidingWindowsDoorsDetail product={product} />;
  }

  const isAluminium = product.family === "system-aluminium";
  const familyHref = isAluminium ? "/services" : "/services/family/upvc";
  const familyLabel = isAluminium ? "System Aluminium" : "uPVC systems";
  const isUnlistedAluminiumLiftSlide = product.slug === "system-aluminium-lift-slide-door";
  const detailImage =
    product.variants.find((variant) => variant.image !== product.image)?.image ?? product.image;
  const heroBenefits = HERO_FEATURES.map((feature, index) => ({
    ...feature,
    title:
      product.benefits[index] ?? ["Made to measure", "Everyday comfort", "Built to last"][index],
  }));

  return (
    <main className="overflow-hidden bg-[#faf8f2]">
      <section className="relative isolate min-h-[780px] overflow-hidden bg-[#e9e2d4] lg:min-h-[830px]">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          unoptimized={isAluminium}
          priority
          sizes="100vw"
          className="-z-30 object-cover object-[62%_center] lg:object-center"
        />
        <div className="absolute inset-0 -z-20 bg-[#f4efe4]/92 lg:hidden" />
        <div className="absolute inset-0 -z-20 hidden bg-[linear-gradient(90deg,#f4efe4_0%,rgba(244,239,228,0.98)_31%,rgba(244,239,228,0.75)_48%,rgba(244,239,228,0.06)_72%,rgba(244,239,228,0)_100%)] lg:block" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-60 bg-gradient-to-t from-[#f4efe4] via-[#f4efe4]/50 to-transparent lg:hidden" />

        <div className="mx-auto flex min-h-[780px] max-w-[1500px] flex-col px-6 pb-8 pt-28 sm:px-10 sm:pt-32 lg:min-h-[830px] lg:px-16 lg:pb-0 lg:pt-14">
          <Link
            href={familyHref}
            className="eyebrow w-fit text-heading/65 transition-colors hover:text-[#927239]"
          >
            <ChevronLeft aria-hidden="true" className="size-4" /> {familyLabel}
          </Link>

          <Reveal className="my-auto max-w-[650px] py-12 lg:py-10">
            <p className="eyebrow text-[#927239]">
              <span className="mr-3 inline-block h-px w-8 bg-[#a88a4d]" />
              {product.eyebrow}
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] text-heading sm:text-6xl lg:text-[5rem]">
              {product.title}
            </h1>
            <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-foreground sm:text-xl">
              {product.description}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-heading/65 sm:text-base">
              {product.intro}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href={product.variants.length ? "#configurations" : "#advantages"}
                className="inline-flex items-center gap-3 bg-[#9a793d] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#7d602f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a793d]"
              >
                Explore the range <ArrowDown aria-hidden="true" className="size-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-heading transition-colors hover:text-[#927239]"
              >
                Get expert advice <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid border-t border-heading/15 bg-[#f4efe4]/80 backdrop-blur-sm sm:grid-cols-3 lg:max-w-[820px] lg:bg-transparent lg:backdrop-blur-none">
            {heroBenefits.map(({ description, Icon, title }, index) => (
              <div
                key={`${title}-${index}`}
                className="grid grid-cols-[auto_1fr] gap-3 border-b border-heading/15 px-4 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:px-5"
              >
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 size-5 text-[#9a793d]"
                  strokeWidth={1.7}
                />
                <div>
                  <p className="text-sm font-semibold leading-5 text-heading">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-heading/60">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {product.variants.length > 0 ? (
        <section id="configurations" className="bg-[#faf8f2] py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_.75fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#927239]">
                  <span className="mr-3 inline-block h-px w-8 bg-[#a88a4d]" />
                  Our range
                </p>
                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-heading sm:text-5xl lg:text-6xl">
                  Available configurations.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:justify-self-end">
                Compare the available formats, then speak with our team to confirm dimensions,
                operation, glazing, and finish for your project.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {product.variants.map((variant, index) => (
                <Reveal key={variant.name} delay={index * 70} className="h-full">
                  <VariantCard variant={variant} index={index} isAluminium={isAluminium} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section id="advantages" className="bg-white">
        <div className="grid lg:min-h-[690px] lg:grid-cols-[1.12fr_.88fr]">
          <Reveal className="relative min-h-[430px] overflow-hidden bg-[#e7e1d7] sm:min-h-[560px] lg:min-h-full">
            <Image
              src={detailImage}
              alt={`${product.title} in a completed space`}
              fill
              unoptimized={isAluminium}
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </Reveal>

          <div className="flex items-center bg-[#f5f0e6] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
            <Reveal className="max-w-xl">
              <p className="eyebrow text-[#927239]">
                <span className="mr-3 inline-block h-px w-8 bg-[#a88a4d]" />
                {isUnlistedAluminiumLiftSlide ? "Catalogue availability" : "A better way to live"}
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-heading sm:text-5xl lg:text-6xl">
                {isUnlistedAluminiumLiftSlide
                  ? "Confirm this material with our team."
                  : isAluminium
                    ? "Designed for modern architecture."
                    : "Comfort shaped around your space."}
              </h2>
              <p className="mt-6 text-sm leading-7 text-heading/65 sm:text-base">
                {isUnlistedAluminiumLiftSlide
                  ? "The Veer catalogue lists Lift & Slide under uPVC special systems and does not publish a System Aluminium specification. Contact us to confirm current availability before specifying it."
                  : "Every opening is considered as part of the room: how it moves, what it frames, and how it performs throughout the day."}
              </p>

              <ul className="mt-9 space-y-6">
                {product.benefits.map((benefit, index) => {
                  const Icon = HERO_FEATURES[index % HERO_FEATURES.length]!.Icon;
                  return (
                    <li key={benefit} className="grid grid-cols-[auto_1fr] gap-4">
                      <span className="grid size-10 place-items-center rounded-full border border-[#aa8b50]/35 bg-white/60">
                        <Icon
                          aria-hidden="true"
                          className="size-5 text-[#9a793d]"
                          strokeWidth={1.7}
                        />
                      </span>
                      <div>
                        <p className="font-semibold leading-6 text-heading">{benefit}</p>
                        <p className="mt-1 text-sm leading-6 text-heading/55">
                          Planned with your opening, finish, and daily use in mind.
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#f3eee3] text-heading">
        <div className="absolute inset-0 -z-10 opacity-45 [background:radial-gradient(circle_at_85%_15%,#e5d4ad_0,transparent_42%)]" />
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-14 sm:px-10 md:flex-row md:items-end md:justify-between lg:px-16 lg:py-16">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#927239]">
              Let&apos;s build a brighter home
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.045em] text-heading sm:text-5xl">
              Book a consultation
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-heading/70">
              Our team will help you select the right {product.title.toLowerCase()} for your home or
              commercial project.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-4 bg-[#9a793d] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#7d602f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a793d]"
          >
            Get a consultation <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
