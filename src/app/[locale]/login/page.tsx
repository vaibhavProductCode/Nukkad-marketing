"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  function handlePhoneSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (phone.length < 10) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep("otp"); }, 1000);
  }

  function handleOtpSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(`/${locale}/onboarding`);
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] to-[#2d1b0e] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href={`/${locale}`}>
            <span className="text-3xl font-black text-[#FF6B35]">NUKKAD</span>
          </Link>
          <p className="text-slate-300 text-sm mt-2">Marketing in 3 taps</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          {step === "phone" ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-5">
              <div>
                <h2 className="text-xl font-black text-slate-800">Welcome!</h2>
                <p className="text-sm text-slate-500 mt-1">Enter your mobile number to continue</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1.5">Mobile Number</label>
                <div className="flex gap-2">
                  <span className="flex items-center px-3 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-600 font-medium">+91</span>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={phone.length < 10 || loading}
                className="w-full bg-[#FF6B35] text-white font-bold py-3 rounded-xl hover:bg-[#e85520] disabled:opacity-50 transition-all text-sm"
              >
                {loading ? "Sending OTP..." : "Get OTP"}
              </button>
              <p className="text-xs text-slate-400 text-center">
                We&apos;ll send a 6-digit OTP to your WhatsApp
              </p>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-5">
              <div>
                <h2 className="text-xl font-black text-slate-800">Enter OTP</h2>
                <p className="text-sm text-slate-500 mt-1">
                  Sent to +91 {phone}{" "}
                  <button type="button" onClick={() => setStep("phone")} className="text-[#FF6B35] underline text-xs">
                    Change
                  </button>
                </p>
              </div>
              <input
                type="text"
                maxLength={6}
                placeholder="• • • • • •"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                className="w-full text-center text-2xl tracking-[0.5em] px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]"
              />
              <button
                type="submit"
                disabled={otp.length < 6 || loading}
                className="w-full bg-[#FF6B35] text-white font-bold py-3 rounded-xl hover:bg-[#e85520] disabled:opacity-50 transition-all text-sm"
              >
                {loading ? "Verifying..." : "Verify & Continue"}
              </button>
              <p className="text-xs text-slate-400 text-center">
                Demo: any 6-digit number works
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
