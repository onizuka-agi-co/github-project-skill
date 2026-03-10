# CLI Reference

## Shared Usage Pattern

All helper scripts use `--flag value` style arguments and rely on GitHub CLI for the actual project operations.

## Script Reference

| Script | Required arguments | Optional arguments | Output |
| --- | --- | --- | --- |
| `get_project_schema.mjs` | `--owner`, `--project-number` | `--out` | Project metadata, fields, and single-select options as JSON |
| `export_project_items.mjs` | `--owner`, `--project-number` | `--limit`, `--out` | Raw item list payload as JSON |
| `create_draft_issue.mjs` | `--owner`, `--project-number`, `--title` | `--body` | JSON response for the created draft issue item |
| `add_project_item.mjs` | `--owner`, `--project-number`, `--url` | None | JSON response for the linked item |
| `set_project_field.mjs` | `--owner`, `--project-number`, `--item-id`, `--field-name` | Exactly one of `--text`, `--date`, `--number`, `--option`, or `--clear` | JSON response for the field update |
| `install_codex_skill_link.mjs` | None | `--skill-source-path`, `--codex-home`, `--skill-name` | JSON description of the created or reused skill link |

## Schema Discovery

```bash
node ./scripts/get_project_schema.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --out ./tmp/project-schema.json
```

Use this before editing any field so the current field names and single-select options are known.

## Item Export

```bash
node ./scripts/export_project_items.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --limit 100 \
  --out ./tmp/project-items.json
```

Use this before reporting, cleanup work, or bulk field changes.

## Field Updates

Update a single-select field:

```bash
node ./scripts/set_project_field.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --item-id PVTI_xxx \
  --field-name Status \
  --option "In progress"
```

Update a date field:

```bash
node ./scripts/set_project_field.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --item-id PVTI_xxx \
  --field-name "Target date" \
  --date 2026-03-10
```

Clear a field:

```bash
node ./scripts/set_project_field.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --item-id PVTI_xxx \
  --field-name "Target date" \
  --clear
```

## When To Prefer Raw `gh`

- Use raw `gh project` commands when you are exploring interactively.
- Use the bundled Node helpers when you need repeatable local automation or friendlier field-name-based updates.
