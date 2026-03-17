import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Pinhole Leak Detection",
    description: "Utilizing ultrasonic array sensors to pinpoint the exact node of sub-surface pipe failure without invasive wall demolition in Westlake.",
    image: "/2.jpeg",
    points: ["Sonic Auditing", "Zero-Damage Survey", "Precise Isolation"]
  },
  {
    title: "Supply Line Reclamation",
    description: "Surgical restoration of copper and PEX supply networks to ensure vertical flow consistency across your Westlake architectural envelope.",
    image: "/3.jpeg",
    points: ["Master Welding", "Asset Preservation", "Pressure Reset"]
  },
  {
    title: "Corrosion Mitigation",
    description: "Identifying and neutralizing chemical and biological pipe degradation to prevent catastrophic sub-slab hydraulic failure.",
    image: "/1.jpeg",
    points: ["Material Profiling", "Joint Security", "Bio-Film Removal"]
  },
  {
    title: "24/7 Rapid Response",
    description: "Immediate mechanical dispatch to mitigate active hydraulic breaches and prevent structural water saturation in Westlake residencies.",
    image: "/4.jpeg",
    points: ["Zero-Latency Deployment", "Asset Hardening", "Flow Control"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-600">Pipe Repair Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            A leaking pipe in Westlake, TX is a threat to your property's value and structural integrity. Our force provides industrial-grade mechanical reclamation to stop the breach and restore flow.
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
