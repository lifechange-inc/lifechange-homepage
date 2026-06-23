# LifeChange Homepage

合同会社ライフチェンジのホームページ制作データです。

このリポジトリは公開用です。見積マニュアル、施工マニュアル、会社DNA、AIルールなどの内部ナレッジは含めません。内部ナレッジは非公開リポジトリ `lifechange-inc/lifechange-knowledge` で管理します。

## 目的

- 地域のお客様が見やすいホームページを運用する
- 問い合わせにつながるサービスページを改善する
- 施工事例をMarkdownで追加しやすくする
- Claude、ChatGPT、CodexなどのAIから構成を参照しやすくする

## 技術構成

- Next.js 14
- TypeScript
- Tailwind CSS
- Markdown施工事例管理

## 主なディレクトリ

```text
app/                  Next.js App Router pages
components/           共通UIコンポーネント
data/                 サービス、料金、ナビゲーション、将来構想データ
content/cases/        施工事例Markdown
lib/                  Markdown読み込み、構造化データなどの補助関数
public/images/        公開画像
scripts/              開発・ビルド補助スクリプト
```

## ローカル起動

```bash
npm install
npm run dev
```

表示URL:

```text
http://localhost:3000/
```

## 施工事例の追加方法

1. `content/cases/` にMarkdownファイルを追加します。
2. 画像は `public/images/cases/{slug}/` に保存します。
3. Markdown frontmatter の `images` に `/images/cases/{slug}/main.jpg` のように記載します。
4. 施工事例一覧ページ `/cases` に自動反映されます。

詳しい形式は `content/cases/_README.md` と `content/cases/_template.md` を確認してください。

## 画像管理ルール

```text
public/images/hero/
public/images/services/
public/images/cases/
public/images/company/
public/images/future/
public/images/reviews/
```

## AIへ依頼するときの前提

- お客様向けの分かりやすさを優先する
- スマホ表示を優先する
- 文字だけのページにしない
- 施工事例は `content/cases/` のMarkdownで追加する
- 内部マニュアルや会社DNAを公開リポジトリへ追加しない
- `.env`、APIキー、パスワード、`.next`、`node_modules` をコミットしない

## 内部ナレッジの管理

以下は公開しない情報です。

- 見積マニュアル
- 施工マニュアル
- 会社DNA
- AIルール
- 事務対応マニュアル
- 新人教育マニュアル

これらは非公開リポジトリ `lifechange-inc/lifechange-knowledge` で管理します。
