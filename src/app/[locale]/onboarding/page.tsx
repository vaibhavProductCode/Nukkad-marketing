"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { BUSINESS_TYPES, SUPPORTED_LOCALES } from "@/lib/constants";

const STEPS = ["Business type", "City & State", "Language", "Brand color", "Done!"];

const CITIES = ["Indore", "Jaipur", "Lucknow", "Surat", "Coimbatore", "Bhopal", "Nagpur", "Varanasi", "Other"];
const COLORS = ["#FF6B35", "#E91E63", "#9C27B0", "#2196F3", "#00BCD4", "#4CAF50", "#FF9800", "#795548"];

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
          <p className="text-slate-300 text-sm mt-1">Set up your shop in 2 minutes</p>
        </div>

        {/* Progress */}
        <div className="flex gap-1.5 mb-6">
          {STEPS.map((_, i) => (
            <div key={i} className={`flex-1 h-1.5 rounded-full transition-all ${i <= step ? "bg-[#FF6B35]" : "bg-slate-600"}`} />
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl min-h-64">
          <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-1">Step {step + 1} of {STEPS.length}</p>
          <h2 className="text-xl font-black text-slate-800 mb-5">{STEPS[step]}</h2>

          {step === 0 && (
            <div className="space-y-3">
              <input
                placeholder="Your shop name (e.g. Priya Boutique)"
                value={data.businessName}
                onChange={(e) => setData({ ...data, businessName: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]"
              />
              <div className="grid grid-cols-2 gap-2">
                {BUSINESS_TYPES.map((bt) => (
                  <button
                    key={bt.value}
                    type="button"
                    onClick={() => setData({ ...data, businessType: bt.value })}
                    className={`text-xs px-3 py-2.5 rounded-xl border font-medium transition-all ${
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

          {step === 1 && (
            <div className="space-y-3">
              <select
                value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]"
              >
                <option value="">Select your city</option>
                {CITIES.map((c) => <option key={c} value={c.toLowerCase()}>{c}</option>)}
              </select>
              <input
                placeholder="State"
                value={data.state}
                onChange={(e) => setData({ ...data, state: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]"
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-2">
              <p className="text-sm text-slate-500 mb-3">What language do you prefer?</p>
              {SUPPORTED_LOCALES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setData({ ...data, language: l.code })}
                  className={`w-full text-left px-4 py-3 rounded-xl border font-medium text-sm transition-all ${
                    data.language === l.code
                      ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]"
                      : "border-slate-200 text-slate-700 hover:border-[#FF6B35]"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="text-sm text-slate-500 mb-4">Pick your brand color</p>
              <div className="flex flex-wrap gap-3">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setData({ ...data, brandColor: c })}
                    className={`w-10 h-10 rounded-full border-4 transition-all ${data.brandColor === c ? "border-slate-800 scale-110" : "border-white shadow"}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <div className="mt-5 p-3 rounded-xl text-sm font-semibold text-white text-center" style={{ backgroundColor: data.brandColor }}>
                Preview: {data.businessName || "Your Shop"} button
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-4">
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-lg font-bold text-slate-800">You&apos;re all set!</p>
              <p className="text-sm text-slate-500 mt-2">
                Your festival calendar is ready. <strong>Navratri</strong> is in 8 days — 3 posts suggested for your boutique in Indore.
              </p>
            </div>
          )}

          <button
            onClick={next}
            className="mt-6 w-full bg-[#FF6B35] text-white font-bold py-3 rounded-xl hover:bg-[#e85520] transition-all text-sm"
          >
            {step === STEPS.length - 1 ? "Go to Dashboard →" : "Continue →"}
          </button>
        </div>
      </div>
    </div>
  );
}
