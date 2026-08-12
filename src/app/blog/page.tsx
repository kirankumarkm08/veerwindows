import type { Metadata } from "next";

import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { BlogAndVentures } from "@/components/site/VeerWindowsSections";

export const metadata: Metadata = {
  title: "Blog - Veer Windows Insights",
  description:
    "Read Veer Windows updates and practical insights on uPVC windows, aluminium systems, airtight fenestration, maintenance, design, and installation.",
  openGraph: {
    title: "Veer Windows Blog",
    description:
      "Window and door insights, product updates, maintenance tips, and fenestration trends from Veer Windows.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-background">
      <PageHero
        eyebrow="Blog"
        title="Insights for better windows, doors, and long-lasting homes."
        description="Explore practical guidance, product updates, and design ideas for choosing and maintaining high-performance uPVC and aluminium systems."
      />
      <BlogAndVentures />
      <Blog />
      <Footer />
    </div>
  );
}
