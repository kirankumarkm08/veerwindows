import type { Metadata } from "next";

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
      <section className="relative bg-ink pb-24 pt-40 text-ink-foreground">
        <div className="absolute inset-0 top-0">
          <Header />
        </div>
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <span className="eyebrow text-ink-foreground/60">
              <span className="h-px w-8 bg-primary-soft" />
              Contact Us
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl text-ink-foreground sm:text-6xl">
              Let&apos;s plan your windows and doors.
            </h1>
            <p className="mt-6 max-w-xl text-ink-foreground/70">
              Share your requirement and our team will arrange a free on-site survey, precise
              measurements, and a transparent quotation.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
}
