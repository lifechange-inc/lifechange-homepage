import Link from "next/link";
import { CTAGroup } from "@/components/CTAGroup";
import { QualificationSummary } from "@/components/QualificationSummary";
import { Section } from "@/components/Section";
import { VisualGallery } from "@/components/VisualGallery";
import { siteConfig } from "@/data/site";
import { visualAssets } from "@/data/visuals";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "会社概要",
  description: "合同会社ライフチェンジの会社概要、対応エリア、事業内容、代表メッセージを掲載しています。",
  path: "/company"
});

const companyRows = [
  ["会社名", siteConfig.companyName],
  ["屋号", siteConfig.brandName],
  ["所在地", siteConfig.address],
  ["対応エリア", siteConfig.serviceArea.join("、")],
  ["代表者", siteConfig.representative],
  ["事業内容", siteConfig.businessLines.join("、")],
  ["営業時間", siteConfig.businessHours],
  ["電話番号", siteConfig.phone],
  ["メール", siteConfig.email]
] as const;

const companyVisuals = [
  {
    src: visualAssets.companyTeam,
    alt: "ライフチェンジ代表と職人チームのイメージ",
    title: "代表・職人の顔が見える会社",
    text: "地域のお客様が相談しやすい、現場に近い設備工事会社です。"
  },
  {
    src: visualAssets.worker,
    alt: "設備工事スタッフの作業イメージ",
    title: "職人直営で対応",
    text: "写真確認から施工後の説明まで、現場目線で分かりやすく対応します。"
  },
  {
    src: visualAssets.airconWork,
    alt: "エアコン施工中のイメージ",
    title: "作業風景を伝える",
    text: "エアコン、給湯器、キッチン設備など暮らしの設備交換に対応します。"
  }
];

export default function CompanyPage() {
  return (
    <main>
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
            COMPANY
          </p>
          <h1 className="text-4xl font-black tracking-normal text-ink-900 sm:text-5xl">会社概要</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ink-700">
            地域の方に安心して相談いただける設備工事会社として、工事品質と事前説明を大切にしています。
          </p>
        </div>
      </section>

      <Section
        eyebrow="PHOTO"
        title="地域密着の設備屋さんとして"
        lead="職人直営で、写真確認から施工後の説明まで現場に近い目線で対応します。"
      >
        <VisualGallery items={companyVisuals} />
      </Section>

      <Section eyebrow="PROFILE" title="基本情報">
        <div className="overflow-hidden rounded-card border border-forest-100 bg-white shadow-soft">
          <dl className="divide-y divide-forest-100">
            {companyRows.map(([label, value]) => (
              <div key={label} className="grid gap-2 px-5 py-4 sm:grid-cols-[180px_1fr]">
                <dt className="font-bold text-forest-800">{label}</dt>
                <dd className="text-ink-700">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="soft" eyebrow="MESSAGE" title="代表挨拶" lead="任せて良かったと思っていただける工事を目指しています。">
        <div className="max-w-3xl rounded-card bg-white p-6 leading-9 text-ink-700 shadow-soft">
          <p>
            エアコン交換は、設置する機種だけでなく、配管処理、室外機の置き方、追加工事の説明によって満足度が大きく変わります。
            ライフチェンジでは、工事前に状況を確認し、必要な作業をわかりやすくお伝えしたうえで施工します。
          </p>
          <p className="mt-4">
            松戸市を中心とした地域密着の会社として、施工後も気軽に相談できる対応を心がけています。
          </p>
          <Link
            href="/company/message"
            className="mt-6 inline-flex rounded-card bg-forest-800 px-5 py-3 text-sm font-black text-white shadow-lift transition hover:bg-forest-700"
          >
            代表挨拶を詳しく読む
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="LICENSE"
        title="代表者保有資格・許可"
        lead="電気、ガス、水道、施工管理、安全作業まで、生活設備工事に関わる資格・許可をカテゴリ別に整理しています。"
      >
        <QualificationSummary variant="full" />
      </Section>

      <Section tone="clay" eyebrow="CONTACT" title="工事を相談する">
        <CTAGroup />
      </Section>
    </main>
  );
}
