# Alex Rivera — Video Editor Portfolio

Single-page portfolio built with Next.js 16 (App Router, Turbopack), TypeScript,
Tailwind CSS v4, hand-authored shadcn-style UI primitives, Motion and Lucide
React.

**Status: complete.** Setup, design tokens, Navbar, Footer, Hero,
Work Showcase (filter + video modal) and the animated Stats strip are built,
type-checked, linted and build-verified. Day 2 adds Testimonials, Featured
Video, Process, Trusted-by, final CTA and Contact.

## Run it

```bash
bun install
bun run dev
```

Open http://localhost:3000. (`bun run build && bun run start` for a
production build.)

## Design concept — "Cutting Room"

Warm parchment (the lit editing bay) alternates with a near-black "screening
room" between sections. The accent duo — burnt terracotta and deep pine teal —
is borrowed from cinema colour grading and used sparingly (playhead, tags,
icon fills), never as a gradient wash. Timecodes, a scrubber-style hero
visual and a masonry "filmstrip" work grid are grounded in how editors
actually work, instead of generic agency gradients-and-cards.

- **Display type:** Big Shoulders (condensed, industrial — evokes marquee/
  title-card lettering)
- **Body type:** Work Sans
- **Data/UI labels (timecodes, tags, stats):** IBM Plex Mono — used only where
  it's grounded in the subject (actual editing-software timecodes), not as
  decoration
- All tokens live in `src/app/globals.css`

## Replacing the placeholder content

Every piece of copy, every stat, and every project is placeholder data,
clearly marked, isolated in `src/data/`. **You should not need to touch any
component to update content:**

| File                   | Controls                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/data/site.ts`     | Name, role, tagline, availability badge, email, socials, nav links                                                                         |
| `src/data/projects.ts` | Work Showcase grid — title, client, category, duration, thumbnail "grade" colours, and `embedUrl` (YouTube/Vimeo embed URL or leave blank) |
| `src/data/stats.ts`    | The four animated numbers in the Stats strip                                                                                               |

Swap real footage in by setting `embedUrl` on a project (e.g.
`https://www.youtube.com/embed/VIDEO_ID`) — until then the modal shows a
clearly-labelled placeholder state instead of a broken player.

## Project structure

```
src/
  app/            layout.tsx (fonts + metadata), page.tsx (composes sections), globals.css (design tokens)
  components/
    ui/           hand-authored shadcn-style primitives (button, card, badge, avatar, dialog, tabs)
    layout/       navbar, footer
    sections/     hero, work-showcase, stats  (Day 2: testimonials, featured-video, features, process, trusted-by, cta, contact)
    shared/       animated-counter (scroll-triggered count-up, respects prefers-reduced-motion)
  data/           site.ts, projects.ts, stats.ts — all placeholder content
  lib/utils.ts    cn() helper
```

## Notes for whoever deploys this

- Fonts are loaded via `next/font/google` (self-hosted at build time, no
  runtime request to Google, no layout shift) — this needs normal internet
  access at build time to fetch the font files once.
- No backend: the eventual Contact section will use plain
  `mailto:`/social links, so there's nothing to configure or host.
- Recommended host: Vercel (`vercel deploy`) — zero config needed for this
  stack.
- Accessibility: motion is wrapped in `MotionConfig reducedMotion="user"`
  (`src/app/layout.tsx`) plus a CSS-level `prefers-reduced-motion` override
  (`globals.css`), so anyone with reduced-motion on gets an instant, static
  version of every animation.
