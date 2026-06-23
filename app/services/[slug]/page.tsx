import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AirconConcealedPipingPage } from "@/components/AirconConcealedPipingPage";
import { CaseCard } from "@/components/CaseCard";
import { CTAGroup } from "@/components/CTAGroup";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { Section } from "@/components/Section";
import { VisualGallery } from "@/components/VisualGallery";
import { getCasesByCategory } from "@/data/cases";
import type { Faq } from "@/data/faqs";
import { basePrices, extraPrices, gasStoveComparison, servicePriceGuides } from "@/data/pricing";
import type { PriceRow } from "@/data/pricing";
import { getService, services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { getServiceVisuals } from "@/data/visuals";
import { createMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

type PageProps = {
  params: {
    slug: string;
  };
};

const relocationPrices: PriceRow[] = [
  {
    item: "エアコン移設（同一フロア）",
    detail: "同じ階の中で室内機・室外機を移設する場合",
    price: "25,000円～",
    note: "写真確認後に正式な内容をご案内します"
  },
  {
    item: "エアコン移設（階をまたぐ場合）",
    detail: "1階から2階など階をまたいで移設する場合",
    price: "35,000円～",
    note: "配管距離・室外機位置により変動します"
  }
];

const reuseReasons = [
  "ガス漏れ防止",
  "将来の故障防止",
  "保証判断がしやすい",
  "見た目がきれいになる"
];

const movingCompanyRisks = [
  "ガス回収不足",
  "ナット損傷",
  "配管変形"
];

const policyItems = [
  "配管を必要な長さへ調整",
  "電線・ナットを新品交換推奨",
  "テープを巻き直して仕上げ",
  "施工後にガス漏れを確認"
];

const relocationDifferences = [
  { issue: "配管が長すぎる", policy: "必要な長さへ調整し、余りを目立たせないよう施工" },
  { issue: "テープが古いまま", policy: "劣化したテープを巻き直し、外観と保護性を整える" },
  { issue: "新旧テープが重なる", policy: "つぎはぎ感が出にくいよう、見た目も考慮して処理" },
  { issue: "室外機周りが雑", policy: "室外機周辺の配管処理と排水ルートを確認" }
];

const estimateItems = [
  {
    title: "現在お住まいの住所（市区町村）"
  },
  {
    title: "引越し先の住所（市区町村）"
  },
  {
    title: "工事日は同日か別日か",
    details: ["引越し当日に取外し・取付する", "別日に取外し", "別日に取付"],
    note: "別日での対応は追加費用が発生します。"
  },
  {
    title: "エアコン本体の運搬方法",
    details: ["お客様自身で運搬", "弊社で運搬"],
    note: "どちらかをご記載ください。"
  },
  {
    title: "新規取付・入替・移設"
  },
  {
    title: "合計台数"
  },
  {
    title: "戸建て・集合住宅"
  },
  {
    title: "各エアコンの型式",
    note:
      "複数台ある場合は、写真へ「1」「2」「3」など番号を記載するか、メール・LINEを分けて送付してください。"
  },
  {
    title: "室内カバー有無"
  },
  {
    title: "室外カバー有無"
  },
  {
    title: "写真2枚以上",
    note: "写真が多いほど正確なお見積りが可能です。"
  }
];

const relocationFaqs: Faq[] = [
  {
    category: "工事",
    question: "移設時に配管は再利用できますか？",
    answer:
      "配管を再利用するかはお客様判断になります。ただし状態によりガス漏れや将来の故障につながる可能性があるため、弊社では配管・電線・ナットの新品交換を推奨しています。"
  },
  {
    category: "料金",
    question: "エアコン移設費用はいくらからですか？",
    answer:
      "同一フロアの移設は25,000円～、階をまたぐ移設は35,000円～です。配管距離、室外機位置、化粧カバー、高所作業の有無で追加工事が発生する場合があります。"
  },
  {
    category: "工事",
    question: "引っ越し業者が取り外したエアコンも取付できますか？",
    answer:
      "対応可能です。ただしガス回収不足、ナット損傷、配管変形などがないか確認が必要です。写真確認または現地確認のうえで施工可否と必要工事をご案内します。"
  },
  {
    category: "相談",
    question: "見積りには何が必要ですか？",
    answer:
      "現在お住まいの市区町村、引越し先の市区町村、工事日、運搬方法、工事種別、台数、建物種別、各エアコンの型式、室内外カバーの有無、写真2枚以上を送っていただくと確認が早くなります。"
  }
];

const photoRequirementsBySlug: Record<string, { title: string; lead: string; items: string[] }> = {
  "aircon-exchange": {
    title: "エアコン交換のLINE見積りで送ってほしい写真",
    lead: "写真が多いほど、追加工事の可能性や当日の段取りを事前に確認しやすくなります。",
    items: ["室内機全体", "室外機全体", "配管カバー・穴まわり", "型番シール"]
  },
  "aircon-install": {
    title: "エアコン取付のLINE見積りで送ってほしい写真",
    lead: "新規取付やネット購入品の取付は、設置場所と室外機置き場が分かる写真があると確認が早くなります。",
    items: ["取付予定の室内側", "室外機置き場", "配管穴・コンセントまわり", "エアコン本体の型番"]
  },
  "water-heater": {
    title: "給湯器交換のLINE見積りで送ってほしい写真",
    lead: "型番、配管、設置場所が分かると、交換できる機種と工事内容を確認しやすくなります。",
    items: ["給湯器全体", "型番シール", "配管まわり", "設置場所の引き写真"]
  },
  ecocute: {
    title: "エコキュート交換のLINE見積りで送ってほしい写真",
    lead: "本体まわり、配管、搬入経路が分かる写真があると、交換可否と段取りを確認しやすくなります。",
    items: ["本体全体", "型番シール", "配管まわり", "搬入経路・設置場所の引き写真"]
  },
  "gas-stove": {
    title: "ガスコンロ交換のLINE見積りで送ってほしい写真",
    lead: "既存機種とキッチンまわりの写真があると、交換できる機種やおすすめ機能を比較しやすくなります。",
    items: ["コンロ全体", "型番シール", "天板幅", "グリル・操作部", "キッチン全体"]
  },
  ih: {
    title: "IH交換のLINE見積りで送ってほしい写真",
    lead: "既存機種と電源条件が分かると、交換できる機種と必要工事を確認しやすくなります。",
    items: ["IH全体", "型番シール", "天板幅", "操作部", "分電盤・電源まわり"]
  },
  "range-hood": {
    title: "レンジフード交換のLINE見積りで送ってほしい写真",
    lead: "既存レンジフードの幅、ダクト、幕板まわりが分かると、交換できる機種と追加部材を確認しやすくなります。",
    items: ["レンジフード全体", "型番シール", "横幅が分かる写真", "ダクト・幕板まわり", "キッチン全体"]
  }
};

const airconAdditionalPriceSlugs = new Set(["aircon-exchange"]);

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const service = getService(params.slug);
  if (!service) {
    return {};
  }

  return createMetadata({
    title: `${service.keyword}なら${siteConfig.brandName}`,
    description: `${service.description} ${service.lead}`,
    path: `/services/${service.slug}`
  });
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getService(params.slug);

  if (!service) {
    return notFound();
  }

  if (service.slug === "aircon-relocation") {
    return <AirconRelocationPage service={service} />;
  }

  if (service.slug === "aircon-concealed-piping") {
    return <AirconConcealedPipingPage service={service} />;
  }

  const relatedCases = getCasesByCategory(service.relatedCategories, 6);
  const priceRows = service.slug === "aircon-install" ? basePrices : servicePriceGuides[service.slug] ?? [];
  const photoRequirements = photoRequirementsBySlug[service.slug];
  const showAirconAdditionalPrices = airconAdditionalPriceSlugs.has(service.slug);
  const visuals = getServiceVisuals(service.slug);
  const heroImageClass = service.heroImage?.includes("/catalog/")
    ? "aspect-[4/3] w-full max-w-full rounded-card border border-white bg-white object-contain p-4 shadow-soft"
    : "aspect-[4/3] w-full max-w-full rounded-card border border-white bg-white object-cover shadow-soft";

  return (
    <main>
      <JsonLd data={serviceSchema(service.title, service.description, `/services/${service.slug}`)} />
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="min-w-0">
            <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
              {service.keyword}
            </p>
            <h1 className="break-words text-4xl font-black leading-tight tracking-normal text-ink-900 sm:text-5xl">
              {service.title}
              <span className="mt-4 block text-[1.45rem] leading-snug text-forest-800 sm:text-2xl">写真確認から工事まで相談できます</span>
            </h1>
            <p className="mt-6 max-w-[22rem] break-words text-lg leading-9 text-ink-700 sm:max-w-3xl">{service.lead}</p>
            <div className="mt-7">
              <CTAGroup />
            </div>
          </div>
          <Image
            src={service.heroImage || "/images/company/worker-character.jpg"}
            width={900}
            height={720}
            alt={`${service.title}の施工イメージ`}
            priority
            className={heroImageClass}
          />
        </div>
      </section>

      <Section
        eyebrow="ISSUE"
        title={`${service.title}でよくある相談`}
        lead="迷っている段階でも、設置状況を確認しながら必要な工事を整理できます。"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {service.problems.map((problem) => (
            <div key={problem} className="rounded-card border border-forest-100 bg-white p-5 font-bold text-ink-800 shadow-soft">
              {problem}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="STRENGTH" title="ライフチェンジの対応方針" lead={service.description}>
        <div className="grid gap-4 md:grid-cols-3">
          {service.strengths.map((strength) => (
            <article key={strength} className="rounded-card bg-white p-5 shadow-soft">
              <h2 className="text-lg font-bold text-forest-800">{strength}</h2>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                事前確認と説明を大切にし、現場ごとの条件に合わせて無理のない施工方法をご案内します。
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="PHOTO"
        title={`${service.title}の施工イメージ`}
        lead="工事内容と確認ポイントがひと目で分かるよう、写真で施工イメージを整理しています。"
      >
        <VisualGallery items={visuals} />
      </Section>

      <Section
        tone="clay"
        eyebrow="DIRECT"
        title="現場に近い会社として、分かりやすく伝えます"
        lead="ネット受付型の大手サービスでは分かりづらい「誰が来るのか」「追加工事はなぜ必要か」「最短でいつ対応できるか」を、現場目線で整理します。"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {["年間4,000台以上の施工経験", "中間マージンなしの職人直営", "松戸市拠点で近隣エリアへ対応"].map((item) => (
            <div key={item} className="rounded-card bg-white p-5 shadow-soft">
              <h2 className="text-lg font-black text-forest-800">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                写真と現場条件を確認し、必要な工事と料金目安をできるだけ分かりやすくご案内します。
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FLOW" title="お問い合わせから施工まで" lead="写真確認、概算案内、日程調整、施工、試運転確認の流れで進めます。">
        <ol className="grid gap-3 md:grid-cols-5">
          {service.process.map((step, index) => (
            <li key={step} className="overflow-hidden rounded-card border border-forest-100 bg-white shadow-soft">
              <Image
                src={visuals[index % visuals.length].src}
                width={480}
                height={360}
                alt={`${service.title} ${step}のイメージ`}
                className={`aspect-[4/3] w-full bg-forest-50 ${visuals[index % visuals.length].fit === "contain" ? "object-contain p-4" : "object-cover"}`}
              />
              <div className="p-5">
              <p className="text-sm font-black text-forest-800">STEP {String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 font-bold text-ink-900">{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {photoRequirements ? (
        <Section
          tone="soft"
          eyebrow="PHOTO"
          title={photoRequirements.title}
          lead={photoRequirements.lead}
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {photoRequirements.items.map((item, index) => (
              <div key={item} className="rounded-card border border-forest-100 bg-white p-5 shadow-soft">
                <p className="text-sm font-black text-forest-700">PHOTO {String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-lg font-black text-ink-900">{item}</h2>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/guide/photo-samples"
              className="inline-flex w-full justify-center rounded-card bg-forest-800 px-5 py-3 text-sm font-black text-white shadow-lift transition hover:bg-forest-700 sm:w-auto"
            >
              写真見本はこちら
            </Link>
            <p className="text-sm leading-7 text-ink-500">写真だけで相談OK。相談は無料です。</p>
          </div>
        </Section>
      ) : null}

      <Section tone="clay" eyebrow="PRICE" title={`${service.title}の料金目安`} lead={`目安: ${service.priceFrom}。正式な金額は設置状況を確認してからご案内します。`}>
        {priceRows.length > 0 ? (
          <PriceTable rows={priceRows} />
        ) : (
          <div className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-black text-ink-900">写真確認後に料金目安をご案内します</h2>
            <p className="mt-3 leading-8 text-ink-500">
              設置状況、既存機器の型番、配管や電源の状態によって必要工事が変わるため、写真確認または現地確認後に分かりやすくご案内します。
            </p>
          </div>
        )}
      </Section>

      {showAirconAdditionalPrices ? (
        <Section eyebrow="OPTION" title="エアコン追加工事料金" lead="配管延長、化粧カバー、高所作業などが必要な場合は、作業前に内容と金額を確認します。">
          <PriceTable rows={extraPrices} />
        </Section>
      ) : null}

      {service.slug === "gas-stove" ? (
        <Section eyebrow="MODEL" title="ガスコンロ機種比較" lead="価格だけでなく、グリル機能、掃除のしやすさ、煙やニオイ対策まで比較して選べます。">
          <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gasStoveComparison.map((row) => (
              <article key={`${row.maker}-${row.model}-card`} className="overflow-hidden rounded-card border border-forest-100 bg-white shadow-soft">
                <Image
                  src={row.image}
                  width={900}
                  height={600}
                  alt={row.imageAlt}
                  className="aspect-[4/3] w-full bg-white object-contain p-4"
                />
                <div className="p-5">
                  <p className="text-sm font-black text-forest-700">{row.maker}</p>
                  <h2 className="mt-1 text-xl font-black text-ink-900">{row.model}</h2>
                  <p className="mt-2 text-lg font-black text-forest-800">{row.price}</p>
                  <p className="mt-3 text-sm leading-7 text-ink-500">{row.feature}</p>
                  <p className="mt-3 text-xs font-bold text-ink-400">写真: {row.sourceName}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="overflow-x-auto rounded-card border border-forest-100 bg-white shadow-soft">
            <table className="min-w-[760px] w-full text-left text-sm">
              <thead className="bg-forest-800 text-white">
                <tr>
                  <th className="px-4 py-3 font-bold">メーカー</th>
                  <th className="px-4 py-3 font-bold">機種</th>
                  <th className="px-4 py-3 font-bold">価格目安</th>
                  <th className="px-4 py-3 font-bold">特徴</th>
                </tr>
              </thead>
              <tbody>
                {gasStoveComparison.map((row) => (
                  <tr key={`${row.maker}-${row.model}`} className="border-b border-forest-100 last:border-0">
                    <td className="px-4 py-4 font-bold text-ink-900">{row.maker}</td>
                    <td className="px-4 py-4 text-ink-700">{row.model}</td>
                    <td className="px-4 py-4 font-black text-forest-800">{row.price}</td>
                    <td className="px-4 py-4 text-ink-500">{row.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      ) : null}

      {relatedCases.length > 0 ? (
        <Section eyebrow="CASE" title={`${service.title}に近い施工事例`} lead="地域名、メーカー名、工事前後の状態を確認できます。">
          <div className="grid gap-4 lg:grid-cols-3">
            {relatedCases.map((workCase) => (
              <CaseCard key={workCase.slug} workCase={workCase} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section tone="soft" eyebrow="CONTACT" title={`${service.title}を相談する`} lead="状況写真があると確認が早くなります。迷ったらLINEで写真を送ってください。">
        <CTAGroup />
      </Section>
    </main>
  );
}

function AirconRelocationPage({ service }: { service: NonNullable<ReturnType<typeof getService>> }) {
  const visuals = getServiceVisuals(service.slug);

  return (
    <main>
      <JsonLd data={serviceSchema(service.title, service.description, `/services/${service.slug}`)} />
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="min-w-0">
            <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
              エアコン移設・エアコン引っ越し
            </p>
            <h1 className="break-words text-4xl font-black leading-tight tracking-normal text-ink-900 sm:text-5xl">
              エアコン移設工事
              <span className="mt-4 block text-[1.45rem] leading-snug text-forest-800 sm:text-2xl">費用・配管再利用・注意点を写真で確認</span>
            </h1>
            <p className="mt-6 max-w-[22rem] break-words text-lg leading-9 text-ink-700 sm:max-w-3xl">
              松戸市・柏市・市川市周辺のエアコン移設に対応します。配管再利用の判断、引っ越し業者取外し後の状態、ガス漏れリスクまで確認し、必要な工事を整理します。
            </p>
            <div className="mt-7">
              <CTAGroup />
            </div>
          </div>
          <Image
            src={service.heroImage || "/images/company/worker-character.jpg"}
            width={900}
            height={720}
            alt="エアコン移設工事の施工イメージ"
            priority
            className="aspect-[4/3] w-full max-w-full rounded-card border border-white bg-white object-cover shadow-soft"
          />
        </div>
      </section>

      <Section
        eyebrow="PHOTO"
        title="エアコン移設の施工イメージ"
        lead="取外し、運搬方法、再取付先の条件、配管処理まで写真で確認してから進めます。"
      >
        <VisualGallery items={visuals} />
      </Section>

      <Section
        eyebrow="PRICE"
        title="エアコン移設工事の料金表"
        lead="正式な料金は設置場所、配管距離、室外機の置き場所、追加工事の有無を確認してからご案内します。"
      >
        <PriceTable rows={relocationPrices} />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/pricing/additional-construction"
            className="inline-flex w-full justify-center rounded-card bg-forest-800 px-5 py-3 text-sm font-black text-white shadow-lift transition hover:bg-forest-700 sm:w-auto"
          >
            追加工事料金はこちら
          </Link>
          <p className="text-sm leading-7 text-ink-500">
            配管延長、化粧カバー、高所作業、穴あけなどが必要な場合は別途確認します。
          </p>
        </div>
      </Section>

      <Section tone="soft" eyebrow="REUSE" title="配管再利用について" lead="配管を再利用するかはお客様判断になります。状態によっては再利用が難しい場合があります。">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-bold text-ink-900">弊社では新品交換での施工を推奨しています</h2>
            <p className="mt-4 leading-8 text-ink-500">
              原則として、配管・電線・ナットを新品へ交換する施工をおすすめしています。見積時には既存部材の状態を確認し、お客様の判断材料になるよう説明します。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {reuseReasons.map((reason) => (
              <div key={reason} className="rounded-card bg-white p-5 font-bold text-forest-800 shadow-soft">
                {reason}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="MOVING"
        title="引っ越し業者取外しの注意点"
        lead="引っ越し業者が取り外したエアコンは、エアコン専門ではない施工業者が対応しているケースもあります。"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {movingCompanyRisks.map((risk) => (
            <article key={risk} className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
              <p className="text-sm font-black text-forest-700">CHECK</p>
              <h2 className="mt-2 text-xl font-bold text-ink-900">{risk}</h2>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                取付前に状態を確認し、再利用できる部材と交換すべき部材を整理します。
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="clay" eyebrow="POLICY" title="弊社の施工方針" lead="移設工事は取り外し後の状態と取付先の条件で仕上がりが変わります。">
        <div className="grid gap-4 md:grid-cols-4">
          {policyItems.map((item, index) => (
            <div key={item} className="overflow-hidden rounded-card bg-white shadow-soft">
              <Image
                src={visuals[index % visuals.length].src}
                width={480}
                height={360}
                alt={`エアコン移設 ${item}のイメージ`}
                className="aspect-[4/3] w-full bg-forest-50 object-cover"
              />
              <div className="p-5">
              <h2 className="text-lg font-bold text-forest-800">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                現場条件を確認し、見た目と安全性の両方を考えて施工します。
              </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="DIFFERENCE" title="他社との違い" lead="移設工事は配管処理と仕上げで差が出ます。">
        <div className="overflow-x-auto rounded-card border border-forest-100 bg-white shadow-soft">
          <table className="min-w-[720px] w-full text-left text-sm">
            <thead className="bg-ink-900 text-white">
              <tr>
                <th className="px-4 py-3 font-bold">よくある例</th>
                <th className="px-4 py-3 font-bold">ライフチェンジの対応</th>
              </tr>
            </thead>
            <tbody>
              {relocationDifferences.map((row) => (
                <tr key={row.issue} className="border-b border-forest-100 last:border-0">
                  <td className="px-4 py-4 font-bold text-ink-900">{row.issue}</td>
                  <td className="px-4 py-4 text-ink-500">{row.policy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="soft" eyebrow="FAQ" title="よくある質問" lead="エアコン移設費用、配管再利用、ガス漏れが不安な方に多い質問です。">
        <FaqList items={relocationFaqs} />
      </Section>

      <Section
        eyebrow="ESTIMATE"
        title="簡単見積り"
        lead="写真と基本情報があると、必要工事と概算の確認が早くなります。写真が多いほど正確なお見積りが可能です。"
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {estimateItems.map((item, index) => (
              <div key={item.title} className="rounded-card border border-forest-100 bg-white p-5 shadow-soft">
                <p className="text-sm font-black text-forest-700">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-bold text-ink-900">{item.title}</p>
                {item.details ? (
                  <ul className="mt-3 grid gap-1 text-sm leading-7 text-ink-500">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
                {item.note ? <p className="mt-3 text-sm leading-7 text-forest-800">{item.note}</p> : null}
              </div>
            ))}
          </div>
          <div className="rounded-card bg-forest-800 p-6 text-white shadow-soft">
            <h2 className="text-2xl font-black">新築の場合</h2>
            <p className="mt-4 leading-8 text-white/85">
              専用コンセントはあるが新しく穴を開ける場合は、図面をご用意ください。柱・筋交い・外壁側の条件を確認しながら穴あけ位置を判断します。
            </p>
            <p className="mt-4 leading-8 text-white/85">
              移設工事は現地状況によって追加工事が発生する場合がありますので、できるだけ多くの写真をお送りください。
            </p>
            <Link
              href="/guide/photo-samples"
              className="mt-6 inline-flex w-full justify-center rounded-card bg-sun-300 px-5 py-3 text-sm font-black text-ink-900 transition hover:bg-sun-500 sm:w-auto"
            >
              写真の見本はこちら
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="clay" eyebrow="LINE" title="LINEでエアコン移設を相談する" lead="室内機、室外機、配管ルート、型式ラベルの写真を送ってください。確認できる範囲で概算と必要工事をご案内します。">
        <CTAGroup />
      </Section>
    </main>
  );
}
