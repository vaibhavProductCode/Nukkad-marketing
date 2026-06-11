import { MOCK_FESTIVALS, MOCK_POSTS } from "@/lib/constants";
import Link from "next/link";

function StatBox({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-4">
      <div className="w-10 h-10 bg-[#fff1eb] rounded-xl flex items-center justify-center text-xl">{icon}</div>
      <div>
        <p className="text-2xl font-black text-slate-800">{value}</p>
        <p className="text-xs text-slate-500">{label}</p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const nextFestival = MOCK_FESTIVALS[0];
  const suggestedPost = MOCK_POSTS[0];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Good morning,</p>
          <h1 className="text-2xl font-black text-slate-800">Priya Boutique 👋</h1>
        </div>
        <div className="flex items-center gap-2 bg-[#fff1eb] px-4 py-2 rounded-xl">
          <span className="text-lg">🔥</span>
          <div>
            <p className="text-sm font-black text-[#FF6B35]">4 week streak!</p>
            <p className="text-xs text-orange-400">Keep it going</p>
          </div>
        </div>
      </div>

      {/* Festival countdown banner */}
      <div
        className="rounded-2xl p-5 mb-5 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ background: "linear-gradient(135deg, #FF6B35, #c0392b)" }}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange-200">Festival Alert</p>
          <p className="text-xl font-black mt-1">
            🎉 {nextFestival.nameHi} ({nextFestival.name}) — {nextFestival.daysAway} days away
          </p>
          <p className="text-sm text-orange-100 mt-1">
            {nextFestival.suggestedPosts} suggested posts ready for your boutique in Indore
          </p>
        </div>
        <Link
          href="./calendar"
          className="bg-white text-[#FF6B35] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-orange-50 transition-all whitespace-nowrap shadow"
        >
          View Calendar →
        </Link>
      </div>

      {/* Today's suggested post */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-5">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Today&apos;s Suggested Post</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div
            className="w-full sm:w-32 h-32 rounded-xl flex items-center justify-center text-white text-3xl font-black flex-shrink-0"
            style={{ backgroundColor: suggestedPost.imageColor }}
          >
            🎉
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-orange-100 text-[#FF6B35] font-bold px-2 py-0.5 rounded-full">
                {suggestedPost.festivalName}
              </span>
              <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                {suggestedPost.platform}
              </span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">{suggestedPost.caption}</p>
            <p className="text-xs text-slate-400 mt-1 italic">{suggestedPost.captionHi}</p>
            <div className="flex gap-2 mt-3">
              <button className="bg-[#FF6B35] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#e85520] transition-all">
                ✓ Approve
              </button>
              <button className="bg-slate-100 text-slate-700 text-xs font-semibold px-4 py-2 rounded-lg hover:bg-slate-200 transition-all">
                ✏️ Edit
              </button>
              <button className="text-slate-400 text-xs px-4 py-2 rounded-lg hover:bg-slate-100 transition-all">
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        <StatBox value="3" label="Posts this week" icon="📸" />
        <StatBox value="89" label="Contacts reached" icon="👥" />
        <StatBox value="12" label="Responses received" icon="💬" />
      </div>

      {/* WhatsApp broadcast nudge */}
      <div className="bg-white rounded-2xl border border-green-100 shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">💬</span>
            <p className="text-sm font-bold text-slate-800">Broadcast Reminder</p>
          </div>
          <p className="text-sm text-slate-600">
            <strong>45 loyal customers</strong> haven&apos;t heard from you in 3 weeks. Navratri is coming — send a collection update?
          </p>
        </div>
        <Link
          href="./crm"
          className="bg-[#25D366] text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-green-600 transition-all whitespace-nowrap shadow"
        >
          Send Broadcast →
        </Link>
      </div>
    </div>
  );
}
