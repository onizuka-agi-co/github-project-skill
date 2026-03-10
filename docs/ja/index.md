---
layout: home

hero:
  name: GitHub Project Skill
  text: プラットフォーム依存なしで GitHub Projects を Codex から運用する
  tagline: gh CLI と小さな Node helper を使って、schema 調査、work item 追加、field 更新、project 状態の export を進めます。
  image:
    src: /hero.svg
    alt: GitHub Project Skill
  actions:
    - theme: brand
      text: はじめに
      link: /ja/guide/getting-started
    - theme: alt
      text: CLI リファレンス
      link: /ja/guide/cli-reference
    - theme: alt
      text: GitHub
      link: https://github.com/onizuka-agi-co/github-project-skill

features:
  - title: GitHub Projects に特化
    details: 汎用 GitHub script ではなく、schema 取得、draft issue 作成、item 追加、field 更新に集中しています。
  - title: 可搬性を優先
    details: helper script は Node ベースなので、Windows / macOS / Linux で同じ手順を取りやすくなっています。
  - title: 公開リポジトリ前提
    details: README 整備、docs QA、Pages deploy、repo QA を含めて、再利用しやすい公開状態を維持できます。
  - title: 日英並行導線
    details: はじめに、使い方、アーキテクチャ、トラブルシュート、CLI リファレンスを英日で揃えています。
---

## このリポジトリに含まれるもの

- `github-project` skill 向けの実用的な `SKILL.md`
- schema 取得、export、item 作成、field 更新のための Node helper
- GitHub Pages に公開する VitePress docs
- コマンド早見表と field ID メモ
- 継続運用のための contribution guide と repository QA

## 最初にやること

1. `gh auth status` を確認し、必要なら `project` scope を追加します。
2. `node ./scripts/install_codex_skill_link.mjs` で skill を導入します。
3. item を触る前に live project schema を取得します。
4. bulk な cleanup や報告の前に project items を export します。
