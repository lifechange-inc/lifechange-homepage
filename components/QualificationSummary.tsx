import { featuredQualifications, qualificationGroups } from "@/data/qualifications";

type QualificationSummaryProps = {
  variant?: "summary" | "full";
};

const focusAreas = [
  ["電気", "エアコン・コンセント・分電盤まわり"],
  ["ガス", "給湯器・コンロ・ガス機器まわり"],
  ["水道", "水栓・トイレ・排水まわり"]
] as const;

export function QualificationSummary({ variant = "summary" }: QualificationSummaryProps) {
  if (variant === "summary") {
    return (
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
          <p className="text-sm font-black text-forest-700">安心して任せられる理由</p>
          <h3 className="mt-3 text-2xl font-black leading-tight text-ink-900">
            電気・ガス・水道まで、幅広く確認できます。
          </h3>
          <p className="mt-4 text-sm font-medium leading-7 text-ink-500">
            生活設備は本体交換だけでなく、電気配線、ガス接続、水まわりの状態確認が大切です。
            複数分野の資格と現場経験をもとに、無理のない施工方法をご案内します。
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {focusAreas.map(([label, text]) => (
              <div key={label} className="rounded-card bg-forest-50 p-4">
                <p className="text-lg font-black text-forest-800">{label}</p>
                <p className="mt-1 text-xs font-bold leading-5 text-ink-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-card border border-forest-100 bg-white p-6 shadow-soft">
          <p className="text-sm font-black text-forest-700">主要資格・許可</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {featuredQualifications.map((qualification) => (
              <span
                key={qualification}
                className="rounded-card border border-forest-100 bg-forest-50 px-3 py-2 text-sm font-bold leading-6 text-ink-800"
              >
                {qualification}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {qualificationGroups.map((group) => (
        <article key={group.category} className="rounded-card border border-forest-100 bg-white p-5 shadow-soft">
          <p className="text-lg font-black text-forest-800">{group.category}</p>
          <p className="mt-2 text-sm font-medium leading-7 text-ink-500">{group.lead}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-card border border-forest-100 bg-forest-50 px-3 py-1.5 text-xs font-bold leading-5 text-ink-700"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
