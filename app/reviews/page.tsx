import { CTAGroup } from "@/components/CTAGroup";
import { Section } from "@/components/Section";
import { reviews } from "@/data/reviews";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "お客様の声",
  description: "ライフチェンジへ寄せられたお客様の声を、サービス別・エリア別に掲載しています。",
  path: "/reviews"
});

export default function ReviewsPage() {
  return (
    <main>
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
            REVIEW
          </p>
          <h1 className="text-4xl font-black tracking-normal text-ink-900 sm:text-5xl">お客様の声</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ink-700">
            工事前の説明、当日の対応、作業後の仕上がりについての声を掲載しています。正式公開時は掲載許諾済みの実口コミへ差し替えできます。
          </p>
        </div>
      </section>

      <Section eyebrow="VOICE" title="口コミ一覧" lead="サービスや地域ごとの対応イメージを確認できます。">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={`${review.name}-${review.service}-${review.area}`} className="rounded-card border border-forest-100 bg-white p-5 shadow-soft">
              <p className="text-sm font-black text-sun-500">★★★★★ {review.rating}.0</p>
              <p className="mt-4 leading-8 text-ink-700">{review.body}</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold">
                <span className="rounded-card bg-forest-50 px-3 py-1 text-forest-800">{review.area}</span>
                <span className="rounded-card bg-skyglass px-3 py-1 text-ink-700">{review.service}</span>
                <span className="rounded-card bg-clay px-3 py-1 text-ink-700">{review.name}</span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="CONTACT" title="口コミで気になった工事を相談する" lead="同じような条件の工事も、写真を送って確認できます。">
        <CTAGroup />
      </Section>
    </main>
  );
}
