import { Shield, Clock, Award, Droplets } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Rapid Sanitary Dispatch",
      description: "When a sewer main breaches in Gastonia, delay is not an option. Our specialists provide zero-latency deployment to stabilize your home's flow."
    },
    {
      icon: Shield,
      title: "No-Dig Asset Reset",
      description: "We focus on surgical mechanical and material alignment designed to rehabilitate Gastonia sewer lines without destroying your landscape."
    },
    {
      icon: Droplets,
      title: "Total System Reset",
      description: "We don't just 'repair'; we profile your home's entire sanitary biology to ensure a permanent reset of your wastewater health."
    },
    {
      icon: Award,
      title: "Gastonia Master Force",
      description: "Licensed technicians who understand Gastonia's unique clay and root stresses, providing highly surgical trenchless interventions 24/7."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight">
              Why Trust Our <span className="text-blue-600">Trenchless Reclamation Force?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
              A breached sewer line in Gastonia, NC is more than an inconvenience—it's a threat to your home's sanitary safety. Conventional plumbers often suggest massive trenching, but our Gastonia force uses 'Surgical Trenchless Force' to provide a total structural reset of your home's flow without the mess. In the 28052 and 28054 zip codes, we are the first choice for permanent no-dig security. We protect your architectural envelope with master-aligned technical precision.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((item, index) => (
                <div key={index} className="space-y-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-blue-500/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-300 border border-slate-100">
                    <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
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
                <img src="/1.jpeg" alt="Trenchless Reclamation Force" className="rounded-3xl shadow-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white" />
                <img src="/2.jpeg" alt="Gastonia Dispatch" className="rounded-3xl shadow-2xl h-64 w-full object-cover mt-8 border-2 border-white" />
                <img src="/3.jpeg" alt="NC Sanitary Specialists" className="rounded-3xl shadow-2xl h-64 w-full object-cover -mt-8 border-2 border-white" />
                <img src="/4.jpeg" alt="Structural Trenchless Reset" className="rounded-3xl shadow-2xl h-64 w-full object-cover border-2 border-white" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white text-center shadow-2xl animate-pulse border-4 border-white/20">
                <span className="text-3xl font-bold font-heading">EST.</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">GASTONIA FORCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
