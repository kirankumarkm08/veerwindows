import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    text: "The entire process was seamless from consultation to installation. Their professional workmanship and quality materials exceeded our expectations in every way.",
    name: "Olivia Brown",
  },
  {
    text: "We are impressed with the team's reliability and expertise. Their premium installation services delivered outstanding results and added lasting value to our property.",
    name: "Daniel Anderson",
  },
  {
    text: "Their expert installation team and attention to detail transformed our home beautifully. The new windows improved comfort, security, and energy efficiency.",
    name: "James Wilson",
  },
  {
    text: "From the first consultation, the team understood exactly what we needed. The installation was quick, clean, and the final result completely transformed the look of our home.",
    name: "Priya Sharma",
  },
];

const CLIENTS = ["Northgate", "Bramley", "Verona", "Larkfield", "Stonewood"];

export function Testimonials() {
  return (
    <section className="section bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal from="left">
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary" />
              Testimonials
            </span>
            <h2 className="mt-6 max-w-2xl text-4xl sm:text-5xl">What our clients say.</h2>
          </Reveal>
          <Reveal from="right" delay={140} className="flex items-center gap-4">
            <span className="text-6xl font-black tracking-tight">4.9</span>
            <span>
              <span className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <span className="mt-2 block text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Customer Satisfaction
              </span>
            </span>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, index) => (
            <Reveal
              as="figure"
              key={review.name}
              delay={index * 220}
              className="flex flex-col justify-between bg-background p-9"
            >
              <blockquote className="text-lg font-medium leading-relaxed">{review.text}</blockquote>
              <figcaption className="mt-8 text-sm font-extrabold uppercase tracking-[0.16em]">
                @{review.name}
              </figcaption>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 overflow-hidden border-y border-border py-8">
          <div className="flex w-max animate-marquee gap-16">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="text-2xl font-black uppercase tracking-tight text-muted-foreground/60"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
