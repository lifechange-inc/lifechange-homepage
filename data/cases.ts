import fs from "node:fs";
import path from "node:path";

export type WorkCase = {
  slug: string;
  category: string;
  title: string;
  area: string;
  maker: string;
  work: string;
  issue: string;
  method: string;
  after: string;
  benefit: string;
  publishedAt?: string;
  order?: number;
  images: string[];
  body: string;
};

const CASES_DIR = path.join(process.cwd(), "content", "cases");

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
    throw new Error("Case markdown must start with frontmatter.");
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
    throw new Error(`Missing required case field "${key}" in ${filePath}`);
  }
  return value;
}

function caseFromMarkdown(filePath: string): WorkCase {
  const markdown = fs.readFileSync(filePath, "utf8");
  const { data, body } = parseFrontmatter(markdown);

  const images = Array.isArray(data.images) ? data.images : [];
  const order = typeof data.order === "number" ? data.order : undefined;
  const publishedAt = typeof data.publishedAt === "string" ? data.publishedAt : undefined;

  return {
    slug: requiredString(data, "slug", filePath),
    title: requiredString(data, "title", filePath),
    category: requiredString(data, "category", filePath),
    area: requiredString(data, "area", filePath),
    maker: requiredString(data, "maker", filePath),
    work: requiredString(data, "work", filePath),
    issue: requiredString(data, "issue", filePath),
    method: requiredString(data, "method", filePath),
    after: requiredString(data, "after", filePath),
    benefit: requiredString(data, "benefit", filePath),
    publishedAt,
    order,
    images,
    body
  };
}

function compareCases(a: WorkCase, b: WorkCase) {
  const dateCompare = (b.publishedAt || "").localeCompare(a.publishedAt || "");
  if (dateCompare !== 0) {
    return dateCompare;
  }

  return (a.order ?? 999999) - (b.order ?? 999999);
}

function readCases() {
  if (!fs.existsSync(CASES_DIR)) {
    return [];
  }

  return fs
    .readdirSync(CASES_DIR)
    .filter((fileName) => fileName.endsWith(".md") && !fileName.startsWith("_"))
    .map((fileName) => caseFromMarkdown(path.join(CASES_DIR, fileName)))
    .sort(compareCases);
}

export const workCases = readCases();
export const caseCategories = Array.from(new Set(workCases.map((workCase) => workCase.category)));

export function getFeaturedCases(limit = 6) {
  return workCases.slice(0, limit);
}

export function getCasesByCategory(categories: string[], limit = 6) {
  return workCases
    .filter((workCase) => categories.includes(workCase.category))
    .slice(0, limit);
}
