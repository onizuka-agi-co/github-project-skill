---
layout: home

hero:
  name: GitHub Project Skill
  text: Operate GitHub Projects from Codex without platform lock-in
  tagline: Inspect schemas, add work items, update fields, and export project state with gh CLI plus small portable Node helpers.
  image:
    src: /hero.svg
    alt: GitHub Project Skill
  actions:
    - theme: brand
      text: Getting Started
      link: /guide/getting-started
    - theme: alt
      text: CLI Reference
      link: /guide/cli-reference
    - theme: alt
      text: GitHub
      link: https://github.com/onizuka-agi-co/github-project-skill

features:
  - title: Project-first automation
    details: The repo focuses on live project inspection, draft issue creation, item linking, and field updates instead of generic GitHub scripting.
  - title: Portable helpers
    details: Helper scripts stay on Node so the skill works across Windows, macOS, and Linux without assuming PowerShell.
  - title: Public repo ready
    details: README polish, docs QA, Pages deployment, and repository QA are included so the repo can be maintained like a reusable product.
  - title: Bilingual onboarding
    details: English and Japanese docs stay structurally parallel for onboarding, usage, architecture, troubleshooting, and CLI reference.
---

## What Ships In This Repository

- A production-ready `SKILL.md` for the `github-project` skill
- Node helpers for schema discovery, export, item creation, and field updates
- VitePress docs published to GitHub Pages
- References for command patterns and field ID notes
- Contribution guidance and repository QA for long-term maintenance

## Recommended First Move

1. Confirm `gh auth status` and refresh the `project` scope if needed.
2. Install the skill with `node ./scripts/install_codex_skill_link.mjs`.
3. Inspect the live project schema before editing any item.
4. Export project items before any bulk cleanup or reporting pass.
