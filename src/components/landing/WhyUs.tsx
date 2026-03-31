import { ShieldCheck, Zap, Droplets, Target, Shield, Clock, Award, Hammer, Search, Activity } from "lucide-react";

const features = [
  {
    icon: <Search className="w-10 h-10 text-white" />,
    title: "ELECTRONIC NODAL MAPPING",
    description: "Reading PA electronic leak dispatch nodes. Precision electronic node mapping to locate the hydraulic breach within centimeters.",
    color: "bg-red-600"
  },
  {
    icon: <Shield className="w-10 h-10 text-white" />,
    title: "FOUNDATION SECURITY",
    description: "Every foundation node stabilization and subterranean pipe joint mapped and secured to professional Reading PA standards.",
    color: "bg-slate-900"
  },
  {
    icon: <Activity className="w-10 h-10 text-white" />,
    title: "HYDRAULIC NODES",
    description: "Master-aligned Reading plumbers utilize industrial-grade acoustic scours to reclaim your foundation stability.",
    color: "bg-slate-800"
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    title: "SURGICAL STABILIZATION",
    description: "Zero-impact pincer stabilization for the Reading PA 19601 architectural foundation. Targeted hydraulic recovery.",
    color: "bg-red-700"
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600/10 text-red-600 mb-4 font-black uppercase tracking-widest text-xs border border-red-600/10 backdrop-blur-xl">
              <ShieldCheck className="w-5 h-5 animate-pulse" />
              WHY READING PA SLAB LEAK FORCE?
            </div>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-slate-950 uppercase tracking-tighter leading-[0.9] italic">
                Hydraulic <br />
                <span className="text-red-600 underline-offset-8">Foundation Authority</span>
            </h2>
            <p className="text-slate-500 text-xl font-bold italic leading-relaxed border-l-8 border-red-600 pl-8 uppercase tracking-tighter">
              Reading PA Slab Leak Force provides high-intensity hydraulic restoration for subterranean foundation nodes. We perform surgical electronic scours that restore flow security to Reading's 19604 foundation architecture. Call (877) 792-1410 today to deploy your recovery node.
            </p>
            <div className="pt-10 grid grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <p className="text-4xl font-black text-slate-950 mb-2 uppercase italic tracking-tighter">100%</p>
                <p className="text-xs font-black text-red-600 uppercase tracking-widest">Nodal Security</p>
              </div>
              <div>
                <p className="text-4xl font-black text-slate-950 mb-2 uppercase italic tracking-tighter">24/7</p>
                <p className="text-xs font-black text-red-600 uppercase tracking-widest">Breach Monitoring</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-8 relative">
            <div className="absolute inset-0 bg-red-600/5 blur-[100px] -m-16 rounded-full" />
            {features.map((feature, i) => (
              <div key={i} className={`group relative p-10 rounded-[2.5rem] ${feature.color} text-white shadow-2xl hover:scale-105 transition-all duration-500 hover:rotate-2 border border-white/10 h-full flex flex-col`}>
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center p-4 mb-8 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black mb-6 uppercase italic tracking-tighter group-hover:text-red-400 transition-colors">{feature.title}</h3>
                <p className="text-white/80 font-black italic uppercase leading-tight text-xs tracking-widest flex-grow">{feature.description}</p>
                <div className="mt-8 pt-8 border-t border-white/5 opacity-40">
                  <ShieldCheck className="w-6 h-6 ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
