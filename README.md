# Liza & Co. — Editorial Luxury Wellness

A complete 7-page first-draft website for Liza Pinili's multi-disciplinary
wellness practice. Editorial luxury aesthetic — boutique hotel meets wellness
brand, art-directed not templated.

## Files

- `index.html` — Editorial homepage (hero, philosophy, signature, disciplines, closing)
- `about.html` — The Practice
- `services.html` — Disciplines (RMT + future acupuncture + naturopathy)
- `team.html` — Practitioners
- `booking.html` — Jane App embed
- `video.html` — Journal (videos + reading)
- `contact.html` — Visit (info + form)
- `styles.css` — Editorial design system
- `script.js` — Header state, mobile nav, reveal-on-scroll, form handler

## Design system

**Typography**
- Cormorant Garamond (display + italic) — high-contrast editorial serif
- Inter Tight (body + labels) — refined humanist sans
- Both loaded via Google Fonts CDN

**Palette** (warm neutral luxury, no green or sage)
- `--bone:        #f4f0e8`  primary background
- `--ivory:       #ebe4d6`  secondary tone
- `--paper:       #f7f3eb`  alternate sections
- `--olive-ink:   #2d2a20`  primary text (warm dark, not pure black)
- `--olive-soft:  #4a4438`  body text
- `--olive-mid:   #6e6657`  labels, captions
- `--tan:         #8b6d52`  single accent (used sparingly)

**Motion**
- Slow reveals on scroll (1.2s fade + 28px lift)
- Staggered delays via data-delay attribute
- Header background shift on scroll
- All animations respect prefers-reduced-motion

## To deploy on Cloudflare Pages

1. Push this folder to a GitHub repo, or drag-drop in Cloudflare dashboard
2. Create a Pages project pointing at the repo
3. Build settings: leave empty (static site, no build step)
4. Publish directory: `/`

## Before launch — things to update

**Booking** — iframe in `booking.html` currently points to `drmtclinic.janeapp.com/embed`
(Dawn's URL, used as placeholder). Swap to Liza's real Jane App URL.

**Clinic name** — currently "Liza & Co." as a working placeholder. Find/replace
across all 7 files if she lands on a real name.

**Contact details** — address, phone, email, hours all placeholder. Update in `contact.html`.

**Practitioners** — Liza's bio is a sketch and needs her review. Therapists 2/3/4
are placeholders, swap in real names/bios.

**Photography** — every image is an atmospheric gradient placeholder. Replace
`.atmos.atmos-N` divs with real `<img>` tags when photos are available.

**Contact form** — submit shows success message but doesn't send. Wire up to
Cloudflare Pages Functions, Formspree, Basin, or Web3Forms before launch.

## Responsive

Fully responsive. Mobile nav opens as fullscreen overlay with display-serif
links. Breakpoints at 880px (nav collapse) and 720px (layout simplification).

## Browser support

Modern browsers. Uses `backdrop-filter`, `aspect-ratio`, CSS variables,
IntersectionObserver. Graceful fallback for reduced-motion.
