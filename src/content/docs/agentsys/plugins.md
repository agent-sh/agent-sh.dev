---
title: Plugin Catalog
description: All 13 AgentSys plugins with descriptions, categories, and install commands.
---

AgentSys distributes functionality as standalone plugins. Each plugin lives in its own repo under the [agent-sh](https://github.com/agent-sh) GitHub org.

## All Plugins

| Plugin | Category | Description |
|--------|----------|-------------|
| [next-task](https://github.com/agent-sh/next-task) | Workflow | Master workflow: task discovery, exploration, planning, implementation, review, and PR merge |
| [ship](https://github.com/agent-sh/ship) | Workflow | PR creation, CI monitoring, review comment handling, and merge |
| [deslop](https://github.com/agent-sh/deslop) | Code Quality | Find and remove AI slop: debug statements, placeholders, verbose comments, TODOs |
| [audit-project](https://github.com/agent-sh/audit-project) | Code Quality | Multi-agent code review with up to 10 specialized reviewers |
| [enhance](https://github.com/agent-sh/enhance) | Code Quality | Run 7 parallel analyzers on plugins, agents, docs, prompts, hooks, and skills |
| [drift-detect](https://github.com/agent-sh/drift-detect) | Analysis | Compare documentation and plans to actual code implementation |
| [perf](https://github.com/agent-sh/perf) | Analysis | Structured 10-phase performance investigation with baselines and profiling |
| [repo-map](https://github.com/agent-sh/repo-map) | Analysis | Build AST-based map of symbols and imports for fast repo analysis |
| [sync-docs](https://github.com/agent-sh/sync-docs) | Documentation | Sync documentation with code changes, find outdated refs and stale examples |
| [learn](https://github.com/agent-sh/learn) | Documentation | Research topics online and create learning guides with RAG indexes |
| [agnix](https://github.com/agent-sh/agnix) | Linting | Lint agent configurations: SKILL.md, CLAUDE.md, hooks, MCP configs |
| [consult](https://github.com/agent-sh/consult) | Collaboration | Get a second opinion from another AI CLI tool without leaving your session |
| [debate](https://github.com/agent-sh/debate) | Collaboration | Stress-test ideas through structured multi-round debate between two AI tools |

## Installing Plugins

### Via Claude Code Marketplace

```bash
/plugin marketplace add agent-sh/agentsys
/plugin install next-task@agentsys
```

### Via npm Installer

```bash
npm install -g agentsys && agentsys
```

The npm installer installs all plugins at once for your selected platforms.

### Install Individual Plugins

```bash
# Claude Code marketplace
/plugin install <plugin-name>@agentsys

# Or load from local clone
git clone https://github.com/agent-sh/<plugin-name>.git
claude --plugin-dir ./<plugin-name>
```

## Plugin Dependencies

Most plugins are independent. Notable dependencies:

- **next-task** uses deslop (pre-review cleanup) and sync-docs (documentation updates) when available
- **next-task** uses the ship plugin for PR creation and merge
- **enhance** analyzers are invoked by the learn plugin after guide creation

All dependencies are optional. Plugins degrade gracefully when dependencies are not installed.

## Compatibility

All 13 plugins work on:

| Platform | Status |
|----------|--------|
| Claude Code | Fully supported |
| OpenCode | Fully supported |
| Codex CLI | Fully supported |
| Cursor | Coming soon |

## By the Numbers

- **13** plugins
- **42** agents across all plugins
- **28** skills across all plugins
- **3** supported platforms
- **26k** lines of shared library code
- **3,357** tests
