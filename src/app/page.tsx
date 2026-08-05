import type { Metadata } from "next";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Faq } from "@/components/site/Faq";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";

const TITLE = "Veer Windows — Premium Windows & Doors Installation";
const DESCRIPTION =
  "Veer Windows designs, supplies, and installs energy-efficient windows and doors for homes, builders, and architects. Free surveys and guaranteed workmanship.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Faq />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
