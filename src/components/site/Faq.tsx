import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Do you offer full window replacement?",
    a: "Yes. We remove old units, prepare the opening, and fit new energy-efficient frames with full sealing and finishing.",
  },
  {
    q: "How long does an installation take?",
    a: "Most homes are completed in one to three days depending on the number of openings and any structural work required.",
  },
  {
    q: "Are your windows energy efficient?",
    a: "Every unit we fit is double or triple glazed with thermally broken frames, cutting heat loss and outside noise.",
  },
  {
    q: "Do I need to book a survey in advance?",
    a: "A free on-site survey is recommended so we can measure precisely and confirm pricing before ordering.",
  },
  {
    q: "What warranty do you provide?",
    a: "Products carry a 10-year manufacturer warranty and our installation workmanship is guaranteed for 5 years.",
  },
];

export function Faq() {
  return (
    <section className="section bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 lg:grid-cols-[1fr_1.15fr]">
        <Reveal from="left">
          <span className="eyebrow text-ink-foreground/60">
            <span className="h-px w-8 bg-primary-soft" />
            Frequently Asked Question
          </span>
          <h2 className="mt-6 text-ink-foreground text-4xl sm:text-5xl">
            Everything about our installations.
          </h2>
          <p className="mt-6 max-w-md text-ink-foreground/70">
            Find clear answers about surveys, lead times, pricing details, and warranty options
            designed to make your project simple and stress-free.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block btn-sweep-light bg-primary-soft px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-soft-foreground"
          >
            Explore More
          </a>
        </Reveal>

        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 90} from="right">
              <AccordionItem value={`item-${i}`} className="border-ink-foreground/15">
                <AccordionTrigger className="py-6 text-left text-lg font-bold !text-ink-foreground hover:no-underline">
                  <span className="text-ink-foreground">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm text-ink-foreground/70">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
