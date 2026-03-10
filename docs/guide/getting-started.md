# Getting Started

## Prerequisites

| Requirement | Why it matters |
| --- | --- |
| Node.js 20 or newer | Runs the portable helper scripts and local docs tooling |
| GitHub CLI with `project` scope | Required for `gh project` inspection and updates |
| A Codex environment with local skills enabled | Needed to install and invoke the skill locally |

## Install The Skill Locally

Run:

```bash
node ./scripts/install_codex_skill_link.mjs
```

The script creates a link under `CODEX_HOME/skills` and reuses the existing link when it already points at this repository.

## Verify GitHub Access

Run:

```bash
gh auth status
```

If the `project` scope is missing, refresh the token:

```bash
gh auth refresh -s project
```

## Inspect A Project Before Editing

Start with a schema snapshot:

```bash
node ./scripts/get_project_schema.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --out ./tmp/project-schema.json
```

Then export the current items:

```bash
node ./scripts/export_project_items.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --limit 100 \
  --out ./tmp/project-items.json
```

These two files give you the project ID, field metadata, and a restorable working snapshot before any changes.

## Trigger The Skill From Codex

After the link is installed, a simple prompt is enough:

```text
Use $github-project to inspect or update a GitHub Project with gh CLI.
```

## Recommended First Session

1. Confirm auth and scope.
2. Install the skill link.
3. Inspect the live schema.
4. Export items.
5. Only then create or edit project work items.
