# Personal Portfolio

Single-page portfolio built with React, TypeScript and Vite. No backend, CMS or analytics.

## Setup

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run build      # outputs dist/
npm run preview    # serve the production build
```

## Editing content

All content lives in `src/data/portfolio.ts`.

- `contact.linkedin`, `contact.email`, `contact.resumePath` — leave empty to hide; fill in to show.
- Resume: place the PDF at `public/resume.pdf`, then set `resumePath: '/resume.pdf'`.
- Screenshot: add `public/images/integrationops-ai-screenshot.png` (synthetic data only) and uncomment `screenshot` in `featuredProject`.
- Add earlier employment only from verified resume data.

## Deployment

The build output in `dist/` is static and works on GitHub Pages, Vercel or Netlify. For a GitHub Pages project site set `base` in `vite.config.ts` to `'/<repo-name>/'`. Verify the live URL before sharing it.
