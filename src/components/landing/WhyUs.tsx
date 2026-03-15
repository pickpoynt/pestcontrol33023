import { Shield, Clock, Award, Target } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Rapid Acoustic Mapping",
      description: "Slab leaks establish 'nodes' of moisture deep within your home's foundation. Our Flower Mound teams specialize in mapping these hidden leaks using ultra-sensitive sonic equipment."
    },
    {
      icon: Shield,
      title: "Non-Invasive Structural Guard",
      description: "We don't just drill holes. We offer precision restoration and mechanical enclosure of failing lines, identifying exact puncture points without unnecessary destruction."
    },
    {
      icon: Target,
      title: "Foundation Integrity Shield",
      description: "Our repairs utilize high-stability materials that reinforce the structural void, ensuring your home remains level even after significant sub-slab water erosion."
    },
    {
      icon: Award,
      title: "Flower Mound Local Experts",
      description: "Our technicians have deep local experience in treating the specific soil conditions and foundation types of the Flower Mound area and surrounding ZIP codes."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight">
              Why Trust Our <span className="text-amber-600">Flower Mound Slab Team?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
              Slab leaks are deceptive emergencies that avoid standard plumbing inspections. In Flower Mound, TX, a simple visual check is simply not enough. Our team combines acoustic engineering with advanced thermography to provide a level of protection that ensures your home's structural safety and your family's peace of mind.
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
                <img src="/2.jpeg" alt="Slab Leak Detection" className="rounded-3xl shadow-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white" />
                <img src="/3.jpeg" alt="Precision Restoration" className="rounded-3xl shadow-2xl h-64 w-full object-cover mt-8 border-2 border-white" />
                <img src="/4.jpeg" alt="Foundation Support" className="rounded-3xl shadow-2xl h-64 w-full object-cover -mt-8 border-2 border-white" />
                <img src="/1.jpeg" alt="Emergency Dispatch" className="rounded-3xl shadow-2xl h-64 w-full object-cover border-2 border-white" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 bg-amber-600 rounded-full flex flex-col items-center justify-center text-white text-center shadow-2xl animate-pulse border-4 border-white/20">
                <span className="text-3xl font-bold font-heading">#1</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">In Flower Mound</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
