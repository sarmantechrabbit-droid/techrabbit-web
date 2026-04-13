import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-(--color-brand-green) flex items-center justify-center text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-bold text-lg font-heading tracking-tight">Tech Rabbit</span>
            </div>
            <p className="text-(--color-text-body) text-sm leading-relaxed max-w-xs mb-8">
              Building products for founders across US, UK, Canada and Australia since 2019.
            </p>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold text-(--color-text-body) uppercase tracking-widest">ISO Certified</div>
              <div className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold text-(--color-text-body) uppercase tracking-widest">Clutch 4.8</div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[10px] font-bold text-(--color-text-body) uppercase tracking-widest mb-6">Services</h4>
              <ul className="space-y-4">
                {["Launch — MVP", "Grow — Subscription", "AI Features", "Pricing"].map((l) => (
                  <li key={l}><Link to="#" className="text-(--color-text-body) hover:text-white transition-colors text-sm font-medium">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-(--color-text-body) uppercase tracking-widest mb-6">Company</h4>
              <ul className="space-y-4">
                {["About", "Work", "Blog", "Careers"].map((l) => (
                  <li key={l}><Link to="#" className="text-(--color-text-body) hover:text-white transition-colors text-sm font-medium">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-(--color-text-body) uppercase tracking-widest mb-6">Contact</h4>
              <ul className="space-y-4">
                {["hello@techrabbit.io", "+91 932 822 0310", "LinkedIn", "Instagram"].map((l) => (
                  <li key={l}><a href="#" className="text-(--color-text-body) hover:text-white transition-colors text-sm font-medium">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-(--color-text-body)">
          <div className="text-xs">
            © 2026 Tech Rabbit · Ahmedabad, India
          </div>
          <div className="flex items-center gap-6 text-xs font-medium">
            <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
            <Link to="#" className="hover:text-white transition-colors">NDA Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
