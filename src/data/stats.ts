// PLACEHOLDER — replace with the client's real numbers.

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  note: string;
};

export const stats: Stat[] = [
  {
    value: 46,
    suffix: "M+",
    label: "Views delivered",
    note: "Across client channels, last 24 months",
  },
  {
    value: 128,
    suffix: "",
    label: "Projects wrapped",
    note: "Trailers, launches, and long-form",
  },
  {
    value: 92,
    suffix: "%",
    label: "Client retention",
    note: "Return for a second project",
  },
  {
    value: 6,
    suffix: " days",
    label: "Average turnaround",
    note: "First cut to final export",
  },
];
