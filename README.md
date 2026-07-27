# tastywords

A minimalist publishing framework for cohesive reflections on reality.

The repository currently publishes one standalone essay: **An Open Letter to the Cycling Community**. The public page contains no site branding, archive, navigation, or links to future essays. The reusable structure lives behind the page so additional writing can be added later without changing the reading experience of this piece.

## Structure

```text
src/
├── components/                 Shared essay presentation components
├── essays/
│   └── open-letter-cycling/    The only published essay
├── lib/                        Reading-time utilities
├── styles/                     Shared visual system
├── App.jsx                     Selects the currently published page
└── main.jsx                    Application entry point
```

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy to Vercel

1. Push the repository to GitHub as `tastywords`.
2. Import it into Vercel.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.

Vercel should detect the Vite configuration automatically.

## Publishing another essay later

Create a new folder under `src/essays/` and compose it through the shared `EssayLayout` components. Do not add it to the current page unless it is intentionally ready to publish. There is no homepage, index, archive, or cross-linking in this version.

## Design notes

- Reading time is calculated from the essay copy at 220 words per minute.
- The fixed remaining-time indicator responds to scroll progress.
- Section markers use inline SVG bicycle wheels; no image assets are required.
- The page respects reduced-motion preferences.
