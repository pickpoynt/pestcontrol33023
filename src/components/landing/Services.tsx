import { ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Household Flea Removal",
    description: "Multi-stage interior treatments targeting flea larvae, eggs, and adults in carpets, upholstery, and hard-to-reach crevices throughout your North Brooksville home.",
    image: "/2.jpeg",
    points: ["Safe for Pets", "Long-term Residuals", "Total Eradication"]
  },
  {
    title: "Yard & Perimeter Shield",
    description: "Protective outdoor boundaries that stop flea migration from neighboring properties and local wildlife, creating a safe outdoor zone for your family and pets.",
    image: "/3.jpeg",
    points: ["Turf Protection", "Perimeter Barriers", "Eco-Friendly Options"]
  },
  {
    title: "Pet-Safe IGR Treatment",
    description: "Insect growth regulator applications that sterilize flea eggs and prevent larvae from maturing — breaking the flea life cycle permanently in your home.",
    image: "/1.jpeg",
    points: ["Breaks Life Cycle", "Pet Safe", "Months of Protection"]
  },
  {
    title: "Follow-Up & Prevention",
    description: "Scheduled 14-21 day return visits to eliminate any newly hatched pupae and confirm total eradication — with optional ongoing prevention plans.",
    image: "/4.jpeg",
    points: ["Guaranteed Results", "Ongoing Plans", "No Recurring Fleas"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Professional <span className="text-amber-600">Flea Control North Brooksville</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            North Brooksville homeowners trust our specialized team for precision flea lifecycle elimination and total property protection. We target every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <a href="#contact">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1 mb-4">
                    {service.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3 text-amber-500 shrink-0" />
                        {pt}
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
