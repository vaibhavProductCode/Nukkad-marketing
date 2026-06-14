import { useTranslations } from "next-intl";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-5 bg-white/10 rounded-2xl backdrop-blur-sm">
      <p className="text-3xl font-black text-white">{value}</p>
      <p className="text-sm text-orange-100 mt-1">{label}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className="w-12 h-12 bg-[#fff1eb] rounded-xl flex items-center justify-center text-2xl mb-4">{icon}</div>
      <h3 className="text-base font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function PricingCard({
  name, price, period, features, highlighted, ctaLocale,
}: {
  name: string; price: string; period: string; features: string[]; highlighted?: boolean; ctaLocale: string;
}) {
  return (
    <div className={`rounded-2xl p-6 border flex flex-col gap-4 ${highlighted ? "bg-[#FF6B35] text-white border-transparent shadow-xl scale-105" : "bg-white border-slate-200 shadow-sm"}`}>
      <div>
        <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${highlighted ? "text-orange-100" : "text-[#FF6B35]"}`}>{name}</p>
        <div className="flex items-end gap-1">
          <span className={`text-4xl font-black ${highlighted ? "text-white" : "text-slate-800"}`}>{price}</span>
          <span className={`text-sm mb-1 ${highlighted ? "text-orange-100" : "text-slate-500"}`}>{period}</span>
        </div>
      </div>
      <ul className="space-y-2 flex-1">
        {features.map((f) => (
          <li key={f} className={`text-sm flex items-start gap-2 ${highlighted ? "text-white" : "text-slate-600"}`}>
            <span className={highlighted ? "text-orange-200" : "text-[#FF6B35]"}>✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={`/${ctaLocale}/dashboard`}
        className={`text-center text-sm font-bold py-3 rounded-xl transition-all ${
          highlighted
            ? "bg-white text-[#FF6B35] hover:bg-orange-50"
            : "bg-[#FF6B35] text-white hover:bg-[#e85520]"
        }`}
      >
        Try the Dashboard →
      </Link>
    </div>
  );
}

export default function LandingPage({ params }: { params: Promise<{ locale: string }> }) {
  const t = useTranslations();
  void params;

  return (
    <div className="min-h-screen bg-[#fff9f2]">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#1e293b] via-[#2d1b0e] to-[#FF6B35]/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-300 bg-white/10 px-4 py-1.5 rounded-full mb-5">
            {t("hero.badge")}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5">
            {t("hero.headline")}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-orange-100 mb-8 leading-relaxed">
            {t("hero.subheadline")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/en/dashboard"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#e85520] transition-all shadow-lg text-base"
            >
              {t("hero.cta")}
            </Link>
            <Link
              href="#features"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-base"
            >
              {t("hero.ctaSecondary")} →
            </Link>
          </div>

          {/* Stats bar — honest Phase 1 numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
            <StatCard value="63M+" label={t("stats.smbs")} />
            <StatCard value="500M+" label={t("stats.whatsapp")} />
            <StatCard value="74%" label={t("stats.noMarketing")} />
            <StatCard value="60+" label={t("stats.festivals")} />
          </div>
        </div>
      </section>

      {/* Ticker strip */}
      <div className="bg-[#1e293b] py-3 overflow-hidden">
        <div className="flex gap-6 text-sm text-slate-400 text-center justify-center flex-wrap px-4">
          <span>🎉 Navratri posts ready</span>
          <span className="hidden sm:inline">·</span>
          <span>💬 45 loyal customers reached</span>
          <span className="hidden sm:inline">·</span>
          <span>📅 Diwali in 36 days — 5 posts suggested</span>
          <span className="hidden sm:inline">·</span>
          <span>🔥 4-week posting streak!</span>
        </div>
      </div>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 mb-3">{t("features.title")}</h2>
            <p className="text-slate-500 max-w-lg mx-auto">{t("features.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon="🎉" title={t("features.festival.title")} desc={t("features.festival.desc")} />
            <FeatureCard icon="✨" title={t("features.ai.title")} desc={t("features.ai.desc")} />
            <FeatureCard icon="💬" title={t("features.crm.title")} desc={t("features.crm.desc")} />
            <FeatureCard icon="💡" title={t("features.advisor.title")} desc={t("features.advisor.desc")} />
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="bg-[#fff1eb]/40 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-black text-slate-800 mb-2">See it in action</h2>
          <p className="text-slate-500 mb-8 text-sm">Everything your shop needs, in one screen.</p>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-[#1e293b] px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-slate-400 text-xs ml-3">nukkad.app/dashboard</span>
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-br from-[#fff1eb] to-white grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#FF6B35] text-white rounded-xl p-4 text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-200">त्योहार Alert</p>
                <p className="text-xl font-black mt-1">🎉 Navratri in 8 days</p>
                <p className="text-sm text-orange-100 mt-1">3 posts ready for your boutique in Indore</p>
                <button className="mt-3 bg-white text-[#FF6B35] text-xs font-bold px-4 py-1.5 rounded-lg">Approve Karein →</button>
              </div>
              <div className="bg-white border border-slate-100 rounded-xl p-4 text-left shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Broadcast Nudge</p>
                <p className="text-sm font-semibold text-slate-700 mt-1">45 loyal customers ko 3 hafte se message nahi gaya.</p>
                <div className="bg-[#dcf8c6] rounded-xl px-3 py-2 mt-2 text-xs text-slate-700">Navratri sale aa rahi hai! 🎉 Dekhne aao...</div>
                <button className="mt-2 bg-[#16a34a] text-white text-xs font-bold px-4 py-1.5 rounded-lg">Message Bhejein →</button>
              </div>
              <div className="bg-white border border-slate-100 rounded-xl p-4 text-left shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Is hafte</p>
                <div className="mt-2 space-y-1.5">
                  <p className="text-sm text-slate-600">📸 <strong>3</strong> posts bheje</p>
                  <p className="text-sm text-slate-600">👥 <strong>89</strong> customers tak pahunche</p>
                  <p className="text-sm text-slate-600">💬 <strong>12</strong> replies aaye</p>
                  <p className="text-sm text-[#FF6B35] font-semibold">🔥 4 hafte ki streak!</p>
                </div>
              </div>
            </div>
          </div>
          <Link href="/en/dashboard" className="inline-block mt-6 text-sm font-bold text-[#FF6B35] hover:underline">
            Live dashboard try karein →
          </Link>
        </div>
      </section>

      {/* Pricing — corrected prices, Pre-spend Advisor removed from Starter */}
      <section id="pricing" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 mb-3">{t("pricing.title")}</h2>
            <p className="text-slate-500">{t("pricing.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <PricingCard
              name="Free"
              price="₹0"
              period="/month"
              features={["5 AI posts/month", "Festival planner (30 days)", "Basic contacts list"]}
              ctaLocale="en"
            />
            <PricingCard
              name="Starter"
              price="₹399"
              period="/month"
              features={["30 AI posts/month", "Full festival calendar", "WhatsApp CRM (500 contacts)", "Broadcast messages"]}
              highlighted
              ctaLocale="en"
            />
            <PricingCard
              name="Growth"
              price="₹899"
              period="/month"
              features={["Unlimited posts", "WhatsApp API", "CRM (5,000 contacts)", "Ad ROI tracking", "Pre-spend Advisor"]}
              ctaLocale="en"
            />
          </div>
        </div>
      </section>

      {/* CTA — honest scarcity copy */}
      <section className="bg-[#FF6B35] py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Aapka business grow karna chahte hain?</h2>
          <p className="text-orange-100 mb-8">Be among the first 100 shopkeepers on Nukkad.</p>
          <Link
            href="/en/dashboard"
            className="inline-block bg-white text-[#FF6B35] font-black px-10 py-4 rounded-xl hover:bg-orange-50 transition-all shadow-lg text-base"
          >
            Free mein shuru karein →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
