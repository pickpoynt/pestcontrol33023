import { Button } from "@/components/ui/button";
import { Phone, Clock, ShieldCheck, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                Immediate <span className="text-amber-600 text-6xl block mt-2">Hydraulic Response</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium italic leading-relaxed">
                Emergency dispatchers are on standby in Flower Mound, TX. We provide rapid intervention for all catastrophic pipe failures and foundation breaches.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-amber-500/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-amber-600 flex items-center justify-center shrink-0 shadow-lg shadow-amber-600/20 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-1">Repair Hotline</p>
                  <a href="tel:8777921410" className="text-2xl font-bold text-slate-900 hover:text-amber-600 transition-colors">(877) 792-1410</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-slate-200 flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7 text-slate-600" />
                </div>
                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-1">Availability</p>
                  <p className="text-xl font-bold text-slate-900">24/7/365 Emergency Dispatch</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-slate-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-slate-600" />
                </div>
                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-1">Service Area</p>
                  <p className="text-xl font-bold text-slate-900">Flower Mound, TX & Surrounding ZIPs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-amber-500/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -translate-y-16 translate-x-16" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-8 uppercase tracking-tighter flex items-center gap-3">
                  <ShieldCheck className="text-amber-500 w-8 h-8" />
                  Dispatch Repair Force
                </h3>
                
                <form id="contact-form" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Property Owner Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Cell Number</label>
                      <input type="tel" placeholder="(877) 792-1410" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Service Required</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none" required>
                      <option value="" className="bg-slate-900">Select Emergency Type...</option>
                      <option value="pipe-burst" className="bg-slate-900">Catastrophic Pipe Burst</option>
                      <option value="flooding" className="bg-slate-900">Active Indoor Flooding</option>
                      <option value="main-line" className="bg-slate-900">Main Line Failure</option>
                      <option value="slab-leak" className="bg-slate-900">Slab/Foundation Breach</option>
                      <option value="other" className="bg-slate-900">Other Structural Plumbing</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Damage Description</label>
                    <textarea rows={4} placeholder="Describe the current flood situation or failure point..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none" required></textarea>
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white h-16 rounded-2xl text-lg font-bold shadow-xl shadow-amber-900/40 border border-amber-500/20 group-hover:scale-[1.02] transition-all">
                    INITIATE EMERGENCY DISPATCH
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
