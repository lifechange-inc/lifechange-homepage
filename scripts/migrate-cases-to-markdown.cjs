const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const sourcePath = path.join(root, "cases", "case-data.json");
const contentDir = path.join(root, "content", "cases");
const imageDir = path.join(root, "public", "images", "cases");

function quote(value) {
  return JSON.stringify(String(value ?? ""));
}

function caseMarkdown(workCase, index) {
  return `---
slug: ${quote(workCase.slug)}
title: ${quote(workCase.title)}
category: ${quote(workCase.category)}
area: ${quote(workCase.area)}
maker: ${quote(workCase.maker)}
work: ${quote(workCase.work)}
issue: ${quote(workCase.issue)}
method: ${quote(workCase.method)}
after: ${quote(workCase.after)}
benefit: ${quote(workCase.benefit)}
publishedAt: "2026-06-18"
order: ${index + 1}
images: []
---

## 施工内容

${workCase.method}

## 施工後

${workCase.after}
`;
}

function main() {
  const data = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
  fs.mkdirSync(contentDir, { recursive: true });
  fs.mkdirSync(imageDir, { recursive: true });

  data.cases.forEach((workCase, index) => {
    fs.writeFileSync(path.join(contentDir, `${workCase.slug}.md`), caseMarkdown(workCase, index), "utf8");
  });

  const keepPath = path.join(imageDir, ".gitkeep");
  if (!fs.existsSync(keepPath)) {
    fs.writeFileSync(keepPath, "", "utf8");
  }

  console.log(`Migrated ${data.cases.length} cases to ${path.relative(root, contentDir)}`);
}

main();
