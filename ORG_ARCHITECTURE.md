# Org Architecture: Documentation & Website Strategy

Architecture decision record for the agent-sh organization's web presence and documentation.

## Decisions

### URL Structure

| Site | URL | Purpose |
|------|-----|---------|
| Landing page | `agent-sh.github.io` (root) | Org overview, plugin catalog, skills directory |
| agentsys docs | `agent-sh.github.io/agentsys/` | Product docs for the agent runtime |
| agnix docs | `agent-sh.github.io/agnix/` | Product docs for the config linter |

Custom domain (`agent-sh.dev`) is a future step - configure via GitHub Pages CNAME when ready.

### Frameworks

| Site | Framework | Reason |
|------|-----------|--------|
| Landing page | Astro 5 | Static-first, zero JS by default, component islands |
| agnix docs | Docusaurus 3 | WASM playground requires React, existing Docusaurus setup |
| agentsys docs | Upgrade from static HTML | Currently hand-written HTML, planned upgrade to Astro or Docusaurus |

### Design Tokens

`agent-sh.dev/src/styles/tokens.css` is the canonical source for design tokens (colors, spacing, typography). Other sites mirror these values to maintain visual consistency.

### Documentation Hub

The landing site includes a `/docs/` page that links to all documentation sites. This provides a single entry point for users looking for docs.

## Future Work

- **Unified search** - Orama or similar for cross-site search
- **Shared header/footer** - Web components or build-time includes for consistent navigation
- **Custom domain** - `agent-sh.dev` pointing to GitHub Pages
- **agentsys docs upgrade** - Migrate from static HTML to a framework with better DX
