import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type SeoInput = {
  title: string;
  description?: string;
  path?: string;
};

export function absoluteUrl(path = "/") {
  const normalizedBase = siteConfig.baseUrl.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}

export function createMetadata({ title, description, path = "/" }: SeoInput): Metadata {
  const fullTitle = title.includes(siteConfig.brandName)
    ? title
    : `${title} | ${siteConfig.brandName}`;
  const metaDescription = description || siteConfig.description;
  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description: metaDescription,
    alternates: {
      canonical: url
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: siteConfig.siteName,
      title: fullTitle,
      description: metaDescription,
      url
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription
    }
  };
}
