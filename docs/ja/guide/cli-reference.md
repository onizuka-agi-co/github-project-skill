# CLI リファレンス

## 共通の使い方

helper script はすべて `--flag value` 形式の引数を使い、実際の project 操作は GitHub CLI に委譲します。

## Script 一覧

| Script | 必須引数 | 任意引数 | 出力 |
| --- | --- | --- | --- |
| `get_project_schema.mjs` | `--owner`, `--project-number` | `--out` | project metadata、field、single-select option を JSON 出力 |
| `export_project_items.mjs` | `--owner`, `--project-number` | `--limit`, `--out` | item 一覧 payload を JSON 出力 |
| `create_draft_issue.mjs` | `--owner`, `--project-number`, `--title` | `--body` | 作成した draft issue item の JSON 応答 |
| `add_project_item.mjs` | `--owner`, `--project-number`, `--url` | なし | 追加した item の JSON 応答 |
| `set_project_field.mjs` | `--owner`, `--project-number`, `--item-id`, `--field-name` | `--text`, `--date`, `--number`, `--option`, `--clear` のいずれか 1 つ | field 更新の JSON 応答 |
| `install_codex_skill_link.mjs` | なし | `--skill-source-path`, `--codex-home`, `--skill-name` | 作成または再利用した skill link の JSON 説明 |

## schema 取得

```bash
node ./scripts/get_project_schema.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --out ./tmp/project-schema.json
```

field を更新する前にこの command を実行し、現行の field 名と single-select option を確認します。

## item export

```bash
node ./scripts/export_project_items.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --limit 100 \
  --out ./tmp/project-items.json
```

報告、cleanup、bulk field 変更の前に実行しておくと安全です。

## field 更新

single-select field を更新する:

```bash
node ./scripts/set_project_field.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --item-id PVTI_xxx \
  --field-name Status \
  --option "In progress"
```

date field を更新する:

```bash
node ./scripts/set_project_field.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --item-id PVTI_xxx \
  --field-name "Target date" \
  --date 2026-03-10
```

field をクリアする:

```bash
node ./scripts/set_project_field.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --item-id PVTI_xxx \
  --field-name "Target date" \
  --clear
```

## raw `gh` を優先する場面

- 手元で探索的に確認したいときは raw `gh project` command が向いています。
- ローカル automation や field 名ベースの読みやすい更新が必要なときは bundled Node helper が向いています。
