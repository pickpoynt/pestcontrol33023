import { ShieldCheck, Phone, ArrowRight, Zap, Droplets, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  phone?: string;
  image?: string;
}

const Hero = ({ 
  title = "Emergency Slab Leak Repair Reading PA", 
  subtitle = "High-Intensity Node-Focused Slab Stabilization. Restoring Architectural Flow Security 24/7.", 
  phone = "(877) 792-1410", 
  image = "/4.jpeg" 
}: HeroProps) => {
  const features = [
    { icon: <Droplets className="w-5 h-5 text-red-500" />, text: "SLAB STABILIZATION" },
    { icon: <Target className="w-5 h-5 text-red-500" />, text: "ELECTRONIC LEAK NODES" },
    { icon: <Zap className="w-5 h-5 text-red-500" />, text: "IMMEDIATE FLOW RECOVERY" }
  ];

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Hero background with Image 4 */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover animate-slow-zoom" />
        {/* Unique Background Overlay Image */}
        <div className="absolute inset-0 bg-slate-950/85 mix-blend-multiply opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent lg:w-3/4 opacity-95" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl space-y-12">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-fade-in text-white/90 shadow-2xl">
            <ShieldCheck className="w-5 h-5 text-red-600 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">READING PA SLAB LEAK FORCE NODE ACTIVATED</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black text-white mb-8 leading-[1.0] tracking-tighter animate-title-slide uppercase">
             Emergency Slab <br />
            <span className="text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.3)] uppercase tracking-tighter italic">Leak Repair Reading PA</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-200 mb-12 leading-relaxed max-w-2xl font-black italic animate-fade-in-up drop-shadow-md border-l-4 border-red-600 pl-6 uppercase tracking-tighter">
            Our Reading technicians provide master-aligned hydraulic solutions for immediate slab leak stability. Rapid flow restoration deployed across all zones.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8 py-10 animate-fade-in-up delay-200">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-24 px-16 rounded-[2rem] text-3xl font-black shadow-[0_0_50px_rgba(220,38,38,0.3)] transition-all hover:scale-105 uppercase tracking-tighter group border border-white/10 w-full sm:w-auto" asChild>
                <a href={`tel:${phone}`} className="flex items-center gap-4">
                  <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform animate-pulse" />
                  {phone}
                </a>
            </Button>
            <div className="flex flex-col items-center sm:items-start select-none">
              <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-xs mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                SECURITY PROTOCOL READY
              </p>
              <p className="text-white text-xl font-black italic tracking-tighter uppercase leading-none underline decoration-red-600/50 underline-offset-8">24/7 HYDRAULIC COMMAND</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-t border-white/5 animate-fade-in-up delay-300">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-[1rem] bg-white/5 flex items-center justify-center p-2 group-hover:bg-red-600/20 transition-all border border-white/10 group-hover:scale-110">
                  {feature.icon}
                </div>
                <span className="text-sm font-black text-slate-200 uppercase tracking-widest">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
