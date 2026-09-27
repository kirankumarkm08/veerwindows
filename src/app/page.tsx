import type { Metadata } from "next";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { Services } from "@/components/site/Services";
import {
  FeatureHighlights,
  LogoSliders,
  ProductsGrid,
  TextTestimonialsCarousel,
  VideoTestimonialSection,
} from "@/components/site/VeerWindowsSections";

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
      <Header solid />
      <main>
        <Hero />
        <FeatureHighlights />
        {/* <Services /> */}
        {/* <ProductsGrid /> */}
        <LogoSliders />
        <TextTestimonialsCarousel />
        <VideoTestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
