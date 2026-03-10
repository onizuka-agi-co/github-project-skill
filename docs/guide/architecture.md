# Architecture

## Repository Layout

- `SKILL.md` contains the trigger description and workflow guidance.
- `agents/openai.yaml` provides UI metadata for skill surfaces.
- `scripts/lib/github-project.mjs` centralizes argument parsing and `gh` wrappers.
- `scripts/*.mjs` expose focused commands for schema discovery and item updates.
- `references/` stores reusable command notes and field-ID templates.

## Design Choices

### Keep The Helpers Small

Each script wraps a narrow part of `gh project` so failures are easier to debug and reuse is straightforward.

### Stay Portable

The repo avoids PowerShell-only operational scripts for project work. Node is used as the thin portability layer over `gh`.

### Prefer Live Discovery

Field names, option IDs, and project IDs are discovered from GitHub instead of hard-coded into the skill.
