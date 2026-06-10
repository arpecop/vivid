"use client";
import { useState } from "react";

const types = [
  { label: "Self-Adhesive PVC Film", price: 25 },
  { label: "HP PVC-Free Wallpaper", price: 30 },
  { label: "Fleece Standard", price: 25 },
  { label: "Fleece Textures", price: 30 },
  { label: "Fleece Heavy", price: 35 },
  { label: "Fleece No-Scratch", price: 40 },
];

export default function PriceCalculator() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [type, setType] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  function calculate() {
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (!w || !h) return;
    setResult(Math.ceil(w * h * 100) / 100 * types[type].price);
  }

  return (
    <div className="grid sm:grid-cols-2 gap-8 items-end">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">Width (m)</label>
            <input
              type="number" min="0" step="0.01" placeholder="e.g. 3.50"
              value={width} onChange={e => setWidth(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7B2D8E]/50 placeholder-stone-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">Height (m)</label>
            <input
              type="number" min="0" step="0.01" placeholder="e.g. 2.60"
              value={height} onChange={e => setHeight(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7B2D8E]/50 placeholder-stone-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">Wallpaper Type</label>
          <select
            value={type} onChange={e => setType(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7B2D8E]/50"
          >
            {types.map((t, i) => (
              <option key={i} value={i}>{t.label} — {t.price} €/m²</option>
            ))}
          </select>
        </div>
        <button
          onClick={calculate}
          className="w-full py-3 rounded-xl font-bold text-sm text-stone-200 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          style={{ background: "linear-gradient(135deg,#1B3A8C,#7B2D8E,#D41B6B)" }}
        >
          Calculate My Price
        </button>
      </div>
      <div className="flex flex-col items-center justify-center bg-stone-800/60 rounded-2xl p-8 border border-stone-700 min-h-[180px]">
        {result !== null ? (
          <>
            <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Estimated Total</div>
            <div className="text-5xl font-black gradient-text mb-1">{result.toFixed(2)} €</div>
            <div className="text-xs text-stone-500 mt-2">incl. VAT · excl. shipping</div>
            <a href="https://vividhome.eu/contact/" className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-stone-200 text-xs font-bold" style={{ background: "linear-gradient(90deg,#1B3A8C,#7B2D8E)" }}>
              Order Now
            </a>
          </>
        ) : (
          <p className="text-stone-500 text-sm text-center">Enter your wall dimensions<br />to see an instant price estimate.</p>
        )}
      </div>
    </div>
  );
}
