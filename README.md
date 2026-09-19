# DuoCraft

**Websites, built and tested.**

DuoCraft is a two-person freelance web studio run by [Lingesh A](https://lingeshx26.github.io/portfolio-react/) (full-stack & backend) and [Kavitha K](https://kavitha0406.github.io/Kavithaportfolio/) (QA & frontend), based in Tamil Nadu, India. This repo is the source for our landing page — a single-page site introducing what we do, how we work, and how to reach us.

🔗 **Live site:** _add your GitHub Pages URL here once deployed_

---

## What's on the site

- **Hero & services** — what DuoCraft builds: landing pages, full multi-page sites, and post-launch testing/support
- **Our work** — a portfolio section, ready for real client projects as they ship
- **Who we are** — founder bios, skill chips, and direct links to each of our personal portfolios
- **How we work** — our 4-step process, from discovery to launch & support
- **Dark / light mode** — theme toggle in the nav, remembers the visitor's choice (`localStorage`), and respects system preference on first visit
- **Mobile-friendly nav** — hamburger menu on small screens
- **WhatsApp inquiry button** — floating action button that opens a pre-filled WhatsApp chat via `wa.me`
- **UPI payment QR** — dark-themed, on-brand QR card for existing clients

## Tech stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no frameworks. Fonts via Google Fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono).

```
duocraft/
├── index.html      # all page content & structure
├── style.css        # theming, layout, animations (light/dark palettes via CSS variables)
├── script.js         # scroll reveal, tilt cards, nav toggle, theme toggle
└── assets/
    ├── duocraft-badge.png
    └── duocraft-wordmark.png
```

## Running locally

No build tools needed — just serve the folder:

```bash
# with Python
python3 -m http.server 8000

# or with Node
npx serve .
```

Then open `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)` folder.
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.

## Contact

- 📧 duocraftdigital@gmail.com
- 📱 [WhatsApp](https://wa.me/919360220703)

---

<sub>DuoCraft © 2026 — Excuses not found.</sub>
