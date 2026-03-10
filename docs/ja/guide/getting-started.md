# はじめに

## 前提

| 要件 | 理由 |
| --- | --- |
| Node.js 20 以上 | ポータブル helper script と docs tooling を動かすため |
| `project` scope を持つ GitHub CLI | `gh project` の参照と更新に必要 |
| ローカル skill を読み込める Codex 環境 | skill をインストールして呼び出すため |

## ローカルへ skill を導入

次を実行します。

```bash
node ./scripts/install_codex_skill_link.mjs
```

この script は `CODEX_HOME/skills` 配下に link を作成し、すでに同じ repo を指している場合はそのまま成功終了します。

## GitHub 認証を確認

```bash
gh auth status
```

`project` scope がなければ次を実行します。

```bash
gh auth refresh -s project
```

## 編集前に project を確認する

まず schema を保存します。

```bash
node ./scripts/get_project_schema.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --out ./tmp/project-schema.json
```

次に item 一覧を export します。

```bash
node ./scripts/export_project_items.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --limit 100 \
  --out ./tmp/project-items.json
```

この 2 つのファイルがあれば、project ID、field metadata、変更前の作業スナップショットを手元に残せます。

## Codex から skill を呼び出す

link の導入後は、次の prompt で十分です。

```text
Use $github-project to inspect or update a GitHub Project with gh CLI.
```

## 最初のセッションでやること

1. 認証と scope を確認する
2. skill link を導入する
3. live schema を取得する
4. item 一覧を export する
5. その後で work item を作成または更新する
