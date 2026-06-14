"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function InsightsPage() {
  const t = useTranslations("insights");
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-5">
        <h1 className="text-xl font-black text-slate-800">{t("title")}</h1>
        <p className="text-sm text-slate-500 mt-0.5">Sep 18 – 24, 2026</p>
      </div>

      {/* Main achievement card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-4">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t("achievementLabel")}</p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-black text-[#FF6B35]">3</p>
            <p className="text-xs text-slate-500 mt-1">Posts sent</p>
          </div>
          <div>
            <p className="text-3xl font-black text-[#FF6B35]">87</p>
            <p className="text-xs text-slate-500 mt-1">Customers reached</p>
          </div>
          <div>
            <p className="text-3xl font-black text-[#FF6B35]">6</p>
            <p className="text-xs text-slate-500 mt-1">Replies received</p>
          </div>
        </div>
      </div>

      {/* Streak */}
      <div className="bg-[#1e293b] rounded-2xl p-5 text-white mb-4">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{t("streak")}</p>
        <p className="text-3xl font-black">4 {t("streakWeeks")}</p>
        <p className="text-sm text-slate-300 mt-1">{t("streakDesc")} 4 {t("streakWeeks")}</p>
      </div>

      {/* Top post */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-4">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{t("topPost")}</p>
        <div
          className="w-full rounded-xl mb-3"
          style={{ height: 140, background: "linear-gradient(135deg, #FF6B35, #c0392b)" }}
        />
        <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-sm px-4 py-3 inline-block max-w-full mb-2">
          <p className="text-sm text-slate-800 leading-relaxed">
            Garba night ki taiyari? Grab your outfit from us — special Navratri prices only this week!
          </p>
          <p className="text-[10px] text-slate-400 text-right mt-1">6:00 PM</p>
        </div>
        <div className="flex gap-4 mt-2 text-xs text-slate-500 font-medium">
          <span>312 reached</span>
          <span>28 saved</span>
          <span>6 replies</span>
        </div>
      </div>

      {/* Next opportunity */}
      <div className="bg-[#fff1eb] rounded-2xl border border-orange-100 p-5">
        <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-1">{t("opportunity")}</p>
        <p className="text-sm font-bold text-slate-800">Navratri — 8 days away</p>
        <p className="text-sm text-slate-600 mt-1">
          Shops that post <strong>7 days early</strong> see <strong>3.2x more WhatsApp replies</strong>.
        </p>
        <Link
          href={`/${locale}/create`}
          className="mt-3 block w-full bg-[#FF6B35] text-white font-black text-sm py-3 rounded-xl hover:bg-[#e85520] transition-all text-center"
        >
          {t("planButton")}
        </Link>
      </div>
    </div>
  );
}
