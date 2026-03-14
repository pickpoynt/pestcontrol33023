import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Eco-Friendly Barriers",
    description: "Our core spider control service. We apply botanical-based residual barriers to your home's perimeter to stop spiders from ever entering the structure.",
    image: "/2.jpeg",
    points: ["Safe for Pets", "Botanical Oils", "Long-Lasting Defense"]
  },
  {
    title: "Structural De-Webbing",
    description: "We don't just spray; we physically remove all spider webs from eaves, joints, and entry points, discouraging spiders from rebuilding in high-traffic zones.",
    image: "/3.jpeg",
    points: ["Eave Cleaning", "Joint Sealing", "Web Removal"]
  },
  {
    title: "Brown Recluse Control",
    description: "Specialized treatment for dangerous Northwest/Southeast spider species. We utilize micro-encapsulated formulas that penetrate deep into crawlspaces.",
    image: "/1.jpeg",
    points: ["Dangerous Species Focus", "Deep Penetration", "Aggressive Removal"]
  },
  {
    title: "Quarterly Indoor Shield",
    description: "Year-round protection that targets crevices, baseboards, and attics. We ensure your indoor environment remains completely free of crawling arachnids.",
    image: "/4.jpeg",
    points: ["Indoor Protection", "Quarterly Monitoring", "Crevice Flushing"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-600">Spider Removal In Holly Springs</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Reclaim your comfort. In the North Carolina climate, spider populations can thrive in crawlspaces and attics. Our specialized multi-phase treatments ensure your property remains a web-free zone.
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
