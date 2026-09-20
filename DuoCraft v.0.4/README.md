# DuoCraft

**Websites, built and tested.**

DuoCraft is a two-person freelance web studio run by [Lingesh A](https://lingeshx26.github.io/portfolio-react/) (full-stack & backend) and [Kavitha K](https://kavitha0406.github.io/Kavithaportfolio/) (QA & frontend), based in Tamil Nadu, India. This repo is the source for our site.

🔗 **Live site:** https://lingeshx26.github.io/DuoCarft/

---

## What's on the site

**Home (`index.html`)**
- Hero, a 3-card "What we do" teaser with a link to the full services page, and reviews (placeholder until we have real ones)
- Who we are — founder bios with initials avatars, skill chips, and links to each founder's personal portfolio
- How we work — our 4-step process, and the tools/stack we use

**What we do (`services.html`)**
- Full services catalog, grouped into Websites & Web Apps, Design, and Marketing & Growth
- A "Coming Soon" section for services in the pipeline (YouTube thumbnails, video/photo editing, social content design)

**Our work (`work.html`)**
- Filterable by category (Business Cards / Web Apps), grows as more projects are added
- AJ Travels — a two-sided business card design case study, with front/back/printed mockup gallery
- Gig Driver Dashboard — a personal PWA project (GPS ride tracking, Google Sheets sync), with links to the live demo and source code

**Site-wide**
- **Dark / light mode** — toggle in the nav, remembers the visitor's choice (`localStorage`), respects system preference on first visit
- **Mobile-friendly nav** — hamburger menu on small screens, grouped with the theme toggle
- **Hash-free navigation** — section links (Reviews, Contact, etc.) never show a `#hash` in the address bar, even across pages
- **WhatsApp inquiry button** — floating action button that opens a pre-filled WhatsApp chat via `wa.me`
- **UPI payment QR** — dark-themed, on-brand QR card for existing clients (shared directly, not hosted on-site)
- **Favicon & apple-touch-icon** — for browser tabs and iOS home screen

## Tech stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no frameworks. Fonts via Google Fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono).

```
duocraft/
├── index.html
├── work.html
├── services.html
├── style.css
├── script.js
├── favicon.ico
├── apple-touch-icon.png
├── duocraft-badge.png
├── duocraft-wordmark.png
├── aj-travels-front.png
├── aj-travels-back.png
└── aj-travels-mockup.png
```

> All files live at the repo root — no subfolders. HTML references images directly (e.g. `src="duocraft-badge.png"`).

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

**Heads up:** GitHub Pages is case-sensitive and doesn't tolerate spaces in filenames the way Windows does. Keep new filenames lowercase and hyphenated, and make sure paths in the HTML match exactly.

## Contact

- 📧 duocraftdigital@gmail.com
- 📱 [WhatsApp](https://wa.me/919360220703)

---

<sub>DuoCraft © 2026 — Excuses not found.</sub>
