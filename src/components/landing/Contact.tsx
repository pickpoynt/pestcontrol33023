import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, ShieldCheck, Mail, Target } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/10 relative group">
          <div className="absolute inset-0 bg-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="lg:w-1/2 p-12 lg:p-24 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] relative z-10">
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-10 uppercase tracking-tighter leading-none italic">
              EMERGENCY <br />
              <span className="text-red-600">PEST DISPATCH</span>
            </h2>
            <p className="text-2xl text-slate-300 mb-16 leading-relaxed font-black italic border-l-8 border-red-600 pl-8 uppercase tracking-tighter">
              33023 PEST FORCE TECHNICIANS ARE ON CALL ACROSS ALL MIRAMAR AND HOLLYWOOD NODES. RESTORING YOUR HOME'S BIOLOGICAL STABILITY WITH HIGH-INTENSITY CLEARING.
            </p>

            <div className="space-y-12">
              <div className="flex items-center gap-8 group/link">
                <div className="w-16 h-16 rounded-[1.5rem] bg-red-600 flex items-center justify-center text-white shadow-lg group-hover/link:scale-110 transition-transform flex-shrink-0">
                  <Phone className="w-8 h-8 group-hover/link:animate-pulse" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 leading-none italic">HOTLINE DISPATCH</p>
                  <a href="tel:3238801224" className="text-3xl md:text-4xl font-black text-white hover:text-red-500 transition-colors tracking-tighter leading-none">(323) 880-1224</a>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-[1.5rem] bg-slate-900 flex items-center justify-center text-red-500 border border-white/5 transition-transform group-hover:rotate-2">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 leading-none italic">BIOLOGICAL STATUS</p>
                  <p className="text-2xl font-black text-white tracking-tighter uppercase italic">24/7 DANGER READY</p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-[1.5rem] bg-slate-900 flex items-center justify-center text-red-500 border border-white/5 transition-transform group-hover:-rotate-2">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 leading-none italic">33023 COVERAGE</p>
                  <p className="text-2xl font-black text-white tracking-tighter uppercase italic leading-none">MIRAMAR HOLLYWOOD & SURROUNDING NODES</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-24 bg-red-600 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -mr-48 -mt-48 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10 text-center lg:text-left space-y-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 text-white mb-4 font-black uppercase tracking-widest text-xs border border-white/10">
                <ShieldCheck className="w-5 h-5 animate-pulse" />
                MIRAMAR PEST FORCE 33023
              </div>
              <h3 className="text-3xl md:text-6xl font-heading font-black text-white mb-8 uppercase tracking-tighter leading-none italic">
                ACTIVE BIOLOGICAL <br />NODE BREACH?
              </h3>
              <p className="text-white text-xl font-black italic uppercase leading-relaxed opacity-90 tracking-tighter">
                MASTER-ALIGNED UNITS ARE READY FOR IMMEDIATE DEPLOYMENT TO YOUR MIRAMAR RESIDENCE. CALL FOR AN IMMEDIATE 'TERMINATION PROTOCOL.'
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-slate-950 hover:bg-slate-50 h-24 px-12 rounded-[1.5rem] text-3xl font-black shadow-2xl transition-all hover:scale-105 uppercase tracking-tighter w-full group flex items-center gap-4 group/button border border-slate-200" asChild>
                <a href="tel:3238801224">
                  <Phone className="w-8 h-8 group-hover/button:rotate-12 transition-transform fill-slate-950/20" />
                  (323) 880-1224
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
