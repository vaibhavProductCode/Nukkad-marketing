import Sidebar from "@/components/layout/Sidebar";
import BottomNav from "@/components/layout/BottomNav";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="flex min-h-screen bg-[#fff9f2]">
      {/* Desktop sidebar */}
      <Sidebar />
      {/* Main content — extra bottom padding on mobile for bottom nav */}
      <main className="flex-1 md:ml-56 min-h-screen pb-20 md:pb-0">
        {children}
      </main>
      {/* Mobile bottom nav */}
      <BottomNav locale={locale} />
    </div>
  );
}
