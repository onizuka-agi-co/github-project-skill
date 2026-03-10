# Getting Started

## Prerequisites

- Node.js 20 or newer
- GitHub CLI authenticated with `project` scope
- A Codex environment that can load local skills

## Install The Skill Locally

Run:

```bash
node ./scripts/install_codex_skill_link.mjs
```

This creates a local link under `CODEX_HOME/skills` that points to this repository.

## Verify GitHub Access

Run:

```bash
gh auth status
```

If `project` scope is missing, run:

```bash
gh auth refresh -s project
```

## First Inspection Pass

Start with schema discovery before editing any item:

```bash
node ./scripts/get_project_schema.mjs --owner onizuka-agi-co --project-number 2
```

Then export a working snapshot:

```bash
node ./scripts/export_project_items.mjs --owner onizuka-agi-co --project-number 2 --limit 100
```
