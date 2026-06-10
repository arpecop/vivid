"use client";

export default function NewsletterForm() {
  return (
    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Your email address"
          required
          className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-white text-[#1B3A8C] font-bold text-sm shrink-0 hover:bg-white/90 transition-colors"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
