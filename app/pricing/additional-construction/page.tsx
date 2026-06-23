import Link from "next/link";
import { CTAGroup } from "@/components/CTAGroup";
import { PriceTable } from "@/components/PriceTable";
import { Section } from "@/components/Section";
import { extraPrices } from "@/data/pricing";
import { createMetadata } from "@/lib/seo";

const checkItems = [
  "室内機と室外機の距離",
  "化粧カバーの有無",
  "室外機の置き場所",
  "配管穴の有無",
  "コンセント形状と電圧",
  "高所作業の必要性"
];

export const metadata = createMetadata({
  title: "追加工事料金",
  description:
    "エアコン工事で発生しやすい配管延長、化粧カバー、コンセント交換、高所作業、穴あけ工事などの追加工事料金目安です。",
  path: "/pricing/additional-construction"
});

export default function AdditionalConstructionPricingPage() {
  return (
    <main>
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
            EXTRA PRICE
          </p>
          <h1 className="text-4xl font-black tracking-normal text-ink-900 sm:text-5xl">追加工事料金</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ink-700">
            エアコン取付・交換・移設で追加になりやすい工事項目です。正式な金額は写真または現地確認後にご案内します。
          </p>
        </div>
      </section>

      <Section eyebrow="TABLE" title="追加工事の料金目安" lead="作業前に必要な工事内容と費用目安を説明します。">
        <PriceTable rows={extraPrices} />
        <div className="mt-6">
          <Link
            href="/services/aircon-relocation"
            className="inline-flex w-full justify-center rounded-card border border-forest-200 bg-white px-5 py-3 text-sm font-black text-forest-800 transition hover:bg-forest-50 sm:w-auto"
          >
            エアコン移設工事へ戻る
          </Link>
        </div>
      </Section>

      <Section tone="soft" eyebrow="CHECK" title="見積り時に確認する内容" lead="写真があると、追加工事の有無を判断しやすくなります。">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {checkItems.map((item) => (
            <div key={item} className="rounded-card border border-forest-100 bg-white p-5 font-bold text-ink-900 shadow-soft">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="clay" eyebrow="CONTACT" title="追加工事を含めた料金を確認する" lead="室内機・室外機・配管ルート・コンセントの写真を送ってください。">
        <CTAGroup />
      </Section>
    </main>
  );
}
