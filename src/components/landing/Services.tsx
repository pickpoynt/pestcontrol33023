import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Surgical Leak Sealing",
    description: "Industrial-grade hydraulic deployment utilizing surgical sealing protocols to ensure maximum pipe integrity in West Bloomfield residencies.",
    image: "/2.jpeg",
    points: ["Thermal Profiling", "Pipe Stabilization", "Safety Audit"]
  },
  {
    title: "Burst Infrastructure Reset",
    description: "Reclaiming structural hydraulic biology through precise mechanical realignment to replace catastrophic breaches across your West Bloomfield architectural envelope.",
    image: "/3.jpeg",
    points: ["Zone Hardening", "Material Profiling", "Asset Reclamation"]
  },
  {
    title: "System Asset Upgrades",
    description: "Modern high-velocity asset hardening for risk-prone West Bloomfield properties, replacing antiquated pipes with burst-resistant mechanical units.",
    image: "/1.jpeg",
    points: ["Asset Reset", "Flow Profilometry", "Structural Alignment"]
  },
  {
    title: "24/7 Incident Emergency",
    description: "Rapid deployment of mechanical dispatch units to mitigate catastrophic pipe breaches during West Bloomfield's critical thermal and pressure shifts.",
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
            Comprehensive <span className="text-blue-600">Incident Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            A pipe breach in West Bloomfield is a threat to your home's structural and financial security. Our force provides master-aligned technical precision for every line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <a href="#contact">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3 text-blue-500 shrink-0" />{pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
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
