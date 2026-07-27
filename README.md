# tastywords

A minimal React/Vite publishing platform for occasional long-form essays.

## Structure

Each essay exists in exactly one content file:

```text
src/content/essays/<slug>.js
```

The shared `EssayPage` reads the URL slug, looks up the matching essay in the registry, and passes it to the reusable essay layout. There is no separate page component or duplicated copy for each publication.

```text
src/
├── app/
│   └── App.jsx                  # Route definitions
├── components/                  # Reusable presentation pieces
├── content/
│   └── essays/
│       ├── index.js             # Essay registry
│       └── open-letter-cycling.js
├── hooks/                       # Reading progress and metadata
├── layouts/
│   └── EssayLayout.jsx          # Shared essay composition
├── pages/
│   ├── EssayPage.jsx            # Generic slug-based renderer
│   ├── HomePage.jsx             # Reserved root page
│   └── NotFoundPage.jsx
├── styles/
│   └── global.css
├── utils/
│   └── readingTime.js
└── main.jsx
```

## Add another essay

1. Copy `src/content/essays/open-letter-cycling.js` to a new file.
2. Change its `slug`, metadata, and content.
3. Import it and add it to the `essays` array in `src/content/essays/index.js`.

The publication will then be available automatically at `/<slug>`.

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
