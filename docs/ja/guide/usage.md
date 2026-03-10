# 使い方

## 現在の project 状態を確認する

schema を取得する:

```bash
node ./scripts/get_project_schema.mjs \
  --owner onizuka-agi-co \
  --project-number 2
```

item 一覧を export する:

```bash
node ./scripts/export_project_items.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --limit 100
```

## planning 用の work を作る

project に draft issue を追加する:

```bash
node ./scripts/create_draft_issue.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --title "Draft task from automation" \
  --body "Track a repeatable planning task"
```

## 既存の実装 work を関連付ける

repository 側の issue または pull request を追加する:

```bash
node ./scripts/add_project_item.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --url https://github.com/onizuka-agi-co/github-project-skill/issues/1
```

## field 名で更新する

生の field ID ではなく読みやすい名前で更新できます。

```bash
node ./scripts/set_project_field.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --item-id PVTI_xxx \
  --field-name Status \
  --option "In progress"
```

この helper は project ID、field ID、single-select option ID を解決してから更新を送ります。

## 推奨ワークフロー

1. 編集セッションごとに project schema を確認する
2. bulk 変更や報告の前に item 一覧を export する
3. repository に紐付かない planning work は draft issue で管理する
4. 既存の実装 work があるときは issue / PR を追加する
5. field 更新は 1 回につき 1 項目ずつにして切り分けをしやすくする
6. 同じ project を何度も触る場合は stable な field ID をメモする
