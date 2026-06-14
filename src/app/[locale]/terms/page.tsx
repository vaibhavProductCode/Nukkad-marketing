import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fff9f2]">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <Link href="/en" className="text-sm text-[#FF6B35] font-semibold mb-8 block">← Back to NUKKAD</Link>
        <h1 className="text-3xl font-black text-slate-800 mb-2">Terms of Use</h1>
        <p className="text-sm text-slate-400 mb-8">Last updated: June 2026</p>

        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-slate-800 mb-2">1. Acceptance</h2>
            <p>By using NUKKAD, you agree to these Terms of Use. NUKKAD is operated by [Company Name], incorporated in India. If you do not agree, do not use the product.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 mb-2">2. What NUKKAD Does</h2>
            <p>NUKKAD is an AI-assisted marketing tool for Indian small businesses. It helps you create social media content, manage customer contacts, and plan festival promotions. All AI-generated content is a suggestion — you approve before anything is sent.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 mb-2">3. Broadcast Responsibility</h2>
            <p>You are solely responsible for ensuring that customers you broadcast to have opted in to receive messages from you. NUKKAD provides tools to track opt-in status but cannot guarantee compliance. Misuse for spam is grounds for immediate account termination.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 mb-2">4. WhatsApp API Usage</h2>
            <p>WhatsApp broadcast features use the WhatsApp Business API. By using these features, you also agree to Meta&apos;s WhatsApp Business Policy. NUKKAD is not affiliated with Meta.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 mb-2">5. Paid Plans</h2>
            <p>Paid subscriptions (Starter ₹399/month, Growth ₹899/month) are billed monthly. Cancellation takes effect at the end of the current billing period. No refunds for partial months. Prices are inclusive of GST.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 mb-2">6. Limitation of Liability</h2>
            <p>NUKKAD is provided &quot;as is.&quot; We are not liable for indirect losses, including lost business or revenue, arising from use of the platform. Our total liability is capped at the amount you paid in the last 3 months.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 mb-2">7. Governing Law</h2>
            <p>These Terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in [City], India.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
