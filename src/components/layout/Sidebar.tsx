"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { SUPPORTED_LOCALES } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

const NAV = [
  { key: "today" as const, href: "/dashboard", icon: "🏠" },
  { key: "calendar" as const, href: "/calendar", icon: "📅" },
  { key: "crm" as const, href: "/crm", icon: "💬" },
  { key: "create" as const, href: "/create", icon: "✨" },
  { key: "insights" as const, href: "/insights", icon: "📊" },
  { key: "settings" as const, href: "/settings", icon: "⚙️" },
];

function clearAllBrowserData() {
  try {
    localStorage.clear();
    sessionStorage.clear();
    document.cookie.split(";").forEach((c) => {
      document.cookie = c.trim().split("=")[0] + "=;expires=" + new Date(0).toUTCString() + ";path=/";
    });
  } catch (_) {}
}

export default function Sidebar() {
  const t = useTranslations("sidebar");
  const pathname = usePathname();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  function handleLogout() {
    clearAllBrowserData();
    window.location.href = `/${locale}`;
  }

  return (
    <aside className="hidden md:flex flex-col w-56 bg-[#1e293b] min-h-screen fixed left-0 top-0 z-40">
      <div className="px-5 py-5 border-b border-slate-700">
        <Link href={`/${locale}`}>
          <Logo size="sm" variant="full" className="[&_span]:text-white" />
        </Link>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV.map(({ key, href, icon }) => {
          const fullHref = `/${locale}${href}`;
          const active = pathname === fullHref || pathname.startsWith(fullHref + "/");
          return (
            <Link
              key={key}
              href={fullHref}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active
                  ? "bg-[#FF6B35] text-white shadow-sm"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              <span className="text-base">{icon}</span>
              {t(key)}
            </Link>
          );
        })}
      </nav>

      <div className="px-4 pb-5 border-t border-slate-700 pt-4 space-y-3">
        <div className="bg-[#FF6B35]/10 rounded-xl p-3">
          <p className="text-xs text-slate-300 font-medium">Priya Boutique</p>
          <p className="text-xs text-slate-400 mt-0.5">Indore · Free plan</p>
        </div>

        <select
          defaultValue={locale}
          onChange={(e) => { window.location.href = `/${e.target.value}/dashboard`; }}
          className="w-full text-xs text-slate-300 bg-slate-700 border border-slate-600 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-orange-400"
        >
          {SUPPORTED_LOCALES.map((l) => (
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
        >
          <span>🚪</span>
          Log out
        </button>
      </div>
    </aside>
  );
}
