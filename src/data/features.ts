export type Feature = {
  tag: string;
  title: string;
  body: string;
};

export const features: Feature[] = [
  {
    tag: "STORY",
    title: "Cuts on story, not just the beat",
    body: "Music-synced edits look good for ten seconds and say nothing for the other fifty. Every cut here earns its place in the story first.",
  },
  {
    tag: "NOTES",
    title: "One round of notes, not five",
    body: "You'll see a structured cut before polish — so revisions fix the film you actually wanted, instead of chasing a moving target.",
  },
  {
    tag: "GRADE",
    title: "Colour grading comes standard",
    body: "Every delivery gets a pass, not an upsell. Flat, inconsistent footage leaves matched and warm, whatever it started as.",
  },
  {
    tag: "EXPORT",
    title: "Built for wherever it's going",
    body: "Reels, Shorts, YouTube, a client deck — each export is framed, captioned, and compressed for the platform it's landing on.",
  },
];
