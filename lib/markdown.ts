// 軽量Markdownレンダラー。ブログ本文で使う最小限の記法だけを対象にしています。
// 対応記法: 見出し(##, ###)、段落、箇条書き(-)、番号付きリスト(1.)、
//          太字(**)、リンク([text](url))、表(| ... |)。
// 外部ライブラリを増やさず、cases.ts と同じ「自前パース」の方針に合わせています。

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderInline(text: string) {
  let html = escapeHtml(text.trim());

  // リンク [text](/path) -> 内部リンクを想定
  html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, label, href) => {
    const safeHref = String(href).replace(/"/g, "");
    return `<a class="font-bold text-forest-700 underline underline-offset-4 hover:text-forest-800" href="${safeHref}">${label}</a>`;
  });

  // 太字 **text**
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-black text-ink-900">$1</strong>');

  return html;
}

function isTableSeparator(line: string) {
  return /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/.test(line);
}

function splitTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

export function renderMarkdown(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    // 見出し
    if (line.startsWith("### ")) {
      blocks.push(
        `<h3 class="mt-10 text-xl font-black text-ink-900 sm:text-2xl">${renderInline(line.slice(4))}</h3>`
      );
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(
        `<h2 class="mt-12 border-l-4 border-forest-600 pl-4 text-2xl font-black text-ink-900 sm:text-3xl">${renderInline(line.slice(3))}</h2>`
      );
      index += 1;
      continue;
    }

    // 表
    if (line.includes("|") && index + 1 < lines.length && isTableSeparator(lines[index + 1])) {
      const header = splitTableRow(line);
      index += 2; // ヘッダー行と区切り行を消費
      const rows: string[][] = [];
      while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }

      const thead = `<thead class="bg-forest-800 text-white"><tr>${header
        .map((cell) => `<th class="px-4 py-3 text-left font-bold">${renderInline(cell)}</th>`)
        .join("")}</tr></thead>`;
      const tbody = `<tbody>${rows
        .map(
          (row) =>
            `<tr class="border-b border-forest-100 last:border-0">${row
              .map((cell) => `<td class="px-4 py-3 align-top text-ink-700">${renderInline(cell)}</td>`)
              .join("")}</tr>`
        )
        .join("")}</tbody>`;
      blocks.push(
        `<div class="mt-6 overflow-x-auto rounded-card border border-forest-100 bg-white shadow-soft"><table class="w-full min-w-[640px] text-sm">${thead}${tbody}</table></div>`
      );
      continue;
    }

    // 番号付きリスト
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s/.test(lines[index])) {
        items.push(`<li class="leading-8">${renderInline(lines[index].replace(/^\d+\.\s/, ""))}</li>`);
        index += 1;
      }
      blocks.push(
        `<ol class="mt-5 ml-5 grid list-decimal gap-2 text-ink-700 marker:font-black marker:text-forest-700">${items.join("")}</ol>`
      );
      continue;
    }

    // 箇条書き
    if (/^[-*]\s/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s/.test(lines[index])) {
        items.push(`<li class="leading-8">${renderInline(lines[index].replace(/^[-*]\s/, ""))}</li>`);
        index += 1;
      }
      blocks.push(
        `<ul class="mt-5 ml-5 grid list-disc gap-2 text-ink-700 marker:text-forest-600">${items.join("")}</ul>`
      );
      continue;
    }

    // 段落（空行・特殊行までを連結）
    const paragraph: string[] = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].startsWith("#") &&
      !/^[-*]\s/.test(lines[index]) &&
      !/^\d+\.\s/.test(lines[index]) &&
      !(lines[index].includes("|") && index + 1 < lines.length && isTableSeparator(lines[index + 1]))
    ) {
      paragraph.push(lines[index]);
      index += 1;
    }
    blocks.push(
      `<p class="mt-5 leading-8 text-ink-700">${renderInline(paragraph.join(" "))}</p>`
    );
  }

  return blocks.join("\n");
}

// 本文から読了時間の目安（分）をざっくり算出します。
export function estimateReadingMinutes(markdown: string) {
  const characters = markdown.replace(/\s/g, "").length;
  return Math.max(1, Math.round(characters / 500));
}
