---
title: Getting Started with Agnix
description: Install Agnix and lint your first agent configuration.
---

## Install

Choose your preferred package manager:

```bash
# npm (easiest)
npm install -g agnix

# Cargo (Rust)
cargo install agnix-cli

# Homebrew (macOS)
brew install agnix

# Binary download
# See https://github.com/agent-sh/agnix/releases
```

## First Lint Run

Navigate to a project with agent configurations and run:

```bash
agnix
```

Agnix auto-discovers supported files: `CLAUDE.md`, `SKILL.md`, `.claude/settings.json`, `.cursor/rules/*.mdc`, `*.mcp.json`, and more.

Example output:

```
CLAUDE.md
  12:1  warning  Missing version field in frontmatter  structure/version-field
  45:3  error    Conflicting tool permission rules      consistency/tool-conflict

.claude/settings.json
  8:5   error    Overpermissive tool allowlist           security/tool-allowlist

3 problems (2 errors, 1 warning)
1 auto-fixable with --fix
```

## Auto-Fix

Fix issues that have safe automatic corrections:

```bash
agnix --fix
```

Only issues marked as auto-fixable are modified. All other issues are reported for manual review.

## Strict Mode

Treat warnings as errors (useful for CI):

```bash
agnix --strict
```

Exit code is non-zero if any issues are found.

## Target a Specific Tool

Lint only rules relevant to a particular AI tool:

```bash
agnix --target claude-code
agnix --target cursor
agnix --target copilot
agnix --target codex
agnix --target opencode
agnix --target gemini-cli
```

## IDE Setup

### VS Code / Cursor

Install the Agnix extension from the marketplace. It uses the LSP server for real-time linting as you edit agent configs.

### Neovim

Configure the LSP client to use `agnix-lsp`:

```lua
require('lspconfig').agnix.setup{}
```

### Other Editors

Any editor with LSP support can use `agnix-lsp`. Start the server with:

```bash
agnix-lsp
```

## CI/CD Integration

Add Agnix to your GitHub Actions workflow:

```yaml
name: Lint Agent Configs
on: [push, pull_request]

jobs:
  agnix:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Agnix
        run: npm install -g agnix
      - name: Lint
        run: agnix --strict
      - name: Upload SARIF (optional)
        if: always()
        run: agnix --format sarif > results.sarif
      - uses: github/codeql-action/upload-sarif@v3
        if: always()
        with:
          sarif_file: results.sarif
```

## Next Steps

- [Agnix Overview](/agent-sh.dev/agnix/) -- full feature list
- [GitHub Repository](https://github.com/agent-sh/agnix) -- rules reference, configuration, and contributing
