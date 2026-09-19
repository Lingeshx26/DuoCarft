# DuoCraft

**Websites, built and tested.**

DuoCraft is a two-person freelance web studio run by [Lingesh A](https://lingeshx26.github.io/portfolio-react/) (full-stack & backend) and [Kavitha K](https://kavitha0406.github.io/Kavithaportfolio/) (QA & frontend), based in Tamil Nadu, India. This repo is the source for our site — a landing page introducing what we do, plus a case-study page for real work.

🔗 **Live site:** https://lingeshx26.github.io/DuoCarft/

---

## What's on the site

**Home (`index.html`)**
- Hero & services — what DuoCraft builds: landing pages, full multi-page sites, and post-launch testing/support, each with its own icon
- Reviews — ready and waiting for the first client testimonials
- Who we are — founder bios with initials avatars, skill chips, and direct links to each founder's personal portfolio
- How we work — our 4-step process, from discovery to launch & support
- Tools we use — our stack, by category

**Our work (`work.html`)**
- AJ Travels — a two-sided business card design case study, with front/back/printed mockup gallery
- Gig Driver Dashboard — a personal PWA project (GPS ride tracking, Google Sheets sync), with links to the live demo and source code

**Site-wide**
- **Dark / light mode** — toggle in the nav, remembers the visitor's choice (`localStorage`), and respects system preference on first visit
- **Mobile-friendly nav** — hamburger menu on small screens, grouped with the theme toggle for consistent alignment
- **WhatsApp inquiry button** — floating action button that opens a pre-filled WhatsApp chat via `wa.me`
- **UPI payment QR** — dark-themed, on-brand QR card for existing clients (shared directly, not hosted on-site)

## Tech stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no frameworks. Fonts via Google Fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono).

```
duocraft/
├── index.html              # home page
├── work.html                # "Our work" case-study page
├── style.css                 # theming, layout, animations (light/dark palettes via CSS variables)
├── script.js                  # scroll reveal, tilt cards, nav toggle, theme toggle
├── duocraft-badge.png
├── duocraft-wordmark.png
├── aj-travels-front.png
├── aj-travels-back.png
└── aj-travels-mockup.png
```

> Note: all image files live at the repo root, not in a subfolder — the HTML references them directly (e.g. `src="duocraft-badge.png"`).

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

**Heads up:** GitHub Pages is case-sensitive and doesn't tolerate spaces in filenames the way Windows does. If you add new images, keep filenames lowercase and hyphenated (e.g. `new-project-front.png`), and make sure the path in the HTML matches exactly.

## Contact

- 📧 duocraftdigital@gmail.com
- 📱 [WhatsApp](https://wa.me/919360220703)

---

<sub>DuoCraft © 2026 — Excuses not found.</sub>
