"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { MOCK_FESTIVALS, MOCK_POSTS } from "@/lib/constants";
import Link from "next/link";
import { getProfile, type UserProfile } from "@/lib/auth";

export default function DashboardPage() {
  const t = useTranslations("home");
  const [postState, setPostState] = useState<"pending" | "approved" | "skipped">("pending");
  const [profile, setProfileState] = useState<UserProfile | null>(null);

  useEffect(() => {
    setProfileState(getProfile());
  }, []);

  const nextFestival = MOCK_FESTIVALS[0];
  const suggestedPost = MOCK_POSTS[0];
  const businessName = profile?.businessName || "My Shop";

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{t("greeting")},</p>
          <h1 className="text-xl font-black text-slate-800">{businessName}</h1>
        </div>
        <div className="flex items-center gap-1.5 bg-[#fff1eb] px-3 py-2 rounded-xl border border-orange-100">
          <div>
            <p className="text-xs font-black text-[#FF6B35] leading-none">4 {t("streakLabel")}</p>
            <p className="text-[10px] text-orange-400 mt-0.5">{t("streakMotivation")}</p>
          </div>
        </div>
      </div>

      {/* Festival countdown */}
      <div
        className="rounded-2xl p-4 mb-4 text-white flex items-center justify-between gap-3"
        style={{ background: `linear-gradient(135deg, ${nextFestival.palette[0]}, ${nextFestival.palette[1] || "#c0392b"})` }}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-widest opacity-80">{t("festivalAlert")}</p>
          <p className="text-lg font-black mt-0.5">
            {nextFestival.nameHi} — {nextFestival.daysAway} {t("festivalDaysAway")}
          </p>
          <p className="text-xs opacity-80 mt-0.5">
            {nextFestival.suggestedPosts} {t("festivalPostsReady")}
          </p>
        </div>
        <Link
          href="./calendar"
          className="bg-white/20 border border-white/40 text-white font-bold text-xs px-4 py-2 rounded-xl whitespace-nowrap hover:bg-white/30 transition-all"
        >
          {t("viewCalendar")}
        </Link>
      </div>

      {/* Today's suggested post */}
      {postState === "pending" && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-4">
          <div className="px-4 pt-4 pb-2">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t("suggestedPost")}</p>
          </div>
          <div
            className="mx-4 rounded-xl"
            style={{ height: 180, backgroundColor: suggestedPost.imageColor }}
          />
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-orange-100 text-[#FF6B35] font-bold px-2 py-0.5 rounded-full">
                {nextFestival.nameHi}
              </span>
              <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full capitalize">
                {suggestedPost.platform}
              </span>
            </div>
            <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-sm px-4 py-3 mb-3 inline-block max-w-full">
              <p className="text-sm text-slate-800 leading-relaxed">{suggestedPost.caption}</p>
              <p className="text-[10px] text-slate-400 text-right mt-1">6:00 PM</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setPostState("approved")}
                className="flex-1 bg-[#16a34a] text-white font-black py-3 rounded-xl text-sm hover:bg-[#15803d] transition-all"
              >
                {t("approve")}
              </button>
              <button className="bg-slate-100 text-slate-700 font-semibold py-3 px-4 rounded-xl text-sm hover:bg-slate-200 transition-all">
                {t("edit")}
              </button>
              <button
                onClick={() => setPostState("skipped")}
                className="text-slate-400 text-sm py-3 px-3 rounded-xl hover:bg-slate-100 transition-all"
              >
                {t("skip")}
              </button>
            </div>
          </div>
        </div>
      )}

      {postState === "approved" && (
        <div className="bg-white rounded-2xl border border-green-100 shadow-sm p-6 mb-4 text-center">
          <p className="font-black text-slate-800 text-lg">{t("postApproved")}</p>
          <p className="text-sm text-slate-500 mt-1">{t("postScheduled")}</p>
          <button
            onClick={() => setPostState("pending")}
            className="mt-3 text-xs text-[#FF6B35] font-semibold"
          >
            {t("viewMore")}
          </button>
        </div>
      )}

      {postState === "skipped" && (
        <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5 mb-4 text-center">
          <p className="text-sm text-slate-500">No problem — we will suggest another tomorrow.</p>
          <button onClick={() => setPostState("pending")} className="mt-2 text-xs text-[#FF6B35] font-semibold">
            {t("viewMore")}
          </button>
        </div>
      )}

      {/* Broadcast nudge */}
      <div className="bg-white rounded-2xl border border-orange-100 shadow-sm p-4 mb-4">
        <p className="text-sm font-bold text-slate-800 mb-1">45 {t("broadcastNudge")}</p>
        <div className="flex gap-2 mt-3">
          <Link
            href="./crm"
            className="flex-1 text-center bg-[#16a34a] text-white font-bold text-sm py-2.5 rounded-xl hover:bg-[#15803d] transition-all"
          >
            {t("sendMessage")}
          </Link>
          <button className="bg-slate-100 text-slate-600 text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-slate-200 transition-all">
            {t("preview")}
          </button>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { value: "3", labelKey: "statsPostsWeek" as const },
          { value: "89", labelKey: "statsReached" as const },
          { value: "12", labelKey: "statsReplies" as const },
        ].map((s) => (
          <div key={s.labelKey} className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm text-center">
            <p className="text-2xl font-black text-[#FF6B35]">{s.value}</p>
            <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{t(s.labelKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
