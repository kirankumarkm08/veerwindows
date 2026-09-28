import type { Metadata } from "next";
import Image from "next/image";

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
    <div className="bg-background">
      <main>
        <section className="relative overflow-hidden bg-[#f2f4f4] pb-20 pt-36 text-ink sm:pb-28 sm:pt-40">
          <div className="absolute inset-x-0 top-0">
            <Header solid />
          </div>
          <div className="mx-auto max-w-[1240px] px-6">
            <div className="mb-10 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink/55">
              <span className="h-px w-9 bg-primary" />
              Our company
            </div>
            <div className="grid items-start gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
              <Reveal className="relative">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink sm:aspect-[5/6]">
                  <Image
                    src="/veerwindows-founder.png"
                    alt="Founder of VEER WINDOWS"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Founder</p>
                    <p className="mt-1 text-lg font-semibold">VEER WINDOWS</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-3 -z-0 h-24 w-24 border-b-2 border-r-2 border-primary/50 sm:-right-5 sm:h-32 sm:w-32" />
              </Reveal>

              <div className="pt-2 sm:pt-8">
                <Reveal>
                  <span className="eyebrow text-ink/55">
                    <span className="h-px w-8 bg-primary" />
                    About Us
                  </span>
                  <h1 className="mt-6 max-w-2xl text-4xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
                    Built on experience. Made for your space.
                  </h1>
                </Reveal>

                <Reveal delay={120} className="mt-8 max-w-2xl border-t border-ink/15 pt-7">
                  <div className="space-y-5 text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
                    <p>
                      Established in 2022 as Veer Infratech, we have grown into Veer Window Systems
                      Private Limited, proudly operating under the brand <strong className="font-semibold text-ink">VEER WINDOWS</strong>.
                    </p>
                    <p>
                      Backed by over 9 years of industry expertise, we specialize in delivering
                      premium uPVC and System Aluminium windows and doors, combining contemporary
                      design with lasting performance.
                    </p>
                    <p>
                      From precise site measurements and customized solutions to advanced
                      fabrication and professional installation, we offer complete window and door
                      solutions tailored to every project.
                    </p>
                    <p className="border-l-2 border-primary pl-5 font-medium text-ink">
                      At VEER WINDOWS, quality, precision, and customer satisfaction are at the
                      heart of everything we do. We deliver every window with precision and care.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
