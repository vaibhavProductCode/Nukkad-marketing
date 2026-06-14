import Sidebar from "@/components/layout/Sidebar";
import BottomNav from "@/components/layout/BottomNav";
import AuthGuard from "@/components/AuthGuard";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-[#fff9f2]">
        <Sidebar />
        <main className="flex-1 md:ml-56 min-h-screen pb-20 md:pb-0">
          {children}
        </main>
        <BottomNav locale={locale} />
      </div>
    </AuthGuard>
  );
}
