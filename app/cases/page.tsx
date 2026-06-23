import { CaseCard } from "@/components/CaseCard";
import { CTAGroup } from "@/components/CTAGroup";
import { Section } from "@/components/Section";
import { VisualGallery } from "@/components/VisualGallery";
import { caseCategories, workCases } from "@/data/cases";
import { visualAssets } from "@/data/visuals";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "施工事例",
  description: "松戸市・柏市周辺のエアコン工事、業務用エアコン工事、給湯器交換、レンジフード交換などの施工事例一覧です。",
  path: "/cases"
});

const caseVisuals = [
  {
    src: visualAssets.caseAfter,
    alt: "施工前後の比較イメージ",
    title: "施工前後が分かる事例",
    text: "工事前の困りごとと施工後の変化が分かるように整理しています。"
  },
  {
    src: visualAssets.airconWork,
    alt: "エアコン施工事例のイメージ",
    title: "エアコン工事",
    text: "交換、取付、移設、隠蔽配管などの事例を追加できます。"
  },
  {
    src: visualAssets.waterHeaterWork,
    alt: "給湯器施工事例のイメージ",
    title: "住宅設備交換",
    text: "給湯器、エコキュート、キッチン設備の事例も管理できます。"
  }
];

export default function CasesPage() {
  return (
    <main>
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
            CASE
          </p>
          <h1 className="text-4xl font-black tracking-normal text-ink-900 sm:text-5xl">施工事例</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ink-700">
            地域、メーカー、工事内容、施工前の課題、施工後の状態を確認できます。写真や詳細情報は今後差し替えや追加がしやすいデータ構造です。
          </p>
        </div>
      </section>

      <Section
        eyebrow="PHOTO"
        title="施工事例の見え方を整えました"
        lead="工事カテゴリごとに、施工前後や確認ポイントが分かりやすい見え方にしています。"
      >
        <VisualGallery items={caseVisuals} />
      </Section>

      <Section eyebrow="CATEGORY" title="工事カテゴリ" lead="目的に近いカテゴリから事例を確認できます。">
        <div className="flex flex-wrap gap-2">
          {caseCategories.map((category) => (
            <a key={category} href={`#${category}`} className="rounded-card border border-forest-100 bg-white px-4 py-2 text-sm font-bold text-forest-800 shadow-soft">
              {category}
            </a>
          ))}
        </div>
      </Section>

      <section className="bg-forest-50 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4">
          {caseCategories.map((category) => {
            const cases = workCases.filter((workCase) => workCase.category === category);
            return (
              <div key={category} id={category}>
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-forest-800">CASE CATEGORY</p>
                    <h2 className="mt-2 text-2xl font-bold text-ink-900">{category}</h2>
                  </div>
                  <p className="text-sm font-bold text-ink-500">{cases.length}件</p>
                </div>
                <div className="grid gap-4 lg:grid-cols-3">
                  {cases.map((workCase) => (
                    <div id={workCase.slug} key={workCase.slug}>
                      <CaseCard workCase={workCase} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Section tone="clay" eyebrow="CONTACT" title="似た条件の工事を相談する" lead="気になる事例があれば、近い状況を添えてお問い合わせください。">
        <CTAGroup />
      </Section>
    </main>
  );
}
