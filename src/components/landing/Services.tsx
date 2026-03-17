import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Acoustic Leak Detection",
    description: "Utilizing ultrasonic frequency arrays to pinpoint the exact node of sub-slab failure without invasive demolition in San Clemente.",
    image: "/2.jpeg",
    points: ["Sonic Mapping", "Zero-Damage Survey", "Precise Location"]
  },
  {
    title: "Thermal Imaging Scans",
    description: "Deploying high-resolution infrared tech to visualize heat signatures of sub-surface hot water leaks across your San Clemente foundation.",
    image: "/3.jpeg",
    points: ["Thermal Profiling", "Moisture Mapping", "Immediate Diagnosis"]
  },
  {
    title: "Trenchless Pipe Re-piping",
    description: "Structural bypass and re-piping solutions that restore flow while preserving the architectural integrity of your San Clemente home.",
    image: "/1.jpeg",
    points: ["Structural Bypass", "Copper/PEX Specialist", "Asset Preservation"]
  },
  {
    title: "24/7 Emergency Dispatch",
    description: "Rapid response force ready to mitigate foundation hydraulic stress and prevent catastrophic slab heave in San Clemente, CA.",
    image: "/4.jpeg",
    points: ["Zero-Latency Response", "Emergency Shut-off", "Immediate Mitigation"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-600">Slab Leak Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            An undetected slab leak in San Clemente is a silent threat to your property's structural foundation. Our experts use master-aligned tech to identify and repair breaches before they cause catastrophic heave.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <a href="#contact">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3 text-amber-500 shrink-0" />{pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
