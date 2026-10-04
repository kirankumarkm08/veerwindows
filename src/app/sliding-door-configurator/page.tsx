import type { Metadata } from "next";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SlidingDoorConfigurator } from "@/components/site/SlidingDoorConfigurator";

const TITLE = "3D Sliding Door Configurator | Veer Windows";
const DESCRIPTION =
  "Explore a Veer Windows sliding door in 3D. Open the panels and compare frame finishes and glass options.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
};

export default function SlidingDoorConfiguratorPage() {
  return (
    <div className="bg-background">
      <Header solid />
      <main>
        <section className="hidden bg-[#f4f0e8] pb-12 pt-36 sm:pb-16 sm:pt-44 lg:block">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid items-end gap-8 border-b border-heading/15 pb-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(20rem,0.45fr)] lg:pb-14">
              <div>
                <p className="eyebrow text-primary">Interactive design studio</p>
                <h1 className="mt-5 max-w-4xl text-4xl font-bold text-heading sm:text-6xl lg:text-7xl">
                  Explore your sliding door in 3D.
                </h1>
              </div>
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Rotate the model, open the panels, and preview frame finishes and glass options
                before speaking with our team.
              </p>
            </div>
          </div>
        </section>
        <SlidingDoorConfigurator />
      </main>
      <Footer />
    </div>
  );
}
