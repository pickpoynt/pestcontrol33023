import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/10">
          <div className="lg:w-1/2 p-12 lg:p-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-tight">
              Emergency <br />
              <span className="text-blue-500">Trenchless Dispatch</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed font-medium italic">
              Our Gastonia technicians are standing by to restore your home's sanitary security. Master-aligned trenchless sewer repair available across all North Carolina 28052 zones.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Gastonia Hotline</p>
                  <a href="tel:8777921410" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors tracking-tighter">(877) 792-1410</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-blue-500 border border-white/5">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Status</p>
                  <p className="text-xl font-bold text-white tracking-tight italic">24/7 TRENCHLESS READY</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-blue-500 border border-white/5">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Coverage</p>
                  <p className="text-xl font-bold text-white tracking-tight">Gastonia & Surrounding 28054 Zones</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-20 bg-blue-600 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white mb-8 font-bold uppercase tracking-widest text-xs">
                <ShieldCheck className="w-4 h-4" />
                Gastonia Trenchless Force
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 uppercase tracking-tighter">
                Suspect a Structural <br />Sewer Line Breach?
              </h3>
              <p className="text-white/90 text-lg mb-12 leading-relaxed font-bold italic">
                Our master-aligned mechanical units are deployed and ready for your Gastonia home. Call now for a professional 'Sanitary Flow Audit.'
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100 h-20 px-12 rounded-2xl text-2xl font-bold w-full shadow-2xl transition-all hover:scale-105 uppercase tracking-tighter" asChild>
                <a href="tel:8777921410">
                  <Phone className="w-6 h-6 mr-3 fill-slate-900" />
                  CLICK TO CALL NOW
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
