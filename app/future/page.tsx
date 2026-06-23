import Image from "next/image";
import Link from "next/link";
import { CTAGroup } from "@/components/CTAGroup";
import { Section } from "@/components/Section";
import { getDreamContent } from "@/data/dream";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "将来構想｜合同会社ライフチェンジ",
  description:
    "合同会社ライフチェンジの将来構想ページです。設備工事で培った技術を活かし、自然の中の建物、一枚板洗面台、サウナ、セカンドハウスなど、暮らしを豊かにする空間づくりへの想いを紹介します。",
  path: "/future"
});

export default function FuturePage() {
  const dream = getDreamContent();

  return (
    <main>
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
              FUTURE VISION
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-normal text-ink-900 sm:text-5xl">
              {dream.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-ink-700">{dream.lead}</p>
            <div className="mt-7">
              <CTAGroup />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {dream.items.slice(0, 4).map((item) => (
              <Image
                key={item.image}
                src={item.image}
                width={720}
                height={540}
                alt={item.alt}
                priority={item.image.includes("nature-building")}
                className="aspect-[4/3] w-full rounded-card border border-white bg-forest-50 object-cover shadow-soft"
              />
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="STORY"
        title="設備工事から、暮らしを豊かにする空間づくりへ"
        lead="今の仕事を大切にしながら、将来やりたいことも少しずつ形にしていきます。"
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_0.86fr]">
          <div className="rounded-card border border-forest-100 bg-white p-6 leading-9 text-ink-700 shadow-soft">
            <p>
              26歳で独立した理由は、ただ仕事を増やすためではありません。30代、40代、50代になっても、毎年知らない世界を見に行ける人生にしたい。自分の人生を自分で選べるようになりたい。その思いが出発点でした。
            </p>
            <p className="mt-4">
              ライフチェンジは今、エアコン、給湯器、ガスコンロ、レンジフード、電気工事など、暮らしに直結する設備工事を行っています。毎日の生活を支える仕事だからこそ、見えない部分まで丁寧に施工することを大切にしています。
            </p>
            <p className="mt-4">
              将来的には、設備工事だけでなく、暮らしそのものを豊かにする空間づくりへ挑戦していきます。自然の中で過ごせる建物、木の質感を活かした洗面台、日常を整えるサウナ、家族や仲間と過ごすセカンドハウス。その構想をここに蓄積していきます。
            </p>
          </div>
          <aside className="rounded-card bg-forest-800 p-6 text-white shadow-soft">
            <p className="text-sm font-black text-sun-300">これからの挑戦</p>
            <h2 className="mt-2 text-2xl font-black">技術を、暮らしの楽しさへつなげる</h2>
            <p className="mt-4 leading-8 text-white/82">
              目の前の工事を丁寧に行うことが、将来の挑戦の土台になります。電気、ガス、水道、設備の知識を活かし、安心して過ごせるだけでなく、毎日が少し楽しみになる空間づくりを目指します。
            </p>
          </aside>
        </div>
      </Section>

      <Section tone="clay" eyebrow="IDEAS" title="今後形にしたいこと" lead="追加したい構想は、Markdownに1項目追加するだけで管理できます。">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
      </Section>

      <Section eyebrow="LINK" title="代表挨拶もあわせてご覧ください" lead="なぜ独立したのか、どんな工事を大切にしているのかを紹介しています。">
        <div className="flex flex-wrap gap-3">
          <Link href="/company/message" className="rounded-card bg-forest-600 px-5 py-3 text-sm font-black text-white shadow-lift transition hover:bg-forest-700">
            代表挨拶を見る
          </Link>
          <Link href="/cases" className="rounded-card border border-forest-200 bg-white px-5 py-3 text-sm font-black text-forest-800 shadow-sm transition hover:bg-forest-50">
            施工事例を見る
          </Link>
        </div>
      </Section>
    </main>
  );
}
