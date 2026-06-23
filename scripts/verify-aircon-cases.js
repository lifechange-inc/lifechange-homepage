const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const mainPath = path.join(root, "aircon-exchange-wireframe.html");
const casesDir = path.join(root, "cases");
const expectedCategories = [
  "エアコン交換",
  "エアコン取付",
  "エアコンクリーニング",
  "ガス漏れ",
  "水漏れ",
  "業務用エアコン",
  "給湯器",
  "レンジフード",
  "高所作業",
  "特殊工事",
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const html = fs.readFileSync(mainPath, "utf8");
const worksStart = html.indexOf('<section id="works"');
const worksEnd = html.indexOf('<section class="section-block" aria-labelledby="useful-title"', worksStart);
assert(worksStart !== -1 && worksEnd !== -1, "works section not found");
const works = html.slice(worksStart, worksEnd);

const cardCount = (works.match(/class="wire-card work-card"/g) || []).length;
const fieldCount = (works.match(/class="case-card-fields"/g) || []).length;
const links = [...works.matchAll(/href="(cases\/[^"]+\.html)"/g)].map((match) => match[1]);
const missingLinks = links.filter((link) => !fs.existsSync(path.join(root, link)));
const categories = [...works.matchAll(/<li>([^<]+)<\/li>/g)].map((match) => match[1]);
const jsonLdScripts = [...works.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map((match) => match[1].trim());
const itemList = JSON.parse(jsonLdScripts.find((script) => script.includes('"ItemList"')));
const detailFiles = fs.readdirSync(casesDir).filter((name) => name.endsWith(".html") && !name.startsWith("_")).sort();
const templatePath = path.join(casesDir, "_template.html");
const detailProblems = [];

for (const file of detailFiles) {
  const detail = fs.readFileSync(path.join(casesDir, file), "utf8");
  const required = [
    "案件概要",
    "お客様のお悩み",
    "施工前",
    "施工中",
    "施工後",
    "職人コメント",
    "今回のポイント",
    "電話する",
    "LINE相談する",
    "../img/cases/shared/worker-character.jpg",
    "../img/cases/",
    "before-01.jpg",
    "before-02.jpg",
    "before-03.jpg",
    "during-01.jpg",
    "during-02.jpg",
    "during-03.jpg",
    "after-01.jpg",
    "after-02.jpg",
  ];
  const missing = required.filter((text) => !detail.includes(text));
  if (missing.length) detailProblems.push({ file, missing });
}

const template = fs.readFileSync(templatePath, "utf8");
const templateRequired = ["施工事例ページ テンプレート", "sample-case-slug", "写真差し替え枠", "職人コメント", "今回のポイント"];
const templateMissing = templateRequired.filter((text) => !template.includes(text));

assert(cardCount === 50, `expected 50 cards, got ${cardCount}`);
assert(fieldCount === 50, `expected 50 field groups, got ${fieldCount}`);
assert(links.length === 50, `expected 50 case links, got ${links.length}`);
assert(missingLinks.length === 0, `missing case links: ${missingLinks.join(", ")}`);
assert(JSON.stringify(categories) === JSON.stringify(expectedCategories), "category list does not match expected categories");
assert(itemList.numberOfItems === 50, `expected ItemList 50, got ${itemList.numberOfItems}`);
assert(detailFiles.length === 50, `expected 50 detail files, got ${detailFiles.length}`);
assert(detailProblems.length === 0, `detail page problems: ${JSON.stringify(detailProblems)}`);
assert(templateMissing.length === 0, `template missing: ${templateMissing.join(", ")}`);

console.log(JSON.stringify({
  cardCount,
  fieldCount,
  linkCount: links.length,
  detailFileCount: detailFiles.length,
  itemListCount: itemList.numberOfItems,
  template: "_template.html",
  categories,
}, null, 2));
