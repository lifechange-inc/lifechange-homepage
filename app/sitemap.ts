import type { MetadataRoute } from "next";
import { areas } from "@/data/areas";
import { blogPosts } from "@/data/blog";
import { concerns } from "@/data/concerns";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

const staticPaths = [
  "/",
  "/cases",
  "/blog",
  "/reviews",
  "/pricing",
  "/pricing/additional-construction",
  "/guide/photo-samples",
  "/faq",
  "/company",
  "/company/message",
  "/future",
  "/recruit",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl.replace(/\/$/, "");
  const servicePaths = services.map((service) => `/services/${service.slug}`);
  const areaPaths = areas.map((area) => `/areas/${area.slug}`);
  const concernPaths = concerns.map((concern) => `/concerns/${concern.slug}`);
  const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticPaths, ...servicePaths, ...areaPaths, ...concernPaths, ...blogPaths].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7
  }));
}
