<div align="center">
  <img src="./docs/public/logo.svg" alt="GitHub Project Skill logo" width="112" height="112">
  <h1>GitHub Project Skill</h1>
  <p><strong>Cross-platform Codex skill for GitHub Projects with <code>gh</code> CLI, portable Node helpers, bilingual docs, and GitHub Pages publishing.</strong></p>
  <p>
    <a href="./README.ja.md">日本語</a>
    ·
    <a href="https://onizuka-agi-co.github.io/github-project-skill/">Docs</a>
    ·
    <a href="./SKILL.md">Skill Source</a>
    ·
    <a href="./CONTRIBUTING.md">Contributing</a>
  </p>
  <p>
    <a href="https://github.com/onizuka-agi-co/github-project-skill/actions/workflows/repo-qa.yml"><img src="https://github.com/onizuka-agi-co/github-project-skill/actions/workflows/repo-qa.yml/badge.svg" alt="Repo QA"></a>
    <a href="https://github.com/onizuka-agi-co/github-project-skill/actions/workflows/docs-qa.yml"><img src="https://github.com/onizuka-agi-co/github-project-skill/actions/workflows/docs-qa.yml/badge.svg" alt="Docs QA"></a>
    <a href="https://github.com/onizuka-agi-co/github-project-skill/actions/workflows/deploy-docs.yml"><img src="https://github.com/onizuka-agi-co/github-project-skill/actions/workflows/deploy-docs.yml/badge.svg" alt="Deploy Docs"></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-0f172a.svg" alt="MIT License"></a>
    <a href="./SKILL.md"><img src="https://img.shields.io/badge/Codex-Skill-0ea5e9.svg" alt="Codex Skill"></a>
  </p>
</div>

![GitHub Project Skill hero](./docs/public/hero.svg)

GitHub Project Skill turns GitHub Projects into a repeatable operational surface for Codex. It packages a production-ready `SKILL.md`, focused `gh project` helpers, bilingual docs, and release-friendly repository plumbing so another Codex instance can inspect schemas, add work items, update fields, and export project state without platform lock-in.

## 🚀 Why This Repo

- Use GitHub Projects as a planning system, not just a manual board.
- Keep the workflow portable across Windows, macOS, and Linux.
- Wrap the most repetitive `gh project` operations in small Node helpers.
- Ship the skill with docs, CI, Pages deployment, and contribution guidance.

## ⚡ Quick Start

1. Confirm the environment contract:

   - Node.js 20 or newer
   - GitHub CLI authenticated with `project` scope
   - A Codex environment that can load local skills

2. Verify GitHub access:

   ```bash
   gh auth status
   gh auth refresh -s project
   ```

3. Install the skill into your local Codex home:

   ```bash
   node ./scripts/install_codex_skill_link.mjs
   ```

4. Inspect the live project before editing anything:

   ```bash
   node ./scripts/get_project_schema.mjs \
     --owner onizuka-agi-co \
     --project-number 2 \
     --out ./tmp/project-schema.json
   ```

5. Export a snapshot of project items:

   ```bash
   node ./scripts/export_project_items.mjs \
     --owner onizuka-agi-co \
     --project-number 2 \
     --limit 100 \
     --out ./tmp/project-items.json
   ```

6. Trigger the installed skill from Codex:

   ```text
   Use $github-project to inspect or update a GitHub Project with gh CLI.
   ```

## 📦 What Ships In The Repo

| Surface | Purpose |
| --- | --- |
| [`SKILL.md`](./SKILL.md) | Core skill prompt and operating guidance for Codex |
| [`agents/openai.yaml`](./agents/openai.yaml) | Skill metadata for UI discovery surfaces |
| [`scripts/`](./scripts) | Focused Node helpers for schema discovery, item export, item creation, and field updates |
| [`references/`](./references) | Command cheat sheets and reusable field ID notes |
| [`docs/`](./docs) | Bilingual VitePress docs published through GitHub Pages |
| [`CONTRIBUTING.md`](./CONTRIBUTING.md) | Local QA and contribution workflow for future maintenance |

## 🛠 Core Helpers

| Script | What it does |
| --- | --- |
| `scripts/get_project_schema.mjs` | Returns the project ID, fields, and single-select options as readable JSON |
| `scripts/export_project_items.mjs` | Exports the current project items payload for planning or cleanup |
| `scripts/create_draft_issue.mjs` | Creates a draft task directly in a GitHub Project |
| `scripts/add_project_item.mjs` | Adds an existing issue or pull request to a project |
| `scripts/set_project_field.mjs` | Updates a field by readable field name and option name |
| `scripts/install_codex_skill_link.mjs` | Links this repository into `CODEX_HOME/skills` |
| `scripts/verify_repo_surfaces.mjs` | Checks README/docs/skill metadata alignment for repository QA |

## 🧭 Common Workflows

Create a draft issue:

```bash
node ./scripts/create_draft_issue.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --title "Draft task from automation" \
  --body "Track a repeatable planning task"
```

Add an existing issue or pull request:

```bash
node ./scripts/add_project_item.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --url https://github.com/onizuka-agi-co/github-project-skill/issues/1
```

Move an item to `In progress`:

```bash
node ./scripts/set_project_field.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --item-id PVTI_xxx \
  --field-name Status \
  --option "In progress"
```

## 📚 Documentation

- [Docs home](https://onizuka-agi-co.github.io/github-project-skill/)
- [Getting Started](https://onizuka-agi-co.github.io/github-project-skill/guide/getting-started)
- [Usage](https://onizuka-agi-co.github.io/github-project-skill/guide/usage)
- [CLI Reference](https://onizuka-agi-co.github.io/github-project-skill/guide/cli-reference)
- [Architecture](https://onizuka-agi-co.github.io/github-project-skill/guide/architecture)
- [Troubleshooting](https://onizuka-agi-co.github.io/github-project-skill/guide/troubleshooting)
- [Japanese docs](https://onizuka-agi-co.github.io/github-project-skill/ja/)

## 🧪 Local QA

Run these checks before publishing repository changes:

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

## 🔎 Compatibility And Publishing Notes

- The helper scripts are intentionally Node-based so the repo does not assume PowerShell.
- The docs site is published with the repo-specific Pages base path `/github-project-skill/`.
- GitHub Actions cover repository QA, docs build QA, Pages deployment, and dependency update automation.

## 📄 License

This repository is released under the [MIT License](./LICENSE).
