import type { Metadata } from "next";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { About } from "@/components/site/About";
import { VeerWindowsAbout } from "@/components/site/VeerWindowsSections";

export const metadata: Metadata = {
  title: "About Veer Windows — uPVC & System Aluminium Experts",
  description:
    "Veer Windows Private Limited is a team of engineers and industry experts with 9+ years of experience in high-performance uPVC and System Aluminium windows and doors.",
  openGraph: {
    title: "About Veer Windows",
    description:
      "Founded in 2022, we deliver technical precision and aesthetic elegance in uPVC and System Aluminium fenestration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="relative bg-ink pb-24 pt-40 text-ink-foreground">
        <div className="absolute inset-0 top-0">
          <Header />
        </div>
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <span className="eyebrow text-ink-foreground/60">
              <span className="h-px w-8 bg-primary-soft" />
              About Us
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl text-ink-foreground sm:text-6xl">
              Committed to transforming spaces with high-performance fenestration.
            </h1>
            <p className="mt-6 max-w-2xl text-ink-foreground/70">
              From our roots as Veer Infratech in 2022 to our current focus as Veer Windows Private
              Limited, we bring technical precision and aesthetic elegance to every project.
            </p>
          </Reveal>
        </div>
      </section>

      <VeerWindowsAbout />
      <About />

      <Footer />
    </div>
  );
}
