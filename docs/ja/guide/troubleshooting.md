# トラブルシュート

## `gh auth status` で scope が足りない

```bash
gh auth refresh -s project
```

## field 名が見つからない

- `gh project field-list` で表記を確認します。
- `node ./scripts/get_project_schema.mjs ...` を再実行して現行 schema を見ます。
- 編集対象の project を取り違えていないか確認します。

## option 名が見つからない

- single-select option 名は project の現在値と一致している必要があります。
- schema を export して、GitHub が返す表記をそのまま使います。

## docs site で asset path が崩れる

- VitePress の `base` が `/github-project-skill/` になっているか確認します。
- logo や hero asset が `docs/public/` にあるか確認します。
- `npm run docs:build` で再ビルドします。
