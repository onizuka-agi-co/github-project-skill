# はじめに

## 前提

- Node.js 20 以上
- `project` scope を持つ GitHub CLI
- ローカル skill を読み込める Codex 環境

## ローカルへ skill を導入

次を実行します。

```bash
node ./scripts/install_codex_skill_link.mjs
```

これで `CODEX_HOME/skills` 配下にこの repo への link が作られます。

## GitHub 認証を確認

```bash
gh auth status
```

`project` scope がなければ次を実行します。

```bash
gh auth refresh -s project
```

## 最初の確認手順

まず schema を確認します。

```bash
node ./scripts/get_project_schema.mjs --owner onizuka-agi-co --project-number 2
```

次に item 一覧を export します。

```bash
node ./scripts/export_project_items.mjs --owner onizuka-agi-co --project-number 2 --limit 100
```
