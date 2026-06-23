import { faqs } from "@/data/faqs";
import { reviews } from "@/data/reviews";
import { pendingValue, siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl()}#localbusiness`,
    name: siteConfig.companyName,
    alternateName: siteConfig.brandName,
    description: siteConfig.description,
    url: absoluteUrl(),
    telephone: siteConfig.phone === pendingValue ? undefined : siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressRegion: "千葉県",
      addressLocality: "松戸市",
      addressCountry: "JP"
    },
    areaServed: siteConfig.serviceArea.map((area) => ({
      "@type": "AdministrativeArea",
      name: area
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      reviewCount: String(reviews.length)
    },
    makesOffer: siteConfig.businessLines.map((businessLine) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: businessLine,
        description: `${siteConfig.companyName}の${businessLine}`
      }
    }))
  };
}

export function faqPageSchema(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function serviceSchema(serviceName: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@id": `${absoluteUrl()}#localbusiness`
    },
    areaServed: siteConfig.serviceArea,
    url: absoluteUrl(path)
  };
}
