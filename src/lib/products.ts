export type ProductVariant = {
  name: string;
  description: string;
  image: string;
};

export type Product = {
  slug: string;
  family: "upvc" | "system-aluminium";
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string;
  variants: ProductVariant[];
  benefits: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "casement-windows-doors",
    family: "upvc",
    eyebrow: "Window & door systems",
    title: "Casement Windows & Doors",
    description: "Precision in every opening.",
    image: "/sliders/1.png",
    imageAlt: "Modern casement window and door installation",
    intro:
      "High-performance hinged systems that bring generous daylight, dependable ventilation, and a clean architectural finish to every room.",
    variants: [
      {
        name: "Single Casement Window",
        image: "/products/single-casement-window.jpg",
        description:
          "A practical inward or outward opening window designed for natural ventilation and easy everyday use.",
      },
      {
        name: "Double Casement Window",
        image: "/products/double-casement-window.jpg",
        description:
          "Two opening sashes provide wider ventilation and a balanced, symmetrical look.",
      },
      {
        name: "Fixed Window",
        image: "/products/combination-casement.jpg",
        description: "A clear, non-opening panel for uninterrupted views and additional daylight.",
      },
      {
        name: "Top-Hung Window",
        image: "/products/top-hung-window.jpg",
        description:
          "A top-hinged opening that supports ventilation while helping protect the interior from rain.",
      },
      {
        name: "Ventilator Window",
        image: "/products/ventilator-window.jpg",
        description:
          "Compact ventilation for kitchens, bathrooms, and utility spaces where controlled airflow matters.",
      },
    ],
    benefits: [
      "Slim, durable profiles",
      "Smooth, secure hardware",
      "Made-to-measure fabrication",
      "Professional installation",
    ],
  },
  {
    slug: "slide-fold-systems",
    family: "upvc",
    eyebrow: "Wide-opening systems",
    title: "Slide & Fold Systems",
    description: "Open spaces without boundaries.",
    image: "/sliders/2.png",
    imageAlt: "Slide and fold glass doors opening to a terrace",
    intro:
      "Multi-panel systems designed to connect interiors and exteriors. Panels glide smoothly, then fold away neatly to create a wider, more open living space.",
    variants: [
      {
        name: "Slide & Fold Door",
        image: "/products/slide-fold-door.jpg",
        description:
          "Flexible folding panels that open large elevations while keeping the closed system elegant and weather-resistant.",
      },
      {
        name: "Slide & Fold Window",
        image: "/products/slide-fold-window.jpg",
        description:
          "A compact, light-filled solution for rooms that need flexible ventilation and a wider view.",
      },
    ],
    benefits: [
      "Large uninterrupted openings",
      "Smooth-running panel systems",
      "Space-saving operation",
      "Suitable for residential and commercial spaces",
    ],
  },
  {
    slug: "sliding-windows-doors",
    family: "upvc",
    eyebrow: "Sliding systems",
    title: "Sliding Windows & Doors",
    description: "Smooth movement. Practical everyday performance.",
    image: "/hero/upvc-sliding-window-1.png",
    imageAlt: "Modern uPVC sliding window system",
    intro:
      "Space-efficient sliding systems with smooth operation, generous glass areas, and optional mesh protection for comfortable ventilation.",
    variants: [
      {
        name: "2 Track Sliding Window",
        image: "/products/2-track-window.jpg",
        description:
          "Slim, practical, and two-track sliding window design with smooth operation, minimal maintenance, and a clear outside view.",
      },
      {
        name: "2 Track Sliding Door",
        image: "/products/2-track-door.jpg",
        description:
          "A functional two-track sliding door for balconies, patios, and larger openings where effortless access and daylight matter.",
      },
      {
        name: "3 Track - 2 Glass, 1 Mesh",
        image: "/products/3-track-2-glass-1-mesh.jpg",
        description:
          "Two sliding glass panels and one mesh panel provide flexible ventilation while helping keep insects outside.",
      },
      {
        name: "3 Track - 4 Glass, 2 Mesh",
        image: "/products/3-track-4-glass-2-mesh.jpg",
        description:
          "Four sliding glass panels with mesh protection on both sides create maximum airflow and broad opening flexibility.",
      },
    ],
    benefits: [
      "Smooth, space-saving operation",
      "Optional integrated mesh",
      "Large glazed areas",
      "Low-maintenance profiles",
    ],
  },
  {
    slug: "versatile-window-systems",
    family: "upvc",
    eyebrow: "Ventilation-first design",
    title: "Versatile Window Systems",
    description: "Smart openings for modern spaces.",
    image: "/sliders/4.png",
    imageAlt: "Tilt and turn window in a bright modern interior",
    intro:
      "Flexible window formats for homes and workspaces that need both controlled airflow and a refined, contemporary profile.",
    variants: [
      {
        name: "Tilt & Turn Window",
        image: "/products/tilt-turn-window.jpg",
        description:
          "Dual opening positions allow secure top ventilation or full inward opening for cleaning and airflow.",
      },
      {
        name: "Top-Hung Window",
        image: "/products/versatile-top-hung-window.jpg",
        description:
          "A practical top-hung format providing controlled airflow with a modern, minimal appearance.",
      },
      {
        name: "Tilt & Slide Door",
        image: "/products/low-threshold-sliding-door.jpg",
        description:
          "A flexible glazed door that tilts for secure ventilation and slides aside for easy access without occupying interior space.",
      },
    ],
    benefits: [
      "Two opening modes",
      "Easy cleaning access",
      "Controlled ventilation",
      "Contemporary profile design",
    ],
  },
  {
    slug: "combination-windows",
    family: "upvc",
    eyebrow: "Composed fenestration",
    title: "Combination Windows",
    description: "One elevation, multiple possibilities.",
    image: "/sliders/5.png",
    imageAlt: "Combination window installation with fixed and opening panels",
    intro:
      "Combine fixed, opening, sliding, and door elements into one considered elevation. These systems make it easier to balance daylight, ventilation, views, and access.",
    variants: [
      {
        name: "Casement, Fixed & Openable",
        image: "/products/combination-casement.jpg",
        description:
          "A coordinated combination for generous glazing with precisely placed ventilation panels.",
      },
      {
        name: "Fixed & Sliding Windows",
        image: "/products/fixed-sliding-window.jpg",
        description:
          "Pair uninterrupted fixed glass with smooth sliding panels for a balanced, practical elevation.",
      },
      {
        name: "French Window",
        image: "/products/french-window-door.jpg",
        description:
          "A classic paired-opening window that brings balanced proportions, generous ventilation, and uninterrupted views.",
      },
      {
        name: "French Door",
        image: "/products/french-window-door.jpg",
        description:
          "Classic double-opening doors that extend views and create a welcoming connection to the outdoors.",
      },
    ],
    benefits: [
      "Designed as one composition",
      "Flexible panel configurations",
      "Consistent sightlines",
      "Custom sizes and layouts",
    ],
  },
  {
    slug: "advanced-door-systems",
    family: "upvc",
    eyebrow: "Door systems",
    title: "Advanced Door Systems",
    description: "Seamless access. Flexible living.",
    image: "/sliders/6.png",
    imageAlt: "Contemporary sliding and folding door system",
    intro:
      "Door systems that make everyday movement feel effortless, with durable construction and wide glazed openings for a stronger connection to the outdoors.",
    variants: [
      {
        name: "Low Threshold Sliding Door",
        image: "/products/low-threshold-sliding-door.jpg",
        description:
          "A slim, easy-access threshold paired with smooth sliding panels for a refined indoor-outdoor transition.",
      },
      {
        name: "Slide & Fold Doors",
        image: "/products/advanced-slide-fold-door.jpg",
        description:
          "Multi-panel folding doors that open wide and stack neatly when you want the room to breathe.",
      },
    ],
    benefits: [
      "Low-threshold access",
      "Smooth and quiet movement",
      "Secure locking systems",
      "Designed for large openings",
    ],
  },
  {
    slug: "system-aluminium-series",
    family: "system-aluminium",
    eyebrow: "System aluminium",
    title: "System Aluminium Series",
    description: "Slim frames. Strong performance.",
    image: "/sliders/9.png",
    imageAlt: "Slim aluminium sliding window and door systems",
    intro:
      "A refined aluminium range for projects that call for narrow sightlines, generous glass, and durable performance across windows and doors.",
    variants: [
      {
        name: "Aluminium Sliding Window",
        image: "/products/aluminium-sliding-window.jpg",
        description:
          "Slim profiles and smooth operation create a light, contemporary window with a generous glazed area.",
      },
      {
        name: "Aluminium Sliding Door",
        image: "/products/aluminium-sliding-door.jpg",
        description:
          "Wide glazed panels with durable aluminium framing for effortless movement and expansive views.",
      },
    ],
    benefits: [
      "Slim, strong aluminium profiles",
      "Generous glass areas",
      "Durable powder-coated finishes",
      "Built for modern elevations",
    ],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}

export const PRODUCT_FAMILIES = {
  upvc: {
    slug: "upvc",
    eyebrow: "uPVC product range",
    title: "uPVC Windows & Doors",
    description: "Comfort, light, and dependable performance for everyday living.",
    intro:
      "Explore Veer Windows uPVC systems, from practical casement windows and ventilators to wide-opening slide and fold doors. Every system is made to measure and installed with care.",
    image: "/sliders/1.png",
  },
  "system-aluminium": {
    slug: "system-aluminium",
    eyebrow: "System aluminium product range",
    title: "System Aluminium Series",
    description: "Slim frames. Strong performance. Expansive views.",
    intro:
      "Our system aluminium range brings narrow sightlines, durable finishes, and generous glass areas to contemporary windows and doors.",
    image: "/sliders/9.png",
  },
} as const;

export function getProductsByFamily(family: Product["family"]) {
  return PRODUCTS.filter((product) => product.family === family);
}

export const GLASS_OPTIONS = [
  {
    name: "Clear Glass",
    image: "/products/clear-glass.jpg",
    description: "Maximum transparency for brighter interiors and uninterrupted outdoor views.",
    appearance: "bg-gradient-to-br from-sky-100/80 via-white/50 to-sky-200/80",
  },
  {
    name: "Toughened Glass",
    image: "/products/toughened-glass.jpg",
    description: "Heat-treated safety glass engineered for greater strength and impact resistance.",
    appearance: "bg-gradient-to-br from-emerald-100/70 via-white/40 to-emerald-300/60",
  },
  {
    name: "DGU Glass",
    image: "/products/dgu-glass.jpg",
    description: "Double-glazed construction that supports thermal comfort and noise reduction.",
    appearance: "bg-gradient-to-r from-slate-200 via-white to-slate-300",
  },
  {
    name: "Laminated Glass",
    image: "/products/laminated-glass.jpg",
    description: "Bonded glass layers improve safety, security, and acoustic performance.",
    appearance: "bg-gradient-to-br from-cyan-100 via-white/60 to-blue-200",
  },
  {
    name: "Pinhead Glass",
    image: "/products/pinhead-glass.jpg",
    description: "Textured decorative glass that adds privacy while allowing softened daylight.",
    appearance:
      "bg-[radial-gradient(circle,_rgba(255,255,255,.9)_1px,_rgba(148,163,184,.35)_2px)] bg-[size:8px_8px]",
  },
  {
    name: "Frosted Glass",
    image: "/products/frosted-glass.jpg",
    description: "Diffused glass for privacy in bathrooms, offices, and entrance areas.",
    appearance: "bg-gradient-to-br from-slate-100 via-slate-200 to-white",
  },
  {
    name: "Tinted Glass",
    image: "/products/tinted-glass.jpg",
    description: "Reduces glare and solar heat while adding a composed exterior appearance.",
    appearance: "bg-gradient-to-br from-slate-500 via-slate-300 to-sky-200",
  },
] as const;
