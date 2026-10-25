export type SitePhoto = {
  src: string;
  alt: string;
  place: string;
  author: string;
  authorUrl: string;
  source: "Unsplash" | "Pexels";
  sourceUrl: string;
};

/**
 * Photographs used on the marketing site.
 * Unsplash License and Pexels License both allow commercial use.
 * Attribution is shown beside each picture.
 */
export const PHOTOS = {
  lekkiLagoon: {
    src: "/photos/lekki-lagoon.webp",
    alt: "Aerial view of the Lekki lagoon, bridge traffic, and the Lagos city edge",
    place: "Lekki, Lagos",
    author: "Tunde Buremo",
    authorUrl: "https://unsplash.com/photos/an-aerial-view-of-a-busy-city-n8DxalbQBic",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/license",
  },
  lekkiBridge: {
    src: "/photos/lekki-bridge.webp",
    alt: "The cable-stayed Lekki–Ikoyi Link Bridge over the water in Lagos",
    place: "Lekki–Ikoyi Link Bridge, Lagos",
    author: "Tunde Buremo",
    authorUrl: "https://unsplash.com/photos/a-very-tall-bridge-over-a-large-body-of-water-kF0-RhpHhRA",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/license",
  },
  victoriaIsland: {
    src: "/photos/victoria-island.webp",
    alt: "Aerial view of Victoria Island, Lagos, with the lagoon, boats, and the skyline",
    place: "Victoria Island, Lagos",
    author: "Malik Buraimoh",
    authorUrl:
      "https://unsplash.com/photos/boats-navigate-a-wide-river-beside-a-modern-city-bridge-EMjpo0YjHPw",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/license",
  },
  lagosHarbour: {
    src: "/photos/lagos-harbour.webp",
    alt: "Ships alongside warehouses at a Lagos harbour, with cargo vessels on the horizon",
    place: "Lagos harbour",
    author: "Onaopemipo Oladipupo",
    authorUrl: "https://unsplash.com/photos/a-busy-port-is-filled-with-several-ships-n-1Ntlxmy5k",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/license",
  },
  lagosColleagues: {
    src: "/photos/lagos-colleagues.webp",
    alt: "Two colleagues in Lagos sitting together and looking at a laptop",
    place: "Lagos",
    author: "Ninthgrid",
    authorUrl:
      "https://unsplash.com/photos/a-man-and-a-woman-sitting-on-a-couch-with-a-laptop-09yrvR2w5Ys",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/license",
  },
  deskWork: {
    src: "/photos/desk-work.webp",
    alt: "A person working through papers at a bright office desk",
    place: "At the desk",
    author: "Mizuno K",
    authorUrl: "https://www.pexels.com/photo/businesswoman-using-a-computer-in-an-office-12911175/",
    source: "Pexels",
    sourceUrl: "https://www.pexels.com/license/",
  },
  containerTerminal: {
    src: "/photos/container-terminal.webp",
    alt: "A container ship being worked by cranes at a terminal",
    place: "Container terminal",
    author: "Tom Fisk",
    authorUrl: "https://www.pexels.com/photo/drone-shot-of-a-cargo-ship-on-port-3856433/",
    source: "Pexels",
    sourceUrl: "https://www.pexels.com/license/",
  },
} as const satisfies Record<string, SitePhoto>;
