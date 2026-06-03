# Isorropia — Image Manifest

24 images across 7 pages. Drop your replacements into this `images/` folder
using the filenames below (`.jpg` or `.png` both fine — tell me if you use png).
You don't have to match names exactly — you can send them in any order and I'll
place + wire them. But matching these names makes it instant.

**Orientation / crop guide**
- `landscape-hero` — wide, fills the full screen. Min 2000px wide. Faces/subject
  off-center is fine; text sits over the lower-left, so keep that area calmer.
- `wide-band` — wide cinematic band (~21:9). Min 1600px wide.
- `portrait` — tall (3:4 or 4:5). Min 900px wide.
- `square` — 1:1. Min 900px wide.

All photos are darkened slightly on heroes; warm, natural-light, calm imagery
suits the editorial-spa direction best.

---

## Brand
| File | Slot | Notes |
|---|---|---|
| `logo.svg` | Header + footer wordmark mark | Appears beside the “Isorropia” wordmark in the header and footer. It is rendered as a **single-colour mask** that automatically takes the brand colour (dark on light pages, light on the navy footer, light over dark heroes). Replace `images/logo.svg` with your own mark. For a simple monochrome/silhouette logo it will recolour itself; if you have a **full-colour** logo, tell me and I'll switch the header to a plain `<img>` instead. |

## Home — index.html
| File | Slot | Crop |
|---|---|---|
| `home-hero.jpg` | Full-bleed opening hero | landscape-hero |
| `home-philosophy.jpg` | "Slower appointments" split | portrait (3:4) |
| `home-signature-band.jpg` | "A space for restoration" band | wide-band (21:9) |
| `home-team-teaser.jpg` | "A small, thoughtful team" | square (1:1) |

## Practice — about.html
| File | Slot | Crop |
|---|---|---|
| `practice-hero.jpg` | Page hero | landscape-hero |
| `practice-treatment-space.jpg` | "The treatment space" band | wide-band (21:9) |

## Disciplines — services.html
| File | Slot | Crop |
|---|---|---|
| `disciplines-hero.jpg` | Page hero | landscape-hero |
| `disciplines-massage.jpg` | Massage Therapy | portrait (3:4) |
| `disciplines-acupuncture.jpg` | Acupuncture | portrait (3:4) |
| `disciplines-naturopathy.jpg` | Naturopathic Medicine | portrait (3:4) |

## Practitioners — team.html
| File | Slot | Crop |
|---|---|---|
| `practitioners-hero.jpg` | Page hero | landscape-hero |
| `practitioners-intro.jpg` | "Chosen for craft" feature | portrait (3:4) |

The nine practitioner cards (Liza, Melanie, Jerry, Cayley, Jose, Summer,
Paolo, Martin, Anthony) currently use the design's **gradient placeholders**
— no stock faces are attached to real names. To add real headshots, send me
a portrait (3:4) for each person and I'll wire them into named slots
(`practitioner-liza.jpg`, `practitioner-melanie.jpg`, etc.).

## Journal — video.html
| File | Slot | Crop |
|---|---|---|
| `journal-hero.jpg` | Page hero | landscape-hero |
| `journal-featured.jpg` | Featured film thumbnail | wide-band (21:10) |
| `journal-video-1.jpg` | Video thumb — "Releasing neck tension" | portrait (4:5) |
| `journal-video-2.jpg` | Video thumb — "Hip openers" | portrait (4:5) |

## Visit — contact.html
| File | Slot | Crop |
|---|---|---|
| `visit-hero.jpg` | Page hero | landscape-hero |
| `visit-location.jpg` | Location / map band | wide-band (21:9) |

## Reserve — booking.html
| File | Slot | Crop |
|---|---|---|
| `reserve-hero.jpg` | Page hero | landscape-hero |

---

_Currently all 24 slots use temporary Unsplash photos. Once your files land
here, I'll switch every reference from the Unsplash URLs to `images/…` in one pass._
