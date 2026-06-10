import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F12] text-stone-400 pt-14 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="https://vividhome.eu/" className="inline-block mb-4">
              <img
                src="https://vividhome.eu/wp-content/themes/vividhome-theme/assets/images/VividHome-transparent.png"
                alt="VividHome"
                className="h-8 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-sm leading-relaxed text-stone-500">
              Premium canvas prints and designer wallpapers for modern European homes. Handcrafted in Bulgaria, shipped across the EU.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Shop</h4>
            <nav className="space-y-2.5 text-sm">
              <Link href="/canvas-prints" className="block hover:text-white transition-colors">Canvas Prints</Link>
              <a href="https://vividhome.eu/wallpapers/" className="block hover:text-white transition-colors">Wallpapers</a>
              <a href="https://vividhome.eu/new-arrivals/" className="block hover:text-white transition-colors">New Arrivals</a>
              <a href="https://vividhome.eu/shop/?orderby=popularity" className="block hover:text-white transition-colors">Bestsellers</a>
              <a href="https://vividhome.eu/contact/" className="block hover:text-white transition-colors">Custom Orders</a>
            </nav>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Information</h4>
            <nav className="space-y-2.5 text-sm">
              <a href="https://vividhome.eu/faq/" className="block hover:text-white transition-colors">FAQ</a>
              <a href="https://vividhome.eu/about/" className="block hover:text-white transition-colors">About Us</a>
              <a href="https://vividhome.eu/contact/" className="block hover:text-white transition-colors">Contact Us</a>
              <a href="https://vividhome.eu/return-refund-policy/" className="block hover:text-white transition-colors">Returns &amp; Refunds</a>
              <a href="https://vividhome.eu/delivery-information/" className="block hover:text-white transition-colors">Delivery Information</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#7B2D8E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:hello@vividhome.eu" className="hover:text-white transition-colors">hello@vividhome.eu</a>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#7B2D8E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 21 16.92z" />
                </svg>
                <a href="tel:+359883335778" className="hover:text-white transition-colors">+359 883 335 778</a>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#7B2D8E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>Sofia, Bulgaria</span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#7B2D8E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Mon–Fri, 9:00–18:00 EET</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment icons */}
        <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-stone-800">
          {["Visa", "MC", "Amex", "PayPal", "Apple Pay", "G Pay"].map((p) => (
            <div key={p} className="px-3 py-1.5 bg-stone-800 rounded text-xs font-bold text-stone-300">{p}</div>
          ))}
        </div>

        <p className="text-stone-600 text-xs mb-4">Vivid International Srl · CUI 48711172 · Reg. J12/3651/2023</p>

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
          <span>© 2026 VividHome™ — All rights reserved</span>
          <span>Made with <span className="text-[#D41B6B]">♥</span> in Sofia, Bulgaria</span>
          <div className="flex gap-4">
            <a href="https://vividhome.eu/privacy-policy/" className="hover:text-stone-400 transition-colors">Privacy</a>
            <a href="https://vividhome.eu/terms-and-conditions/" className="hover:text-stone-400 transition-colors">Terms</a>
            <a href="https://vividhome.eu/cookie-policy/" className="hover:text-stone-400 transition-colors">Cookies</a>
            <a href="https://vividhome.eu/return-refund-policy/" className="hover:text-stone-400 transition-colors">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
