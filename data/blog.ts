import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  keywords: string[];
  tags: string[];
  relatedServices: string[];
  area: string;
  publishedAt: string;
  updatedAt?: string;
  order?: number;
  body: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseValue(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  if (trimmed === "[]") {
    return [];
  }

  if (trimmed.startsWith("[") || trimmed.startsWith('"')) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return trimmed.replace(/^"|"$/g, "");
    }
  }

  if (/^\d+$/.test(trimmed)) {
    return Number(trimmed);
  }

  return trimmed;
}

function parseFrontmatter(markdown: string) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error("Blog markdown must start with frontmatter.");
  }

  const frontmatter = match[1];
  const body = match[2].trim();
  const data: Record<string, string | number | string[]> = {};
  const lines = frontmatter.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line.trim() || line.trim().startsWith("#")) {
      continue;
    }

    const separator = line.indexOf(":");
    if (separator === -1) {
      continue;
    }

    const key = line.slice(0, separator).trim();
    const rawValue = line.slice(separator + 1).trim();

    if (!rawValue) {
      const items: string[] = [];
      while (lines[index + 1]?.startsWith("  - ")) {
        index += 1;
        items.push(String(parseValue(lines[index].replace(/^  - /, ""))));
      }
      data[key] = items;
      continue;
    }

    data[key] = parseValue(rawValue);
  }

  return { data, body };
}

function requiredString(data: Record<string, string | number | string[]>, key: string, filePath: string) {
  const value = data[key];
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Missing required blog field "${key}" in ${filePath}`);
  }
  return value;
}

function stringArray(data: Record<string, string | number | string[]>, key: string) {
  const value = data[key];
  return Array.isArray(value) ? value : [];
}

function postFromMarkdown(filePath: string): BlogPost {
  const markdown = fs.readFileSync(filePath, "utf8");
  const { data, body } = parseFrontmatter(markdown);

  const order = typeof data.order === "number" ? data.order : undefined;
  const updatedAt = typeof data.updatedAt === "string" ? data.updatedAt : undefined;

  return {
    slug: requiredString(data, "slug", filePath),
    title: requiredString(data, "title", filePath),
    description: requiredString(data, "description", filePath),
    category: requiredString(data, "category", filePath),
    keywords: stringArray(data, "keywords"),
    tags: stringArray(data, "tags"),
    relatedServices: stringArray(data, "relatedServices"),
    area: typeof data.area === "string" ? data.area : "松戸市・柏市・市川市・流山市",
    publishedAt: requiredString(data, "publishedAt", filePath),
    updatedAt,
    order,
    body
  };
}

function comparePosts(a: BlogPost, b: BlogPost) {
  const orderCompare = (a.order ?? 999999) - (b.order ?? 999999);
  if (orderCompare !== 0) {
    return orderCompare;
  }

  return (b.publishedAt || "").localeCompare(a.publishedAt || "");
}

function readPosts() {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((fileName) => fileName.endsWith(".md") && !fileName.startsWith("_"))
    .map((fileName) => postFromMarkdown(path.join(BLOG_DIR, fileName)))
    .sort(comparePosts);
}

export const blogPosts = readPosts();

// 表示順は order を尊重しつつ、カテゴリ一覧は定義順で固定します。
export const blogCategoryOrder = ["故障・トラブル", "交換・買い替え", "メンテナンス・季節対策"] as const;

export const blogCategories = blogCategoryOrder.filter((category) =>
  blogPosts.some((post) => post.category === category)
);

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string) {
  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  const sameCategory = blogPosts.filter(
    (candidate) => candidate.slug !== post.slug && candidate.category === post.category
  );
  const others = blogPosts.filter(
    (candidate) => candidate.slug !== post.slug && candidate.category !== post.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}
