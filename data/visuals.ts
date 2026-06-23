export type VisualItem = {
  src: string;
  alt: string;
  title: string;
  text: string;
  fit?: "cover" | "contain";
};

export const visualAssets = {
  airconWork: "/images/services/aircon-work.svg",
  airconCleaningWork: "/images/services/aircon-cleaning-work.svg",
  commercialAirconWork: "/images/services/commercial-aircon-work.svg",
  waterHeaterWork: "/images/services/water-heater-work.svg",
  ecocuteWork: "/images/services/ecocute-work.svg",
  gasStoveWork: "/images/services/gas-stove-work.svg",
  ihWork: "/images/services/ih-work.svg",
  kitchenWork: "/images/services/kitchen-work.svg",
  rangeHoodWork: "/images/services/range-hood-work.svg",
  rangeHoodDuct: "/images/services/range-hood-duct.svg",
  rangeHoodFinish: "/images/services/range-hood-finish.svg",
  catalogPalomaPdN36s: "/images/services/catalog/paloma-pd-n36s.jpg",
  catalogPalomaRepla: "/images/services/catalog/paloma-repla.jpg",
  catalogPalomaBrillio: "/images/services/catalog/paloma-brillio.jpg",
  catalogPalomaFaceis: "/images/services/catalog/paloma-faceis.jpg",
  catalogRinnaiMytone: "/images/services/catalog/rinnai-mytone.png",
  catalogRinnaiLisse: "/images/services/catalog/rinnai-lisse.png",
  catalogRinnaiRangeHoodKey: "/images/services/catalog/rinnai-range-hood-key.jpg",
  catalogRinnaiRangeHoodTag: "/images/services/catalog/rinnai-range-hood-tag.png",
  catalogRinnaiRangeHoodLgr: "/images/services/catalog/rinnai-range-hood-lgr.png",
  toiletWork: "/images/services/toilet-work.svg",
  faucetWork: "/images/services/faucet-work.svg",
  electricalWork: "/images/services/electrical-work.svg",
  companyTeam: "/images/company/company-team.svg",
  priceCheck: "/images/services/price-check.svg",
  caseAfter: "/images/cases/case-after.svg",
  worker: "/images/company/worker-character.jpg",
  airconHeight: "/images/services/ac-height.webp",
  outlet: "/images/services/outlet-position.webp",
  safeWire: "/images/services/safe-wire-crimp.webp",
  holeCheck: "/images/services/brace-hole-1.webp",
  holeCaution: "/images/services/brace-hole-2.webp"
} as const;

const airconVisuals: VisualItem[] = [
  {
    src: visualAssets.airconWork,
    alt: "エアコン本体と室外機の施工イメージ",
    title: "本体・室外機まで確認",
    text: "室内機、室外機、配管ルートを見て、必要工事を整理します。"
  },
  {
    src: visualAssets.airconHeight,
    alt: "エアコン設置位置を確認している写真",
    title: "取付位置を確認",
    text: "高さ、勾配、見た目、使いやすさを考えて設置します。"
  },
  {
    src: visualAssets.safeWire,
    alt: "電線接続を確認している写真",
    title: "電気まわりも確認",
    text: "コンセント、電圧、電線状態を確認して安全に進めます。"
  }
];

const gasStoveVisuals: VisualItem[] = [
  {
    src: visualAssets.catalogRinnaiLisse,
    alt: "リンナイ リッセのビルトインガスコンロ写真",
    title: "実機写真で仕上がりを確認",
    text: "天板色、操作部、グリルまわりの見た目を写真で比較できます。",
    fit: "contain"
  },
  {
    src: visualAssets.catalogPalomaBrillio,
    alt: "パロマ ブリリオのビルトインガスコンロ写真",
    title: "機能と価格のバランスを比較",
    text: "両面焼きグリルやオートグリルなど、使い方に合わせて選べます。",
    fit: "cover"
  },
  {
    src: visualAssets.catalogPalomaPdN36s,
    alt: "パロマ PD-N36Sのビルトインガスコンロ写真",
    title: "価格を抑えた機種も確認",
    text: "必要な機能を絞り、本体価格を抑えたい場合の候補も案内します。",
    fit: "contain"
  }
];

const ihVisuals: VisualItem[] = [
  {
    src: visualAssets.ihWork,
    alt: "IHクッキングヒーター交換の施工イメージ",
    title: "IH本体と電源条件を確認",
    text: "天板幅、型番、200V電源、分電盤まわりを写真で確認します。"
  },
  {
    src: visualAssets.electricalWork,
    alt: "IH交換に必要な電気確認のイメージ",
    title: "電気容量を確認",
    text: "安全に使える容量か、必要な電気工事がないか確認します。"
  },
  {
    src: visualAssets.priceCheck,
    alt: "IH交換の料金確認イメージ",
    title: "必要工事を整理",
    text: "交換だけで済むか、電源工事が必要かを事前に整理します。"
  }
];

const rangeHoodVisuals: VisualItem[] = [
  {
    src: visualAssets.catalogRinnaiRangeHoodTag,
    alt: "リンナイ TAGシリーズのレンジフード写真",
    title: "実機写真で形状を確認",
    text: "スリム型の見た目やキッチンとの収まりを確認できます。",
    fit: "contain"
  },
  {
    src: visualAssets.catalogRinnaiRangeHoodLgr,
    alt: "リンナイ LGRシリーズのレンジフード写真",
    title: "シリーズごとの違いを比較",
    text: "機能、掃除のしやすさ、価格帯を比較して選べます。",
    fit: "contain"
  },
  {
    src: visualAssets.catalogRinnaiRangeHoodKey,
    alt: "リンナイ レンジフードのカタログ写真",
    title: "幅と幕板の確認が大切",
    text: "既存幅、ダクト位置、幕板の有無で必要部材が変わります。",
    fit: "cover"
  }
];

export const serviceVisuals: Record<string, VisualItem[]> = {
  "aircon-exchange": airconVisuals,
  "aircon-install": airconVisuals,
  "aircon-relocation": airconVisuals,
  "aircon-cleaning": [
    {
      src: visualAssets.airconCleaningWork,
      alt: "エアコンクリーニングの施工イメージ",
      title: "洗浄前に周辺を養生",
      text: "壁、床、家具まわりを保護してから作業します。"
    },
    {
      src: visualAssets.airconWork,
      alt: "エアコン本体確認のイメージ",
      title: "本体の状態を確認",
      text: "汚れ、カビ、運転状態を見て作業内容を整理します。"
    },
    {
      src: visualAssets.priceCheck,
      alt: "エアコンクリーニング料金確認のイメージ",
      title: "機種に合わせて案内",
      text: "お掃除機能付きなど、機種により料金が変わる場合があります。"
    }
  ],
  "aircon-concealed-piping": [
    {
      src: visualAssets.holeCheck,
      alt: "隠蔽配管の配管穴確認写真",
      title: "配管出口を確認",
      text: "配管、電線、穴まわりを見て施工可否を判断します。"
    },
    {
      src: visualAssets.safeWire,
      alt: "電線接続確認の写真",
      title: "電線サイズを確認",
      text: "1.6mm、2.0mmなど型式ごとの条件を確認します。"
    },
    {
      src: visualAssets.airconWork,
      alt: "エアコン隠蔽配管工事の施工イメージ",
      title: "無理な接続をしない",
      text: "安全性と将来のトラブル防止を優先します。"
    }
  ],
  "commercial-aircon": [
    {
      src: visualAssets.commercialAirconWork,
      alt: "業務用エアコン施工のイメージ",
      title: "店舗・事務所の天井機器を確認",
      text: "作業導線と営業への影響を確認して段取りします。"
    },
    {
      src: visualAssets.electricalWork,
      alt: "業務用エアコンの電気確認イメージ",
      title: "電源条件を確認",
      text: "容量、配線、作業範囲を確認して安全に進めます。"
    },
    {
      src: visualAssets.priceCheck,
      alt: "業務用エアコン見積りのイメージ",
      title: "複数台も相談",
      text: "法人、店舗、施設の入れ替えも相談できます。"
    }
  ],
  "water-heater": [
    {
      src: visualAssets.waterHeaterWork,
      alt: "給湯器交換の施工イメージ",
      title: "本体・配管を確認",
      text: "型番、号数、配管、排気方向を写真で確認します。"
    },
    {
      src: visualAssets.worker,
      alt: "設備工事スタッフのイメージ",
      title: "生活への影響を抑える",
      text: "お湯が使えない時間を短くできるよう段取りします。"
    },
    {
      src: visualAssets.priceCheck,
      alt: "給湯器交換の料金確認イメージ",
      title: "部材の有無を説明",
      text: "リモコン、配管カバー、排気部材の有無を確認します。"
    }
  ],
  ecocute: [
    {
      src: visualAssets.ecocuteWork,
      alt: "エコキュート交換の施工イメージ",
      title: "タンクとヒートポンプを確認",
      text: "本体、配管、排水、搬入経路を確認します。"
    },
    {
      src: visualAssets.electricalWork,
      alt: "エコキュート電気工事の確認イメージ",
      title: "電気容量を確認",
      text: "分電盤、幹線、200V条件を確認して判断します。"
    },
    {
      src: visualAssets.priceCheck,
      alt: "エコキュート料金確認のイメージ",
      title: "搬入経路も確認",
      text: "設置場所と搬入経路で必要工事が変わります。"
    }
  ],
  "gas-stove": gasStoveVisuals,
  ih: ihVisuals,
  "range-hood": rangeHoodVisuals,
  toilet: [
    {
      src: visualAssets.toiletWork,
      alt: "トイレ交換の施工イメージ",
      title: "便器と給排水を確認",
      text: "排水芯、給水位置、床まわりを確認して進めます。"
    },
    {
      src: visualAssets.priceCheck,
      alt: "トイレ交換料金確認のイメージ",
      title: "必要部材を整理",
      text: "便器、便座、給排水条件を写真で確認します。"
    },
    {
      src: visualAssets.worker,
      alt: "設備工事スタッフのイメージ",
      title: "生活設備を丁寧に交換",
      text: "毎日使う設備だからこそ清潔に作業します。"
    }
  ],
  faucet: [
    {
      src: visualAssets.faucetWork,
      alt: "水栓交換の施工イメージ",
      title: "水栓と取付穴を確認",
      text: "既存水栓、取付穴、給水接続部を確認します。"
    },
    {
      src: visualAssets.priceCheck,
      alt: "水栓交換料金確認のイメージ",
      title: "写真で交換可否を確認",
      text: "型番や設置条件を見て必要部材を整理します。"
    },
    {
      src: visualAssets.worker,
      alt: "設備工事スタッフのイメージ",
      title: "水まわりを清潔に施工",
      text: "漏水確認と使い勝手を大切にしています。"
    }
  ],
  "electrical-work": [
    {
      src: visualAssets.electricalWork,
      alt: "電気工事の施工イメージ",
      title: "分電盤・電源を確認",
      text: "電圧、容量、コンセント形状を確認します。"
    },
    {
      src: visualAssets.safeWire,
      alt: "電線確認の写真",
      title: "安全性を優先",
      text: "危険な接続や無理な施工は行いません。"
    },
    {
      src: visualAssets.priceCheck,
      alt: "電気工事料金確認のイメージ",
      title: "必要工事を整理",
      text: "専用回路や電圧切替は職人確認で進めます。"
    }
  ]
};

export function getServiceVisuals(slug: string) {
  return serviceVisuals[slug] ?? airconVisuals;
}

export function getCaseFallbackImage(category: string) {
  if (category.includes("給湯器")) return visualAssets.waterHeaterWork;
  if (category.includes("エコキュート")) return visualAssets.ecocuteWork;
  if (category.includes("レンジフード")) return visualAssets.catalogRinnaiRangeHoodKey;
  if (category.includes("業務用")) return visualAssets.commercialAirconWork;
  if (category.includes("電気") || category.includes("分電盤")) return visualAssets.electricalWork;
  if (category.includes("IH")) return visualAssets.ihWork;
  if (category.includes("ガス") || category.includes("コンロ")) return visualAssets.catalogRinnaiLisse;
  if (category.includes("トイレ")) return visualAssets.toiletWork;
  if (category.includes("水栓")) return visualAssets.faucetWork;
  if (category.includes("クリーニング")) return visualAssets.airconCleaningWork;
  return visualAssets.caseAfter;
}
