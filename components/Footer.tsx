import Link from "next/link";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-forest-950 pb-24 pt-12 text-white sm:pb-12">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_1.4fr]">
        <div>
          <p className="text-xl font-bold">{siteConfig.companyName}</p>
          <p className="mt-4 max-w-xl leading-8 text-white/72">{siteConfig.description}</p>
          <dl className="mt-6 grid gap-2 text-sm text-white/76">
            <div className="flex gap-3">
              <dt className="w-20 text-white">電話</dt>
              <dd>{siteConfig.phone}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 text-white">営業時間</dt>
              <dd>{siteConfig.businessHours}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 text-white">定休日</dt>
              <dd>{siteConfig.closedDays}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 text-white">所在地</dt>
              <dd>{siteConfig.address}</dd>
            </div>
          </dl>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold text-sun-300">ページ一覧</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {footerNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-card border border-white/12 px-3 py-2 text-sm text-white/78 transition hover:border-white/35 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            <Link className="rounded-card bg-white px-4 py-2 text-sm font-bold text-ink-900" href="/contact">
              お問い合わせ
            </Link>
            <Link className="rounded-card bg-sun-300 px-4 py-2 text-sm font-bold text-ink-900" href="/pricing">
              料金を見る
            </Link>
            <Link className="rounded-card border border-white/20 px-4 py-2 text-sm font-bold text-white" href="/recruit">
              採用情報
            </Link>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 w-full max-w-6xl px-4 text-xs text-white/45">
        &copy; {new Date().getFullYear()} {siteConfig.companyName}
      </p>
    </footer>
  );
}
