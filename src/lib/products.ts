export type ProductVariant = {
  name: string;
  description: string;
  image: string;
  slug?: string;
};

export type Product = {
  slug: string;
  family: "upvc" | "system-aluminium";
  menuGroup?: "window" | "door";
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
    image: "/products/casement-window.jpg",
    imageAlt: "Brochure photograph of a black-framed casement window",
    intro:
      "Side-hinged windows and doors bring natural ventilation, clear views, and effortless access to everyday spaces.",
    variants: [
      {
        name: "Single Casement Window",
        image: "/products/single-casement-window.jpg",
        description:
          "A practical inward or outward opening window designed for natural ventilation, clear views, and secure everyday use.",
      },
      {
        name: "Double Casement Window",
        image: "/products/double-casement-window.jpg",
        description: "Two opening shutters provide a wider view and natural ventilation.",
      },
      {
        name: "Casement Door",
        image: "/products/casement-door.jpg",
        description:
          "Elegant hinged panels offer effortless access, abundant daylight, and lasting performance.",
      },
      {
        name: "Ventilator Window",
        image: "/products/ventilator-window.jpg",
        description:
          "A compact solution for kitchens and bathrooms, allowing fresh air while supporting privacy and moisture control.",
      },
      {
        name: "Top-Hung Window",
        image: "/products/top-hung-window.jpg",
        description:
          "Top hinges support outward opening, providing airflow while helping shield interiors from light rain.",
      },
    ],
    benefits: [
      "Side-hinged opening",
      "Natural ventilation and clear views",
      "Secure everyday use",
      "Window and door formats",
    ],
  },
  {
    slug: "slide-fold-systems",
    family: "upvc",
    eyebrow: "Wide-opening systems",
    title: "Slide & Fold Systems",
    description: "Open spaces without boundaries.",
    image: "/products/slide-fold-door.jpg",
    imageAlt: "Slide and fold glass doors opening to a terrace",
    intro:
      "Multi-panel systems designed to connect interiors and exteriors. Panels glide smoothly, then fold away neatly to create a wider, more open living space.",
    variants: [
      {
        name: "Slide & Fold Door",
        image: "/products/slide-fold-door.jpg",
        description:
          "Folding panels stack neatly to one side, creating a wide opening with natural light, ventilation, and flexibility.",
      },
      {
        name: "Slide & Fold Window",
        image: "/products/slide-fold-window.jpg",
        description:
          "Flexible folding panels open generously to improve airflow and provide uninterrupted views.",
      },
    ],
    benefits: [
      "Panels stack neatly to one side",
      "Wide openings",
      "Natural light and ventilation",
      "Door and window formats",
    ],
  },
  {
    slug: "sliding-windows-doors",
    family: "upvc",
    eyebrow: "Sliding systems",
    title: "Sliding Windows & Doors",
    description: "Smooth movement. Practical everyday performance.",
    image: "/products/catalogue-2-track-window.png",
    imageAlt: "Modern uPVC sliding window system",
    intro:
      "Sliding systems for window and door openings, available in different track arrangements.",
    variants: [
      {
        name: "2 Track Sliding Window",
        slug: "2-track-sliding-windows",
        image: "/products/catalogue-2-track-window.png",
        description: "A two-track sliding window option from the Veer Windows catalogue.",
      },
      {
        name: "2 Track Sliding Door",
        slug: "2-track-sliding-doors",
        image: "/products/catalogue-2-track-door.png",
        description: "A two-track sliding door option from the Veer Windows catalogue.",
      },
      {
        name: "2.5 Track Sliding Window",
        slug: "2-5-track-sliding-windows",
        image: "/products/catalogue-2-5-track.png",
        description: "A 2.5-track sliding window system, as shown in the Veer Windows catalogue.",
      },
      {
        name: "2.5 Track Sliding Door",
        slug: "2-5-track-sliding-doors",
        image: "/products/catalogue-2-5-track.png",
        description: "A 2.5-track sliding door system, as shown in the Veer Windows catalogue.",
      },
      {
        name: "3 Track Sliding Window",
        slug: "3-track-sliding-windows",
        image: "/products/catalogue-3-track.png",
        description: "A 3-track sliding window system, as shown in the Veer Windows catalogue.",
      },
      {
        name: "3 Track Sliding Door",
        slug: "3-track-sliding-doors",
        image: "/products/catalogue-3-track.png",
        description: "A 3-track sliding door system, as shown in the Veer Windows catalogue.",
      },
    ],
    benefits: [
      "Smooth sliding movement",
      "Natural ventilation",
      "Clear outside views",
      "Window and door formats",
    ],
  },
  {
    slug: "2-track-sliding-windows",
    family: "upvc",
    eyebrow: "uPVC sliding windows · 2 track",
    title: "2 Track Sliding Windows",
    description: "A smooth, space-conscious sliding window system.",
    image: "/products/catalogue-2-track-window.png",
    imageAlt: "Two-track uPVC sliding window from the Veer Windows catalogue",
    intro:
      "A two-track arrangement for sliding window panels, presented in the Veer Windows catalogue.",
    variants: [],
    benefits: [
      "Two-track sliding arrangement",
      "Space-saving horizontal opening",
      "Window configuration shown in the catalogue",
    ],
  },
  {
    slug: "2-track-sliding-doors",
    family: "upvc",
    eyebrow: "uPVC sliding doors · 2 track",
    title: "2 Track Sliding Doors",
    description: "An easy-gliding door system for everyday spaces.",
    image: "/products/catalogue-2-track-door.png",
    imageAlt: "Two-track uPVC sliding door from the Veer Windows catalogue",
    intro:
      "A two-track arrangement for sliding door panels, presented in the Veer Windows catalogue.",
    variants: [],
    benefits: [
      "Two-track sliding arrangement",
      "Space-saving horizontal opening",
      "Door configuration shown in the catalogue",
    ],
  },
  {
    slug: "2-5-track-sliding-windows",
    family: "upvc",
    eyebrow: "uPVC sliding windows · 2.5 track",
    title: "2.5 Track Sliding Windows",
    description: "A multi-track sliding window arrangement.",
    image: "/products/catalogue-2-5-track.png",
    imageAlt: "uPVC sliding system shown in the catalogue's 2.5-track range",
    intro:
      "The catalogue lists 2.5-track sliding windows as part of the uPVC sliding range. Final configuration is confirmed for each project.",
    variants: [],
    benefits: [
      "2.5-track window configuration",
      "Sliding opening",
      "Made-to-measure project planning",
    ],
  },
  {
    slug: "2-5-track-sliding-doors",
    family: "upvc",
    eyebrow: "uPVC sliding doors · 2.5 track",
    title: "2.5 Track Sliding Doors",
    description: "A multi-track sliding door arrangement.",
    image: "/products/catalogue-2-5-track.png",
    imageAlt: "uPVC sliding system shown in the catalogue's 2.5-track range",
    intro:
      "The catalogue lists 2.5-track sliding doors as part of the uPVC sliding range. Final configuration is confirmed for each project.",
    variants: [],
    benefits: [
      "2.5-track door configuration",
      "Sliding opening",
      "Made-to-measure project planning",
    ],
  },
  {
    slug: "3-track-sliding-windows",
    family: "upvc",
    eyebrow: "uPVC sliding windows · 3 track",
    title: "3 Track Sliding Windows",
    description: "A flexible three-track window system.",
    image: "/products/catalogue-3-track.png",
    imageAlt: "Three-track uPVC sliding window with glass and mesh panels",
    intro:
      "The catalogue shows a three-track sliding window system with glass and mesh panel arrangements.",
    variants: [],
    benefits: [
      "Three-track window configuration",
      "Glass and mesh panel arrangement shown in the catalogue",
      "Made-to-measure project planning",
    ],
  },
  {
    slug: "3-track-sliding-doors",
    family: "upvc",
    eyebrow: "uPVC sliding doors · 3 track",
    title: "3 Track Sliding Doors",
    description: "A wide-opening sliding door system.",
    image: "/products/catalogue-3-track.png",
    imageAlt: "Three-track uPVC sliding door with glass and mesh panels",
    intro:
      "The catalogue shows a three-track sliding door system with glass and mesh panel arrangements.",
    variants: [],
    benefits: [
      "Three-track door configuration",
      "Glass and mesh panel arrangement shown in the catalogue",
      "Made-to-measure project planning",
    ],
  },
  {
    slug: "versatile-window-systems",
    family: "upvc",
    eyebrow: "Ventilation-first design",
    title: "Versatile Window Systems",
    description: "Smart openings for modern spaces.",
    image: "/products/tilt-turn-window.jpg",
    imageAlt: "Tilt and turn window in a bright modern interior",
    intro:
      "Flexible window formats for homes and workspaces that need both controlled airflow and a refined, contemporary profile.",
    variants: [
      {
        name: "Tilt & Turn Window",
        image: "/products/tilt-turn-window.jpg",
        description:
          "Dual opening allows secure tilted ventilation and a wide inward opening for easy access.",
      },
      {
        name: "Top-Hung Window",
        image: "/products/top-hung-window.jpg",
        description:
          "Top hinges support outward opening, providing airflow while helping shield interiors from light rain.",
      },
    ],
    benefits: [
      "Tilted ventilation",
      "Wide inward opening",
      "Top-hung airflow",
      "Flexible opening options",
    ],
  },
  {
    slug: "combination-windows",
    family: "upvc",
    eyebrow: "Composed fenestration",
    title: "Combination Windows",
    description: "One elevation, multiple possibilities.",
    image: "/products/combination-casement.jpg",
    imageAlt: "Combination window installation with fixed and opening panels",
    intro:
      "Combine fixed glazing, openable casement shutters, and sliding panels to balance clear views, natural light, and controlled ventilation.",
    variants: [
      {
        name: "Casement, Fixed & Openable",
        image: "/products/combination-casement.jpg",
        description:
          "A flexible combination of fixed glazing and openable casement shutters, created for clear views, natural light, and controlled ventilation.",
      },
      {
        name: "Fixed & Sliding Windows",
        image: "/products/fixed-sliding-window.jpg",
        description:
          "Fixed panels provide uninterrupted views, while smooth sliding shutters offer practical ventilation and effortless everyday use.",
      },
      {
        name: "Ventilator Window",
        image: "/products/ventilator-window.jpg",
        description:
          "A ventilator window option included in the catalogue's combination window range.",
      },
      {
        name: "French Doors",
        image: "/products/french-window-door.jpg",
        description:
          "Classic double doors open from the centre, bringing generous natural light and elegant access to gardens, patios, and balconies.",
      },
    ],
    benefits: [
      "Fixed and openable panels",
      "Uninterrupted views",
      "Natural light",
      "Controlled ventilation",
    ],
  },
  {
    slug: "lift-and-slide-door",
    family: "upvc",
    eyebrow: "Special door system",
    title: "Lift & Slide Door",
    description: "A special door system in the uPVC range.",
    image: "/products/low-threshold-sliding-door.jpg",
    imageAlt: "Lift and slide door opening to an outdoor space",
    intro:
      "Lift & Slide Door is listed in the Veer Windows uPVC special door and window systems range.",
    variants: [],
    benefits: ["Lift & Slide door format", "Designed to connect interior and exterior spaces"],
  },
  {
    slug: "twin-sash-window",
    family: "upvc",
    eyebrow: "Special window system",
    title: "Twin Sash Window",
    description: "A special window system in the uPVC range.",
    image: "/products/versatile-top-hung-window.jpg",
    imageAlt: "Window in a modern home",
    intro:
      "Twin Sash Window is listed in the Veer Windows uPVC special door and window systems range.",
    variants: [],
    benefits: ["Twin sash window format", "Part of the uPVC special systems range"],
  },
  {
    slug: "advanced-door-systems",
    family: "upvc",
    eyebrow: "Door systems",
    title: "Advanced Door Systems",
    description: "Seamless access. Flexible living.",
    image: "/products/low-threshold-sliding-door.jpg",
    imageAlt: "Contemporary sliding and folding door system",
    intro:
      "Low-threshold sliding and multi-panel folding doors connect indoor and outdoor spaces with wide openings and easy access.",
    variants: [
      {
        name: "Low Threshold Sliding Door",
        image: "/products/low-threshold-sliding-door.jpg",
        description:
          "A slim, step-free threshold provides smooth access and an elegant connection between indoor and outdoor spaces.",
      },
      {
        name: "Slide & Fold Doors",
        image: "/products/advanced-slide-fold-door.jpg",
        description:
          "Multi-panel shutters fold neatly to one side, creating a wide opening with natural light, ventilation, and flexibility.",
      },
    ],
    benefits: [
      "Step-free threshold",
      "Smooth access",
      "Wide folding openings",
      "Natural light and ventilation",
    ],
  },
  {
    slug: "system-aluminium-series",
    family: "system-aluminium",
    eyebrow: "System aluminium sliding systems",
    title: "Sliding Windows & Doors",
    description: "Sliding openings for aluminium spaces.",
    image:
      "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1800",
    imageAlt: "Contemporary home with panoramic windows and glass doors",
    intro:
      "The Veer Windows catalogue includes sliding windows and sliding doors in its system aluminium range. Explore each format and contact our team to confirm the configuration for your project.",
    variants: [
      {
        name: "Sliding Window",
        image:
          "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description: "Sliding window format listed in the Veer Windows System Aluminium catalogue.",
      },
      {
        name: "Sliding Door",
        image:
          "https://images.pexels.com/photos/7601181/pexels-photo-7601181.jpeg?auto=compress&cs=tinysrgb&w=1200",
        description: "Sliding door format listed in the Veer Windows System Aluminium catalogue.",
      },
    ],
    benefits: [
      "Sliding window format",
      "Sliding door format",
      "Part of the System Aluminium range",
    ],
  },
  {
    slug: "system-aluminium-53-series-casement-window",
    family: "system-aluminium",
    menuGroup: "window",
    eyebrow: "Aluminium window system",
    title: "53 Series Casement Window",
    description: "Everyday casement performance with a considered profile.",
    image: "/products/casement-window.jpg",
    imageAlt: "Aluminium casement window in a contemporary home",
    intro:
      "A value-focused aluminium casement system for residential and commercial projects, with ventilation, weather resistance, and glazing options for different requirements.",
    variants: [],
    benefits: [
      "Excellent ventilation and clear views",
      "Easy-to-operate casement opening",
      "Weather resistance and noise reduction",
      "Low-maintenance, versatile design",
    ],
  },
  {
    slug: "system-aluminium-vertical-sliding-window",
    family: "system-aluminium",
    menuGroup: "window",
    eyebrow: "Aluminium window system",
    title: "Vertical Sliding Window",
    description: "A classic sash look with a space-saving vertical opening.",
    image: "/products/versatile-top-hung-window.jpg",
    imageAlt: "Open window in a bright modern interior",
    intro:
      "A vertically operated sash window suited to tall or narrow openings. A fixed upper light and sliding lower sash make ventilation easy to control without using extra room space.",
    variants: [],
    benefits: [
      "Designed for narrow, tall openings",
      "Sliding lower sash with fixed upper light",
      "Optional fixed fly screen",
      "Spiral balances and Espagnolette locking",
    ],
  },
  {
    slug: "system-aluminium-pivot-window",
    family: "system-aluminium",
    menuGroup: "window",
    eyebrow: "Aluminium window system",
    title: "Pivot Window",
    description: "A central pivot creates a distinctive, generous opening.",
    image: "/products/tilt-turn-window.jpg",
    imageAlt: "Modern window in a contemporary interior",
    intro:
      "The sash rotates around a central pivot instead of side hinges. Choose a vertical or horizontal pivot direction for a distinctive opening and convenient access for cleaning.",
    variants: [],
    benefits: [
      "Vertical or horizontal pivot opening",
      "Opening can be controlled to suit the space",
      "Designed for convenient operation and cleaning",
    ],
  },
  {
    slug: "system-aluminium-tilt-turn-window",
    family: "system-aluminium",
    menuGroup: "window",
    eyebrow: "Aluminium window system",
    title: "Tilt & Turn Window",
    description: "Two opening modes for controlled airflow and easy access.",
    image: "/products/tilt-turn-window.jpg",
    imageAlt: "Tilt and turn aluminium window in a modern interior",
    intro:
      "Tilt the sash inward for controlled ventilation or turn it inward for a wider opening and convenient cleaning. Concealed hinges keep the closed-window appearance clean.",
    variants: [],
    benefits: [
      "Tilt position for draft-free ventilation",
      "Turn position for a wide opening",
      "Concealed hinges",
      "Multiple locking points",
    ],
  },
  {
    slug: "system-aluminium-parallel-window",
    family: "system-aluminium",
    menuGroup: "window",
    eyebrow: "Aluminium window system",
    title: "Parallel Window",
    description: "Secure ventilation with an inward or outward opening.",
    image: "/products/casement-window.jpg",
    imageAlt: "Modern aluminium window with a clean, minimal frame",
    intro:
      "A parallel opening moves the sash away from the frame while keeping it aligned. This supports controlled airflow while maintaining a clean, contemporary appearance.",
    variants: [],
    benefits: [
      "Inward or outward opening",
      "Multi-point locking",
      "Smooth operation",
      "Designed for ventilation in demanding weather conditions",
    ],
  },
  {
    slug: "system-aluminium-perfection-slide-door",
    family: "system-aluminium",
    menuGroup: "door",
    eyebrow: "Aluminium door system",
    title: "Perfection Slide Door",
    description: "Minimal sightlines for wide, light-filled openings.",
    image: "/products/aluminium-sliding-door.jpg",
    imageAlt: "Minimal aluminium sliding door opening onto a terrace",
    intro:
      "The Perfection Slide system is presented as an aluminium sliding door option for wide glazed openings.",
    variants: [],
    benefits: [
      "Sliding door format",
      "Large glazed areas",
      "Designed to connect interior and exterior spaces",
    ],
  },
  {
    slug: "system-aluminium-70-series-sliding-door",
    family: "system-aluminium",
    menuGroup: "door",
    eyebrow: "Aluminium door system",
    title: "70 Series Sliding Door",
    description: "Smooth inline movement with flexible panel layouts.",
    image: "/products/aluminium-sliding-door.jpg",
    imageAlt: "Aluminium sliding door system with large glass panels",
    intro:
      "A slim sliding system available with thermal-break or non-thermal-break profiles. Two-, three-, and four-panel configurations bring daylight into living areas and connect them to the outdoors.",
    variants: [],
    benefits: [
      "Inline panels save opening space",
      "Smooth operation and multi-point locking",
      "Two-, three-, or four-panel layouts",
      "Optional mesh sash configurations",
    ],
  },
  {
    slug: "system-aluminium-lift-slide-door",
    family: "system-aluminium",
    menuGroup: "door",
    eyebrow: "Aluminium door system",
    title: "Lift & Slide Door",
    description: "A Lift & Slide door option.",
    image: "/products/low-threshold-sliding-door.jpg",
    imageAlt: "Lift and slide door in a contemporary setting",
    intro:
      "The Veer Windows catalogue lists Lift & Slide Door in its uPVC special systems range. It does not document a System Aluminium version, so confirm material availability and configuration with our team.",
    variants: [],
    benefits: [
      "Listed in the Veer catalogue as a uPVC special system",
      "Confirm aluminium availability with our team",
    ],
  },
  {
    slug: "system-aluminium-fold-slide-door",
    family: "system-aluminium",
    menuGroup: "door",
    eyebrow: "Aluminium door system",
    title: "Fold & Slide Door",
    description: "Fold panels to the side for a wide, open threshold.",
    image: "/products/slide-fold-door.jpg",
    imageAlt: "Folding aluminium glass doors opening onto an outdoor space",
    intro:
      "Bi-fold panels fold laterally and stack to one side, opening a broad passage between indoor and outdoor living areas while keeping the panels neatly out of the way.",
    variants: [],
    benefits: [
      "Two- to six-panel layouts",
      "Folds inward or outward",
      "High-security hinges and locking",
      "Smooth roller operation",
    ],
  },
  {
    slug: "system-aluminium-casement-door",
    family: "system-aluminium",
    menuGroup: "door",
    eyebrow: "Aluminium door system",
    title: "Casement Door",
    description: "A slender hinged door profile with expansive glazing.",
    image: "/products/casement-door.jpg",
    imageAlt: "Minimal aluminium casement door with full-height glazing",
    intro:
      "A hinged aluminium door system with a glazed format for residential and commercial spaces.",
    variants: [],
    benefits: [
      "Hinged door format",
      "Glazed design",
      "Suitable for residential and commercial spaces",
    ],
  },
  {
    slug: "system-aluminium-facade-system",
    family: "system-aluminium",
    menuGroup: "door",
    eyebrow: "Aluminium façade system",
    title: "Facade System",
    description: "A glazed mullion-and-transom system for expressive elevations.",
    image:
      "https://images.pexels.com/photos/9901861/pexels-photo-9901861.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Glazed aluminium facade with a clean architectural grid",
    intro:
      "A non-insulated aluminium mullion-and-transom system for vertical and sloped façades, roofs, cupolas, and other architectural forms. Cover caps and narrow face widths keep the exterior lines restrained.",
    variants: [],
    benefits: [
      "Vertical, sloped, and roof applications",
      "Designed to bring light into building spaces",
      "Architectural aluminium system",
    ],
  },
  {
    slug: "system-aluminium-railing-system",
    family: "system-aluminium",
    menuGroup: "door",
    eyebrow: "Aluminium railing system",
    title: "Railing System",
    description: "Glass railings that preserve light and open views.",
    image:
      "https://images.pexels.com/photos/10420335/pexels-photo-10420335.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Modern home exterior with glass balcony railings",
    intro:
      "A glass railing system designed to keep balconies and stairs visually open. Clear panels admit light, are easy to maintain, and pair with several handrail and bottom-rail options.",
    variants: [],
    benefits: [
      "Keeps views and daylight open",
      "Suitable for contemporary interiors",
      "Easy to clean and maintain",
      "Designed for safe, secure use",
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
    image: "/products/casement-window.jpg",
  },
  "system-aluminium": {
    slug: "system-aluminium",
    eyebrow: "System aluminium product range",
    title: "System Aluminium Series",
    description: "Explore the window and door systems in the aluminium range.",
    intro:
      "The Veer Windows catalogue shows system aluminium casement and sliding windows and doors, along with combination windows and slide and fold doors.",
    image:
      "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },
} as const;

export function getProductsByFamily(family: Product["family"]) {
  return PRODUCTS.filter(
    (product) =>
      product.family === family &&
      !(family === "system-aluminium" && product.slug === "system-aluminium-series"),
  );
}

export const FINISH_OPTIONS = [
  { name: "Nut Tree", group: "Natura", swatch: "linear-gradient(135deg,#4b2d20,#8d5a38,#3a2219)" },
  {
    name: "Golden Oak",
    group: "Natura",
    swatch: "linear-gradient(135deg,#8a5425,#c38a4a,#714019)",
  },
  { name: "Cognac", group: "Natura", swatch: "linear-gradient(135deg,#69381f,#a45e31,#4e2819)" },
  {
    name: "Black Brown",
    group: "Natura",
    swatch: "linear-gradient(135deg,#181411,#3d3029,#161311)",
  },
  { name: "Alux DB", group: "Natura", swatch: "linear-gradient(135deg,#4b4b49,#77736c,#393a39)" },
  { name: "Wenge", group: "Natura", swatch: "linear-gradient(135deg,#241813,#5a3c30,#211511)" },
  {
    name: "Turner Oak Malt",
    group: "Wooddec",
    swatch: "linear-gradient(135deg,#b89872,#dfc5a3,#9c7651)",
  },
  {
    name: "Turner Oak Toffee",
    group: "Wooddec",
    swatch: "linear-gradient(135deg,#896343,#c39970,#6f4c34)",
  },
  {
    name: "Turner Oak Walnut",
    group: "Wooddec",
    swatch: "linear-gradient(135deg,#5d402f,#956b4c,#473025)",
  },
  {
    name: "Turner Oak Amber",
    group: "Wooddec",
    swatch: "linear-gradient(135deg,#9c6a36,#d1a063,#7e5129)",
  },
  {
    name: "Sheffield Oak",
    group: "Wooddec",
    swatch: "linear-gradient(135deg,#b6a78d,#e0d6c4,#94846d)",
  },
  { name: "Concrete", group: "Wooddec", swatch: "linear-gradient(135deg,#777873,#aaa9a3,#666761)" },
  {
    name: "Sheffield Oak Alpine",
    group: "Aludec",
    swatch: "linear-gradient(135deg,#d4c9b6,#f0e8db,#b3a58f)",
  },
  {
    name: "Anthracite Grey",
    group: "Aludec",
    swatch: "linear-gradient(135deg,#292d2f,#4b5153,#202426)",
  },
  { name: "Jet Black", group: "Aludec", swatch: "linear-gradient(135deg,#090a0a,#282a2b,#050606)" },
  { name: "DB 703", group: "Aludec", swatch: "linear-gradient(135deg,#393b3b,#686a69,#2d2f2f)" },
  {
    name: "Umbra Grey",
    group: "Aludec",
    swatch: "linear-gradient(135deg,#514d47,#79736b,#403d38)",
  },
  {
    name: "Window Grey",
    group: "Aludec",
    swatch: "linear-gradient(135deg,#777c7c,#a5aaaa,#666b6b)",
  },
  {
    name: "Basalt Grey",
    group: "Aludec",
    swatch: "linear-gradient(135deg,#4c5355,#747c7e,#3c4345)",
  },
] as const;

export const SERVICE_PROCESS_STEPS = [
  {
    number: "01",
    title: "We visit",
    description: "We inspect the site and understand the space, requirements, and project details.",
  },
  {
    number: "02",
    title: "We measure",
    description: "We take accurate site dimensions to ensure the right fit for every opening.",
  },
  {
    number: "03",
    title: "We design",
    description: "We plan and manufacture the selected system to the project specifications.",
  },
  {
    number: "04",
    title: "We install",
    description: "Our team completes the installation with professional fitting and finishing.",
  },
] as const;

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
    description: "Heat-treated for greater strength and safer breakage when damaged.",
    appearance: "bg-gradient-to-br from-emerald-100/70 via-white/40 to-emerald-300/60",
  },
  {
    name: "DGU Glass",
    image: "/products/dgu-glass.jpg",
    description: "Dual-sealed panes help reduce heat, outside noise, and condensation.",
    appearance: "bg-gradient-to-r from-slate-200 via-white to-slate-300",
  },
  {
    name: "Laminated Glass",
    image: "/products/laminated-glass.jpg",
    description: "Bonded glass layers improve safety, security, and sound control.",
    appearance: "bg-gradient-to-br from-cyan-100 via-white/60 to-blue-200",
  },
  {
    name: "Pinhead Glass",
    image: "/products/pinhead-glass.jpg",
    description: "Textured glass admits light while gently obscuring visibility.",
    appearance:
      "bg-[radial-gradient(circle,_rgba(255,255,255,.9)_1px,_rgba(148,163,184,.35)_2px)] bg-[size:8px_8px]",
  },
  {
    name: "Frosted Glass",
    image: "/products/frosted-glass.jpg",
    description: "Diffuses natural light while maintaining privacy in personal spaces.",
    appearance: "bg-gradient-to-br from-slate-100 via-slate-200 to-white",
  },
  {
    name: "Tinted Glass",
    image: "/products/tinted-glass.jpg",
    description: "Reduces glare and solar heat with a stylish coloured finish.",
    appearance: "bg-gradient-to-br from-slate-500 via-slate-300 to-sky-200",
  },
] as const;
