export const pendingValue = "確認待ち";

function confirmedEnv(value: string | undefined) {
  if (!value || value === pendingValue) {
    return "";
  }

  return value;
}

export const businessLines = [
  "エアコン工事",
  "業務用エアコン工事",
  "給湯器交換",
  "エコキュート交換",
  "ガスコンロ交換",
  "IH交換",
  "レンジフード交換",
  "トイレ交換",
  "水栓交換",
  "電気工事"
] as const;

export const siteConfig = {
  companyName: "合同会社ライフチェンジ",
  brandName: "ライフチェンジ",
  siteName: "合同会社ライフチェンジ",
  description:
    "千葉県松戸市を拠点に、エアコン、給湯器、ガスコンロ、レンジフード、トイレ、水栓などの交換工事に対応する地域密着の設備工事会社です。",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phone: process.env.NEXT_PUBLIC_PHONE || "050-5536-8619",
  lineUrl: confirmedEnv(process.env.NEXT_PUBLIC_LINE_URL),
  email: process.env.CONTACT_TO_EMAIL || pendingValue,
  address: "〒270-2224 千葉県松戸市大橋1108番地4",
  representative: "徳永弘之",
  businessHours: "9:00〜17:00",
  closedDays: "日曜日",
  businessLines,
  serviceArea: [
    "松戸市",
    "柏市",
    "市川市",
    "流山市",
    "鎌ヶ谷市",
    "船橋市",
    "浦安市",
    "葛飾区",
    "江戸川区"
  ],
  proof: [
    { label: "年間施工", value: "4,000台以上" },
    { label: "現場経験", value: "10年以上" },
    { label: "口コミ", value: "Google★5.0・95件" },
    { label: "対応範囲", value: "電気・ガス・水道" }
  ]
} as const;

export const ctaLabels = {
  phone: "電話相談する",
  line: "LINEで写真見積り",
  form: "フォームで相談する"
} as const;
