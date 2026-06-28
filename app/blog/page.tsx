import Link from "next/link";
import { CTAGroup } from "@/components/CTAGroup";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { blogCategories, blogPosts, getPostsByCategory } from "@/data/blog";
import { siteConfig } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "お役立ちブログ｜エアコン・給湯器・住宅設備の故障とメンテナンス",
  description:
    "松戸市・柏市・市川市・流山市で年間4,000台以上を施工するライフチェンジが、エアコン・給湯器・ガスコンロ・IH・トイレ・配管の故障対処、交換時期の見極め、メンテナンスや季節対策を現場目線でまとめています。",
  path: "/blog"
});

const categoryLead: Record<string, string> = {
  "故障・トラブル": "急に動かない、お湯が出ない、水漏れなど、まず確認したい対処法をまとめています。",
  "交換・買い替え": "寿命のサイン、費用相場、機種選びなど、交換を検討するときの判断材料です。",
  "メンテナンス・季節対策": "シーズン前の点検や日常のお手入れで、設備を長く使うためのコツです。"
};

export default function BlogIndexPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "トップ", path: "/" },
          { name: "お役立ちブログ", path: "/blog" }
        ])}
      />
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
            BLOG
          </p>
          <h1 className="text-4xl font-black tracking-normal text-ink-900 sm:text-5xl">お役立ちブログ</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ink-700">
            エアコン、給湯器、ガスコンロ、IH、トイレ、配管などの故障対処、交換の判断、メンテナンスや季節対策を、年間4,000台以上の施工経験をもとに{siteConfig.serviceArea
              .slice(0, 4)
              .join("・")}
            の方向けにまとめています。
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <a
                key={category}
                href={`#${category}`}
                className="rounded-card border border-forest-100 bg-white px-4 py-2 text-sm font-bold text-forest-800 shadow-soft"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {blogPosts.length === 0 ? (
        <Section eyebrow="BLOG" title="記事を準備しています" lead="近日中に公開予定です。">
          <CTAGroup />
        </Section>
      ) : (
        <section className="bg-forest-50 py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-4">
            {blogCategories.map((category) => {
              const posts = getPostsByCategory(category);
              return (
                <div key={category} id={category}>
                  <div className="mb-5">
                    <p className="text-sm font-black text-forest-800">BLOG CATEGORY</p>
                    <h2 className="mt-2 text-2xl font-black text-ink-900">{category}</h2>
                    {categoryLead[category] ? (
                      <p className="mt-2 text-sm leading-7 text-ink-500">{categoryLead[category]}</p>
                    ) : null}
                  </div>
                  <div className="grid gap-4 lg:grid-cols-3">
                    {posts.map((post) => (
                      <article
                        key={post.slug}
                        className="flex flex-col rounded-card border border-forest-100 bg-white p-6 shadow-soft"
                      >
                        <div className="mb-3 flex flex-wrap gap-2">
                          <span className="rounded-card bg-forest-50 px-3 py-1 text-xs font-bold text-forest-800">
                            {post.category}
                          </span>
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-card bg-skyglass px-3 py-1 text-xs font-bold text-ink-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-lg font-bold leading-7 text-ink-900">
                          <Link href={`/blog/${post.slug}`} className="hover:text-forest-700">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-7 text-ink-500">{post.description}</p>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="mt-5 inline-flex w-fit rounded-card border border-forest-200 px-4 py-2 text-sm font-bold text-forest-800 hover:bg-forest-50"
                        >
                          記事を読む
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <Section
        tone="clay"
        eyebrow="CONTACT"
        title="記事を読んでも迷ったら相談してください"
        lead="型番や設置状況の写真を送っていただくと、交換可否や必要な工事を確認しやすくなります。相談は無料です。"
      >
        <CTAGroup />
      </Section>
    </main>
  );
}
