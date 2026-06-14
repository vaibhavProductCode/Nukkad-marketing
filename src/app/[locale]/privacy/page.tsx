import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fff9f2]">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <Link href="/en" className="text-sm text-[#FF6B35] font-semibold mb-8 block">← Back to NUKKAD</Link>
        <h1 className="text-3xl font-black text-slate-800 mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-8">Last updated: June 2026</p>

        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-2">1. Data We Collect</h2>
            <p>We collect your mobile phone number (hashed) for authentication via OTP. We collect your business name, type, and city during onboarding. We do <strong>not</strong> store the content of your WhatsApp chats — only extracted signals (order counts, product categories, segment classification).</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 mb-2">2. How We Use Your Data</h2>
            <p>Your data is used solely to power the NUKKAD product: generating festival-relevant content suggestions, segmenting your contacts, and scheduling broadcasts. We do not sell your data to any third party.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 mb-2">3. WhatsApp Chat Exports</h2>
            <p>When you upload a WhatsApp Business chat export, the raw file is processed in memory to extract signals. The original .txt file is deleted immediately after processing. Raw chat content is never stored on our servers.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 mb-2">4. Data Storage</h2>
            <p>All data is stored in India (AWS Mumbai, ap-south-1 region) in compliance with the Digital Personal Data Protection Act (DPDP) 2023. Phone numbers are stored as SHA-256 hashes.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 mb-2">5. Your Rights (DPDP 2023)</h2>
            <p>You have the right to access, correct, and delete your data at any time. To delete your account and all associated data, go to <strong>Settings → Mera data delete karein</strong> in the app. Deletion is irreversible and completes within 30 days.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 mb-2">6. Contact</h2>
            <p>For privacy-related queries, contact us on WhatsApp: <a href="https://wa.me/919999999999" className="text-[#FF6B35] underline">+91 99999 99999</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
