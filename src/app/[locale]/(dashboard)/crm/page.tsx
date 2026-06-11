"use client";
import { useState } from "react";
import { MOCK_CONTACTS, SEGMENT_COLORS } from "@/lib/constants";
import type { ContactSegment } from "@/types";
import SegmentBadge from "@/components/ui/Badge";

const TABS: { key: ContactSegment | "all"; label: string; icon: string }[] = [
  { key: "all", label: "All", icon: "👥" },
  { key: "champion", label: "Champions", icon: "⭐" },
  { key: "loyal", label: "Loyal", icon: "💚" },
  { key: "at_risk", label: "At Risk", icon: "⚠️" },
  { key: "new", label: "New", icon: "🆕" },
  { key: "birthday", label: "Birthdays", icon: "🎂" },
];

export default function CRMPage() {
  const [activeTab, setActiveTab] = useState<ContactSegment | "all">("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filtered = activeTab === "all" ? MOCK_CONTACTS : MOCK_CONTACTS.filter((c) => c.segment === activeTab);
  const segmentCounts = TABS.reduce((acc, tab) => {
    acc[tab.key] = tab.key === "all" ? MOCK_CONTACTS.length : MOCK_CONTACTS.filter((c) => c.segment === tab.key).length;
    return acc;
  }, {} as Record<string, number>);

  function toggleSelect(id: string) {
    setSelectedIds((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-800">WhatsApp CRM</h1>
          <p className="text-sm text-slate-500 mt-0.5">{MOCK_CONTACTS.length} contacts · {MOCK_CONTACTS.filter((c) => c.optedInBroadcast).length} opted in</p>
        </div>
        <div className="flex gap-2">
          <button className="text-sm font-semibold bg-slate-100 text-slate-700 px-4 py-2 rounded-xl hover:bg-slate-200 transition-all">
            + Add Contact
          </button>
          <button className="text-sm font-semibold bg-[#25D366] text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-all">
            📢 Broadcast
          </button>
        </div>
      </div>

      {/* Segment stats */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-5">
        {TABS.filter((t) => t.key !== "all").map((tab) => {
          const color = SEGMENT_COLORS[tab.key as ContactSegment];
          return (
            <div key={tab.key} className="bg-white rounded-xl p-3 text-center border border-slate-100 shadow-sm">
              <p className="text-lg">{tab.icon}</p>
              <p className="text-lg font-black text-slate-800">{segmentCounts[tab.key]}</p>
              <p className="text-xs font-medium" style={{ color: color?.text }}>{tab.label}</p>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === tab.key
                ? "bg-[#FF6B35] text-white shadow"
                : "bg-white text-slate-600 border border-slate-200 hover:border-[#FF6B35]"
            }`}
          >
            {tab.icon} {tab.label}
            <span className={`px-1.5 py-0.5 rounded-full text-xs ${activeTab === tab.key ? "bg-white/20" : "bg-slate-100"}`}>
              {segmentCounts[tab.key]}
            </span>
          </button>
        ))}
      </div>

      {/* Contact list */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-sm">No contacts in this segment yet.</div>
        ) : (
          filtered.map((contact, i) => (
            <div
              key={contact.id}
              className={`flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors cursor-pointer ${i !== 0 ? "border-t border-slate-50" : ""}`}
              onClick={() => toggleSelect(contact.id)}
            >
              <input
                type="checkbox"
                checked={selectedIds.includes(contact.id)}
                readOnly
                className="accent-[#FF6B35] w-4 h-4"
              />
              <div className="w-9 h-9 rounded-full bg-[#fff1eb] flex items-center justify-center text-sm font-black text-[#FF6B35] flex-shrink-0">
                {contact.name ? contact.name[0] : "?"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-semibold text-slate-800">
                    {contact.name || `+91 ****${contact.phoneLast4}`}
                  </p>
                  <SegmentBadge segment={contact.segment} />
                  {contact.hasBirthday && <span className="text-xs">🎂 Oct 5</span>}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  {contact.orderCount} orders · Last: {contact.lastOrderAt} · {contact.purchaseCategories.join(", ")}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xs text-slate-400">Contacted</p>
                <p className="text-xs font-medium text-slate-600">{contact.lastContactedAt}</p>
                {!contact.optedInBroadcast && (
                  <span className="text-xs text-amber-600 font-medium">No opt-in</span>
                )}
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); }}
                className="text-xs bg-[#25D366] text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-green-600 transition-all flex-shrink-0"
              >
                Message
              </button>
            </div>
          ))
        )}
      </div>

      {/* Broadcast bar */}
      {selectedIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1e293b] text-white rounded-2xl px-6 py-3 flex items-center gap-4 shadow-xl z-50">
          <p className="text-sm font-semibold">{selectedIds.length} contacts selected</p>
          <button className="bg-[#25D366] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-green-600 transition-all">
            📢 Send Broadcast
          </button>
          <button onClick={() => setSelectedIds([])} className="text-slate-400 text-xs hover:text-white">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
