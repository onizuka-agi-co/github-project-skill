# アーキテクチャ

## リポジトリ構成

- `SKILL.md` は trigger 条件と実行フローを定義します。
- `agents/openai.yaml` は skill UI 用のメタデータです。
- `scripts/lib/github-project.mjs` は引数処理と `gh` wrapper を集約します。
- `scripts/*.mjs` は schema 取得や item 更新などの小さな操作単位です。
- `references/` はコマンド参照と field ID テンプレートを保持します。

## 設計方針

### Helper を小さく保つ

各 script は `gh project` の狭い責務だけを包み、失敗時の切り分けと再利用をしやすくします。

### 可搬性を優先する

project 操作は PowerShell 専用にせず、Node を薄い portability layer として使います。

### live discovery を優先する

field 名、option ID、project ID は固定値にせず GitHub からその都度取得します。
