import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
};

export function PageHero({ eyebrow, title, description, compact = false }: PageHeroProps) {
  return (
    <section
      className={`relative bg-ink text-ink-foreground ${
        compact ? "pb-10 pt-24 sm:pb-12 sm:pt-28" : "pb-24 pt-40"
      }`}
    >
      <div className="absolute inset-0 top-0">
        <Header />
      </div>
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <span className="eyebrow text-ink-foreground/60"> {eyebrow}</span>
          <h1 className="mt-6 max-w-3xl text-4xl text-ink-foreground sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-ink-foreground/70">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
