import Image from "next/image";
import Link from "next/link";
import { CTAGroup } from "@/components/CTAGroup";
import { Section } from "@/components/Section";
import { getDreamContent } from "@/data/dream";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "代表挨拶｜松戸市のエアコン工事・給湯器交換なら合同会社ライフチェンジ",
  description:
    "合同会社ライフチェンジ代表・徳永弘之の挨拶ページです。26歳で独立した理由、アフリカでキャンプをしながら考えたこと、松戸市で安心して任せられる設備工事への想いを紹介します。",
  path: "/company/message"
});

const heroPoints = ["年間4,000台以上施工", "現場経験10年以上", "Google口コミ★5.0・95件", "中間マージンなし"];

const messageCards = [
  ["感謝されることが原動力", "工事後に「ありがとう」「またお願いします」と言っていただける瞬間が、この仕事を続けていて何より嬉しい時間です。"],
  ["他社が断った工事への対応", "難しい現場を無理に請けるのではなく、できる方法を探し、安全に収められたときは大きな喜びがあります。"],
  ["見積りに時間を使う理由", "写真を確認し、追加工事の可能性を考え、分かりやすく返す。見積作成には想像以上に時間を使いますが、不安を減らすために大切な仕事です。"],
  ["価格だけで比べられる葛藤", "相見積もりで金額だけを見られると、見えない部分の確認や安全対策の価値が伝わりにくいことがあります。それでも、必要な説明は省きません。"],
  ["お客様も、自分の人生も大切に", "お客様を大切にすることと、自分の人生を大切にすること。その両方があって、長く良い仕事を続けられると考えています。"]
] as const;

const journeyCards = [
  {
    place: "アメリカ横断",
    text: "26歳の頃、キャンピングカーでルート66を横断。知らない世界を見ること、挑戦することの大切さを強く感じました。"
  },
  {
    place: "オーストラリア",
    text: "予定通りにいかない環境でも、自分で判断しながら進む経験が、現場での対応力につながっています。"
  },
  {
    place: "アフリカ",
    text: "アフリカでキャンプをしながら、便利さから離れた時間の中で「人生は一度」という言葉が強く響きました。"
  }
];

const trustCards = [
  ["なぜ年間4,000台以上施工できるのか", "住宅設備交換に特化し、エアコン・給湯器・キッチン設備まで幅広く現場経験を積んできました。一件一件で説明と確認を重ねてきたことが、口コミや紹介につながっています。"],
  ["工事後に一番嬉しかった言葉", "「また何かあったらお願いします」。料金だけではなく、次も任せたいと思っていただけることが一番嬉しいです。"],
  ["安売りをしない理由", "本当に差が出るのは数年後です。見えない部分の施工品質、電気工事、配管処理、安全対策を省かないためです。"],
  ["私が考える良い職人", "手が早いだけではなく、説明できる、現場をきれいに使える、危ない施工をしない、工事後まで考えられる人です。"]
] as const;

const serviceLinks = [
  { href: "/services/aircon-exchange", label: "松戸市のエアコン交換" },
  { href: "/services/water-heater", label: "松戸市の給湯器交換" },
  { href: "/services/ecocute", label: "松戸市のエコキュート工事" },
  { href: "/services/electrical-work", label: "松戸市の電気工事" }
] as const;

const workTypes = ["エアコン", "給湯器", "エコキュート", "ガスコンロ", "レンジフード", "浴室暖房乾燥機", "分電盤交換", "電気工事"];

const futureFocus = [
  "地域のお客様に喜ばれ続ける会社",
  "適正価格と迅速対応の維持",
  "AIや仕組み化による業務改善",
  "自然の中で過ごせる建物づくり",
  "一枚板を使った家具や洗面台",
  "セカンドハウスや災害時にも役立つ施設",
  "将来的なモデルハウス構想"
] as const;

export default function CompanyMessagePage() {
  const dream = getDreamContent();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-forest-100 bg-hero-pattern py-14 sm:py-20">
        <div className="absolute inset-x-0 top-0 h-2 bg-sun-300" aria-hidden="true" />
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="min-w-0">
            <p className="mb-4 inline-flex rounded-card border border-forest-100 bg-white px-3 py-2 text-sm font-black text-forest-800 shadow-soft">
              代表挨拶
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-normal text-ink-900 sm:text-5xl">
              <span className="block">アフリカで</span>
              <span className="block">キャンプをしながら</span>
              <span className="mt-2 block text-forest-800">考えたこと。</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-ink-700 sm:text-lg sm:leading-9">
              <span className="block">合同会社ライフチェンジの代表、徳永 弘之です。</span>
              <span className="block">26歳で独立した理由、旅で感じたこと、</span>
              <span className="block">そして松戸市で設備工事を続ける中で</span>
              <span className="block">大切にしている想いをお伝えします。</span>
            </p>
            <div className="mt-7">
              <CTAGroup />
            </div>
          </div>
          <div className="min-w-0 rounded-card border border-forest-100 bg-white p-4 shadow-lift sm:p-6">
            <Image
              src="/images/company/africa-camp.svg"
              width={960}
              height={720}
              alt="アフリカでキャンプをしながら考えたことのイメージ"
              priority
              className="aspect-[4/3] w-full rounded-card bg-forest-50 object-cover"
            />
            <div className="mt-4 rounded-card bg-forest-50 p-4 text-center">
              <p className="text-sm font-black text-forest-700">合同会社ライフチェンジ 代表</p>
              <p className="mt-1 text-3xl font-black text-ink-900">徳永 弘之</p>
              <p className="mt-3 leading-8 text-ink-500">人生は一度。だから工事も、人生も、大切にしたい。</p>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {heroPoints.map((point) => (
                <div key={point} className="rounded-card border border-forest-100 bg-white px-3 py-2 text-sm font-black text-forest-800">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="STORY"
        title="自分の人生を自分で選ぶために、26歳で独立しました"
        lead="独立の理由は、お金持ちになることではありません。"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-card border border-forest-100 bg-white p-6 leading-9 text-ink-700 shadow-soft">
            <p>
              30代、40代、50代になっても、毎年知らない世界を見に行ける人生を送りたい。そう思ったことが、独立の大きなきっかけでした。
            </p>
            <p className="mt-4">
              会社員として働いていると、2週間、3週間と自由に休みを取ることは簡単ではありません。自分の人生を自分で選べるようになりたい。その思いから、26歳で設備工事の道で独立しました。
            </p>
            <p className="mt-4">
              創業初期は、建築資材を運ぶ荷揚げ会社としてスタートしました。独立1カ月目から月100万円規模、半年後には月300万円規模の売上へ成長し、現場で動きながら事業の土台をつくってきました。
            </p>
            <p className="mt-4">
              アフリカでキャンプをしたとき、便利なものが少ない環境の中で「人生は一度」という言葉が強く響きました。お客様を大切にすることも、自分の人生を大切にすることも、どちらも諦めたくない。そう考えるようになりました。
            </p>
          </div>
          <div className="grid gap-3">
            {journeyCards.map((card) => (
              <article key={card.place} className="rounded-card border border-forest-100 bg-white p-5 shadow-soft">
                <p className="text-sm font-black text-forest-700">旅の記録</p>
                <h2 className="mt-2 text-xl font-black text-ink-900">{card.place}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-500">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        tone="soft"
        eyebrow="WORK STYLE"
        title="感謝される工事を、きちんと続けていくために"
        lead="問い合わせ対応、写真確認、見積作成、現場判断。見えないところにも時間を使っています。"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {messageCards.map(([title, text]) => (
            <article key={title} className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-black leading-8 text-forest-800">{title}</h2>
              <p className="mt-3 leading-8 text-ink-600">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 rounded-card border border-sun-200 bg-sun-50 p-5 leading-8 text-ink-700">
          <p className="font-bold">
            安さだけで選ばれる工事ではなく、説明を聞いて納得して任せていただける工事を増やしたいと考えています。地域のお客様に長く喜ばれ続けるために、価格、速さ、品質のバランスを大切にします。
          </p>
        </div>
      </Section>

      <Section
        tone="clay"
        eyebrow="FUTURE"
        title={dream.title}
        lead={dream.lead}
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-card border border-forest-100 bg-white p-6 leading-9 text-ink-700 shadow-soft">
            <p>
              26歳で独立した理由は、毎年知らない世界を見に行ける人生にしたかったからです。自分の人生を自分で選び、挑戦し続けられる働き方をつくりたいと思いました。
            </p>
            <p className="mt-4">
              今はエアコン、給湯器、ガスコンロ、レンジフードなど、暮らしに欠かせない設備工事を中心にしています。適正価格と迅速対応を維持するために、AIや仕組み化も取り入れ、見積りや事務対応をもっと分かりやすくしていきます。
            </p>
            <p className="mt-4">
              将来的には、自然の中で過ごせる建物、一枚板を使った家具や洗面台、セカンドハウスや災害時にも役立つ施設、モデルハウスづくりにも挑戦したいと考えています。
            </p>
            <div className="mt-5 grid gap-2">
              {futureFocus.map((item) => (
                <p key={item} className="rounded-card bg-forest-50 px-4 py-3 text-sm font-black leading-6 text-forest-800">
                  {item}
                </p>
              ))}
            </div>
            <Link href="/future" className="mt-5 inline-flex rounded-card bg-forest-600 px-5 py-3 text-sm font-black text-white shadow-lift transition hover:bg-forest-700">
              将来構想ページを見る
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {dream.items.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-card border border-forest-100 bg-white shadow-soft">
                <Image
                  src={item.image}
                  width={720}
                  height={540}
                  alt={item.alt}
                  className="aspect-[4/3] w-full bg-forest-50 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-lg font-black leading-7 text-ink-900">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-ink-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section
        tone="soft"
        eyebrow="IMPROVE"
        title="独立後は、良いことばかりではありませんでした"
        lead="失敗も、資金繰りの悩みも、現場でのトラブルも経験してきました。"
      >
        <div className="max-w-4xl rounded-card bg-white p-6 leading-9 text-ink-700 shadow-soft">
          <p>
            お客様にご迷惑をお掛けしたこともありました。ただ、そのたびに逃げずに向き合い、改善を繰り返してきました。
          </p>
          <p className="mt-4">
            どうすればもっと分かりやすく説明できるか。どうすれば追加工事の不安を減らせるか。どうすれば施工後のトラブルを防げるか。その積み重ねが、今のライフチェンジの工事品質につながっています。
          </p>
        </div>
      </Section>

      <Section eyebrow="QUALITY" title="安売りをしない理由" lead="エアコンや給湯器の工事は、工事直後だけを見ると、どの会社でもきれいに見えることがあります。">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-card border border-forest-100 bg-white p-6 leading-9 text-ink-700 shadow-soft">
            <p>
              設備交換は、価格だけでなく「現場で何が起きるかを分かっている人に相談できるか」が重要です。
            </p>
            <p className="mt-4">
              本当に差が出るのは、数年後です。配管処理が丁寧か。電気工事に無理がないか。ガスや水まわりの確認ができているか。見えない部分まで手を抜いていないか。施工後にきちんと説明しているか。
            </p>
            <p className="mt-4">
              安さだけを優先すると、必要な確認や処理が省かれてしまうことがあります。だから私たちは、安売りだけを前面に出す工事はしていません。
            </p>
          </div>
          <div className="rounded-card bg-forest-800 p-6 text-white shadow-soft">
            <p className="text-sm font-black text-sun-300">大切にしていること</p>
            <ul className="mt-5 grid gap-3 text-sm font-bold leading-7 text-white/90">
              <li>見えない部分の施工品質</li>
              <li>電気工事・配管処理・安全対策</li>
              <li>追加工事の事前説明</li>
              <li>施工後の確認と使い方説明</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="clay" eyebrow="TRUST" title="年間4,000台以上施工できる会社になった理由" lead="特別な宣伝だけではなく、当たり前の積み重ねを続けてきました。">
        <div className="grid gap-4 md:grid-cols-2">
          {trustCards.map(([title, text]) => (
            <article key={title} className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-black leading-8 text-forest-800">{title}</h2>
              <p className="mt-3 leading-8 text-ink-600">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="WORK"
        title="対応している工事"
        lead="松戸市のエアコン工事、松戸市のエアコン交換、松戸市の給湯器交換、松戸市のエコキュート工事、松戸市の電気工事まで幅広く対応します。"
      >
        <div className="mb-6 flex flex-wrap gap-2">
          {workTypes.map((workType) => (
            <span key={workType} className="rounded-card border border-forest-100 bg-forest-50 px-3 py-2 text-sm font-black text-forest-800">
              {workType}
            </span>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-card border border-forest-100 bg-white p-5 font-black text-ink-900 shadow-soft transition hover:-translate-y-1 hover:border-forest-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="AREA" title="地域のお客様へ" lead="工事をして終わりではなく、何かあったときに相談しやすい存在でありたいと思っています。">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.86fr]">
          <div className="rounded-card bg-white p-6 leading-9 text-ink-700 shadow-soft">
            <p>
              ライフチェンジは、松戸市を中心に、柏市、流山市、市川市など近隣エリアで工事を行っています。
            </p>
            <p className="mt-4">
              エアコン交換、給湯器交換、エコキュート工事、電気工事などで困ったときに、「まずライフチェンジに聞いてみよう」と思っていただける会社を目指しています。
            </p>
            <p className="mt-4">
              現場に近い会社として、見積り内容を分かりやすく提示します。中間マージンがないからこそ、価格の納得感と施工品質の両方を大切にしています。
            </p>
          </div>
          <div className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
            <p className="text-sm font-black text-forest-700">これからの目標</p>
            <p className="mt-3 leading-8 text-ink-600">
              施工品質をさらに高めるだけでなく、若い職人が技術を身につけられる会社にしていきます。地域のお客様に安心して任せていただける会社として、一件一件の工事に向き合っていきます。
            </p>
            <p className="mt-5 text-right font-black text-ink-900">代表　徳永 弘之</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="NEXT" title="施工事例・口コミを見る" lead="代表の想いだけでなく、実際の施工内容とお客様の声も確認できます。">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/cases" className="rounded-card border border-forest-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-forest-300">
            <p className="text-sm font-black text-forest-700">CASE</p>
            <h2 className="mt-2 text-2xl font-black text-ink-900">施工事例を見る</h2>
            <p className="mt-3 leading-7 text-ink-500">地域名、工事内容、施工前後の状態を確認できます。</p>
          </Link>
          <Link href="/reviews" className="rounded-card border border-forest-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-forest-300">
            <p className="text-sm font-black text-forest-700">REVIEW</p>
            <h2 className="mt-2 text-2xl font-black text-ink-900">お客様の声を見る</h2>
            <p className="mt-3 leading-7 text-ink-500">説明、仕上がり、追加料金案内への評価を確認できます。</p>
          </Link>
        </div>
      </Section>

      <Section tone="clay" eyebrow="CONTACT" title="写真を送って相談する" lead="見えない部分まで丁寧に確認し、工事内容と料金目安をご案内します。">
        <CTAGroup />
      </Section>
    </main>
  );
}
