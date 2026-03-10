# Usage

## Inspect The Current Project State

Get the schema:

```bash
node ./scripts/get_project_schema.mjs \
  --owner onizuka-agi-co \
  --project-number 2
```

Export items:

```bash
node ./scripts/export_project_items.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --limit 100
```

## Create Planning Work

Create a draft issue directly in the project:

```bash
node ./scripts/create_draft_issue.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --title "Draft task from automation" \
  --body "Track a repeatable planning task"
```

## Link Existing Implementation Work

Add a repository issue or pull request:

```bash
node ./scripts/add_project_item.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --url https://github.com/onizuka-agi-co/github-project-skill/issues/1
```

## Update A Field By Name

Use readable names instead of raw field IDs:

```bash
node ./scripts/set_project_field.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --item-id PVTI_xxx \
  --field-name Status \
  --option "In progress"
```

The helper resolves the project ID, field ID, and single-select option ID before sending the update.

## Recommended Workflow

1. Inspect the project schema before every editing session.
2. Export the current items before bulk changes or reporting.
3. Create draft issues for planning work that does not belong to a repository yet.
4. Add existing issues or pull requests when implementation work already exists.
5. Update one field at a time so failures are easier to debug.
6. Keep local notes of stable field IDs when the same project is updated often.
