import { Reveal } from "./Reveal";
import { ProjectPhotoSlider } from "./ProjectPhotoSlider";

const PROJECTS = [
  {
    title: "Basaveshwara Hospital",
    location: "Kalburgi",
    images: [
      {
        src: "/projects/basaveshwara-hospital-kalaburagi.webp",
        alt: "Window installation inside Basaveshwara Hospital",
      },
      {
        src: "/projects/basaveshwara-hospital-kalaburagi-02.webp",
        alt: "Basaveshwara Hospital exterior",
      },
      {
        src: "/projects/basaveshwara-hospital-kalaburagi-03.webp",
        alt: "Basaveshwara Hospital in Kalaburagi",
      },
    ],
  },
  {
    title: "Nagaraj · Godrej Gold County",
    location: "Bangalore",
    images: [
      {
        src: "/projects/nagaraj-godrej-gold-county.webp",
        alt: "Window installation at Godrej Gold County",
      },
      {
        src: "/projects/nagaraj-godrej-gold-county-02.webp",
        alt: "Interior window installation at Godrej Gold County",
      },
      {
        src: "/projects/nagaraj-godrej-gold-county-03.webp",
        alt: "Window detail at the Godrej Gold County residence",
      },
    ],
  },
  {
    title: "Krishna Prasad · Classic Orchid",
    location: "Bannerghatta Road, Bangalore",
    images: [
      {
        src: "/projects/krishna-prasad-classic-orchid.webp",
        alt: "Window installation at Classic Orchid",
      },
      {
        src: "/projects/krishna-prasad-classic-orchid-02.webp",
        alt: "Interior ceiling and window at Classic Orchid",
      },
      {
        src: "/projects/krishna-prasad-classic-orchid-03.webp",
        alt: "Sliding glass doors at Classic Orchid",
      },
    ],
  },
  {
    title: "Sameer Rao Residence",
    location: "Vidyaranyapura, Bangalore",
    images: [
      {
        src: "/projects/sameer-rao-vidyaranyapura.webp",
        alt: "Window installation at a Vidyaranyapura residence",
      },
      {
        src: "/projects/sameer-rao-vidyaranyapura-02.webp",
        alt: "Windows overlooking greenery in Vidyaranyapura",
      },
      {
        src: "/projects/sameer-rao-vidyaranyapura-03.webp",
        alt: "Window grille detail at a Vidyaranyapura residence",
      },
    ],
  },
  {
    title: "Trivikram Residence",
    location: "Kanaka Layout",
    images: [
      {
        src: "/projects/trivikram-kanaka-layout.webp",
        alt: "Window installation at a Kanaka Layout residence",
      },
      {
        src: "/projects/trivikram-kanaka-layout-02.webp",
        alt: "Interior windows at the Kanaka Layout residence",
      },
      {
        src: "/projects/trivikram-kanaka-layout-03.webp",
        alt: "Window and door installation in Kanaka Layout",
      },
    ],
  },
  {
    title: "Adv. Dwarakanath Residence",
    location: "Vijayanagar",
    images: [
      {
        src: "/projects/adv-dwarakanath-vijayanagar.webp",
        alt: "Interior at the Vijayanagar residence",
      },
      {
        src: "/projects/adv-dwarakanath-vijayanagar-02.webp",
        alt: "Interior woodwork at the Vijayanagar residence",
      },
      {
        src: "/projects/adv-dwarakanath-vijayanagar-03.webp",
        alt: "Workspace at the Vijayanagar residence",
      },
    ],
  },
  {
    title: "Kiran Desai Residence",
    location: "Nisarga Layout, Jigani",
    images: [
      {
        src: "/projects/kiran-desai-nisarga-layout-jigani.webp",
        alt: "Interior at the Nisarga Layout residence",
      },
      {
        src: "/projects/kiran-desai-nisarga-layout-jigani-02.webp",
        alt: "Window detail at the Nisarga Layout residence",
      },
      {
        src: "/projects/kiran-desai-nisarga-layout-jigani-03.webp",
        alt: "Balcony window at the Nisarga Layout residence",
      },
    ],
  },
] as const;

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
              <ProjectPhotoSlider images={project.images} projectName={project.title} />
              <div className="min-h-32 p-5 sm:p-6">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-primary">
                  Project installation
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-snug text-heading transition-colors duration-200 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.location}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
