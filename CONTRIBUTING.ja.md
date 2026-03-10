# Contributing

## 安定して保つもの

- `github-project` という skill 名と trigger wording
- クロスプラットフォームな Node helper の挙動
- 英日 docs の並行構造
- repository QA、docs QA、Pages deploy の経路

## ローカルでの進め方

1. 公開 surface を変える前に現在の構成を確認します。
2. 片方の locale を変更したら、英日 docs の構造をそろえます。
3. 差し戻ししやすい小さな commit に分けます。

## 必須チェック

pull request 作成前または直接 push 前に、次を実行します。

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

## 編集ガイド

- 上位 onboarding を変えるときは `README.md` と `README.ja.md` を一緒に更新します。
- `docs/guide/*` と `docs/ja/guide/*` は構造を並行に保ちます。
- raw `gh project` command と bundled Node helper をセットで説明します。
- Pages URL を変える場合は、VitePress の `base`、sitemap hostname、README の docs link、social metadata を同じ変更で更新します。

## Pull Request メモ

- まず user-visible な変更を要約します。
- 実行したローカル QA command を書きます。
- GitHub Pages や repository settings など外部 blocker があれば明記します。
