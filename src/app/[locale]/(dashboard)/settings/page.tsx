"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { SUPPORTED_LOCALES, BUSINESS_TYPES } from "@/lib/constants";

const COLORS = ["#FF6B35", "#E91E63", "#9C27B0", "#2196F3", "#00BCD4", "#16a34a", "#FF9800", "#795548"];

export default function SettingsPage() {
  const t = useTranslations("settings");
  const params = useParams();
  const router = useRouter();
  const currentLocale = (params?.locale as string) || "en";

  const [profile, setProfile] = useState({
    businessName: "Priya Boutique",
    businessType: "boutique",
    city: "Indore",
    state: "Madhya Pradesh",
    instagram: "@priya.boutique.indore",
    brandColor: "#FF6B35",
    plan: "free",
  });
  const [saved, setSaved] = useState(false);

  function save() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function switchLanguage(code: string) {
    router.push(`/${code}/settings`);
  }

  function handleLogout() {
    try {
      localStorage.clear();
      sessionStorage.clear();
      document.cookie.split(";").forEach((c) => {
        document.cookie = c.trim().split("=")[0] + "=;expires=" + new Date(0).toUTCString() + ";path=/";
      });
    } catch (_) {}
    window.location.href = `/${currentLocale}`;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-5">
        <h1 className="text-xl font-black text-slate-800">{t("title")}</h1>
      </div>

      <div className="space-y-4">
        {/* Business profile */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h2 className="text-sm font-black text-slate-800 mb-4">{t("profileTitle")}</h2>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">{t("businessName")}</label>
              <input value={profile.businessName} onChange={(e) => setProfile({ ...profile, businessName: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#fff9f2] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]" />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">{t("businessType")}</label>
              <select value={profile.businessType} onChange={(e) => setProfile({ ...profile, businessType: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#fff9f2] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]">
                {BUSINESS_TYPES.map((bt) => <option key={bt.value} value={bt.value}>{bt.label}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">{t("city")}</label>
                <input value={profile.city} onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#fff9f2] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">{t("state")}</label>
                <input value={profile.state} onChange={(e) => setProfile({ ...profile, state: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#fff9f2] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]" />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1">{t("instagram")}</label>
              <input value={profile.instagram} onChange={(e) => setProfile({ ...profile, instagram: e.target.value })}
                placeholder="@yourshop"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#fff9f2] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]" />
            </div>
          </div>
        </div>

        {/* Language */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h2 className="text-sm font-black text-slate-800 mb-1">{t("languageTitle")}</h2>
          <p className="text-xs text-slate-400 mb-3">{t("languageNote")}</p>
          <div className="grid grid-cols-2 gap-2">
            {SUPPORTED_LOCALES.map((l) => (
              <button key={l.code} type="button" onClick={() => switchLanguage(l.code)}
                className={`text-sm px-4 py-3 rounded-xl border font-medium transition-all ${
                  currentLocale === l.code
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
          <h2 className="text-sm font-black text-slate-800 mb-3">{t("colorTitle")}</h2>
          <div className="flex flex-wrap gap-3 mb-4">
            {COLORS.map((c) => (
              <button key={c} type="button" onClick={() => setProfile({ ...profile, brandColor: c })}
                className={`w-10 h-10 rounded-full border-4 transition-all ${profile.brandColor === c ? "border-slate-800 scale-110" : "border-white shadow"}`}
                style={{ backgroundColor: c }} />
            ))}
          </div>
          <div className="h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: profile.brandColor }}>
            {profile.businessName}
          </div>
        </div>

        {/* Plan */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-black text-slate-800">{t("planTitle")}</h2>
              <p className="text-xs text-slate-500 mt-0.5">{t("currentPlan")}: <strong>Nukkad Free</strong></p>
            </div>
            <button className="bg-[#FF6B35] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#e85520] transition-all">
              {t("upgradeButton")}
            </button>
          </div>
          <div className="mt-3 bg-[#fff9f2] rounded-xl p-3 text-xs text-slate-500">
            {t("planDesc")}
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5">
          <h2 className="text-sm font-bold text-slate-600 mb-1">{t("privacyTitle")}</h2>
          <p className="text-xs text-slate-400 mb-3">🔒 {t("privacyDesc")}</p>
          <button className="text-xs text-red-500 font-semibold hover:underline">
            {t("deleteData")}
          </button>
        </div>

        <button onClick={save}
          className={`w-full py-4 rounded-2xl font-black text-sm transition-all ${saved ? "bg-[#16a34a] text-white" : "bg-[#FF6B35] text-white hover:bg-[#e85520]"}`}>
          {saved ? `✓ ${t("saved")}` : t("save")}
        </button>

        {/* Logout — clears all browser data */}
        <button
          onClick={handleLogout}
          className="w-full py-3.5 rounded-2xl text-sm font-semibold text-slate-500 border border-slate-200 hover:bg-slate-50 hover:text-slate-700 transition-all flex items-center justify-center gap-2"
        >
          🚪 Log out
        </button>
      </div>
    </div>
  );
}
