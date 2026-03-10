# 使い方

## Draft Task を作る

```bash
node ./scripts/create_draft_issue.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --title "Draft task from automation" \
  --body "Track a repeatable planning task"
```

## 既存 Issue / PR を追加する

```bash
node ./scripts/add_project_item.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --url https://github.com/onizuka-agi-co/github-project-skill/issues/1
```

## Field 名で更新する

```bash
node ./scripts/set_project_field.mjs \
  --owner onizuka-agi-co \
  --project-number 2 \
  --item-id PVTI_xxx \
  --field-name Status \
  --option "In progress"
```

## 推奨フロー

1. project schema を確認する
2. bulk 変更前に item を export する
3. draft task を作るか既存 work item を追加する
4. field は 1 回につき 1 項目ずつ更新する
5. 繰り返し触る project は field ID をローカルに記録する
