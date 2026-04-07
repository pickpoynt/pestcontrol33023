import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, Phone, Droplets } from "lucide-react";
import { ReactNode } from "react";

interface HeroProps {
  title?: ReactNode;
  subtitle?: string;
  image?: string;
  phone?: string;
  badge?: string;
  features?: { icon: any; text: string }[];
}

const Hero = ({
  title = (
    <>
      Plumbers <br />
      <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Rockland County NY</span>
    </>
  ),
  subtitle = "Rockland County's elite residential plumbing force. We provide rapid deployment of master-aligned tactical units for surgical pipe neutralization and total hydraulic reset — 24/7. Reclaim your home's plumbing security today.",
  image = "/4.jpeg",
  phone = "8777921410",
  badge = "ROCKLAND COUNTY PLUMBERS FORCE",
  features = [
    { icon: Droplets, text: "Rapid Plumbing Neutralization" },
    { icon: ShieldCheck, text: "Master-Aligned Setup" },
    { icon: Clock, text: "Rockland Local Force" }
  ]
}: HeroProps) => {
  const formattedPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <img src={image} alt="Plumbers Rockland County NY" className="w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-slate-950/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-left">
        <div className="max-w-4xl flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-8 font-bold uppercase tracking-[0.2em] text-xs animate-fade-in shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            <Droplets className="w-4 h-4 text-indigo-600" />
            {badge}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tighter animate-title-slide">
            Plumbers <br />
            <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Rockland County NY</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-200 mb-12 leading-relaxed max-w-3xl font-medium italic animate-fade-in-up drop-shadow-md">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-start gap-6 mb-16 animate-fade-in-up [animation-delay:200ms]">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white h-20 px-12 rounded-2xl text-2xl font-bold shadow-2xl shadow-indigo-900/40 border border-indigo-500/20 transition-all hover:scale-105" asChild>
              <a href={`tel:${phone}`}>
                <Phone className="w-8 h-8 mr-4 fill-white" />
                {formattedPhone}
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-fade-in-up [animation-delay:400ms]">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-start gap-4 bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-indigo-400 group-hover:text-white" />
                </div>
                <span className="text-white font-bold uppercase tracking-[3px] text-xs">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
