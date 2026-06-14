import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <p className="text-2xl font-black text-[#FF6B35] mb-2">NUKKAD</p>
          <p className="text-sm leading-relaxed">
            Where every neighborhood business gets its marketing edge.
          </p>
          <p className="text-xs mt-3 text-slate-500">हर दुकानदार का marketing partner.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white mb-3">Product</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-[#FF6B35] transition-colors">Features</a></li>
            <li><a href="#pricing" className="hover:text-[#FF6B35] transition-colors">Pricing</a></li>
            {/* Blog hidden until content exists */}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white mb-3">Company</p>
          <ul className="space-y-2 text-sm">
            {/* About hidden until content exists */}
            <li><Link href="/en/privacy" className="hover:text-[#FF6B35] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/en/terms" className="hover:text-[#FF6B35] transition-colors">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 text-center py-4 text-xs text-slate-500">
        © {new Date().getFullYear()} NUKKAD. Made with ❤️ for Bharat&apos;s shopkeepers.
      </div>
    </footer>
  );
}
