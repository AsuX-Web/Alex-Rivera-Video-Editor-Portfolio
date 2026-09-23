export type Category =
  | "Brand Films"
  | "Social & Reels"
  | "Trailers & Teasers"
  | "YouTube Long-form";

export type Project = {
  id: string;
  title: string;
  client: string;
  category: Category;
  aspect: "wide" | "tall";
  duration: string; // mm:ss, shown like a timeline readout
  grade: [string, string]; // placeholder "colour grade" gradient stops
  blurb: string;
  embedUrl?: string;
};

export const categories: Category[] = [
  "Brand Films",
  "Social & Reels",
  "Trailers & Teasers",
  "YouTube Long-form",
];

export const projects: Project[] = [
  {
    id: "northwind-launch",
    title: "Northwind — Product Launch Film",
    client: "Northwind Audio",
    category: "Brand Films",
    aspect: "wide",
    duration: "01:42",
    grade: ["#c1502e", "#3a241b"],
    blurb:
      "A two-minute launch film cutting between studio macro shots and real listener reactions.",
  },
  {
    id: "faye-tour-recap",
    title: "Faye — Tour Recap",
    client: "Faye (artist)",
    category: "Social & Reels",
    aspect: "tall",
    duration: "00:38",
    grade: ["#1f4a45", "#0d201d"],
    blurb:
      "Nine-city tour condensed into a single vertical recap built for Reels and Shorts.",
  },
  {
    id: "harbor-teaser",
    title: "Harbor — Season 2 Teaser",
    client: "Harbor Studios",
    category: "Trailers & Teasers",
    aspect: "wide",
    duration: "00:52",
    grade: ["#7c3720", "#1e1a16"],
    blurb:
      "A tension-first teaser cut against an original score, withholding the lead until frame 40.",
  },
  {
    id: "milo-desk-setup",
    title: "Milo — Desk Setup Breakdown",
    client: "Milo Tech",
    category: "YouTube Long-form",
    aspect: "wide",
    duration: "11:06",
    grade: ["#6c6153", "#1e1a16"],
    blurb:
      "A long-form breakdown edited for retention — fast open, chaptered body, clean sign-off.",
  },
  {
    id: "reyna-bts",
    title: "Reyna — Behind the Shoot",
    client: "Reyna Studio",
    category: "Social & Reels",
    aspect: "tall",
    duration: "00:29",
    grade: ["#c1502e", "#1f4a45"],
    blurb:
      "Raw behind-the-scenes footage turned into a single punchy vertical cut.",
  },
  {
    id: "atlas-brand",
    title: "Atlas — Brand Anthem",
    client: "Atlas Outdoor",
    category: "Brand Films",
    aspect: "wide",
    duration: "01:15",
    grade: ["#1f4a45", "#3a241b"],
    blurb:
      "A one-minute brand anthem built around a single unbroken drone-to-handheld transition.",
  },
];
