import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative bg-ink pb-24 pt-40 text-ink-foreground">
      <div className="absolute inset-0 top-0">
        <Header />
      </div>
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <span className="eyebrow text-ink-foreground/60">
            <span className="h-px w-8 bg-primary-soft" />
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl text-ink-foreground sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-ink-foreground/70">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
