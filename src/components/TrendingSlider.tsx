"use client";
import { useRef } from "react";

const products = [
  { href: "https://vividhome.eu/p/songbird-rose-sonata-vintage-botanical-canvas/", img: "https://vividhome.eu/wp-content/uploads/2026/04/1-10-3000x3000-13-scaled-300x300.jpg", name: "Songbird & Rose Sonata" },
  { href: "https://vividhome.eu/p/the-long-shadow-silhouette-watercolor-canvas-print/", img: "https://vividhome.eu/wp-content/uploads/2026/04/3-10-3000x3000-11-scaled-300x300.jpg", name: "The Long Shadow" },
  { href: "https://vividhome.eu/p/radiant-burst-abstract-expressionist-canvas-print/", img: "https://vividhome.eu/wp-content/uploads/2026/04/2-10-3000x3000-12-scaled-300x300.jpg", name: "Radiant Burst" },
  { href: "https://vividhome.eu/p/red-node-convergence-abstract-digital-canvas-print/", img: "https://vividhome.eu/wp-content/uploads/2026/04/1-10-3000x3000-12-scaled-300x300.jpg", name: "Red Node Convergence" },
  { href: "https://vividhome.eu/p/cartographic-mind-portrait-mixed-media-canvas-print/", img: "https://vividhome.eu/wp-content/uploads/2026/04/13-10-3000x3000-7-scaled-300x300.jpg", name: "Cartographic Mind" },
  { href: "https://vividhome.eu/p/crimson-unmasked-portrait-collage-digital-art-canvas/", img: "https://vividhome.eu/wp-content/uploads/2026/04/12-10-3000x3000-7-scaled-300x300.jpg", name: "Crimson Unmasked" },
  { href: "https://vividhome.eu/p/dark-arc-and-green-form-geometric-abstract-canvas-print/", img: "https://vividhome.eu/wp-content/uploads/2026/04/11-10-3000x3000-7-scaled-300x300.jpg", name: "Dark Arc and Green Form" },
  { href: "https://vividhome.eu/p/crimson-fault-line-abstract-acrylic-canvas-print/", img: "https://vividhome.eu/wp-content/uploads/2026/04/10-10-3000x3000-7-scaled-300x300.jpg", name: "Crimson Fault Line" },
  { href: "https://vividhome.eu/p/synthwave-midnight-range-retro-landscape-canvas-print/", img: "https://vividhome.eu/wp-content/uploads/2026/04/9-10-3000x3000-7-scaled-300x300.jpg", name: "Synthwave Midnight Range" },
  { href: "https://vividhome.eu/p/midnight-sprint-in-the-rain-sports-car-canvas-print/", img: "https://vividhome.eu/wp-content/uploads/2026/04/8-10-3000x3000-7-scaled-300x300.jpg", name: "Midnight Sprint in the Rain" },
];

export default function TrendingSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  function step(dir: number) {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector("a");
    if (!card) return;
    sliderRef.current.scrollBy({ left: dir * (card.offsetWidth + 12) * 2, behavior: "smooth" });
  }

  return (
    <div className="min-w-0">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[10px] font-bold tracking-[.15em] uppercase text-[#7B2D8E]">Trending Now</div>
        <div className="flex gap-1.5">
          <button
            onClick={() => step(-1)}
            className="w-7 h-7 rounded-full border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1a1a20] flex items-center justify-center text-stone-500 dark:text-stone-400 hover:bg-[#1B3A8C] hover:text-white hover:border-[#1B3A8C] transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="10 4 6 8 10 12" /></svg>
          </button>
          <button
            onClick={() => step(1)}
            className="w-7 h-7 rounded-full border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1a1a20] flex items-center justify-center text-stone-500 dark:text-stone-400 hover:bg-[#1B3A8C] hover:text-white hover:border-[#1B3A8C] transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 4 10 8 6 12" /></svg>
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="grid grid-rows-2 grid-flow-col gap-3 overflow-x-auto scroll-smooth pb-1"
        style={{
          gridAutoColumns: "minmax(130px,1fr)",
          scrollbarWidth: "none",
          WebkitMaskImage: "linear-gradient(to right,transparent 0,#000 8px,#000 calc(100% - 24px),transparent 100%)",
        }}
      >
        {products.map((p) => (
          <a key={p.href} href={p.href} className="group block">
            <div className="aspect-square rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-700/50 border border-stone-100 dark:border-stone-700/40 mb-1.5">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
              />
            </div>
            <div className="text-xs font-medium text-[#2D2B28] dark:text-stone-200 line-clamp-2 leading-snug mb-0.5">{p.name}</div>
            <div className="text-xs font-bold text-[#1B3A8C]">
              <span className="text-[10px] font-normal text-stone-400">from </span>13,90 €
            </div>
          </a>
        ))}
      </div>

      {/* Mobile: category pills */}
      <div className="lg:hidden mt-5 flex flex-wrap gap-2">
        {[
          { label: "Abstract", count: 137, href: "https://vividhome.eu/canvas-prints/abstract/" },
          { label: "Botanical & Floral", count: 92, href: "https://vividhome.eu/canvas-prints/botanical-floral/" },
          { label: "Animals & Wildlife", count: 46, href: "https://vividhome.eu/canvas-prints/animals-wildlife/" },
          { label: "Landscape & Nature", count: 34, href: "https://vividhome.eu/canvas-prints/landscape-nature/" },
        ].map((cat) => (
          <a
            key={cat.label}
            href={cat.href}
            className="px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/50 text-xs font-semibold dark:text-stone-300 hover:bg-[#1B3A8C] hover:text-white hover:border-[#1B3A8C] transition-colors"
          >
            {cat.label} <span className="opacity-60">{cat.count}</span>
          </a>
        ))}
        <a href="https://vividhome.eu/canvas-prints/" className="px-3 py-1.5 rounded-full border border-[#1B3A8C] text-[#1B3A8C] text-xs font-semibold hover:bg-[#1B3A8C] hover:text-white transition-colors">
          View all →
        </a>
      </div>
    </div>
  );
}
