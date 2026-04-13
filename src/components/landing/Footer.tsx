import { ShieldCheck, Phone, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/40">
                                <ShieldCheck className="text-white w-8 h-8" />
                            </div>
                            <div>
                                <span className="font-heading font-black text-2xl block leading-none uppercase tracking-tighter">PEST CONTROL</span>
                                <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] leading-none mt-1">FORCE 33023</span>
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed font-black italic uppercase tracking-tighter text-sm">
                            HIGH-INTENSITY BIOLOGICAL TERMINATION FOR THE RESIDENTIAL ENVELOPES OF MIRAMAR AND HOLLYWOOD, FL 33023. RESTORING BIOLOGICAL STABILITY 24/7/365.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-xs underline decoration-red-600/50 underline-offset-8">QUICK NAVIGATION</h4>
                        <ul className="space-y-4">
                            {["Services", "Why Us", "Infestation FAQ", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 hover:text-red-500 transition-colors font-black uppercase tracking-widest text-[10px] flex items-center gap-3 group">
                                        <div className="w-2 h-2 rounded-full bg-red-600 group-hover:animate-ping" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-xs underline decoration-red-600/50 underline-offset-8">BIOLOGICAL NODES</h4>
                        <p className="text-slate-400 text-[10px] leading-relaxed mb-6 font-black italic uppercase tracking-widest">
                            MIRAMAR FL & SURROUNDING NODES:
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["33023", "33024", "33025", "33021"].map((zip) => (
                                <span key={zip} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-black text-slate-300 uppercase italic tracking-widest hover:border-red-600/50 transition-colors cursor-default">
                                    {zip}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-xs underline decoration-red-600/50 underline-offset-8">SUPPORT & LEASING</h4>
                        <div className="inline-flex items-center gap-3 group px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all cursor-pointer shadow-xl">
                            <Mail className="w-6 h-6 text-red-500 animate-pulse" />
                            <a href="/lease-my-number" className="text-xs font-black uppercase tracking-widest text-slate-200 group-hover:text-white transition-colors">
                                LEASE MY NUMBER
                            </a>
                            <ArrowUpRight className="w-4 h-4 text-slate-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 space-y-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
                        <div className="flex flex-col gap-3">
                            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] leading-none italic">PRIMARY TERMINATION NODE</p>
                            <a href="tel:3238801224" className="text-4xl font-black text-white hover:text-red-500 transition-colors tracking-tighter leading-none italic">
                                (323) 880-1224
                            </a>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] mb-3 leading-none italic uppercase">BIOLOGICAL NAP</p>
                            <p className="text-slate-300 font-black text-sm uppercase italic tracking-tight">33023 PEST FORCE, MIRAMAR, FL 33023</p>
                        </div>
                    </div>

                    <div className="bg-white/5 p-10 shadow-2xl relative overflow-hidden border border-white/10">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 blur-[80px]" />
                        <p className="text-slate-500 text-[11px] leading-relaxed font-black italic text-center uppercase tracking-tighter">
                            <span className="text-slate-300 font-black block mb-4 uppercase tracking-[0.3em]">BIOLOGICAL NOTICE & DISCLAIMER</span>
                            This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.
                        </p>
                    </div>

                    <div className="text-center">
                        <p className="text-slate-700 text-[10px] font-black uppercase tracking-widest italic">
                            © {new Date().getFullYear()} AREA 33023 PEST FORCE. ALL SYSTEM PROTOCOLS RESERVED.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
