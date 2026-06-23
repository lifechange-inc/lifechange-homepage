import Image from "next/image";
import Link from "next/link";
import { QualificationSummary } from "@/components/QualificationSummary";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

const heroTags = ["未経験OK", "現場同行から開始", "工事に集中", "資格取得を目指せる"];

const firstWorkItems = [
  ["ガスコンロ交換", "最初に覚える基本工事のひとつです。手順と安全確認を身につけます。"],
  ["ウォシュレット交換", "水まわりの基本、養生、確認、片付けまでを覚えます。"],
  ["インターホン交換", "配線確認とお客様への説明を、現場で少しずつ学びます。"]
] as const;

const supportItems = [
  ["集客", "案件の確保は会社が行います。"],
  ["電話・メール対応", "お客様対応は会社と事務側で支えます。"],
  ["見積作成", "現場で勝手に判断せず、写真を会社へ送って確認します。"],
  ["クレーム一次対応", "困ったときは一人で抱えず、必ず会社へ相談します。"]
] as const;

const growthSteps = [
  ["倉庫練習", "まずは道具、部材、基本動作を覚えます。"],
  ["現場同行", "先輩の横で挨拶、養生、写真報告、片付けを見て覚えます。"],
  ["補助作業", "できる作業を少しずつ増やします。分からないことはその場で確認します。"],
  ["半自立", "会社に確認しながら、簡単な工事を任せていきます。"],
  ["自立", "写真報告と連絡を徹底し、一人で現場を収める力をつけます。"]
] as const;

const dayFlow = ["出発", "到着連絡", "作業前写真", "施工", "完了写真", "報告", "次の現場または帰宅"] as const;

const culturePoints = [
  {
    title: "最初の挨拶を大切にできる人",
    text: "お客様のご自宅に上がる仕事です。初めて会った瞬間の挨拶や表情で、現場の安心感は大きく変わります。"
  },
  {
    title: "信用を裏切らない人",
    text: "ガス、電気、水道に関わる工事は、資格と確認が必要です。分からないことを分からないまま進めない人と働きたいです。"
  },
  {
    title: "自分で選んで動ける人",
    text: "やらされている感覚ではなく、自分で選んで技術を身につける人は伸びます。失敗も経験として次に活かせます。"
  },
  {
    title: "家族との時間も大切にしたい人",
    text: "会社を大きくする目的は、働く人の生活や家族との時間を守ることにもつながります。長く続けられる働き方を一緒につくります。"
  }
] as const;

const honestPoints = [
  ["最初の1〜3ヶ月は覚えることが多いです", "道具、部材、写真報告、現場の流れを覚えるまでは大変です。"],
  ["体を使う仕事です", "夏場は暑く、重いものを運ぶ場面もあります。楽な仕事ではありません。"],
  ["お客様対応も仕事の一部です", "技術だけでなく、挨拶、説明、清潔感、片付けまで見られます。"],
  ["でも、技術は一生使えます", "設備工事は生活必需品の仕事です。覚えれば全国どこでも役に立つ力になります。"]
] as const;

const fitItems = [
  "手に職をつけたい",
  "将来、独立や自由な働き方も考えたい",
  "指示待ちではなく自分で動ける",
  "挨拶、報告、相談を大切にできる"
] as const;

const unfitItems = [
  "楽な仕事だけを探している",
  "注意されたことを直す気がない",
  "お客様への態度を軽く考えている",
  "勝手な判断や中抜きをしてしまう"
] as const;

export const metadata = createMetadata({
  title: "採用情報 / 求人情報｜設備交換工事スタッフ募集",
  description:
    "合同会社ライフチェンジでは、設備交換工事スタッフを募集しています。未経験からガスコンロ、ウォシュレット、インターホンなどの交換工事を覚え、将来どこでも通用する技術を身につけられる仕事です。",
  path: "/recruit"
});

function RecruitCTA() {
  const phoneHref = /^\d[\d-]+$/.test(siteConfig.phone) ? `tel:${siteConfig.phone.replaceAll("-", "")}` : "";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link href="/contact" className="inline-flex min-h-[54px] items-center justify-center rounded-card bg-forest-600 px-5 py-3 text-sm font-black text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-forest-700">
        応募・相談する
      </Link>
      {phoneHref ? (
        <a href={phoneHref} className="inline-flex min-h-[54px] items-center justify-center rounded-card bg-sun-300 px-5 py-3 text-sm font-black text-ink-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-sun-500">
          電話で仕事内容を聞く
        </a>
      ) : null}
    </div>
  );
}

export default function RecruitPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-forest-100 bg-hero-pattern py-12 sm:py-16">
        <div className="absolute inset-x-0 top-0 h-2 bg-sun-300" aria-hidden="true" />
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="min-w-0">
            <p className="mb-4 inline-flex rounded-card border border-forest-100 bg-white px-3 py-2 text-sm font-black text-forest-800 shadow-soft">
              RECRUIT
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-normal text-ink-900 sm:text-5xl">
              <span className="block">工事だけで</span>
              <span className="block">食べていける技術を</span>
              <span className="mt-2 block text-forest-800">身につける。</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-ink-700 sm:text-lg sm:leading-9">
              ライフチェンジは、長く座っているだけの職場ではありません。未経験から現場で技術を覚え、将来どこでも通用する力をつける場所です。最初はガスコンロ、ウォシュレット、インターホンなど、覚えやすい交換工事から始めます。
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <span key={tag} className="rounded-card border border-sun-300 bg-sun-100 px-3 py-2 text-xs font-black text-forest-800">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-7">
              <RecruitCTA />
            </div>
          </div>
          <div className="rounded-card border border-forest-100 bg-white p-4 shadow-lift">
            <Image
              src="/images/company/recruit-hero.svg"
              width={960}
              height={720}
              alt="設備交換工事スタッフ募集のイメージ"
              priority
              className="aspect-[4/3] w-full rounded-card bg-forest-50 object-cover"
            />
          </div>
        </div>
      </section>

      <Section eyebrow="MESSAGE" title="まず伝えたいこと" lead="設備工事は、覚えれば自分の人生を支える技術になります。">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-card bg-forest-800 p-6 text-white shadow-soft">
            <p className="text-sm font-black text-sun-300">代表から</p>
            <h2 className="mt-3 text-2xl font-black leading-9">働く目的は、給料だけではありません。</h2>
            <p className="mt-4 leading-8 text-white/85">
              家族との時間を大切にしたい。将来、自分で仕事を選べるようになりたい。子どもにやりたいことを経験させてあげたい。そう考えるなら、若いうちに技術へ時間を投資する価値があります。
            </p>
          </div>
          <div className="rounded-card border border-forest-100 bg-white p-6 leading-8 text-ink-700 shadow-soft">
            <p>
              お客様は、工事に素人っぽさを求めていません。ご自宅に上がり、ガス、電気、水道に関わる工事を任せる以上、挨拶、清潔感、説明、確認まで見ています。
            </p>
            <p className="mt-4">
              技術は最初からできなくて大丈夫です。ただ、信用を大切にできること、分からないことを勝手に進めないこと、注意されたことを次に直せること。この3つは最初から大切にしてほしいです。
            </p>
          </div>
        </div>
      </Section>

      <Section tone="soft" eyebrow="WORK" title="最初に覚える仕事" lead="いきなり難しい工事を任せるのではなく、覚えやすい交換作業から始めます。">
        <div className="grid gap-4 md:grid-cols-3">
          {firstWorkItems.map(([title, text]) => (
            <article key={title} className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-black text-forest-800">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink-600">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 rounded-card border border-forest-100 bg-white p-5 text-sm font-bold leading-7 text-ink-700 shadow-soft">
          慣れてきたら、エアコン、給湯器、レンジフード、分電盤なども段階的に学びます。電気・ガス・水道を横断して覚えられることが、ライフチェンジで働く大きな価値です。
        </p>
      </Section>

      <Section eyebrow="FOCUS" title="工事に集中できる環境" lead="集客、見積作成、電話対応を全部ひとりで抱える働き方ではありません。">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Image
            src="/images/company/recruit-workflow.svg"
            width={960}
            height={720}
            alt="工事に集中できる教育フロー"
            className="aspect-[4/3] w-full rounded-card border border-forest-100 bg-white object-cover shadow-soft"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {supportItems.map(([title, text]) => (
              <article key={title} className="rounded-card border border-forest-100 bg-white p-5 shadow-soft">
                <h2 className="text-lg font-black text-forest-800">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-ink-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="clay" eyebrow="STEP" title="成長ステップ" lead="現場に出る前の練習、同行、補助作業を通して、できることを増やしていきます。">
        <div className="grid gap-4 md:grid-cols-5">
          {growthSteps.map(([title, text], index) => (
            <article key={title} className="rounded-card bg-white p-5 shadow-soft">
              <p className="text-sm font-black text-forest-700">STEP {index + 1}</p>
              <h2 className="mt-2 text-lg font-black text-ink-900">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-ink-500">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="DAY" title="1日の流れ" lead="案件内容により変わりますが、連絡と写真報告を大切にして現場を進めます。">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-3">
            {dayFlow.map((item, index) => (
              <div key={item} className="flex gap-3 rounded-card border border-forest-100 bg-white p-4 shadow-soft">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-card bg-forest-600 text-sm font-black text-white">
                  {index + 1}
                </span>
                <p className="font-black leading-9 text-ink-900">{item}</p>
              </div>
            ))}
          </div>
          <Image
            src="/images/company/recruit-day.svg"
            width={960}
            height={720}
            alt="設備工事スタッフの1日の流れ"
            className="aspect-[4/3] w-full rounded-card border border-forest-100 bg-white object-cover shadow-soft"
          />
        </div>
      </Section>

      <Section tone="soft" eyebrow="VALUE" title="一緒に働きたい人" lead="技術はあとから身につけられます。最初に見ているのは、信用を積み重ねられる人かどうかです。">
        <div className="grid gap-4 md:grid-cols-2">
          {culturePoints.map((point) => (
            <article key={point.title} className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-black leading-8 text-forest-800">{point.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink-600">{point.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="MATCH" title="向いている人・向いていない人" lead="入ってから後悔しないように、合う人と合わない人を正直に書きます。">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
            <p className="text-sm font-black text-forest-700">向いている人</p>
            <ul className="mt-4 grid gap-3">
              {fitItems.map((item) => (
                <li key={item} className="rounded-card bg-forest-50 px-4 py-3 text-sm font-bold leading-6 text-ink-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-red-100 bg-white p-6 shadow-soft">
            <p className="text-sm font-black text-red-700">向いていない人</p>
            <ul className="mt-4 grid gap-3">
              {unfitItems.map((item) => (
                <li key={item} className="rounded-card bg-red-50 px-4 py-3 text-sm font-bold leading-6 text-ink-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="SKILL"
        title="資格と技術を、現場で身につける"
        lead="資格を取っただけでは、すぐ売上になるわけではありません。現場で経験を積み、説明できる職人になることが大切です。"
      >
        <QualificationSummary />
      </Section>

      <Section tone="clay" eyebrow="REAL" title="良い面だけでなく、きつい面も正直に伝えます" lead="現場仕事なので楽なことばかりではありません。それでも身についた技術は一生使えます。">
        <div className="grid gap-4 md:grid-cols-2">
          {honestPoints.map(([title, text]) => (
            <div key={title} className="rounded-card bg-white p-5 shadow-soft">
              <p className="text-lg font-black leading-7 text-forest-800">{title}</p>
              <p className="mt-2 text-sm leading-7 text-ink-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="CONTACT" title="仕事について相談する" lead="まずは仕事内容を聞いてみたい、未経験でも大丈夫か知りたいという段階でも相談できます。">
        <RecruitCTA />
      </Section>
    </main>
  );
}
