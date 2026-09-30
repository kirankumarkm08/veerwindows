import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  Frame,
  House,
  PanelsTopLeft,
  ShieldCheck,
  Sun,
  Wind,
} from "lucide-react";

import type { Product, ProductVariant } from "@/lib/products";
import { Reveal } from "./Reveal";

type SlidingWindowsDoorsDetailProps = { product: Product };

const PRODUCT_SUMMARIES: Record<string, string> = {
  "2-track-sliding-windows": "A clean, practical option for compact openings.",
  "2-5-track-sliding-windows": "Greater flexibility with an extra panel option.",
  "3-track-sliding-windows": "Maximum ventilation and wider outside views.",
  "2-track-sliding-doors": "Elegant, space-efficient access for everyday living.",
  "2-5-track-sliding-doors": "Wider openings with more layout flexibility.",
  "3-track-sliding-doors": "An expansive option for connected indoor-outdoor spaces.",
};

function ProductCard({ variant, index }: { variant: ProductVariant; index: number }) {
  const isDoor = variant.name.endsWith("Door");
  const track = variant.name.replace(/ Track Sliding (Window|Door)$/, " Track");
  const description = variant.slug ? PRODUCT_SUMMARIES[variant.slug] : variant.description;

  return (
    <Reveal delay={index * 55} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden border border-border bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-36px_rgba(23,42,50,0.45)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe7df]">
          <Image
            src={variant.image}
            alt={variant.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
            Sliding {isDoor ? "doors" : "windows"}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-heading">{track}</h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{description}</p>
          {variant.slug ? (
            <Link
              href={`/services/${variant.slug}`}
              aria-label={`View ${variant.name}`}
              className="mt-6 inline-flex size-9 items-center justify-center rounded-full border border-border text-heading transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

export function SlidingWindowsDoorsDetail({ product }: SlidingWindowsDoorsDetailProps) {
  const windowVariants = product.variants.filter((variant) => variant.name.endsWith("Window"));
  const doorVariants = product.variants.filter((variant) => variant.name.endsWith("Door"));
  const orderedVariants = [...windowVariants, ...doorVariants];
  const heroImage = doorVariants[0]?.image ?? product.image;
  const lifestyleImage = doorVariants.at(-1)?.image ?? heroImage;

  return (
    <main className="bg-[#f7f4ed]">
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#eee8dc] pt-24 sm:pt-28 lg:min-h-[820px]">
        <Image
          src={heroImage}
          alt="Bright living room opening to a garden through sliding glass doors"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-center lg:object-[62%_center]"
        />
        <div className="absolute inset-0 -z-20 bg-[#f4efe4]/88 lg:hidden" />
        <div className="absolute inset-0 -z-20 hidden bg-[linear-gradient(90deg,rgba(244,239,228,0.99)_0%,rgba(244,239,228,0.96)_30%,rgba(244,239,228,0.62)_46%,rgba(244,239,228,0.03)_68%)] lg:block" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#f4efe4]/75 to-transparent lg:hidden" />

        <div className="mx-auto flex min-h-[660px] max-w-[1500px] flex-col px-6 pb-12 pt-8 sm:px-10 lg:min-h-[712px] lg:px-16">
          <Link
            href="/services/family/upvc"
            className="eyebrow w-fit text-foreground/65 transition-colors hover:text-primary"
          >
            <ChevronLeft aria-hidden="true" className="size-4" /> uPVC systems
          </Link>

          <Reveal className="my-auto max-w-[610px] py-10">
            <p className="eyebrow text-[#8a6a31]">
              <span className="mr-3 inline-block h-px w-8 bg-[#a27e3d]" />
              Modern living spaces
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-heading sm:text-6xl lg:text-[5.3rem]">
              Sliding Windows <span className="font-normal">&amp;</span> Doors
            </h1>
            <p className="mt-6 max-w-lg text-lg font-medium leading-7 text-foreground/85">
              More light. More space. A more connected home.
            </p>
            <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              Veer sliding windows and doors bring together elegant design, smooth performance, and
              lasting everyday comfort.
            </p>
            <a
              href="#track-options"
              className="mt-8 inline-flex items-center gap-4 bg-[#a27e3d] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:bg-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a27e3d]"
            >
              Explore the range <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>

          <div className="grid max-w-[720px] gap-5 sm:grid-cols-3 sm:gap-7">
            {[
              {
                title: "Brighter living spaces",
                description: "Expansive glass for natural light",
                icon: Sun,
              },
              {
                title: "Flexible configurations",
                description: "2, 2.5, and 3 track options",
                icon: PanelsTopLeft,
              },
              {
                title: "Built for everyday living",
                description: "Durable, low-maintenance uPVC frames",
                icon: ShieldCheck,
              },
            ].map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex gap-3 border-t border-heading/15 pt-4 sm:border-0 sm:pt-0"
              >
                <Icon aria-hidden="true" className="mt-0.5 size-7 shrink-0 text-[#a27e3d]" />
                <div>
                  <h2 className="text-sm font-semibold leading-5 text-heading">{title}</h2>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="track-options" className="bg-[#faf8f2] py-16 sm:py-24">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#8a6a31]">
                <span className="mr-3 inline-block h-px w-8 bg-[#a27e3d]" />
                Our range
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.045em] text-heading sm:text-5xl">
                Sliding Windows &amp; Doors
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground lg:justify-self-end">
              Choose from our 2 track, 2.5 track, and 3 track options in both sliding windows and
              sliding doors, designed for modern homes and larger openings.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {orderedVariants.map((variant, index) => (
              <ProductCard key={variant.name} variant={variant} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-[#f1ece2] lg:grid-cols-[1.18fr_0.82fr]">
        <div className="relative min-h-[430px] overflow-hidden bg-[#ddd6c9] sm:min-h-[600px] lg:min-h-[720px]">
          <Image
            src={lifestyleImage}
            alt="Sliding doors creating a seamless connection between indoor and outdoor spaces"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-[#8a6a31]">
              <span className="mr-3 inline-block h-px w-8 bg-[#a27e3d]" />A more open way to live
            </p>
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

      <section className="relative isolate overflow-hidden bg-ink py-12 text-white sm:py-16">
        <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-8 px-6">
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
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-[#a27e3d] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Get a consultation <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
