"use client";
import { useState } from "react";
import { MOCK_FESTIVALS, MOCK_POSTS } from "@/lib/constants";
import Link from "next/link";

export default function DashboardPage() {
  const [postState, setPostState] = useState<"pending" | "approved" | "skipped">("pending");
  const [showCelebration, setShowCelebration] = useState(false);

  const nextFestival = MOCK_FESTIVALS[0];
  const suggestedPost = MOCK_POSTS[0];

  function handleApprove() {
    setShowCelebration(true);
    setPostState("approved");
    setTimeout(() => setShowCelebration(false), 2000);
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {/* Header row */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Namaste,</p>
          <h1 className="text-xl font-black text-slate-800">Priya Boutique 👋</h1>
        </div>
        {/* Streak badge */}
        <div className="flex items-center gap-1.5 bg-[#fff1eb] px-3 py-2 rounded-xl border border-orange-100">
          <span className="text-base">🔥</span>
          <div>
            <p className="text-xs font-black text-[#FF6B35] leading-none">4 hafte ki streak!</p>
            <p className="text-[10px] text-orange-400 mt-0.5">Chalte raho</p>
          </div>
        </div>
      </div>

      {/* Festival countdown strip — shown ≤14 days before festival */}
      <div
        className="rounded-2xl p-4 mb-4 text-white flex items-center justify-between gap-3"
        style={{ background: `linear-gradient(135deg, ${nextFestival.palette[0]}, ${nextFestival.palette[1] || "#c0392b"})` }}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-widest opacity-80">त्योहार आ रहा है</p>
          <p className="text-lg font-black mt-0.5">
            {nextFestival.nameHi} — {nextFestival.daysAway} din mein
          </p>
          <p className="text-xs opacity-80 mt-0.5">
            {nextFestival.suggestedPosts} posts ready hain aapke liye
          </p>
        </div>
        <Link
          href="./calendar"
          className="bg-white/20 border border-white/40 text-white font-bold text-xs px-4 py-2 rounded-xl whitespace-nowrap hover:bg-white/30 transition-all"
        >
          Dekho →
        </Link>
      </div>

      {/* Today's suggested post card — HERO of the screen */}
      {postState === "pending" && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-4">
          <div className="px-4 pt-4 pb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Aaj ka suggested post</p>
          </div>
          {/* Image-first card */}
          <div
            className="mx-4 rounded-xl flex items-center justify-center text-white text-4xl font-black"
            style={{ height: 180, backgroundColor: suggestedPost.imageColor }}
          >
            🎉
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-orange-100 text-[#FF6B35] font-bold px-2 py-0.5 rounded-full">
                {nextFestival.nameHi}
              </span>
              <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full capitalize">
                {suggestedPost.platform}
              </span>
            </div>
            {/* WhatsApp-style message bubble preview */}
            <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-sm px-4 py-3 mb-1 inline-block max-w-full">
              <p className="text-sm text-slate-800 leading-relaxed">{suggestedPost.caption}</p>
              <p className="text-[10px] text-slate-400 text-right mt-1">6:00 PM ✓✓</p>
            </div>
            <p className="text-xs text-slate-400 italic mb-4">{suggestedPost.captionHi}</p>

            {/* Action buttons — Approve dominant, bottom of card */}
            <div className="flex gap-2">
              <button
                onClick={handleApprove}
                className="flex-1 bg-[#16a34a] text-white font-black py-3 rounded-xl text-sm hover:bg-[#15803d] transition-all shadow-sm shadow-green-200"
              >
                ✓ Approve Karein
              </button>
              <button className="bg-slate-100 text-slate-700 font-semibold py-3 px-4 rounded-xl text-sm hover:bg-slate-200 transition-all">
                ✏️ Badlein
              </button>
              <button className="text-slate-400 text-sm py-3 px-3 rounded-xl hover:bg-slate-100 transition-all">
                Skip
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Celebration state after approval */}
      {postState === "approved" && (
        <div className="bg-white rounded-2xl border border-green-100 shadow-sm p-6 mb-4 text-center">
          <div className={`text-4xl mb-2 ${showCelebration ? "animate-bounce" : ""}`}>🎉</div>
          <p className="font-black text-slate-800">Post approve ho gaya!</p>
          <p className="text-sm text-slate-500 mt-1">Aaj shaam 6 baje bheja jaega 📲</p>
          <button
            onClick={() => setPostState("pending")}
            className="mt-3 text-xs text-[#FF6B35] font-semibold"
          >
            Aur posts dekho →
          </button>
        </div>
      )}

      {/* Skipped state */}
      {postState === "skipped" && (
        <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5 mb-4 text-center">
          <p className="text-sm text-slate-500">Koi baat nahi — kal phir koshish karein 🙂</p>
          <button onClick={() => setPostState("pending")} className="mt-2 text-xs text-[#FF6B35] font-semibold">
            Wapas dekho
          </button>
        </div>
      )}

      {/* Broadcast nudge — conditional (shown when segment not contacted 21+ days) */}
      <div className="bg-white rounded-2xl border border-green-100 shadow-sm p-4 mb-4">
        <div className="flex items-start gap-3">
          <span className="text-xl mt-0.5">💬</span>
          <div className="flex-1">
            <p className="text-sm font-bold text-slate-800">Aapke 45 loyal customers ko 3 hafte se message nahi gaya.</p>
            <p className="text-sm text-slate-500 mt-0.5">Bhejein? [Preview] [Send]</p>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <Link
            href="./crm"
            className="flex-1 text-center bg-[#16a34a] text-white font-bold text-sm py-2.5 rounded-xl hover:bg-[#15803d] transition-all"
          >
            Message Bhejein
          </Link>
          <button className="bg-slate-100 text-slate-600 text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-slate-200 transition-all">
            Preview
          </button>
        </div>
      </div>

      {/* Quick stats row — 3 numbers, no charts */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { value: "3", label: "Posts is hafte" },
          { value: "89", label: "Customers tak pahunche" },
          { value: "12", label: "Replies aaye" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm text-center">
            <p className="text-2xl font-black text-slate-800">{s.value}</p>
            <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
