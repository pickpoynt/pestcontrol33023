import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Black Widow Neutralization",
    description: "Industrial-grade tactical deployment utilizing surgical elimination protocols to ensure maximum arachnid safety in Nashville residences.",
    image: "/2.jpeg",
    points: ["Web Profiling", "Egg Sac Reset", "Safety Audit"]
  },
  {
    title: "Brown Recluse Reclamation",
    description: "Reclaiming structural safety biology through precise vertical containment resets to prevent catastrophic bites across your Nashville architectural envelope.",
    image: "/3.jpeg",
    points: ["Zone Hardening", "Arachnid Profilometry", "Protective Alignment"]
  },
  {
    title: "Niche Protective Barriers",
    description: "Modern high-velocity asset hardening for spider-prone Nashville properties, replacing antiquated methods with master-aligned chemical barriers.",
    image: "/1.jpeg",
    points: ["Asset Reset", "Flow Profilometry", "Structural Alignment"]
  },
  {
    title: "24/7 Arachnid Dispatch",
    description: "Rapid deployment of tactical dispatch units to mitigate catastrophic spider nodes during Nashville's critical humidity shifts.",
    image: "/4.jpeg",
    points: ["Zero-Latency Response", "Immediate Stabilization", "Critical Dispatch"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-orange-600">Arachnid Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            A spider infestation in Nashville is a threat to your home's serenity and safety. Our force provides master-aligned precision for every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <a href="#contact">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-700 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3 text-orange-500 shrink-0" />{pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-orange-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
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
