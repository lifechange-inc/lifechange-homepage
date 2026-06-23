import Image from "next/image";
import Link from "next/link";
import { CTAGroup } from "@/components/CTAGroup";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PriceTable } from "@/components/PriceTable";
import { Section } from "@/components/Section";
import { VisualGallery } from "@/components/VisualGallery";
import type { Faq } from "@/data/faqs";
import type { PriceRow } from "@/data/pricing";
import type { Service } from "@/data/services";
import { getServiceVisuals, visualAssets } from "@/data/visuals";
import { serviceSchema } from "@/lib/schema";

const worries = [
  "他社に断られた",
  "隠蔽配管なので工事できないと言われた",
  "取付できる機種が分からない",
  "既存配管が再利用できるか分からない",
  "追加費用がどれくらいか分からない",
  "ハウスメーカー指定業者の見積が高かった"
];

const checkFactors = ["メーカー", "型式", "能力", "配管長", "既存電線サイズ"];

const manufacturerRows = [
  {
    maker: "ダイキン",
    oneSix: "型式ごとの据付説明書で確認。小能力機でも条件確認が必要です。",
    two: "能力・シリーズ・既設配線条件により2.0mm指定の場合があります。",
    pipe: "最大配管長と高低差は型式別に確認します。"
  },
  {
    maker: "三菱電機",
    oneSix: "霧ヶ峰シリーズでも型式別確認。1.6mm可否を一律判断しません。",
    two: "大きい能力や指定条件では2.0mmが必要になる場合があります。",
    pipe: "機種別の据付工事説明書で配管長を確認します。"
  },
  {
    maker: "日立",
    oneSix: "白くまくん各機種の施工条件を確認して判断します。",
    two: "能力やシリーズにより2.0mm指定の可能性があります。",
    pipe: "最大配管長は型式ごとの仕様で確認します。"
  },
  {
    maker: "パナソニック",
    oneSix: "エオリア各機種の据付説明書で電線径を確認します。",
    two: "能力が大きい機種では2.0mm指定を優先します。",
    pipe: "型式別の配管長・高低差条件を確認します。"
  },
  {
    maker: "東芝",
    oneSix: "既存1.6mmの可否は型式と能力を確認して判断します。",
    two: "大容量機や施工条件によって2.0mmが必要な場合があります。",
    pipe: "取扱説明書・据付説明書の機種別条件を確認します。"
  },
  {
    maker: "富士通ゼネラル",
    oneSix: "nocria各機種の据付説明書を確認して判断します。",
    two: "能力・配管長・既設電線状態により2.0mm指定の場合があります。",
    pipe: "型式ごとの最大配管長と高低差を確認します。"
  },
  {
    maker: "シャープ",
    oneSix: "機種ごとの取扱説明書・据付説明書で確認します。",
    two: "能力の大きい機種では2.0mm指定の有無を確認します。",
    pipe: "最大配管長は型式別に確認します。"
  }
];

const policyItems = [
  "既存電線の太さを確認",
  "既存配管の状態を確認",
  "設置条件とメーカー指定を確認",
  "無理な接続や危険な施工は行わない"
];

const hiddenPipePrices: PriceRow[] = [
  {
    item: "6畳～12畳",
    detail: "基本取付料金 12,000円～ / 隠蔽配管工事 8,000円～",
    price: "合計目安 20,000円～",
    note: "小能力機の目安です"
  },
  {
    item: "12畳～20畳",
    detail: "基本取付料金 15,000円～ / 隠蔽配管工事 8,000円～",
    price: "合計目安 23,000円～",
    note: "能力・配管条件で変動します"
  },
  {
    item: "20畳以上",
    detail: "基本取付料金 25,000円～ / 隠蔽配管工事 8,000円～",
    price: "合計目安 33,000円～",
    note: "大型機は電線・配管条件の確認が重要です"
  }
];

const additionalPrices: PriceRow[] = [
  {
    item: "ユニオン接続",
    detail: "既存配管の長さが足りない場合の接続部材",
    price: "4,000円～",
    note: "取り外し後に必要可否を確認します"
  },
  {
    item: "配管延長（2分3分）",
    detail: "標準的な家庭用エアコンの配管延長",
    price: "1mあたり 2,500円～",
    note: "配管長と経路で変動します"
  },
  {
    item: "63クラス以上",
    detail: "大能力機の配管延長",
    price: "1mあたり 3,000円～",
    note: "機種条件を確認します"
  }
];

const differences = [
  { issue: "隠蔽配管というだけで断られる", policy: "写真確認で施工可否と確認ポイントを整理" },
  { issue: "電線サイズを確認しない", policy: "1.6mm・2.0mmの条件を型式ごとに確認" },
  { issue: "追加費用が当日まで分からない", policy: "必要な追加工事は施工前に金額を説明" },
  { issue: "無理な接続をされる", policy: "安全性と長期的なトラブル防止を優先" }
];

const estimateItems = [
  "お住まいの市区町村",
  "ハウスメーカー名",
  "戸建て・マンション",
  "取付希望台数",
  "現在のエアコン型式",
  "新しく取り付けるエアコン型式",
  "室内機周辺写真",
  "室外機周辺写真",
  "配管出口写真",
  "コンセント写真",
  "分電盤写真",
  "図面（あれば）"
];

const hiddenPipeFaqs: Faq[] = [
  {
    category: "工事",
    question: "隠蔽配管は再利用できますか？",
    answer:
      "再利用できる場合もありますが、配管状態、長さ、電線サイズ、メーカー指定条件の確認が必要です。外してみないと分からない部分もあります。"
  },
  {
    category: "相談",
    question: "他社で断られましたが対応できますか？",
    answer:
      "写真確認のうえで対応可否を判断します。隠蔽配管は確認項目が多いため、室内機・室外機・配管出口・コンセント・分電盤の写真をお送りください。"
  },
  {
    category: "工事",
    question: "電線が1.6mmでも取付できますか？",
    answer:
      "6畳・8畳クラスで対応できる場合がありますが、能力の大きいエアコンでは2.0mm電線が必要になる場合があります。メーカー、型式、能力、配管長、既存電線サイズで判断します。"
  },
  {
    category: "工事",
    question: "配管延長はできますか？",
    answer:
      "既存配管の長さが足りない場合は、ユニオン部材を使って延長する場合があります。取り外し後に状態を確認し、必要な場合は施工前に金額を説明します。"
  },
  {
    category: "料金",
    question: "追加費用はいつ分かりますか？",
    answer:
      "写真で分かる範囲は事前にご案内します。隠蔽配管は外してみないと配管長、配管状態、電線サイズが分からない場合があるため、当日確認後に説明する追加工事もあります。"
  },
  {
    category: "相談",
    question: "現地調査は必要ですか？",
    answer:
      "写真で判断できる場合もありますが、条件が複雑な場合や大型機の場合は現地確認が必要になることがあります。"
  }
];

export function AirconConcealedPipingPage({ service }: { service: Service }) {
  const visuals = getServiceVisuals(service.slug);

  return (
    <main>
      <JsonLd data={serviceSchema(service.title, service.description, `/services/${service.slug}`)} />
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
              エアコン隠蔽配管・隠蔽配管交換
            </p>
            <h1 className="break-words text-4xl font-black leading-tight tracking-normal text-ink-900 sm:text-5xl">
              エアコン隠蔽配管工事ならお任せください
            </h1>
            <p className="mt-6 text-lg leading-9 text-ink-700">
              隠蔽配管工事は通常のエアコン工事より確認項目が多く、施工経験が重要です。年間4,000台施工の経験をもとに対応いたします。
            </p>
            <div className="mt-7">
              <CTAGroup />
            </div>
          </div>
          <Image
            src="/images/services/brace-hole-1.webp"
            width={900}
            height={720}
            alt="エアコン隠蔽配管工事の確認イメージ"
            priority
            className="aspect-[4/3] w-full max-w-full rounded-card border border-white bg-white object-cover shadow-soft"
          />
        </div>
      </section>

      <Section
        eyebrow="PHOTO"
        title="隠蔽配管工事の施工イメージ"
        lead="配管出口、電線、室外機側の接続状態など、通常工事より確認する写真が多くなります。"
      >
        <VisualGallery items={visuals} />
      </Section>

      <Section eyebrow="BASIC" title="隠蔽配管とは" lead="壁や天井の中に配管が隠されている施工方法です。">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
            <p className="leading-8 text-ink-500">
              隠蔽配管とは、エアコン配管が壁や天井の中に隠されている施工方法です。マンションやハウスメーカー住宅で多く採用されています。見た目がスッキリする反面、通常工事よりも施工難易度が高くなります。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {worries.map((worry) => (
              <div key={worry} className="rounded-card bg-forest-50 p-5 font-bold text-ink-900">
                {worry}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        tone="soft"
        eyebrow="CAUTION"
        title="隠蔽配管工事の注意点"
        lead="既存の電線サイズ確認が非常に重要です。特に既存電線が1.6mmの場合は注意が必要です。"
      >
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-card bg-white p-6 shadow-soft">
            <h2 className="text-xl font-bold text-ink-900">1.6mm電線は型式ごとに判断します</h2>
            <p className="mt-4 leading-8 text-ink-500">
              6畳・8畳クラスであれば対応できる場合がありますが、能力の大きいエアコンでは2.0mm電線が必要になる場合があります。隠蔽配管は外してみないと分からない部分も多いため、施工前に写真確認を行います。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {checkFactors.map((factor) => (
              <div key={factor} className="rounded-card border border-forest-100 bg-white p-5 shadow-soft">
                <p className="text-sm font-black text-forest-700">確認項目</p>
                <h3 className="mt-2 text-lg font-bold text-ink-900">{factor}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="MAKER" title="メーカーごとの確認ポイント" lead="メーカーや型式によって、1.6mmで対応可能な条件、2.0mmが必要になる条件、最大配管長が異なります。">
        <div className="overflow-x-auto rounded-card border border-forest-100 bg-white shadow-soft">
          <table className="min-w-[900px] w-full text-left text-sm">
            <thead className="bg-ink-900 text-white">
              <tr>
                <th className="px-4 py-3 font-bold">メーカー</th>
                <th className="px-4 py-3 font-bold">1.6mm確認</th>
                <th className="px-4 py-3 font-bold">2.0mm確認</th>
                <th className="px-4 py-3 font-bold">最大配管長</th>
              </tr>
            </thead>
            <tbody>
              {manufacturerRows.map((row) => (
                <tr key={row.maker} className="border-b border-forest-100 last:border-0">
                  <td className="px-4 py-4 font-bold text-ink-900">{row.maker}</td>
                  <td className="px-4 py-4 text-ink-500">{row.oneSix}</td>
                  <td className="px-4 py-4 text-ink-500">{row.two}</td>
                  <td className="px-4 py-4 text-ink-500">{row.pipe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 rounded-card bg-forest-50 p-4 text-sm leading-7 text-ink-600">
          最終判断は施工説明書・型式・現地確認によります。メーカー名だけで一律に対応可否を判断せず、設置するエアコンの型式ごとに確認します。
        </p>
      </Section>

      <Section tone="clay" eyebrow="POLICY" title="弊社の施工方針" lead="無理な接続や危険な施工は行いません。">
        <div className="grid gap-4 md:grid-cols-4">
          {policyItems.map((item, index) => (
            <div key={item} className="overflow-hidden rounded-card bg-white shadow-soft">
              <Image
                src={visuals[index % visuals.length].src}
                width={480}
                height={360}
                alt={`隠蔽配管 ${item}のイメージ`}
                className="aspect-[4/3] w-full bg-forest-50 object-cover"
              />
              <div className="p-5">
              <h2 className="text-lg font-bold text-forest-800">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-ink-500">
                安全性と長期的なトラブル防止を優先し、施工前に条件を確認します。
              </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="PRICE" title="料金目安" lead="隠蔽配管工事は現地条件により金額が変わります。施工前に内容と費用を説明します。">
        <PriceTable rows={hiddenPipePrices} />
      </Section>

      <Section tone="soft" eyebrow="EXTRA" title="よくある追加工事" lead="既存配管の長さが足りない場合は、ユニオンという部材を使用して配管を延長します。">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
            <p className="leading-8 text-ink-500">
              ユニオンを使うかどうかは、当日エアコンを取り外して確認しないと分からないケースがあります。追加工事が必要な場合は施工前に金額を説明し、ご納得いただいてから作業します。
            </p>
          </div>
          <figure className="overflow-hidden rounded-card border border-forest-100 bg-white shadow-soft">
            <Image
              src={visualAssets.holeCheck}
              width={900}
              height={675}
              alt="隠蔽配管の延長部材を確認するイメージ"
              className="aspect-[4/3] w-full bg-forest-50 object-cover"
            />
            <div className="p-5">
            <figcaption className="mt-3 text-sm leading-7 text-ink-500">
              隠蔽配管の延長に使用するユニオン部材
            </figcaption>
            </div>
          </figure>
        </div>
      </Section>

      <Section eyebrow="EXTRA PRICE" title="追加工事料金" lead="隠蔽配管は外してみないと配管長、配管状態、電線サイズが分からない場合があります。">
        <PriceTable rows={additionalPrices} />
        <p className="mt-5 rounded-card bg-forest-50 p-4 text-sm leading-7 text-ink-600">
          追加工事が必要な場合は施工前に金額を確認してから作業します。
        </p>
      </Section>

      <Section tone="soft" eyebrow="DIFFERENCE" title="他社との違い" lead="隠蔽配管は確認不足や無理な接続がトラブルにつながりやすい工事です。">
        <div className="grid gap-4 md:grid-cols-2">
          {differences.map((row) => (
            <article key={row.issue} className="rounded-card bg-white p-5 shadow-soft">
              <p className="text-sm font-black text-forest-700">よくある例</p>
              <h2 className="mt-2 text-lg font-bold text-ink-900">{row.issue}</h2>
              <p className="mt-4 text-sm font-black text-forest-700">弊社の対応</p>
              <p className="mt-2 leading-7 text-ink-500">{row.policy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="ESTIMATE" title="簡単見積り" lead="写真は多いほど正確なお見積りが可能です。できるだけ多くの写真をご用意ください。">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.82fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {estimateItems.map((item, index) => (
              <div key={item} className="rounded-card border border-forest-100 bg-white p-5 shadow-soft">
                <p className="text-sm font-black text-forest-700">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-bold text-ink-900">{item}</p>
              </div>
            ))}
          </div>
          <div className="rounded-card bg-forest-800 p-6 text-white shadow-soft">
            <h2 className="text-2xl font-black">写真確認のお願い</h2>
            <p className="mt-4 leading-8 text-white/85">
              隠蔽配管は外してみないと分からない部分があるため、室内機、室外機、配管出口、コンセント、分電盤の写真があると確認が早くなります。
            </p>
            <Link
              href="/guide/photo-samples"
              className="mt-6 inline-flex w-full justify-center rounded-card bg-sun-300 px-5 py-3 text-sm font-black text-ink-900 transition hover:bg-sun-500 sm:w-auto"
            >
              写真見本はこちら
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="soft" eyebrow="FAQ" title="よくある質問" lead="隠蔽配管の再利用、電線サイズ、追加費用に関する質問をまとめました。">
        <FaqList items={hiddenPipeFaqs} />
      </Section>

      <Section tone="clay" eyebrow="CONTACT" title="隠蔽配管工事を相談する" lead="型式と写真を送っていただければ、施工可否と追加工事の可能性を確認します。">
        <CTAGroup />
      </Section>
    </main>
  );
}
