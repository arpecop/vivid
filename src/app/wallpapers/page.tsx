import PromoBar from "@/components/PromoBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "./FaqAccordion";
import PriceCalculator from "./PriceCalculator";

export const metadata = {
  title: "Custom Wallpapers — VividHome",
  description: "Premium custom wallpapers printed on fleece, PVC-free and self-adhesive materials. Made to measure, shipped EU-wide.",
};

const textures = [
  { name: "Understated 250", weight: "250 g/m²", price: "25 €", img: "https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/hp-pvc-free.webp" },
  { name: "Crisp 250", weight: "250 g/m²", price: "25 €", img: "https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/pvc-self-adhesive.webp" },
  { name: "Fantasi 250", weight: "250 g/m²", price: "30 €", img: "https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/hp-pvc-free.webp" },
  { name: "Lazurite 250", weight: "250 g/m²", price: "30 €", img: "https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/pvc-self-adhesive.webp" },
  { name: "Pinnacle 250", weight: "250 g/m²", price: "30 €", img: "https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/hp-pvc-free.webp" },
  { name: "Velvet 350", weight: "350 g/m²", price: "35 €", img: "https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/pvc-self-adhesive.webp" },
  { name: "Ryse 350", weight: "350 g/m²", price: "35 €", img: "https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/hp-pvc-free.webp" },
  { name: "Sculpt 350", weight: "350 g/m²", price: "35 €", img: "https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/pvc-self-adhesive.webp" },
  { name: "Indigo 350", weight: "350 g/m²", price: "35 €", img: "https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/hp-pvc-free.webp" },
  { name: "Tasman 450", weight: "450 g/m²", price: "40 €", img: "https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/pvc-self-adhesive.webp" },
  { name: "Forge 450", weight: "450 g/m²", price: "40 €", img: "https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/hp-pvc-free.webp" },
  { name: "Zenith 450", weight: "450 g/m²", price: "40 €", img: "https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/pvc-self-adhesive.webp" },
];

const installSteps = [
  { n: "01", title: "Prepare Your Wall", desc: "Clean the surface and remove old wallpaper. Fill holes with filler and sand smooth. Apply primer if the wall is new or very porous." },
  { n: "02", title: "Measure & Cut", desc: "Measure wall height and cut strips with 5 cm extra top and bottom. Number each strip in order to keep the pattern aligned." },
  { n: "03", title: "Apply Paste or Peel", desc: "For fleece wallpapers, apply paste directly to the wall (paste-the-wall method). For self-adhesive PVC, simply peel the backing and press." },
  { n: "04", title: "Hang & Smooth", desc: "Align the first strip with a plumb line. Use a smoothing brush or plastic spatula to push out air bubbles from the centre outward." },
  { n: "05", title: "Trim & Finish", desc: "Trim excess at the top and bottom with a sharp knife. Wipe seams and clean any paste residue with a damp cloth before it dries." },
];

export default function WallpapersPage() {
  return (
    <>
      <PromoBar />
      <Header />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(165deg,#0a0a14 0%,#12102a 35%,#1a1030 70%,#0f0f18 100%)", minHeight: 380 }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-25"
          style={{ background: "radial-gradient(ellipse at 60% 100%,#7B2D8E,transparent 55%), radial-gradient(ellipse at 20% 60%,#1B3A8C,transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 text-stone-200/60"
            style={{ background: "rgba(226,232,240,0.07)", border: "1px solid rgba(226,232,240,0.1)" }}>
            Made to Measure · EU-Wide Delivery
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-200 mb-5 leading-tight">
            Custom Wallpapers
          </h1>
          <p className="text-stone-200/55 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Transform any wall with premium-grade wallpapers printed on FSC-certified fleece, eco PVC-free, or self-adhesive film. Your design, your dimensions — handcrafted in Bulgaria.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold">
            {["25 – 40 €/m²", "12 Fleece Textures", "FSC & GREENGUARD Certified", "M2 Fire Rated"].map(s => (
              <span key={s} className="px-4 py-2 rounded-full text-stone-200/70"
                style={{ background: "rgba(226,232,240,0.07)", border: "1px solid rgba(226,232,240,0.1)" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wallpapers for Your Space ─────────────────────── */}
      <section className="py-16 bg-white dark:bg-[#0F0F12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="block text-xs font-bold tracking-widest uppercase text-[#7B2D8E] mb-2">Materials</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1E] dark:text-stone-100">Wallpapers Made <em className="not-italic gradient-text">Exactly for Your Space</em></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {/* Self-Adhesive PVC */}
            <div className="group rounded-2xl overflow-hidden border border-stone-100 dark:border-stone-700/40 bg-white dark:bg-[#1a1a20] shadow-sm card-lift">
              <div className="relative h-64 overflow-hidden bg-stone-100 dark:bg-stone-700/50">
                <img src="https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/pvc-self-adhesive.webp" alt="Self-Adhesive PVC Film" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute right-4 bottom-4 bg-[#1A1A1E]/90 text-stone-200 px-4 py-2.5 rounded-xl backdrop-blur-sm">
                  <span className="text-2xl font-black">25 €</span><small className="text-xs font-semibold block opacity-75">/m²</small>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-[#1A1A1E] dark:text-stone-100">Self-Adhesive PVC Film</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-stone-200 px-2.5 py-1 rounded-full" style={{ background: "linear-gradient(90deg,#7B2D8E,#D41B6B)" }}>With Laminate</span>
                </div>
                <p className="text-sm text-[#6B6860] dark:text-stone-400 leading-relaxed mb-4">Peel-and-stick monomeric PVC film. No paste, no mess — ideal for renters, accent walls, or temporary installs. Includes matte laminate for durability.</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["80 µm thick", "Matte laminate", "Indoor & Outdoor", "Repositionable"].map(t => (
                    <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-700/50 text-[#1A1A1E] dark:text-stone-200">{t}</span>
                  ))}
                </div>
                <a href="https://vividhome.eu/contact/" className="inline-flex items-center justify-center w-full py-3 rounded-2xl text-stone-200 font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg" style={{ background: "linear-gradient(95deg,#1B3A8C,#7B2D8E)" }}>
                  Order Custom PVC Film
                </a>
              </div>
            </div>

            {/* HP PVC-Free */}
            <div className="group rounded-2xl overflow-hidden border border-stone-100 dark:border-stone-700/40 bg-white dark:bg-[#1a1a20] shadow-sm card-lift">
              <div className="relative h-64 overflow-hidden bg-stone-100 dark:bg-stone-700/50">
                <img src="https://vividhome.eu/wp-content/themes/vividhome-theme/assets/img/wallpaper-textures/hp-pvc-free.webp" alt="HP PVC-Free Wallpaper" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute left-4 top-4 text-stone-200 text-xs font-semibold drop-shadow-md">Printed with HP Latex inks</div>
                <div className="absolute right-4 bottom-4 bg-[#1A1A1E]/90 text-stone-200 px-4 py-2.5 rounded-xl backdrop-blur-sm">
                  <span className="text-2xl font-black">30 €</span><small className="text-xs font-semibold block opacity-75">/m²</small>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-[#1A1A1E] dark:text-stone-100">HP PVC-Free Wallpaper</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-stone-200 px-2.5 py-1 rounded-full" style={{ background: "linear-gradient(90deg,#16A34A,#84CC16)" }}>HP Certified</span>
                </div>
                <p className="text-sm text-[#6B6860] dark:text-stone-400 leading-relaxed mb-4">Eco-certified, odourless HP Latex print on PVC-free substrate. FSC, CE and GREENGUARD Gold certified. Safe for bedrooms, nurseries, and hospitality spaces.</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["175 g/m²", "Indoor only", "FSC · CE", "GREENGUARD Gold"].map(t => (
                    <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-700/50 text-[#1A1A1E] dark:text-stone-200">{t}</span>
                  ))}
                </div>
                <a href="https://vividhome.eu/contact/" className="inline-flex items-center justify-center w-full py-3 rounded-2xl text-stone-200 font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg" style={{ background: "linear-gradient(95deg,#16A34A,#0277A8)" }}>
                  Order HP PVC-Free
                </a>
              </div>
            </div>
          </div>

          {/* Premium Fleece */}
          <div className="gradient-border rounded-3xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: "radial-gradient(circle at 15% 50%,#7B2D8E,transparent 50%),radial-gradient(circle at 85% 50%,#00B4E8,transparent 50%)" }} />
            <div className="relative">
              <span className="inline-block text-stone-200 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4" style={{ background: "linear-gradient(90deg,#00B4E8,#7B2D8E,#D41B6B)" }}>Vivid Walls Collection</span>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1E] dark:text-stone-100">
                    Premium Nonwoven{" "}
                    <span style={{ background: "linear-gradient(90deg,#00B4E8,#7B2D8E,#D41B6B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Fleece Wallpapers</span>
                  </h2>
                  <p className="text-sm text-[#6B6860] dark:text-stone-400 mt-2 max-w-xl">Pure white vinyl on nonwoven fleece backing with M2 fire certification. Paste-the-wall application. Available in 12 textures across three weight classes.</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Indoor", "1067 mm wide", "M2 Fire Cert.", "Washable"].map(t => (
                    <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-700/50 text-[#1A1A1E] dark:text-stone-200">{t}</span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: "Standard", weight: "250 g/m²", price: "25 €", grad: "linear-gradient(90deg,#0277A8,#7B2D8E)", border: "rgba(0,180,232,.25)", bg: "linear-gradient(160deg,rgba(0,180,232,.08),rgba(0,180,232,.02))" },
                  { name: "Textures", weight: "250 g/m²", price: "30 €", grad: "linear-gradient(90deg,#7B2D8E,#D41B6B)", border: "rgba(123,45,142,.25)", bg: "linear-gradient(160deg,rgba(123,45,142,.08),rgba(123,45,142,.02))" },
                  { name: "Heavy", weight: "350 g/m²", price: "35 €", grad: "linear-gradient(90deg,#D41B6B,#E8632A)", border: "rgba(212,27,107,.25)", bg: "linear-gradient(160deg,rgba(212,27,107,.08),rgba(212,27,107,.02))" },
                  { name: "No-Scratch", weight: "450 g/m²", price: "40 €", grad: "linear-gradient(90deg,#E8632A,#D41B6B)", border: "rgba(232,99,42,.30)", bg: "linear-gradient(160deg,rgba(232,99,42,.10),rgba(232,99,42,.02))" },
                ].map(tier => (
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
        </div>
      </section>

      {/* ── Texture Grid ─────────────────────────────────── */}
      <section className="py-16 bg-[#F5F5F3] dark:bg-[#111118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="block text-xs font-bold tracking-widest uppercase text-[#7B2D8E] mb-2">Fleece Collection</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1E] dark:text-stone-100">A Universe of <em className="not-italic gradient-text">Texture</em></h2>
            <p className="text-sm text-[#6B6860] dark:text-stone-400 mt-2">12 unique surface finishes — from smooth matte to deep embossed structures.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {textures.map(t => (
              <div key={t.name} className="group bg-white dark:bg-[#1a1a20] rounded-2xl overflow-hidden border border-stone-100 dark:border-stone-700/40 shadow-sm card-lift cursor-pointer">
                <div className="relative h-36 overflow-hidden bg-stone-100 dark:bg-stone-700/50">
                  <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-3.5">
                  <p className="text-sm font-bold text-[#1A1A1E] dark:text-stone-100 leading-snug">{t.name}</p>
                  <p className="text-[10px] text-stone-400 mt-0.5">{t.weight}</p>
                  <p className="text-sm font-black gradient-text mt-1">{t.price}<small className="text-[10px] font-normal text-stone-400">/m²</small></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price Calculator ──────────────────────────────── */}
      <section className="py-16 bg-[#0F0F12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="block text-xs font-bold tracking-widest uppercase text-[#7B2D8E] mb-2">Instant Estimate</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-200">Calculate Your <em className="not-italic gradient-text">Wallpaper Price</em></h2>
            <p className="text-sm text-stone-400 mt-2">Enter your wall dimensions and material to get an instant price estimate.</p>
          </div>
          <PriceCalculator />
          <div className="mt-8 text-center">
            <a href="https://vividhome.eu/contact/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-stone-200 font-bold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
              style={{ background: "linear-gradient(135deg,#1B3A8C,#7B2D8E,#D41B6B)" }}>
              Request a Custom Quote
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-[#0F0F12]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="block text-xs font-bold tracking-widest uppercase text-[#7B2D8E] mb-2">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1E] dark:text-stone-100">Frequently Asked Questions<br /><em className="not-italic gradient-text">About Custom Wallpapers</em></h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ── How to Install ────────────────────────────────── */}
      <section className="py-16 bg-[#F5F5F3] dark:bg-[#111118]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="block text-xs font-bold tracking-widest uppercase text-[#7B2D8E] mb-2">Step by Step</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1E] dark:text-stone-100">How to Install<br /><em className="not-italic gradient-text">Your Wallpaper</em></h2>
          </div>
          <div className="space-y-6">
            {installSteps.map(step => (
              <div key={step.n} className="flex gap-5 items-start bg-white dark:bg-[#1a1a20] rounded-2xl p-5 border border-stone-100 dark:border-stone-700/40 shadow-sm">
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-stone-200 font-black text-base"
                  style={{ background: "linear-gradient(135deg,#1B3A8C,#7B2D8E)" }}>{step.n}</div>
                <div>
                  <h3 className="font-bold text-[#1A1A1E] dark:text-stone-100 mb-1">{step.title}</h3>
                  <p className="text-sm text-[#6B6860] dark:text-stone-400 leading-relaxed">{step.desc}</p>
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
