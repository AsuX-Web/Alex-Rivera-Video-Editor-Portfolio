export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "north",
    name: "Priya Nair",
    role: "Founder, Northwind Audio",
    quote:
      "Sent over raw clips on a Friday and had a launch film I could post Monday. Didn't have to explain the brand twice.",
    initials: "PN",
  },
  {
    id: "harbor",
    name: "Deshawn Ellis",
    role: "Producer, Harbor Studios",
    quote:
      "The teaser held the room at our internal screening. Cut exactly where we would've cut it ourselves, just faster.",
    initials: "DE",
  },
  {
    id: "milo",
    name: "Milo Chen",
    role: "Creator, Milo Tech",
    quote:
      "Retention on the long-form stuff jumped after we moved editors. Pacing just reads different when someone actually watches YouTube.",
    initials: "MC",
  },
  {
    id: "reyna",
    name: "Reyna Ortiz",
    role: "Studio Lead, Reyna Studio",
    quote:
      "Gave loose behind-the-scenes footage and got back something tighter than our shot list. Client review took ten minutes.",
    initials: "RO",
  },
  {
    id: "atlas",
    name: "Sam Okafor",
    role: "Marketing, Atlas Outdoor",
    quote:
      "One good transition carried the whole anthem film. Small thing, but it's the part everyone remembers.",
    initials: "SO",
  },
];
