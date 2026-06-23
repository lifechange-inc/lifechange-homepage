import Link from "next/link";
import { navigation, serviceCategoryNavigation } from "@/data/navigation";
import { ctaLabels, pendingValue, siteConfig } from "@/data/site";

export function Header() {
  const phoneHref = /^\d[\d-]+$/.test(siteConfig.phone)
    ? `tel:${siteConfig.phone.replaceAll("-", "")}`
    : "";
  const lineHref = siteConfig.lineUrl.startsWith("http") ? siteConfig.lineUrl : "";

  return (
    <header className="sticky top-0 z-40 border-b border-forest-100 bg-white/[0.98] shadow-[0_8px_30px_rgba(6,69,42,0.08)] backdrop-blur">
      <div className="mx-auto flex min-h-[72px] w-full max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${siteConfig.brandName} トップへ`}>
          <span className="grid h-11 w-11 place-items-center rounded-card bg-forest-600 text-sm font-black text-white shadow-lift ring-4 ring-forest-50">
            LC
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-black text-ink-900">{siteConfig.brandName}</span>
            <span className="hidden text-xs font-bold text-forest-700 sm:block">松戸市密着の交換工事専門店</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="主要ナビゲーション">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-card px-3 py-2 text-sm font-bold text-ink-700 transition hover:bg-forest-50 hover:text-forest-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {phoneHref ? (
            <a
              href={phoneHref}
              className="hidden whitespace-nowrap rounded-card border border-forest-300 bg-white px-3 py-2 text-sm font-black text-forest-800 shadow-sm transition hover:bg-forest-50 sm:inline-flex"
              data-ga-event="cta_phone_header"
            >
              {siteConfig.phone}
            </a>
          ) : (
            <span className="hidden whitespace-nowrap rounded-card border border-forest-100 bg-forest-50 px-3 py-2 text-sm font-bold text-ink-500 sm:inline-flex">
              電話 {pendingValue}
            </span>
          )}
          {lineHref ? (
            <a
              href={lineHref}
              className="hidden whitespace-nowrap rounded-card bg-forest-600 px-4 py-2 text-sm font-black text-white shadow-lift transition hover:bg-forest-700 sm:inline-flex"
              data-ga-event="cta_line_header"
            >
              {ctaLabels.line}
            </a>
          ) : (
            <Link
              href="/contact"
              className="hidden whitespace-nowrap rounded-card bg-forest-600 px-4 py-2 text-sm font-black text-white shadow-lift transition hover:bg-forest-700 sm:inline-flex"
            >
              {ctaLabels.line}
            </Link>
          )}
        </div>
      </div>
      <nav className="flex gap-2 overflow-x-auto border-t border-forest-100 px-4 py-2 lg:hidden" aria-label="モバイルナビゲーション">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 whitespace-nowrap rounded-card bg-forest-50 px-3 py-2 text-xs font-black text-forest-800"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <nav
        className="border-t border-forest-100 bg-forest-800"
        aria-label="サービスカテゴリ"
      >
        <div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 py-2">
          {serviceCategoryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap rounded-card border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:bg-sun-300 hover:text-ink-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
