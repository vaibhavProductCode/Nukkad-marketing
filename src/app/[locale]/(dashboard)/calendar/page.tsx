import { useTranslations } from "next-intl";
import { MOCK_FESTIVALS } from "@/lib/constants";
import type { PostStatus } from "@/types";

const STATUS_STYLES: Record<PostStatus, { bg: string; text: string; label: string }> = {
  draft: { bg: "#f1f5f9", text: "#475569", label: "Draft" },
  approved: { bg: "#d1fae5", text: "#065f46", label: "Approved" },
  scheduled: { bg: "#dbeafe", text: "#1e40af", label: "Scheduled" },
  sent: { bg: "#fff1eb", text: "#FF6B35", label: "Sent" },
  missed: { bg: "#fee2e2", text: "#991b1b", label: "Missed" },
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CALENDAR_DATA = [
  { day: 23, posts: 1, status: "sent" as PostStatus },
  { day: 24, posts: 0 },
  { day: 25, posts: 2, status: "approved" as PostStatus, festival: "Navratri -7d" },
  { day: 26, posts: 0 },
  { day: 27, posts: 1, status: "draft" as PostStatus },
  { day: 28, posts: 0 },
  { day: 29, posts: 0 },
  { day: 30, posts: 0 },
  { day: 1, posts: 0, festival: "Oct" },
  { day: 2, posts: 3, status: "draft" as PostStatus, festival: "🎉 Navratri" },
  { day: 3, posts: 1, status: "draft" as PostStatus },
  { day: 4, posts: 0 },
  { day: 5, posts: 0 },
  { day: 6, posts: 0 },
  { day: 7, posts: 0 },
  { day: 8, posts: 0 },
  { day: 9, posts: 0 },
  { day: 10, posts: 2, status: "draft" as PostStatus },
  { day: 11, posts: 0 },
  { day: 12, posts: 3, status: "draft" as PostStatus, festival: "🏹 Dussehra" },
  { day: 13, posts: 0 },
  { day: 14, posts: 0 },
  { day: 15, posts: 0 },
  { day: 16, posts: 0 },
  { day: 17, posts: 0 },
  { day: 18, posts: 0 },
  { day: 19, posts: 0 },
  { day: 20, posts: 2, status: "draft" as PostStatus, festival: "🌙 Karva Chauth" },
  { day: 21, posts: 0 },
  { day: 22, posts: 0 },
  { day: 23, posts: 0 },
  { day: 24, posts: 0 },
  { day: 25, posts: 0 },
  { day: 26, posts: 0 },
  { day: 27, posts: 0 },
  { day: 28, posts: 0 },
  { day: 29, posts: 0 },
  { day: 30, posts: 5, status: "draft" as PostStatus, festival: "🪔 Diwali" },
];

export default function CalendarPage() {
  const t = useTranslations("calendar");

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-black text-slate-800">{t("title")}</h1>
          <p className="text-sm text-slate-500 mt-0.5">Sep – Oct 2026 · {t("subtitle")}</p>
        </div>
        <button className="text-sm font-bold bg-[#FF6B35] text-white px-4 py-2 rounded-xl hover:bg-[#e85520] transition-all">
          + {t("createPost")}
        </button>
      </div>

      {/* Calendar grid */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-6">
        <div className="grid grid-cols-7 border-b border-slate-100">
          {DAYS.map((d) => (
            <div key={d} className="py-2 text-center text-xs font-bold text-slate-400 uppercase tracking-wide">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {CALENDAR_DATA.map((cell, i) => (
            <div
              key={i}
              className="min-h-16 md:min-h-20 border-b border-r border-slate-50 p-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <p className="text-xs font-semibold text-slate-500 mb-1">{cell.day}</p>
              {cell.festival && (
                <p className="text-[9px] md:text-xs font-bold text-[#FF6B35] bg-[#fff1eb] px-1 py-0.5 rounded mb-1 leading-tight truncate">
                  {cell.festival}
                </p>
              )}
              {cell.posts > 0 && cell.status && (
                <span
                  className="text-[9px] md:text-xs px-1 md:px-1.5 py-0.5 rounded font-medium"
                  style={{ backgroundColor: STATUS_STYLES[cell.status].bg, color: STATUS_STYLES[cell.status].text }}
                >
                  {cell.posts}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming festivals */}
      <div>
        <h2 className="text-base font-black text-slate-800 mb-3">{t("upcoming")}</h2>
        <div className="space-y-3">
          {MOCK_FESTIVALS.map((f) => (
            <div key={f.id} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-black flex-shrink-0" style={{ backgroundColor: f.palette[0] }}>
                  {f.daysAway}d
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{f.nameHi}</p>
                  <p className="text-xs text-slate-500">{f.date} · {f.suggestedPosts} posts</p>
                </div>
              </div>
              <button className="text-xs font-bold text-[#FF6B35] bg-[#fff1eb] px-3 py-1.5 rounded-lg hover:bg-orange-100 transition-all flex-shrink-0">
                {t("create")} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
