"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "dashboard", label: "Today" },
  { href: "calendar", label: "Calendar" },
  { href: "create", label: "Create", isCreate: true },
  { href: "crm", label: "Customers" },
  { href: "insights", label: "Week" },
];

export default function BottomNav({ locale }: { locale: string }) {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 shadow-[0_-2px_12px_rgba(0,0,0,0.06)] z-50 md:hidden">
      <div className="flex items-end justify-around px-2 pb-2 pt-1">
        {NAV_ITEMS.map((item) => {
          const href = `/${locale}/${item.href}`;
          const isActive = pathname.includes(`/${item.href}`);

          if (item.isCreate) {
            return (
              <Link key={item.href} href={href} className="flex flex-col items-center -mt-5">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-full flex items-center justify-center shadow-lg shadow-orange-200 text-white text-2xl font-bold border-4 border-[#fff9f2]">
                  +
                </div>
                <span className="text-[10px] text-slate-400 mt-1">{item.label}</span>
              </Link>
            );
          }

          return (
            <Link key={item.href} href={href} className="flex flex-col items-center gap-0.5 min-w-[52px] py-1">
              <span className={`text-[11px] font-semibold ${isActive ? "text-[#FF6B35]" : "text-slate-400"}`}>
                {item.label}
              </span>
              {isActive && <div className="w-1 h-1 rounded-full bg-[#FF6B35]" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
