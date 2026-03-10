# トラブルシュート

## `gh auth status` で scope が足りない

次を実行します。

```bash
gh auth refresh -s project
```

## field 名が見つからない

- project schema 上の表記を確認します。
- `node ./scripts/get_project_schema.mjs ...` を再実行して現在の field 一覧を確認します。
- owner と project number の取り違えがないか見直します。

## option 名が見つからない

- single-select option 名は project の現在設定と完全一致している必要があります。
- schema を再取得し、GitHub が返した option 名をそのまま使います。

## skill link がすでに存在する

既存 link がこの repo を指していれば `install_codex_skill_link.mjs` は成功終了し、現在の link 情報を表示します。

別の場所を指している場合は、その item を削除するか、別の `--skill-name` を使ってください。

## docs site の asset path が崩れる

- VitePress の `base` が `/github-project-skill/` になっているか確認します。
- logo、hero、favicon、social card が `docs/public/` にあるか確認します。
- `docs/` 配下で `npm run docs:build` を実行して再ビルドします。

## repository QA が docs 編集後に失敗する

- 英日 guide page が並行して存在するか確認します。
- `README.md` と `README.ja.md` の両方に言語切替と contributing link が残っているか確認します。
- `node ./scripts/verify_repo_surfaces.mjs` を再実行して、欠けている参照を確認します。
