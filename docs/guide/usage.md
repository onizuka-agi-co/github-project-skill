# Usage

## Create A Draft Task

```bash
node ./scripts/create_draft_issue.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --title "Draft task from automation" \
  --body "Track a repeatable planning task"
```

## Add An Existing Issue Or Pull Request

```bash
node ./scripts/add_project_item.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --url https://github.com/onizuka-agi-co/github-project-skill/issues/1
```

## Update A Field By Name

```bash
node ./scripts/set_project_field.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --item-id PVTI_xxx \
  --field-name Status \
  --option "In progress"
```

## Recommended Workflow

1. Inspect the project schema.
2. Export current items before bulk changes.
3. Create draft tasks or add repository work.
4. Update one field at a time.
5. Keep a local note of stable field IDs when a project is updated frequently.
