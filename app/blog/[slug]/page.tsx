import Link from "next/link";
import { notFound } from "next/navigation";
import { CTAGroup } from "@/components/CTAGroup";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blog";
import { getService } from "@/data/services";
import { siteConfig } from "@/data/site";
import { renderMarkdown, estimateReadingMinutes } from "@/lib/markdown";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const post = getBlogPost(params.slug);
  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`
  });
}

function formatDate(value?: string) {
  if (!value) {
    return "";
  }
  return value.replace(/-/g, "/");
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return notFound();
  }

  const html = renderMarkdown(post.body);
  const readingMinutes = estimateReadingMinutes(post.body);
  const relatedPosts = getRelatedPosts(post, 3);
  const relatedServices = post.relatedServices
    .map((slug) => getService(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <main>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "トップ", path: "/" },
          { name: "お役立ちブログ", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` }
        ])}
      />

      <section className="hero-band border-b border-forest-100 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-3xl px-4">
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs font-bold text-ink-500" aria-label="パンくず">
            <Link href="/" className="hover:text-forest-700">
              トップ
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-forest-700">
              お役立ちブログ
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink-700">{post.category}</span>
          </nav>
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-card bg-sun-300 px-3 py-1.5 text-xs font-black text-ink-900">
              {post.category}
            </span>
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-card bg-white px-3 py-1.5 text-xs font-bold text-forest-800 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="break-words text-3xl font-black leading-tight text-ink-900 sm:text-4xl">{post.title}</h1>
          <p className="mt-5 leading-8 text-ink-700">{post.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-ink-500">
            <span>公開: {formatDate(post.publishedAt)}</span>
            {post.updatedAt && post.updatedAt !== post.publishedAt ? (
              <span>更新: {formatDate(post.updatedAt)}</span>
            ) : null}
            <span>約{readingMinutes}分で読めます</span>
            <span>対応エリア: {post.area}</span>
          </div>
        </div>
      </section>

      <article className="bg-white py-12 sm:py-16">
        <div className="mx-auto w-full max-w-3xl px-4">
          <div
            className="blog-body text-base text-ink-700"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="mt-12 rounded-card border border-forest-100 bg-forest-50 p-6 shadow-soft">
            <p className="text-sm font-black text-forest-800">CONTACT</p>
            <h2 className="mt-2 text-xl font-black text-ink-900">
              {post.category === "故障・トラブル"
                ? "直らない・原因が分からないときは早めにご相談ください"
                : "交換やメンテナンスの相談は無料です"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink-500">
              {siteConfig.serviceArea.slice(0, 4).join("・")}
              を中心に、写真確認から必要な工事と料金目安をご案内します。型番や設置状況の写真があると確認が早くなります。
            </p>
            <div className="mt-5">
              <CTAGroup />
            </div>
          </div>
        </div>
      </article>

      {relatedServices.length > 0 ? (
        <Section eyebrow="SERVICE" title="この記事に関連するサービス" lead="工事内容や料金目安はサービスページで確認できます。">
          <div className="grid gap-4 md:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-card border border-forest-100 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-forest-50"
              >
                <p className="text-sm font-black text-forest-700">{service.keyword}</p>
                <h3 className="mt-2 text-lg font-black text-ink-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-500">目安: {service.priceFrom}</p>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      {relatedPosts.length > 0 ? (
        <Section tone="soft" eyebrow="RELATED" title="あわせて読みたい記事" lead="関連する設備やトラブルの記事です。">
          <div className="grid gap-4 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <article key={related.slug} className="flex flex-col rounded-card border border-forest-100 bg-white p-6 shadow-soft">
                <span className="mb-3 w-fit rounded-card bg-forest-50 px-3 py-1 text-xs font-bold text-forest-800">
                  {related.category}
                </span>
                <h3 className="text-base font-bold leading-7 text-ink-900">
                  <Link href={`/blog/${related.slug}`} className="hover:text-forest-700">
                    {related.title}
                  </Link>
                </h3>
                <Link
                  href={`/blog/${related.slug}`}
                  className="mt-4 inline-flex w-fit rounded-card border border-forest-200 px-4 py-2 text-sm font-bold text-forest-800 hover:bg-forest-50"
                >
                  記事を読む
                </Link>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="clay" eyebrow="CONTACT" title="相談する" lead="迷ったらLINEで写真を送ってください。確認できる範囲で概算と必要な工事をご案内します。">
        <CTAGroup />
      </Section>
    </main>
  );
}
