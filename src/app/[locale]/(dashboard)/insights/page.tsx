export default function InsightsPage() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-5">
        <h1 className="text-xl font-black text-slate-800">Hafta</h1>
        <p className="text-sm text-slate-500 mt-0.5">Sep 18 – 24, 2026</p>
      </div>

      {/* Main achievement card — one card, achievement-framed */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-4 text-center">
        <div className="text-5xl mb-3">🎉</div>
        <p className="text-lg font-black text-slate-800 leading-snug">
          Is hafte: <span className="text-[#FF6B35]">3 posts</span> ✓ · <span className="text-[#FF6B35]">87 customers</span> tak pahunche · <span className="text-[#FF6B35]">6</span> ne reply kiya 🎊
        </p>
        <p className="text-sm text-slate-500 mt-2">Aapki marketing — done.</p>
      </div>

      {/* Streak */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#c0392b] rounded-2xl p-5 text-white mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange-200">Posting Streak</p>
          <p className="text-3xl font-black mt-1">🔥 4 hafte</p>
          <p className="text-sm text-orange-100 mt-0.5">Har hafte post kiya — waah!</p>
        </div>
        <div className="text-6xl opacity-20">🔥</div>
      </div>

      {/* Top post — image-first */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-4">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">⭐ Sabse zyada pasand kiya gaya</p>
        <div
          className="w-full rounded-xl flex items-center justify-center text-white text-3xl font-black mb-3"
          style={{ height: 140, background: "linear-gradient(135deg, #FF6B35, #c0392b)" }}
        >
          🎉
        </div>
        <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-sm px-4 py-3 inline-block max-w-full mb-2">
          <p className="text-sm text-slate-800 leading-relaxed">
            Garba night ki taiyari? 💃 Grab your outfit from us — special Navratri prices only this week!
          </p>
          <p className="text-[10px] text-slate-400 text-right mt-1">6:00 PM ✓✓</p>
        </div>
        <div className="flex gap-4 mt-2 text-xs text-slate-500 font-medium">
          <span>📸 312 tak pahuncha</span>
          <span>❤️ 28 ne save kiya</span>
          <span>💬 6 replies</span>
        </div>
      </div>

      {/* Upcoming opportunity nudge */}
      <div className="bg-[#fff1eb] rounded-2xl border border-orange-100 p-5">
        <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-1">Agla mauka</p>
        <p className="text-sm font-bold text-slate-800">🎉 Navratri 8 din mein — aapke boutique ka sabse bada tyohaar</p>
        <p className="text-sm text-slate-600 mt-1">
          Pichhle saal: jo boutiques ne <strong>7 din pehle post kiya</strong> unhe <strong>3.2x zyada WhatsApp replies</strong> mile.
        </p>
        <button className="mt-3 w-full bg-[#FF6B35] text-white font-black text-sm py-3 rounded-xl hover:bg-[#e85520] transition-all">
          Navratri posts plan karo →
        </button>
      </div>
    </div>
  );
}
