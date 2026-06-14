"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { setSession } from "@/lib/auth";

type OtpStatus = "idle" | "loading" | "sent" | "error";
type VerifyStatus = "idle" | "loading" | "error";

export default function LoginPage() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpStatus, setOtpStatus] = useState<OtpStatus>("idle");
  const [verifyStatus, setVerifyStatus] = useState<VerifyStatus>("idle");
  const [resendTimer, setResendTimer] = useState(0);
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const isValidPhone = /^[6-9]\d{9}$/.test(phone);

  useEffect(() => {
    if (resendTimer <= 0) return;
    const t = setTimeout(() => setResendTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendTimer]);

  function handlePhoneSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidPhone) return;
    setOtpStatus("loading");
    setTimeout(() => {
      setOtpStatus("sent");
      setStep("otp");
      setResendTimer(60);
    }, 1200);
  }

  function handleOtpSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (otp.length < 6) return;
    setVerifyStatus("loading");
    setTimeout(() => {
      if (otp === "000000") {
        setVerifyStatus("error");
      } else {
        setSession();
        router.push(`/${locale}/dashboard`);
      }
    }, 1200);
  }

  function handleResend() {
    if (resendTimer > 0) return;
    setOtp("");
    setVerifyStatus("idle");
    setOtpStatus("loading");
    setTimeout(() => {
      setOtpStatus("sent");
      setResendTimer(60);
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e293b] to-[#2d1b0e] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href={`/${locale}`} className="inline-flex justify-center">
            <Logo size="md" variant="full" className="[&_span]:text-white" />
          </Link>
          <p className="text-slate-400 text-sm mt-3">Marketing in 3 taps</p>
        </div>

        <div className="bg-white rounded-2xl p-7 shadow-2xl">
          {step === "phone" ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-5">
              <div>
                <h2 className="text-xl font-black text-slate-800">Welcome back</h2>
                <p className="text-sm text-slate-500 mt-1">Enter your mobile number to continue</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1.5">Mobile Number</label>
                <div className="flex gap-2">
                  <span className="flex items-center px-3 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-600 font-medium">+91</span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    className="flex-1 px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]"
                    autoFocus
                  />
                </div>
                {phone.length > 0 && !isValidPhone && (
                  <p className="text-xs text-red-500 mt-1.5">Enter a valid 10-digit Indian mobile number</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isValidPhone || otpStatus === "loading"}
                className={`w-full text-white font-bold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2 ${
                  !isValidPhone || otpStatus === "loading"
                    ? "bg-slate-300 cursor-not-allowed"
                    : "bg-[#FF6B35] hover:bg-[#e85520]"
                }`}
              >
                {otpStatus === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending OTP...
                  </>
                ) : (
                  "Send OTP on WhatsApp"
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                A 6-digit OTP will be sent to your WhatsApp
              </p>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-5">
              <div>
                <h2 className="text-xl font-black text-slate-800">Enter OTP</h2>
                <p className="text-sm text-slate-500 mt-1">
                  +91 {phone}{" "}
                  <button type="button" onClick={() => { setStep("phone"); setOtp(""); setVerifyStatus("idle"); }}
                    className="text-[#FF6B35] underline text-xs">
                    Change
                  </button>
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 text-xs text-green-700 font-medium">
                OTP sent to your WhatsApp
              </div>

              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder="- - - - - -"
                value={otp}
                onChange={(e) => { setOtp(e.target.value.replace(/\D/g, "")); setVerifyStatus("idle"); }}
                className="w-full text-center text-2xl tracking-[0.5em] px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/40 focus:border-[#FF6B35]"
                autoFocus
              />

              {verifyStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 text-xs text-red-600 font-medium">
                  Incorrect OTP. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={otp.length < 6 || verifyStatus === "loading"}
                className={`w-full text-white font-bold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2 ${
                  otp.length < 6 || verifyStatus === "loading"
                    ? "bg-slate-300 cursor-not-allowed"
                    : "bg-[#FF6B35] hover:bg-[#e85520]"
                }`}
              >
                {verifyStatus === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify & Continue"
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                {resendTimer > 0 ? (
                  <span>Resend OTP in {resendTimer}s</span>
                ) : (
                  <button type="button" onClick={handleResend} className="text-[#FF6B35] font-semibold underline">
                    Resend OTP
                  </button>
                )}
              </p>

              <p className="text-xs text-slate-400 text-center border-t border-slate-100 pt-3">
                Demo: any 6 digits work (try 000000 for error)
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
