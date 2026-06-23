import Image from "next/image";
import type { VisualItem } from "@/data/visuals";

export function VisualGallery({ items }: { items: VisualItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article key={`${item.src}-${item.title}`} className="overflow-hidden rounded-card border border-forest-100 bg-white shadow-soft">
          <Image
            src={item.src}
            width={900}
            height={675}
            alt={item.alt}
            className={`aspect-[4/3] w-full bg-forest-50 ${item.fit === "contain" ? "object-contain p-4" : "object-cover"}`}
          />
          <div className="p-5">
            <h3 className="text-lg font-black leading-7 text-ink-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-ink-500">{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
