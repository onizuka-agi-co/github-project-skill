# GitHub Project Skill

[![Docs QA](https://github.com/onizuka-agi-co/github-project-skill/actions/workflows/docs-qa.yml/badge.svg)](https://github.com/onizuka-agi-co/github-project-skill/actions/workflows/docs-qa.yml)
[![Deploy Docs](https://github.com/onizuka-agi-co/github-project-skill/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/onizuka-agi-co/github-project-skill/actions/workflows/deploy-docs.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-0f172a.svg)](./LICENSE)
[![Skill](https://img.shields.io/badge/Codex-Skill-0ea5e9.svg)](./SKILL.md)

[English README](./README.md) | [Docs](https://onizuka-agi-co.github.io/github-project-skill/) | [Skill Source](./SKILL.md)

![GitHub Project Skill hero](./docs/public/hero.svg)

GitHub Project Skill は、`gh` CLI とポータブルな Node ヘルパーで GitHub Projects を操作するためのクロスプラットフォーム Codex skill です。プロジェクト作成、field 調査、draft issue 生成、item export、status 更新までを、別の Codex インスタンスが再利用しやすい形でまとめています。

## 🚀 このリポジトリの目的

- GitHub Projects を単なるボードではなく、実運用できる計画面にする
- Windows / macOS / Linux のどれでも同じ流れで使えるようにする
- 繰り返し使う `gh project` 操作を小さな helper script に閉じ込める
- 公開用ドキュメント、日英導線、GitHub Pages 公開まで含めて仕上げる

## 📦 含まれるもの

- [SKILL.md](./SKILL.md): skill 本体
- [agents/openai.yaml](./agents/openai.yaml): UI 向けメタデータ
- [scripts/](./scripts): `gh project` 操作用の Node helper 群
- [references/](./references): コマンド早見表と field ID メモ
- [docs/](./docs): VitePress ベースの英日ドキュメント

## ⚡ クイックスタート

1. リポジトリを clone します。
2. GitHub CLI の認証状態を確認します。

   ```bash
   gh auth status
   ```

3. skill をローカル Codex 環境へリンクします。

   ```bash
   node ./scripts/install_codex_skill_link.mjs
   ```

4. project schema を取得します。

   ```bash
   node ./scripts/get_project_schema.mjs --owner onizuka-agi-co --project-number 2
   ```

5. project items を export します。

   ```bash
   node ./scripts/export_project_items.mjs --owner onizuka-agi-co --project-number 2 --limit 100
   ```

## 🛠 主な helper

| Script | 役割 |
| --- | --- |
| `scripts/get_project_schema.mjs` | project ID、field、single-select option を取得 |
| `scripts/export_project_items.mjs` | planning や cleanup 用に item 一覧を JSON 出力 |
| `scripts/create_draft_issue.mjs` | project に draft task を追加 |
| `scripts/add_project_item.mjs` | 既存 issue / PR を project に追加 |
| `scripts/set_project_field.mjs` | field 名と option 名で field 更新 |
| `scripts/install_codex_skill_link.mjs` | `CODEX_HOME` 配下へ skill link を作成 |

## 🧭 コマンド例

draft issue を作る:

```bash
node ./scripts/create_draft_issue.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --title "Draft task from automation" \
  --body "Track a repeatable planning task"
```

item を `In progress` に移す:

```bash
node ./scripts/set_project_field.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --item-id PVTI_xxx \
  --field-name Status \
  --option "In progress"
```

## 📚 ドキュメント

- [Getting Started](./docs/guide/getting-started.md)
- [Usage](./docs/guide/usage.md)
- [Architecture](./docs/guide/architecture.md)
- [Troubleshooting](./docs/guide/troubleshooting.md)
- [日本語ドキュメント](./docs/ja/index.md)

## 🔎 リポジトリ整備メモ

- helper script は PowerShell 依存を避けるため Node ベースにしています。
- docs site の base path は `/github-project-skill/` に固定しています。
- GitHub Pages workflow を含めているので、そのまま公開導線に載せられます。

## 📄 ライセンス

このリポジトリは [MIT License](./LICENSE) で公開しています。
