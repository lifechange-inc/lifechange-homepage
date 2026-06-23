import Link from "next/link";
import { ctaLabels, pendingValue, siteConfig } from "@/data/site";

export function FloatingCTA() {
  const phoneHref = /^\d[\d-]+$/.test(siteConfig.phone)
    ? `tel:${siteConfig.phone.replaceAll("-", "")}`
    : "";
  const lineHref = siteConfig.lineUrl.startsWith("http") ? siteConfig.lineUrl : "";

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-forest-100 bg-white/96 p-3 shadow-soft backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        {lineHref ? (
          <a
            href={lineHref}
            className="whitespace-nowrap rounded-card bg-forest-600 px-2 py-3 text-center text-xs font-black text-white"
            data-ga-event="cta_line_floating"
          >
            {ctaLabels.line}
          </a>
        ) : (
          <Link href="/contact" className="whitespace-nowrap rounded-card bg-forest-600 px-2 py-3 text-center text-xs font-black text-white">
            {ctaLabels.line}
          </Link>
        )}
        {phoneHref ? (
          <a
            href={phoneHref}
            className="whitespace-nowrap rounded-card bg-sun-300 px-2 py-3 text-center text-xs font-black text-ink-900"
            data-ga-event="cta_phone_floating"
          >
            {ctaLabels.phone}
          </a>
        ) : (
          <span className="whitespace-nowrap rounded-card bg-forest-50 px-2 py-3 text-center text-xs font-black text-ink-500">
            電話 {pendingValue}
          </span>
        )}
      </div>
      <Link href="/contact" className="sr-only">
        {ctaLabels.form}
      </Link>
    </div>
  );
}
