import { Shield, Clock, Award, Droplets } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Immediate Flood Stop",
      description: "Water travels FAST through Flower Mound foundations. Our 24/7 rapid dispatch teams provide immediate 'Mechanical Isolation' to stop damage at the source."
    },
    {
      icon: Shield,
      title: "Integrity Restoration",
      description: "We don't just patch. We perform a 'Structural Audit' of the failure node, providing high-stability line fortification that resists future environmental shifts."
    },
    {
      icon: Droplets,
      title: "Advanced Moisture Audit",
      description: "Using high-resolution thermography and sonic mapping to find water hidden deep in your Flower Mound home's structure that others miss."
    },
    {
      icon: Award,
      title: "Flower Mound Local Force",
      description: "Technicians deep-rooted in North Texas, specifically trained in the plumbing architecture and high-volatile soil conditions of Flower Mound."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight">
              Why Trust Our <span className="text-amber-600">Flower Mound Burst Team?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
              A pipe burst is a violent event that threatens your home's structural viability and your property's value. In Flower Mound, TX, a standard repair is not enough. Our team combines hydraulic engineering with rapid-response logistics to provide a level of protection that ensures your home's safety and your family's peace of mind.
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
                <img src="/2.jpeg" alt="Pipe Burst Recovery" className="rounded-3xl shadow-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white" />
                <img src="/3.jpeg" alt="Structural Audit" className="rounded-3xl shadow-2xl h-64 w-full object-cover mt-8 border-2 border-white" />
                <img src="/4.jpeg" alt="Flower Mound Dispatch" className="rounded-3xl shadow-2xl h-64 w-full object-cover -mt-8 border-2 border-white" />
                <img src="/1.jpeg" alt="Emergency Reset" className="rounded-3xl shadow-2xl h-64 w-full object-cover border-2 border-white" />
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
