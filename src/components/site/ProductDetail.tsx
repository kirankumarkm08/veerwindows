import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  Frame,
  type LucideIcon,
  PanelsTopLeft,
  ShieldCheck,
} from "lucide-react";

import type { Product, ProductVariant } from "@/lib/products";
import { ProductSpecificationSections } from "./ProductSpecificationSections";
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

function EditorialRangeHero({ product, familyHref }: { product: Product; familyHref: string }) {
  return (
    <section className="bg-[#f3eee4] pb-12 pt-24 text-heading sm:pb-16 sm:pt-28">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <Reveal from="left" className="w-fit">
          <Link
            href={familyHref}
            className="eyebrow w-fit text-heading/55 transition-colors hover:text-[#927239]"
          >
            <ChevronLeft aria-hidden="true" className="size-4" /> uPVC systems
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-14">
          <Reveal className="relative z-10 py-4 lg:py-10">
            <span className="pointer-events-none absolute -left-2 -top-10 -z-10 text-[9rem] font-semibold leading-none tracking-[-0.09em] text-[#e6dece] sm:-left-5 sm:-top-16 sm:text-[13rem]">
              01
            </span>
            <p className="eyebrow text-[#927239]">{product.eyebrow}</p>
            <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-heading sm:text-6xl lg:text-[4.8rem]">
              {product.title}
            </h1>
            <p className="mt-6 max-w-lg text-xl font-medium leading-8 text-heading/85">
              {product.description}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
              {product.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#configurations"
                className="inline-flex items-center gap-3 bg-[#9a793d] px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#7d602f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a793d]"
              >
                Explore the range <ArrowDown aria-hidden="true" className="size-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-heading hover:text-[#927239]"
              >
                Get expert advice <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid min-h-[430px] grid-cols-[1.25fr_0.75fr] grid-rows-2 gap-3 sm:min-h-[560px] lg:min-h-[600px]">
            <Reveal
              as="figure"
              from="left"
              className="relative row-span-2 min-h-[430px] overflow-hidden bg-[#dfd6c5] sm:min-h-[560px] lg:min-h-[600px]"
            >
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 65vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-heading/75 to-transparent px-5 pb-5 pt-20 text-white sm:px-7 sm:pb-7">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#e0c27b]">
                  The Veer collection
                </p>
                <p className="mt-2 max-w-sm text-lg font-medium leading-6 sm:text-2xl">
                  {product.variants[0]?.name ?? product.title}
                </p>
              </div>
            </Reveal>
            {product.variants.slice(0, 2).map((variant, index) => (
              <Reveal
                as="figure"
                key={variant.name}
                delay={100 + index * 100}
                className="group relative min-h-[208px] overflow-hidden bg-[#dfd6c5] sm:min-h-0"
              >
                <Image
                  src={variant.image}
                  alt={variant.name}
                  fill
                  sizes="(max-width: 1024px) 35vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-heading/80 to-transparent px-4 pb-4 pt-14 text-white sm:px-5 sm:pb-5">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#e0c27b]">
                    0{index + 1} / Product range
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-5 sm:text-base">
                    {variant.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AluminiumFeatureHero({
  product,
  familyHref,
  heroBenefits,
}: {
  product: Product;
  familyHref: string;
  heroBenefits: Array<{ description: string; Icon: LucideIcon; title: string }>;
}) {
  return (
    <section className="bg-[#f3eee4] pb-12 pt-24 text-heading sm:pb-16 sm:pt-28">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <Reveal from="left" className="w-fit">
          <Link
            href={familyHref}
            className="eyebrow w-fit text-heading/55 transition-colors hover:text-[#927239]"
          >
            <ChevronLeft aria-hidden="true" className="size-4" /> System Aluminium
          </Link>
        </Reveal>

        <div className="mt-8 grid overflow-hidden bg-[#e8e2d7] lg:min-h-[600px] lg:grid-cols-[1.18fr_0.82fr]">
          <Reveal
            as="figure"
            from="left"
            className="relative min-h-[340px] overflow-hidden sm:min-h-[480px] lg:min-h-[600px]"
          >
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              unoptimized
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-heading/65 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white sm:bottom-8 sm:left-8">
              System Aluminium / {product.eyebrow}
            </p>
            {product.variants[0] ? (
              <div className="absolute bottom-5 right-5 hidden size-36 overflow-hidden rounded-full border-4 border-[#f3eee4] shadow-xl sm:block lg:bottom-8 lg:right-8 lg:size-44">
                <Image
                  src={product.variants[0].image}
                  alt={product.variants[0].name}
                  fill
                  unoptimized
                  sizes="176px"
                  className="object-cover"
                />
              </div>
            ) : null}
          </Reveal>

          <Reveal className="flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-14 lg:px-14 lg:py-16">
            <p className="eyebrow text-[#927239]">{product.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-heading sm:text-6xl lg:text-[4rem]">
              {product.title}
            </h1>
            <p className="mt-6 text-lg font-medium leading-7 text-heading/85">
              {product.description}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{product.intro}</p>
            <div className="mt-7 divide-y divide-heading/15 border-y border-heading/15">
              {heroBenefits.slice(0, 3).map(({ Icon, title }, index) => (
                <div key={title} className="flex items-center gap-4 py-3.5">
                  <span className="text-[10px] font-extrabold tracking-[0.16em] text-[#927239]">
                    0{index + 1}
                  </span>
                  <Icon aria-hidden="true" className="size-4 text-[#927239]" strokeWidth={1.6} />
                  <p className="text-sm font-semibold text-heading">{title}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <a
                href={product.variants.length ? "#configurations" : "#finishes"}
                className="inline-flex items-center gap-3 bg-heading px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#927239] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-heading"
              >
                Explore the range <ArrowDown aria-hidden="true" className="size-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-heading hover:text-[#927239]"
              >
                Get expert advice <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ProductDetail({ product }: ProductDetailProps) {
  if (product.slug === "sliding-windows-doors") {
    return <SlidingWindowsDoorsDetail product={product} />;
  }

  const isAluminium = product.family === "system-aluminium";
  const familyHref = isAluminium ? "/services/family/system-aluminium" : "/services/family/upvc";
  const familyLabel = isAluminium ? "System Aluminium" : "uPVC systems";
  const heroBenefits = HERO_FEATURES.map((feature, index) => ({
    ...feature,
    title:
      product.benefits[index] ??
      ["Made to measure", "Everyday comfort", "Built to last"][index] ??
      feature.description,
  }));
  const heroCallouts = heroBenefits.slice(0, 2).map((benefit, index) => ({
    ...benefit,
    image: product.variants[index]?.image ?? product.image,
  }));
  const isEditorialRange = ["casement-windows-doors", "combination-windows"].includes(product.slug);

  return (
    <main className="overflow-hidden bg-[#faf8f2]">
      {isEditorialRange ? (
        <EditorialRangeHero product={product} familyHref={familyHref} />
      ) : isAluminium ? (
        <AluminiumFeatureHero
          product={product}
          familyHref={familyHref}
          heroBenefits={heroBenefits}
        />
      ) : (
        <section className="relative isolate overflow-hidden bg-[#062f42] pb-8 pt-24 text-white sm:pb-10 sm:pt-28 lg:pb-8 lg:pt-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_52%_115%,rgba(98,140,157,0.24),transparent_52%),linear-gradient(110deg,#062f42_0%,#0b3e54_55%,#052a3a_100%)]" />
          <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-14">
            <Reveal from="left" className="w-fit">
              <Link
                href={familyHref}
                className="eyebrow w-fit text-white/55 transition-colors hover:text-[#d5b56e]"
              >
                <ChevronLeft aria-hidden="true" className="size-4" /> {familyLabel}
              </Link>
            </Reveal>

            <div className="mt-6 grid gap-8 lg:mt-5 lg:min-h-[350px] lg:grid-cols-[1.08fr_1.42fr_0.62fr] lg:items-center lg:gap-7">
              <Reveal className="relative z-10 max-w-xl py-4 lg:py-5">
                <p className="eyebrow text-[#d0ad62]">{product.eyebrow}</p>
                <h1 className="mt-4 text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-[#f8f4eb] sm:text-6xl lg:text-[3.65rem] xl:text-[4rem]">
                  {product.title}
                </h1>
                <p className="mt-5 max-w-md text-lg font-medium leading-7 text-white/90 sm:text-xl">
                  {product.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a
                    href={product.variants.length ? "#configurations" : "#finishes"}
                    className="inline-flex items-center gap-3 bg-[#a9823f] px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#bd9a56] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d0ad62]"
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
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  unoptimized={isAluminium}
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#062f42]/45 via-transparent to-[#062f42]/25 lg:from-[#062f42]/20 lg:to-[#062f42]/35" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#062f42]/75 to-transparent" />
                <p className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white/85 sm:bottom-6 sm:left-6">
                  {familyLabel} · Made to measure
                </p>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
                {heroCallouts.map(({ description, image, title }, index) => (
                  <Reveal
                    as="article"
                    key={`${title}-${index}`}
                    delay={index * 100}
                    from="right"
                    className="flex items-center gap-4 lg:gap-3"
                  >
                    <div className="relative size-[76px] shrink-0 overflow-hidden rounded-full border border-[#c6a257] bg-white/10 sm:size-[88px] lg:size-[92px]">
                      <Image
                        src={image}
                        alt=""
                        fill
                        unoptimized={isAluminium}
                        sizes="92px"
                        className={`object-cover ${product.variants[index] ? "" : index === 0 ? "scale-150 object-[28%_center]" : "scale-150 object-[72%_center]"}`}
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="mb-1 block text-[9px] font-extrabold tracking-[0.2em] text-[#d0ad62]">
                        0{index + 1}
                      </span>
                      <h2 className="text-xs font-extrabold uppercase leading-5 tracking-[0.1em] text-white sm:text-sm">
                        {title}
                      </h2>
                      <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-white/60">
                        {description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {product.variants.length > 0 ? (
        <section id="configurations" className="bg-[#faf8f2] py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_.75fr] lg:items-end">
              <Reveal from="left">
                <div>
                  <p className="eyebrow text-[#927239]"> Our range</p>
                  <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-heading sm:text-5xl lg:text-6xl">
                    Available configurations.
                  </h2>
                </div>
              </Reveal>
              <Reveal from="right" delay={120}>
                <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:justify-self-end">
                  Compare the available formats, then speak with our team to confirm dimensions,
                  operation, glazing, and finish for your project.
                </p>
              </Reveal>
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

      <ProductSpecificationSections product={product} />

      <section className="relative isolate overflow-hidden bg-[#f3eee3] text-heading">
        <div className="absolute inset-0 -z-10 opacity-45 [background:radial-gradient(circle_at_85%_15%,#e5d4ad_0,transparent_42%)]" />
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-14 sm:px-10 md:flex-row md:items-end md:justify-between lg:px-16 lg:py-16">
          <Reveal from="left">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#927239]">
                Let&apos;s build a brighter home
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.045em] text-heading sm:text-5xl">
                Book a consultation
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-heading/70">
                Our team will help you select the right {product.title.toLowerCase()} for your home
                or commercial project.
              </p>
            </div>
          </Reveal>
          <Reveal from="right">
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-4 bg-[#9a793d] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#7d602f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a793d]"
            >
              Get a consultation <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
