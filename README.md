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

## Brand palette

Approved by the client (2026-11). The site is built on Teal + Neutral + White.

| Role | Value |
|---|---|
| Primary Teal — brand, buttons | `#3B9EA1` |
| Secondary Teal — accents, links | `#287F82` |
| Dark Teal — header, featured sections | `#185C5E` |
| White — primary surface | `#FFFFFF` |
| Page Background | `#F5F7F6` |
| Neutral Grey — dividers | `#DDDDDD` |
| Headings | `#252B2B` |
| Body Text | `#626B69` |
| Borders | `#E2E7E5` |

Distribution guidance: ~55% white/off-white, ~20% charcoal/dark, ~15% teal,
~10% grey. Light backgrounds carry the page; Dark Teal is reserved for the
header and a few featured sections.

## Source of truth

The Figma file remains the source of truth. This presentation is the review and
sign-off artefact; if a screen changes in Figma, re-export it into
`assets/screens/` (see `tools/optimise.py`).
