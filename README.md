# agent-sh.dev

Landing site for the agent-sh organization. Static Astro 5 site deployed to `agent-sh.github.io`.

## Structure

```
.
├── ORG_ARCHITECTURE.md   Architecture decision record
├── astro.config.mjs      Site config (base: /)
├── public/               Static assets
└── src/
    ├── components/
    │   ├── Nav.astro     Top navigation with Products dropdown
    │   └── Footer.astro  Site footer
    ├── data/
    │   ├── plugins.json  Plugin catalog data
    │   └── skills.json   Skills directory data
    ├── layouts/
    │   └── Base.astro    Base HTML layout
    ├── pages/
    │   ├── index.astro   Landing page - hero, stats, products, philosophy
    │   ├── docs.astro    Documentation hub linking to all product docs
    │   ├── plugins.astro Plugin catalog with filters
    │   └── skills.astro  Skills directory with search
    └── styles/
        ├── tokens.css    Design tokens (canonical source for all sites)
        └── main.css      Site styles
```

## Commands

| Command             | Action                                      |
| :------------------ | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start local dev server at localhost:4321    |
| `npm run build`     | Build production site to ./dist/            |
| `npm run preview`   | Preview build locally before deploying      |

## Deployment

Deployed to GitHub Pages via `.github/workflows/deploy.yml`. Base path is `/`.

See [ORG_ARCHITECTURE.md](./ORG_ARCHITECTURE.md) for the full architecture decision record covering URL structure, frameworks, design tokens, and future work.
