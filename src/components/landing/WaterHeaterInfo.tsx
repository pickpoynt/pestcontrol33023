import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Droplets, ArrowRight } from "lucide-react";

/**
 * WaterHeaterInfo Component - "Expert Knowledge Base" section
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
        REACH READING DISPATCH
      </a>
    </div>
  </div>
);

const WaterHeaterInfo = () => {
  const blogs = [
    {
      q: "How do you know if your hot water heater is going out?",
      a: "In Reading properties, the first signs of 'Thermal Asset Decay' include erratic temperature fluctuations, metallic scent in the supply, and 'Acoustic knocking' within the tank. If you observe rust-colored water or condensation forming on the external architectural wrapper of the unit, your system has entered a 'Critical Failure Node.' Immediate professional intervention is required to prevent a catastrophic structural breach. Contact our Reading force at (877) 792-1410 for a precision flow audit."
    },
    {
      q: "Is it worth repairing a 10 year old water heater?",
      a: "For most Reading residences, a 10-year-old unit is nearing its 'Engineered Lifecycle Limit.' While minor surgical mechanical repairs like thermostat reset or element replacement can extend the life, the risk of a 'Total Structural Compromise' increases significantly after the first decade. In the 19601 zip code, where mineral content can accelerate material fatigue, we often recommend a 'Total Asset Upgrade' to high-efficiency modern units to ensure permanent thermal security and architectural protection."
    },
    {
      q: "Why did my hot water suddenly stop working?",
      a: "A sudden loss of thermal output is usually the result of a 'Component Ignition Failure' or a 'Circuitry Breach.' For gas units, this could be a pilot node disruption; for electric units, a failed heating element or tripped breaker node. Our Reading dispatch force provides 'Rapid Diagnostic Profiling' to identify the exact mechanical failure node. We neutralize thermal outages 24/7, providing a master-aligned system reset for your Reading home's internal hydraulic biology."
    },
    {
      q: "How much does it cost to fix a water heater in Reading PA?",
      a: "Minor surgical repairs in Reading typically range from $150 to $600, while a 'Total Mechanical Reset' involving element or valve replacement may index higher. Our 'Success-Based Pricing' reflects the elite technical mastery and industrial-grade tooling used to restore your home's thermal health. We provide 'Precision Dispatch' to ensure your hot water project is completed with zero wasted technical effort, protecting your Reading property's equity and comfort."
    },
    {
      q: "Can a water heater explosion be prevented?",
      a: "Yes, by maintaining a surgical focus on the 'T&P Valve' and expansion tank nodes. An explosion is the result of 'Uncontrolled Pressure Accumulation' beyond the unit's material limits. Our Reading master force provides 'Safety Protocol Audits' to ensure your home's thermal assets are equipped with master-aligned safety hardware. If you hear excessive whistling or see thermal seepage from the safety lines, dial (877) 792-1410 immediately for emergency mechanical stabilization."
    },
    {
      q: "What is the average lifespan of a water heater?",
      a: "The standard 'Hydraulic Lifecycle' for a tank-style heater in Reading, PA is 8 to 12 years. High-grade tankless units may reach a 20-year 'Durability Node.' Factors like Reading's local mineral stresses and material oxidation rates can shift this timeline. We provide 'Predictive Maintenance Profiling' to help Reading homeowners stay ahead of the failure curve, ensuring your architectural envelope is never compromised by an unexpected hydraulic breach."
    },
    {
      q: "Should I get a tankless water heater for my Reading PA home?",
      a: "Tankless conversion is an 'Elite Modernization Strategy' that provides infinite thermal supply and extreme space efficiency. For Reading architectural layouts with high-occupancy nodes, it provides 'Vertical Thermal Certainty' that standard tanks cannot match. Our master-aligned force specializes in 'Tankless Asset Integration,' ensuring your home's gas and plumbing biology is perfectly indexed for a high-efficiency flow reset. Reclaim your home's hot water security with a modern mechanical unit."
    },
    {
      q: "Why is my water heater making a knocking sound?",
      a: "Acoustic knocking, often called 'Mineral Hammering,' is caused by sediment crystallization at the bottom of the thermal chamber. As water boils beneath this 'Sediment Barrier,' it creates high-pressure steam bubbles that erupt, creating a mechanical knocking sound. This is a sign of 'Thermal Inefficiency' and material stress. Our Reading force provides 'Industrial-Grade Scour Protocols' to clear your tank and restore silent, efficient thermal operations to your residence."
    },
    {
      q: "How often should I flush my water heater?",
      a: "To maximize the 'Thermal Efficiency Index,' Reading homeowners should perform a surgical system flush every 12 months. This prevents mineral accumulation from hardening into a 'Catastrophic Barrier.' In the Reading 19604 area, where supply biology can be mineral-dense, annual maintenance is the only way to prevent premature material fatigue of the heating elements. Our dispatch force provides 'Comprehensive Maintenance Audits' to keep your home's hot water biology in peak condition."
    },
    {
      q: "Is a leaking water heater an emergency?",
      a: "Yes. Any seepage from the main structural wrapper of a water heater is a 'Critical Hydraulic Failure.' Unlike a localized faucet leak, a heater breach threatens your Reading home's foundation and architectural finishes with high-volume thermal discharge. A small leak today can become a 50-gallon 'Flooding Event' tomorrow. Our Reading force provides 'Rapid Asset Stabilization' 24/7 to neutralize these threats before they escalate into total property failure. Dial (877) 792-1410."
    },
    {
      q: "What is the most common cause of water heater failure?",
      a: "The primary 'Failure Node' is 'Internal Material Oxidation' caused by a depleted anode rod. Once this protective measure is consumed, the water's corrosive biology attacks the tank's steel wrapper directly. This leads to a 'Molecular Breach' that cannot be repaired, only replaced. Our Reading master force provides 'Anode Integrity Audits' to extend your unit's lifecycle, providing the 'Definitive Technical Result' for your Reading home's thermal security."
    },
    {
      q: "Can a homeowner replace their own water heater?",
      a: "Water heater replacement involves high-risk 'Energy Conduits' (Gas/Electric) and high-pressure hydraulic intersections. In Reading, master-level mechanical certification is required to ensure your site is 'Safety Indexed' and built to current North Carolina structural codes. An incorrectly installed heater can lead to fire, explosion, or catastrophic carbon monoxide discharge. Trust the 'Reading Master Force' for a safe, certified, and permanent thermal reset. We handle the high-risk mechanical intersections so you don't have to."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Droplets className="w-4 h-4 text-red-500" />
            Reading Thermal Research
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Water Heater <span className="text-red-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-efficiency water heater reclamation and property thermal security in Reading, PA.
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
              Suspect a Thermal Asset Failure? <br /> Act With Technical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for a cold shower or flooding. Our Reading specialists provide 24/7 emergency thermal reclamation.
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

export default WaterHeaterInfo;
