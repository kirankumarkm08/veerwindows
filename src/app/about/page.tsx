import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Compass, Layers3, ShieldCheck } from "lucide-react";

import companyWindows from "@/assets/portfolio-2.jpg";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "About Veer Windows — uPVC & System Aluminium Experts",
  description:
    "Established in 2022 as Veer Infratech, Veer Window Systems Private Limited delivers premium uPVC and System Aluminium windows and doors, backed by over 9 years of industry expertise.",
  openGraph: {
    title: "About Veer Windows",
    description:
      "Learn about VEER WINDOWS, our expertise in uPVC and System Aluminium windows and doors, and our complete project services.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const VALUES = [
  {
    number: "01",
    title: "Thoughtful by design",
    description:
      "We help match each opening with a considered combination of frame, glass, and hardware.",
    Icon: Compass,
  },
  {
    number: "02",
    title: "Made to fit",
    description:
      "Every project starts with the space itself, its measurements, and the way people use it.",
    Icon: Layers3,
  },
  {
    number: "03",
    title: "Care through delivery",
    description:
      "From the first conversation through installation, we focus on a clear, dependable process.",
    Icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-[#f8f6f0] text-heading">
      <Header solid />
      <main>
        <section className="relative isolate min-h-[720px] bg-[#082d3c] text-white lg:min-h-[calc(100svh-5rem)]">
          <div className="absolute inset-0 -z-20">
            <Image
              src={companyWindows}
              alt="Modern home with expansive windows opening onto the landscape"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,30,44,0.94)_0%,rgba(3,30,44,0.78)_48%,rgba(3,30,44,0.24)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#031e2c]/75 via-transparent to-[#031e2c]/20" />

          <div className="mx-auto flex min-h-[720px] max-w-[1440px] flex-col justify-end px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:min-h-[calc(100svh-5rem)] lg:px-16 lg:pb-24">
            <Reveal className="max-w-4xl">
              <p className="eyebrow text-[#e0c27b]">A better view starts here</p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl lg:text-[clamp(4.5rem,8vw,7.5rem)]">
                We make room
                <br />
                for better living.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                VEER WINDOWS brings considered uPVC and System Aluminium windows and doors to homes
                and workspaces across India.
              </p>
              <a
                href="#our-story"
                className="mt-9 inline-flex items-center gap-3 border border-white/45 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white hover:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Discover our story <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </Reveal>

            <div className="mt-14 grid max-w-3xl grid-cols-2 border-t border-white/30 pt-5 sm:mt-20 sm:grid-cols-3">
              <div className="border-r border-white/25 pr-4 sm:pr-8">
                <p className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  2022
                </p>
                <p className="mt-2 text-[9px] font-bold uppercase leading-4 tracking-[0.16em] text-white/65 sm:text-[10px]">
                  Established as Veer Infratech
                </p>
              </div>
              <div className="pl-4 sm:border-r sm:border-white/25 sm:px-8">
                <p className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  9+
                </p>
                <p className="mt-2 text-[9px] font-bold uppercase leading-4 tracking-[0.16em] text-white/65 sm:text-[10px]">
                  Years of industry experience
                </p>
              </div>
              <div className="col-span-2 mt-5 border-t border-white/25 pt-5 sm:col-span-1 sm:mt-0 sm:border-0 sm:pl-8 sm:pt-0">
                <p className="text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">
                  uPVC + Aluminium
                </p>
                <p className="mt-2 text-[9px] font-bold uppercase leading-4 tracking-[0.16em] text-white/65 sm:text-[10px]">
                  Systems for modern spaces
                </p>
              </div>
            </div>
          </div>
          <span
            aria-hidden="true"
            className="absolute right-8 top-1/2 hidden -rotate-90 text-[9px] font-bold uppercase tracking-[0.24em] text-white/65 xl:block"
          >
            VEER WINDOW SYSTEMS · INDIA
          </span>
        </section>

        <section
          id="our-story"
          className="scroll-mt-20 bg-[#073852] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16"
        >
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1fr_420px] lg:items-center lg:gap-20">
            <Reveal>
              <p className="eyebrow text-[#e0c27b]">Founder, Veer Windows</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                A personal commitment to better spaces.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Kiran Balapur, a Mechanical Engineer, brings nine years of comprehensive industry
                experience to the company. His background spans sales leadership, technical
                execution, and freelance consultancy.
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                That hands-on experience informs our focus on careful product selection, clear
                coordination, and a dependable installation experience.
              </p>
            </Reveal>
            <Reveal
              from="right"
              delay={120}
              className="mx-auto w-full max-w-[340px] lg:mx-0 lg:max-w-[420px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white/10">
                <Image
                  src="/veerwindows-founder.png"
                  alt="Kiran Balapur, Founder of Veer Windows"
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 340px, 420px"
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-3 text-xs font-semibold tracking-wide text-white">Kiran Balapur</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
                Founder
              </p>
            </Reveal>
          </div>
        </section>

        <section className="scroll-mt-20 bg-[#f8f6f0] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
          <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow text-[#927239]">Our story</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-heading/55">
                From a clear idea
                <br />
                to a considered craft.
              </p>
              <div className="mt-8 h-px w-16 bg-[#b18c4b]" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Good windows change how a space feels.
              </h2>
              <div className="mt-8 grid gap-6 text-base leading-7 text-[#5e7078] sm:grid-cols-2 sm:gap-10">
                <p>
                  Established in 2022 as Veer Infratech, we have grown into Veer Window Systems
                  Private Limited, proudly operating under the brand VEER WINDOWS.
                </p>
                <p>
                  Backed by more than nine years of industry experience, we bring product knowledge
                  and practical project support to homeowners, builders, and architects.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-3">
                <span className="border border-[#d7d2c8] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-heading/75">
                  uPVC windows & doors
                </span>
                <span className="border border-[#d7d2c8] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-heading/75">
                  System Aluminium
                </span>
                <span className="border border-[#d7d2c8] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-heading/75">
                  Project installation
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-[#eae5da] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <div className="mx-auto max-w-[1280px]">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-[#927239]">What guides us</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl">
                Details matter. So does the experience.
              </h2>
            </Reveal>
            <div className="mt-12 grid border-t border-[#c9c2b5] md:grid-cols-3">
              {VALUES.map(({ number, title, description, Icon }, index) => (
                <Reveal
                  key={number}
                  delay={index * 100}
                  className="border-b border-[#c9c2b5] py-8 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.15em] text-[#927239]">
                      {number}
                    </span>
                    <Icon aria-hidden="true" className="size-5 text-[#927239]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-9 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#5e7078]">{description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f6f0] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <Reveal className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 border-y border-[#d7d2c8] py-10 sm:flex-row sm:items-center sm:py-12">
            <div>
              <p className="eyebrow text-[#927239]">Let’s plan your next opening</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Find the right fit for your space.
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-4 bg-[#9a793d] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#7d602f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a793d]"
            >
              Talk to our team
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
