import Image from "next/image";
import Link from "next/link";
import { CTAGroup } from "@/components/CTAGroup";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/seo";

const photoSamples = [
  {
    title: "室内機全体",
    description: "エアコン本体、左右の壁、天井との距離が分かるように撮影してください。",
    image: "/images/services/ac-height.webp"
  },
  {
    title: "配管穴まわり",
    description: "室内機下や横の配管穴、化粧カバー、テープの状態が分かる写真があると確認しやすくなります。",
    image: "/images/services/outlet-position.webp"
  },
  {
    title: "コンセント",
    description: "専用コンセントの形状、位置、電圧表示が分かるように撮影してください。",
    image: "/images/services/safe-wire-crimp.webp"
  },
  {
    title: "室外機全体",
    description: "室外機の置き場所、周囲の作業スペース、配管の出入りが分かる写真をお願いします。",
    image: "/images/services/brace-hole-1.webp"
  },
  {
    title: "配管ルート",
    description: "室内から室外までの配管距離や曲がり、カバーの有無が分かるように撮影してください。",
    image: "/images/services/brace-hole-2.webp"
  },
  {
    title: "型式ラベル",
    description: "メーカー名、型番、年式が分かるラベル写真があると移設可否の確認が早くなります。",
    image: "/images/company/worker-character.jpg"
  }
];

export const metadata = createMetadata({
  title: "写真撮影見本",
  description:
    "エアコン工事・エアコン移設の見積りで送っていただきたい室内機、室外機、配管ルート、コンセント、型式ラベルの写真見本です。",
  path: "/guide/photo-samples"
});

export default function PhotoSamplesPage() {
  return (
    <main>
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
            PHOTO GUIDE
          </p>
          <h1 className="text-4xl font-black tracking-normal text-ink-900 sm:text-5xl">写真撮影見本</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ink-700">
            エアコン移設・取付・交換の見積りでは、室内機と室外機まわりの写真が2枚以上あると確認が早くなります。
          </p>
        </div>
      </section>

      <Section eyebrow="SAMPLE" title="送っていただきたい写真" lead="全てそろっていなくても相談できます。不足があれば追加で確認します。">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {photoSamples.map((sample) => (
            <article key={sample.title} className="overflow-hidden rounded-card border border-forest-100 bg-white shadow-soft">
              <Image
                src={sample.image}
                width={720}
                height={540}
                alt={`${sample.title}の写真見本`}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-lg font-bold text-ink-900">{sample.title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-500">{sample.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow="POINT" title="撮影時のポイント" lead="写真は少し引いて撮ると、設置条件を判断しやすくなります。">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-card bg-white p-5 shadow-soft">
            <h2 className="text-lg font-bold text-forest-800">周囲も写す</h2>
            <p className="mt-3 text-sm leading-7 text-ink-500">本体だけでなく、壁・天井・窓・室外機置き場も入るように撮影してください。</p>
          </div>
          <div className="rounded-card bg-white p-5 shadow-soft">
            <h2 className="text-lg font-bold text-forest-800">暗い場所は明るく</h2>
            <p className="mt-3 text-sm leading-7 text-ink-500">室外機の裏側や配管まわりは、明るい状態で撮ると確認しやすくなります。</p>
          </div>
          <div className="rounded-card bg-white p-5 shadow-soft">
            <h2 className="text-lg font-bold text-forest-800">型式も撮る</h2>
            <p className="mt-3 text-sm leading-7 text-ink-500">移設では本体の年式や型番が判断材料になります。ラベル写真も送ってください。</p>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href="/services/aircon-relocation"
            className="inline-flex w-full justify-center rounded-card border border-forest-200 bg-white px-5 py-3 text-sm font-black text-forest-800 transition hover:bg-forest-50 sm:w-auto"
          >
            エアコン移設工事へ戻る
          </Link>
        </div>
      </Section>

      <Section tone="clay" eyebrow="CONTACT" title="写真を送って相談する" lead="室内機・室外機の写真から、移設可否や追加工事の有無を確認します。">
        <CTAGroup />
      </Section>
    </main>
  );
}
