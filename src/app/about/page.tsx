import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
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
  twitter: {
    card: "summary_large_image",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#fbf9f4]">
      <main>
        <section className="relative overflow-hidden bg-[#fbf9f4] pb-14 pt-28 text-heading sm:pb-16 sm:pt-32 lg:pb-20">
          <div className="absolute inset-x-0 top-0">
            <Header solid />
          </div>

          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-14 xl:gap-20">
            <Reveal className="relative mx-auto w-full max-w-[390px] lg:justify-self-center">
              <div className="absolute -left-4 -top-4 h-28 w-16 border-l-2 border-t-2 border-[#bb9657] sm:-left-5 sm:-top-5 sm:h-36 sm:w-20" />
              <div className="relative aspect-[4/4.25] overflow-hidden bg-[#173a49]">
                <Image
                  src="/veerwindows-founder.png"
                  alt="Founder of VEER WINDOWS"
                  fill
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-cover object-top"
                  priority
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#062e40]/90 via-[#062e40]/25 to-transparent"
                />
                <div className="absolute bottom-5 left-5 flex items-center gap-4 text-white sm:bottom-6 sm:left-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Founder</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-20 w-20 border-b-2 border-r-2 border-[#bb9657] sm:-bottom-5 sm:-right-5 sm:h-24 sm:w-24" />
            </Reveal>

            <div className="relative z-10 mx-auto w-full max-w-[790px] lg:mx-0">
              <Reveal>
                <p className="eyebrow text-[#587487]"> Our company</p>
                <h1 className="mt-7 max-w-[820px] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-heading sm:text-6xl lg:text-[clamp(3.6rem,5vw,5.4rem)]">
                  <span className="block">Built on experience.</span>
                  <span className="mt-1 block">Made for your space.</span>
                </h1>
              </Reveal>

              <Reveal delay={100} className="mt-7 max-w-[760px]">
                <div className="space-y-3 text-base leading-7 text-[#647c89] sm:text-lg sm:leading-8">
                  <p>
                    Established in 2022 as Veer Infratech, we have grown into Veer Window Systems
                    Private Limited, proudly operating under the brand{" "}
                    <strong className="font-semibold text-heading">VEER WINDOWS</strong>.
                  </p>
                  <p>
                    Backed by over 9 years of industry expertise, we deliver premium uPVC and System
                    Aluminium windows and doors with lasting performance.
                  </p>
                </div>
              </Reveal>

              <Reveal
                delay={160}
                className="mt-8 grid max-w-[760px] grid-cols-2 border-b border-[#d8d9d5] pb-7 sm:mt-10 sm:pb-8"
              >
                <div className="flex items-center gap-4 border-r border-[#c6a46e] pr-5 sm:gap-6 sm:pr-8">
                  <span className="text-4xl font-semibold leading-none tracking-[-0.05em] text-heading sm:text-5xl">
                    2022
                  </span>
                  <span className="max-w-[130px] text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-[#6f8793] sm:text-xs">
                    Established as Veer Infratech
                  </span>
                </div>
                <div className="flex items-center gap-4 pl-5 sm:gap-6 sm:pl-8">
                  <span className="whitespace-nowrap text-3xl font-semibold leading-none tracking-[-0.05em] text-heading sm:text-5xl">
                    9+ years
                  </span>
                  <span className="max-w-[125px] text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-[#6f8793] sm:text-xs">
                    Of industry expertise
                  </span>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <a
                  href="#our-story"
                  className="mt-7 inline-flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.18em] text-[#1c5870] transition-colors hover:text-[#a27e3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Explore our story
                  <ArrowRight
                    aria-hidden="true"
                    className="size-5 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="our-story" className="border-t border-[#e0dfd9] bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-[1400px] gap-8 px-6 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-14">
            <Reveal>
              <p className="eyebrow text-[#587487]"> Our story</p>
              <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.045em] text-heading sm:text-4xl">
                One team from measurement to installation.
              </h2>
            </Reveal>
            <Reveal
              delay={120}
              className="max-w-3xl space-y-5 text-base leading-7 text-[#647c89] sm:text-lg sm:leading-8"
            >
              <p>
                From precise site measurements and customized solutions to advanced fabrication and
                professional installation, our team delivers complete window and door systems
                tailored to each project.
              </p>
              <p>
                Quality, precision, and customer satisfaction guide every stage of our work. We
                bring practical product knowledge and careful project coordination to homes,
                builders, and architects.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
