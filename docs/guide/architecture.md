# Architecture

## Repository Layout

| Path | Role |
| --- | --- |
| `SKILL.md` | Trigger description, workflow guidance, and usage expectations for Codex |
| `agents/openai.yaml` | UI metadata for skill discovery surfaces |
| `scripts/lib/github-project.mjs` | Shared argument parsing, `gh` wrappers, and utility helpers |
| `scripts/*.mjs` | Focused commands for schema inspection and project item updates |
| `references/` | Reusable notes for command patterns and field IDs |
| `docs/` | Public-facing English and Japanese docs built with VitePress |

## Data Flow

1. The skill or a developer chooses a project owner and project number.
2. Helper scripts call `gh project` and request JSON output.
3. Shared helpers normalize that data into readable JSON or a targeted update call.
4. The repo documents both the raw `gh` path and the Node helper path so the workflow stays portable.

## Design Choices

### Keep The Helpers Small

Each script owns one narrow operation. That keeps failures easier to debug and makes it simpler to compose repeatable automations.

### Prefer Live Discovery

Project IDs, field IDs, and single-select options are discovered from GitHub instead of hard-coded into the skill.

### Preserve Cross-Platform Behavior

Project automation is intentionally Node-based so the repo does not depend on PowerShell, Bash-specific functions, or local shell aliases.

### Protect The Public Surface

Repository QA checks keep `README`, docs, skill metadata, and key file references aligned as the repo evolves.
