import type { Faq } from "@/data/faqs";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="grid gap-3">
      {items.map((faq, index) => (
        <details
          key={faq.question}
          className="rounded-card border border-forest-100 bg-white p-5 shadow-soft"
          open={index === 0}
        >
          <summary className="cursor-pointer text-base font-bold text-ink-900">{faq.question}</summary>
          <p className="mt-4 leading-8 text-ink-500">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
