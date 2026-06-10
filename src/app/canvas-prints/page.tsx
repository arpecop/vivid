import PromoBar from "@/components/PromoBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Canvas Prints — VividHome",
  description: "Shop premium canvas prints. Browse 200+ designs in abstract, nature, cities, and more. Custom sizes available.",
};

const categories = [
  { label: "All", value: "" },
  { label: "Abstract Art", value: "abstract" },
  { label: "Nature & Landscapes", value: "nature" },
  { label: "Cities & Travel", value: "cities" },
  { label: "Minimalist", value: "minimalist" },
  { label: "Black & White", value: "bw" },
  { label: "Animals & Wildlife", value: "animals" },
  { label: "Floral & Botanical", value: "floral" },
  { label: "Custom Upload", value: "custom" },
];

export default function CanvasPrintsPage() {
  return (
    <>
      <PromoBar />
      <Header />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(165deg,#2C1810 0%,#3D2518 20%,#2A1E18 50%,#1A1A1A 80%,#111 100%)", minHeight: 420 }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ background: "radial-gradient(ellipse at 50% 120%,#E8632A,transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 text-white/70"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
            Premium Quality · Gallery-Grade
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight font-heading">
            Canvas Prints<br />
            <span style={{ background: "linear-gradient(90deg,#FDE68A,#FCA5A5,#C4B5FD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              That Tell Your Story
            </span>
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Museum-grade canvas. UV-resistant inks. Delivered across the EU in 2–5 business days.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold shadow-xl hover:-translate-y-0.5 transition-all"
              style={{ background: "linear-gradient(90deg,#E8632A,#D41B6B)" }}>
              Browse Collection
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="https://vividhome.eu/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors">
              Custom Order
            </a>
          </div>
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[["200+", "Designs"], ["3", "Canvas Types"], ["27 EU", "Countries"], ["2–5 days", "Delivery"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black text-white">{val}</div>
                <div className="text-xs text-white/50 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Section ──────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-[#0F0F12]" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[220px_1fr_190px] gap-6">

            {/* Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6B6860] mb-3">Theme</h3>
                  <nav className="space-y-1">
                    {categories.map((cat) => (
                      <a
                        key={cat.label}
                        href={cat.value ? `/canvas-prints?theme=${cat.value}` : "/canvas-prints"}
                        className="block px-3 py-2 rounded-xl text-sm font-semibold text-[#1A1A1E] dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800/50 hover:text-[#7B2D8E] transition-colors"
                      >
                        {cat.label}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="border-t border-stone-100 dark:border-stone-800 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6B6860] mb-3">Room</h3>
                  {["Living Room", "Bedroom", "Office", "Kitchen", "Hallway", "Dining Room"].map((r) => (
                    <label key={r} className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
                      <input type="checkbox" className="rounded accent-[#7B2D8E]" />
                      <span className="text-sm text-[#1A1A1E] dark:text-stone-200 group-hover:text-[#7B2D8E] transition-colors">{r}</span>
                    </label>
                  ))}
                </div>
                <div className="border-t border-stone-100 dark:border-stone-800 pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#6B6860] mb-3">Format</h3>
                  {["Standard", "Panoramic", "Square", "Custom Size"].map((f) => (
                    <label key={f} className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
                      <input type="radio" name="format" className="accent-[#7B2D8E]" />
                      <span className="text-sm text-[#1A1A1E] dark:text-stone-200 group-hover:text-[#7B2D8E] transition-colors">{f}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Product grid (client component for filter) */}
            <ProductGrid />

            {/* Custom Order sidebar */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="rounded-2xl p-5 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg,#1B3A8C 0%,#7B2D8E 60%,#D41B6B 100%)" }}>
                <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 30% 70%,white,transparent 70%)" }} />
                <div className="relative">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-2 block">Service</span>
                  <h3 className="text-base font-black mb-2 font-heading">Custom Order</h3>
                  <p className="text-xs opacity-80 leading-relaxed mb-4">Upload your own photo. Any size, any material.</p>
                  <a href="https://vividhome.eu/contact/"
                    className="inline-flex items-center justify-center w-full gap-1.5 px-4 py-2.5 rounded-xl bg-white text-[#1B3A8C] text-xs font-bold hover:bg-white/90 transition-colors">
                    Get a Quote
                  </a>
                </div>
              </div>

              {/* Materials mini card */}
              <div className="rounded-2xl border border-stone-100 dark:border-stone-700/40 bg-[#FAFAF8] dark:bg-[#1a1a20] p-5">
                <h3 className="text-sm font-bold text-[#1A1A1E] dark:text-stone-100 mb-3 font-heading">Materials</h3>
                {[
                  { name: "Polyester Base", price: "Base" },
                  { name: "Cotton-Poly Blend", price: "+10%" },
                  { name: "100% Cotton", price: "+20%" },
                ].map((m) => (
                  <div key={m.name} className="flex items-center justify-between py-1.5 border-b border-stone-100 dark:border-stone-700/40 last:border-0">
                    <span className="text-xs text-[#1A1A1E] dark:text-stone-200">{m.name}</span>
                    <span className="text-xs font-bold gradient-text">{m.price}</span>
                  </div>
                ))}
              </div>

              {/* Shipping badge */}
              <div className="rounded-2xl border border-stone-100 dark:border-stone-700/40 bg-white dark:bg-[#1a1a20] p-4 text-center">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ background: "linear-gradient(135deg,#1B3A8C,#7B2D8E)" }}>
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-[#1A1A1E] dark:text-stone-100">Free EU Shipping</p>
                <p className="text-[10px] text-[#6B6860] dark:text-stone-400 mt-0.5">On orders over €99</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Materials section ─────────────────────────────── */}
      <section className="py-16 bg-[#FAFAF8] dark:bg-[#111118]" id="materials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest gradient-text">Material Guide</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1E] dark:text-stone-100 mt-2 font-heading">Choose Your Canvas</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "Polyester Base", weight: "260 g/m²", price: "Base price", desc: "Great colour reproduction for large-format prints at accessible prices.", tags: ["260 g/m²", "Satin finish", "Indoor"] },
              { title: "Cotton-Poly Blend", weight: "310 g/m²", price: "+10%", badge: "Most Popular", desc: "Best balance of colour fidelity, texture, and price. Our studio favourite.", tags: ["310 g/m²", "Matte finish", "Indoor"] },
              { title: "100% Cotton Canvas", weight: "370 g/m²", price: "+20%", desc: "Museum-grade matte cotton for gallery installations and premium gifts.", tags: ["370 g/m²", "Premium matte", "Indoor"] },
            ].map((m) => (
              <div key={m.title} className={`rounded-2xl p-5 border border-stone-100 dark:border-stone-700/40 bg-white dark:bg-[#1a1a20] shadow-sm card-lift ${"badge" in m && m.badge ? "gradient-border" : ""}`}>
                {"badge" in m && m.badge && (
                  <span className="inline-block text-[10px] font-bold text-white px-2.5 py-1 rounded-full mb-2" style={{ background: "linear-gradient(90deg,#E8632A,#D41B6B)" }}>{m.badge}</span>
                )}
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-bold text-[#1A1A1E] dark:text-stone-100">{m.title}</h3>
                  <span className="text-xs font-black gradient-text">{m.price}</span>
                </div>
                <p className="text-xs text-[#6B6860] dark:text-stone-400 leading-relaxed mb-3">{m.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {m.tags.map((t) => <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-700/50 text-[#1A1A1E] dark:text-stone-200">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
