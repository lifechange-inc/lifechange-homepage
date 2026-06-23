export type PriceRow = {
  item: string;
  detail: string;
  price: string;
  note: string;
};

export const basePrices: PriceRow[] = [
  {
    item: "エアコン取付工事",
    detail: "2.2kW〜4.0kW",
    price: "12,000円〜",
    note: "標準取付工事"
  },
  {
    item: "エアコン取付工事",
    detail: "4.0kW〜5.6kW",
    price: "15,000円〜",
    note: "中能力機の取付目安"
  },
  {
    item: "エアコン取付工事",
    detail: "6.3kW〜9.0kW",
    price: "20,000円〜",
    note: "大型機の取付目安"
  },
  {
    item: "配管延長",
    detail: "5.6kWまで",
    price: "1m 2,500円〜",
    note: "距離に応じて追加"
  },
  {
    item: "配管延長",
    detail: "6.3kW以上",
    price: "1m 3,000円〜",
    note: "大型機の配管延長"
  },
  {
    item: "エアコン取り外し処分",
    detail: "既存エアコンの取り外し・処分",
    price: "6,000円〜",
    note: "交換時に発生しやすい項目"
  },
  {
    item: "屋外化粧カバー",
    detail: "配管カバー取付（2mまで）",
    price: "7,000円から",
    note: "既存料金を使用"
  },
  {
    item: "屋外化粧カバー 曲がり",
    detail: "曲がり部材の追加",
    price: "1箇所 2,000円〜",
    note: "設置経路により追加"
  },
  {
    item: "屋外化粧カバー 延長",
    detail: "2mを超える延長",
    price: "1m 3,500円〜",
    note: "長さに応じて追加"
  },
  {
    item: "室内化粧カバー",
    detail: "室内化粧カバー取付（1mまで）",
    price: "10,000円〜",
    note: "室内の見た目を整える工事"
  },
  {
    item: "室内化粧カバー 曲がり",
    detail: "曲がり部材の追加",
    price: "1箇所 2,000円〜",
    note: "室内の配管経路により追加"
  },
  {
    item: "室内化粧カバー 延長",
    detail: "1mを超える延長",
    price: "1m 3,500円〜",
    note: "長さに応じて追加"
  },
  {
    item: "穴あけ工事",
    detail: "木造・サイディングなど",
    price: "3,000円〜",
    note: "壁材・建物条件で確認"
  },
  {
    item: "穴あけ工事",
    detail: "タイル",
    price: "10,000円〜",
    note: "割れ防止のため慎重に確認"
  },
  {
    item: "穴あけ工事",
    detail: "コンクリート",
    price: "35,000円〜",
    note: "建物条件により確認"
  },
  {
    item: "エアカットバルブ",
    detail: "ドレンホースのポコポコ音対策",
    price: "2,000円",
    note: "必要な場合のみ提案"
  },
  {
    item: "ドレン断熱",
    detail: "排水まわりの結露対策",
    price: "1m 2,000円〜",
    note: "設置環境により提案"
  },
  {
    item: "スライダー作業",
    detail: "はしごを使用する作業",
    price: "5,000円〜",
    note: "安全に作業できる環境か確認します"
  },
  {
    item: "防振ゴム",
    detail: "室外機の振動対策",
    price: "2,000円",
    note: "音や振動が気になる場合"
  }
];

export const extraPrices: PriceRow[] = [
  {
    item: "配管延長",
    detail: "5.6kWまで",
    price: "1m 2,500円〜",
    note: "現地で必要な長さを確認します"
  },
  {
    item: "配管延長",
    detail: "6.3kW以上",
    price: "1m 3,000円〜",
    note: "大型機の配管延長です"
  },
  {
    item: "屋外化粧カバー",
    detail: "配管カバー取付（2mまで）",
    price: "7,000円から",
    note: "既存料金を使用"
  },
  {
    item: "屋外化粧カバー 曲がり",
    detail: "曲がり部材の追加",
    price: "1箇所 2,000円〜",
    note: "設置経路により追加"
  },
  {
    item: "屋外化粧カバー 延長",
    detail: "2mを超える延長",
    price: "1m 3,500円〜",
    note: "長さに応じて追加"
  },
  {
    item: "室内化粧カバー",
    detail: "室内化粧カバー取付（1mまで）",
    price: "10,000円〜",
    note: "室内の見た目を整える工事"
  },
  {
    item: "室内化粧カバー 曲がり",
    detail: "曲がり部材の追加",
    price: "1箇所 2,000円〜",
    note: "室内の配管経路により追加"
  },
  {
    item: "室内化粧カバー 延長",
    detail: "1mを超える延長",
    price: "1m 3,500円〜",
    note: "長さに応じて追加"
  },
  {
    item: "コンセント交換",
    detail: "電圧や形状が新しいエアコンに合わない場合",
    price: "現地確認後に案内",
    note: "安全確認のうえで提案します"
  },
  {
    item: "高所作業",
    detail: "室外機が屋根置き・壁面・高所にある場合",
    price: "現地確認後に案内",
    note: "作業環境を確認して判断します"
  },
  {
    item: "穴あけ工事",
    detail: "木造・サイディングなど",
    price: "3,000円〜",
    note: "壁材や建物条件により確認します"
  },
  {
    item: "穴あけ工事",
    detail: "タイル",
    price: "10,000円〜",
    note: "割れ防止のため慎重に確認します"
  },
  {
    item: "穴あけ工事",
    detail: "コンクリート",
    price: "35,000円〜",
    note: "建物条件により確認します"
  },
  {
    item: "ドレン断熱",
    detail: "排水まわりの結露対策",
    price: "1m 2,000円〜",
    note: "設置環境により提案します"
  },
  {
    item: "スライダー作業",
    detail: "はしごを使用する作業",
    price: "5,000円〜",
    note: "安全に作業できる環境か確認します"
  },
  {
    item: "エアカットバルブ",
    detail: "ドレンホースのポコポコ音対策",
    price: "2,000円",
    note: "必要な場合のみ提案"
  }
];

export const servicePriceGuides: Record<string, PriceRow[]> = {
  "aircon-exchange": [
    {
      item: "エアコン交換",
      detail: "本体・標準交換工事の目安",
      price: "55,000円〜",
      note: "機種、能力、設置状況により変動します"
    }
  ],
  "water-heater": [
    {
      item: "給湯器交換",
      detail: "本体・標準交換工事の目安",
      price: "138,000円〜",
      note: "号数、追いだき有無、排気条件で変動します"
    }
  ],
  "gas-stove": [
    {
      item: "ガスコンロ交換",
      detail: "本体・標準交換工事の目安",
      price: "78,000円〜",
      note: "最安機種は約50,000円〜。機能により変動します"
    }
  ],
  ih: [
    {
      item: "IH交換",
      detail: "本体・標準交換工事の目安",
      price: "88,000円〜",
      note: "天板幅、電源容量、配線条件で変動します"
    }
  ],
  "range-hood": [
    {
      item: "レンジフード交換",
      detail: "本体・標準交換工事の目安",
      price: "98,000円〜",
      note: "幅、ダクト位置、幕板の有無で変動します"
    }
  ]
};

export const gasStoveComparison = [
  {
    maker: "パロマ",
    model: "PD-N36S",
    price: "約50,000円",
    feature: "最安候補。片面焼きグリル",
    image: "/images/services/catalog/paloma-pd-n36s.jpg",
    imageAlt: "パロマ PD-N36Sのビルトインガスコンロ写真",
    sourceName: "パロマ公式カタログ"
  },
  {
    maker: "パロマ",
    model: "リプラ",
    price: "約82,000円",
    feature: "ヒートカットトップ・水なし両面焼き",
    image: "/images/services/catalog/paloma-repla.jpg",
    imageAlt: "パロマ リプラのビルトインガスコンロ写真",
    sourceName: "パロマ公式カタログ"
  },
  {
    maker: "パロマ",
    model: "ブリリオ",
    price: "約92,000円",
    feature: "オートグリル・ラ・クック対応",
    image: "/images/services/catalog/paloma-brillio.jpg",
    imageAlt: "パロマ ブリリオのビルトインガスコンロ写真",
    sourceName: "パロマ公式カタログ"
  },
  {
    maker: "パロマ",
    model: "フェイシス / FACEIS",
    price: "約132,000円",
    feature: "スモークカットで煙・ニオイ対策",
    image: "/images/services/catalog/paloma-faceis.jpg",
    imageAlt: "パロマ フェイシスのビルトインガスコンロ写真",
    sourceName: "パロマ公式カタログ"
  },
  {
    maker: "リンナイ",
    model: "マイトーン",
    price: "約105,000円〜",
    feature: "オートグリルと価格バランス",
    image: "/images/services/catalog/rinnai-mytone.png",
    imageAlt: "リンナイ マイトーンのビルトインガスコンロ写真",
    sourceName: "リンナイ公式カタログ"
  },
  {
    maker: "リンナイ",
    model: "リッセ",
    price: "約125,000円〜",
    feature: "イージークリーン・スモークオフ・安全性",
    image: "/images/services/catalog/rinnai-lisse.png",
    imageAlt: "リンナイ リッセのビルトインガスコンロ写真",
    sourceName: "リンナイ公式カタログ"
  }
] as const;

export const cleaningComparison = [
  {
    label: "本体価格",
    withFeature: "機能が多い分、高くなりやすい",
    simple: "本体価格を抑えやすい"
  },
  {
    label: "故障リスク",
    withFeature: "可動部や部品が多く、故障箇所が増えやすい",
    simple: "構造がシンプルで故障リスクを抑えやすい"
  },
  {
    label: "クリーニング費用",
    withFeature: "分解工程が増え、費用が高くなりやすい",
    simple: "クリーニング費用を抑えやすい"
  },
  {
    label: "ペット家庭との相性",
    withFeature: "毛やホコリは機能だけでは取り切れない場合がある",
    simple: "こまめな清掃と相性がよく、状態を確認しやすい"
  },
  {
    label: "メンテナンス性",
    withFeature: "内部構造が複雑で、点検や清掃に手間がかかりやすい",
    simple: "構造がシンプルで日常管理しやすい"
  },
  {
    label: "おすすめする人",
    withFeature: "上位機能や自動運転機能を重視したい方",
    simple: "費用・故障リスク・掃除のしやすさを重視したい方"
  }
] as const;
