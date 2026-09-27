import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  CircleDollarSign,
  Headphones,
  Lightbulb,
  Plus,
  ShieldCheck,
  Star,
} from "lucide-react";

import { Reveal } from "./Reveal";
import aboutDetail from "@/assets/about-detail.jpg";
import aboutInstall from "@/assets/about-install.jpg";
import product1 from "@/assets/portfolio-1.jpg";
import product2 from "@/assets/portfolio-2.jpg";
import product3 from "@/assets/portfolio-3.jpg";
import product4 from "@/assets/portfolio-4.jpg";
import product5 from "@/assets/portfolio-5.jpg";
import product6 from "@/assets/portfolio-6.jpg";

const FEATURE_HIGHLIGHTS = [
  { icon: Lightbulb, label: "Quick Innovative Solutions" },
  { icon: CircleDollarSign, label: "Super Flexible Pricing" },
  { icon: Headphones, label: "Fast & Flexible Support" },
];

const ABOUT_POINTS = [
  "Long-lasting",
  "Durability",
  "Fire Retardant",
  "Security",
  "Weather Resistant",
];

const VISION_POINTS = ["We believe in striving to deliver quality on schedule and within budget."];

const MISSION_POINTS = [
  "To exceed customer expectations by providing the highest quality services utilizing ethical business practices.",
  "Honest and transparent processes from start to finish.",
  "To conduct business with integrity while providing quality service focused on customer satisfaction.",
];

const PRODUCTS = [
  { title: "Casement Window", category: "Windows", img: product1.src },
  { title: "Sliding Window", category: "Windows", img: product2.src },
  { title: "French Door", category: "Doors", img: product3.src },
  { title: "Casement Doors", category: "Doors", img: product4.src },
  { title: "Sliding Doors", category: "Doors", img: product5.src },
  { title: "Aluminium Fold & Slide Door", category: "Aluminium", img: product6.src },
  { title: "Aluminium Parallel Window", category: "Aluminium", img: aboutDetail.src },
  { title: "Aluminium Pivot Window", category: "Aluminium", img: aboutInstall.src },
];

const PARTNER_LOGOS = [
  {
    name: "Quality partner 1",
    img: "/companies/Screenshot 2026-08-11 231342.png",
  },
  {
    name: "Quality partner 2",
    img: "/companies/Screenshot 2026-08-11 231353.png",
  },
  {
    name: "Quality partner 3",
    img: "/companies/Screenshot 2026-08-11 231409.png",
  },
  {
    name: "Quality partner 4",
    img: "/companies/Screenshot 2026-08-11 231418.png",
  },
];

const CLIENT_LOGOS = [
  "Shardhi Chit Funds",
  "Prestige Homes",
  "Metro Builders",
  "Nagarabhavi",
  "Bangalore Infra",
  "Green Habitat",
];

const REVIEWS = [
  {
    name: "Jenson Arisseril",
    text: "From starting to end overall experience was superb. Karthik was very prompt in attending and arranging the site visit and installation. The delivery and installation teams were professional.",
  },
  {
    name: "Mahesh S",
    text: "I had a wonderful experience with Veer Windows and Mr Nitin, from requirements to delivery and fixing all windows without any hassles. The team followed up and delivered on time.",
  },
  {
    name: "Shiva raj",
    text: "Nice work by the Veer Windows team. Mr. Manjunath and Mr. Devaraj were in constant touch with updates and completed the work within the agreed delivery time.",
  },
  {
    name: "Jayarama Raju",
    text: "Installation was done perfectly. Vasanth from Veer Windows exhibited great professionalism in the service and responded to all the queries.",
  },
  {
    name: "Punithraj Shetty",
    text: "It has been a year since we installed uPVC windows from Veer Windows in our new home in Mangalore. I am satisfied with the material quality and service.",
  },
  {
    name: "Chandrasekhar Baruah",
    text: "I got the uPVC doors and windows done by Veer Windows. They did a good job with quality and schedule adherence, and the after-sales support has been prompt.",
  },
];

const VENTURES = [
  "uPVC Windows",
  "System Aluminium",
  "Facade Systems",
  "Sliding Doors",
  "Casement Doors",
  "Parallel Windows",
  "Pivot Windows",
  "Fold & Slide",
];

function StarRating() {
  return (
    <div className="flex gap-1 text-primary" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-current" />
      ))}
    </div>
  );
}

function LogoMarquee({ items }: { items: string[] }) {
  return (
    <div className="w-full max-w-full overflow-hidden border-y border-border py-6">
      <div className="flex w-max animate-marquee-slow gap-5">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex h-20 w-44 shrink-0 items-center justify-center border border-border bg-background px-5 text-center text-xs font-black uppercase tracking-[0.08em] text-heading sm:w-48 sm:px-8 sm:text-sm sm:tracking-[0.12em]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function PartnerLogoMarquee({
  items,
}: {
  items: {
    name: string;
    img: string;
  }[];
}) {
  return (
    <div className="w-full max-w-full overflow-hidden border-y border-border py-6">
      <div className="flex w-max animate-marquee-slow gap-5">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item.name}-${index}`}
            className="inline-flex h-24 w-44 shrink-0 items-center justify-center border border-border bg-background px-5 sm:w-56 sm:px-7"
          >
            <img
              src={item.img}
              alt={item.name}
              width={220}
              height={80}
              loading="lazy"
              className="max-h-16 w-auto max-w-44 object-contain"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function FeatureHighlights() {
  return (
    <section className="bg-background py-10">
      <div className="mx-auto grid max-w-[1400px] gap-px border border-border bg-border px-0 sm:grid-cols-3">
        {FEATURE_HIGHLIGHTS.map(({ icon: Icon, label }, index) => (
          <Reveal
            key={label}
            delay={index * 100}
            className="flex items-center gap-5 bg-background p-7 sm:p-9"
          >
            <span className="flex size-14 shrink-0 items-center justify-center bg-primary text-primary-foreground">
              <Icon className="size-7 stroke-[1.7]" />
            </span>
            <h2 className="text-xl font-black leading-tight">{label}</h2>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function VideoSection() {
  return (
    <section className="section bg-secondary">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal className="overflow-hidden bg-ink">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/VMJiP3sTiBk?si=5Jtc31ONLlulpTEl"
              title="Veer Windows uPVC, System Aluminium Windows and Doors"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function VeerWindowsAbout() {
  return (
    <section id="about" className="section">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal from="left" className="grid grid-cols-2 gap-4">
          <img
            src={aboutInstall.src}
            alt="uPVC and aluminium window installation"
            width={1024}
            height={1280}
            loading="lazy"
            className="h-[520px] w-full object-cover"
          />
          <img
            src={aboutDetail.src}
            alt="Close-up of aluminium window frame detail"
            width={1024}
            height={768}
            loading="lazy"
            className="mt-14 h-[420px] w-full object-cover"
          />
        </Reveal>

        <Reveal from="right" delay={120}>
          <span className="eyebrow">
            <span className="h-px w-8 bg-primary" />
            About Us
          </span>
          <h2 className="mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            Welcome To Veer Windows
          </h2>
          <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground">
            Veer Windows is one of the most credible uPVC, Aluminium windows and Doors manufacturer
            in Bengaluru, Karnataka. Veer Windows has a presence in Hassan, Mangaluru, Mysure,
            Chikkamagaluru, Hubli, Shivamogga, Davanagere, Hospet, Kalaburagi, Tumakuru, Ballari,
            Belagavi, Vijayapura, Kolar, Anantapur and Kurnool. We deal with the entire range of
            available uPVC, Aluminium windows and doors and guarantee the best product available in
            the market till date.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Our products are made with the best available material and use the best workforce to
            give you the experience you are looking for.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            We are a very experienced team of engineers who engineer, design, and install aluminium
            systems for complicated facades or special envelopes for buildings.
          </p>

          <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
            <div className="bg-background p-6">
              <h3 className="text-sm font-black uppercase tracking-[0.16em] text-primary">
                Vision
              </h3>
              <ul className="mt-5 space-y-4">
                {VISION_POINTS.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-7 text-muted-foreground">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-sm font-black uppercase tracking-[0.16em] text-primary">
                Mission
              </h3>
              <ul className="mt-5 space-y-4">
                {MISSION_POINTS.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-7 text-muted-foreground">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {ABOUT_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-lg font-bold text-heading">
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                {point}
              </li>
            ))}
          </ul>

          <a
            href="/contact"
            className="btn-sweep mt-9 inline-flex bg-primary px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-foreground"
          >
            Contact Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function ProductsGrid() {
  return (
    <section id="portfolio" className="section bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal from="left">
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary" />
              Product Range
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">Our Products</h2>
          </Reveal>
          <Reveal from="right" delay={120} className="flex flex-wrap gap-3">
            {["Windows", "Doors", "Aluminium"].map((tab) => (
              <a
                key={tab}
                href="#portfolio"
                className="border border-border bg-background px-5 py-3 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {tab}
              </a>
            ))}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, index) => (
            <Reveal
              as="article"
              key={product.title}
              delay={(index % 4) * 90}
              className="group relative overflow-hidden bg-background"
            >
              <img
                src={product.img}
                alt={product.title}
                width={900}
                height={1100}
                loading="lazy"
                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <a
                href="/contact"
                aria-label={`Explore ${product.title}`}
                className="absolute right-5 top-5 flex size-12 items-center justify-center bg-primary text-primary-foreground transition-transform group-hover:rotate-90"
              >
                <Plus className="size-6" />
              </a>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/55 to-transparent p-6">
                <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-primary-soft">
                  {product.category}
                </span>
                <h3 className="mt-2 flex items-center justify-between gap-3 text-xl text-ink-foreground">
                  {product.title}
                  <ArrowUpRight className="size-5 shrink-0" />
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LogoSliders() {
  return (
    <section className="section overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6">
        <Reveal className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">Quality Partner&apos;s</h2>
          <div className="mt-7 min-w-0">
            <PartnerLogoMarquee items={PARTNER_LOGOS} />
          </div>
        </Reveal>

        <Reveal delay={140} className="min-w-0">
          <h2 className="text-3xl sm:text-4xl">Our Esteem Clients</h2>
          <div className="mt-7 min-w-0">
            <LogoMarquee items={CLIENT_LOGOS} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TextTestimonialsCarousel() {
  return (
    <section className="section bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-primary" />
            Testimonials
          </span>
          <h2 className="mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            Trusted by More Than 3k Clients
          </h2>
        </Reveal>

        <div className="mt-14 overflow-hidden">
          <div className="flex w-max animate-testimonial-carousel gap-6">
            {[...REVIEWS, ...REVIEWS].map((review, index) => (
              <figure
                key={`${review.name}-${index}`}
                className="flex min-h-80 w-[min(82vw,390px)] flex-col justify-between bg-background p-8"
              >
                <StarRating />
                <blockquote className="mt-6 text-base leading-7 text-muted-foreground">
                  {review.text}
                </blockquote>
                <figcaption className="mt-8 text-sm font-extrabold uppercase tracking-[0.16em] text-heading">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function VideoTestimonialSection() {
  return (
    <section className="section">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-primary" />
            Video Feedback
            <span className="h-px w-8 bg-primary" />
          </span>
          <h2 className="mt-6 text-3xl sm:text-5xl">
            Thanks to Manjunath Sir for sharing his feedback.
          </h2>
        </Reveal>
        <Reveal delay={140} className="mt-12 overflow-hidden bg-ink text-left">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/-BxKIRlnhNw?si=nP7hd6BBAsNYsTgG"
              title="Thanking Manjunath Sir for his feedback"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="p-5 text-sm font-bold uppercase tracking-[0.14em] text-ink-foreground/75">
            Thanking Manjunath Sir for his feedback
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Ventures() {
  return (
    <section id="ventures" className="section bg-secondary">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6">
        <Reveal className="bg-background p-8 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="eyebrow">
                <span className="h-px w-8 bg-primary" />
                Ventures
              </span>
              <h2 className="mt-5 text-4xl sm:text-5xl">Advanced Ventures</h2>
            </div>
            <BadgeCheck className="size-14 text-primary" />
          </div>
          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {VENTURES.map((venture) => (
              <a
                key={venture}
                href="/contact"
                className="group flex min-h-32 items-center gap-4 bg-background p-6 transition-colors hover:bg-primary"
              >
                <span className="flex size-12 shrink-0 items-center justify-center bg-secondary text-primary group-hover:bg-primary-foreground group-hover:text-primary">
                  <ShieldCheck className="size-6" />
                </span>
                <span className="font-black uppercase tracking-[0.08em] text-heading group-hover:text-primary-foreground">
                  Veer Windows
                  <span className="mt-1 block text-xs font-bold text-muted-foreground group-hover:text-primary-foreground/75">
                    {venture}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
