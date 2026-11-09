# LEAP LIVING — Design Presentation

A responsive HTML presentation of the complete LEAP LIVING web design: six core
pages, a component and state library, the design system, and the responsive
strategy.

**Live:** https://vdtafury.github.io/leap-living-presentation/

## Open it

Everything is local — no build step, no dependencies, no network calls.

- **Easiest:** double-click `index.html`. It works from `file://`.
- **Best quality:** serve the folder and open it on any device.

  ```bash
  cd leap-presentation
  python3 -m http.server 8899
  # then open http://localhost:8899
  ```

## What is inside

| Path | Purpose |
|---|---|
| `index.html` | The presentation |
| `assets/styles.css` | Presentation styling and layout |
| `assets/app.js` | Screen data, breakpoint switcher, viewer, scrollspy |
| `assets/screens/*.webp` | Optimised screen exports (3.5 MB total) |
| `tools/optimise.py` | Re-optimises the source PNGs if Figma exports change |

## Using it with the client

- **Breakpoint switcher** — each screen has Desktop / Tablet / Mobile tabs
  where more than one was designed. Scroll inside the frame to explore the full page.
- **Viewer** — click any screen to open it full size. `←` / `→` move between
  all 26 assets, `Esc` closes.
- **Presentation mode** — the button in the top bar strips the review chrome
  (sidebar, notes, descriptions) for screen sharing.
- **Keyboard** — every control is reachable by keyboard, focus is visible, and
  the viewer traps focus while open.
- **Motion** — reduced-motion preferences are respected throughout.

## Hosting

The folder is a static site. It can be dropped onto any static host
(Netlify, GitHub Pages, Cloudflare Pages, S3) with no configuration. There is no
backend, no form handling and no analytics.

## Source of truth

The Figma file remains the source of truth. This presentation is the review and
sign-off artefact; if a screen changes in Figma, re-export it into
`assets/screens/` (see `tools/optimise.py`).

## Image credit

`assets/dubai-hero.webp` — "Dubai Marina and skyline from Le Royal Méridien
Beach Resort and Spa at night", Wikimedia Commons, public domain. Locally
processed (shadow lift, colour grade) and self-hosted; no external request is
made at runtime.
