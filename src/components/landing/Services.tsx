import { Zap, ShieldCheck, Target, Bug, ArrowRight, Activity, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "BIOLOGICAL TERMINATION",
    description: "Surgical-grade agent deployment to eradicate German Cockroach nodes and Ghost Ant biological breaches. 100% knockdown accuracy.",
    image: "/1.png",
    icon: <Bug className="w-6 h-6 text-red-500" />
  },
  {
    title: "PERIMETER DEFENSE NODE",
    description: "Establishment of systemic biological defensive barriers to prevent structural intersection breaches. 24/7 infestation prevention protocol.",
    image: "/2.png",
    icon: <ShieldCheck className="w-6 h-6 text-red-500" />
  },
  {
    title: "EMERGENCY SIEGE CONTROL",
    description: "Rapid-deploy units for high-intensity rodent and insectoid breaches. Immediate biological stability restoration across Miramar 33023.",
    image: "/3.png",
    icon: <Zap className="w-6 h-6 text-red-500" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 text-red-600 mb-4 font-black uppercase tracking-widest text-xs">
            <ShieldCheck className="w-4 h-4" />
            MIRAMAR FL 33023 SECURITY CORE
          </div>
          <h2 className="text-4xl md:text-7xl font-heading font-black text-slate-950 uppercase tracking-tighter leading-[0.9] italic">
            BIOLOGICAL BREACH <br />
            <span className="text-red-600 font-black">TERMINATION SERVICES</span>
          </h2>
          <p className="text-slate-500 text-xl font-bold italic leading-none max-w-2xl mx-auto border-t border-slate-100 pt-8 uppercase tracking-tighter">
            ADVANCED INFESTATION NAVIGATION AND NODE-FOCUSED CLEARING FOR EVERY 33023 ARCHITECTURAL ENVELOPE.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-red-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/10 hover:-translate-y-2 flex flex-col h-full shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xl rotate-3 group-hover:rotate-12 transition-transform duration-500">
                  {service.icon}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none italic">{service.title}</h3>
                <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium italic flex-grow uppercase tracking-tight">{service.description}</p>
                <div className="pt-8 border-t border-slate-200">
                  <a href="tel:3238801224" className="flex items-center justify-between w-full text-slate-950 hover:text-red-600 transition-colors">
                    <span className="font-black uppercase tracking-widest text-xs">DEPLOY UNIT NOW</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
