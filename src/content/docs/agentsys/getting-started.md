---
title: Getting Started with AgentSys
description: Install AgentSys and run your first workflow.
---

## Prerequisites

- **Git** installed
- **Node.js 18+** installed
- **GitHub CLI** (`gh`) authenticated (for GitHub workflows)

## Installation

### Option 1: Claude Code Marketplace (Recommended)

Add the marketplace source, then install the plugins you want:

```bash
/plugin marketplace add agent-sh/agentsys
/plugin install next-task@agentsys
/plugin install ship@agentsys
/plugin install deslop@agentsys
/plugin install audit-project@agentsys
/plugin install drift-detect@agentsys
/plugin install repo-map@agentsys
/plugin install enhance@agentsys
/plugin install perf@agentsys
/plugin install sync-docs@agentsys
/plugin install learn@agentsys
/plugin install consult@agentsys
/plugin install debate@agentsys
```

#### Scopes

```bash
# User scope (default) -- available in all projects
/plugin install next-task@agentsys

# Project scope -- shared with your team via repo config
/plugin install next-task@agentsys --scope project
```

### Option 2: npm Global Install (All Platforms)

```bash
npm install -g agentsys@latest
agentsys
```

The interactive installer prompts you to select platforms:

```
Which platforms do you want to install for?

  1) Claude Code
  2) OpenCode
  3) Codex CLI

Your selection: 1 2
```

### Non-Interactive Install

For CI/scripts or when you already know what you want:

```bash
# Single platform
agentsys --tool claude
agentsys --tool opencode
agentsys --tool codex

# Multiple platforms
agentsys --tools "claude,opencode"
agentsys --tools claude,opencode,codex
```

## Verify Installation

### Claude Code

Run `/help` and confirm you see the installed commands:

- `/next-task` -- master workflow orchestrator
- `/ship` -- PR creation, CI, merge
- `/deslop` -- AI slop cleanup
- `/audit-project` -- multi-agent code review

### OpenCode / Codex

Type the command name and it should be recognized. Codex uses `$` prefix instead of `/`.

## First Run

Start the master workflow:

```bash
/next-task
```

This walks you through task selection, exploration, planning, implementation, review, and shipping -- all automated after you approve the plan.

Or use individual commands:

```bash
/deslop              # Clean AI artifacts from your code
/ship                # Ship the current branch as a PR
/audit-project       # Run a multi-agent code review
```

## Updating

```bash
# Marketplace
/plugin marketplace update agentsys

# npm
npm update -g agentsys
```

## Uninstalling

```bash
# Remove specific plugin
/plugin uninstall next-task@agentsys

# Remove marketplace entirely
/plugin marketplace remove agentsys

# Remove npm installation configs
agentsys --remove
npm uninstall -g agentsys
```

## Platform-Specific Notes

| Platform | Config Location | State Directory |
|----------|----------------|-----------------|
| Claude Code | Marketplace | `.claude/` |
| OpenCode | `~/.config/opencode/` | `.opencode/` |
| Codex CLI | `~/.codex/` | `.codex/` |

## Next Steps

- [Plugin Catalog](/agent-sh.dev/agentsys/plugins/) -- browse all 13 plugins
- [CLI Reference](/agent-sh.dev/agentsys/cli/) -- all flags and subcommands
