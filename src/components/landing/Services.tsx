import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Larvae Fiber Flush",
    description: "Deep-tissue treatment of carpets, rugs, and furniture fibers to eliminate the destructive larvae phase that standard vacuuming often misses.",
    image: "/2.jpeg",
    points: ["Fiber Node Clearance", "Upholstery Guard", "Structural Gap Fill"]
  },
  {
    title: "Structural Gap Inclosure",
    description: "Identification and sealing of the structural gaps behind baseboards and flooring where beetles congregate and lay their resilient eggs.",
    image: "/3.jpeg",
    points: ["Baseboard Sealing", "Flooring Gaps", "Crevice Fortification"]
  },
  {
    title: "Residual Fabric Shield",
    description: "Application of specialized fabric-safe residuals to high-risk areas to provide ongoing protection against future infestations.",
    image: "/1.jpeg",
    points: ["Long-term Defense", "Fabric Safe Agent", "Broomfield Secure"]
  },
  {
    title: "Attic & Void Abatement",
    description: "Deployment of biological growth regulators in attics and wall voids to break the reproductive cycle of adult beetles and larvae.",
    image: "/4.jpeg",
    points: ["Cycle Interruption", "Void Treatment", "24/7 Dispatch"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Specialized <span className="text-amber-600">Beetle Control In Broomfield</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Carpet beetles are more than a nuisance; they are a threat to your home's textiles and your family's hygiene. In Broomfield, CO, our team provides the elite level of expertise needed for total eradication.
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
