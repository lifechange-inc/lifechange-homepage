import { notFound } from "next/navigation";
import { CTAGroup } from "@/components/CTAGroup";
import { Section } from "@/components/Section";
import { concerns, getConcern } from "@/data/concerns";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return concerns.map((concern) => ({ slug: concern.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const concern = getConcern(params.slug);
  if (!concern) {
    return {};
  }

  return createMetadata({
    title: concern.title,
    description: `${concern.lead} ${concern.response}`,
    path: `/concerns/${concern.slug}`
  });
}

export default function ConcernPage({ params }: PageProps) {
  const concern = getConcern(params.slug);

  if (!concern) {
    return notFound();
  }

  return (
    <main>
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
            エアコン工事のよくあるお悩み
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-ink-900 sm:text-5xl">
            {concern.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ink-700">{concern.lead}</p>
          <div className="mt-7">
            <CTAGroup />
          </div>
        </div>
      </section>

      <Section eyebrow="CAUSE" title="原因" lead={concern.cause}>
        <div className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
          <p className="leading-8 text-ink-500">
            エアコン工事は、本体だけでなく建物条件、電源、配管、室外機置き場、排水経路まで確認して判断します。
          </p>
        </div>
      </Section>

      <Section tone="soft" eyebrow="SUPPORT" title="弊社での対応" lead={concern.response}>
        <div className="grid gap-4 md:grid-cols-3">
          {["写真確認", "必要工事の整理", "作業前の説明"].map((item) => (
            <div key={item} className="rounded-card bg-white p-5 shadow-soft">
              <h2 className="text-lg font-bold text-forest-800">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                状況に合わせて、無理のない工事内容をご案内します。
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="clay" eyebrow="PHOTO" title="写真見積りへの導線" lead={concern.photoGuide}>
        <CTAGroup />
      </Section>
    </main>
  );
}
