"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { MOCK_FESTIVALS } from "@/lib/constants";

const MOCK_VARIANTS = [
  {
    id: 1,
    styleKey: "style1" as const,
    caption: "Navratri collection aaya hai! New kurtis just in. Limited stock — aao jaldi!",
    captionHi: "नवरात्रि collection आया है! जल्दी आओ!",
  },
  {
    id: 2,
    styleKey: "style2" as const,
    caption: "Is Navratri, apni boutique mein aaye nayi kurtis, lehengas aur accessories. Aap hamare khas customers mein se hain — pehle dekhne ka mauka sirf aapke liye. 9 din baaki hain!",
    captionHi: "इस नवरात्रि, बुटीक में आई नई kurtis। आप हमारे खास customers हैं।",
  },
  {
    id: 3,
    styleKey: "style3" as const,
    caption: "Navratri sale shuru! 20% off on all ethnic wear. Kal tak ka offer. WhatsApp pe NAVRATRI bhejo aur special discount pao!",
    captionHi: "नवरात्रि sale शुरू! 20% off। कल तक का offer।",
  },
];

const SCHEDULE_OPTIONS = ["Today 6 PM", "Tomorrow 9 AM", "Tomorrow 7 PM"];

export default function CreatePostPage() {
  const t = useTranslations("create");
  const [step, setStep] = useState<"form" | "generating" | "variants" | "schedule" | "done">("form");
  const [form, setForm] = useState({ festival: "navratri-2026", segment: "loyal", product: "", platform: "whatsapp" });
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);
  const [scheduleTime, setScheduleTime] = useState(SCHEDULE_OPTIONS[0]);

  const segmentLabels: Record<string, string> = {
    all: t("allCustomers"),
    champion: "Champions",
    loyal: "Loyal",
    at_risk: "Inactive",
    new: "New",
    birthday: "Birthday",
  };

  function generate() {
    setStep("generating");
    setTimeout(() => setStep("variants"), 2200);
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-5">
        <h1 className="text-xl font-black text-slate-800">{t("title")}</h1>
        <p className="text-sm text-slate-500 mt-0.5">{t("subtitle")}</p>
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
            <label className="text-xs font-bold text-slate-600 block mb-2">{t("whichFestival")}</label>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setForm({ ...form, festival: "" })}
                className={`text-xs px-3 py-2 rounded-xl border font-medium transition-all ${!form.festival ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]" : "border-slate-200 text-slate-600"}`}>
                {t("noFestival")}
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
            <label className="text-xs font-bold text-slate-600 block mb-2">{t("forWhom")}</label>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(segmentLabels).map(([value, label]) => (
                <button key={value} type="button" onClick={() => setForm({ ...form, segment: value })}
                  className={`text-xs px-2 py-2.5 rounded-xl border font-medium transition-all ${form.segment === value ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]" : "border-slate-200 text-slate-600"}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 block mb-2">{t("platform")}</label>
            <div className="flex gap-2">
              {[{ key: "whatsapp", label: "WhatsApp" }, { key: "instagram", label: "Instagram" }, { key: "facebook", label: "Facebook" }].map((p) => (
                <button key={p.key} type="button" onClick={() => setForm({ ...form, platform: p.key })}
                  className={`flex-1 text-xs py-2.5 rounded-xl border font-medium transition-all ${form.platform === p.key ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]" : "border-slate-200 text-slate-600"}`}>
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-600 block mb-2">
              Anything specific? <span className="font-normal text-slate-400">({t("optional")})</span>
            </label>
            <input placeholder={t("productHint")} value={form.product}
              onChange={(e) => setForm({ ...form, product: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]" />
          </div>

          <button onClick={generate} className="w-full bg-[#FF6B35] text-white font-black py-4 rounded-2xl hover:bg-[#e85520] transition-all text-sm shadow-sm shadow-orange-200">
            {t("generate")}
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
          <p className="text-sm font-bold text-slate-700">{t("aiWriting")}</p>
          <p className="text-xs text-slate-400 mt-1">{t("aiWritingDesc")}</p>
          <div className="mt-4 flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-2 h-2 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      )}

      {step === "variants" && (
        <div className="space-y-3">
          <p className="text-sm text-slate-600 font-medium mb-3">{t("chooseCaption")}</p>
          {MOCK_VARIANTS.map((v) => (
            <div key={v.id} onClick={() => setSelectedVariant(v.id)}
              className={`bg-white rounded-2xl border p-4 cursor-pointer transition-all ${selectedVariant === v.id ? "border-[#FF6B35] shadow-md ring-2 ring-[#FF6B35]/20" : "border-slate-200 hover:border-[#FF6B35]/40 shadow-sm"}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{t(v.styleKey)}</span>
                {selectedVariant === v.id && <span className="text-xs font-bold bg-[#FF6B35] text-white px-3 py-1 rounded-full">{t("selected")}</span>}
              </div>
              <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-sm px-4 py-3 inline-block max-w-full">
                <p className="text-sm text-slate-800 leading-relaxed">{v.caption}</p>
                <p className="text-[10px] text-slate-400 text-right mt-1">6:00 PM</p>
              </div>
              <p className="text-xs text-slate-400 italic mt-2">{v.captionHi}</p>
            </div>
          ))}
          {selectedVariant && (
            <div className="flex gap-2 pt-2">
              <button onClick={() => setStep("schedule")} className="flex-1 bg-[#16a34a] text-white font-black py-4 rounded-2xl hover:bg-[#15803d] transition-all text-sm shadow-sm">
                {t("approve")}
              </button>
              <button className="bg-slate-100 text-slate-700 font-semibold py-4 px-5 rounded-2xl hover:bg-slate-200 transition-all text-sm">
                {t("edit")}
              </button>
            </div>
          )}
        </div>
      )}

      {step === "schedule" && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <p className="font-black text-slate-800 mb-1">{t("scheduleTitle")}</p>
          <p className="text-xs text-slate-500 mb-4">{t("scheduleDesc")}</p>
          <div className="space-y-2 mb-5">
            {SCHEDULE_OPTIONS.map((time, i) => (
              <button key={time} type="button" onClick={() => setScheduleTime(time)}
                className={`w-full text-left px-4 py-3 rounded-xl border font-medium text-sm transition-all ${scheduleTime === time ? "border-[#FF6B35] bg-[#fff1eb] text-[#FF6B35]" : "border-slate-200 text-slate-700"}`}>
                {time} {i === 0 && <span className="text-xs text-[#FF6B35] font-bold ml-2">{t("bestTime")}</span>}
              </button>
            ))}
          </div>
          <button onClick={() => setStep("done")} className="w-full bg-[#16a34a] text-white font-black py-4 rounded-2xl hover:bg-[#15803d] transition-all text-sm">
            {t("scheduleButton")} {scheduleTime}
          </button>
        </div>
      )}

      {step === "done" && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 text-center">
          <p className="text-lg font-black text-slate-800 mb-1">{t("doneTitle")}</p>
          <p className="text-sm text-slate-500 mb-1"><strong>{scheduleTime}</strong></p>
          <p className="text-xs text-slate-400 mb-6">{t("doneDesc")}</p>
          <div className="flex justify-center gap-3">
            <button onClick={() => { setStep("form"); setSelectedVariant(null); }}
              className="bg-[#FF6B35] text-white font-black text-sm px-6 py-3 rounded-2xl hover:bg-[#e85520] transition-all">
              {t("createAnother")}
            </button>
            <a href="./calendar" className="bg-slate-100 text-slate-700 font-semibold text-sm px-6 py-3 rounded-2xl hover:bg-slate-200 transition-all">
              {t("viewCalendar")}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
