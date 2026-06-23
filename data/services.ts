export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  keyword: string;
  description: string;
  lead: string;
  priceFrom: string;
  heroImage?: string;
  problems: string[];
  strengths: string[];
  process: string[];
  relatedCategories: string[];
};

export const services: Service[] = [
  {
    slug: "aircon-exchange",
    title: "エアコン交換",
    shortTitle: "交換",
    keyword: "松戸市 エアコン交換",
    description:
      "松戸市のエアコン交換、松戸 エアコン交換の相談に、既存エアコンの取り外しから新しい機種の設置、試運転までまとめて対応します。",
    lead:
      "効きが悪い、年数が経っている、買い替え先の工事だけ頼みたい。年間4,000台以上の施工経験をもとに、写真確認から必要工事を整理します。",
    priceFrom: "55,000円〜",
    heroImage: "/images/services/aircon-cleaning-work.svg",
    problems: [
      "既存エアコンの効きが弱くなってきた",
      "追加料金がどれくらい出るか心配",
      "通販や量販店で購入した本体を取り付けたい"
    ],
    strengths: [
      "配管・室外機・コンセント位置を事前確認",
      "追加工事は作業前に説明",
      "見た目と排水を意識した丁寧な仕上げ"
    ],
    process: ["写真送付", "概算確認", "日程調整", "取り外し・取付", "試運転・説明"],
    relatedCategories: ["エアコン交換", "エアコン取付", "水漏れ"]
  },
  {
    slug: "aircon-install",
    title: "エアコン取付",
    shortTitle: "取付",
    keyword: "松戸市 エアコン取付",
    description:
      "新築・引越し・ネット購入品など、エアコン本体の取付工事のみでも相談できます。",
    lead:
      "穴あけ、配管ルート、高所作業、室外機置き場など、現場ごとの差を確認しながら安全に施工します。",
    priceFrom: "12,000円から",
    heroImage: "/images/services/commercial-aircon-work.svg",
    problems: [
      "エアコン本体はあるので工事だけ頼みたい",
      "2階やベランダなしの部屋に設置したい",
      "新築なので穴あけ位置を慎重に決めたい"
    ],
    strengths: [
      "建物構造を確認して穴あけ位置を判断",
      "室内外の見た目に配慮",
      "試運転と排水確認まで実施"
    ],
    process: ["設置条件確認", "必要工事の説明", "穴あけ・配管", "本体設置", "排水確認"],
    relatedCategories: ["エアコン取付", "高所作業", "特殊工事"]
  },
  {
    slug: "aircon-relocation",
    title: "エアコン移設工事",
    shortTitle: "移設",
    keyword: "エアコン移設 松戸・柏・市川",
    description:
      "エアコン移設費用、配管再利用、エアコン引っ越し後の注意点、ガス漏れ対策まで確認し、松戸市・柏市・市川市周辺で移設工事を相談できます。",
    lead:
      "同一フロアの移設、階をまたぐ移設、引っ越し業者が取り外したエアコンの再取付まで、写真確認で必要工事を整理します。",
    priceFrom: "25,000円から",
    heroImage: "/images/services/aircon-work.svg",
    problems: [
      "引っ越し先でエアコンを再利用したい",
      "配管を再利用できるか判断したい",
      "ガス漏れや仕上がりの不安を確認したい"
    ],
    strengths: [
      "配管・電線・ナットの新品交換を推奨",
      "見た目と必要な長さを考えた配管処理",
      "施工後のガス漏れ確認まで実施"
    ],
    process: ["写真確認", "移設条件確認", "概算案内", "取り外し・取付", "試運転確認"],
    relatedCategories: ["エアコン取付", "エアコン交換", "特殊工事"]
  },
  {
    slug: "aircon-concealed-piping",
    title: "エアコン隠蔽配管工事",
    shortTitle: "隠蔽配管",
    keyword: "エアコン隠蔽配管 松戸・柏・市川",
    description:
      "隠蔽配管エアコン工事の費用、注意点、追加工事、メーカー別の確認ポイントを写真確認から分かりやすくご案内します。",
    lead:
      "マンションやハウスメーカー住宅の隠蔽配管工事は、既存電線・配管状態・型式条件を確認してから安全性を優先して施工します。",
    priceFrom: "20,000円から",
    heroImage: "/images/services/brace-hole-1.webp",
    problems: [
      "隠蔽配管で他社に断られた",
      "既存配管や電線を再利用できるか分からない",
      "追加工事と費用の目安を先に知りたい"
    ],
    strengths: [
      "型式ごとの施工条件を確認",
      "既存電線と配管状態を確認",
      "無理な接続を避けて安全性を優先"
    ],
    process: ["写真確認", "型式確認", "配管・電線確認", "金額説明", "取付・試運転"],
    relatedCategories: ["エアコン取付", "特殊工事"]
  },
  {
    slug: "aircon-cleaning",
    title: "エアコンクリーニング",
    shortTitle: "洗浄",
    keyword: "松戸市 エアコンクリーニング",
    description:
      "カビ臭、風量低下、ペット家庭の汚れなど、使用環境に合わせてエアコン洗浄を行います。",
    lead:
      "養生から洗浄、運転確認まで丁寧に行い、交換すべきか洗浄で改善できるかの相談にも対応します。",
    priceFrom: "要相談",
    heroImage: "/images/services/aircon-work.svg",
    problems: [
      "エアコンからカビ臭い風が出る",
      "ペットやホコリで汚れが気になる",
      "交換かクリーニングか迷っている"
    ],
    strengths: [
      "周辺を養生して作業",
      "洗浄前後の状態を確認",
      "日常のお手入れ方法も案内"
    ],
    process: ["状態確認", "養生", "分解・洗浄", "乾燥・復旧", "運転確認"],
    relatedCategories: ["エアコンクリーニング"]
  },
  {
    slug: "commercial-aircon",
    title: "業務用エアコン",
    shortTitle: "業務用",
    keyword: "柏市 業務用エアコン",
    description:
      "店舗・事務所・施設の業務用エアコン取付、交換、点検、洗浄に対応します。",
    lead:
      "天吊形、パッケージエアコン、店舗の入れ替えなど、営業への影響を抑えながら段取りします。",
    priceFrom: "現地確認後",
    heroImage: "/images/services/aircon-work.svg",
    problems: [
      "店舗や事務所の冷暖房が効きにくい",
      "休日や営業時間外に相談したい",
      "複数台の入れ替えをまとめたい"
    ],
    strengths: [
      "現地条件に合わせた段取り",
      "安全面と作業導線を確認",
      "法人・店舗案件の相談可"
    ],
    process: ["現地確認", "工事範囲整理", "見積案内", "施工", "動作確認"],
    relatedCategories: ["業務用エアコン", "エアコンクリーニング"]
  },
  {
    slug: "water-heater",
    title: "給湯器交換",
    shortTitle: "給湯器",
    keyword: "松戸市 給湯器交換",
    description:
      "松戸市の給湯器交換、柏市の給湯器交換など、給湯器の故障、年数経過、マンション設備の交換に対応します。",
    lead:
      "急な故障時も、型番・設置場所・配管状況を確認し、交換可否と段取りを現場目線で分かりやすく案内します。",
    priceFrom: "138,000円〜",
    heroImage: "/images/services/ecocute-work.svg",
    problems: [
      "お湯が出ない・温度が安定しない",
      "給湯器の年数が経って交換を考えている",
      "マンションの設置条件が合うか不安"
    ],
    strengths: [
      "型番と設置状況を写真で確認",
      "既存配管・排気条件を確認",
      "生活への影響を抑える段取り"
    ],
    process: ["型番確認", "設置状況確認", "見積案内", "交換工事", "動作確認"],
    relatedCategories: ["給湯器"]
  },
  {
    slug: "ecocute",
    title: "エコキュート交換",
    shortTitle: "エコキュート",
    keyword: "松戸市 エコキュート交換",
    description:
      "エコキュートの年数経過、故障、給湯不良など、設置状況を確認して交換相談に対応します。",
    lead:
      "本体まわり、配管、搬入経路、電気容量を確認し、生活への影響を抑えた交換段取りをご案内します。",
    priceFrom: "現地確認後",
    heroImage: "/images/services/water-heater-work.svg",
    problems: [
      "お湯の量や温度が安定しない",
      "本体の年数が経って交換時期か知りたい",
      "搬入経路や設置スペースが不安"
    ],
    strengths: [
      "電気・水道まわりをまとめて確認",
      "既存配管と設置スペースを確認",
      "交換後の試運転まで対応"
    ],
    process: ["型番確認", "設置場所確認", "搬入経路確認", "交換工事", "試運転"],
    relatedCategories: ["給湯器"]
  },
  {
    slug: "gas-stove",
    title: "ガスコンロ交換",
    shortTitle: "ガスコンロ",
    keyword: "松戸市 ガスコンロ交換",
    description:
      "松戸市のガスコンロ交換に対応。ビルトインガスコンロの交換、年数経過や点火不良、機種選びの相談に対応します。",
    lead:
      "既存機種の寸法、ガス種、キッチンまわりの状態を確認し、安全面と使い勝手に配慮して交換します。",
    priceFrom: "78,000円〜（最安機種は約50,000円〜）",
    heroImage: "/images/services/catalog/rinnai-lisse.png",
    problems: [
      "点火しにくい・火力が安定しない",
      "古いコンロを安全に交換したい",
      "キッチンに合う機種を確認したい"
    ],
    strengths: [
      "ガス種と設置寸法を確認",
      "既存機器の撤去から交換まで対応",
      "使用前の安全確認を実施"
    ],
    process: ["既存機種確認", "設置寸法確認", "機種確認", "交換工事", "点火確認"],
    relatedCategories: ["レンジフード"]
  },
  {
    slug: "ih",
    title: "IH交換",
    shortTitle: "IH",
    keyword: "松戸市 IH交換",
    description:
      "松戸市のIH交換に対応。既存IHクッキングヒーターの交換、ガスコンロからIHへの相談、電源確認までまとめて確認します。",
    lead:
      "既存機種の型番、天板幅、電源容量、キッチンまわりの状態を写真で確認し、安全面と使い勝手に配慮してご案内します。",
    priceFrom: "88,000円〜",
    heroImage: "/images/services/ih-work.svg",
    problems: [
      "古いIHの火力や操作部が不安定",
      "キッチンに合う機種を確認したい",
      "電源容量やコンセント条件が分からない"
    ],
    strengths: [
      "既存機種と天板幅を確認",
      "電源容量と配線条件を確認",
      "交換後の動作確認まで対応"
    ],
    process: ["既存機種確認", "寸法確認", "電源確認", "見積案内", "交換・動作確認"],
    relatedCategories: ["レンジフード", "電気工事"]
  },
  {
    slug: "range-hood",
    title: "レンジフード交換",
    shortTitle: "レンジフード",
    keyword: "松戸市 レンジフード交換",
    description:
      "松戸市のレンジフード交換に対応。掃除しにくいレンジフード、異音、吸い込み不良、老朽化による交換を相談できます。",
    lead:
      "既存フードの幅、ダクト位置、キッチンまわりを確認し、見た目と排気性能を意識して交換します。",
    priceFrom: "98,000円〜",
    heroImage: "/images/services/catalog/rinnai-range-hood-tag.png",
    problems: [
      "吸い込みが弱い・音が大きい",
      "掃除しやすい機種へ替えたい",
      "マンションのダクト条件が不安"
    ],
    strengths: [
      "幅とダクト位置を事前確認",
      "既存設備の撤去から交換まで対応",
      "キッチンの見た目に配慮"
    ],
    process: ["寸法確認", "ダクト確認", "見積案内", "交換工事", "排気確認"],
    relatedCategories: ["レンジフード"]
  },
  {
    slug: "toilet",
    title: "トイレ交換",
    shortTitle: "トイレ",
    keyword: "松戸市 トイレ交換",
    description:
      "便器・温水洗浄便座の交換、水漏れや老朽化に伴うトイレ設備の相談に対応します。",
    lead:
      "排水芯、給水位置、床まわりを確認し、水道・電気まわりも含めて交換可否をご案内します。",
    priceFrom: "現地確認後",
    heroImage: "/images/services/toilet-work.svg",
    problems: [
      "水漏れや流れにくさが気になる",
      "古い便器を交換したい",
      "温水洗浄便座もまとめて相談したい"
    ],
    strengths: [
      "給排水条件を確認",
      "電源まわりもあわせて相談可",
      "生活設備として使いやすさを重視"
    ],
    process: ["現状確認", "給排水確認", "機種確認", "交換工事", "漏水確認"],
    relatedCategories: []
  },
  {
    slug: "faucet",
    title: "水栓交換",
    shortTitle: "水栓",
    keyword: "松戸市 水栓交換",
    description:
      "キッチン、洗面、浴室の水栓交換や水漏れ相談に対応します。",
    lead:
      "既存水栓の型番、取付穴、給水接続まわりを写真で確認し、交換可否と必要部材をご案内します。",
    priceFrom: "現地確認後",
    heroImage: "/images/services/faucet-work.svg",
    problems: [
      "蛇口から水漏れしている",
      "古い水栓を交換したい",
      "キッチンや洗面に合う水栓を確認したい"
    ],
    strengths: [
      "既存水栓と取付条件を確認",
      "水まわりの漏水リスクを確認",
      "写真確認から交換可否を案内"
    ],
    process: ["写真確認", "型番・寸法確認", "必要部材確認", "交換工事", "漏水確認"],
    relatedCategories: []
  },
  {
    slug: "electrical-work",
    title: "電気工事",
    shortTitle: "電気",
    keyword: "松戸市 電気工事",
    description:
      "エアコン専用回路、コンセント交換、設備交換に伴う電気まわりの相談に対応します。",
    lead:
      "エアコンや住宅設備の交換時に必要な電源確認、コンセント形状、電圧確認をまとめて相談できます。",
    priceFrom: "現地確認後",
    heroImage: "/images/services/electrical-work.svg",
    problems: [
      "エアコン用コンセントの形状が合わない",
      "専用回路が必要か確認したい",
      "設備交換と電気まわりをまとめたい"
    ],
    strengths: [
      "電源・電圧・コンセント形状を確認",
      "設備工事と一括対応",
      "安全面を優先して判断"
    ],
    process: ["状況確認", "電源確認", "必要工事説明", "施工", "通電確認"],
    relatedCategories: ["特殊工事"]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
