import Link from "next/link";
import { notFound } from "next/navigation";
import { CTAGroup } from "@/components/CTAGroup";
import { Section } from "@/components/Section";
import { getArea, areas } from "@/data/areas";
import { getFeaturedCases } from "@/data/cases";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const area = getArea(params.slug);
  if (!area) {
    return {};
  }

  return createMetadata({
    title: `${area.keyword}なら${siteConfig.brandName}`,
    description: `${area.name}でエアコン交換、取付、クリーニング、業務用エアコン、給湯器交換の相談に対応します。`,
    path: `/areas/${area.slug}`
  });
}

export default function AreaPage({ params }: PageProps) {
  const area = getArea(params.slug);

  if (!area) {
    return notFound();
  }

  const cases = getFeaturedCases(4).filter((workCase) => workCase.area === area.name);

  return (
    <main>
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
            {area.keyword}
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-ink-900 sm:text-5xl">
            {area.name}のエアコン交換・設備工事
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ink-700">{area.lead}</p>
          <div className="mt-7">
            <CTAGroup />
          </div>
        </div>
      </section>

      <Section eyebrow="TOWN" title={`${area.name}の主な対応町名`} lead="下記以外の近隣町名も相談できます。写真と住所の目安を共有いただくと確認がスムーズです。">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {area.towns.map((town) => (
            <div key={town} className="rounded-card border border-forest-100 bg-white px-4 py-3 text-sm font-bold text-ink-700 shadow-soft">
              {town}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="SERVICE" title={`${area.name}で相談できるサービス`} lead="家庭用エアコンから給湯器、店舗設備まで対応します。">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-card bg-white p-5 shadow-soft hover:border-forest-300">
              <p className="text-sm font-black text-forest-800">{service.keyword.replace("松戸市", area.name).replace("柏市", area.name)}</p>
              <h2 className="mt-3 text-lg font-bold text-ink-900">{service.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink-500">{service.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="NEARBY" title="近隣エリア" lead="隣接エリアからのご相談も受け付けています。">
        <div className="flex flex-wrap gap-2">
          {area.nearby.map((nearby) => (
            <span key={nearby} className="rounded-card bg-clay px-4 py-2 text-sm font-bold text-ink-700">
              {nearby}
            </span>
          ))}
        </div>
      </Section>

      {cases.length > 0 ? (
        <Section tone="clay" eyebrow="CASE" title={`${area.name}の施工事例`} lead="該当エリアの事例を掲載しています。">
          <div className="grid gap-4 lg:grid-cols-2">
            {cases.map((workCase) => (
              <article key={workCase.slug} className="rounded-card bg-white p-5 shadow-soft">
                <h2 className="text-lg font-bold text-ink-900">{workCase.title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-500">{workCase.issue}</p>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="soft" eyebrow="CONTACT" title={`${area.name}で工事を相談する`} lead="町名、設置場所、写真を共有いただければ、対応可否と必要工事を確認します。">
        <CTAGroup />
      </Section>
    </main>
  );
}
