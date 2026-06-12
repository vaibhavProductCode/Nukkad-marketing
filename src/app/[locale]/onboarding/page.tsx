"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { BUSINESS_TYPES, SUPPORTED_LOCALES } from "@/lib/constants";

// Step order per spec: Language FIRST, then business type, city, brand color, done
const STEPS = ["Language", "Business type", "City", "Brand color", "Done"];

const CITIES = ["Indore", "Jaipur", "Lucknow", "Surat", "Coimbatore", "Bhopal", "Nagpur", "Varanasi", "Other"];
const COLORS = ["#FF6B35", "#E91E63", "#9C27B0", "#2196F3", "#00BCD4", "#16a34a", "#FF9800", "#795548"];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    businessName: "",
    businessType: "",
    city: "",
    state: "",
    language: "hi",
    brandColor: "#FF6B35",
  });
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  function next() {
    if (step < STEPS.length - 1) setStep(step + 1);
    else router.push(`/${locale}/dashboard`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] to-[#2d1b0e] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <span className="text-3xl font-black text-[#FF6B35]">NUKKAD</span>
          <p className="text-slate-300 text-sm mt-1">2 minute mein ready</p>
        </div>

        {/* Dot progress — never show "Step X of Y" */}
        <div className="flex gap-2 mb-6 justify-center">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all ${
                i === step ? "w-5 h-2 bg-[#FF6B35]" : i < step ? "w-2 h-2 bg-[#FF6B35]" : "w-2 h-2 bg-slate-600"
              }`}
            />
          ))}
        </div>

        <div className="bg-white rounded-2xl p-7 shadow-2xl min-h-64">

          {/* Step 0 — Language FIRST, bilingual screen per spec */}
          {step === 0 && (
            <div>
              <h2 className="text-xl font-black text-slate-800 mb-1 text-center">
                अपनी भाषा चुनें
              </h2>
              <p className="text-sm text-slate-500 text-center mb-5">Choose your language</p>
              <div className="space-y-2">
                {SUPPORTED_LOCALES.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setData({ ...data, language: l.code })}
                    className={`w-full text-left px-4 py-3.5 rounded-xl border font-semibold text-sm transition-all ${
                      data.language === l.code
                        ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]"
                        : "border-slate-200 text-slate-700 hover:border-[#FF6B35]"
                    }`}
                  >
                    {l.label}
                    {data.language === l.code && <span className="float-right">✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1 — Business name + type (tappable cards, no free-text except name) */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-black text-slate-800 mb-4">Aapka business kya hai?</h2>
              <input
                placeholder="Shop ka naam (e.g. Priya Boutique)"
                value={data.businessName}
                onChange={(e) => setData({ ...data, businessName: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm mb-3 bg-[#fff9f2] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]"
              />
              <div className="grid grid-cols-2 gap-2">
                {BUSINESS_TYPES.map((bt) => (
                  <button
                    key={bt.value}
                    type="button"
                    onClick={() => setData({ ...data, businessType: bt.value })}
                    className={`text-xs px-3 py-3 rounded-xl border font-medium transition-all ${
                      data.businessType === bt.value
                        ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]"
                        : "border-slate-200 text-slate-600 hover:border-[#FF6B35]"
                    }`}
                  >
                    {bt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — City (5 launch cities pinned at top) */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-black text-slate-800 mb-4">Aap kahan hain?</h2>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {/* 5 launch cities pinned first per spec */}
                {["Indore", "Jaipur", "Lucknow", "Surat", "Coimbatore"].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setData({ ...data, city: c.toLowerCase() })}
                    className={`text-sm px-3 py-3 rounded-xl border font-medium transition-all ${
                      data.city === c.toLowerCase()
                        ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]"
                        : "border-slate-200 text-slate-600 hover:border-[#FF6B35]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setData({ ...data, city: "other" })}
                  className={`text-sm px-3 py-3 rounded-xl border font-medium transition-all ${data.city === "other" ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]" : "border-slate-200 text-slate-600"}`}
                >
                  Doosra sheher
                </button>
              </div>
              {data.city === "other" && (
                <input
                  placeholder="Aapka sheher"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#fff9f2] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]"
                  onChange={(e) => setData({ ...data, state: e.target.value })}
                />
              )}
            </div>
          )}

          {/* Step 3 — Brand color (8 swatches + skip) */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-black text-slate-800 mb-1">Aapka brand color?</h2>
              <p className="text-xs text-slate-400 mb-4">Posts mein automatically use hoga</p>
              <div className="flex flex-wrap gap-3 mb-4">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setData({ ...data, brandColor: c })}
                    className={`w-12 h-12 rounded-full border-4 transition-all ${data.brandColor === c ? "border-slate-800 scale-110" : "border-white shadow"}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <div className="p-3 rounded-xl text-sm font-bold text-white text-center" style={{ backgroundColor: data.brandColor }}>
                Preview — {data.businessName || "Aapka shop"}
              </div>
              <button onClick={next} className="mt-2 w-full text-slate-400 text-xs py-2">
                Skip karein
              </button>
            </div>
          )}

          {/* Step 4 — Payoff screen per spec: bilingual, calendar populated */}
          {step === 4 && (
            <div className="text-center py-2">
              <div className="text-5xl mb-3">🎉</div>
              <p className="text-lg font-black text-slate-800">
                आपका calendar तैयार है!
              </p>
              <p className="text-sm text-[#FF6B35] font-bold mt-1">Your calendar is ready!</p>
              <div className="bg-[#fff1eb] rounded-xl p-4 mt-4 text-left">
                <p className="text-sm font-bold text-slate-800 mb-2">अगले 30 दिनों में 4 त्योहार:</p>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <p>🎉 Navratri — 8 din mein</p>
                  <p>🏹 Dussehra — 18 din mein</p>
                  <p>🌙 Karva Chauth — 26 din mein</p>
                  <p>🪔 Diwali — 37 din mein</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3">3 posts ready hain aapke liye ✓</p>
            </div>
          )}

          <button
            onClick={next}
            className="mt-6 w-full bg-[#FF6B35] text-white font-black py-4 rounded-2xl hover:bg-[#e85520] transition-all text-sm"
          >
            {step === STEPS.length - 1 ? "Dashboard par jao →" : "Aage →"}
          </button>
        </div>
      </div>
    </div>
  );
}
