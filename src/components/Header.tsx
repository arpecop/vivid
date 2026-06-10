"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0F0F12]/95 backdrop-blur border-b border-stone-100 dark:border-stone-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="https://vividhome.eu/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://vividhome.eu/wp-content/themes/vividhome-theme/assets/images/VividHome-transparent.png"
            alt="VividHome"
            className="h-8 w-auto dark:brightness-0 dark:invert"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">

          {/* Canvas Prints with dropdown */}
          <div className="relative group">
            <a
              href="https://vividhome.eu/canvas-prints/"
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800/50 text-[#1A1A1E] dark:text-stone-100 transition-colors"
            >
              Canvas Prints
              <svg className="w-3.5 h-3.5 opacity-50" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="2 4 6 8 10 4" />
              </svg>
            </a>
            {/* Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white dark:bg-[#1a1a20] rounded-2xl shadow-2xl border border-stone-100 dark:border-stone-700/50 py-2 z-50 opacity-0 pointer-events-none -translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200">
              <div className="px-3 py-1.5">
                <div className="text-[10px] font-semibold tracking-widest uppercase text-[#7B2D8E] mb-1">Browse by Style</div>
              </div>
              <div className="space-y-0.5 px-2">
                {[
                  { label: "Abstract", href: "https://vividhome.eu/canvas-prints/abstract/", count: 137 },
                  { label: "Botanical & Floral", href: "https://vividhome.eu/canvas-prints/botanical-floral/", count: 92 },
                  { label: "Animals & Wildlife", href: "https://vividhome.eu/canvas-prints/animals-wildlife/", count: 46 },
                  { label: "Landscape & Nature", href: "https://vividhome.eu/canvas-prints/landscape-nature/", count: 34 },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800/50 text-sm text-[#1A1A1E] dark:text-stone-200 transition-colors group/item"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] text-stone-400 bg-stone-50 dark:bg-stone-700/50 px-2 py-0.5 rounded-full group-hover/item:bg-[#1B3A8C] group-hover/item:text-white transition-colors">
                      {item.count}
                    </span>
                  </a>
                ))}
              </div>
              <div className="mt-2 mx-2 pt-2 border-t border-stone-100 dark:border-stone-700/50">
                <a href="https://vividhome.eu/canvas-prints/" className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#1B3A8C] hover:text-[#7B2D8E] transition-colors">
                  View all canvas prints
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 4 10 8 6 12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Wallpapers */}
          <a href="https://vividhome.eu/wallpapers/" className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800/50 text-[#1A1A1E] dark:text-stone-100 transition-colors">
            Wallpapers
            <svg className="w-3.5 h-3.5 opacity-50" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="2 4 6 8 10 4" />
            </svg>
          </a>

          {/* Sale */}
          <a href="https://vividhome.eu/shop/?on_sale=true" className="px-3 py-2 rounded-lg font-bold text-[#D41B6B] hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors">
            Sale
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-stone-500 dark:text-stone-400 bg-stone-50 dark:bg-stone-800/50 rounded-full border border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600 transition-colors">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="hidden md:inline">Search…</span>
          </button>

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Cart */}
          <a href="https://vividhome.eu/cart/" className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-[#1A1A1E] dark:text-stone-100">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-[#1A1A1E] dark:text-stone-100"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-stone-100 dark:border-stone-800 bg-white dark:bg-[#0F0F12] px-4 py-4 space-y-1">
          <a href="https://vividhome.eu/canvas-prints/" className="block px-3 py-2.5 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800/50 font-medium text-[#1A1A1E] dark:text-stone-100">Canvas Prints</a>
          <a href="https://vividhome.eu/wallpapers/" className="block px-3 py-2.5 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800/50 font-medium text-[#1A1A1E] dark:text-stone-100">Wallpapers</a>
          <a href="https://vividhome.eu/shop/?on_sale=true" className="block px-3 py-2.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/30 font-bold text-[#D41B6B]">Sale</a>
        </div>
      )}
    </header>
  );
}
