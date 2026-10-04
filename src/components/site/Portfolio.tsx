import { Reveal } from "./Reveal";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const PROJECT_NAMES = [
  "HMT",
  "Hassan",
  "Even Hospital",
  "Welfare PG",
  "Adugodi Lodge",
  "Gulbarga Hospital",
  "Kote, Vidyaranyapura",
  "Srinagarapura, Pavan",
  "Kughal Ramesh",
  "Bijapura",
  "Akshayanagar Apartment",
  "CP PF, Yelahanka",
  "Rajan Gompura",
  "ARTENA, RR Nagar",
];

const PROJECT_IMAGES = [p1.src, p2.src, p3.src, p4.src, p5.src, p6.src];

const PROJECTS = PROJECT_NAMES.map((title, index) => ({
  title,
  img: PROJECT_IMAGES[index % PROJECT_IMAGES.length]!,
}));

export function Portfolio() {
  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal as="span" className="eyebrow">
          {" "}
          Our Projects
        </Reveal>
        <Reveal
          delay={120}
          as="h2"
          className="mt-6 block max-w-3xl text-4xl sm:text-5xl lg:text-6xl"
        >
          Project locations and installations.
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Reveal
              as="article"
              key={project.title}
              delay={(index % 3) * 130}
              className="group overflow-hidden border border-border bg-background transition-colors duration-300 hover:border-primary"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={project.img}
                  alt={`Temporary portfolio image for ${project.title}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="min-h-32 p-5 sm:p-6">
                <h3 className="mt-3 text-xl font-semibold leading-snug text-heading transition-colors duration-200 group-hover:text-primary">
                  {project.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
