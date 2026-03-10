# Contributing

## What To Keep Stable

- The `github-project` skill name and trigger wording
- Cross-platform Node helper behavior
- Parallel English and Japanese docs structure
- Repository QA, docs QA, and Pages deployment paths

## Local Workflow

1. Inspect the current repository surface before changing public-facing files.
2. Keep English and Japanese docs structurally aligned when you touch one locale.
3. Prefer focused commits that can be understood and reverted independently.

## Required Checks

Run these before opening a pull request or pushing directly:

```bash
node --check ./scripts/lib/github-project.mjs
node --check ./scripts/get_project_schema.mjs
node --check ./scripts/export_project_items.mjs
node --check ./scripts/create_draft_issue.mjs
node --check ./scripts/add_project_item.mjs
node --check ./scripts/set_project_field.mjs
node --check ./scripts/install_codex_skill_link.mjs
node --check ./scripts/verify_repo_surfaces.mjs
node ./scripts/verify_repo_surfaces.mjs
cd docs && npm ci && npm run docs:build
```

## Editing Guidance

- Update `README.md` and `README.ja.md` together when top-level onboarding changes.
- Keep `docs/guide/*` and `docs/ja/guide/*` structurally parallel.
- Prefer documenting raw `gh project` commands and the bundled Node helpers together.
- If Pages URLs change, update the VitePress `base`, sitemap hostname, README docs links, and social metadata in the same change.

## Pull Request Notes

- Summarize the user-visible changes first.
- Mention which local QA commands were run.
- Call out any external blocker, such as GitHub Pages or repository settings.
