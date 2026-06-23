import { ContactForm } from "@/components/ContactForm";
import { CTAGroup } from "@/components/CTAGroup";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "お問い合わせ",
  description: "エアコン工事、業務用エアコン工事、給湯器交換、エコキュート交換、ガスコンロ交換、レンジフード交換、トイレ交換、電気工事のご相談はこちら。",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main>
      <section className="hero-band border-b border-forest-100 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="mb-4 inline-flex rounded-card bg-sun-300 px-3 py-2 text-sm font-black text-ink-900">
            CONTACT
          </p>
          <h1 className="text-4xl font-black tracking-normal text-ink-900 sm:text-5xl">お問い合わせ</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-ink-700">
            設置場所や既存設備の写真がある場合は、LINEで共有いただくと確認がスムーズです。フォームからの相談も受け付けています。
          </p>
          <div className="mt-7">
            <CTAGroup />
          </div>
        </div>
      </section>

      <Section eyebrow="FORM" title="相談フォーム" lead="必須項目を入力して送信してください。内容を確認してご連絡します。">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <ContactForm />
          <aside className="rounded-card border border-forest-100 bg-forest-50 p-6">
            <h2 className="text-xl font-bold text-ink-900">電話・LINEでの相談</h2>
            <dl className="mt-5 grid gap-4">
              <div>
                <dt className="text-sm font-bold text-forest-800">電話番号</dt>
                <dd className="mt-1 text-lg font-black text-ink-900">{siteConfig.phone}</dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-forest-800">営業時間</dt>
                <dd className="mt-1 text-ink-700">{siteConfig.businessHours}</dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-forest-800">写真確認の目安</dt>
                <dd className="mt-1 leading-8 text-ink-700">
                  室内機全体、コンセント、室外機、配管ルート、設置場所の周辺が分かる写真を送ってください。
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>
    </main>
  );
}
