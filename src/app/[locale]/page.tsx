"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ─── Hero Visual ──────────────────────────────────────────────────────────────

function HeroVisual() {
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);

  function handleGenerate() {
    setGenerating(true);
    setTimeout(() => { setGenerating(false); setGenerated(true); }, 1800);
  }

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Input card */}
      <div className={`bg-white rounded-2xl shadow-xl border border-slate-100 p-5 transition-all duration-500 ${generated ? "opacity-40 scale-95" : "opacity-100 scale-100"}`}>
        <div className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-3">Diwali in 12 days</div>
        <div className="space-y-2 mb-4">
          {[
            { label: "Business", value: "Meena Boutique" },
            { label: "Audience", value: "Loyal Customers" },
            { label: "Platform", value: "WhatsApp" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between bg-[#fff9f2] rounded-xl px-3 py-2">
              <span className="text-xs text-slate-500">{row.label}</span>
              <span className="text-xs font-bold text-slate-800">{row.value}</span>
            </div>
          ))}
        </div>
        {!generated && (
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="w-full bg-[#FF6B35] text-white font-black py-3 rounded-xl text-sm hover:bg-[#e85520] transition-all flex items-center justify-center gap-2"
          >
            {generating ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Campaign"
            )}
          </button>
        )}
      </div>

      {/* Arrow */}
      {generated && (
        <div className="flex justify-center my-2">
          <div className="w-px h-6 bg-[#FF6B35]" />
        </div>
      )}

      {/* Output card */}
      {generated && (
        <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-5 animate-[fadeIn_0.4s_ease]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Generated in 3 seconds</span>
            <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">Ready</span>
          </div>
          <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-sm px-4 py-3 mb-4">
            <p className="text-sm text-slate-800 leading-relaxed">
              Dear Meena Ji, this Diwali enjoy 15% off our new festive collection. Lehengas, kurtis and accessories — all in stock. Offer valid until Oct 30.
            </p>
            <p className="text-[10px] text-slate-400 text-right mt-1">6:00 PM</p>
          </div>
          <button className="w-full bg-[#16a34a] text-white font-black py-3 rounded-xl text-sm hover:bg-[#15803d] transition-all">
            Schedule Broadcast
          </button>
        </div>
      )}

      {!generated && (
        <p className="text-center text-xs text-orange-200 mt-3">
          Click Generate to see it work
        </p>
      )}
    </div>
  );
}

// ─── Problem Cards ─────────────────────────────────────────────────────────────

function ProblemCards() {
  const cards = [
    {
      label: "Before",
      bg: "bg-slate-800",
      textColor: "text-white",
      labelColor: "text-slate-400",
      lines: ["Festival coming", "No content ready", "No customer list", "No campaign"],
    },
    {
      label: "Reality",
      bg: "bg-[#1e293b]",
      textColor: "text-white",
      labelColor: "text-slate-400",
      lines: ["Owner busy running shop", "No marketing team", "No designer", "No copywriter"],
    },
    {
      label: "Result",
      bg: "bg-[#FF6B35]",
      textColor: "text-white",
      labelColor: "text-orange-200",
      lines: ["Competitor sends offer", "Customers buy elsewhere", "Festival opportunity lost"],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.label} className={`${card.bg} rounded-2xl p-6`}>
          <p className={`text-xs font-bold uppercase tracking-widest ${card.labelColor} mb-4`}>{card.label}</p>
          <ul className="space-y-2">
            {card.lines.map((line) => (
              <li key={line} className={`text-sm ${card.textColor} flex items-start gap-2`}>
                <span className="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// ─── Feature: Festival Calendar mock ──────────────────────────────────────────

function FestivalCalendarMock() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-50">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Upcoming for Meena Boutique</p>
      </div>
      {[
        { name: "Navratri", days: 9, posts: 3 },
        { name: "Dussehra", days: 15, posts: 2 },
        { name: "Diwali", days: 28, posts: 5 },
      ].map((f, i) => (
        <div key={f.name} className={`flex items-center justify-between px-4 py-3.5 ${i !== 0 ? "border-t border-slate-50" : ""}`}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FF6B35] text-white text-xs font-black flex items-center justify-center flex-shrink-0">
              {f.days}d
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">{f.name}</p>
              <p className="text-xs text-slate-400">{f.posts} posts suggested</p>
            </div>
          </div>
          <button className="text-xs text-[#FF6B35] font-bold bg-[#fff1eb] px-3 py-1.5 rounded-lg">Plan</button>
        </div>
      ))}
    </div>
  );
}

// ─── Feature: AI Post Writer mock ─────────────────────────────────────────────

function PostWriterMock() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-50 flex items-center justify-between">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">AI Post Writer</p>
        <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">Generated in 3s</span>
      </div>
      <div className="px-4 py-3 border-b border-slate-50 grid grid-cols-3 gap-2">
        {[{ label: "Festival", val: "Diwali" }, { label: "Audience", val: "Loyal" }, { label: "Platform", val: "WhatsApp" }].map((item) => (
          <div key={item.label} className="text-center bg-[#fff9f2] rounded-xl py-2">
            <p className="text-[10px] text-slate-400">{item.label}</p>
            <p className="text-xs font-bold text-slate-700 mt-0.5">{item.val}</p>
          </div>
        ))}
      </div>
      <div className="p-4 space-y-3">
        {[
          { style: "Short", text: "Diwali collection is here! 15% off on all ethnic wear. Come visit us!" },
          { style: "Story", text: "This Diwali, celebrate with colours. Meena Boutique's new lehenga collection is in — exclusively for our loyal customers." },
          { style: "Offer", text: "Diwali sale: 15% off until Oct 30. WhatsApp DIWALI to claim your discount before stock runs out." },
        ].map((v) => (
          <div key={v.style} className="bg-[#dcf8c6] rounded-2xl rounded-tl-sm px-3 py-2.5 relative">
            <span className="absolute -top-2 left-3 text-[9px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">{v.style}</span>
            <p className="text-xs text-slate-800 leading-relaxed mt-1">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Feature: Customer Segments mock ──────────────────────────────────────────

function CustomersMock() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-50">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Customer Segments</p>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4">
        {[
          { label: "Champions", count: 24, color: "#FF6B35" },
          { label: "Loyal", count: 87, color: "#1e293b" },
          { label: "Inactive", count: 41, color: "#94a3b8" },
          { label: "Birthday", count: 12, color: "#e879f9" },
        ].map((seg) => (
          <div key={seg.label} className="rounded-xl border border-slate-100 p-3 text-center">
            <p className="text-2xl font-black" style={{ color: seg.color }}>{seg.count}</p>
            <p className="text-xs text-slate-500 mt-0.5">{seg.label}</p>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <button className="w-full bg-[#16a34a] text-white font-bold py-2.5 rounded-xl text-xs">
          Send Broadcast to Loyal (87)
        </button>
      </div>
    </div>
  );
}

// ─── Feature: Broadcast mock ───────────────────────────────────────────────────

function BroadcastMock() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-black">87</div>
        <div>
          <p className="text-xs font-bold text-white">Loyal Customers</p>
          <p className="text-[10px] text-green-200">87 recipients</p>
        </div>
      </div>
      <div className="p-4 bg-[#e5ddd5] min-h-28">
        <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[80%]">
          <p className="text-xs text-slate-800 leading-relaxed">
            Dear Meena Ji, this Diwali enjoy 15% off our new festive collection. Lehengas, kurtis and accessories — all in stock. Offer valid until Oct 30.
          </p>
          <p className="text-[10px] text-slate-400 text-right mt-1">6:00 PM</p>
        </div>
      </div>
      <div className="p-3 border-t border-slate-100">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="flex-1 flex items-center gap-1.5">
            <span className="font-semibold text-slate-700">Scheduled:</span> Today 6:00 PM
          </div>
          <button className="bg-[#16a34a] text-white font-bold px-4 py-1.5 rounded-lg text-xs">Confirm</button>
        </div>
      </div>
    </div>
  );
}

// ─── Dashboard Screen Mocks ────────────────────────────────────────────────────

function ScreenMock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
      <div className="bg-[#1e293b] px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-slate-400 text-xs ml-2">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

// ─── FAQ ────────────────────────────────────────────────────────────────────────

function FAQ() {
  const items = [
    { q: "Do I need marketing experience?", a: "No. Nukkad handles the calendar, the copy, and the scheduling. You just approve." },
    { q: "Does it work with WhatsApp?", a: "Yes. The broadcast workflow is built around how business owners already communicate — WhatsApp first." },
    { q: "Is my customer data private?", a: "Your raw WhatsApp chats are never stored on our servers. We extract signals only — customer frequency, category, recency. Messages are processed and discarded." },
    { q: "Does it support Hindi?", a: "Yes. The entire app is available in Hindi and English. Switch anytime from settings." },
    { q: "How much does it cost?", a: "Pricing launches soon. You can join the early access list now — it is free to start." },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {items.map((item) => (
        <div key={item.q} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <p className="text-sm font-bold text-slate-800 mb-1.5">{item.q}</p>
          <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

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
    bio: "Grew up watching her mother run a sari shop in Nagpur. Designed for 2 fintech startups before building this.",
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
  void params;

  return (
    <div className="min-h-screen bg-[#fff9f2]">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-[#1e293b] via-[#2d1b0e] to-[#FF6B35]/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-300 bg-white/10 px-4 py-1.5 rounded-full mb-6">
              AI marketing for India&apos;s neighbourhood businesses
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-5">
              Never Miss Another<br />Festival Sale
            </h1>
            <p className="text-lg text-orange-100 mb-8 leading-relaxed">
              Generate WhatsApp, Instagram and Facebook campaigns for every festival in minutes. Built for boutiques, kirana stores, salons and sweet shops.
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
              <Link
                href="/en/login"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#e85520] transition-all shadow-lg text-base"
              >
                Start Free
              </Link>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-base text-center"
              >
                See How It Works
              </a>
            </div>
          </div>
          {/* Right: interactive visual */}
          <HeroVisual />
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
      <section className="bg-[#1e293b] py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 text-center sm:text-left">Built for</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {["Boutiques", "Kirana Stores", "Sweet Shops", "Salons", "Gift Stores"].map((type) => (
                  <span key={type} className="text-sm font-medium text-slate-300 bg-slate-700 px-3 py-1 rounded-full">
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-6 sm:gap-8">
              {[
                { value: "60+", label: "Festivals" },
                { value: "Hindi + EN", label: "Languages" },
                { value: "WhatsApp", label: "First" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-base font-black text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 leading-snug">
              Stop Losing Customers<br />Every Festival
            </h2>
            <p className="text-slate-500 mt-3 max-w-md mx-auto">
              Every Navratri, Diwali, Eid — the same story repeats for thousands of shops across India.
            </p>
          </div>
          <ProblemCards />
          <p className="text-center text-sm text-slate-500 mt-8 max-w-lg mx-auto">
            The shop owner knows what to do. She just never has the time to do it. Nukkad gives her back that time.
          </p>
        </div>
      </section>

      {/* ── SOLUTION ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#fff9f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-800 mb-3">
              Your Marketing Assistant<br />For Every Festival
            </h2>
            <p className="text-slate-500 max-w-md mx-auto">
              Four things that replace an entire marketing team.
            </p>
          </div>

          {/* Feature 1: Festival Calendar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-2">01 — Festival Calendar</p>
              <h3 className="text-2xl font-black text-slate-800 mb-3">Know what is coming before you forget</h3>
              <p className="text-slate-500 leading-relaxed">
                Nukkad tracks 60+ Indian festivals and flags the ones relevant to your shop and city. You never need to check a calendar again — the calendar comes to you.
              </p>
            </div>
            <FestivalCalendarMock />
          </div>

          {/* Feature 2: AI Post Writer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div className="order-2 md:order-1">
              <PostWriterMock />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-2">02 — AI Post Writer</p>
              <h3 className="text-2xl font-black text-slate-800 mb-3">Three captions in 3 seconds</h3>
              <p className="text-slate-500 leading-relaxed">
                Select a festival, your customer audience and the platform. Nukkad writes three caption options — short and punchy, story-style, or a direct offer. Pick one. Edit if you want. Done.
              </p>
            </div>
          </div>

          {/* Feature 3: Customer Segments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-2">03 — Customer Segments</p>
              <h3 className="text-2xl font-black text-slate-800 mb-3">Know who to message, not just what to say</h3>
              <p className="text-slate-500 leading-relaxed">
                Upload your WhatsApp Business export once. Nukkad sorts your customers automatically — who buys regularly, who has not been back, who has a birthday coming. Send the right message to the right group.
              </p>
            </div>
            <CustomersMock />
          </div>

          {/* Feature 4: Broadcast */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <BroadcastMock />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-2">04 — Broadcast</p>
              <h3 className="text-2xl font-black text-slate-800 mb-3">Send to 87 customers in one tap</h3>
              <p className="text-slate-500 leading-relaxed">
                Schedule WhatsApp campaigns to specific customer groups. Preview exactly what they will receive. Set the time, approve, and Nukkad handles the rest.
              </p>
              <p className="text-xs text-slate-400 mt-3 italic">
                This is the feature that gets replies. People respond to shops they already know on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-800 mb-3">Three Steps</h2>
            <p className="text-slate-500">That is all it takes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Connect Your Customer List", desc: "Export your WhatsApp Business chat and upload it. Nukkad does the rest — no spreadsheets, no manual entry." },
              { step: "2", title: "Generate Festival Campaign", desc: "Select the festival and your audience. Nukkad writes the campaign and schedules it at the best time for your customers." },
              { step: "3", title: "Send and Track Results", desc: "Review how many customers received it, replied, and visited. Clear numbers, no jargon." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#FF6B35] text-white text-xl font-black flex items-center justify-center mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEENA USE CASE ───────────────────────────────────────────────── */}
      <section className="py-20 bg-[#fff9f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-2">Example</p>
            <h2 className="text-3xl font-black text-slate-800">Meet Meena Boutique</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <div className="bg-slate-100 rounded-2xl p-5">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Before Nukkad</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {["Posting randomly, whenever she found time", "No record of which customers were regulars", "Missing every festival — too busy to think about marketing", "Zero WhatsApp campaigns sent last year"].map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#1e293b] rounded-2xl p-5">
                <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-3">After Nukkad</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {["Festival campaigns planned 7 days ahead", "Customer segments organised — 24 champions, 87 loyal", "Broadcasts scheduled — she just approves", "Diwali campaign sent in 4 minutes"].map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#FF6B35] flex-shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-[#FF6B35] rounded-2xl p-6 text-white mb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-200 mb-4">Diwali Campaign Results</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-black">420</p>
                    <p className="text-xs text-orange-200 mt-1">Customers Reached</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black">68</p>
                    <p className="text-xs text-orange-200 mt-1">Replies Received</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black">16%</p>
                    <p className="text-xs text-orange-200 mt-1">Reply Rate</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  &quot;I used to spend 2 hours on every festival trying to figure out what to post and who to send it to. Now I do it in the time it takes to have my morning chai.&quot;
                </p>
                <p className="text-xs font-bold text-slate-400 mt-3">Meena Agarwal — Boutique owner, Indore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SCREENSHOTS ──────────────────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 mb-3">See the Full Product</h2>
            <p className="text-slate-500">Every screen your shop needs, in one place.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScreenMock title="Today / Dashboard">
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-slate-400">Hello,</p>
                    <p className="text-sm font-black text-slate-800">Meena Boutique</p>
                  </div>
                  <div className="bg-[#fff1eb] px-2 py-1 rounded-lg">
                    <p className="text-xs font-black text-[#FF6B35]">4-week streak</p>
                  </div>
                </div>
                <div className="bg-[#FF6B35] rounded-xl p-3 text-white text-xs">
                  <p className="font-bold opacity-70 uppercase tracking-widest mb-1">Festival Alert</p>
                  <p className="font-black">Navratri in 9 days</p>
                  <p className="opacity-80 mt-0.5">3 posts ready for your shop</p>
                </div>
                <div className="bg-[#dcf8c6] rounded-xl p-3 text-xs text-slate-700">
                  Today&apos;s suggested post: Navratri collection is here...
                </div>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {[{ v: "3", l: "Posts" }, { v: "89", l: "Reached" }, { v: "12", l: "Replies" }].map((s) => (
                    <div key={s.l} className="text-center bg-slate-50 rounded-lg p-2">
                      <p className="text-base font-black text-[#FF6B35]">{s.v}</p>
                      <p className="text-[9px] text-slate-400">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScreenMock>

            <ScreenMock title="Festival Calendar">
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Sep – Oct 2026</p>
                <div className="grid grid-cols-7 gap-0.5 text-center mb-2">
                  {["M","T","W","T","F","S","S"].map((d, i) => (
                    <div key={i} className="text-[9px] font-bold text-slate-400 py-1">{d}</div>
                  ))}
                  {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
                    <div key={d} className={`text-[9px] py-1 rounded ${d === 2 ? "bg-[#FF6B35] text-white font-bold" : d === 12 ? "bg-orange-100 text-[#FF6B35] font-bold" : "text-slate-500"}`}>
                      {d}
                    </div>
                  ))}
                </div>
                {[{ name: "Navratri", d: "Oct 2" }, { name: "Dussehra", d: "Oct 12" }].map((f) => (
                  <div key={f.name} className="flex items-center justify-between bg-[#fff9f2] rounded-lg px-3 py-2">
                    <p className="text-xs font-bold text-slate-700">{f.name}</p>
                    <p className="text-[10px] text-slate-400">{f.d}</p>
                  </div>
                ))}
              </div>
            </ScreenMock>

            <ScreenMock title="Customers (CRM)">
              <div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[{ l: "Champions", n: 24, c: "#FF6B35" }, { l: "Loyal", n: 87, c: "#1e293b" }, { l: "Inactive", n: 41, c: "#94a3b8" }, { l: "Birthday", n: 12, c: "#e879f9" }].map((s) => (
                    <div key={s.l} className="bg-slate-50 rounded-lg p-2 text-center">
                      <p className="text-lg font-black" style={{ color: s.c }}>{s.n}</p>
                      <p className="text-[9px] text-slate-400">{s.l}</p>
                    </div>
                  ))}
                </div>
                {["Priya Sharma", "Sunita Gupta", "Rekha Jain"].map((name) => (
                  <div key={name} className="flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#fff1eb] text-[#FF6B35] text-[9px] font-black flex items-center justify-center">{name[0]}</div>
                      <p className="text-xs font-medium text-slate-700">{name}</p>
                    </div>
                    <button className="text-[9px] bg-[#25D366] text-white px-2 py-0.5 rounded font-bold">Msg</button>
                  </div>
                ))}
              </div>
            </ScreenMock>

            <ScreenMock title="Post Generator">
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-1.5 mb-2">
                  {[{ l: "Festival", v: "Diwali" }, { l: "Audience", v: "Loyal" }, { l: "Platform", v: "WhatsApp" }].map((item) => (
                    <div key={item.l} className="bg-[#fff9f2] rounded-lg p-1.5 text-center">
                      <p className="text-[8px] text-slate-400">{item.l}</p>
                      <p className="text-[10px] font-bold text-slate-700">{item.v}</p>
                    </div>
                  ))}
                </div>
                {["Short — Diwali sale! 15% off all ethnic wear.", "Story — This Diwali, celebrate with us. Meena Boutique's new collection is in.", "Offer — WhatsApp DIWALI to claim your discount before stock runs out."].map((cap, i) => (
                  <div key={i} className="bg-[#dcf8c6] rounded-xl rounded-tl-sm px-3 py-2 text-[10px] text-slate-700 leading-snug">
                    {cap}
                  </div>
                ))}
              </div>
            </ScreenMock>

            <ScreenMock title="Insights">
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">This Week</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[{ v: "3", l: "Posts" }, { v: "87", l: "Reached" }, { v: "6", l: "Replies" }].map((s) => (
                    <div key={s.l} className="bg-[#fff9f2] rounded-lg p-2">
                      <p className="text-xl font-black text-[#FF6B35]">{s.v}</p>
                      <p className="text-[9px] text-slate-400">{s.l}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#1e293b] rounded-xl p-3 text-white">
                  <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">Posting Streak</p>
                  <p className="text-lg font-black mt-0.5">4 weeks</p>
                </div>
                <div className="bg-[#fff1eb] rounded-xl p-2.5">
                  <p className="text-[9px] font-bold text-[#FF6B35] uppercase">Next: Navratri in 9 days</p>
                  <p className="text-[10px] text-slate-600 mt-0.5">Plan posts now for 3x more replies</p>
                </div>
              </div>
            </ScreenMock>

            <ScreenMock title="Settings">
              <div className="space-y-2">
                {[{ l: "Business Name", v: "Meena Boutique" }, { l: "City", v: "Indore" }, { l: "Business Type", v: "Boutique" }].map((f) => (
                  <div key={f.l} className="bg-[#fff9f2] rounded-lg px-3 py-2">
                    <p className="text-[9px] text-slate-400">{f.l}</p>
                    <p className="text-xs font-semibold text-slate-700">{f.v}</p>
                  </div>
                ))}
                <div className="bg-[#fff9f2] rounded-lg px-3 py-2">
                  <p className="text-[9px] text-slate-400">Language</p>
                  <div className="flex gap-1.5 mt-1">
                    <span className="text-[10px] font-bold bg-[#FF6B35] text-white px-2 py-0.5 rounded-full">English</span>
                    <span className="text-[10px] font-medium text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full">हिंदी</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-[9px] text-slate-400">Plan</p>
                    <p className="text-xs font-bold text-slate-700">Free</p>
                  </div>
                  <button className="text-[9px] bg-[#FF6B35] text-white px-2.5 py-1 rounded-lg font-bold">Upgrade</button>
                </div>
              </div>
            </ScreenMock>
          </div>
        </div>
      </section>

      {/* ── WHY NUKKAD ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#fff9f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 mb-3">Why Nukkad</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Built For India", desc: "Indian festivals. Indian languages. Indian business types. Not a foreign product retrofitted with a Hindi toggle." },
              { title: "WhatsApp First", desc: "Works the way business owners already communicate. No new app to learn. No new habits to form." },
              { title: "No Marketing Team Required", desc: "AI handles the calendar, the copy and the scheduling. You review and approve. The whole thing takes 3 minutes." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-orange-100 p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#fff1eb] mb-4" />
                <h3 className="text-base font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS / SOCIAL PROOF ──────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-[#fff9f2] rounded-2xl border border-orange-100 p-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">What People Are Saying</p>
            <p className="text-lg font-black text-slate-800 mb-2">Coming Soon</p>
            <p className="text-sm text-slate-500">
              Currently testing with early access businesses in Indore and Jaipur.<br />
              Reviews will be here soon.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 bg-[#fff9f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 mb-3">Simple Pricing</h2>
            <p className="text-slate-500">Start free. Upgrade when it is working.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {[
              { name: "Free", price: "₹0", features: ["5 AI posts/month", "30-day festival calendar", "Basic contacts list"], highlighted: false },
              { name: "Starter", price: "₹399", features: ["30 AI posts/month", "Full festival calendar", "WhatsApp CRM (500 contacts)", "Broadcast messages"], highlighted: true },
              { name: "Growth", price: "₹899", features: ["Unlimited posts", "WhatsApp API", "CRM (5,000 contacts)", "Ad ROI tracking"], highlighted: false },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 border flex flex-col gap-4 ${plan.highlighted ? "bg-[#1e293b] text-white border-transparent shadow-xl scale-105" : "bg-white border-slate-200 shadow-sm"}`}
              >
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.highlighted ? "text-orange-300" : "text-[#FF6B35]"}`}>{plan.name}</p>
                  <div className={`inline-block px-3 py-1.5 rounded-lg text-sm font-bold ${plan.highlighted ? "bg-[#FF6B35] text-white" : "bg-slate-100 text-slate-600"}`}>
                    Coming Soon
                  </div>
                  <p className={`text-xs mt-2 ${plan.highlighted ? "text-slate-400" : "text-slate-400"}`}>{plan.price}/month at launch</p>
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
                  className={`text-center text-sm font-bold py-3 rounded-xl transition-all ${plan.highlighted ? "bg-[#FF6B35] text-white hover:bg-[#e85520]" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                >
                  Join Waitlist
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 mb-3">Who Built This</h2>
            <p className="text-slate-500 max-w-md mx-auto">
              Built by people who grew up around Indian small businesses. This is not a Silicon Valley team building for India from afar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
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

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#fff9f2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 mb-3">Questions</h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#FF6B35] py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Your Next Festival Campaign<br />Shouldn&apos;t Start The Night Before
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            Plan, create and schedule campaigns in minutes.
          </p>
          <Link
            href="/en/login"
            className="inline-block bg-white text-[#FF6B35] font-black px-10 py-4 rounded-xl hover:bg-orange-50 transition-all shadow-lg text-base"
          >
            Get Early Access
          </Link>
          <p className="text-orange-200 text-sm mt-4">Free to start. No credit card required.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
