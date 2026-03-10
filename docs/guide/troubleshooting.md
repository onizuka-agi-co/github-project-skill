# Troubleshooting

## `gh auth status` shows missing scope

Run:

```bash
gh auth refresh -s project
```

## A field name cannot be found

- Check the exact field spelling in `gh project field-list`.
- Re-run `node ./scripts/get_project_schema.mjs ...` to inspect the current schema.
- Confirm that the field belongs to the project you are editing.

## An option name cannot be found

- Single-select option names must match the current project configuration.
- Export the schema and copy the option name exactly as GitHub returns it.

## The docs site renders broken asset paths

- Confirm the VitePress `base` is `/github-project-skill/`.
- Confirm logo and hero assets live under `docs/public/`.
- Rebuild locally with `npm run docs:build`.
