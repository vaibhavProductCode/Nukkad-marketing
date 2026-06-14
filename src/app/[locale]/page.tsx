import { useTranslations } from "next-intl";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
      <h3 className="text-base font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

const TEAM = [
  {
    name: "Vaibhav Shukla",
    role: "Product & Strategy",
    bio: "Former growth lead at a D2C brand. Spent 3 years helping small traders in Indore figure out Facebook ads.",
    initials: "VS",
  },
  {
    name: "Priya Mehta",
    role: "Design",
    bio: "Designed for 2 fintech apps. Grew up watching her mother run a sari shop in Nagpur — this product is personal.",
    initials: "PM",
  },
  {
    name: "Arjun Nair",
    role: "Engineering",
    bio: "Built backend systems at a logistics startup. Fluent in Malayalam, Tamil, and Python.",
    initials: "AN",
  },
];

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
              href="/en/login"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#e85520] transition-all shadow-lg text-base"
            >
              {t("hero.cta")}
            </Link>
            <Link
              href="#features"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-base"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
            {[
              { value: "63M+", label: t("stats.smbs") },
              { value: "500M+", label: t("stats.whatsapp") },
              { value: "74%", label: t("stats.noMarketing") },
              { value: "60+", label: t("stats.festivals") },
            ].map((s) => (
              <div key={s.label} className="text-center p-5 bg-white/10 rounded-2xl">
                <p className="text-3xl font-black text-white">{s.value}</p>
                <p className="text-sm text-orange-100 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FF6B35] mb-3">The Problem</p>
              <h2 className="text-3xl font-black text-slate-800 leading-snug mb-4">
                India has 63 million small shops. None of them have a marketing team.
              </h2>
              <p className="text-slate-500 leading-relaxed">
                A boutique owner in Indore knows Navratri is coming. She knows she should post something. But between managing inventory, attending customers, and closing the shop — she does not have time to think about captions, schedules, or which customers to target.
              </p>
              <p className="text-slate-500 leading-relaxed mt-3">
                She misses the festival. Her competitor, two streets over, posts a WhatsApp offer at 6 PM and sells out by morning.
              </p>
            </div>
            <div className="bg-[#fff9f2] rounded-2xl p-6 border border-orange-100">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">What she needs is simple</p>
              <div className="space-y-4">
                {[
                  { step: "1", text: "Know which festival is coming up — and what to say about it" },
                  { step: "2", text: "Know which customers to send the message to" },
                  { step: "3", text: "Have the message written for her, in her language" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full bg-[#FF6B35] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-orange-100">
                <p className="text-sm font-bold text-slate-800">That is Nukkad.</p>
                <p className="text-xs text-slate-500 mt-1">Festival-aware, customer-aware, language-aware — done in 3 taps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-[#fff9f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 mb-3">{t("features.title")}</h2>
            <p className="text-slate-500 max-w-lg mx-auto">{t("features.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard title={t("features.festival.title")} desc={t("features.festival.desc")} />
            <FeatureCard title={t("features.ai.title")} desc={t("features.ai.desc")} />
            <FeatureCard title={t("features.crm.title")} desc={t("features.crm.desc")} />
            <FeatureCard title={t("features.advisor.title")} desc={t("features.advisor.desc")} />
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-black text-slate-800 mb-2">See what it looks like</h2>
          <p className="text-slate-500 mb-8 text-sm">Everything your shop needs, in one screen.</p>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden text-left">
            <div className="bg-[#1e293b] px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-slate-400 text-xs ml-3">nukkad.app/dashboard</span>
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-br from-[#fff1eb] to-white grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#FF6B35] text-white rounded-xl p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-200">Festival Alert</p>
                <p className="text-xl font-black mt-1">Navratri in 8 days</p>
                <p className="text-sm text-orange-100 mt-1">3 posts ready for Indore boutiques</p>
                <button className="mt-3 bg-white text-[#FF6B35] text-xs font-bold px-4 py-1.5 rounded-lg">Approve post</button>
              </div>
              <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Broadcast</p>
                <p className="text-sm font-semibold text-slate-700 mt-1">45 loyal customers not contacted in 3 weeks.</p>
                <div className="bg-[#dcf8c6] rounded-xl px-3 py-2 mt-2 text-xs text-slate-700">Navratri sale shuru hai! Dekhne aao...</div>
                <button className="mt-2 bg-[#16a34a] text-white text-xs font-bold px-4 py-1.5 rounded-lg">Send message</button>
              </div>
              <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">This week</p>
                <div className="mt-2 space-y-1.5">
                  <p className="text-sm text-slate-600"><strong>3</strong> posts sent</p>
                  <p className="text-sm text-slate-600"><strong>89</strong> customers reached</p>
                  <p className="text-sm text-slate-600"><strong>12</strong> replies received</p>
                  <p className="text-sm text-[#FF6B35] font-semibold">4-week posting streak</p>
                </div>
              </div>
            </div>
          </div>
          <Link href="/en/login" className="inline-block mt-6 text-sm font-bold text-[#FF6B35] hover:underline">
            Try the live dashboard
          </Link>
        </div>
      </section>

      {/* Pricing — Coming Soon */}
      <section id="pricing" className="py-20 bg-[#fff9f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 mb-3">{t("pricing.title")}</h2>
            <p className="text-slate-500">{t("pricing.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {[
              {
                name: "Free",
                features: ["5 AI posts/month", "Festival planner (30 days)", "Basic contacts list"],
              },
              {
                name: "Starter",
                features: ["30 AI posts/month", "Full festival calendar", "WhatsApp CRM (500 contacts)", "Broadcast messages"],
                highlighted: true,
              },
              {
                name: "Growth",
                features: ["Unlimited posts", "WhatsApp API", "CRM (5,000 contacts)", "Ad ROI tracking", "Pre-spend Advisor"],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 border flex flex-col gap-4 relative overflow-hidden ${plan.highlighted ? "bg-[#1e293b] text-white border-transparent shadow-xl scale-105" : "bg-white border-slate-200 shadow-sm"}`}
              >
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.highlighted ? "text-orange-300" : "text-[#FF6B35]"}`}>{plan.name}</p>
                  <div className={`inline-block px-3 py-1.5 rounded-lg text-sm font-bold ${plan.highlighted ? "bg-[#FF6B35] text-white" : "bg-slate-100 text-slate-600"}`}>
                    Coming Soon
                  </div>
                </div>
                <ul className="space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className={`text-sm flex items-start gap-2 ${plan.highlighted ? "text-slate-300" : "text-slate-600"}`}>
                      <span className={plan.highlighted ? "text-orange-400" : "text-[#FF6B35]"}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/en/login"
                  className={`text-center text-sm font-bold py-3 rounded-xl transition-all ${
                    plan.highlighted
                      ? "bg-[#FF6B35] text-white hover:bg-[#e85520]"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Join waitlist
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are / Team */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF6B35] mb-3">Who We Are</p>
            <h2 className="text-3xl font-black text-slate-800 mb-3">Built by people who grew up around these shops</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We are not a Silicon Valley team building for India from afar. We grew up going to these nukkad shops. We watched the owners struggle with Instagram. We are fixing that.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#1e293b] flex items-center justify-center text-white text-lg font-black mx-auto mb-4">
                  {member.initials}
                </div>
                <p className="font-bold text-slate-800">{member.name}</p>
                <p className="text-xs text-[#FF6B35] font-semibold mt-0.5 mb-2">{member.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#FF6B35] py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Ready to try it?</h2>
          <p className="text-orange-100 mb-8">Be among the first 100 shopkeepers on Nukkad. Free to start.</p>
          <Link
            href="/en/login"
            className="inline-block bg-white text-[#FF6B35] font-black px-10 py-4 rounded-xl hover:bg-orange-50 transition-all shadow-lg text-base"
          >
            Start for free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
