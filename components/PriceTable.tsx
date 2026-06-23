import type { PriceRow } from "@/data/pricing";

export function PriceTable({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="overflow-x-auto rounded-card border border-forest-100 bg-white shadow-soft">
      <table className="min-w-[720px] w-full border-collapse text-left text-sm">
        <thead className="bg-forest-800 text-white">
          <tr>
            <th className="px-4 py-3 font-bold">工事項目</th>
            <th className="px-4 py-3 font-bold">内容</th>
            <th className="px-4 py-3 font-bold">料金</th>
            <th className="px-4 py-3 font-bold">備考</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.item}-${row.detail}`} className="border-b border-forest-100 last:border-0">
              <td className="px-4 py-4 font-bold text-ink-900">{row.item}</td>
              <td className="px-4 py-4 text-ink-500">{row.detail}</td>
              <td className="px-4 py-4 font-black text-forest-800">{row.price}</td>
              <td className="px-4 py-4 text-ink-500">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
