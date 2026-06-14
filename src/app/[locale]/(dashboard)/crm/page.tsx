"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { MOCK_CONTACTS, SEGMENT_COLORS } from "@/lib/constants";
import type { ContactSegment } from "@/types";
import SegmentBadge from "@/components/ui/Badge";

type TabKey = ContactSegment | "all";

export default function CRMPage() {
  const t = useTranslations("crm");
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showImport, setShowImport] = useState(false);

  const filtered = activeTab === "all" ? MOCK_CONTACTS : MOCK_CONTACTS.filter((c) => c.segment === activeTab);
  const tabCount = (key: TabKey) =>
    key === "all" ? MOCK_CONTACTS.length : MOCK_CONTACTS.filter((c) => c.segment === key).length;

  function toggleSelect(id: string) {
    setSelectedIds((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  }

  const tabs: { key: TabKey; label: string }[] = [
    { key: "all", label: t("all") },
    { key: "champion", label: t("champions") },
    { key: "loyal", label: t("loyal") },
    { key: "at_risk", label: t("atRisk") },
    { key: "new", label: t("new") },
    { key: "birthday", label: t("birthday") },
  ];

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl font-black text-slate-800">{t("title")}</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            {MOCK_CONTACTS.length} contacts · {MOCK_CONTACTS.filter((c) => c.optedInBroadcast).length} {t("subtitle")}
          </p>
        </div>
        <button
          onClick={() => setShowImport(true)}
          className="text-sm font-bold bg-[#FF6B35] text-white px-4 py-2 rounded-xl hover:bg-[#e85520] transition-all"
        >
          + {t("import")}
        </button>
      </div>

      {showImport && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-4">
          <p className="font-bold text-slate-800 text-sm mb-1">{t("importTitle")}</p>
          <p className="text-xs text-slate-500 mb-3">{t("importDesc")}</p>
          <div className="bg-[#fff1eb] rounded-xl p-3 text-xs text-slate-600 mb-3">
            {t("privacyNote")}
          </div>
          <button className="w-full bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm hover:bg-green-600 transition-all">
            {t("importButton")}
          </button>
          <button onClick={() => setShowImport(false)} className="w-full text-slate-400 text-xs py-2 mt-1">
            {t("later")}
          </button>
        </div>
      )}

      {/* Segment stats */}
      <div className="grid grid-cols-5 gap-2 mb-4">
        {tabs.filter((tab) => tab.key !== "all").map((tab) => {
          const color = SEGMENT_COLORS[tab.key as ContactSegment];
          return (
            <div key={tab.key} className="bg-white rounded-xl p-2.5 text-center border border-slate-100 shadow-sm">
              <p className="text-lg font-black text-slate-800">{tabCount(tab.key)}</p>
              <p className="text-[9px] font-medium leading-tight" style={{ color: color?.text }}>{tab.label}</p>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === tab.key
                ? "bg-[#FF6B35] text-white shadow"
                : "bg-white text-slate-600 border border-slate-200 hover:border-[#FF6B35]"
            }`}
          >
            {tab.label}
            <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] ${activeTab === tab.key ? "bg-white/20" : "bg-slate-100"}`}>
              {tabCount(tab.key)}
            </span>
          </button>
        ))}
      </div>

      {/* Contact list */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-20 md:mb-4">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-sm">{t("noContacts")}</div>
        ) : (
          filtered.map((contact, i) => (
            <div
              key={contact.id}
              className={`flex items-center gap-3 px-4 py-3.5 hover:bg-[#fff9f2] transition-colors cursor-pointer ${i !== 0 ? "border-t border-slate-50" : ""}`}
              onClick={() => toggleSelect(contact.id)}
            >
              <input type="checkbox" checked={selectedIds.includes(contact.id)} readOnly className="accent-[#FF6B35] w-4 h-4 flex-shrink-0" />
              <div className="w-10 h-10 rounded-full bg-[#fff1eb] flex items-center justify-center text-sm font-black text-[#FF6B35] flex-shrink-0">
                {contact.name ? contact.name[0].toUpperCase() : "?"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <p className="text-sm font-semibold text-slate-800">
                    {contact.name || `+91 ****${contact.phoneLast4}`}
                  </p>
                  <SegmentBadge segment={contact.segment} />
                  {contact.hasBirthday && (
                    <span className="text-xs bg-pink-50 text-pink-600 px-1.5 py-0.5 rounded-full font-medium">Birthday</span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-0.5 truncate">
                  {t("lastOrder")}: {contact.lastOrderAt} · {contact.purchaseCategories[0]}
                </p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); }}
                className="text-xs bg-[#25D366] text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-green-600 transition-all flex-shrink-0"
              >
                {t("messageSend")}
              </button>
            </div>
          ))
        )}
      </div>

      {/* Sticky bottom CTA */}
      <div className="fixed bottom-16 md:bottom-4 left-0 right-0 px-4 pointer-events-none">
        <div className="max-w-2xl mx-auto">
          <button className="pointer-events-auto w-full flex items-center justify-center gap-2 bg-[#16a34a] text-white font-black py-3.5 rounded-2xl shadow-lg text-sm hover:bg-[#15803d] transition-all">
            {t("broadcastButton")}
            {selectedIds.length > 0 && (
              <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">{selectedIds.length}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
