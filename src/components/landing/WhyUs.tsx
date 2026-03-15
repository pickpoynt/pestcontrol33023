import { Shield, Clock, Award, Droplets } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Total Line Restoration",
      description: "Snaking only creates a hole. Our Flower Mound hydro-jetting force performs '360-Degree Reclamation,' removing every trace of obstruction and scale."
    },
    {
      icon: Shield,
      title: "Pipe-Safe Dynamics",
      description: "We use 'Variable PSI Controls' specifically calibrated for North Texas plumbing materials, ensuring a deep clean without structural risk to your home."
    },
    {
      icon: Droplets,
      title: "High-Volume Recovery",
      description: "Rapidly handling the most stubborn grease, root, and aggregate blockages in Flower Mound foundation lines and main sewer service nodes."
    },
    {
      icon: Award,
      title: "Flower Mound Local Force",
      description: "Technicians deep-rooted in North Texas, specifically trained in the hydraulic architectures and high-volatile soil conditions of Flower Mound."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight">
              Why Trust Our <span className="text-amber-600">Flower Mound Jetting Force?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
              When a sewer line fails in Flower Mound, TX, a standard plumber's snake is often a temporary patch. Our high-pressure hydro-jetting system is a 'Hydraulic Resurrector'—we return your lines to their original engineered specifications. In a community built on expansive clay foundations, maintaining clear, high-flow drainage is vital to your property's structural health.
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
                <img src="/1.jpeg" alt="Hydro Jetting Force" className="rounded-3xl shadow-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white" />
                <img src="/2.jpeg" alt="Line Reclamation" className="rounded-3xl shadow-2xl h-64 w-full object-cover mt-8 border-2 border-white" />
                <img src="/3.jpeg" alt="Flower Mound Dispatch" className="rounded-3xl shadow-2xl h-64 w-full object-cover -mt-8 border-2 border-white" />
                <img src="/4.jpeg" alt="Professional Reset" className="rounded-3xl shadow-2xl h-64 w-full object-cover border-2 border-white" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 bg-amber-600 rounded-full flex flex-col items-center justify-center text-white text-center shadow-2xl animate-pulse border-4 border-white/20">
                <span className="text-3xl font-bold font-heading">EST.</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">FLOWER MOUND FORCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
