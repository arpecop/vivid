"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  themes: string[];
  rooms: string[];
  format: string;
  price: string;
  tag: string;
  bg: string;
};

const products: Product[] = [
  { id: 1, name: "Abstract Wave Study", themes: ["abstract"], rooms: ["living-room", "office"], format: "standard", price: "From €49", tag: "Abstract", bg: "from-blue-100 to-purple-100" },
  { id: 2, name: "Misty Mountain Peaks", themes: ["nature"], rooms: ["living-room", "bedroom"], format: "panoramic", price: "From €39", tag: "Nature", bg: "from-green-100 to-teal-100" },
  { id: 3, name: "Tokyo Night Grid", themes: ["cities"], rooms: ["office", "living-room"], format: "standard", price: "From €49", tag: "Cities", bg: "from-orange-100 to-red-100" },
  { id: 4, name: "Botanical Burst", themes: ["floral"], rooms: ["bedroom", "kitchen"], format: "square", price: "From €39", tag: "Floral", bg: "from-pink-100 to-rose-100" },
  { id: 5, name: "Silver Geometry", themes: ["minimalist"], rooms: ["office", "living-room"], format: "standard", price: "From €45", tag: "Minimal", bg: "from-slate-100 to-gray-100" },
  { id: 6, name: "Wild Horse Run", themes: ["animals"], rooms: ["living-room", "hallway"], format: "panoramic", price: "From €49", tag: "Animals", bg: "from-amber-100 to-yellow-100" },
  { id: 7, name: "Noir Paris Skyline", themes: ["bw", "cities"], rooms: ["office", "living-room"], format: "panoramic", price: "From €39", tag: "B&W", bg: "from-neutral-100 to-stone-200" },
  { id: 8, name: "Custom Upload Print", themes: ["custom"], rooms: ["living-room", "bedroom", "office"], format: "custom", price: "From €59", tag: "Custom", bg: "from-violet-100 to-indigo-100" },
  { id: 9, name: "Desert Dunes Twilight", themes: ["nature", "abstract"], rooms: ["bedroom", "living-room"], format: "panoramic", price: "From €39", tag: "Nature", bg: "from-orange-100 to-amber-100" },
  { id: 10, name: "Nordic Pine Forest", themes: ["nature"], rooms: ["living-room", "bedroom"], format: "standard", price: "From €39", tag: "Nature", bg: "from-emerald-100 to-green-100" },
  { id: 11, name: "Zen Garden Stone", themes: ["minimalist", "abstract"], rooms: ["bedroom", "office"], format: "square", price: "From €45", tag: "Minimal", bg: "from-stone-100 to-neutral-200" },
  { id: 12, name: "Tropical Monstera", themes: ["floral", "nature"], rooms: ["bedroom", "living-room", "kitchen"], format: "standard", price: "From €39", tag: "Floral", bg: "from-lime-100 to-green-100" },
  { id: 13, name: "Barcelona Arc", themes: ["cities"], rooms: ["living-room", "hallway"], format: "standard", price: "From €45", tag: "Cities", bg: "from-yellow-100 to-orange-100" },
  { id: 14, name: "Arctic Fox Gaze", themes: ["animals"], rooms: ["living-room", "bedroom"], format: "square", price: "From €49", tag: "Animals", bg: "from-sky-100 to-blue-100" },
  { id: 15, name: "Watercolour Wash", themes: ["abstract"], rooms: ["bedroom", "living-room"], format: "standard", price: "From €45", tag: "Abstract", bg: "from-purple-100 to-pink-100" },
  { id: 16, name: "London Rain Street", themes: ["cities", "bw"], rooms: ["office", "hallway"], format: "standard", price: "From €39", tag: "B&W", bg: "from-zinc-100 to-slate-200" },
  { id: 17, name: "Cherry Blossom Drift", themes: ["floral", "nature"], rooms: ["bedroom", "living-room"], format: "panoramic", price: "From €39", tag: "Floral", bg: "from-rose-100 to-pink-100" },
  { id: 18, name: "Mid-Century Lines", themes: ["minimalist"], rooms: ["office", "living-room"], format: "square", price: "From €45", tag: "Minimal", bg: "from-amber-100 to-stone-100" },
  { id: 19, name: "Golden Eagle Soar", themes: ["animals"], rooms: ["living-room", "office"], format: "panoramic", price: "From €49", tag: "Animals", bg: "from-yellow-100 to-orange-100" },
  { id: 20, name: "Infinity Gradient", themes: ["abstract", "custom"], rooms: ["office", "living-room", "bedroom"], format: "standard", price: "From €49", tag: "Abstract", bg: "from-fuchsia-100 to-violet-100" },
];

const themeFilters = ["abstract", "nature", "cities", "minimalist", "bw", "animals", "floral", "custom"];
const roomFilters = ["living-room", "bedroom", "office", "kitchen", "hallway"];
const formatFilters = ["standard", "panoramic", "square", "custom"];

const labelMap: Record<string, string> = {
  "abstract": "Abstract", "nature": "Nature", "cities": "Cities", "minimalist": "Minimal",
  "bw": "B&W", "animals": "Animals", "floral": "Floral", "custom": "Custom",
  "living-room": "Living Room", "bedroom": "Bedroom", "office": "Office",
  "kitchen": "Kitchen", "hallway": "Hallway",
  "standard": "Standard", "panoramic": "Panoramic", "square": "Square",
};

export default function ProductGrid() {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [activeRoom, setActiveRoom] = useState<string | null>(null);
  const [activeFormat, setActiveFormat] = useState<string | null>(null);

  const toggle = <T extends string>(
    val: T,
    current: T | null,
    setter: (v: T | null) => void
  ) => setter(current === val ? null : val);

  const filtered = products.filter((p) => {
    if (activeTheme && !p.themes.includes(activeTheme)) return false;
    if (activeRoom && !p.rooms.includes(activeRoom)) return false;
    if (activeFormat && p.format !== activeFormat) return false;
    return true;
  });

  return (
    <div>
      {/* Filter pills */}
      <div className="space-y-3 mb-6">
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6B6860] self-center mr-1">Theme:</span>
          {themeFilters.map((f) => (
            <button
              key={f}
              onClick={() => toggle(f, activeTheme, setActiveTheme)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${activeTheme === f ? "text-white border-transparent" : "text-[#1A1A1E] dark:text-stone-200 border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1a1a20] hover:border-[#7B2D8E]/40 hover:text-[#7B2D8E]"}`}
              style={activeTheme === f ? { background: "linear-gradient(90deg,#7B2D8E,#D41B6B)" } : undefined}
            >
              {labelMap[f]}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6B6860] self-center mr-1">Room:</span>
          {roomFilters.map((f) => (
            <button
              key={f}
              onClick={() => toggle(f, activeRoom, setActiveRoom)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${activeRoom === f ? "text-white border-transparent" : "text-[#1A1A1E] dark:text-stone-200 border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1a1a20] hover:border-[#1B3A8C]/40 hover:text-[#1B3A8C]"}`}
              style={activeRoom === f ? { background: "linear-gradient(90deg,#1B3A8C,#7B2D8E)" } : undefined}
            >
              {labelMap[f]}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6B6860] mr-1">Format:</span>
          {formatFilters.map((f) => (
            <button
              key={f}
              onClick={() => toggle(f, activeFormat, setActiveFormat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all capitalize ${activeFormat === f ? "text-white border-transparent" : "text-[#1A1A1E] dark:text-stone-200 border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1a1a20] hover:border-[#E8632A]/40 hover:text-[#E8632A]"}`}
              style={activeFormat === f ? { background: "linear-gradient(90deg,#E8632A,#D41B6B)" } : undefined}
            >
              {labelMap[f]}
            </button>
          ))}
          {(activeTheme || activeRoom || activeFormat) && (
            <button
              onClick={() => { setActiveTheme(null); setActiveRoom(null); setActiveFormat(null); }}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#6B6860] bg-stone-100 dark:bg-stone-700/50 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors ml-1"
            >
              Clear all
            </button>
          )}
          <span className="text-xs text-[#6B6860] ml-auto">{filtered.length} products</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <div key={p.id} className="group bg-white dark:bg-[#1a1a20] rounded-2xl overflow-hidden border border-stone-100 dark:border-stone-700/40 shadow-sm card-lift cursor-pointer">
            <div className={`relative h-52 bg-gradient-to-br ${p.bg} overflow-hidden`}>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-4 py-2 rounded-xl bg-white text-[#1A1A1E] text-xs font-bold hover:bg-white/90 transition-colors">
                  Quick View
                </button>
              </div>
              <span
                className="absolute top-3 left-3 text-[10px] font-bold text-white px-2.5 py-1 rounded-full"
                style={{ background: "linear-gradient(90deg,#7B2D8E,#D41B6B)" }}
              >
                {p.tag}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-[#1A1A1E] dark:text-stone-100 mb-2">{p.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm font-black gradient-text">{p.price}</span>
                <button className="text-[10px] font-semibold text-[#7B2D8E] border border-[#7B2D8E]/30 px-3 py-1.5 rounded-lg hover:bg-[#7B2D8E]/5 dark:hover:bg-[#7B2D8E]/10 transition-colors">
                  Customise
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[#6B6860] mb-4">No products match your filters.</p>
          <button
            onClick={() => { setActiveTheme(null); setActiveRoom(null); setActiveFormat(null); }}
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white"
            style={{ background: "linear-gradient(90deg,#1B3A8C,#7B2D8E)" }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
