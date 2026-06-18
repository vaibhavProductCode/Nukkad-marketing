"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ─── Hero Demo Widget ──────────────────────────────────────────────────────────

function HeroDemo() {
  const [state, setState] = useState<"idle" | "generating" | "done">("idle");

  function run() {
    setState("generating");
    setTimeout(() => setState("done"), 1800);
  }

  return (
    <div className="relative w-full max-w-[360px] mx-auto select-none">
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-[#FF6B35]/25 blur-2xl scale-110 pointer-events-none" />

      <div className="relative bg-[#0f172a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="text-white/30 text-[10px] ml-3 font-mono">nukkad.app/create</span>
        </div>

        <div className="p-5">
          {/* Input fields */}
          <div
            className={`space-y-2.5 transition-all duration-500 ${state === "done" ? "opacity-40" : "opacity-100"}`}
          >
            <p className="text-[10px] font-bold text-[#FF6B35] uppercase tracking-widest">
              Diwali — 12 days away
            </p>
            {[
              { label: "Business", value: "Meena Boutique" },
              { label: "Audience", value: "Loyal Customers · 87" },
              { label: "Platform", value: "WhatsApp" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-3 py-2.5"
              >
                <span className="text-[11px] text-white/40">{row.label}</span>
                <span className="text-[11px] font-semibold text-white/80">{row.value}</span>
              </div>
            ))}

            {state === "idle" && (
              <button
                onClick={run}
                className="w-full bg-[#FF6B35] hover:bg-[#e85520] text-white font-black py-3 rounded-xl text-sm transition-all mt-1"
              >
                Generate Campaign
              </button>
            )}
            {state === "generating" && (
              <button
                disabled
                className="w-full bg-[#FF6B35]/60 text-white font-black py-3 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Generating...
              </button>
            )}
          </div>

          {/* Output */}
          {state === "done" && (
            <div className="mt-3 bg-[#0d1f17] border border-green-900/50 rounded-2xl p-4 animate-[fadeIn_0.4s_ease]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-white/40 font-mono">Generated in 3s</span>
                <span className="text-[10px] bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded-full border border-green-500/20">
                  Ready
                </span>
              </div>
              <div className="bg-[#dcf8c6] rounded-2xl rounded-tl-sm px-4 py-3 mb-3">
                <p className="text-xs text-slate-800 leading-relaxed">
                  Dear Meena Ji, this Diwali enjoy 15% off our new festive
                  collection. Lehengas, kurtis and accessories — all in stock.
                  Offer valid until Oct 30.
                </p>
                <p className="text-[10px] text-slate-400 text-right mt-1">6:00 PM</p>
              </div>
              <button className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-black py-2.5 rounded-xl text-xs transition-all">
                Schedule Broadcast to 87 customers
              </button>
            </div>
          )}

          {state === "idle" && (
            <p className="text-center text-[10px] text-white/20 mt-3">
              Click Generate to see it work
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Stats Ticker ──────────────────────────────────────────────────────────────

function StatBar() {
  const items = [
    { value: "63M", label: "Small businesses in India" },
    { value: "60+", label: "Festivals tracked" },
    { value: "3s", label: "Campaign generated" },
    { value: "Hindi + EN", label: "Languages supported" },
    { value: "WhatsApp", label: "Native integration" },
  ];

  return (
    <div className="border-y border-white/5 bg-[#080d18]/80 backdrop-blur py-4 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-3">
        {items.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <span className="text-base font-black text-[#FF6B35]">{s.value}</span>
            <span className="text-xs text-white/30">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Feature Card ──────────────────────────────────────────────────────────────

function FestivalCalendarMock() {
  return (
    <div className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
      <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between">
        <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest">
          Upcoming for Meena Boutique
        </p>
        <span className="text-[10px] text-[#FF6B35] font-bold bg-[#FF6B35]/10 px-2 py-0.5 rounded-full">
          Indore
        </span>
      </div>
      {[
        { name: "Navratri", days: 9, posts: 3, color: "#FF6B35" },
        { name: "Dussehra", days: 15, posts: 2, color: "#f97316" },
        { name: "Karva Chauth", days: 22, posts: 2, color: "#fb923c" },
        { name: "Diwali", days: 28, posts: 5, color: "#fdba74" },
      ].map((f, i) => (
        <div
          key={f.name}
          className={`flex items-center justify-between px-5 py-3.5 ${i !== 0 ? "border-t border-white/5" : ""} hover:bg-white/2 transition-all`}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl text-white text-xs font-black flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: f.color + "22", color: f.color }}
            >
              {f.days}d
            </div>
            <div>
              <p className="text-sm font-semibold text-white/80">{f.name}</p>
              <p className="text-[11px] text-white/30">{f.posts} posts suggested</p>
            </div>
          </div>
          <button
            className="text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all"
            style={{ color: f.color, backgroundColor: f.color + "15" }}
          >
            Plan
          </button>
        </div>
      ))}
    </div>
  );
}

function PostWriterMock() {
  return (
    <div className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
      <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between">
        <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest">AI Post Writer</p>
        <span className="text-[10px] bg-green-500/15 text-green-400 font-bold px-2 py-0.5 rounded-full border border-green-500/20">
          Generated in 3s
        </span>
      </div>
      <div className="px-5 py-3 border-b border-white/5 grid grid-cols-3 gap-2">
        {[
          { label: "Festival", val: "Diwali" },
          { label: "Audience", val: "Loyal" },
          { label: "Platform", val: "WhatsApp" },
        ].map((item) => (
          <div key={item.label} className="text-center bg-white/5 rounded-xl py-2.5">
            <p className="text-[9px] text-white/30 uppercase">{item.label}</p>
            <p className="text-xs font-bold text-white/80 mt-0.5">{item.val}</p>
          </div>
        ))}
      </div>
      <div className="p-4 space-y-2.5">
        {[
          { style: "Short", text: "Diwali collection is here! 15% off on all ethnic wear. Visit us today." },
          { style: "Story", text: "This Diwali, celebrate with us. Meena Boutique's new lehenga collection is in — exclusively for our loyal customers." },
          { style: "Offer", text: "Diwali sale: 15% off until Oct 30. Reply DIWALI to claim your discount before stock runs out." },
        ].map((v) => (
          <div key={v.style} className="bg-[#dcf8c6] rounded-2xl rounded-tl-sm px-3 py-2.5 relative">
            <span className="absolute -top-2 left-3 text-[9px] font-bold bg-[#0f172a] text-white/50 px-2 py-0.5 rounded-full border border-white/10">
              {v.style}
            </span>
            <p className="text-xs text-slate-800 leading-relaxed mt-1">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomersMock() {
  return (
    <div className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
      <div className="px-5 py-3.5 border-b border-white/5">
        <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Customer Segments</p>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4">
        {[
          { label: "Champions", count: 24, color: "#FF6B35" },
          { label: "Loyal", count: 87, color: "#60a5fa" },
          { label: "Inactive", count: 41, color: "#94a3b8" },
          { label: "Birthday", count: 12, color: "#e879f9" },
        ].map((seg) => (
          <div
            key={seg.label}
            className="rounded-xl border border-white/5 bg-white/3 p-3 text-center"
          >
            <p className="text-2xl font-black" style={{ color: seg.color }}>
              {seg.count}
            </p>
            <p className="text-[10px] text-white/30 mt-0.5">{seg.label}</p>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <button className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold py-2.5 rounded-xl text-xs transition-all">
          Broadcast to Loyal Customers (87)
        </button>
      </div>
    </div>
  );
}

function BroadcastMock() {
  return (
    <div className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
      <div className="bg-[#075e54] px-5 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs font-black">
          87
        </div>
        <div>
          <p className="text-xs font-bold text-white">Loyal Customers</p>
          <p className="text-[10px] text-green-300">87 recipients scheduled</p>
        </div>
      </div>
      <div className="p-4 bg-[#e5ddd5] min-h-28">
        <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
          <p className="text-xs text-slate-800 leading-relaxed">
            Dear Meena Ji, this Diwali enjoy 15% off our new festive collection.
            Lehengas, kurtis and accessories — all in stock. Offer valid until
            Oct 30.
          </p>
          <p className="text-[10px] text-slate-400 text-right mt-1">6:00 PM</p>
        </div>
      </div>
      <div className="p-3 border-t border-white/5 bg-[#0f172a] flex items-center justify-between">
        <div>
          <p className="text-[10px] text-white/30">Scheduled</p>
          <p className="text-xs font-bold text-white/70">Today · 6:00 PM</p>
        </div>
        <button className="bg-[#16a34a] text-white font-bold px-4 py-1.5 rounded-lg text-xs hover:bg-[#15803d] transition-all">
          Confirm
        </button>
      </div>
    </div>
  );
}

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const items = [
    {
      q: "Do I need marketing experience to use Nukkad?",
      a: "No. Nukkad handles the festival calendar, writes the copy, and schedules the broadcast. You review it and approve with one tap. The whole process takes under 5 minutes.",
    },
    {
      q: "How does it connect with WhatsApp?",
      a: "You export your WhatsApp Business contacts and upload once. Nukkad reads the signals — who buys often, who has gone quiet, who has a birthday — and lets you broadcast directly to the right group.",
    },
    {
      q: "Is my customer data safe?",
      a: "Your raw WhatsApp messages are never stored on our servers. We extract signals only — purchase frequency, category, recency. Message content is processed in memory and discarded immediately.",
    },
    {
      q: "Does it work in Hindi?",
      a: "Yes. The entire app is available in Hindi and English. You can switch languages any time from settings. The AI post writer also generates captions in Hindi if that is what your customers respond to.",
    },
    {
      q: "When does pricing start?",
      a: "Pricing is not live yet. Early access is completely free. Join the waitlist and you will be the first to know — with a founding member discount locked in.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden"
        >
          <button
            className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-sm font-semibold text-white/80">{item.q}</span>
            <span
              className={`text-[#FF6B35] text-lg font-black flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-sm text-white/40 leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Team ──────────────────────────────────────────────────────────────────────

const TEAM = [
  {
    name: "Vaibhav Shukla",
    role: "Product & Strategy",
    bio: "Former growth lead at a D2C brand. Spent 3 years helping small traders in Indore figure out Facebook ads.",
    initials: "VS",
    color: "#FF6B35",
  },
  {
    name: "Priya Mehta",
    role: "Design",
    bio: "Grew up watching her mother run a sari shop in Nagpur. Previously designed for two fintech startups.",
    initials: "PM",
    color: "#60a5fa",
  },
  {
    name: "Arjun Nair",
    role: "Engineering",
    bio: "Built backend systems at a logistics startup. Fluent in Malayalam, Tamil, and distributed systems.",
    initials: "AN",
    color: "#34d399",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#060b16] text-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-[#FF6B35]/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-40 left-0 w-96 h-96 bg-[#FF6B35]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 px-4 py-1.5 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
              <span className="text-xs font-semibold text-[#FF6B35]">
                AI Marketing for India&apos;s Neighbourhood Businesses
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-black leading-[1.05] tracking-tight mb-5">
              Never Miss{" "}
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#fb923c] bg-clip-text text-transparent">
                Another
              </span>
              <br />
              Festival Sale
            </h1>

            <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-md">
              Generate WhatsApp, Instagram and Facebook campaigns for every
              Indian festival in minutes. Built for boutiques, kirana stores,
              salons and sweet shops.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/en/login"
                className="px-8 py-3.5 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#e85520] transition-all shadow-lg shadow-[#FF6B35]/25 text-sm"
              >
                Get Early Access — Free
              </Link>
              <a
                href="#features"
                className="px-8 py-3.5 bg-white/5 border border-white/10 text-white/70 font-semibold rounded-xl hover:bg-white/10 transition-all text-sm text-center"
              >
                See How It Works
              </a>
            </div>

            <p className="text-xs text-white/20 mt-4">
              No credit card. No marketing team. No jargon.
            </p>
          </div>

          <HeroDemo />
        </div>
      </section>

      {/* ── STAT BAR ─────────────────────────────────────────────────────── */}
      <StatBar />

      {/* ── BUILT FOR ────────────────────────────────────────────────────── */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold text-white/20 uppercase tracking-widest mb-5">
            Built for shops like yours
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Women's Boutiques",
              "Kirana Stores",
              "Sweet Shops",
              "Salons & Parlours",
              "Gift Stores",
              "Mobile Shops",
              "Jewellery Stores",
              "Bakeries",
            ].map((type) => (
              <span
                key={type}
                className="text-sm text-white/50 bg-white/4 border border-white/8 px-4 py-2 rounded-full hover:border-[#FF6B35]/30 hover:text-white/80 transition-all"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-3">
              The Problem
            </p>
            <h2 className="text-4xl font-black leading-tight">
              Every Festival,{" "}
              <span className="text-white/30">the same story</span>
            </h2>
            <p className="text-white/40 mt-4 max-w-lg mx-auto text-base leading-relaxed">
              India has 63 million small businesses. Most owners know Navratri
              is coming. None of them have time to do anything about it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                label: "The situation",
                lines: [
                  "Festival is 2 weeks away",
                  "No content plan",
                  "No customer list",
                  "No campaign",
                ],
                accent: "text-white/30",
                bg: "bg-white/3",
                border: "border-white/6",
              },
              {
                step: "02",
                label: "The reality",
                lines: [
                  "Owner is running the shop alone",
                  "No marketing team",
                  "No designer, no copywriter",
                  "No budget for agencies",
                ],
                accent: "text-white/50",
                bg: "bg-white/5",
                border: "border-white/8",
              },
              {
                step: "03",
                label: "The result",
                lines: [
                  "Competitor sends a Diwali offer",
                  "Customers buy elsewhere",
                  "Festival sale window closes",
                  "Repeat every 3 weeks",
                ],
                accent: "text-[#FF6B35]",
                bg: "bg-[#FF6B35]/5",
                border: "border-[#FF6B35]/15",
              },
            ].map((card) => (
              <div
                key={card.step}
                className={`${card.bg} border ${card.border} rounded-2xl p-6`}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className={`text-xs font-black ${card.accent} font-mono`}>
                    {card.step}
                  </span>
                  <span className="text-xs font-bold text-white/30 uppercase tracking-widest">
                    {card.label}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {card.lines.map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <span className={`mt-[5px] w-1 h-1 rounded-full flex-shrink-0 ${card.accent.replace("text-", "bg-")}`} />
                      <span className="text-sm text-white/60">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-white/25 mt-8 max-w-lg mx-auto">
            The shop owner knows exactly what to do. She just never has the time
            to do it. Nukkad gives her back that time.
          </p>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section id="features" className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-3">
              The Solution
            </p>
            <h2 className="text-4xl font-black leading-tight mb-4">
              Your Marketing Co-Pilot
              <br />
              <span className="text-white/30">For Every Festival</span>
            </h2>
            <p className="text-white/40 max-w-md mx-auto">
              Four things that replace an entire marketing team.
            </p>
          </div>

          {/* Feature 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-bold text-[#FF6B35] uppercase tracking-widest bg-[#FF6B35]/10 px-3 py-1.5 rounded-full mb-4">
                01 — Festival Calendar
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Know what is coming
                <br />before you forget
              </h3>
              <p className="text-white/40 leading-relaxed text-sm">
                Nukkad tracks 60+ Indian festivals and flags the ones relevant
                to your shop type and city. You never need to check a calendar
                again — the calendar comes to you with a content plan attached.
              </p>
              <ul className="mt-5 space-y-2">
                {["60+ festivals pre-loaded", "Filtered by your city and business type", "Post suggestions for each festival"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                    <span className="w-1 h-1 rounded-full bg-[#FF6B35] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <FestivalCalendarMock />
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <PostWriterMock />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold text-[#FF6B35] uppercase tracking-widest bg-[#FF6B35]/10 px-3 py-1.5 rounded-full mb-4">
                02 — AI Post Writer
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Three captions
                <br />in 3 seconds
              </h3>
              <p className="text-white/40 leading-relaxed text-sm">
                Select a festival, your customer audience and the platform.
                Nukkad writes three caption options — short and punchy,
                story-style, or a direct offer. Pick one, edit if you want.
                Done.
              </p>
              <ul className="mt-5 space-y-2">
                {["Hindi and English captions", "WhatsApp, Instagram, Facebook", "Tone matched to your audience"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                    <span className="w-1 h-1 rounded-full bg-[#FF6B35] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-bold text-[#FF6B35] uppercase tracking-widest bg-[#FF6B35]/10 px-3 py-1.5 rounded-full mb-4">
                03 — Customer Segments
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Know who to message,
                <br />not just what to say
              </h3>
              <p className="text-white/40 leading-relaxed text-sm">
                Upload your WhatsApp Business export once. Nukkad automatically
                segments your customers — who buys regularly, who has not been
                back, who has a birthday this week. Send the right message to
                the right group.
              </p>
              <ul className="mt-5 space-y-2">
                {["Auto-segmentation from WhatsApp export", "Champions, Loyal, Inactive, Birthday groups", "Privacy-first — raw messages never stored"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                    <span className="w-1 h-1 rounded-full bg-[#FF6B35] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <CustomersMock />
          </div>

          {/* Feature 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <BroadcastMock />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold text-[#FF6B35] uppercase tracking-widest bg-[#FF6B35]/10 px-3 py-1.5 rounded-full mb-4">
                04 — Broadcast
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Send to 87 customers
                <br />in one tap
              </h3>
              <p className="text-white/40 leading-relaxed text-sm">
                Schedule WhatsApp campaigns to specific customer groups. Preview
                exactly what they will receive. Set the time, approve, and
                Nukkad handles the rest.
              </p>
              <p className="text-xs text-white/20 mt-4 italic">
                This is the feature that gets replies. People respond to shops
                they already know on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-[#0a0f1e] to-[#060b16] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2 className="text-4xl font-black">Three Steps. That is All.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                n: "1",
                title: "Connect Your Customers",
                desc: "Export your WhatsApp Business chat and upload it once. Nukkad extracts the signals — no spreadsheets, no manual work.",
              },
              {
                n: "2",
                title: "Generate the Campaign",
                desc: "Pick the festival and your audience. Nukkad writes 3 captions, picks the best send time, and queues it for approval.",
              },
              {
                n: "3",
                title: "Send and Track",
                desc: "One tap to approve. Then see how many customers received it, replied, and visited. Clear numbers, no jargon.",
              },
            ].map((item, i) => (
              <div key={item.n} className="relative">
                {i < 2 && (
                  <div className="hidden sm:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-[#FF6B35]/30 to-transparent z-0 -translate-y-1/2" />
                )}
                <div className="relative bg-white/3 border border-white/8 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#e85520] text-white text-xl font-black flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#FF6B35]/20">
                    {item.n}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ───────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-3">Real Impact</p>
            <h2 className="text-4xl font-black">Meet Meena Boutique</h2>
            <p className="text-white/30 mt-3 max-w-md mx-auto text-sm">
              A women&apos;s ethnic wear store in Indore. 1 owner, 1 assistant,
              zero marketing budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white/3 border border-white/6 rounded-2xl p-6">
                <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-4">
                  Before Nukkad
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Posting randomly, whenever she found time",
                    "No record of which customers were regulars",
                    "Missing every festival — too busy running the shop",
                    "Zero WhatsApp campaigns sent last year",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2.5 text-sm text-white/40">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/15 flex-shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FF6B35]/8 border border-[#FF6B35]/15 rounded-2xl p-6">
                <p className="text-[10px] font-bold text-[#FF6B35]/70 uppercase tracking-widest mb-4">
                  After Nukkad
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Festival campaigns planned 7 days in advance",
                    "Customers segmented — 24 champions, 87 loyal",
                    "Broadcasts scheduled — she just taps Approve",
                    "Diwali campaign sent in 4 minutes flat",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2.5 text-sm text-white/70">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#FF6B35] flex-shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#e85520] rounded-2xl p-6 text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest text-orange-200 mb-5">
                  Diwali Campaign Results
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { v: "420", l: "Customers Reached" },
                    { v: "68", l: "Replies Received" },
                    { v: "16%", l: "Reply Rate" },
                  ].map((s) => (
                    <div key={s.l}>
                      <p className="text-3xl font-black">{s.v}</p>
                      <p className="text-[10px] text-orange-200 mt-1 leading-tight">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/3 border border-white/8 rounded-2xl p-6 flex-1 flex flex-col justify-between">
                <p className="text-sm text-white/50 leading-relaxed italic">
                  &quot;I used to spend 2 hours on every festival trying to figure
                  out what to post and who to send it to. Now I do it in the
                  time it takes to have my morning chai.&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FF6B35]/20 text-[#FF6B35] text-xs font-black flex items-center justify-center">
                    M
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/60">Meena Agarwal</p>
                    <p className="text-[10px] text-white/25">Boutique owner, Indore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY NUKKAD ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-[#060b16] to-[#0a0f1e] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black mb-3">Why Nukkad</h2>
            <p className="text-white/30 max-w-md mx-auto text-sm">
              Not a foreign product with a Hindi toggle. Built from the ground
              up for how Indian small businesses actually work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: "IN",
                title: "Built For India",
                desc: "Indian festivals. Indian languages. Indian business types. Every detail is tuned for the way shops in Indore, Jaipur, and Lucknow actually operate.",
                color: "#FF6B35",
              },
              {
                icon: "WA",
                title: "WhatsApp First",
                desc: "Works the way business owners already communicate. No new apps to learn. No habits to form. Your customers are already there.",
                color: "#25D366",
              },
              {
                icon: "AI",
                title: "Zero Marketing Experience Required",
                desc: "AI handles the calendar, the copy, and the scheduling. You review and approve. The whole thing takes under 5 minutes per festival.",
                color: "#60a5fa",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black mb-5"
                  style={{
                    backgroundColor: item.color + "15",
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-white/35 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-4xl font-black mb-3">Simple Plans</h2>
            <p className="text-white/30 text-sm">Start free. Upgrade when it is working for you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch">
            {[
              {
                name: "Free",
                launch: "₹0",
                features: ["5 AI posts/month", "30-day festival calendar", "Basic contacts list"],
                highlight: false,
              },
              {
                name: "Starter",
                launch: "₹399/month",
                features: ["30 AI posts/month", "Full festival calendar", "WhatsApp CRM — 500 contacts", "Broadcast messages"],
                highlight: true,
              },
              {
                name: "Growth",
                launch: "₹899/month",
                features: ["Unlimited posts", "WhatsApp API integration", "CRM — 5,000 contacts", "Ad ROI tracking"],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 border flex flex-col gap-5 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-[#FF6B35]/10 to-[#FF6B35]/5 border-[#FF6B35]/30 shadow-xl shadow-[#FF6B35]/10"
                    : "bg-white/3 border-white/8"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white text-[10px] font-black px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">
                    {plan.name}
                  </p>
                  <div className="inline-block bg-white/8 border border-white/10 text-white/60 text-sm font-bold px-3 py-1.5 rounded-lg">
                    Coming Soon
                  </div>
                  <p className="text-[11px] text-white/20 mt-2">{plan.launch} at launch</p>
                </div>
                <ul className="space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/50">
                      <span className="text-[#FF6B35] mt-0.5 flex-shrink-0">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/en/login"
                  className={`text-center text-sm font-bold py-3 rounded-xl transition-all ${
                    plan.highlight
                      ? "bg-[#FF6B35] text-white hover:bg-[#e85520] shadow-lg shadow-[#FF6B35]/25"
                      : "bg-white/8 text-white/60 hover:bg-white/12 border border-white/8"
                  }`}
                >
                  Join Waitlist
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-[#0a0f1e] to-[#060b16] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-3">The Team</p>
            <h2 className="text-4xl font-black mb-3">Who Built This</h2>
            <p className="text-white/30 max-w-md mx-auto text-sm">
              People who grew up around Indian small businesses. This is not a
              team building for India from afar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-black mb-5"
                  style={{
                    backgroundColor: member.color + "15",
                    color: member.color,
                  }}
                >
                  {member.initials}
                </div>
                <p className="font-bold text-white text-sm">{member.name}</p>
                <p className="text-[11px] font-semibold mt-0.5 mb-3" style={{ color: member.color }}>
                  {member.role}
                </p>
                <p className="text-xs text-white/35 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-4xl font-black">Questions</h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-28 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/15 via-[#0a0f1e] to-[#060b16] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-5">
            Your Next Festival Campaign
            <br />
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#fb923c] bg-clip-text text-transparent">
              Shouldn&apos;t Start The Night Before
            </span>
          </h2>
          <p className="text-white/40 mb-8 text-base">
            Plan, create, and schedule campaigns in under 5 minutes.
          </p>
          <Link
            href="/en/login"
            className="inline-block bg-[#FF6B35] text-white font-black px-10 py-4 rounded-xl hover:bg-[#e85520] transition-all shadow-xl shadow-[#FF6B35]/30 text-base"
          >
            Get Early Access — It is Free
          </Link>
          <p className="text-white/20 text-sm mt-4">
            No credit card. No marketing team. No jargon.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
