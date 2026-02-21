---
title: Agent Skills Catalog
description: Cross-tool standard skills available across all AgentSys plugins.
---

Agent Skills are reusable implementation units that agents invoke. They follow a cross-tool standard: each skill is defined in a `SKILL.md` file with frontmatter metadata and implementation instructions. Skills work across Claude Code, OpenCode, and Codex CLI.

## How Skills Work

- **Commands** orchestrate workflows
- **Agents** make decisions and invoke skills
- **Skills** contain the implementation

When you install a plugin, its skills become available to all agents in that session. Skills are triggered by name from agent prompts.

## Skills by Plugin

### next-task

| Skill | Description |
|-------|-------------|
| discover-tasks | Find and rank tasks from GitHub Issues, GitHub Projects, GitLab, or local files |
| validate-delivery | Verify tests pass, build passes, and requirements are met before shipping |
| orchestrate-review | Spawn parallel reviewers (code quality, security, performance, test coverage) |

### ship

| Skill | Description |
|-------|-------------|
| create-pr | Stage, commit, push, and create a pull request |
| monitor-ci | Watch CI status, retry on transient failures |
| address-comments | Handle every review comment from every reviewer |
| merge-pr | Merge when all comments resolved and CI passes |

### deslop

| Skill | Description |
|-------|-------------|
| deslop | Three-phase detection: regex patterns, multi-pass analyzers, CLI tools |

### audit-project

| Skill | Description |
|-------|-------------|
| orchestrate-review | Coordinate up to 10 specialized role-based review agents |

### enhance

| Skill | Description |
|-------|-------------|
| enhance-plugins | Analyze plugin structure, MCP tool definitions, security patterns |
| enhance-agents | Analyze agent frontmatter and prompt quality |
| enhance-claudemd | Analyze CLAUDE.md/AGENTS.md structure and token efficiency |
| enhance-docs | Analyze documentation readability and RAG optimization |
| enhance-prompts | Analyze prompt engineering patterns, clarity, examples |
| enhance-hooks | Analyze hook frontmatter, structure, safety |
| enhance-skills | Analyze SKILL.md structure and trigger phrases |

### drift-detect

| Skill | Description |
|-------|-------------|
| drift-analysis | JavaScript collectors gather data, single Opus call performs semantic analysis |

### perf

| Skill | Description |
|-------|-------------|
| baseline | Run 60s minimum baseline measurements |
| benchmark | Execute controlled benchmark runs |
| profile | Language-specific profiling (--cpu-prof, JFR, cProfile, pprof) |
| theory-tester | Validate performance hypotheses with controlled experiments |

### repo-map

| Skill | Description |
|-------|-------------|
| repo-mapping | Build and cache AST-based symbol and import maps |

### sync-docs

| Skill | Description |
|-------|-------------|
| sync-docs | Find outdated refs, version mismatches, stale examples, missing CHANGELOG entries |

### learn

| Skill | Description |
|-------|-------------|
| research-topic | Progressive discovery with quality scoring and just-in-time extraction |

### consult

| Skill | Description |
|-------|-------------|
| consult-tool | Detect installed AI CLIs, map effort levels, execute consultation |

### debate

| Skill | Description |
|-------|-------------|
| run-debate | Multi-round proposer/challenger format with final verdict |

## Supported Tools

All skills work on:

| Platform | Trigger Prefix |
|----------|---------------|
| Claude Code | `/command-name` |
| OpenCode | `/command-name` |
| Codex CLI | `$command-name` |

## Building Custom Skills

Skills follow the `SKILL.md` standard. Each skill file contains:

- **Frontmatter**: name, description, trigger phrases, supported tools
- **Implementation**: step-by-step instructions the agent follows

Use [Agnix](/agent-sh.dev/agnix/) to validate your skill files before deployment.
