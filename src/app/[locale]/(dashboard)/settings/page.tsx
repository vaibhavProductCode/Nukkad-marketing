"use client";
import { useState } from "react";
import { SUPPORTED_LOCALES, BUSINESS_TYPES } from "@/lib/constants";

const COLORS = ["#FF6B35", "#E91E63", "#9C27B0", "#2196F3", "#00BCD4", "#16a34a", "#FF9800", "#795548"];

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    businessName: "Priya Boutique",
    businessType: "boutique",
    city: "Indore",
    state: "Madhya Pradesh",
    instagram: "@priya.boutique.indore",
    language: "hi",
    brandColor: "#FF6B35",
    plan: "free",
  });
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-5">
        <h1 className="text-xl font-black text-slate-800">Settings</h1>
        <p className="text-sm text-slate-500 mt-0.5">Aapka business profile aur preferences</p>
      </div>

      <div className="space-y-4">
        {/* Business profile */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h2 className="text-sm font-black text-slate-800 mb-4">Business Profile</h2>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">Business ka naam</label>
              <input value={profile.businessName} onChange={(e) => setProfile({ ...profile, businessName: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#fff9f2] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">Business ka type</label>
              <select value={profile.businessType} onChange={(e) => setProfile({ ...profile, businessType: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#fff9f2] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]">
                {BUSINESS_TYPES.map((bt) => <option key={bt.value} value={bt.value}>{bt.label}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">Sheher</label>
                <input value={profile.city} onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#fff9f2] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">Rajya</label>
                <input value={profile.state} onChange={(e) => setProfile({ ...profile, state: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#fff9f2] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]" />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">Instagram handle</label>
              <input value={profile.instagram} onChange={(e) => setProfile({ ...profile, instagram: e.target.value })}
                placeholder="@aapkaboutique"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#fff9f2] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]" />
            </div>
          </div>
        </div>

        {/* Language / भाषा */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h2 className="text-sm font-black text-slate-800 mb-1">भाषा / Language</h2>
          <p className="text-xs text-slate-400 mb-3">App ki poori language badal jaegi</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SUPPORTED_LOCALES.map((l) => (
              <button key={l.code} type="button" onClick={() => setProfile({ ...profile, language: l.code })}
                className={`text-sm px-4 py-3 rounded-xl border font-medium transition-all ${
                  profile.language === l.code
                    ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]"
                    : "border-slate-200 text-slate-700 hover:border-[#FF6B35]/50"
                }`}>
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Brand color */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h2 className="text-sm font-black text-slate-800 mb-3">Brand Color</h2>
          <div className="flex flex-wrap gap-3 mb-4">
            {COLORS.map((c) => (
              <button key={c} type="button" onClick={() => setProfile({ ...profile, brandColor: c })}
                className={`w-10 h-10 rounded-full border-4 transition-all ${profile.brandColor === c ? "border-slate-800 scale-110" : "border-white shadow"}`}
                style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: profile.brandColor }}>
            Preview — {profile.businessName}
          </div>
        </div>

        {/* Plan */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-black text-slate-800">Aapka Plan</h2>
              <p className="text-xs text-slate-500 mt-0.5">Abhi: <strong>Nukkad Free</strong></p>
            </div>
            <button className="bg-[#FF6B35] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#e85520] transition-all">
              Starter ₹399/mahine
            </button>
          </div>
          <div className="mt-3 bg-[#fff9f2] rounded-xl p-3 text-xs text-slate-500">
            Free plan: 5 AI posts/mahine · Festival planner (30 din) · Basic contacts list
          </div>
        </div>

        {/* Privacy — DPDP compliance */}
        <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5">
          <h2 className="text-sm font-bold text-slate-600 mb-1">Privacy & Data</h2>
          <p className="text-xs text-slate-400 mb-1">🔒 Chats kabhi store nahi hoti. Phone numbers encrypted hain. Data India mein (AWS Mumbai) rakha jaata hai.</p>
          <p className="text-xs text-slate-400 mb-3">Connected apps / Help WhatsApp pe milega.</p>
          <button className="text-xs text-red-500 font-semibold hover:underline">
            Mera data delete karein (ek tap + confirm)
          </button>
        </div>

        <button onClick={save}
          className={`w-full py-4 rounded-2xl font-black text-sm transition-all ${saved ? "bg-[#16a34a] text-white" : "bg-[#FF6B35] text-white hover:bg-[#e85520]"}`}>
          {saved ? "✓ Save ho gaya!" : "Save Karein"}
        </button>
      </div>
    </div>
  );
}
