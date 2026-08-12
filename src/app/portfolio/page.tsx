import type { Metadata } from "next";

import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Portfolio } from "@/components/site/Portfolio";
import { LogoSliders, ProductsGrid } from "@/components/site/VeerWindowsSections";

export const metadata: Metadata = {
  title: "Portfolio - Veer Windows Products & Projects",
  description:
    "View Veer Windows uPVC and aluminium product ranges, recent installations, partner brands, and client work across Karnataka and nearby regions.",
  openGraph: {
    title: "Veer Windows Portfolio",
    description:
      "Explore recent window and door projects, product ranges, quality partners, and client installations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Portfolio"
        title="Product ranges and completed work built with technical precision."
        description="Browse uPVC windows, aluminium systems, doors, and recent installation work designed for durability, insulation, and clean architectural finishes."
      />
      <ProductsGrid />
      <Portfolio />
      <LogoSliders />
      <Footer />
    </div>
  );
}
