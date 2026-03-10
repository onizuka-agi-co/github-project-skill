---
name: github-project
description: Create, inspect, and maintain GitHub Projects with GitHub CLI. Use when Codex needs to set up a GitHub Project, inspect project fields and items, add draft issues or repository issues to a project, update project status or priority fields, export project data, or keep issues and pull requests aligned with a GitHub Project workflow.
---

# GitHub Project

Use `gh project` as the default automation surface for GitHub Projects.

Prefer raw `gh` commands or the bundled Node `.mjs` helpers so the skill stays portable across Windows, macOS, and Linux.

## Preconditions

1. Verify authentication:

   ```bash
   gh auth status
   ```

2. If `project` scope is missing, refresh the token:

   ```bash
   gh auth refresh -s project
   ```

3. Identify the owner and project number before making edits.

## Inspect A Project First

Always inspect the live project before creating fields or changing items.

```bash
gh project list --owner onizuka-agi-co --format json
gh project view 1 --owner onizuka-agi-co --format json
gh project field-list 1 --owner onizuka-agi-co --format json
gh project item-list 1 --owner onizuka-agi-co --limit 100 --format json
```

Use [scripts/get_project_schema.mjs](./scripts/get_project_schema.mjs) when you want a compact JSON summary of the project ID, fields, and single-select options.

Use [scripts/export_project_items.mjs](./scripts/export_project_items.mjs) when you want a snapshot of project items for planning, reporting, or bulk cleanup.

## Common Operations

### Create Or Link A Project

Create a new project:

```bash
gh project create --owner onizuka-agi-co --title "Roadmap"
```

Link a repository:

```bash
gh project link 1 --owner onizuka-agi-co --repo onizuka-agi-co/skills
```

Create a single-select field:

```bash
gh project field-create 1 --owner onizuka-agi-co --name "Priority" --data-type "SINGLE_SELECT" --single-select-options "P0,P1,P2"
```

Use the browser for view layout changes when CLI coverage is not enough.

### Add Work To The Project

Create a draft issue item:

```bash
gh project item-create 1 --owner onizuka-agi-co --title "Draft task" --body "Describe the work"
```

Add an existing issue or pull request:

```bash
gh project item-add 1 --owner onizuka-agi-co --url https://github.com/onizuka-agi-co/skills/issues/1
```

Use [scripts/create_draft_issue.mjs](./scripts/create_draft_issue.mjs) or [scripts/add_project_item.mjs](./scripts/add_project_item.mjs) for repeatable local workflows.

### Update Item Fields

Inspect fields first, then update one field at a time.

```bash
gh project item-edit --id <item-id> --project-id <project-id> --field-id <field-id> --single-select-option-id <option-id>
```

Use [scripts/set_project_field.mjs](./scripts/set_project_field.mjs) when you want to update a field by field name and option name instead of raw IDs.

If you will edit the same project many times, store the discovered field and option IDs in [references/field-ids-template.md](./references/field-ids-template.md).

### Export And Review

Export items before large cleanups, prioritization passes, or release reviews.

```bash
gh project item-list 1 --owner onizuka-agi-co --limit 100 --format json
```

Use [references/gh-project-commands.md](./references/gh-project-commands.md) as the short command cheat sheet.

## Working Style

- Inspect the project schema before editing.
- Preserve existing field names and option names when the team already uses them.
- Keep workflows small and legible. `Status`, `Priority`, `Size`, and target dates are often enough.
- Prefer draft issues for planning work that is not yet tied to a specific repository.
- Prefer repository issues when the work is implementation-ready and should be tracked with commits and pull requests.
- Link pull requests back to issues so project status stays explainable.
- Export data before bulk changes.

## When To Read References

- Read [references/gh-project-commands.md](./references/gh-project-commands.md) for the core `gh project` command patterns.
- Read [references/field-ids-template.md](./references/field-ids-template.md) when the same project will be updated repeatedly and you want a stable local map of field IDs and option IDs.

## Example Requests

- "Set up a GitHub Project for this repo with Status, Priority, and Size."
- "Add these planning tasks as draft issues in the org project."
- "Move all ready items to In progress."
- "Export the current project board so we can clean up priorities."
- "Attach issue #12 and PR #27 to the same project workflow."
