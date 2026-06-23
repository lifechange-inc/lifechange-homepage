import Image from "next/image";
import Link from "next/link";
import { CaseCard } from "@/components/CaseCard";
import { CTAGroup } from "@/components/CTAGroup";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { QualificationSummary } from "@/components/QualificationSummary";
import { Section } from "@/components/Section";
import { ServiceIcon, type ServiceIconType } from "@/components/ServiceIcon";
import { VisualGallery } from "@/components/VisualGallery";
import { areas } from "@/data/areas";
import { getFeaturedCases } from "@/data/cases";
import { concerns } from "@/data/concerns";
import { faqs } from "@/data/faqs";
import { basePrices, cleaningComparison } from "@/data/pricing";
import { reviews } from "@/data/reviews";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { visualAssets } from "@/data/visuals";
import { createMetadata } from "@/lib/seo";
import { faqPageSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "松戸市・柏市周辺のエアコン交換・設備工事",
  description:
    "合同会社ライフチェンジは千葉県松戸市でエアコン工事、業務用エアコン工事、給湯器交換、エコキュート交換、ガスコンロ交換、レンジフード交換、トイレ交換、電気工事に対応します。"
});

const reasons = [
  {
    label: "松戸市密着",
    title: "近隣エリアへ素早く対応",
    text: "松戸市を中心に、柏市・流山市・市川市など地域のお客様から相談をいただいています。"
  },
  {
    label: "年間4,000台以上施工",
    title: "家庭用設備の交換に強い",
    text: "エアコン、給湯器、コンロ、レンジフードなど、暮らしに近い設備工事を日々行っています。"
  },
  {
    label: "電気・ガス・水道",
    title: "まとめて相談しやすい",
    text: "設備交換に関わる電気、ガス、水まわりの確認まで、現場条件に合わせて整理します。"
  },
  {
    label: "Google口コミ★5.0・95件",
    title: "説明と仕上がりを大切に",
    text: "追加工事の可能性や施工内容を事前に説明し、安心して任せてもらえる対応を目指しています。"
  },
  {
    label: "現場経験10年以上",
    title: "現場目線で分かりやすく案内",
    text: "誰が来るのか、追加工事はなぜ必要か、いつ対応できるかをできるだけ分かりやすく伝えます。"
  }
];

const makers = [
  ["DAIKIN", "ダイキン", "空調メーカーとして人気が高く、リビング用や長く使いたい方から相談が多いメーカーです。"],
  ["HITACHI", "日立", "しろくまくんシリーズなどで知られ、基本性能や使いやすさを重視する方に選ばれています。"],
  ["MITSUBISHI", "三菱", "霧ヶ峰シリーズなど、シンプルな機種から高機能モデルまで幅広く選びやすいメーカーです。"],
  ["SHARP", "シャープ", "空気清浄機能や省スペース性を重視したい方から相談があります。"]
];

const exchangeCategories = [
  { href: "/services/aircon-exchange", label: "エアコン" },
  { href: "/services/water-heater", label: "給湯器" },
  { href: "/services/gas-stove", label: "ガスコンロ" },
  { href: "/services/ih", label: "IH" },
  { href: "/services/range-hood", label: "レンジフード" },
  { href: "/services/toilet", label: "トイレ" },
  { href: "/services/faucet", label: "水栓" }
] as const;

const heroStats = [
  ["年間施工", "4,000台以上"],
  ["対応エリア", "松戸・柏・流山・市川"],
  ["口コミ", "Google★5.0・95件"]
] as const;

const estimateSteps = [
  ["1", "写真を送る", "室内機・室外機・配管まわり"],
  ["2", "状況を確認", "追加工事の可能性まで整理"],
  ["3", "目安をご案内", "工事内容と料金を分かりやすく"]
] as const;

const localTrustItems = [
  ["松戸市密着", "地元で相談しやすい"],
  ["柏市対応", "近隣エリアも受付"],
  ["市川市対応", "写真確認から案内"],
  ["流山市対応", "交換工事を相談OK"],
  ["年間4,000台以上施工", "現場経験をもとに判断"],
  ["電気・ガス・水道対応", "設備まわりをまとめて確認"],
  ["Google口コミ★5.0・95件", "丁寧な説明を重視"],
  ["現場経験10年以上", "難しい工事も相談OK"],
  ["中間マージンなし", "価格の納得感を大切に"]
] as const;

const homeServiceIcons: {
  href: string;
  label: string;
  icon: ServiceIconType;
  text: string;
}[] = [
  { href: "/services/aircon-exchange", label: "エアコン", icon: "aircon", text: "取付・交換・移設" },
  { href: "/services/water-heater", label: "給湯器", icon: "waterHeater", text: "故障・交換相談" },
  { href: "/services/gas-stove", label: "ガスコンロ", icon: "stove", text: "ビルトイン交換" },
  { href: "/services/toilet", label: "トイレ", icon: "toilet", text: "便器・便座交換" },
  { href: "/services/faucet", label: "水栓", icon: "faucet", text: "キッチン・洗面" },
  { href: "/services/range-hood", label: "レンジフード", icon: "rangeHood", text: "換気設備交換" }
];

const homeVisuals = [
  {
    src: visualAssets.airconWork,
    alt: "エアコン交換工事の施工イメージ",
    title: "エアコン交換・取付",
    text: "室内機、室外機、配管ルート、電源を写真で確認します。"
  },
  {
    src: visualAssets.waterHeaterWork,
    alt: "給湯器交換工事の施工イメージ",
    title: "給湯器・エコキュート",
    text: "型番、配管、排気、設置場所を確認して交換可否を整理します。"
  },
  {
    src: visualAssets.kitchenWork,
    alt: "ガスコンロやキッチン設備交換の施工イメージ",
    title: "コンロ・IH・レンジフード",
    text: "キッチンの寸法、型番、ガスや電源条件を確認します。"
  }
];

const qualityItems = [
  ["きれいな配管仕上げ", "室内外の見え方と配管ルートを確認し、余分なたるみや無理な曲げを避けて施工します。"],
  ["丁寧なテープ巻き", "配管保護と見た目の両方を意識し、劣化しにくいように巻き方を整えます。"],
  ["コンセントまわりの確認", "電圧、形状、位置を確認し、コードに負担がかからない設置を考えます。"],
  ["スリーブ施工", "配管穴まわりは雨水や外気の侵入を抑えられるよう、必要な処理を確認します。"],
  ["ドレン処理", "排水の流れと勾配を確認し、水漏れやポコポコ音のリスクを減らします。"],
  ["施工後の確認", "試運転、冷暖房、排水、異音、室外機まわりまで確認してから完了します。"]
] as const;

const cautionExamples = [
  ["/images/services/danger-wire-connector.webp", "電線接続部の保護が不十分な例", "危険な施工例", "電線接続部の処理が不十分な工事は、発熱や故障につながる可能性があります。"],
  ["/images/services/brace-hole-1.webp", "構造部材に近い穴あけ確認例", "注意が必要な穴あけ", "筋交いや柱に近い穴あけは、建物構造を確認して慎重に判断する必要があります。"],
  ["/images/services/brace-hole-2.webp", "配管穴まわりの注意例", "雨水侵入リスク", "配管穴や外壁まわりの処理が不十分だと、雨水侵入や劣化の原因になります。"]
] as const;

export default function HomePage() {
  const featuredCases = getFeaturedCases(6);
  const shortFaqs = faqs.slice(0, 6);

  return (
    <main>
      <JsonLd data={faqPageSchema(shortFaqs)} />
      <section className="relative isolate overflow-hidden border-b border-forest-100 bg-hero-pattern py-10 sm:py-14 lg:py-16">
        <div className="absolute inset-x-0 top-0 h-2 bg-sun-300" aria-hidden="true" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <div className="relative z-10">
            <p className="mb-4 inline-flex rounded-card border border-forest-100 bg-white px-3 py-2 text-sm font-black text-forest-800 shadow-soft">
              LINEで写真を送るだけ / 最短30秒見積り / 相談無料
            </p>
            <h1 className="max-w-4xl text-[2.25rem] font-black leading-[1.18] tracking-normal text-ink-900 sm:text-6xl">
              <span className="block text-forest-800">エアコン・給湯器</span>
              <span className="block">
                ガスコンロ<span className="hidden sm:inline">・水まわりの</span>
              </span>
              <span className="block sm:hidden">水まわりの</span>
              <span className="mt-2 inline-block rounded-card bg-sun-300 px-3 py-1 text-forest-950">
                交換工事専門
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-ink-700 sm:text-lg sm:leading-9">
              <span className="block">松戸市密着。柏市・流山市・市川市まで、</span>
              <span className="block sm:inline">写真確認から工事内容と</span>
              <span className="block sm:inline">料金目安をご案内します。</span>
            </p>
            <div className="mt-5 flex max-w-3xl flex-wrap gap-2">
              {exchangeCategories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="rounded-card border border-forest-100 bg-white px-3 py-2 text-sm font-black text-forest-800 shadow-sm transition hover:border-forest-300 hover:bg-forest-50"
                >
                  {category.label}
                </Link>
              ))}
            </div>
            <div className="mt-7">
              <CTAGroup />
            </div>
            <dl className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              {heroStats.map(([label, value]) => (
                <div key={label} className="rounded-card border border-forest-100 bg-white p-4 shadow-soft">
                  <dt className="text-xs font-black text-forest-700">{label}</dt>
                  <dd className="mt-1 text-base font-black leading-6 text-ink-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative z-10">
            <div className="rounded-card border border-forest-100 bg-white p-4 shadow-lift">
              <div className="grid items-center gap-4 sm:grid-cols-[180px_minmax(0,1fr)] lg:grid-cols-1">
                <div className="rounded-card bg-forest-50 p-3">
                  <Image
                    src="/images/hero/home-worker.jpg"
                    width={760}
                    height={620}
                    priority
                    alt="ライフチェンジの設備工事スタッフ"
                    className="mx-auto aspect-square max-h-[260px] w-full object-contain"
                  />
                </div>
                <div className="rounded-card border border-forest-100 bg-forest-50 p-4">
                  <p className="text-sm font-black text-forest-800">写真見積りの流れ</p>
                  <div className="mt-3 grid gap-3">
                    {estimateSteps.map(([number, title, text]) => (
                      <div key={number} className="flex gap-3">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-card bg-forest-600 text-sm font-black text-white">
                          {number}
                        </span>
                        <span>
                          <span className="block text-sm font-black text-ink-900">{title}</span>
                          <span className="block text-xs font-bold leading-5 text-ink-500">{text}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-forest-100 bg-white py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 inline-flex rounded-card bg-forest-50 px-3 py-1 text-xs font-black text-forest-700">
                SERVICE
              </p>
              <h2 className="text-3xl font-black leading-tight tracking-normal text-ink-900 sm:text-4xl">
                何を交換しますか？
              </h2>
            </div>
            <p className="max-w-xl text-sm font-bold leading-7 text-ink-500">
              写真を送るだけで、交換できるか・追加工事が必要かを確認できます。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {homeServiceIcons.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group min-h-[168px] rounded-card border border-forest-100 bg-white p-4 text-center shadow-soft transition hover:-translate-y-1 hover:border-forest-300 hover:shadow-lift"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-card bg-forest-50 text-forest-700 transition group-hover:bg-forest-600 group-hover:text-white">
                  <ServiceIcon type={item.icon} className="h-8 w-8" aria-hidden="true" />
                </span>
                <span className="mt-3 block text-base font-black text-ink-900">{item.label}</span>
                <span className="mt-1 block text-xs font-bold leading-6 text-ink-500">{item.text}</span>
                <span className="mt-3 inline-flex text-xs font-black text-forest-700 opacity-0 transition group-hover:opacity-100">
                  詳細を見る
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="PHOTO"
        title="写真で分かる、対応している交換工事"
        lead="エアコン、給湯器、キッチン設備など、何を交換できる会社か分かりやすく整理しています。"
      >
        <VisualGallery items={homeVisuals} />
      </Section>

      <Section
        tone="clay"
        eyebrow="LOCAL"
        title="地域密着の設備屋さんです"
        lead="松戸市を中心に、近隣エリアの一般家庭から設備交換のご相談をいただいています。"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {localTrustItems.map(([label, text]) => (
            <div key={label} className="relative overflow-hidden rounded-card border border-forest-100 bg-white p-5 shadow-soft">
              <span className="absolute inset-y-0 left-0 w-1 bg-forest-600" aria-hidden="true" />
              <p className="text-lg font-black text-forest-800">{label}</p>
              <p className="mt-2 text-sm font-bold leading-7 text-ink-500">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="LICENSE"
        title="資格と経験を活かした、安心の設備工事"
        lead="エアコン、給湯器、コンロ、水まわりなど、生活設備を安全に施工するための資格を幅広く保有しています。"
      >
        <QualificationSummary />
      </Section>

      <Section
        id="services"
        eyebrow="SERVICE"
        title="詳しいサービス内容"
        lead="家庭用設備から店舗・事務所設備まで、工事ごとの注意点と料金目安を確認できます。"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-card border border-forest-100 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-forest-300 hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="rounded-card bg-forest-50 px-3 py-1 text-xs font-black text-forest-800">
                  {service.shortTitle}
                </p>
                <span className="text-sm font-black text-forest-700 transition group-hover:translate-x-1">→</span>
              </div>
              <h3 className="mt-4 text-lg font-black leading-7 text-ink-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">{service.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        id="reason"
        tone="soft"
        eyebrow="REASON"
        title="ライフチェンジが選ばれる理由"
        lead="設備交換は価格だけでなく、現場で何が起きるかを分かっている人に相談できるかが大切です。"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-card border border-forest-100 border-t-4 border-t-sun-300 bg-white p-5 shadow-soft">
              <p className="text-sm font-black text-forest-800">{reason.label}</p>
              <h3 className="mt-3 text-lg font-black leading-7 text-ink-900">{reason.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">{reason.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="quality"
        eyebrow="QUALITY"
        title="施工品質のこだわり"
        lead="エアコンは設置後に見えなくなる部分ほど、寿命やトラブル発生率に影響します。"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {qualityItems.map(([title, text], index) => (
            <article key={title} className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
              <p className="grid h-10 w-10 place-items-center rounded-card bg-forest-600 text-sm font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl font-black leading-8 text-ink-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="soft"
        eyebrow="CAUTION"
        title="弊社ではこのような工事は行いません"
        lead="見えない部分の確認不足や危険な処理は、故障や雨漏りにつながることがあります。"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {cautionExamples.map(([src, alt, title, text]) => (
            <article key={title} className="rounded-card border border-forest-100 bg-white p-4 shadow-soft">
              <Image src={src} width={900} height={760} alt={alt} className="aspect-[4/3] rounded-card object-cover" />
              <h3 className="mt-4 text-lg font-bold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink-500">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="clay"
        eyebrow="REVIEW"
        title="お客様の声"
        lead="丁寧な説明、工事の仕上がり、事前の追加料金案内を大切にしています。"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <article key={`${review.name}-${review.service}`} className="rounded-card bg-white p-5 shadow-soft">
              <p className="text-sm font-black text-sun-500">★★★★★ {review.rating}.0</p>
              <p className="mt-4 leading-8 text-ink-700">{review.body}</p>
              <p className="mt-4 text-sm font-bold text-forest-800">
                {review.name} / {review.area} / {review.service}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="CHECK"
        title="こんなお悩みありませんか？"
        lead="迷っている段階でも、写真と状況を共有いただければ確認ポイントをご案内できます。"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((concern) => (
            <Link
              key={concern.slug}
              href={`/concerns/${concern.slug}`}
              className="rounded-card border border-forest-100 bg-forest-50 p-5 font-bold text-ink-800 transition hover:-translate-y-1 hover:border-forest-300 hover:bg-white"
            >
              {concern.title}
            </Link>
          ))}
        </div>
      </Section>

      <Section
        id="price"
        tone="soft"
        eyebrow="PRICE"
        title="エアコン交換料金"
        lead="表示料金は目安です。正式な金額は設置状況を確認してからご案内します。"
      >
        <PriceTable rows={basePrices} />
        <div className="mt-7">
          <CTAGroup />
        </div>
      </Section>

      <Section
        eyebrow="MODEL"
        title="お掃除機能付きとシンプル機種の違い"
        lead="費用、故障リスク、クリーニング費用を踏まえて、暮らしに合う機種を選びます。"
      >
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
                  <td className="px-4 py-4 font-bold text-ink-900">{row.label}</td>
                  <td className="px-4 py-4 text-ink-500">{row.withFeature}</td>
                  <td className="px-4 py-4 font-bold text-forest-800">{row.simple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="clay" eyebrow="MAKER" title="相談が多いメーカー" lead="メーカーごとの特徴と設置条件を確認しながら、無理のない選択を一緒に考えます。">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {makers.map(([code, name, text]) => (
            <article key={name} className="rounded-card bg-white p-5 shadow-soft">
              <p className="mb-4 rounded-card bg-forest-800 px-3 py-2 text-center text-sm font-black text-white">{code}</p>
              <h3 className="text-lg font-bold text-ink-900">{name}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="area" eyebrow="AREA" title="対応エリア" lead="松戸市を中心に、千葉県北西部と東京東部の近隣エリアへ対応しています。">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <Link key={area.slug} href={`/areas/${area.slug}`} className="rounded-card border border-forest-100 bg-white p-5 shadow-soft hover:border-forest-300">
              <h3 className="text-xl font-bold text-ink-900">{area.name}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">{area.lead}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="works" tone="soft" eyebrow="CASE" title="施工事例" lead="地域名、メーカー名、工事内容、施工前後の状態を掲載できる構造です。">
        <div className="grid gap-4 lg:grid-cols-3">
          {featuredCases.map((workCase) => (
            <CaseCard key={workCase.slug} workCase={workCase} />
          ))}
        </div>
        <Link href="/cases" className="mt-7 inline-flex rounded-card bg-forest-800 px-5 py-3 text-sm font-black text-white">
          施工事例一覧を見る
        </Link>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="よくある質問" lead="問い合わせ前によくいただく質問をまとめました。">
        <FaqList items={shortFaqs} />
      </Section>

      <Section id="contact" tone="clay" eyebrow="CONTACT" title="写真を送って相談する" lead="室内機、室外機、コンセント、配管まわりの写真があると確認がスムーズです。">
        <CTAGroup />
      </Section>
    </main>
  );
}
