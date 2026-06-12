"use client";
import { useState } from "react";
import { MOCK_FESTIVALS } from "@/lib/constants";

const SEGMENTS = [
  { value: "all", label: "Sab customers" },
  { value: "champion", label: "⭐ Champions" },
  { value: "loyal", label: "💚 Loyal" },
  { value: "at_risk", label: "⚠️ Wapas Laao" },
  { value: "new", label: "🆕 Naye" },
  { value: "birthday", label: "🎂 Birthday" },
];

const MOCK_VARIANTS = [
  {
    id: 1,
    style: "Chhota & catchy",
    caption: "Navratri collection aaya hai! 🎉 New kurtis just in. Limited stock — aao jaldi!",
    captionHi: "नवरात्रि collection आया है! 🎉 जल्दी आओ!",
  },
  {
    id: 2,
    style: "Thodi kahani",
    caption: "Is Navratri, apni boutique mein aaye nayi kurtis, lehengas aur accessories 🌸 Aap hamare khas customers mein se hain — pehle dekhne ka mauka sirf aapke liye. 9 din baaki hain!",
    captionHi: "इस नवरात्रि, बुटीक में आई नई kurtis 🌸 आप हमारे खास customers हैं।",
  },
  {
    id: 3,
    style: "Seedha offer",
    caption: "Navratri sale shuru! 🛍️ 20% off on all ethnic wear. Kal tak ka offer. WhatsApp pe 'NAVRATRI' bhejo aur special discount pao!",
    captionHi: "नवरात्रि sale शुरू! 🛍️ 20% off। कल तक का offer।",
  },
];

export default function CreatePostPage() {
  const [step, setStep] = useState<"form" | "generating" | "variants" | "schedule" | "done">("form");
  const [form, setForm] = useState({ festival: "navratri-2026", segment: "loyal", product: "", platform: "whatsapp" });
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);
  const [scheduleTime, setScheduleTime] = useState("Aaj shaam 6 baje");

  function generate() {
    setStep("generating");
    setTimeout(() => setStep("variants"), 2200);
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-5">
        <h1 className="text-xl font-black text-slate-800">Post Banao</h1>
        <p className="text-sm text-slate-500 mt-0.5">AI drafts, aap decide karo.</p>
      </div>

      {/* Progress dots */}
      <div className="flex items-center gap-2 mb-5 justify-center">
        {(["form", "generating", "variants", "done"] as const).map((s, i) => (
          <div
            key={s}
            className={`rounded-full transition-all ${
              step === s ? "w-5 h-2 bg-[#FF6B35]" : i < ["form","generating","variants","schedule","done"].indexOf(step) ? "w-2 h-2 bg-[#FF6B35]" : "w-2 h-2 bg-slate-200"
            }`}
          />
        ))}
      </div>

      {step === "form" && (
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-600 block mb-2">Kaun sa tyohaar?</label>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setForm({ ...form, festival: "" })}
                className={`text-xs px-3 py-2 rounded-xl border font-medium transition-all ${!form.festival ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]" : "border-slate-200 text-slate-600"}`}>
                Koi khaas mauka nahi
              </button>
              {MOCK_FESTIVALS.map((f) => (
                <button key={f.id} type="button" onClick={() => setForm({ ...form, festival: f.id })}
                  className={`text-xs px-3 py-2 rounded-xl border font-medium transition-all ${form.festival === f.id ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]" : "border-slate-200 text-slate-600"}`}>
                  {f.nameHi} · {f.daysAway}d
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 block mb-2">Kiske liye?</label>
            <div className="grid grid-cols-3 gap-2">
              {SEGMENTS.map((s) => (
                <button key={s.value} type="button" onClick={() => setForm({ ...form, segment: s.value })}
                  className={`text-xs px-2 py-2.5 rounded-xl border font-medium transition-all ${form.segment === s.value ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]" : "border-slate-200 text-slate-600"}`}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 block mb-2">Platform</label>
            <div className="flex gap-2">
              {[{ key: "whatsapp", label: "💬 WhatsApp" }, { key: "instagram", label: "📸 Instagram" }, { key: "facebook", label: "👥 Facebook" }].map((p) => (
                <button key={p.key} type="button" onClick={() => setForm({ ...form, platform: p.key })}
                  className={`flex-1 text-xs py-2.5 rounded-xl border font-medium transition-all ${form.platform === p.key ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]" : "border-slate-200 text-slate-600"}`}>
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 block mb-2">Kuch aur batana hai? <span className="font-normal text-slate-400">(optional)</span></label>
            <input placeholder="jaise: nayi kurta collection, 20% Navratri sale..." value={form.product}
              onChange={(e) => setForm({ ...form, product: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]" />
          </div>

          <button onClick={generate} className="w-full bg-[#FF6B35] text-white font-black py-4 rounded-2xl hover:bg-[#e85520] transition-all text-sm shadow-sm shadow-orange-200">
            ✨ Posts Banao →
          </button>
        </div>
      )}

      {step === "generating" && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 text-center">
          <div className="space-y-3 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#dcf8c6] rounded-2xl rounded-tl-sm p-4 animate-pulse text-left">
                <div className="h-3 bg-green-200 rounded w-3/4 mb-2" />
                <div className="h-3 bg-green-200 rounded w-1/2" />
              </div>
            ))}
          </div>
          <p className="text-sm font-bold text-slate-700">AI likh raha hai...</p>
          <p className="text-xs text-slate-400 mt-1">Navratri ke liye captions ban rahe hain</p>
          <div className="mt-4 flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-2 h-2 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      )}

      {step === "variants" && (
        <div className="space-y-3">
          <p className="text-sm text-slate-600 font-medium mb-3">Ek choose karo — edit bhi kar sakte ho:</p>
          {MOCK_VARIANTS.map((v) => (
            <div key={v.id} onClick={() => setSelectedVariant(v.id)}
              className={`bg-white rounded-2xl border p-4 cursor-pointer transition-all ${selectedVariant === v.id ? "border-[#FF6B35] shadow-md ring-2 ring-[#FF6B35]/20" : "border-slate-200 hover:border-[#FF6B35]/40 shadow-sm"}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{v.style}</span>
                {selectedVariant === v.id && <span className="text-xs font-bold bg-[#FF6B35] text-white px-3 py-1 rounded-full">Chuna ✓</span>}
              </div>
              {/* WhatsApp bubble */}
              <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-sm px-4 py-3 inline-block max-w-full">
                <p className="text-sm text-slate-800 leading-relaxed">{v.caption}</p>
                <p className="text-[10px] text-slate-400 text-right mt-1">6:00 PM ✓✓</p>
              </div>
              <p className="text-xs text-slate-400 italic mt-2">{v.captionHi}</p>
            </div>
          ))}
          {selectedVariant && (
            <div className="flex gap-2 pt-2">
              <button onClick={() => setStep("schedule")} className="flex-1 bg-[#16a34a] text-white font-black py-4 rounded-2xl hover:bg-[#15803d] transition-all text-sm shadow-sm">
                ✓ Approve Karein
              </button>
              <button className="bg-slate-100 text-slate-700 font-semibold py-4 px-5 rounded-2xl hover:bg-slate-200 transition-all text-sm">
                ✏️ Badlein
              </button>
            </div>
          )}
        </div>
      )}

      {step === "schedule" && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <p className="font-black text-slate-800 mb-1">Kab bhejein? 📅</p>
          <p className="text-xs text-slate-500 mb-4">Best time aapke customers ke liye pre-select kiya gaya hai</p>
          <div className="space-y-2 mb-5">
            {["Aaj shaam 6 baje", "Kal subah 9 baje", "Kal shaam 7 baje"].map((t) => (
              <button key={t} type="button" onClick={() => setScheduleTime(t)}
                className={`w-full text-left px-4 py-3 rounded-xl border font-medium text-sm transition-all ${scheduleTime === t ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]" : "border-slate-200 text-slate-700"}`}>
                {t} {t === "Aaj shaam 6 baje" && <span className="text-xs text-[#FF6B35] font-bold ml-2">⭐ Best time</span>}
              </button>
            ))}
          </div>
          <button onClick={() => setStep("done")} className="w-full bg-[#16a34a] text-white font-black py-4 rounded-2xl hover:bg-[#15803d] transition-all text-sm">
            ✓ Schedule Karein — {scheduleTime}
          </button>
        </div>
      )}

      {step === "done" && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 text-center">
          <div className="text-5xl mb-3 animate-bounce">🎉</div>
          <p className="text-lg font-black text-slate-800 mb-1">Ho gaya!</p>
          <p className="text-sm text-slate-500 mb-1">Post schedule ho gaya — <strong>{scheduleTime}</strong></p>
          <p className="text-xs text-slate-400 mb-6">Automatically bheja jaega 📲</p>
          <div className="flex justify-center gap-3">
            <button onClick={() => { setStep("form"); setSelectedVariant(null); }}
              className="bg-[#FF6B35] text-white font-black text-sm px-6 py-3 rounded-2xl hover:bg-[#e85520] transition-all">
              Aur post banao →
            </button>
            <a href="./calendar" className="bg-slate-100 text-slate-700 font-semibold text-sm px-6 py-3 rounded-2xl hover:bg-slate-200 transition-all">
              Calendar dekho
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
