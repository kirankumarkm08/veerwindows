import type { Metadata } from "next";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Choose Your Style | Veer Windows",
  description: "Explore window and door styles from Veer Windows.",
};

export default function ChooseYourStylePage() {
  return (
    <div className="bg-background">
      <Header solid />
      <main className="flex min-h-[70vh] items-center bg-ink px-6 pb-20 pt-36 text-white sm:pt-40">
        <section className="mx-auto w-full max-w-[1400px]">
          <p className="eyebrow text-primary-soft">
            <span className="mr-3 inline-block h-px w-8 bg-primary-soft" />
            Choose Your Style
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl">
            Choose Your Style
          </h1>
          <p className="mt-7 text-lg text-white/70">building this page</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
