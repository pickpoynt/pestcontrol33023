import { Shield, Clock, Award, Target } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Rapid Fiber Mapping",
      description: "Carpet beetles establish 'nodes' in secluded structural areas and textile fibers. Our Broomfield teams specialize in mapping these hidden hubs for precision treatment."
    },
    {
      icon: Shield,
      title: "Structural Fiber Guard",
      description: "We don't just spray surfaces. We offer structural fiber protection and mechanical enclosure using industrial-grade sealants to block baseboards and flooring gaps."
    },
    {
      icon: Target,
      title: "Micro-Encapsulated Kill Zones",
      description: "Our treatments utilize high-stability agents that remain lethal to beetles for up to 90 days, even in the dry environment of Colorado's Front Range."
    },
    {
      icon: Award,
      title: "Broomfield Local Experts",
      description: "Our technicians have deep local experience in treating the specific structural types and textile threats of the 80020 area and surrounding ZIP codes."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight">
              Why Trust Our <span className="text-amber-600">Broomfield Beetle Team?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
              Carpet beetles are resilient pests that avoid common surface treatments. In Broomfield, CO, a standard spray is simply not enough. Our team combines textile science with advanced entomology to provide a level of protection that ensures your home's integrity and your family's peace of mind.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((item, index) => (
                <div key={index} className="space-y-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-amber-500/5 flex items-center justify-center group-hover:bg-amber-600 group-hover:rotate-6 transition-all duration-300 border border-slate-100">
                    <item.icon className="w-7 h-7 text-amber-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <img src="/2.jpeg" alt="Beetle Inspection" className="rounded-3xl shadow-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white" />
                <img src="/3.jpeg" alt="Fiber Treatment" className="rounded-3xl shadow-2xl h-64 w-full object-cover mt-8 border-2 border-white" />
                <img src="/4.jpeg" alt="Mechanical Exclusion" className="rounded-3xl shadow-2xl h-64 w-full object-cover -mt-8 border-2 border-white" />
                <img src="/1.jpeg" alt="Rapid Dispatch" className="rounded-3xl shadow-2xl h-64 w-full object-cover border-2 border-white" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 bg-amber-600 rounded-full flex flex-col items-center justify-center text-white text-center shadow-2xl animate-pulse border-4 border-white/20">
                <span className="text-3xl font-bold font-heading">#1</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">In Broomfield</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
