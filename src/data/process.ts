export type ProcessStep = {
  index: string;
  title: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery call",
    body: "20 minutes on the goal, the footage you've got, and the deadline. No brief template to fill out.",
  },
  {
    index: "02",
    title: "Rough cut",
    body: "A structured first pass, usually within 2–3 days — story and pacing locked before anything gets polished.",
  },
  {
    index: "03",
    title: "Refine",
    body: "One consolidated round of notes. Colour, sound, and motion graphics land in this pass.",
  },
  {
    index: "04",
    title: "Deliver",
    body: "Exports for every platform you need — captioned, correctly framed, ready to post the same day.",
  },
];
