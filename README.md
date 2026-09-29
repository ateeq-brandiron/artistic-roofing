# Artistic Roofing Systems — Website

Marketing website for **Artistic Roofing Systems LLC**, a licensed roofing contractor serving Sierra Vista and Cochise County, AZ.

**Live site:** https://artisticroofingllc.com  
**Stack:** React 19 (Create React App) · React Router v7 · react-helmet-async · Deployed on Vercel

---

## Getting Started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build
```

---

## Project Structure

```
src/
├── pages/           # One file per route (HomePage, AboutPage, …)
├── components/      # Reusable sections used across pages
├── layouts/         # Layout.jsx wraps all pages (Navbar + Footer)
├── data/            # Static data (blogPosts.js)
└── index.css        # Global styles and CSS variables

public/
├── img/
│   ├── homepage/    # Home page images
│   ├── about/       # About page images
│   ├── services/    # Services page images
│   ├── process/     # Process page images
│   ├── testimonials/# Testimonials page images
│   ├── contact/     # Contact page images
│   ├── blog/        # Blog post cover images
│   ├── gutters/     # Gutters section icons
│   ├── trust/       # Trust badge icons (BBB, licensed, bonded, …)
│   ├── core-values/ # Core values section icons
│   ├── certs/       # Certifications section decorative assets
│   ├── certs-section/ # Certifications section layout assets
│   ├── footer/      # Footer icons
│   ├── why-us/      # Why Us section icons
│   └── process/icons/ # Process step icons
├── video/           # Video files (hero-aerial.mp4)
├── index.html       # HTML shell — GA4 and GSC tags live here
├── robots.txt
└── sitemap.xml
```

---

## Adding Assets

| What | Where |
|------|-------|
| New page hero image | `public/img/<page-name>/` |
| Blog post cover | `public/img/blog/` |
| Icon or badge | `public/img/<section-name>/` |
| Logo variant | `public/img/` root (e.g. `vector-3.png`) |
| Video file | `public/video/` |

**Naming convention:** kebab-case, descriptive. Example: `services-roof-coatings.jpg`, not `IMG_1234.jpg`.

---

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/process` | Our Process |
| `/testimonials` | Testimonials |
| `/contact` | Contact / Free Estimate |
| `/blog` | Blog (currently unpublished) |
| `/blog/:slug` | Blog post (currently unpublished) |

Blog routes are commented out in `src/App.js` and `src/components/Navbar.jsx` pending client approval.

---

## Deployment

Pushes to `main` auto-deploy via Vercel. SPA routing is handled by `vercel.json`.
