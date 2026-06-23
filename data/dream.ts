import fs from "node:fs";
import path from "node:path";

export type DreamItem = {
  title: string;
  image: string;
  alt: string;
  text: string;
};

export type DreamContent = {
  title: string;
  lead: string;
  imagesBasePath: string;
  items: DreamItem[];
  body: string;
};

const DREAM_FILE = path.join(process.cwd(), "data", "dream.md");

function cleanValue(value: string) {
  return value.trim().replace(/^"|"$/g, "");
}

function parseDream(markdown: string): DreamContent {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error("dream.md must start with frontmatter.");
  }

  const frontmatter = match[1].split(/\r?\n/);
  const body = match[2].trim();
  const items: DreamItem[] = [];
  let title = "ライフチェンジが目指す未来";
  let lead = "";
  let imagesBasePath = "/images/future";
  let currentItem: Partial<DreamItem> | null = null;

  for (const line of frontmatter) {
    const trimmed = line.trim();
    if (!trimmed || trimmed === "items:") {
      continue;
    }

    if (trimmed.startsWith("title:") && !currentItem) {
      title = cleanValue(trimmed.slice("title:".length));
      continue;
    }

    if (trimmed.startsWith("lead:")) {
      lead = cleanValue(trimmed.slice("lead:".length));
      continue;
    }

    if (trimmed.startsWith("imagesBasePath:")) {
      imagesBasePath = cleanValue(trimmed.slice("imagesBasePath:".length));
      continue;
    }

    if (trimmed.startsWith("- title:")) {
      if (currentItem?.title && currentItem.image && currentItem.alt && currentItem.text) {
        items.push({
          title: currentItem.title,
          image: currentItem.image,
          alt: currentItem.alt,
          text: currentItem.text
        });
      }
      currentItem = { title: cleanValue(trimmed.slice("- title:".length)) };
      continue;
    }

    if (!currentItem) {
      continue;
    }

    if (trimmed.startsWith("image:")) {
      const fileName = cleanValue(trimmed.slice("image:".length));
      currentItem.image = `${imagesBasePath}/${fileName}`;
    } else if (trimmed.startsWith("alt:")) {
      currentItem.alt = cleanValue(trimmed.slice("alt:".length));
    } else if (trimmed.startsWith("text:")) {
      currentItem.text = cleanValue(trimmed.slice("text:".length));
    }
  }

  if (currentItem?.title && currentItem.image && currentItem.alt && currentItem.text) {
    items.push({
      title: currentItem.title,
      image: currentItem.image,
      alt: currentItem.alt,
      text: currentItem.text
    });
  }

  return { title, lead, imagesBasePath, items, body };
}

export function getDreamContent(): DreamContent {
  if (!fs.existsSync(DREAM_FILE)) {
    return {
      title: "ライフチェンジが目指す未来",
      lead: "",
      imagesBasePath: "/images/future",
      items: [],
      body: ""
    };
  }

  return parseDream(fs.readFileSync(DREAM_FILE, "utf8"));
}
