import { Reveal } from "./Reveal";
import aboutInstall from "@/assets/about-install.jpg";
import aboutDetail from "@/assets/about-detail.jpg";

const STATS = [
  { value: "1.2k+", label: "Projects Completed" },
  { value: "890+", label: "Windows Installed" },
  { value: "740+", label: "Happy Clients" },
  { value: "25+", label: "Years Of Craft" },
];

export function About() {
  return (
    <section className="section">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal as="span" className="eyebrow">
          <span className="h-px w-8 bg-primary" />
          About Company
        </Reveal>
        <Reveal
          delay={120}
          as="h2"
          className="mt-6 block max-w-3xl text-4xl sm:text-5xl lg:text-6xl"
        >
          Dedicated to elevating every space we touch.
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            We are a dedicated team of engineers and industry experts committed to transforming
            spaces with high-performance fenestration. With a collective experience of over 9 years,
            we bring technical precision and aesthetic elegance to every project. Originally founded
            in 2022 as Veer Infratech, we have rebranded as Veer Windows Private Limited to sharpen
            our focus on our specialized expertise: high-quality uPVC and System Aluminium windows
            and doors.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal from="left" className="h-full">
            <img
              src={aboutInstall.src}
              alt="Installer fitting a large black-framed window in a renovated home"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full max-h-[560px] w-full object-cover"
            />
          </Reveal>

          <Reveal from="right" delay={140} className="flex flex-col justify-between gap-8">
            <div>
              <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                Founder&apos;s Desk
              </h3>
              <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
                <img
                  src="/veerwindows-founder.png"
                  alt="Kiran Balapur — Founder of Veer Windows"
                  width={320}
                  height={400}
                  loading="lazy"
                  className="aspect-[3/4] w-full max-w-[220px] object-cover"
                />
                <div>
                  <span className="block text-lg font-bold">Kiran Balapur</span>
                  <span className="block text-sm text-muted-foreground">
                    Founder — Veer Windows
                  </span>
                  <p className="mt-4 text-muted-foreground">
                    The company is led by Kiran Balapur, a Mechanical Engineer with 9 years of
                    comprehensive industry experience.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground">
                Having spent 5 years with a reputed firm before transitioning to freelance
                consultancy, Kiran has extensive experience ranging from sales leadership to
                high-level technical execution.
              </p>
              <a
                href="/projects"
                className="mt-8 inline-block border-2 border-foreground px-8 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-background"
              >
                Discover More
              </a>
            </div>
            <img
              src={aboutDetail.src}
              alt="Close-up of a black aluminium window frame corner"
              width={1024}
              height={768}
              loading="lazy"
              className="h-64 w-full object-cover"
            />
          </Reveal>
        </div>

        <dl className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 110} className="bg-background p-8">
              <dt className="text-4xl font-black tracking-tight">{stat.value}</dt>
              <dd className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
