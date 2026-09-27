import type { Metadata } from "next";

import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Services } from "@/components/site/Services";

export const metadata: Metadata = {
  title: "Services - Veer Windows",
  description:
    "Explore Veer Windows uPVC and system aluminium products, plus our four-step process from site visit to professional installation.",
  openGraph: {
    title: "Veer Windows Services",
    description:
      "Browse our window and door systems and see the project process: visit, measure, design, and install.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Windows & doors"
        title="Window and door systems for your space."
        description="Explore our product systems and see how we take each project from site visit to installation."
        compact
      />
      <Services />
      <Footer />
    </div>
  );
}
