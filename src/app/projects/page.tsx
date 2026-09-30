import type { Metadata } from "next";

import { Footer } from "@/components/site/Footer";
import { LogoSliders } from "@/components/site/VeerWindowsSections";
import { Portfolio } from "@/components/site/Portfolio";
import { ProjectsHero } from "@/components/site/ProjectsHero";

export const metadata: Metadata = {
  title: "Projects | Veer Windows",
  description:
    "Explore Veer Windows project locations and window and door installations across homes, apartments, workplaces, and community spaces.",
  openGraph: {
    title: "Projects | Veer Windows",
    description: "Explore project locations and installations by Veer Windows.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <div className="bg-background">
      <ProjectsHero />
      <Portfolio />
      <LogoSliders />
      <Footer />
    </div>
  );
}
