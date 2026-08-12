import type { Metadata } from "next";

import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Services } from "@/components/site/Services";
import { VideoStatsSection } from "@/components/site/VeerWindowsSections";

export const metadata: Metadata = {
  title: "Services - Veer Windows Installation & Replacement",
  description:
    "Explore Veer Windows services for uPVC and aluminium window installation, door installation, replacements, and custom fenestration solutions.",
  openGraph: {
    title: "Veer Windows Services",
    description:
      "Professional window and door installation, replacement, and custom solutions for homes, builders, and architects.",
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
        eyebrow="Services"
        title="Installation, replacement, and custom solutions for precise spaces."
        description="From measurements and material selection to manufacturing and final installation, our team handles each step with clear timelines and durable workmanship."
      />
      <Services />
      <VideoStatsSection />
      <Footer />
    </div>
  );
}
