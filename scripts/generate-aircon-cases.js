const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const mainPath = path.join(root, "aircon-exchange-wireframe.html");
const casesDir = path.join(root, "cases");
const dataPath = path.join(casesDir, "case-data.json");
const characterPath = "../img/cases/shared/worker-character.jpg";

const categoryIllustrations = {
  "エアコン交換": "../img/cases/illustrations/aircon-exchange.jpg",
  "エアコン取付": "../img/cases/illustrations/aircon-exchange.jpg",
  "エアコンクリーニング": "../img/cases/illustrations/aircon-cleaning.jpg",
  "業務用エアコン": "../img/cases/illustrations/commercial-aircon.jpg",
  "ガス漏れ": "../img/cases/illustrations/gas-leak-repair.jpg",
  "給湯器": "../img/cases/illustrations/water-heater-exchange.jpg",
  "レンジフード": "../img/cases/illustrations/range-hood-exchange.jpg",
  "水漏れ": "../img/cases/illustrations/water-leak-repair.jpg",
  "高所作業": "../img/cases/illustrations/water-heater-exchange.jpg",
  "特殊工事": "../img/cases/illustrations/parts-shortage.jpg",
};

const categoryTimes = {
  "エアコン交換": "約2時間",
  "エアコン取付": "約2時間",
  "エアコンクリーニング": "約90分",
  "ガス漏れ": "約90分",
  "水漏れ": "約60分",
  "業務用エアコン": "約4時間",
  "給湯器": "約3時間",
  "レンジフード": "約2時間",
  "高所作業": "約3時間",
  "特殊工事": "約3時間",
};

const photoCaptions = {
  main: "施工完了後の全体写真",
  before: ["既存設備の施工前状況", "設置場所と周辺確認", "配管ルート確認前"],
  during: ["既存設備撤去後の確認", "配管ルート確認中", "真空引き・動作確認作業"],
  after: ["施工完了後の仕上がり", "試運転と最終確認"],
};

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[char]));
}

function photoPath(caseSlug, name) {
  return `../img/cases/${caseSlug}/${name}.jpg`;
}

function listPhotoPath(caseSlug) {
  return `img/cases/${caseSlug}/main.jpg`;
}

function onErrorFallback() {
  return "this.hidden=true;this.nextElementSibling.hidden=false;";
}

function photoFigure(caseItem, name, caption, options = {}) {
  const src = photoPath(caseItem.slug, name);
  const label = `${caseItem.title} ${caption}`;
  const tapText = options.zoom ? '<span class="case-tap-note">タップで拡大できます</span>' : "";
  const body = `<img src="${esc(src)}" alt="${esc(label)}" loading="lazy" decoding="async" onerror="${onErrorFallback()}"><span class="case-photo-fallback" hidden>写真差し替え枠<br>${esc(caption)}</span>`;
  const frame = options.zoom
    ? `<a class="case-photo-frame" href="${esc(src)}" target="_blank" rel="noopener" data-image-slot="${esc(caseItem.slug)}-${esc(name)}">${body}</a>`
    : `<div class="case-photo-frame" data-image-slot="${esc(caseItem.slug)}-${esc(name)}">${body}</div>`;

  return `<figure class="case-photo-card">${frame}<figcaption class="case-photo-caption">${esc(caption)}${tapText}</figcaption></figure>`;
}

function character() {
  return `<div class="case-character"><img src="${characterPath}" alt="ライフチェンジの職人キャラクター" loading="lazy" decoding="async" onerror="${onErrorFallback()}"><span class="case-character-fallback" hidden>職人<br>キャラ</span></div>`;
}

function speech(label, html) {
  return `<div class="case-speech">${character()}<div class="case-speech-body"><span class="case-speech-label">${esc(label)}</span>${html}</div></div>`;
}

function overviewSpeech(caseItem) {
  return speech("案件概要", `<p>${esc(caseItem.area)}での${esc(caseItem.work)}です。写真を差し替えるだけで、同じ構成の施工事例ページとして追加できます。</p>`);
}

function issueSpeech(caseItem) {
  return speech("お客様のお悩み", `<p>${esc(caseItem.issue)}</p>`);
}

function cautionSpeech(caseItem) {
  return speech("注意点", `<p>追加工事や設置条件は現場ごとに変わります。写真を確認し、必要な作業は事前に説明してから進める想定のテンプレートです。</p>`);
}

function proComment(caseItem) {
  const text = `${caseItem.area}で${caseItem.work}を行う場合、見た目だけでなく、配管ルート、排水、固定状態、作業後の試運転まで確認することが大切です。写真を見ながら施工前の課題を整理し、必要な作業を事前に説明することで、追加工事への不安を減らせます。施工後も使い方や注意点をお伝えし、安心して使える状態を目指します。`;
  return speech("プロの解説", `<p>${esc(text)}</p>`);
}

function pointsSpeech(caseItem) {
  return speech("今回のポイント", `<ul class="case-point-list"><li>${esc(caseItem.method)}</li><li>${esc(caseItem.after)}</li><li>${esc(caseItem.benefit)}</li></ul>`);
}

function overviewList(caseItem) {
  const model = caseItem.model || `${caseItem.maker}（機種名差し替え）`;
  const time = caseItem.time || categoryTimes[caseItem.category] || "約2時間";
  return `<dl class="case-overview-list">
    <div><dt>地域</dt><dd>${esc(caseItem.area)}</dd></div>
    <div><dt>工事内容</dt><dd>${esc(caseItem.work)}</dd></div>
    <div><dt>機種</dt><dd>${esc(model)}</dd></div>
    <div><dt>工事時間</dt><dd>${esc(time)}</dd></div>
  </dl>`;
}

function listingCard(caseItem) {
  const src = listPhotoPath(caseItem.slug);
  return `          <article class="wire-card work-card" id="case-${esc(caseItem.slug)}" data-case-id="${esc(caseItem.slug)}" data-category="${esc(caseItem.category)}" data-area="${esc(caseItem.area)}" data-maker="${esc(caseItem.maker)}" data-work-type="${esc(caseItem.work)}" itemscope itemtype="https://schema.org/CreativeWork">
            <a class="work-card-link" href="cases/${esc(caseItem.slug)}.html" aria-label="${esc(caseItem.title)}の詳細を見る" itemprop="url">
              <div class="case-photo-frame work-image" data-image-slot="case-${esc(caseItem.slug)}-main"><img src="${esc(src)}" alt="${esc(caseItem.title)}の施工写真" loading="lazy" decoding="async" onerror="${onErrorFallback()}"><span class="case-photo-fallback" hidden>施工写真<br>差し替え枠</span></div>
              <p class="case-category-badge">${esc(caseItem.category)}</p>
              <h3 itemprop="headline">${esc(caseItem.title)}</h3>
              <dl>
                <dt>地域</dt><dd>${esc(caseItem.area)}</dd>
                <dt>メーカー</dt><dd>${esc(caseItem.maker)}</dd>
              </dl>
              <dl class="case-card-fields">
                <div><dt>工事内容</dt><dd itemprop="about">${esc(caseItem.work)}</dd></div>
                <div><dt>施工前の課題</dt><dd>${esc(caseItem.issue)}</dd></div>
                <div><dt>施工方法</dt><dd>${esc(caseItem.method)}</dd></div>
                <div><dt>施工後</dt><dd>${esc(caseItem.after)}</dd></div>
                <div><dt>お客様メリット</dt><dd itemprop="description">${esc(caseItem.benefit)}</dd></div>
              </dl>
              <span class="case-detail-button">詳細を見る</span>
            </a>
          </article>`;
}

function worksSection(data) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ライフチェンジ施工事例一覧",
    numberOfItems: data.cases.length,
    itemListElement: data.cases.map((caseItem, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: caseItem.title,
      url: `cases/${caseItem.slug}.html`,
      item: {
        "@type": "CreativeWork",
        name: caseItem.title,
        description: `${caseItem.area}の${caseItem.work}。${caseItem.issue} ${caseItem.benefit}`,
        about: caseItem.category,
      },
    })),
  };

  return `    <section id="works" class="section-block" aria-labelledby="works-title">
      <div class="container">
        <div class="section-heading">
          <p class="section-label">SECTION 13</p>
          <h2 id="works-title">施工事例</h2>
          <p>エアコン交換、取付、クリーニング、ガス漏れ、水漏れ、業務用エアコン、給湯器、レンジフード、高所作業、特殊工事まで、地域別に施工事例を追加できる一覧です。</p>
        </div>
        <p class="case-total-note">施工事例${data.cases.length}件掲載中 / 写真・文章は後から差し替え可能</p>
        <ul class="case-category-list" aria-label="施工事例カテゴリー">
${data.categories.map((category) => `          <li>${esc(category)}</li>`).join("\n")}
        </ul>
        <div class="works-grid case-archive-grid" aria-label="施工事例一覧${data.cases.length}件">
${data.cases.map(listingCard).join("\n")}
        </div>
        <p class="case-seo-note">各施工事例は、地域名、メーカー名、工事内容、施工前の課題、施工方法、施工後、お客様メリットを掲載できる構造です。今後、写真や実際の現場情報を差し替えることで施工実績ページとして拡張できます。</p>
        <script type="application/ld+json">
${JSON.stringify(itemList, null, 2).replace(/</g, "\\u003c")}
        </script>
      </div>
    </section>`;
}

function detailPage(caseItem, isTemplate = false) {
  const title = isTemplate ? "施工事例ページ テンプレート" : `${caseItem.title} | ライフチェンジ`;
  const heading = isTemplate ? "松戸市でエアコン交換工事を行いました" : caseItem.title;
  const mainCaption = photoCaptions.main;
  const illustration = categoryIllustrations[caseItem.category] || "../img/cases/illustrations/aircon-exchange.jpg";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: heading,
    description: `${caseItem.area}の${caseItem.work}施工事例。${caseItem.issue} ${caseItem.method} ${caseItem.benefit}`,
    articleSection: caseItem.category,
    about: caseItem.work,
    author: { "@type": "Organization", name: "ライフチェンジ" },
    provider: { "@type": "LocalBusiness", name: "ライフチェンジ" },
    areaServed: caseItem.area,
  };

  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(caseItem.area)}の${esc(caseItem.work)}施工事例。写真と文章を差し替えるだけで運用できるスマホ向けテンプレートです。">
  <meta name="robots" content="index,follow">
  <link rel="stylesheet" href="../aircon-wireframe.css">
  <script type="application/ld+json">
${JSON.stringify(schema, null, 2).replace(/</g, "\\u003c")}
  </script>
</head>
<body class="case-detail-page">
  <header class="site-header"><div class="container header-inner"><a class="logo" href="../aircon-exchange-wireframe.html">ライフチェンジ</a><a class="header-line-button" href="../aircon-exchange-wireframe.html#contact">LINE相談</a></div></header>
  <main>
    <section class="section-block case-detail-hero" aria-labelledby="case-title">
      <div class="container">
        <p class="section-label">${esc(caseItem.category)} 施工事例</p>
        <h1 id="case-title">${esc(heading)}</h1>
        <p class="lead-text">写真と文章を差し替えるだけで、同じ構成の施工事例ページを追加できます。</p>
        <a class="case-back-link" href="../aircon-exchange-wireframe.html#works">施工事例一覧へ戻る</a>
      </div>
    </section>

    <section class="section-block" aria-labelledby="main-photo-title">
      <div class="container">
        <div class="section-heading"><h2 id="main-photo-title">メイン写真</h2></div>
        <div class="case-main-photo">${photoFigure(caseItem, "main", mainCaption)}</div>
      </div>
    </section>

    <section class="section-block band" aria-labelledby="overview-title">
      <div class="container">
        <div class="section-heading"><h2 id="overview-title">案件概要</h2></div>
        ${overviewList(caseItem)}
        ${overviewSpeech(caseItem)}
        <figure class="case-photo-card">
          <div class="case-photo-frame" data-image-slot="${esc(caseItem.slug)}-category-illustration"><img src="${esc(illustration)}" alt="${esc(caseItem.category)}の職人キャラクターイラスト" loading="lazy" decoding="async" onerror="${onErrorFallback()}"><span class="case-photo-fallback" hidden>カテゴリイラスト<br>差し替え枠</span></div>
          <figcaption class="case-photo-caption">職人キャラクターの説明イラスト</figcaption>
        </figure>
      </div>
    </section>

    <section class="section-block" aria-labelledby="issue-title">
      <div class="container">
        <div class="section-heading"><h2 id="issue-title">お客様のお悩み</h2></div>
        ${issueSpeech(caseItem)}
      </div>
    </section>

    <section class="section-block band" aria-labelledby="before-title">
      <div class="container">
        <div class="section-heading"><h2 id="before-title">施工前</h2></div>
        <div class="case-photo-list">
          ${photoCaptions.before.map((caption, index) => photoFigure(caseItem, `before-${String(index + 1).padStart(2, "0")}`, caption)).join("\n          ")}
        </div>
      </div>
    </section>

    <section class="section-block" aria-labelledby="during-title">
      <div class="container">
        <div class="section-heading"><h2 id="during-title">施工中</h2><p>工事中写真はタップで拡大表示できます。</p></div>
        <div class="case-photo-list">
          ${photoCaptions.during.map((caption, index) => photoFigure(caseItem, `during-${String(index + 1).padStart(2, "0")}`, caption, { zoom: true })).join("\n          ")}
        </div>
      </div>
    </section>

    <section class="section-block band" aria-labelledby="after-title">
      <div class="container">
        <div class="section-heading"><h2 id="after-title">施工後</h2></div>
        <div class="case-before-after-stack">
          ${photoFigure(caseItem, "after-01", photoCaptions.after[0])}
          ${photoFigure(caseItem, "after-02", photoCaptions.after[1])}
        </div>
      </div>
    </section>

    <section class="section-block" aria-labelledby="comment-title">
      <div class="container">
        <div class="section-heading"><h2 id="comment-title">職人コメント</h2></div>
        ${proComment(caseItem)}
      </div>
    </section>

    <section class="section-block band" aria-labelledby="points-title">
      <div class="container">
        <div class="section-heading"><h2 id="points-title">今回のポイント</h2></div>
        ${pointsSpeech(caseItem)}
        ${cautionSpeech(caseItem)}
      </div>
    </section>

    <section class="section-block contact-section" aria-labelledby="case-contact-title">
      <div class="container">
        <div class="section-heading center"><h2 id="case-contact-title">お問い合わせ</h2><p>写真を送るだけで、工事内容の確認がスムーズです。</p></div>
        <div class="case-detail-cta"><a class="cta-button cta-phone" href="#contact">電話する</a><a class="cta-button cta-line" href="../aircon-exchange-wireframe.html#contact">LINE相談する</a></div>
      </div>
    </section>
  </main>
  <div class="mobile-sticky-cta"><a href="#contact">電話する</a><a href="../aircon-exchange-wireframe.html#contact">LINE相談する</a></div>
</body>
</html>
`;
}

function templateCase() {
  return {
    slug: "sample-case-slug",
    category: "エアコン交換",
    title: "松戸市でエアコン交換工事を行いました",
    area: "松戸市",
    maker: "ダイキン Eシリーズ",
    work: "エアコン交換工事",
    model: "ダイキン Eシリーズ",
    time: "約2時間",
    issue: "既存エアコンの効きが弱く、夏前に安心して使える状態にしたいというご相談でした。",
    method: "既存エアコンを撤去し、配管ルートと室外機位置を確認してから新しいエアコンを取り付けました。",
    after: "試運転で冷房、排水、室外機の動作を確認し、施工完了後の仕上がりも整えました。",
    benefit: "急な故障への不安が減り、毎日使う部屋を快適にしやすくなりました。",
  };
}

function main() {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  let html = fs.readFileSync(mainPath, "utf8");
  const start = html.indexOf('    <section id="works"');
  const endMarker = '    <section class="section-block" aria-labelledby="useful-title">';
  const end = html.indexOf(endMarker, start);
  if (start === -1 || end === -1) throw new Error("Could not locate works section");

  html = html.slice(0, start) + worksSection(data) + "\n\n" + html.slice(end);
  fs.writeFileSync(mainPath, html, "utf8");

  for (const caseItem of data.cases) {
    fs.writeFileSync(path.join(casesDir, `${caseItem.slug}.html`), detailPage(caseItem), "utf8");
  }

  fs.writeFileSync(path.join(casesDir, "_template.html"), detailPage(templateCase(), true), "utf8");

  console.log(JSON.stringify({
    updatedCases: data.cases.length,
    template: "cases/_template.html",
    imageRootPreserved: "img/cases/",
  }, null, 2));
}

main();
