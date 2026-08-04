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

## Browser writing portal

Open `/write` to draft and format essays directly in the browser. The portal provides:

- separate title and metadata fields;
- a Markdown editor with browser-local autosave;
- a live preview using the same essay components and CSS as the published site;
- a full-page preview;
- loading and updating existing essays;
- Markdown download as a local backup;
- direct publication to the production branch.

The editor itself is reachable by URL, but publishing is protected by a server-side password. No GitHub credential is exposed to the browser.

### Configure direct publishing in Vercel

Add these environment variables to the Vercel project and apply them to **Production**:

```text
WRITER_PASSWORD=<a long private password>
GITHUB_TOKEN=<a fine-grained GitHub personal access token>
GITHUB_REPOSITORY=<owner/repository>
GITHUB_BRANCH=main
```

The fine-grained GitHub token only needs **Contents: Read and write** permission for the Tastywords repository. After adding the variables, redeploy once.

Publishing from `/write` creates or updates:

```text
src/content/essays/<slug>.md
```

The resulting commit to `main` triggers the normal Vercel production deployment. The new essay may take a minute or two to become available after the portal reports a successful commit.

The portal is a lightweight single-author tool, not a multi-user CMS. Anyone can view the `/write` interface if they know the route, but only someone with `WRITER_PASSWORD` can commit. For stronger access control, protect `/write` through Vercel Deployment Protection or an external authentication layer.

## Writer notes and revision flags

Inside `/write`, use ordinary blockquote syntax for pull quotes:

```md
> This is a pull quote.
```

Use these labeled blockquotes for private drafting reminders that remain visually distinct in the preview:

```md
> **EDITORIAL NOTE:** Decide whether this section belongs earlier.

> **EDIT NEEDED:** Tighten the paragraph below and add a concrete example.

> **PERSONAL ANECDOTE NEEDED:** Return to the opening scene with one sensory detail.
```

`NOTE:` is accepted as a shorter alias for `EDITORIAL NOTE:`. `REVISION NEEDED:` and `TODO:` are accepted as aliases for `EDIT NEEDED:`.

The live preview pane remains fixed beside the editor on desktop while the editor column scrolls. On narrower screens the editor and preview stack normally.

The title-screen Read control uses `scrollIntoView()` rather than a URL fragment, so reading an essay no longer adds `#letter` to its URL.

### Images and captions

Place essay images in `public/images/` (or an essay-specific subfolder) and reference them with standard Markdown:

```md
![The Design Squiggle](/images/design-squiggle.png)
```

To add a caption, place a standalone italic paragraph immediately after the image:

```md
![The Design Squiggle](/images/design-squiggle.png)

*Damien Newman’s Design Squiggle.*
```

The image and caption render in both the `/write` live preview and published essays. A standalone italic paragraph elsewhere remains ordinary italic body text.
