import Link from "next/link";
import { ctaLabels, pendingValue, siteConfig } from "@/data/site";

type CTAGroupProps = {
  align?: "left" | "center";
};

export function CTAGroup({ align = "left" }: CTAGroupProps) {
  const alignment = align === "center" ? "justify-center" : "justify-start";
  const phoneHref = /^\d[\d-]+$/.test(siteConfig.phone)
    ? `tel:${siteConfig.phone.replaceAll("-", "")}`
    : "";
  const lineHref = siteConfig.lineUrl.startsWith("http") ? siteConfig.lineUrl : "";
  const lineClass =
    "inline-flex min-h-[54px] items-center justify-center whitespace-nowrap rounded-card border border-forest-700 bg-forest-600 px-5 py-3 text-center text-sm font-black text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-forest-700";

  return (
    <div className="grid gap-3">
      <div className={`flex flex-col gap-3 sm:flex-row ${alignment}`}>
        {lineHref ? (
          <a href={lineHref} className={lineClass} data-ga-event="cta_line">
            {ctaLabels.line}
          </a>
        ) : (
          <Link href="/contact" className={lineClass} data-ga-event="cta_line_fallback">
            {ctaLabels.line}
          </Link>
        )}
        {phoneHref ? (
          <a
            href={phoneHref}
            className="inline-flex min-h-[54px] items-center justify-center whitespace-nowrap rounded-card bg-sun-300 px-5 py-3 text-center text-sm font-black text-ink-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-sun-500"
            data-ga-event="cta_phone"
          >
            {ctaLabels.phone}
          </a>
        ) : (
          <span className="inline-flex min-h-[54px] cursor-not-allowed items-center justify-center whitespace-nowrap rounded-card border border-forest-100 bg-forest-50 px-5 py-3 text-center text-sm font-black text-ink-500" aria-disabled="true">
            電話 {pendingValue}
          </span>
        )}
        <Link
          href="/contact"
          className="inline-flex min-h-[54px] items-center justify-center whitespace-nowrap rounded-card border border-forest-200 bg-white px-5 py-3 text-center text-sm font-black text-forest-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-forest-50"
          data-ga-event="cta_form"
        >
          {ctaLabels.form}
        </Link>
      </div>
      <div className={`flex flex-wrap gap-2 text-xs font-black text-forest-800 ${align === "center" ? "justify-center" : ""}`}>
        {["最短30秒見積り", "写真だけで相談OK", "相談無料"].map((item) => (
          <span key={item} className="rounded-card border border-sun-300 bg-sun-100 px-3 py-1.5">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
