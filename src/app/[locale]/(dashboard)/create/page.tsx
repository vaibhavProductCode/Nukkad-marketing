"use client";
import { useState } from "react";
import { MOCK_FESTIVALS, BUSINESS_TYPES } from "@/lib/constants";

const SEGMENTS = [
  { value: "all", label: "All contacts" },
  { value: "champion", label: "⭐ Champions" },
  { value: "loyal", label: "💚 Loyal" },
  { value: "at_risk", label: "⚠️ At Risk" },
  { value: "new", label: "🆕 New" },
  { value: "birthday", label: "🎂 Birthdays" },
];

const MOCK_VARIANTS = [
  {
    id: 1,
    style: "Short & Punchy",
    caption: "Navratri collection aaya hai! 🎉 New kurtis just in. Limited stock — aao jaldi!",
    captionHi: "नवरात्रि collection आया है! 🎉 New kurtis just in. Limited stock — जल्दी आओ!",
  },
  {
    id: 2,
    style: "Warm & Narrative",
    caption: "Is Navratri, apni boutique mein aaye nayi kurtis, lehengas aur accessories 🌸 Aap hamare khas customers mein se hain — pehle dekhne ka mauka sirf aapke liye. 9 din baaki hain!",
    captionHi: "इस नवरात्रि, बुटीक में आई नई kurtis, lehengas और accessories 🌸 आप हमारे खास customers में से हैं — पहले देखने का मौका सिर्फ आपके लिए।",
  },
  {
    id: 3,
    style: "CTA Heavy",
    caption: "Navratri sale shuru! 🛍️ 20% off on all ethnic wear. Kal tak ka offer. WhatsApp pe 'NAVRATRI' bhejo aur special discount pao!",
    captionHi: "नवरात्रि sale शुरू! 🛍️ सभी ethnic wear पर 20% off. कल तक का offer। WhatsApp पे 'NAVRATRI' भेजो और special discount पाओ!",
  },
];

export default function CreatePostPage() {
  const [step, setStep] = useState<"form" | "generating" | "variants" | "done">("form");
  const [form, setForm] = useState({
    festival: "navratri-2026",
    segment: "loyal",
    product: "",
    platform: "whatsapp",
  });
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);

  function generate() {
    setStep("generating");
    setTimeout(() => setStep("variants"), 2500);
  }

  function approve() {
    setStep("done");
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-800">Create Post</h1>
        <p className="text-sm text-slate-500 mt-0.5">AI generates 3 variants — you pick one, edit, and approve.</p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-6 text-xs font-semibold">
        {(["form", "generating", "variants", "done"] as const).map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            {i > 0 && <div className={`h-px w-6 ${step === "done" || (step === "variants" && i <= 2) || (step === "generating" && i <= 1) ? "bg-[#FF6B35]" : "bg-slate-200"}`} />}
            <span className={`px-2.5 py-1 rounded-full capitalize ${step === s ? "bg-[#FF6B35] text-white" : "bg-slate-100 text-slate-400"}`}>
              {["Setup", "Generating", "Choose", "Done"][i]}
            </span>
          </div>
        ))}
      </div>

      {step === "form" && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-5">
          <div>
            <label className="text-xs font-bold text-slate-600 block mb-1.5">Festival / Occasion</label>
            <select
              value={form.festival}
              onChange={(e) => setForm({ ...form, festival: e.target.value })}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]"
            >
              <option value="">No specific festival</option>
              {MOCK_FESTIVALS.map((f) => (
                <option key={f.id} value={f.id}>🎉 {f.name} — {f.daysAway} days away</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 block mb-1.5">Target Segment</label>
            <div className="grid grid-cols-3 gap-2">
              {SEGMENTS.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setForm({ ...form, segment: s.value })}
                  className={`text-xs px-3 py-2.5 rounded-xl border font-medium transition-all ${
                    form.segment === s.value
                      ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]"
                      : "border-slate-200 text-slate-600 hover:border-[#FF6B35]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 block mb-1.5">Platform</label>
            <div className="flex gap-2">
              {["whatsapp", "instagram", "facebook"].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setForm({ ...form, platform: p })}
                  className={`flex-1 text-xs py-2.5 rounded-xl border font-medium capitalize transition-all ${
                    form.platform === p
                      ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  {p === "whatsapp" ? "💬" : p === "instagram" ? "📸" : "👥"} {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 block mb-1.5">Product / Offer (optional)</label>
            <input
              placeholder="e.g. new kurta collection, 20% Navratri sale..."
              value={form.product}
              onChange={(e) => setForm({ ...form, product: e.target.value })}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]"
            />
          </div>

          <button
            onClick={generate}
            className="w-full bg-[#FF6B35] text-white font-bold py-3 rounded-xl hover:bg-[#e85520] transition-all text-sm"
          >
            ✨ Generate with AI →
          </button>
        </div>
      )}

      {step === "generating" && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center">
          <div className="text-5xl mb-4 animate-bounce">✨</div>
          <p className="text-lg font-black text-slate-800 mb-2">Generating your posts...</p>
          <p className="text-sm text-slate-500">AI is writing Navratri captions for your loyal customers in Indore</p>
          <div className="mt-6 flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-2 h-2 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      )}

      {step === "variants" && (
        <div className="space-y-4">
          <p className="text-sm text-slate-500 font-medium">Choose the best variant for your boutique:</p>
          {MOCK_VARIANTS.map((v) => (
            <div
              key={v.id}
              onClick={() => setSelectedVariant(v.id)}
              className={`bg-white rounded-2xl border p-5 cursor-pointer transition-all ${
                selectedVariant === v.id
                  ? "border-[#FF6B35] shadow-md ring-2 ring-[#FF6B35]/20"
                  : "border-slate-200 hover:border-[#FF6B35]/40 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{v.style}</span>
                {selectedVariant === v.id && (
                  <span className="text-xs font-bold bg-[#FF6B35] text-white px-3 py-1 rounded-full">Selected ✓</span>
                )}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{v.caption}</p>
              <p className="text-xs text-slate-400 italic mt-2">{v.captionHi}</p>
            </div>
          ))}

          {selectedVariant && (
            <div className="flex gap-3 pt-2">
              <button
                onClick={approve}
                className="flex-1 bg-[#FF6B35] text-white font-bold py-3 rounded-xl hover:bg-[#e85520] transition-all text-sm"
              >
                ✓ Approve & Schedule
              </button>
              <button
                className="bg-slate-100 text-slate-700 font-semibold py-3 px-5 rounded-xl hover:bg-slate-200 transition-all text-sm"
              >
                ✏️ Edit
              </button>
            </div>
          )}
        </div>
      )}

      {step === "done" && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center">
          <div className="text-5xl mb-4">🎉</div>
          <p className="text-lg font-black text-slate-800 mb-2">Post approved!</p>
          <p className="text-sm text-slate-500 mb-6">
            Scheduled for <strong>Sep 25 at 6:00 PM</strong> — 7 days before Navratri.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setStep("form")}
              className="bg-[#FF6B35] text-white font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-[#e85520] transition-all"
            >
              Create another →
            </button>
            <a href="./calendar" className="bg-slate-100 text-slate-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-slate-200 transition-all">
              View calendar
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
