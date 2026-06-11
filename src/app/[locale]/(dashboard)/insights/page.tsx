const WEEKLY_STATS = [
  { label: "Posts sent", value: "3", icon: "📸", change: "+2 vs last week", positive: true },
  { label: "Contacts reached", value: "89", icon: "👥", change: "+34 vs last week", positive: true },
  { label: "Responses received", value: "12", icon: "💬", change: "+5 vs last week", positive: true },
  { label: "WhatsApp opens", value: "67%", icon: "📲", change: "+3% vs last week", positive: true },
];

const TOP_POST = {
  caption: "Garba night ki taiyari? 💃 Grab your outfit from us — special Navratri prices only this week!",
  platform: "instagram",
  saves: 28,
  reach: 312,
  comments: 6,
};

const POSTING_HISTORY = [
  { week: "4 weeks ago", posts: 2, color: "#94a3b8" },
  { week: "3 weeks ago", posts: 1, color: "#94a3b8" },
  { week: "2 weeks ago", posts: 3, color: "#FF6B35" },
  { week: "Last week", posts: 2, color: "#FF6B35" },
  { week: "This week", posts: 3, color: "#FF6B35" },
];

export default function InsightsPage() {
  const maxPosts = Math.max(...POSTING_HISTORY.map((h) => h.posts));

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-800">Insights</h1>
        <p className="text-sm text-slate-500 mt-0.5">Week of Sep 18 – 24, 2026</p>
      </div>

      {/* Streak highlight */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#c0392b] rounded-2xl p-5 text-white mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange-200">Posting Streak</p>
          <p className="text-3xl font-black mt-1">🔥 4 weeks</p>
          <p className="text-sm text-orange-100">You posted every week for 4 weeks in a row!</p>
        </div>
        <div className="text-6xl opacity-30">🔥</div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {WEEKLY_STATS.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <p className="text-2xl font-black text-slate-800">{stat.value}</p>
            <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
            <p className={`text-xs font-semibold mt-1 ${stat.positive ? "text-green-600" : "text-red-500"}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Posting bar chart */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <p className="text-sm font-black text-slate-800 mb-4">Posts per week</p>
          <div className="flex items-end gap-3 h-24">
            {POSTING_HISTORY.map((h) => (
              <div key={h.week} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs font-bold text-slate-600">{h.posts}</span>
                <div
                  className="w-full rounded-t-lg transition-all"
                  style={{
                    height: `${(h.posts / maxPosts) * 80}px`,
                    backgroundColor: h.color,
                  }}
                />
                <span className="text-xs text-slate-400 text-center leading-tight">{h.week.replace(" ago", "")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top post */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <p className="text-sm font-black text-slate-800 mb-3">Top performing post</p>
          <div className="bg-gradient-to-br from-[#fff1eb] to-white rounded-xl p-4 border border-orange-100">
            <span className="text-xs bg-orange-100 text-[#FF6B35] font-bold px-2 py-0.5 rounded-full">{TOP_POST.platform}</span>
            <p className="text-sm text-slate-700 leading-relaxed mt-2">{TOP_POST.caption}</p>
            <div className="flex gap-4 mt-3 text-xs text-slate-500 font-medium">
              <span>📸 {TOP_POST.reach} reach</span>
              <span>❤️ {TOP_POST.saves} saves</span>
              <span>💬 {TOP_POST.comments} comments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming opportunity */}
      <div className="bg-[#fff1eb] rounded-2xl border border-orange-100 p-5">
        <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-1">Upcoming opportunity</p>
        <p className="text-sm font-bold text-slate-800">🎉 Navratri is 8 days away — your highest-traffic festival for boutiques</p>
        <p className="text-sm text-slate-600 mt-1">Last Navratri: boutique owners on Nukkad saw <strong>3.2x more WhatsApp responses</strong> when they posted 7 days in advance.</p>
        <button className="mt-3 text-sm font-bold bg-[#FF6B35] text-white px-4 py-2 rounded-lg hover:bg-[#e85520] transition-all">
          Plan my Navratri posts →
        </button>
      </div>
    </div>
  );
}
