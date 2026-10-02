# Artistic Roofing Systems — Claude Context

## What This Project Is
Marketing website for Artistic Roofing Systems LLC (Sierra Vista, AZ).  
React 19 CRA app deployed on Vercel. All styling is inline React styles — no Tailwind classes are in use despite the dependency being present.

## Key Rules
- **Do not change design, layout, colors, or content** unless explicitly asked.
- **CI=true build**: Vercel builds with `CI=true`, so ESLint warnings are treated as errors. Fix all lint warnings before pushing.
- **No spaces or special characters in filenames** inside `public/`. Vercel's build pipeline rejects them.
- All asset filenames must be kebab-case.

## Stack
- React 19, React Router v7 (loader-based, file in `src/App.js`)
- `react-helmet-async` for per-page SEO (title, description, OG, JSON-LD)
- Deployed on Vercel; `vercel.json` handles SPA routing rewrites

## File Structure
```
src/pages/        ← one file per route
src/components/   ← reusable sections
src/layouts/      ← Layout.jsx (Navbar + Footer shell)
src/data/         ← blogPosts.js (static blog data)
public/img/       ← all images, organised by section (see README)
public/video/     ← video files
```

## Blog
Blog is live. To disable again:
1. Comment out the 2 imports and 2 `<Route>` lines in `src/App.js`
2. Comment out the Blog entry in `src/components/Navbar.jsx`

## SEO Component
`src/components/SEO.jsx` — pass `title`, `description`, `canonical`, and optionally `image` and `schema` (JSON-LD object). Every page should include it.

## Adding a New Blog Post
Add an entry to `src/data/blogPosts.js` following the existing shape. Add the cover image to `public/img/blog/` using kebab-case filename.

## Git
Working branch: `claude/laughing-lovelace-1eemn0`  
Merges to `main` trigger Vercel auto-deploy.
