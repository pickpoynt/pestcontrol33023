import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Emergency Knockdown",
    description: "Our signature instant knockdown service. We use high-pressure aerosolized agents to drop entire colonies within seconds, ensuring your immediate safety.",
    image: "/2.jpeg",
    points: ["Instant Results", "Surgical Removal", "Zero Swarm Risk"]
  },
  {
    title: "Soffit & Eave Shield",
    description: "Protection for high-elevation areas where wasps love to build. We physically remove the nest and treat the area with residual barriers to prevent re-building.",
    image: "/3.jpeg",
    points: ["High-Reach Gear", "Residual Defense", "Clean Finish"]
  },
  {
    title: "Yellow Jacket Control",
    description: "Underground and wall-void yellow jacket elimination. We utilize micro-encapsulated formulas that penetrate the colony's core for total eradication.",
    image: "/1.jpeg",
    points: ["Void Injection", "Colony Collapse", "Crawlspace Secure"]
  },
  {
    title: "Seasonal Prevention",
    description: "Stop the queen before she settles. Our early-spring perimeter treatments target potential nesting sites around your Broomfield property.",
    image: "/4.jpeg",
    points: ["Queen Targeting", "Whole Yard Shield", "Annual Peace"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-600">Wasp Elimination In Broomfield</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Don't risk a sting. In the Broomfield climate, wasp activity spikes during the dry summer and fall months. Our localized specialists provide surgical nest removal that keeps your family safe.
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
