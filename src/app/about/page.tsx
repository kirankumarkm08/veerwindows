import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import companyWindows from "@/assets/portfolio-2.jpg";
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
        <section className="relative overflow-hidden bg-[#fbf9f4] pt-[4.25rem] text-heading">
          <div className="absolute inset-x-0 top-0">
            <Header solid />
          </div>

          <div className="grid min-h-[calc(100svh-4.25rem)] lg:grid-cols-2">
            <div className="flex items-center px-6 pb-12 pt-14 sm:px-10 lg:px-[clamp(2.5rem,7vw,8rem)] lg:py-16">
              <div className="mx-auto w-full max-w-[620px]">
                <Reveal>
                  <p className="eyebrow text-[#587487]">Our company</p>
                  <h1 className="mt-6 max-w-[600px] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-heading sm:text-5xl lg:text-[clamp(3.2rem,4.1vw,4.8rem)]">
                    <span className="block">Built on experience.</span>
                    <span className="mt-1 block">Made for your space.</span>
                  </h1>
                </Reveal>

                <Reveal delay={100} className="mt-6 max-w-[600px]">
                  <div className="space-y-3 text-sm leading-6 text-[#647c89] sm:text-base sm:leading-7">
                    <p>
                      Established in 2022 as Veer Infratech, we have grown into Veer Window Systems
                      Private Limited, proudly operating under the brand{" "}
                      <strong className="font-semibold text-heading">VEER WINDOWS</strong>.
                    </p>
                    <p>
                      Backed by over 9 years of industry expertise, we deliver premium uPVC and
                      System Aluminium windows and doors with lasting performance.
                    </p>
                  </div>
                </Reveal>

                <Reveal
                  delay={160}
                  className="mt-7 grid max-w-[600px] grid-cols-2 border-y border-[#d8d9d5] py-5 sm:mt-8 sm:py-6"
                >
                  <div className="flex items-center gap-3 border-r border-[#c6a46e] pr-4 sm:gap-5 sm:pr-6">
                    <span className="text-3xl font-semibold leading-none tracking-[-0.05em] text-heading sm:text-4xl">
                      2022
                    </span>
                    <span className="max-w-[130px] text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-[#6f8793] sm:text-[10px]">
                      Established as Veer Infratech
                    </span>
                  </div>
                  <div className="flex items-center gap-3 pl-4 sm:gap-5 sm:pl-6">
                    <span className="whitespace-nowrap text-2xl font-semibold leading-none tracking-[-0.05em] text-heading sm:text-4xl">
                      9+ years
                    </span>
                    <span className="max-w-[125px] text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-[#6f8793] sm:text-[10px]">
                      Of industry expertise
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={240}>
                  <a
                    href="#our-story"
                    className="mt-6 inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#1c5870] transition-colors hover:text-[#a27e3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    Explore our story
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </Reveal>
              </div>
            </div>

            <Reveal
              from="right"
              delay={120}
              className="relative min-h-[360px] overflow-hidden bg-[#e9e5dc] sm:min-h-[460px] lg:min-h-0"
            >
              <Image
                src={companyWindows}
                alt="Contemporary home with large aluminium windows"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </section>

        <section id="our-story" className="grid bg-ink text-ink-foreground lg:min-h-[76svh] lg:grid-cols-2">
          <Reveal
            from="left"
            className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-0"
          >
            <Image
              src="/veerwindows-founder.png"
              alt="Founder of VEER WINDOWS"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#062e40]/80 to-transparent"
            />
            <p className="absolute bottom-7 left-7 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white sm:bottom-9 sm:left-10">
              Founder, Veer Windows
            </p>
          </Reveal>

          <div className="flex items-center px-6 py-14 sm:px-10 sm:py-16 lg:px-[clamp(2.5rem,7vw,8rem)] lg:py-20">
            <div className="mx-auto w-full max-w-[620px]">
              <Reveal>
                <p className="eyebrow text-[#d4b271]">Our founder</p>
                <h2 className="mt-6 max-w-lg text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl">
                  A vision built around better spaces.
                </h2>
              </Reveal>
              <Reveal
                delay={100}
                className="mt-6 space-y-4 text-sm leading-6 text-white/70 sm:text-base sm:leading-7"
              >
                <p>
                  Veer Windows was founded with a clear vision: to bring high-quality, modern window
                  and door solutions to more homes and spaces across India.
                </p>
                <p>
                  With a strong foundation in the industry and a hands-on understanding of what
                  builders, homeowners, and architects need, we focus on dependable products and a
                  seamless end-to-end experience.
                </p>
                <p>
                  Our team is committed to quality, precision, and customer satisfaction at every
                  stage—from product knowledge to project coordination, installation, and support.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
