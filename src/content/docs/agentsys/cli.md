---
title: CLI Reference
description: AgentSys CLI subcommands, flags, and usage examples.
---

The `agentsys` CLI is the npm-based installer. It configures plugins for your AI coding tools.

## Usage

```bash
agentsys [options]
```

Running `agentsys` with no arguments starts the interactive installer.

## Subcommands

### install

Install plugins from the registry.

```bash
agentsys install <plugin-name>
agentsys install next-task
agentsys install ship deslop enhance
```

### remove

Remove installed plugins.

```bash
agentsys remove <plugin-name>
agentsys remove next-task
```

### search

Search for plugins in the registry.

```bash
agentsys search <query>
agentsys search workflow
agentsys search review
```

### list

List installed plugins.

```bash
agentsys list
```

### update

Update installed plugins to the latest version.

```bash
agentsys update
agentsys update <plugin-name>
```

## Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--tool <name>` | | Install for a single platform: `claude`, `opencode`, or `codex` |
| `--tools <list>` | | Install for multiple platforms (comma-separated): `"claude,opencode"` |
| `--only <plugins>` | | Install only specific plugins (comma-separated) |
| `--development` | `--dev` | Development mode: install directly to `~/.claude/plugins` instead of marketplace |
| `--no-strip` | `-ns` | Include model specifications in agents (stripped by default for OpenCode) |
| `--remove` | | Remove local installation and clean up configs |
| `--version` | `-v` | Show version |
| `--help` | `-h` | Show help |

## Examples

### Interactive Install

```bash
npm install -g agentsys
agentsys
```

Prompts for platform selection and installs all plugins.

### Single Platform

```bash
agentsys --tool claude
```

### Multiple Platforms

```bash
agentsys --tools "claude,opencode,codex"
```

### Development Mode

Bypasses the marketplace and installs plugins directly. Useful for testing RC versions or local changes.

```bash
agentsys --development
```

To revert to the marketplace version:

```bash
rm -rf ~/.claude/plugins/*@agentsys
agentsys --tool claude
```

### Model Stripping

By default, model specifications (sonnet/opus/haiku) are stripped from agents when installing for OpenCode. This prevents errors when the target platform does not have the same model mappings.

Use `--no-strip` to keep model specs if your OpenCode setup has proper model aliases:

```bash
agentsys --tool opencode --no-strip
```

### Update

```bash
npm update -g agentsys
```

### Uninstall

```bash
agentsys --remove       # Clean up configs
npm uninstall -g agentsys  # Remove the npm package
```
