"use client";
import { useState } from "react";

const faqs = [
  { q: "How do I measure my wall for custom wallpaper?", a: "Measure the width and height of your wall in metres. Add 5–10 cm to each dimension as a safety margin. For walls with windows or doors, measure the full surface and we'll guide you on optimising the layout." },
  { q: "Can I use my own photo or design?", a: "Yes — upload any high-resolution image (minimum 150 dpi at print size) and we print it on any of our wallpaper types. Our team will check resolution and colour profile before production." },
  { q: "How long does production and delivery take?", a: "Standard production is 3–5 business days. Delivery across the EU takes 1–3 business days via DPD or Speedy. Express options are available at checkout." },
  { q: "What's the difference between fleece and PVC wallpapers?", a: "Fleece (nonwoven) wallpapers are paste-the-wall, easy to align, and tear-resistant. PVC self-adhesive film is applied directly — no paste needed — ideal for renters or temporary installs. HP PVC-Free is eco-certified, odourless, and suitable for bedrooms and nurseries." },
  { q: "Can I remove and reposition the wallpaper?", a: "Self-Adhesive PVC Film can be repositioned during application and removed cleanly within the first few minutes. Fleece and HP wallpapers are permanent once dry but can be removed by soaking with water." },
  { q: "Is the wallpaper safe for children's rooms?", a: "Our HP PVC-Free wallpaper is GREENGUARD certified with near-zero VOC emissions, making it safe for children's rooms, nurseries, and sensitive environments." },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <div key={i} className="border border-stone-200 dark:border-stone-700/50 rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold text-[#1A1A1E] dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-800/40 transition-colors"
          >
            {f.q}
            <svg className={`w-4 h-4 shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="2 4 6 8 10 4" />
            </svg>
          </button>
          {open === i && (
            <div className="px-6 pb-4 text-sm text-[#6B6860] dark:text-stone-400 leading-relaxed border-t border-stone-100 dark:border-stone-700/40 pt-3">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
