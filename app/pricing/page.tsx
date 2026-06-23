import { CTAGroup } from "@/components/CTAGroup";
import { PriceTable } from "@/components/PriceTable";
import { Section } from "@/components/Section";
import { VisualGallery } from "@/components/VisualGallery";
import { basePrices, cleaningComparison, extraPrices } from "@/data/pricing";
import { visualAssets } from "@/data/visuals";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "料金",
  description: "エアコン交換・取付で発生しやすい基本工事と追加工事の料金目安を掲載しています。",
  path: "/pricing"
});

const pricingVisuals = [
  {
    src: visualAssets.airconWork,
    alt: "エアコン工事料金の確認イメージ",
    title: "基本工事",
    text: "能力、設置場所、室外機位置で基本料金を確認します。"
  },
  {
    src: visualAssets.priceCheck,
    alt: "追加工事料金の確認イメージ",
    title: "追加工事",
    text: "配管延長、化粧カバー、穴あけ、高所作業を作業前に説明します。"
  },
  {
    src: visualAssets.safeWire,
    alt: "電気まわり確認の写真",
    title: "電気まわり",
    text: "コンセント、電圧、専用回路などは安全確認を優先します。"
  }
];

export default function PricingPage() {
  return (
    <main>
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
            PRICE
          </p>
          <h1 className="text-4xl font-black tracking-normal text-ink-900 sm:text-5xl">料金</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ink-700">
            料金は現場条件により変わります。追加工事が必要な場合は、作業前に内容と費用の目安を説明します。
          </p>
        </div>
      </section>

      <Section
        eyebrow="PHOTO"
        title="料金が変わりやすい確認ポイント"
        lead="写真があると、追加工事の可能性を事前に整理しやすくなります。"
      >
        <VisualGallery items={pricingVisuals} />
      </Section>

      <Section eyebrow="BASE" title="基本料金の目安" lead="エアコン交換や取付でよく発生する項目です。">
        <PriceTable rows={basePrices} />
      </Section>

      <Section tone="soft" eyebrow="EXTRA" title="追加工事の目安" lead="設置場所や既存設備の状態によって必要になる場合があります。">
        <PriceTable rows={extraPrices} />
      </Section>

      <Section eyebrow="MODEL" title="機種選びで変わる費用" lead="本体価格やメンテナンス費用も含めて比較すると、総額の判断がしやすくなります。">
        <div className="overflow-x-auto rounded-card border border-forest-100 bg-white shadow-soft">
          <table className="min-w-[720px] w-full text-left text-sm">
            <thead className="bg-ink-900 text-white">
              <tr>
                <th className="px-4 py-3">比較項目</th>
                <th className="px-4 py-3">お掃除機能付き</th>
                <th className="px-4 py-3">お掃除機能なし</th>
              </tr>
            </thead>
            <tbody>
              {cleaningComparison.map((row) => (
                <tr key={row.label} className="border-b border-forest-100 last:border-0">
                  <td className="px-4 py-4 font-bold">{row.label}</td>
                  <td className="px-4 py-4 text-ink-500">{row.withFeature}</td>
                  <td className="px-4 py-4 font-bold text-forest-800">{row.simple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="clay" eyebrow="CONTACT" title="正式な料金を確認する" lead="室内機・室外機・コンセント・配管ルートの写真があると確認が早くなります。">
        <CTAGroup />
      </Section>
    </main>
  );
}
