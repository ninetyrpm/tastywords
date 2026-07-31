# tastywords

A minimal React/Vite publishing platform for occasional long-form essays.

## Writing workflow

Essays are written as Markdown files in:

```text
src/content/essays/<slug>.md
```

The site discovers every Markdown essay automatically, parses its metadata and body, calculates reading time from the finished text, and renders it through the existing React components. No essay-specific JavaScript or registry edits are required.

### Essay template

```md
---
slug: example-essay
plainTitle: Example Essay
titleLines:
  - Example
  - Essay
subtitle: A brief subtitle for the title screen.
eyebrow: Essay
signature: Ken
dateline: Louisville, Kentucky · August 2026
---

Ordinary paragraphs are written normally.

> A blockquote becomes a pull quote.

- A Markdown list
- becomes the existing
- stacked treatment.

---

Three hyphens on their own line create the existing section break and wheel marker.
```

The front matter supports the same fields as the previous JavaScript essay object. `slug`, `plainTitle`, `titleLines`, and `subtitle` are required. Optional fields such as `signature`, `dateline`, `description`, or `closing` can still be included when needed.

## Structure

```text
src/
├── app/
│   └── App.jsx
├── components/
├── content/
│   └── essays/
│       ├── index.js             # Automatically loads every .md essay
│       ├── parseEssay.js        # Converts Markdown to the existing essay schema
│       ├── open-letter-cycling.md
│       └── the-guest.md
├── hooks/
├── layouts/
│   └── EssayLayout.jsx
├── pages/
├── styles/
│   └── global.css
├── utils/
│   └── readingTime.js
└── main.jsx
```

## Add another essay

1. Create a new `.md` file in `src/content/essays`.
2. Add the front matter shown above.
3. Write the essay using ordinary Markdown.
4. Commit and push.

The publication will automatically be available at `/<slug>` after Vercel deploys the commit.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

`vercel.json` rewrites direct requests to Vite's entry point, allowing essay URLs to load correctly when opened or refreshed directly.

## Provisional publishing

Every Markdown file in `src/content/essays` is included in production and receives a direct route based on its `slug`.

For an unfinished essay, use an unlisted slug and avoid linking it from the homepage or social profiles. For example, `the-guest.md` is available directly at:

```text
/the-guest
```

The current homepage remains reserved and does not enumerate essays, so a provisional essay is reachable only by someone who knows or receives its exact URL. This is unlisted rather than access-controlled: anyone with the URL can open it.

Level-three Markdown headings render as section titles. `PERSONAL ANECDOTE NEEDED` blockquotes render as editorial notes rather than pull quotes.
