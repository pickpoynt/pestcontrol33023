import { Shield, Clock, Award, Droplets, Target } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Rapid Tactical Dispatch",
      description: "When plumbing breaches in Rockland County, delay is not an option. Our specialists provide zero-latency deployment to stabilize your home's infrastructure."
    },
    {
      icon: Shield,
      title: "Master-Aligned Setup",
      description: "We focus on surgical mechanical and hydraulic alignment designed to restore the leak-free lifecycle of every Rockland County residence."
    },
    {
      icon: Target,
      title: "Pipe Infrastructure Reset",
      description: "We don't just 'patch'; we profile your home's entire plumbing biology to ensure a permanent reset of your internal security."
    },
    {
      icon: Award,
      title: "Rockland County Master Force",
      description: "Licensed specialists who understand Rockland County's unique geological stress and hydraulic nodes, providing surgical tactical interventions 24/7."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight">
              Why Trust Our <span className="text-indigo-600">Plumbing Containment Force?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
              A plumbing breach in Rockland County, NY is more than an eyesore—it's a threat to your home's structural integrity. Generic plumbers often suggest massive tear-outs, but our Rockland Force uses 'Surgical Tactical Force' to provide a total structural reset without disruption. In the 10901 and 10960 zip codes, we are the first choice for permanent safety. We protect your architectural envelope with master-aligned technical precision.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((item, index) => (
                <div key={index} className="space-y-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-indigo-500/5 flex items-center justify-center group-hover:bg-indigo-600 group-hover:rotate-6 transition-all duration-300 border border-slate-100">
                    <item.icon className="w-7 h-7 text-indigo-600 group-hover:text-white" />
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
              <img src="/1.jpeg" alt="Rockland County Plumbers Force" className="rounded-3xl shadow-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white" />
              <img src="/2.jpeg" alt="Tactical Plumbing Dispatch" className="rounded-3xl shadow-2xl h-64 w-full object-cover mt-8 border-2 border-white" />
              <img src="/4.jpeg" alt="Structural Plumbing Reset" className="rounded-3xl shadow-2xl h-64 w-full object-cover -mt-8 border-2 border-white" />
              <img src="/3.jpeg" alt="NY Plumbing Specialists" className="rounded-3xl shadow-2xl h-64 w-full object-cover border-2 border-white" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 bg-indigo-600 rounded-full flex flex-col items-center justify-center text-white text-center shadow-2xl animate-pulse border-4 border-white/20">
                <span className="text-3xl font-bold font-heading">EST.</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">ROCKLAND FORCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
