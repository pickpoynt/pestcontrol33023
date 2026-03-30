import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Gas Heater Reclamation",
    description: "Industrial-grade gas component deployment utilizing surgical ignition protocols to ensure maximum thermal efficiency in Reading residencies.",
    image: "/2.jpeg",
    points: ["Pilot Sync", "Burner Audit", "Safety Reset"]
  },
  {
    title: "Electric System Reset",
    description: "Reclaiming structural heat biology for electric heating units to restore vertical thermal distribution across your Reading architectural envelope.",
    image: "/3.jpeg",
    points: ["Element Profiling", "Thermostat Sync", "Flow Reclamation"]
  },
  {
    title: "Tankless Asset Upgrades",
    description: "Modern high-velocity asset hardening for aging Reading properties, replacing antiquated tanks with infinite thermal units.",
    image: "/1.jpeg",
    points: ["Asset Reset", "Heat Profilometry", "Structural Alignment"]
  },
  {
    title: "24/7 Thermal Emergency",
    description: "Rapid deployment of mechanical dispatch units to mitigate catastrophic heater failures during Reading's critical weather nodes.",
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
            Comprehensive <span className="text-red-600">Thermal Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            A failed water heater in Reading is a threat to your home's thermal security. Our force provides master-aligned technical precision for every unit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <a href="#contact">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-700 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3 text-red-500 shrink-0" />{pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
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
