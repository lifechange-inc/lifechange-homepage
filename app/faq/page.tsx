import { CTAGroup } from "@/components/CTAGroup";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { faqs } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";
import { faqPageSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "よくある質問",
  description: "エアコン交換、取付、追加料金、工事保証、対応エリアに関するよくある質問をまとめています。",
  path: "/faq"
});

export default function FaqPage() {
  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  return (
    <main>
      <JsonLd data={faqPageSchema(faqs)} />
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
            FAQ
          </p>
          <h1 className="text-4xl font-black tracking-normal text-ink-900 sm:text-5xl">よくある質問</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ink-700">
            問い合わせ前に確認しやすいよう、全20問をカテゴリ別に整理しています。
          </p>
        </div>
      </section>

      {categories.map((category) => (
        <Section key={category} eyebrow={category} title={`${category}に関する質問`}>
          <FaqList items={faqs.filter((faq) => faq.category === category)} />
        </Section>
      ))}

      <Section tone="clay" eyebrow="CONTACT" title="解決しない場合は相談する" lead="写真や状況を共有いただければ、個別条件を確認します。">
        <CTAGroup />
      </Section>
    </main>
  );
}
