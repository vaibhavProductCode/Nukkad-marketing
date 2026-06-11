"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { SUPPORTED_LOCALES } from "@/lib/constants";

export default function Navbar() {
  const t = useTranslations("nav");
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="text-2xl font-black text-[#FF6B35] tracking-tight">NUKKAD</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {(["features", "pricing", "about"] as const).map((key) => (
            <li key={key}>
              <Link href={`#${key}`} className="text-sm text-slate-600 hover:text-[#FF6B35] transition-colors">
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Language selector */}
          <select
            value={locale}
            onChange={(e) => {
              window.location.href = `/${e.target.value}`;
            }}
            className="text-xs text-slate-500 border border-slate-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-orange-300"
          >
            {SUPPORTED_LOCALES.map((l) => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>
          <Link href={`/${locale}/login`} className="text-sm font-medium text-slate-700 hover:text-[#FF6B35] transition-colors">
            {t("login")}
          </Link>
          <Link
            href={`/${locale}/login`}
            className="text-sm font-semibold bg-[#FF6B35] text-white px-4 py-2 rounded-xl hover:bg-[#e85520] transition-colors shadow-sm"
          >
            {t("getStarted")}
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-5 space-y-1">
            <span className="block h-0.5 bg-current" />
            <span className="block h-0.5 bg-current" />
            <span className="block h-0.5 bg-current" />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-orange-100 bg-white px-4 pb-4 pt-2 space-y-2">
          {(["features", "pricing", "about"] as const).map((key) => (
            <Link key={key} href={`#${key}`} className="block text-sm text-slate-600 py-1" onClick={() => setMenuOpen(false)}>
              {t(key)}
            </Link>
          ))}
          <Link href={`/${locale}/login`} className="block mt-2 text-center text-sm font-semibold bg-[#FF6B35] text-white px-4 py-2.5 rounded-xl" onClick={() => setMenuOpen(false)}>
            {t("getStarted")}
          </Link>
        </div>
      )}
    </header>
  );
}
