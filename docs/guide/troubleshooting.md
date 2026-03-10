# Troubleshooting

## `gh auth status` shows a missing scope

Refresh the token:

```bash
gh auth refresh -s project
```

## A field name cannot be found

- Check the exact field spelling in the project schema.
- Re-run `node ./scripts/get_project_schema.mjs ...` to inspect the current field list.
- Confirm that the field belongs to the same owner and project number you are editing.

## An option name cannot be found

- Single-select option names must match the current project configuration exactly.
- Export the schema again and copy the option name from GitHub's current response.

## The skill link already exists

If the existing link already targets this repository, `install_codex_skill_link.mjs` exits successfully and prints the current link details.

If the path points somewhere else, remove the existing item or pass a different `--skill-name`.

## The docs site renders broken asset paths

- Confirm the VitePress `base` is `/github-project-skill/`.
- Confirm logo, hero, favicon, and social card assets live under `docs/public/`.
- Rebuild locally with `npm run docs:build` from `docs/`.

## Repository QA fails after docs edits

- Make sure English and Japanese guide pages still exist in parallel.
- Check that both `README.md` and `README.ja.md` keep their language switch and contributing links.
- Re-run `node ./scripts/verify_repo_surfaces.mjs` to see the exact missing reference.
