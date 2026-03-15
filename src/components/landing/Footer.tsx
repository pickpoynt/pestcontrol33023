import { Phone, MapPin, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative border-t border-amber-600/20">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <ShieldCheck className="w-7 h-7 text-amber-500" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none tracking-tight text-white uppercase">Flower Mound TX</span>
                <span className="text-sm font-medium text-amber-500 uppercase tracking-widest text-[10px]">Slab Leak Experts</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium italic text-balance">
              Flower Mound's specialized authority on non-invasive slab leak detection and precision foundation restoration. Protect your home's structural integrity today.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Treatments</h4>
            <ul className="space-y-4">
              {["Sonic Detection", "Resin Injection", "Bypass Re-Pipe", "Void Stabilization", "Structural Reset"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 hover:text-amber-500 transition-colors font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:w-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Support</h4>
            <ul className="space-y-4">
                 <li>
                  <a href="mailto:leasemynumber@gmail.com" className="text-slate-400 hover:text-amber-500 transition-colors font-medium flex items-center gap-2 group uppercase tracking-tighter">
                    <div className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:w-2 transition-all" />
                    LEASE MY NUMBER AND LINK IT TO LEASE PAGE
                  </a>
                </li>
              {["Specialists", "Knowledge Base", "Residential Defense"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:w-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">NAP</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-500 shrink-0" />
                <address className="text-slate-400 not-italic font-medium leading-relaxed">
                  Flower Mound TX Slab Leak Experts<br />
                  Flower Mound, TX 75022<br />
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-heading">ZIP CODES: 75022, 75027, 75028, 75067, 75077</span>
                </address>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-amber-500 shrink-0" />
                <a href="tel:8777921410" className="text-xl font-bold text-white hover:text-amber-500 transition-colors">
                  (877) 792-1410
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm font-medium italic mb-4">
            © {new Date().getFullYear()} Flower Mound TX Slab Leak Experts. Professional Slab Leak Repair Flower Mound. No Free Quotes.
          </p>
          <div className="max-w-4xl mx-auto px-4 text-center">
             <p className="text-slate-400 text-[10px] leading-relaxed font-medium">
              This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
