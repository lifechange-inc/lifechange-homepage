# 施工事例Markdown運用メモ

このフォルダに `*.md` を追加すると、施工事例一覧と関連事例に自動反映されます。

事務員向けの詳しい手順は [施工事例追加 5分で分かるマニュアル](../../docs/office-manual/case-posting-5min-manual.md) を確認してください。写真準備からChatGPT依頼、Markdown作成、公開前チェックまでをSTEP1〜STEP5でまとめています。

- ファイル名は `slug.md` にしてください。
- `slug` は英数字とハイフン推奨です。
- 画像は `/public/images/cases/{slug}/` 配下に保存し、frontmatter の `images` に `/images/cases/{slug}/main.jpg` のように記載してください。
- `_` から始まるMarkdownは読み込み対象外です。
- 新しい施工事例を上に出したい場合は `publishedAt` を新しい日付にしてください。

## 事務員向けの追加手順

1. `content/cases/` に施工事例用のMarkdownを1つ追加します。
2. 写真は `public/images/cases/{slug}/` に保存します。
3. Markdown内の `images` に、表示したい写真パスを追加します。
4. 文章は「お客様の悩み」「施工内容」「施工後の変化」が分かるように短くまとめます。
5. 料金や作業時間など未確定の情報は無理に書かず、確認できた内容だけ掲載します。

画像を差し替えるだけなら、同じファイル名で上書きすればページ側の修正は不要です。

必須frontmatter:

```yaml
---
slug: "matsudo-aircon-example"
title: "松戸市 エアコン交換工事の施工事例"
category: "エアコン交換"
area: "松戸市"
maker: "ダイキン"
work: "エアコン交換"
issue: "施工前の課題を記載します。"
method: "施工方法を記載します。"
after: "施工後の状態を記載します。"
benefit: "お客様にとってのメリットを記載します。"
publishedAt: "2026-06-23"
order: 1
images:
  - "/images/cases/matsudo-aircon-example/main.jpg"
---
```
