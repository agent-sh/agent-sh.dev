---
title: Agnix
description: Agent configuration linter with 229 rules. CLI, LSP, and IDE extensions.
---

[Agnix](https://github.com/agent-sh/agnix) is a dedicated linter for AI agent configurations. It validates SKILL.md, CLAUDE.md, AGENTS.md, hooks, MCP configs, Cursor rules, Copilot instructions, and more.

Agent configurations are code. They affect behavior, security, and reliability. Unlike application code, they traditionally have no linting. Agnix catches errors before they cause agent failures.

## What It Validates

| Category | What It Checks |
|----------|---------------|
| Structure | Required fields, valid YAML/JSON, proper frontmatter |
| Security | Prompt injection vectors, overpermissive tools, exposed secrets |
| Consistency | Conflicting rules, duplicate definitions, broken references |
| Best Practices | Tool restrictions, model selection, trigger phrase quality |
| Cross-Platform | Compatibility across Claude Code, Cursor, Copilot, Codex, OpenCode, Gemini CLI, Cline, and more |

## Key Numbers

- **229 validation rules** (57 auto-fixable)
- Derived from official tool specifications, research papers, and testing across 500+ repositories
- CLI, LSP server, and IDE extensions

## Supported Files

| File Type | Examples |
|-----------|---------|
| Skills | `SKILL.md`, `*/SKILL.md` |
| Memory | `CLAUDE.md`, `AGENTS.md`, `.github/CLAUDE.md` |
| Hooks | `.claude/settings.json`, hooks configuration |
| MCP | `*.mcp.json`, MCP server configs |
| Cursor | `.cursor/rules/*.mdc`, `.cursorrules` |
| Copilot | `.github/copilot-instructions.md` |

## Install

```bash
# npm
npm install -g agnix

# Cargo
cargo install agnix-cli

# Homebrew (macOS)
brew install agnix
```

## Quick Usage

```bash
agnix                        # Validate current project
agnix --fix                  # Auto-fix fixable issues
agnix --strict               # Treat warnings as errors
agnix --target claude-code   # Only Claude Code rules
agnix --format sarif         # Output for GitHub Code Scanning
```

## CI/CD Integration

Agnix outputs SARIF format for GitHub Code Scanning:

```yaml
- name: Lint agent configs
  run: agnix --format sarif > results.sarif
- uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: results.sarif
```

## Next Steps

- [Getting Started](/agent-sh.dev/agnix/getting-started/) -- install and run your first lint
- [GitHub Repository](https://github.com/agent-sh/agnix) -- source code and full documentation
