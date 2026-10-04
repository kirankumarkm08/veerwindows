import type { Metadata } from "next";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import {
  HomeConsultationSection,
  HomePartnersSection,
  HomeStorySection,
  HomeTestimonialsSection,
  ProductFamiliesSection,
} from "@/components/site/HomeLandingSections";

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
        <ProductFamiliesSection />
        <HomeStorySection />
        <HomePartnersSection />
        <HomeTestimonialsSection />
        <HomeConsultationSection />
      </main>
      <Footer />
    </div>
  );
}
