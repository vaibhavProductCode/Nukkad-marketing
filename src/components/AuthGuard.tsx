"use client";
import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { hasSession } from "@/lib/auth";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  useEffect(() => {
    if (!hasSession()) {
      router.replace(`/${locale}/login`);
    }
  }, [router, locale]);

  if (typeof window !== "undefined" && !hasSession()) {
    return null;
  }

  return <>{children}</>;
}
