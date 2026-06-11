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
        href={`/${ctaLocale}/login`}
        className={`text-center text-sm font-semibold py-2.5 rounded-xl transition-all ${
          highlighted
            ? "bg-white text-[#FF6B35] hover:bg-orange-50"
            : "bg-[#FF6B35] text-white hover:bg-[#e85520]"
        }`}
      >
        Get started
      </Link>
    </div>
  );
}

export default function LandingPage({ params }: { params: Promise<{ locale: string }> }) {
  const t = useTranslations();
  const localePromise = params;
  void localePromise;

  return (
    <div className="min-h-screen bg-[#fef9f6]">
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
              href="/en/login"
              className="px-8 py-3.5 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#e85520] transition-all shadow-lg text-base"
            >
              {t("hero.cta")}
            </Link>
            <Link
              href="#features"
              className="px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-base"
            >
              {t("hero.ctaSecondary")} →
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
            <StatCard value="63M+" label={t("stats.smbs")} />
            <StatCard value="500M+" label={t("stats.whatsapp")} />
            <StatCard value="74%" label={t("stats.noMarketing")} />
            <StatCard value="200+" label={t("stats.festivals")} />
          </div>
        </div>
      </section>

      {/* App preview strip */}
      <div className="bg-[#1e293b] py-3 overflow-hidden">
        <div className="flex gap-6 animate-none text-sm text-slate-400 text-center justify-center">
          <span>🎉 Navratri posts ready</span>
          <span>·</span>
          <span>💬 45 loyal customers reached</span>
          <span>·</span>
          <span>📅 Diwali in 36 days — 5 posts suggested</span>
          <span>·</span>
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
      <section className="bg-slate-50 py-16">
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
            <div className="p-6 bg-gradient-to-br from-[#fff1eb] to-white min-h-48 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-[#FF6B35] text-white rounded-xl p-4 text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-200">Festival Alert</p>
                <p className="text-xl font-black mt-1">🎉 Navratri in 8 days</p>
                <p className="text-sm text-orange-100 mt-1">3 posts ready for your boutique in Indore</p>
                <button className="mt-3 bg-white text-[#FF6B35] text-xs font-bold px-4 py-1.5 rounded-lg">Approve Posts →</button>
              </div>
              <div className="flex-1 bg-white border border-slate-100 rounded-xl p-4 text-left shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Broadcast Nudge</p>
                <p className="text-sm font-semibold text-slate-700 mt-1">45 loyal customers haven't heard from you in 3 weeks.</p>
                <button className="mt-3 bg-[#FF6B35] text-white text-xs font-bold px-4 py-1.5 rounded-lg">Send Broadcast →</button>
              </div>
              <div className="flex-1 bg-white border border-slate-100 rounded-xl p-4 text-left shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">This Week</p>
                <div className="mt-2 space-y-1.5">
                  <p className="text-sm text-slate-600">📸 <strong>3</strong> posts sent</p>
                  <p className="text-sm text-slate-600">👥 <strong>89</strong> contacts reached</p>
                  <p className="text-sm text-slate-600">💬 <strong>12</strong> responses</p>
                  <p className="text-sm text-[#FF6B35] font-semibold">🔥 4-week streak!</p>
                </div>
              </div>
            </div>
          </div>
          <Link href="/en/login" className="inline-block mt-6 text-sm font-semibold text-[#FF6B35] hover:underline">
            Try the live dashboard →
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 mb-3">{t("pricing.title")}</h2>
            <p className="text-slate-500">{t("pricing.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <PricingCard
              name={t("pricing.free.name")}
              price={t("pricing.free.price")}
              period={t("pricing.free.period")}
              features={["5 AI posts/month", "Festival planner (30 days)", "Basic contacts list"]}
              ctaLocale="en"
            />
            <PricingCard
              name={t("pricing.starter.name")}
              price={t("pricing.starter.price")}
              period={t("pricing.starter.period")}
              features={["30 posts/month", "Full festival calendar", "WhatsApp CRM (500 contacts)", "Pre-spend advisor"]}
              highlighted
              ctaLocale="en"
            />
            <PricingCard
              name={t("pricing.growth.name")}
              price={t("pricing.growth.price")}
              period={t("pricing.growth.period")}
              features={["Unlimited posts", "WhatsApp API", "CRM (5,000 contacts)", "Ad ROI tracking", "Hindi support"]}
              ctaLocale="en"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF6B35] py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Aapka business grow karna chahte hain?</h2>
          <p className="text-orange-100 mb-8">Join thousands of shopkeepers already using Nukkad.</p>
          <Link
            href="/en/login"
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
