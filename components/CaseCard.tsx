import Image from "next/image";
import Link from "next/link";
import type { WorkCase } from "@/data/cases";
import { getCaseFallbackImage } from "@/data/visuals";

export function CaseCard({ workCase }: { workCase: WorkCase }) {
  const image = workCase.images[0] || getCaseFallbackImage(workCase.category);
  const imageClass = image.includes("/catalog/")
    ? "aspect-[4/3] w-full bg-white object-contain p-4"
    : "aspect-[4/3] w-full bg-forest-50 object-cover";

  return (
    <article className="overflow-hidden rounded-card border border-forest-100 bg-white shadow-soft">
      <Image
        src={image}
        width={720}
        height={480}
        alt={`${workCase.title}の施工写真`}
        className={imageClass}
      />
      <div className="p-5">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-card bg-forest-50 px-3 py-1 text-xs font-bold text-forest-800">
          {workCase.category}
        </span>
        <span className="rounded-card bg-skyglass px-3 py-1 text-xs font-bold text-ink-700">{workCase.area}</span>
        <span className="rounded-card bg-clay px-3 py-1 text-xs font-bold text-ink-700">{workCase.maker}</span>
      </div>
      <h3 className="text-lg font-bold leading-7 text-ink-900">{workCase.title}</h3>
      <dl className="mt-4 grid gap-3 text-sm leading-7">
        <div>
          <dt className="font-bold text-forest-800">施工前の課題</dt>
          <dd className="text-ink-500">{workCase.issue}</dd>
        </div>
        <div>
          <dt className="font-bold text-forest-800">施工後</dt>
          <dd className="text-ink-500">{workCase.after}</dd>
        </div>
      </dl>
      <Link
        href={`/cases#${workCase.slug}`}
        className="mt-5 inline-flex rounded-card border border-forest-200 px-4 py-2 text-sm font-bold text-forest-800 hover:bg-forest-50"
      >
        詳細を見る
      </Link>
      </div>
    </article>
  );
}
