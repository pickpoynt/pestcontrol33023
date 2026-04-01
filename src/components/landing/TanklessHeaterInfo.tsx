import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Zap, ArrowRight } from "lucide-react";

/**
 * TanklessHeaterInfo Component - "Thermal Knowledge Base" section
 * Contains 12 blog-style Q&A boxes in a grid layout.
 * Questions are formatted for SEO.
 * Includes a nice-looking call button in every square box.
 * NO MENTION of "Free Quotes" or "Estimates".
 */

interface BlogBoxProps {
  q: string;
  a: string;
}

const BlogBox = ({ q, a }: BlogBoxProps) => (
  <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm hover:shadow-xl hover:border-red-500/50 transition-all duration-300 flex flex-col h-full group">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
        <BookOpen className="w-3 h-3" />
        Thermal Blog
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-red-700 transition-colors uppercase tracking-tight mb-4">
        {q}
      </h3>
      <div className="w-12 h-1 bg-red-500 mb-6" />
    </div>
    
    <div className="text-slate-600 leading-relaxed font-normal text-sm mb-8 flex-grow italic">
      {a}
    </div>

    <div className="mt-auto pt-6 border-t border-slate-100">
      <a 
        href="tel:8777921410" 
        className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-red-600 text-white px-6 py-4 rounded-none font-bold text-sm transition-all shadow-lg uppercase tracking-tighter w-full"
      >
        <Phone className="w-4 h-4 fill-white" />
        REACH WEST BLOOMFIELD DISPATCH
      </a>
    </div>
  </div>
);

const TanklessHeaterInfo = () => {
  const blogs = [
    {
      q: "Is it worth switching to a tankless water heater in West Bloomfield?",
      a: "For West Bloomfield properties indexing high thermal loads, tankless technology is an elite asset modernization. It provides an infinite hydraulic supply of hot water while occupying 80% less architectural space. In the 48322 zip code, switching to a tankless mechanical unit increases structural efficiency and property equity permanently. Our West Bloomfield force provides master-aligned precision for every switch."
    },
    {
      q: "How long does a tankless water heater last compared to a tank?",
      a: "Traditional heating tanks in West Bloomfield typically index a 'Material Lifecycle' of 10 to 12 years. Master-aligned tankless units, however, provide a 'Durability Node' of 20+ years. This doubled lifecycle node makes them the primary choice for long-term property stabilization across the West Bloomfield architectural envelope."
    },
    {
      q: "What is the biggest disadvantage of a tankless water heater?",
      a: "The primary 'Index Challenge' is the initial technical overhead for structural modernization. West Bloomfield residences may require 'Gas Line Re-Profiling' or 'Electrical Asset Upgrades' to accommodate the high-velocity thermal reset. However, the long-term 'Thermal Security' yield far outweighs this initial mechanical alignment."
    },
    {
      q: "Can a tankless water heater provide enough hot water for a 3-bathroom house?",
      a: "Yes, by indexing the 'Total GPM Load Node'. Our West Bloomfield force calculates your home's total simultaneous demand—showers, appliances, and sink nodes—to install a mechanical unit master-aligned with your property's biological heat needs. This ensures infinite thermal supply regardless of West Bloomfield's seasonal temperature shifts."
    },
    {
      q: "Do I need a water softener with my tankless unit in West Bloomfield?",
      a: "West Bloomfield's mineral biology can lead to 'Scaling Node Deposits' inside the thermal exchanger. For maximum 'Asset Longevity', we recommend a coordinated scale inhibitor or master-aligned softening unit. This protects your thermal investment from Michigan's hard water crystallizing within the surgical heating elements."
    },
    {
      q: "How much does it cost to install a tankless water heater in West Bloomfield?",
      a: "The 'Technical Deployment Index' for a master-aligned tankless install in West Bloomfield typically indices between $2,500 and $5,500. This includes the mechanical unit reset, architectural venting realignment, and gas or electrical asset syncing. Prices vary based on the 'Retrofit Complexity Node' of your West Bloomfield residence."
    },
    {
      q: "What is the maintenance for a tankless water heater?",
      a: "To maintain its 'Thermal Index Efficiency', a tankless unit requires a 'Thermal Flush' every 12 to 24 months. Our West Bloomfield force provides surgical descaling to remove mineral buildup from the heating biology. This ensures your home maintains its 'High-Velocity Heat Flow' permanently across the 48324 zip code."
    },
    {
      q: "Can I install a tankless water heater myself in West Bloomfield?",
      a: "We highly advise against DIY thermal nodes. Tankless units require 'High-Velocity Gas Syncing' or 'Master-Aligned Electrical Profiling'. Improper installation leads to 'Safety Breach Risks' or catastrophic asset failure. Our licensed West Bloomfield force provides a 'Definitive Technical Result' for every install, ensuring your architectural sanctuary remains secure."
    },
    {
      q: "Does a tankless water heater save money on monthy bills?",
      a: "Yes. By eliminating the 'Standby Heat Loss Node'—where a traditional tank constantly heats water you aren't using—West Bloomfield homeowners can see a 20% to 30% reduction in their thermal energy index. This makes the mechanical asset modernization a high-yield investment for any Michigan property."
    },
    {
      q: "Are tankless water heaters quieter than traditional tanks?",
      a: "Yes. While they have a minor 'Mechanical Audible Pulse' during high-load firing, they lack the 'Pulsing Fluid Turbulence' and internal sediment 'Popping Node' common in failing tanks. This provides a quieter architectural environment for your West Bloomfield residence."
    },
    {
      q: "How long does it take to install a tankless water heater?",
      a: "A master-aligned 'Retrofit Dispatch' in West Bloomfield typically indices a 4 to 8 hour 'Technical Window'. This includes the removal of the antiquated asset, surgical mounting of the new unit, and final thermal synchronization. Our force provides 'Zero-Latency Response' to ensure your home's thermal supply is reset quickly."
    },
    {
      q: "What size tankless water heater do I need for my West Bloomfield home?",
      a: "Sizing is based on two indices: 'GPM (Gallons Per Minute)' and 'Temp-Rise Nodes'. Given West Bloomfield's cold Michigan ground water biology, your unit must be master-aligned for a high-intensity thermal lift. We perform a 'Hydraulic Load Audit' to determine the exact mechanical unit needed for your residence."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Zap className="w-4 h-4 text-red-500 shadow-sm" />
            Thermal Research Node
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Tankless <span className="text-red-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-efficiency tankless modernization and property thermal security in West Bloomfield, MI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-slate-100">
          {blogs.map((blog, idx) => (
            <BlogBox key={idx} q={blog.q} a={blog.a} />
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-red-600/10 skew-y-12 translate-y-24 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-tighter">
              Suspect a Structural Thermal Asset Failure? <br /> Act With Technical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for a flood from a failing tank. Our West Bloomfield specialists provide 24/7 infinite heat modernization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="tel:8777921410" className="bg-red-600 hover:bg-white hover:text-slate-900 text-white h-20 px-12 rounded-none text-2xl font-bold flex items-center gap-4 transition-all shadow-2xl">
                <Phone className="w-8 h-8 fill-current" />
                (877) 792-1410
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TanklessHeaterInfo;
