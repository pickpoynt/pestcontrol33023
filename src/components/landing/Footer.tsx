import { ShieldCheck, Phone, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-600 flex items-center justify-center shadow-lg shadow-amber-900/20">
                <ShieldCheck className="text-white w-7 h-7" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none">Erie PA</span>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Heating Force</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium italic italic">
              Professional high-efficiency baseboard heater installation for the residential architectural envelopes of Erie, PA. Restoring winter comfort 24/7/365.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-sm">Quick Navigation</h4>
            <ul className="space-y-4">
              {["Services", "Why Us", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 hover:text-amber-500 transition-colors font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600/40" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-sm">Service Coverage</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 font-medium italic">
              Erie, PA and Surrounding Locations:
            </p>
            <div className="flex flex-wrap gap-2">
              {["16501", "16505", "16509"].map((zip) => (
                <span key={zip} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
                  {zip}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-sm">Support & Leasing</h4>
            <div className="inline-flex items-center gap-3 group px-4 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all cursor-pointer">
              <Mail className="w-5 h-5 text-amber-500" />
              <a href="/lease-my-number" className="text-sm font-bold uppercase tracking-tighter text-slate-200 group-hover:text-white transition-colors">
                LEASE MY NUMBER
              </a>
              <ArrowUpRight className="w-4 h-4 text-slate-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                <div className="flex flex-col gap-2">
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Primary Contact</p>
                    <a href="tel:8777921410" className="text-3xl font-bold text-white hover:text-amber-500 transition-colors tracking-tighter leading-none">
                        (877) 792-1410
                    </a>
                </div>
                <div className="text-center md:text-left">
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Location NAP</p>
                    <p className="text-slate-300 font-bold text-sm">Erie PA Baseboard Heat Force, Erie, PA 16501</p>
                </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <p className="text-slate-500 text-[11px] leading-relaxed font-medium italic text-center">
                    <span className="text-slate-300 font-bold block mb-2 uppercase tracking-widest">Notice & Disclaimer</span>
                    This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.
                </p>
            </div>

            <div className="text-center">
                <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                    © {new Date().getFullYear()} Erie PA Baseboard Heat Force. All Rights Reserved.
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
