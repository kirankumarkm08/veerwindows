import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import companyWindows from "@/assets/portfolio-3.jpg";
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

const PRINCIPLES = [
  {
    number: "01.",
    title: "Thoughtful by design",
    description:
      "We help match each opening with a considered combination of frame, glass, and hardware.",
  },
  {
    number: "02.",
    title: "Made to fit",
    description:
      "Every project starts with the space itself, its measurements, and the way people use it.",
  },
  {
    number: "03.",
    title: "Care through delivery",
    description:
      "From the first conversation through installation, we focus on a clear, dependable process.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-[#fbf7f0] text-[#25221f]">
      <Header solid />
      <main className="px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-[1280px]">
          <section
            id="about-veer"
            className="grid items-center gap-8 py-10 sm:gap-10 sm:py-12 md:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:py-14"
          >
            <Reveal className="max-w-[390px]">
              <div className="flex items-center gap-3">
                <p className="eyebrow text-[#a9472d]">About Veer</p>
              </div>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl">
                A clearer view
                <br className="hidden sm:block" /> of better living.
              </h2>
              <p className="mt-4 max-w-sm text-xs leading-6 text-[#5b554f] sm:text-sm">
                VEER WINDOWS brings considered uPVC and System Aluminium windows and doors to homes
                and workspaces across India.
              </p>
              <a
                href="#principles"
                className="mt-5 inline-flex items-center gap-2 border-b border-[#bd7259] pb-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#a9472d] transition-colors hover:text-[#76301f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a9472d]"
              >
                Our principles <ArrowRight aria-hidden="true" className="size-3.5" />
              </a>
            </Reveal>

            <Reveal
              from="right"
              delay={100}
              className="relative min-w-0 md:justify-self-end md:w-full"
            >
              <div className="relative aspect-[1.52] overflow-hidden bg-[#ddd4c5]">
                <Image
                  src={companyWindows}
                  alt="Contemporary home with broad windows opening to a garden"
                  fill
                  sizes="(max-width: 767px) 92vw, (max-width: 1024px) 55vw, 740px"
                  className="object-cover"
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rotate-90 text-[8px] font-bold uppercase tracking-[0.24em] text-[#635c53] xl:block"
              >
                A contemporary view · Veer Windows
              </span>
            </Reveal>
          </section>

          <section
            id="founder"
            className="grid items-start gap-8 border-y border-[#e5ddd2] bg-[linear-gradient(110deg,#fbf7f0_0%,#fbf7f0_58%,#f8f2e9_100%)] py-10 sm:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-12 lg:gap-16 lg:py-14"
          >
            <Reveal className="relative mx-auto w-[min(78vw,360px)] sm:mx-0 sm:w-full sm:max-w-[360px]">
              <div className="absolute -left-2 -top-2 h-14 w-24 bg-[#d5d1b4] sm:-left-3 sm:-top-3 sm:h-20 sm:w-32" />
              <div className="relative overflow-hidden border border-white/70 bg-[#242523] shadow-[0_18px_48px_-32px_rgba(64,43,28,0.5)]">
                <Image
                  src="/veerwindows-founder.png"
                  alt="Kiran Balapur, Founder of Veer Windows"
                  width={572}
                  height={800}
                  priority
                  sizes="(max-width: 639px) min(78vw, 360px), (max-width: 1023px) 36vw, 360px"
                  className="block h-auto w-full"
                />
              </div>
              <div className="absolute -bottom-3 left-0 min-w-[150px] bg-[#a9472d] px-5 py-2.5 text-white sm:min-w-[165px] sm:px-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] sm:text-xs">
                  Kiran Balapur
                </p>
                <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-white/80">
                  Founder
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="max-w-[650px] md:justify-self-end">
              <p className="eyebrow text-[#a9472d]">Founder, Veer Windows</p>
              <div className="mt-3 flex gap-3 sm:gap-5">
                <span
                  aria-hidden="true"
                  className="font-serif text-5xl leading-[0.8] text-[#a9472d]"
                >
                  “
                </span>
                <div>
                  <h1 className="max-w-[620px] font-serif text-3xl font-medium leading-[1.02] tracking-[-0.035em] text-[#24211f] sm:text-4xl lg:text-[3.25rem]">
                    A personal commitment to better spaces.
                  </h1>
                  <div className="mt-4 border-l border-[#d9b8a9] pl-4 text-[11px] leading-[1.65] text-[#48433e] sm:mt-5 sm:pl-5 sm:text-xs">
                    <p>
                      Kiran Balapur, a Mechanical Engineer, brings nine years of comprehensive
                      industry experience to the company. His background spans sales leadership,
                      technical execution, and freelance consultancy.
                    </p>
                    <p className="mt-3">
                      That hands-on experience informs our focus on careful product selection, clear
                      coordination, and a dependable installation experience.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <section
            aria-label="Veer Windows at a glance"
            className="grid grid-cols-2 border-y border-[#e5ddd2] bg-[#f5f0e8] py-4 xl:grid-cols-4 sm:py-5"
          >
            <div className="flex flex-col justify-center px-3 xl:flex-row xl:items-center xl:gap-4 xl:px-6">
              <p className="font-serif text-2xl leading-none sm:text-3xl">2022</p>
              <p className="mt-1 max-w-[105px] text-[7px] font-bold uppercase leading-[1.45] tracking-[0.12em] text-[#686057] sm:mt-0 sm:text-[8px]">
                Established as Veer Infratech
              </p>
            </div>
            <div className="flex flex-col justify-center border-l border-[#ddd3c5] px-3 xl:flex-row xl:items-center xl:gap-4 xl:px-6">
              <p className="font-serif text-2xl leading-none sm:text-3xl">9+</p>
              <p className="mt-1 max-w-[110px] text-[7px] font-bold uppercase leading-[1.45] tracking-[0.12em] text-[#686057] sm:mt-0 sm:text-[8px]">
                Years of industry experience
              </p>
            </div>
            <div className="flex flex-col justify-center border-t border-[#ddd3c5] px-3 pt-3 xl:flex-row xl:items-center xl:gap-4 xl:border-l xl:border-t-0 xl:px-6 xl:pt-0">
              <p className="font-serif text-base leading-none sm:text-xl xl:whitespace-nowrap">
                uPVC + Aluminium
              </p>
              <p className="mt-1 text-[7px] font-bold uppercase leading-[1.45] tracking-[0.12em] text-[#686057] sm:mt-0 sm:text-[8px]">
                Windows and doors
              </p>
            </div>
            <div className="flex flex-col justify-center border-l border-t border-[#ddd3c5] px-3 pt-3 xl:flex-row xl:items-center xl:gap-4 xl:border-t-0 xl:px-6 xl:pt-0">
              <p className="font-serif text-2xl leading-none sm:text-3xl">2026</p>
              <p className="mt-1 max-w-[125px] text-[7px] font-bold uppercase leading-[1.45] tracking-[0.12em] text-[#686057] sm:mt-0 sm:text-[8px]">
                Rebranded as Veer Windows
              </p>
            </div>
          </section>

          <section id="principles" className="scroll-mt-24 pb-3">
            <Reveal>
              <div className="flex items-center gap-3">
                <p className="eyebrow text-[#a9472d]">Our principles</p>
              </div>
            </Reveal>
            <div className="mt-4 grid border-t border-[#e5ddd2] sm:grid-cols-3">
              {PRINCIPLES.map((principle, index) => (
                <Reveal
                  key={principle.number}
                  delay={index * 80}
                  className="border-b border-[#e5ddd2] py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl leading-none text-[#a9472d]">
                      {principle.number}
                    </span>
                    <span aria-hidden="true" className="h-px flex-1 bg-[#d7aa99]" />
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-medium leading-tight tracking-[-0.025em]">
                    {principle.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-[10px] leading-[1.55] text-[#686057] sm:text-[11px]">
                    {principle.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
