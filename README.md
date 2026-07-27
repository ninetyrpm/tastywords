# tastywords

A small, reusable React/Vite publishing platform for cohesive essays.

## Current public structure

- `/` — a deliberately reserved site root. It does **not** link to the essay.
- `/open-letter-cycling` — *An Open Letter to the Cycling Community*.
- all unknown routes — a quiet 404 page.

The essay has no site navigation, archive links, related-post links, or homepage link. It stands entirely on its own.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this directory to the `tastywords` GitHub repository.
2. Import the repository into Vercel.
3. Vercel should detect Vite automatically.
4. Build command: `npm run build`
5. Output directory: `dist`

`vercel.json` rewrites publication URLs to the React application so direct visits and refreshes work correctly.

## Adding another essay later

1. Add one file under `src/content/essays/` using the same data structure as `open-letter-cycling.jsx`.
2. Import it in `src/App.jsx`.
3. Add a dedicated route for its permanent slug.

Shared presentation lives in `src/components/`, `src/layouts/`, and `src/styles/global.css`. Essay copy and metadata stay isolated under `src/content/essays/`.

## Editorial conventions

- Keep permanent publication URLs independent of the homepage.
- Avoid dates in slugs so essays remain durable.
- Keep essay pages free of global navigation unless that editorial choice changes later.
- Reading time is calculated automatically at 220 words per minute.
- Use `styles` within a section to mark individual paragraphs as `pull` or `stacked`.
