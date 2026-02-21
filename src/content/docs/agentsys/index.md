---
title: AgentSys
description: Marketplace and installer for AI agent workflow plugins.
---

AgentSys is a modular runtime and orchestration system for AI agents. It provides 13 plugins, 42 agents, and 28 skills that compose into structured pipelines for software development.

Each plugin lives in its own standalone repo under the [agent-sh](https://github.com/agent-sh) org. AgentSys is the marketplace and installer that ties them together.

## Supported Platforms

| Platform | Install Method | Command Prefix |
|----------|---------------|----------------|
| Claude Code | Marketplace (recommended) | `/` |
| OpenCode | npm installer | `/` |
| Codex CLI | npm installer | `$` |
| Cursor | Coming soon | -- |

## Quick Install

### Claude Code (Marketplace)

```bash
/plugin marketplace add agent-sh/agentsys
/plugin install next-task@agentsys
/plugin install ship@agentsys
```

### All Platforms (npm)

```bash
npm install -g agentsys && agentsys
```

The interactive installer lets you select one or more platforms and installs all plugins.

### Non-Interactive

```bash
agentsys --tool claude
agentsys --tools "claude,opencode,codex"
```

## What You Get

13 plugins covering the full development lifecycle:

| Category | Plugins |
|----------|---------|
| Workflow | next-task, ship |
| Code Quality | deslop, audit-project, enhance |
| Analysis | drift-detect, perf, repo-map |
| Documentation | sync-docs, learn |
| Linting | agnix |
| Collaboration | consult, debate |

## Next Steps

- [Getting Started](/agent-sh.dev/agentsys/getting-started/) -- installation walkthrough
- [Plugin Catalog](/agent-sh.dev/agentsys/plugins/) -- all 13 plugins with details
- [CLI Reference](/agent-sh.dev/agentsys/cli/) -- all subcommands and flags
