import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Wasp Nest Removal",
    description: "Professional removal of paper wasp, mud dauber, and yellow jacket nests. We use specialized equipment to safely detach and dispose of nests from eaves, attics, and trees.",
    image: "/2.jpeg",
    points: ["Safe Detachment", "Complete Disposal", "Eco-Friendly Spray"]
  },
  {
    title: "Hornet Nest Elimination",
    description: "High-risk hornet nest removal involving protective gear and precision application to neutralize aggressive colonies in Hillsborough properties.",
    image: "/3.jpeg",
    points: ["Full PPE Gear", "Instant Kill", "Night Service Available"]
  },
  {
    title: "Yellow Jacket Controls",
    description: "Targeted ground nest and wall void treatments for persistent yellow jacket infestations. We eliminate the queen and the entire hive structure.",
    image: "/1.jpeg",
    points: ["Ground Nest Entry", "Wall Void Injection", "Queen Removal"]
  },
  {
    title: "Preventive Treatment",
    description: "Long-lasting residual sprays applied to common nesting areas to prevent wasps from establishing new hives on your home or business structure.",
    image: "/4.jpeg",
    points: ["Residual Protection", "Annual Monitoring", "Sealing Service"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Professional <span className="text-amber-600">Wasp Nest Removal Hillsborough NC</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Hillsborough homeowners trust our experienced team for rapid, safe, and permanent wasp nest removal. We handle everything from high-eave nests to underground hives.
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
