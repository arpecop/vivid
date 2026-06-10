import PromoBar from "@/components/PromoBar";
import Footer from "@/components/Footer";
import TrendingSlider from "@/components/TrendingSlider";
import NewsletterForm from "@/components/NewsletterForm";
import ThemeToggle from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-[#0F0F12] text-[#1A1A1E] dark:text-stone-100 antialiased">
      <PromoBar />

      {/* ── JUMBOTRON ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
        <div className="shrink-0 w-20 h-20 overflow-hidden rounded-xl">
          <img
            src="https://vividhome.eu/wp-content/themes/vividhome-theme/assets/images/VividHome-transparent.png"
            alt="VividHome"
            className="w-full h-full object-cover object-left"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-lg">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              placeholder="Search prints, styles, rooms…"
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800/50 text-sm text-[#1A1A1E] dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#7B2D8E]/40"
            />
          </div>
        </div>
        <ThemeToggle />
      </div>
      <div
        className="relative w-full h-[50vh] bg-center bg-auto bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('https://vividhome.eu/wp-content/themes/vividhome-theme/assets/images/hero/hero-1.png')" }}
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            Your Photo, <em className="not-italic gradient-text">Museum-Grade</em> Canvas.<br />
            Made in Sofia, Shipped EU-Wide.
          </h1>
        </div>
      </div>

      {/* ── HERO — CATEGORY PANELS ─────────────────────── */}
      <section className="py-10 sm:py-14 bg-[#F5F5F3] dark:bg-[#111118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Canvas Prints Panel */}
            <div className="group relative bg-white dark:bg-[#1a1a20] rounded-3xl overflow-hidden shadow-sm border border-stone-100 dark:border-stone-700/40 card-lift cursor-pointer">
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="https://vividhome.eu/wp-content/uploads/2026/04/1-10-3000x3000-13-scaled-600x600.jpg"
                  alt="Canvas Prints"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 pointer-events-none shine"
                  style={{ background: "linear-gradient(110deg,transparent 0%,rgba(255,255,255,0.22) 42%,transparent 58%)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ background: "linear-gradient(90deg,#1B3A8C,#7B2D8E)" }}>
                    2,400+ Designs
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1E] dark:text-stone-100 mb-2 leading-tight">Canvas Prints</h2>
                <p className="text-[#6B6860] dark:text-stone-400 text-sm leading-relaxed mb-5">Gallery-quality prints on polyester, cotton-poly blend or 100% cotton canvas. Handcrafted in Bulgaria.</p>
                <a
                  href="https://vividhome.eu/canvas-prints/"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl text-white font-bold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: "linear-gradient(95deg,#f97316 0%,#f43f5e 55%,#d41b6b 100%)" }}
                >
                  Shop Canvas Prints
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Wallpapers Panel */}
            <div className="group relative bg-white dark:bg-[#1a1a20] rounded-3xl overflow-hidden shadow-sm border border-stone-100 dark:border-stone-700/40 card-lift cursor-pointer">
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src="https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/hp-pvc-free.webp"
                  alt="Wallpapers"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 pointer-events-none shine"
                  style={{ background: "linear-gradient(110deg,transparent 0%,rgba(255,255,255,0.22) 42%,transparent 58%)", animationDelay: "1.4s" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ background: "linear-gradient(90deg,#00B4E8,#1B3A8C)" }}>
                    Coming Soon
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1E] dark:text-stone-100 mb-2 leading-tight">Wallpapers</h2>
                <p className="text-[#6B6860] dark:text-stone-400 text-sm leading-relaxed mb-5">Custom wall murals on 12 fleece textures. FSC-certified, PVC-free, made-to-measure for your wall.</p>
                <a
                  href="https://vividhome.eu/wallpapers/"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl text-white font-bold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: "linear-gradient(95deg,#1e3a8a 0%,#2563eb 35%,#7c3aed 70%,#9333ea 100%)" }}
                >
                  Notify Me at Launch
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CANVAS PRINTS BROWSE SECTION ───────────────── */}
      <section className="py-14 bg-white dark:bg-[#0F0F12] border-b border-stone-100 dark:border-stone-800" id="canvas-browse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="block text-xs font-bold tracking-widest uppercase text-[#7B2D8E] mb-2">Canvas Prints</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1E] dark:text-stone-100">Browse &amp; <em className="not-italic gradient-text">Discover</em></h2>
          </div>

          <div className="grid lg:grid-cols-[220px_1fr_200px] gap-6 xl:gap-8 items-start">

            {/* Col 1: Browse by Style */}
            <div className="hidden lg:block">
              <div className="text-[10px] font-bold tracking-[.15em] uppercase text-[#7B2D8E] mb-3">Browse by Style</div>
              <div className="space-y-0.5">
                {[
                  { label: "Abstract", count: 137, href: "https://vividhome.eu/canvas-prints/abstract/", icon: <><circle cx="8" cy="8" r="6"/><path d="M5 8q1.5-3 3 0t3 0"/></> },
                  { label: "Botanical & Floral", count: 92, href: "https://vividhome.eu/canvas-prints/botanical-floral/", icon: <path d="M8 3c-2 0-4 2-4 4 0 3 4 6 4 6s4-3 4-6c0-2-2-4-4-4z"/> },
                  { label: "Animals & Wildlife", count: 46, href: "https://vividhome.eu/canvas-prints/animals-wildlife/", icon: <><circle cx="8" cy="9" r="4"/><circle cx="6" cy="6" r="1"/><circle cx="10" cy="6" r="1"/></> },
                  { label: "Vintage & Retro", count: 39, href: "https://vividhome.eu/canvas-prints/vintage-retro/", icon: <><circle cx="8" cy="8" r="6"/><path d="M8 4v4l2 2"/></> },
                  { label: "Landscape & Nature", count: 34, href: "https://vividhome.eu/canvas-prints/landscape-nature/", icon: <><path d="M2 12q3-8 6-4t6-4"/><path d="M2 13h12"/></> },
                  { label: "Cityscape & Architecture", count: 32, href: "https://vividhome.eu/canvas-prints/cityscape-architecture/", icon: <><rect x="2" y="4" width="12" height="9" rx="1"/><path d="M5 4V3M11 4V3"/></> },
                  { label: "Portrait & Figure", count: 24, href: "https://vividhome.eu/canvas-prints/portrait-figure/", icon: <><circle cx="8" cy="6" r="2.5"/><path d="M3 13c0-3 2-5 5-5s5 2 5 5"/></> },
                  { label: "Photography", count: 6, href: "https://vividhome.eu/canvas-prints/photography/", icon: <><rect x="2" y="4" width="12" height="9" rx="1.5"/><circle cx="8" cy="9" r="2.5"/></> },
                ].map((cat) => (
                  <a
                    key={cat.label}
                    href={cat.href}
                    className="group flex items-center gap-3 px-3 py-2.5 -mx-3 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#7B2D8E] shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      {cat.icon}
                    </svg>
                    <span className="flex-1 text-sm text-[#2D2B28] dark:text-stone-200">{cat.label}</span>
                    <span className="text-[10px] text-stone-400 bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 px-2 py-0.5 rounded-full group-hover:bg-[#1B3A8C] group-hover:text-white group-hover:border-[#1B3A8C] transition-colors">
                      {cat.count}
                    </span>
                  </a>
                ))}
                <a href="https://vividhome.eu/canvas-prints/" className="flex items-center gap-1.5 mt-3 pt-3 border-t border-stone-100 dark:border-stone-700/50 text-sm font-medium text-[#1B3A8C] hover:text-[#7B2D8E] transition-colors">
                  View all canvas prints
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 4 10 8 6 12" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Trending slider */}
            <TrendingSlider />

            {/* Col 3: Custom Order promo card */}
            <a
              href="https://vividhome.eu/contact/"
              className="hidden lg:flex flex-col justify-between rounded-2xl p-6 text-white min-h-[280px] relative overflow-hidden group"
              style={{ background: "linear-gradient(135deg,#1B3A8C 0%,#7B2D8E 60%,#D41B6B 100%)" }}
            >
              <div
                className="absolute -right-8 -top-8 w-28 h-28 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle,rgba(255,255,255,0.15),transparent 70%)" }}
              />
              <div>
                <span className="block text-[10px] font-bold tracking-widest uppercase text-white/75 mb-2">Custom order</span>
                <strong className="block text-xl font-bold leading-snug mb-3">Any size, any image</strong>
                <p className="text-sm text-white/80 leading-relaxed">Have a photo? We&apos;ll print it on gallery-grade canvas, made to fit your wall.</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium border-b border-white/40 pb-0.5 group-hover:border-white transition-colors mt-4">
                Get a quote
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 4 10 8 6 12" />
                </svg>
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#0F0F12]" id="how-it-works">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#7B2D8E] mb-3">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1E] dark:text-stone-100 leading-tight mb-4">
              From Screen to Wall<br />in <em className="not-italic gradient-text">Three Steps</em>
            </h2>
            <p className="text-[#6B6860] dark:text-stone-400 max-w-xl mx-auto">No complexity, no guesswork. Choose, customize, and we handle the rest.</p>
          </div>

          <div className="relative grid sm:grid-cols-3 gap-12 sm:gap-6">
            {/* Connecting line */}
            <div className="hidden sm:block absolute top-8 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-px bg-stone-200 dark:bg-stone-700" aria-hidden="true">
              <div className="h-full line-fill origin-left" style={{ background: "linear-gradient(90deg,#1B3A8C,#7B2D8E,#D41B6B)" }} />
            </div>

            {[
              { n: "01", grad: "linear-gradient(135deg,#1B3A8C,#7B2D8E)", title: "Choose Your Design", desc: "Browse 2,400+ curated designs across every style — or upload your own image." },
              { n: "02", grad: "linear-gradient(135deg,#7B2D8E,#D41B6B)", title: "Pick Size & Material", desc: "Select canvas type, stretcher profile, and any custom dimensions you need." },
              { n: "03", grad: "linear-gradient(135deg,#D41B6B,#E8632A)", title: "We Craft & Ship", desc: "Handcrafted in Bulgaria, quality-checked, and shipped EU-wide in 2–5 days." },
            ].map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-xl mb-5 shadow-lg relative z-10"
                  style={{ background: step.grad }}
                >
                  {step.n}
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1E] dark:text-stone-100 mb-2">{step.title}</h3>
                <p className="text-sm text-[#6B6860] dark:text-stone-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ──────────────────────────── */}
      <section className="py-20 bg-[#F5F5F3] dark:bg-[#111118]" id="featured">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="block text-xs font-bold tracking-widest uppercase text-[#7B2D8E] mb-2">Curated Selection</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1E] dark:text-stone-100">
                Featured <em className="not-italic gradient-text">Products</em>
              </h2>
            </div>
            <a href="https://vividhome.eu/shop/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 dark:border-stone-600 text-sm font-semibold dark:text-stone-300 hover:bg-white dark:hover:bg-stone-800 transition-colors">
              View All Products
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { href: "https://vividhome.eu/p/songbird-rose-sonata-vintage-botanical-canvas/", img: "https://vividhome.eu/wp-content/uploads/2026/04/1-10-3000x3000-13-scaled-600x600.jpg", cat: "Animals & Wildlife · Canvas", name: "Songbird & Rose Sonata", price: "from 13,90 €", priceColor: "text-[#1B3A8C]", sale: false },
              { href: "https://vividhome.eu/p/the-long-shadow-silhouette-watercolor-canvas-print/", img: "https://vividhome.eu/wp-content/uploads/2026/04/3-10-3000x3000-11-scaled-600x600.jpg", cat: "Abstract · Canvas", name: "The Long Shadow", price: "from 13,90 €", priceColor: "text-[#1B3A8C]", sale: false },
              { href: "https://vividhome.eu/p/radiant-burst-abstract-expressionist-canvas-print/", img: "https://vividhome.eu/wp-content/uploads/2026/04/2-10-3000x3000-12-scaled-600x600.jpg", cat: "Abstract · Canvas", name: "Radiant Burst", price: "from 13,90 €", priceColor: "text-[#1B3A8C]", sale: false },
              { href: "https://vividhome.eu/p/red-node-convergence-abstract-digital-canvas-print/", img: "https://vividhome.eu/wp-content/uploads/2026/04/1-10-3000x3000-12-scaled-600x600.jpg", cat: "Abstract · Canvas", name: "Red Node Convergence", price: "from 13,90 €", priceColor: "text-[#1B3A8C]", sale: false },
              { href: "https://vividhome.eu/p/cartographic-mind-portrait-mixed-media-canvas-print/", img: "https://vividhome.eu/wp-content/uploads/2026/04/13-10-3000x3000-7-scaled-600x600.jpg", cat: "Portrait & Figure · Canvas", name: "Cartographic Mind", price: "from 13,90 €", priceColor: "text-[#1B3A8C]", sale: false },
              { href: "https://vividhome.eu/p/crimson-unmasked-portrait-collage-digital-art-canvas/", img: "https://vividhome.eu/wp-content/uploads/2026/04/12-10-3000x3000-7-scaled-600x600.jpg", cat: "Abstract · Canvas", name: "Crimson Unmasked", price: "from 13,90 €", priceColor: "text-[#1B3A8C]", sale: false },
              { href: "https://vividhome.eu/p/cobalt-poppy-quartet-floral-illustration-canvas-print/", img: "https://vividhome.eu/wp-content/uploads/2026/04/7-10-3000x3000-8-scaled-600x600.jpg", cat: "Botanical & Floral · Canvas", name: "Cobalt Poppy Quartet", price: "from 13,90 €", priceColor: "text-[#1B3A8C]", sale: false },
              { href: "https://vividhome.eu/p/bold-stripes-amber-light-portrait-photography-canvas/", img: "https://vividhome.eu/wp-content/uploads/2026/04/18-10-3000x3000-6-scaled-600x600.jpg", cat: "Photography · Canvas", name: "Bold Stripes, Amber Light", price: "from 10,43 €", priceColor: "text-[#D41B6B]", sale: true },
            ].map((p) => (
              <div key={p.href} className="group bg-white dark:bg-[#1a1a20] rounded-2xl overflow-hidden shadow-sm border border-stone-100 dark:border-stone-700/40 card-lift relative">
                {p.sale && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                      style={{ background: "linear-gradient(90deg,#D41B6B,#E8632A)" }}>Sale</span>
                  </div>
                )}
                <a href={p.href} className="block overflow-hidden">
                  <div className="relative aspect-square overflow-hidden bg-stone-100 dark:bg-stone-700/50">
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/12 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold tracking-widest uppercase bg-black/60 px-4 py-1.5 rounded-full">
                        Quick View
                      </span>
                    </div>
                  </div>
                </a>
                <div className="p-3.5">
                  <p className="text-[10px] text-stone-400 dark:text-stone-500 uppercase tracking-wide mb-1">{p.cat}</p>
                  <h3 className="text-sm font-semibold text-[#1A1A1E] dark:text-stone-100 leading-snug mb-1.5 line-clamp-2">
                    <a href={p.href} className="hover:text-[#1B3A8C] transition-colors">{p.name}</a>
                  </h3>
                  <p className={`text-sm font-bold ${p.priceColor}`}>
                    {p.price} <small className="font-normal text-stone-400 text-xs">incl. VAT</small>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://vividhome.eu/shop/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
              style={{ background: "linear-gradient(135deg,#1B3A8C,#7B2D8E,#D41B6B)" }}
            >
              Browse All Products
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── MATERIALS SHOWCASE ─────────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#0F0F12]" id="materials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="block text-xs font-bold tracking-widest uppercase text-[#7B2D8E] mb-3">Materials &amp; Quality</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1E] dark:text-stone-100">Built to Last,<br />Made to <em className="not-italic gradient-text">Impress</em></h2>
          </div>

          {/* Canvas group */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1B3A8C]/10 dark:bg-[#1B3A8C]/20">
              <svg className="w-5 h-5 text-[#1B3A8C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1E] dark:text-stone-100">Canvas</h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {/* Polyester */}
            <div className="group bg-white dark:bg-[#1a1a20] rounded-2xl overflow-hidden border border-stone-100 dark:border-stone-700/40 shadow-sm card-lift">
              <div className="relative h-44 overflow-hidden bg-stone-100 dark:bg-stone-700/50 cursor-zoom-in">
                <img src="https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/canvas-types/canvas-polyester.webp" alt="100% Polyester Canvas" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute bottom-3 left-3 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ background: "linear-gradient(90deg,#2563EB,#7C3AED)" }}>Polyester</span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="text-base font-bold text-[#1A1A1E] dark:text-stone-100">100% Polyester Canvas</h3>
                  <div className="text-right shrink-0">
                    <div className="text-[10px] text-stone-400 uppercase tracking-wide">Price</div>
                    <div className="text-sm font-bold text-[#1A1A1E] dark:text-stone-100">Base price</div>
                  </div>
                </div>
                <p className="text-xs text-[#6B6860] dark:text-stone-400 leading-relaxed mb-3">Smooth with a slight gloss — maximum color vibrancy. The most affordable option.</p>
                <div className="flex flex-wrap gap-1.5">
                  {["270 g/m²", "Slight gloss", "Indoor", "Max 142 cm"].map(t => <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-700/50 text-[#1A1A1E] dark:text-stone-200">{t}</span>)}
                </div>
              </div>
            </div>

            {/* Cotton-Poly (featured) */}
            <div className="group relative rounded-2xl overflow-hidden shadow-md card-lift gradient-border">
              <div className="absolute top-3.5 right-3.5 z-10">
                <span className="text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full" style={{ background: "linear-gradient(90deg,#1B3A8C,#7B2D8E,#D41B6B)" }}>Most popular</span>
              </div>
              <div className="relative h-44 overflow-hidden bg-stone-100 dark:bg-stone-700/50 cursor-zoom-in">
                <img src="https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/canvas-types/canvas-cotton-polyester-70-30.webp" alt="75% Cotton, 25% Polyester" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute bottom-3 left-3 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ background: "linear-gradient(90deg,#7C3AED,#F43F5E)" }}>Mixed</span>
              </div>
              <div className="p-5 bg-white/90 dark:bg-[#1a1a20]/90">
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="text-base font-bold text-[#1A1A1E] dark:text-stone-100">75% Cotton, 25% Polyester</h3>
                  <div className="text-right shrink-0">
                    <div className="text-[10px] text-stone-400 uppercase tracking-wide">Price</div>
                    <div className="text-sm font-bold gradient-text">+10%</div>
                  </div>
                </div>
                <p className="text-xs text-[#6B6860] dark:text-stone-400 leading-relaxed mb-3">The perfect balance of natural texture and vibrant colour — ideal for home decor.</p>
                <div className="flex flex-wrap gap-1.5">
                  {["300 g/m²", "Matte", "Indoor", "Max 150 cm"].map(t => <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-700/50 text-[#1A1A1E] dark:text-stone-200">{t}</span>)}
                </div>
              </div>
            </div>

            {/* 100% Cotton */}
            <div className="group bg-white dark:bg-[#1a1a20] rounded-2xl overflow-hidden border border-stone-100 dark:border-stone-700/40 shadow-sm card-lift">
              <div className="relative h-44 overflow-hidden bg-stone-100 dark:bg-stone-700/50 cursor-zoom-in">
                <img src="https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/canvas-types/canvas-cotton-100.webp" alt="100% Cotton Canvas" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute bottom-3 left-3 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ background: "linear-gradient(90deg,#F97316,#F43F5E)" }}>Premium</span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="text-base font-bold text-[#1A1A1E] dark:text-stone-100">100% Cotton Canvas</h3>
                  <div className="text-right shrink-0">
                    <div className="text-[10px] text-stone-400 uppercase tracking-wide">Price</div>
                    <div className="text-sm font-bold gradient-text">+20%</div>
                  </div>
                </div>
                <p className="text-xs text-[#6B6860] dark:text-stone-400 leading-relaxed mb-3">True gallery-quality matte cotton. Museum-grade surface for premium installations.</p>
                <div className="flex flex-wrap gap-1.5">
                  {["370 g/m²", "Premium matte", "Indoor", "Max 170 cm"].map(t => <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-700/50 text-[#1A1A1E] dark:text-stone-200">{t}</span>)}
                </div>
              </div>
            </div>
          </div>

          {/* Wallpaper group */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00B4E8]/10 dark:bg-[#00B4E8]/15">
              <svg className="w-5 h-5 text-[#00B4E8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 15l4-4 4 4 4-4 4 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1E] dark:text-stone-100">Wallpapers</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {/* PVC self-adhesive */}
            <div className="group rounded-2xl overflow-hidden border border-stone-100 dark:border-stone-700/40 shadow-sm bg-white dark:bg-[#1a1a20] card-lift cursor-zoom-in">
              <div className="relative h-56 overflow-hidden bg-stone-100 dark:bg-stone-700/50">
                <img src="https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/pvc-self-adhesive.webp" alt="Self-Adhesive PVC Film" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute right-4 bottom-4 bg-[#1A1A1E]/90 text-white px-4 py-2.5 rounded-xl backdrop-blur-sm">
                  <span className="text-xl font-black">25 €</span><small className="text-xs font-semibold block opacity-80">/m²</small>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-[#1A1A1E] dark:text-stone-100">Self-Adhesive PVC Film</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-white px-2.5 py-1 rounded-full" style={{ background: "linear-gradient(90deg,#7B2D8E,#D41B6B)" }}>With Laminate</span>
                </div>
                <p className="text-xs text-[#6B6860] dark:text-stone-400 leading-relaxed mb-3">Monomeric Self-Adhesive PVC Film with excellent print quality. Applied by overlapping 0.5–2 cm.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-700/50 text-[#1A1A1E] dark:text-stone-200">80 µm thick</span>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#7B2D8E]/10 text-[#7B2D8E]">Indoor &amp; Outdoor</span>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-700/50 text-[#1A1A1E] dark:text-stone-200">Matte (laminate)</span>
                </div>
              </div>
            </div>

            {/* HP PVC-Free */}
            <div className="group rounded-2xl overflow-hidden border border-stone-100 dark:border-stone-700/40 shadow-sm bg-white dark:bg-[#1a1a20] card-lift cursor-zoom-in">
              <div className="relative h-56 overflow-hidden bg-stone-100 dark:bg-stone-700/50">
                <img src="https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/hp-pvc-free.webp" alt="HP PVC-Free Wallpaper" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute left-4 top-4 text-white text-xs font-semibold" style={{ textShadow: "0 2px 8px rgba(0,0,0,.5)" }}>Printed with HP Latex inks</div>
                <div className="absolute right-4 bottom-4 bg-[#1A1A1E]/90 text-white px-4 py-2.5 rounded-xl backdrop-blur-sm">
                  <span className="text-xl font-black">30 €</span><small className="text-xs font-semibold block opacity-80">/m²</small>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-[#1A1A1E] dark:text-stone-100">HP PVC-Free Wallpaper</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-white px-2.5 py-1 rounded-full" style={{ background: "linear-gradient(90deg,#16A34A,#84CC16)" }}>HP Certified</span>
                </div>
                <p className="text-xs text-[#6B6860] dark:text-stone-400 leading-relaxed mb-3">Odourless, eco-certified with HP Latex inks. FSC, CE and GREENGUARD certified.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-700/50 text-[#1A1A1E] dark:text-stone-200">175 g/m²</span>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#00B4E8]/10 text-[#0277A8]">Indoor only</span>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400">FSC · CE · GREENGUARD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Fleece Collection */}
          <div className="gradient-border rounded-3xl p-8 mb-10 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(circle at 20% 50%, #7B2D8E, transparent 50%), radial-gradient(circle at 80% 50%, #00B4E8, transparent 50%)" }} />
            <div className="relative">
              <span className="inline-block text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ background: "linear-gradient(90deg,#00B4E8,#7B2D8E,#D41B6B)" }}>Vivid Walls Collection</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1E] dark:text-stone-100 mb-3">
                Premium Nonwoven{" "}
                <span style={{ background: "linear-gradient(90deg,#00B4E8,#7B2D8E,#D41B6B,#E8632A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Fleece Wallpapers
                </span>
              </h3>
              <p className="text-[#4A4A4A] dark:text-stone-400 text-sm leading-relaxed mb-5 max-w-2xl">Our flagship wallpaper series — pure white vinyl on a nonwoven fleece backing with M2 fire certification. Available in 12 unique textures across three weight classes.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#00B4E8]/10 text-[#0277A8]">Indoor</span>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-700/50 text-[#1A1A1E] dark:text-stone-200">Nonwoven / Fleece Backing</span>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-700/50 text-[#1A1A1E] dark:text-stone-200">Width: 1067 mm</span>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400">M2 Fire Certified</span>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-700/50 text-[#1A1A1E] dark:text-stone-200">Washable</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: "Standart", weight: "250 g/m²", price: "25 €", grad: "linear-gradient(90deg,#0277A8,#7B2D8E)", border: "rgba(0,180,232,.25)", bg: "linear-gradient(160deg,rgba(0,180,232,.08),rgba(0,180,232,.02))" },
                  { name: "Textures", weight: "250 g/m²", price: "30 €", grad: "linear-gradient(90deg,#7B2D8E,#D41B6B)", border: "rgba(123,45,142,.25)", bg: "linear-gradient(160deg,rgba(123,45,142,.08),rgba(123,45,142,.02))" },
                  { name: "Heavy", weight: "350 g/m²", price: "35 €", grad: "linear-gradient(90deg,#D41B6B,#E8632A)", border: "rgba(212,27,107,.25)", bg: "linear-gradient(160deg,rgba(212,27,107,.08),rgba(212,27,107,.02))" },
                  { name: "No-Scratch", weight: "450 g/m²", price: "40 €", grad: "linear-gradient(90deg,#E8632A,#D41B6B)", border: "rgba(232,99,42,.30)", bg: "linear-gradient(160deg,rgba(232,99,42,.10),rgba(232,99,42,.02))" },
                ].map((tier) => (
                  <div key={tier.name} className="rounded-2xl p-4 border" style={{ borderColor: tier.border, background: tier.bg }}>
                    <div className="text-sm font-bold text-[#1A1A1E] dark:text-stone-100">{tier.name}</div>
                    <div className="text-xs text-[#6B6860] dark:text-stone-400 mb-2">{tier.weight}</div>
                    <div className="text-2xl font-black" style={{ background: tier.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      {tier.price}<small className="text-xs font-bold">/m²</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-stone-100 dark:border-stone-800">
            {[
              { title: "B1 Fire Safety", desc: "Certified fire-retardant materials", icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></> },
              { title: "Low VOC", desc: "Safe for bedrooms & children rooms", icon: <><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></> },
              { title: "FSC Paper", desc: "Sustainably sourced substrates", icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></> },
            ].map((c) => (
              <div key={c.title} className="flex items-center gap-4 bg-white/60 dark:bg-stone-800/30 rounded-2xl p-4">
                <svg className="w-7 h-7 text-[#7B2D8E] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{c.icon}</svg>
                <div>
                  <strong className="block text-sm text-[#1A1A1E] dark:text-stone-100">{c.title}</strong>
                  <span className="text-xs text-[#6B6860] dark:text-stone-400">{c.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden reviews-section" id="reviews">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none opacity-30"
          style={{ background: "radial-gradient(circle,#7B2D8E,transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full pointer-events-none opacity-30"
          style={{ background: "radial-gradient(circle,#00B4E8,transparent 70%)", filter: "blur(80px)" }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3"
              style={{ background: "linear-gradient(90deg,#1B3A8C,#7B2D8E,#D41B6B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              ✦ Social Proof ✦
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold"
              style={{ background: "linear-gradient(135deg,#1A1A1E 0%,#1B3A8C 35%,#7B2D8E 70%,#D41B6B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              What our customers say
            </h2>
          </div>
          <div className="gradient-border rounded-3xl p-8 flex flex-wrap justify-around gap-6 text-center backdrop-blur-sm shadow-lg mb-12 bg-white/80 dark:bg-stone-900/60">
            <div>
              <div className="text-3xl sm:text-4xl font-black gradient-text">27 EU</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#6B6860] dark:text-stone-400 mt-1">Countries Served</div>
            </div>
            <div className="w-px self-stretch bg-gradient-to-b from-transparent via-[#7B2D8E]/25 to-transparent hidden sm:block" />
            <div>
              <div className="text-3xl sm:text-4xl font-black gradient-text">12+</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#6B6860] dark:text-stone-400 mt-1">Years of Craftsmanship</div>
            </div>
          </div>
          <div className="gradient-border rounded-3xl p-8 text-center max-w-lg mx-auto shadow-md bg-white/90 dark:bg-stone-900/70">
            <p className="text-[#2D2B28] dark:text-stone-300 text-sm leading-relaxed mb-5">We&apos;re collecting verified reviews — be among the first to share your experience.</p>
            <a href="https://vividhome.eu/shop/"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white text-sm font-bold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
              style={{ background: "linear-gradient(90deg,#1B3A8C,#7B2D8E,#D41B6B)" }}>
              Browse our products
            </a>
          </div>
          <div className="mt-16 text-center">
            <span className="block text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: "linear-gradient(90deg,#7B2D8E,#D41B6B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Trusted by Professionals
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              {["Interior Designers", "Hotels & Restaurants", "Architects", "Corporate Offices"].map((p) => (
                <div key={p} className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/85 dark:bg-stone-800/60 border border-stone-100 dark:border-stone-700/50 shadow-sm text-sm font-semibold text-[#2D2B28] dark:text-stone-200 hover:-translate-y-1 hover:shadow-md transition-all cursor-default">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SHIPPING / EU DELIVERY ─────────────────────── */}
      <section className="py-20 bg-white dark:bg-[#0F0F12]" id="shipping">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <svg viewBox="0 0 500 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-lg" aria-hidden="true">
                  <defs>
                    <radialGradient id="homeGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#7B2D8E" />
                      <stop offset="100%" stopColor="#D41B6B" />
                    </radialGradient>
                  </defs>
                  <path className="eu-country" d="M240 20L260 15L270 50L275 90L265 130L250 120L245 80L235 50Z" />
                  <path className="eu-country" d="M210 60L240 50L245 80L250 120L240 140L220 130L215 100L205 80Z" />
                  <path className="eu-country" d="M290 30L310 25L320 60L315 100L300 120L280 110L275 70Z" />
                  <path className="eu-country" d="M130 130L145 120L155 140L160 170L150 190L135 185L125 160Z" />
                  <path className="eu-country" d="M110 140L125 135L125 160L120 175L108 170L105 155Z" />
                  <path className="eu-country" d="M155 200L185 190L200 195L205 230L200 265L175 275L155 260L148 230Z" />
                  <path className="eu-country" d="M120 280L175 275L180 310L165 340L130 345L110 325L105 295Z" />
                  <path className="eu-country" d="M100 290L115 285L110 325L100 330L92 315Z" />
                  <path className="eu-country" d="M205 170L235 165L250 175L252 210L240 230L210 235L200 215L198 190Z" />
                  <path className="eu-country" d="M180 175L200 170L198 195L190 200L178 195Z" />
                  <path className="eu-country" d="M225 240L245 235L255 260L250 300L240 330L230 340L225 315L220 280L215 255Z" />
                  <path className="eu-country" d="M255 170L290 165L300 180L295 210L270 220L255 215L250 195Z" />
                  <path className="eu-country" d="M250 215L285 210L290 225L260 235L245 230Z" />
                  <path className="eu-country" d="M245 235L275 230L300 235L305 255L280 265L255 260L240 250Z" />
                  <path className="eu-country" d="M300 240L340 235L350 260L340 285L310 290L295 275L295 255Z" />
                  <path className="eu-country" d="M290 310L310 300L320 320L315 350L300 360L285 345L280 325Z" />
                  <path className="eu-country" d="M290 120L315 115L320 145L305 155L285 150Z" />
                  <path className="eu-home" d="M310 280L345 275L355 295L345 315L315 320L300 305L305 290Z" />
                  <line className="eu-route" x1="325" y1="295" x2="225" y2="195" />
                  <line className="eu-route" x1="325" y1="295" x2="155" y2="230" />
                  <line className="eu-route" x1="325" y1="295" x2="250" y2="120" />
                  <line className="eu-route" x1="325" y1="295" x2="305" y2="340" />
                  <circle className="eu-pin-pulse" cx="325" cy="295" r="12" />
                  <circle className="eu-pin" cx="325" cy="295" r="6" />
                </svg>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 bg-white/90 dark:bg-[#1a1a20]/90 border border-stone-100 dark:border-stone-700/50 shadow-md rounded-full px-4 py-2 text-xs font-semibold text-[#1A1A1E] dark:text-stone-100 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-[#D41B6B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  Ships from Sofia, Bulgaria
                </div>
              </div>
            </div>
            <div>
              <span className="block text-xs font-bold tracking-widest uppercase text-[#7B2D8E] mb-3">EU-Wide Delivery</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1E] dark:text-stone-100 mb-4 leading-tight">
                From Our Studio<br />to <em className="not-italic gradient-text">Your Door</em>
              </h2>
              <p className="text-[#6B6860] dark:text-stone-400 text-sm leading-relaxed mb-8">Every order is carefully handcrafted in our Sofia studio and shipped directly to you — no middlemen, no warehouses.</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { grad: "linear-gradient(135deg,#1B3A8C,#7B2D8E)", title: "Free Shipping €99+", desc: "Complimentary EU delivery on orders over €99. Tracked & insured." },
                  { grad: "linear-gradient(135deg,#7B2D8E,#D41B6B)", title: "2–5 Business Days", desc: "Express production + fast EU-wide courier via DPD & Speedy." },
                  { grad: "linear-gradient(135deg,#D41B6B,#E8632A)", title: "Secure Packaging", desc: "Corner protectors, rigid tubes and reinforced boxes." },
                  { grad: "linear-gradient(135deg,#E8632A,#1B3A8C)", title: "Satisfaction Guaranteed", desc: "14-day returns. If it's not perfect, we'll make it right." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: item.grad }}>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <strong className="block text-sm font-bold text-[#1A1A1E] dark:text-stone-100">{item.title}</strong>
                      <p className="text-xs text-[#6B6860] dark:text-stone-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://vividhome.eu/shipping-returns/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B3A8C] hover:text-[#7B2D8E] transition-colors">
                Read full Shipping &amp; Returns policy
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA + NEWSLETTER ───────────────────────────── */}
      <section className="py-20 relative overflow-hidden" id="cta"
        style={{ background: "linear-gradient(135deg,#0F172A 0%,#1B3A8C 40%,#7B2D8E 75%,#D41B6B 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle at 20% 50%,rgba(255,255,255,0.15),transparent 40%),radial-gradient(circle at 80% 50%,rgba(255,255,255,0.1),transparent 40%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
                Transform<br />Your{" "}
                <em className="not-italic" style={{ background: "linear-gradient(90deg,#FDE68A,#FCA5A5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Space</em>
              </h2>
              <p className="text-white/75 text-base leading-relaxed mb-8 max-w-md">Premium canvas prints and custom wallpapers, handcrafted in Bulgaria and delivered across Europe.</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://vividhome.eu/shop/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#1B3A8C] font-bold shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-200">
                  Shop Now
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" />
                  </svg>
                </a>
                <a href="https://vividhome.eu/about/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
                  Our Story
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-300 mb-3">Exclusive Offer</span>
              <h3 className="text-2xl font-bold text-white mb-2">Get 10% Off Your First Order</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">Get €10 off orders over €99 — early access to new collections and styling tips. Unsubscribe anytime.</p>
              <NewsletterForm />
              <p className="text-white/50 text-xs mt-3 flex items-center gap-1.5">
                <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                GDPR compliant · Unsubscribe anytime · No spam
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
