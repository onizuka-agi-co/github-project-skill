# アーキテクチャ

## リポジトリ構成

| Path | 役割 |
| --- | --- |
| `SKILL.md` | Codex 向けの trigger 条件、実行フロー、期待動作 |
| `agents/openai.yaml` | skill UI discovery 用のメタデータ |
| `scripts/lib/github-project.mjs` | 引数処理、`gh` wrapper、共通 utility |
| `scripts/*.mjs` | schema 取得や project item 更新を担う小さな command 群 |
| `references/` | コマンド例と field ID メモ |
| `docs/` | VitePress で構築する英日公開ドキュメント |

## データフロー

1. skill または開発者が owner と project number を決める
2. helper script が `gh project` を JSON 形式で呼び出す
3. 共通 helper が読みやすい JSON 出力または対象 field 更新に整える
4. raw `gh` の経路と Node helper の経路を両方ドキュメント化して可搬性を保つ

## 設計方針

### Helper を小さく保つ

各 script は狭い責務だけを持ちます。これにより失敗時の切り分けと automation への再利用がしやすくなります。

### live discovery を優先する

project ID、field ID、single-select option は固定値ではなく GitHub から都度取得します。

### クロスプラットフォーム性を守る

project automation は Node ベースにして、PowerShell 専用記法や shell alias に依存しないようにします。

### 公開 surface を保護する

repository QA により `README`、docs、skill metadata、主要ファイル参照の整合性を保ちます。
