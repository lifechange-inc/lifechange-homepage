import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  children: ReactNode;
  id?: string;
  tone?: "white" | "soft" | "clay";
};

export function Section({ eyebrow, title, lead, children, id, tone = "white" }: SectionProps) {
  const toneClass = {
    white: "bg-white",
    soft: "bg-forest-50",
    clay: "bg-clay"
  }[tone];

  return (
    <section id={id} className={`${toneClass} border-b border-forest-100 py-14 sm:py-20`}>
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-9 min-w-0 max-w-[22rem] sm:max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 inline-flex rounded-card bg-white px-3 py-1 text-xs font-black text-forest-700 shadow-sm">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="break-words text-3xl font-black leading-tight tracking-normal text-ink-900 sm:text-4xl">{title}</h2>
          {lead ? <p className="mt-4 break-words text-base font-medium leading-8 text-ink-500 sm:text-lg">{lead}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
