import type { Metadata } from "next";
import Image from "next/image";

import contactHero from "@/assets/hero-windows.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Toaster } from "@/components/ui/sonner";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Contact Veer Windows — Bengaluru Window & Door Experts",
  description:
    "Get a free survey and quote from Veer Windows in Bengaluru. Call 081509 95171 or send us your project details.",
  openGraph: {
    title: "Contact Veer Windows",
    description: "Free on-site survey and quote for windows and doors across Bengaluru.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <Toaster />
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <Image
          src={contactHero}
          alt="Modern living room framed by expansive windows"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/65"
        />
        <div className="absolute inset-0 top-0">
          <Header />
        </div>
        <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-10 px-6 pb-14 pt-28 sm:px-10 sm:pb-16 lg:min-h-[calc(100svh-4.25rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-14 lg:pb-16 lg:pt-28">
          <Reveal from="left" className="max-w-[560px] py-4">
            <p className="eyebrow text-[#d4b271]">Contact Veer Windows</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-[clamp(3.2rem,4.2vw,4.8rem)]">
              Let&apos;s plan your windows and doors.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
              Tell us about your home or project. Our team can help you choose the right system and
              arrange a free on-site survey.
            </p>
          </Reveal>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
