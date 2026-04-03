import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Microscope, ArrowRight } from "lucide-react";

/**
 * SporeDetectionInfo Component - "Spore Knowledge Base" section
 * Contains 15 blog-style Q&A boxes in a grid layout.
 * Questions are formatted for SEO.
 * Includes a nice-looking call button in every square box.
 * NO MENTION of "Free Quotes" or "Estimates".
 */

interface BlogBoxProps {
  q: string;
  a: string;
}

const BlogBox = ({ q, a }: BlogBoxProps) => (
  <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col h-full group">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
        <BookOpen className="w-3 h-3" />
        Spore Blog
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-teal-700 transition-colors uppercase tracking-tight mb-4">
        {q}
      </h3>
      <div className="w-12 h-1 bg-teal-500 mb-6" />
    </div>
    
    <div className="text-slate-600 leading-relaxed font-normal text-sm mb-8 flex-grow italic">
      {a}
    </div>

    <div className="mt-auto pt-6 border-t border-slate-100">
      <a 
        href="tel:3802660944" 
        className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-teal-600 text-white px-6 py-4 rounded-none font-bold text-sm transition-all shadow-lg uppercase tracking-tighter w-full"
      >
        <Phone className="w-4 h-4 fill-white" />
        REACH BREEZE DISPATCH
      </a>
    </div>
  </div>
);

const SporeDetectionInfo = () => {
  const blogs = [
    {
      q: "What are the mold spores in Florida?",
      a: "Florida's subtropical environment indexes high for 'Aspergillus', 'Penicillium', and the critical 'Stachybotrys' (Black Mold). These pathogen nodes thrive in Gulf Breeze architectural structures due to sustained humidity saturation and hydrostatic pressure."
    },
    {
      q: "What is a safe level of spores m3 for mold?",
      a: "A 'Safe Respiration Node' typically requires an internal spore count lower than the 'Outside Baseline Index'. In Gulf Breeze residential units, counts exceeding 500-1000 spores/m³ of 'Penicillium' or any count of 'Stachybotrys' require immediate tactical containment force."
    },
    {
      q: "Does Florida have a mold problem?",
      a: "Yes. Florida's high humidity cycles create a 'Structural Moisture Loop' that leads to chronic pathogen blooming. Gulf Breeze homes near the water are particularly susceptible to 'Atmospheric Infiltration' and sub-flooring spore colonization."
    },
    {
      q: "What is considered a large mold infestation?",
      a: "In the tactical restoration index, any 'Biological Coverage Area' larger than 10 square feet is considered a 'High-Velocity Breach'. This requires surgical HEPA containment and vertical moisture resets to prevent a total structural failure."
    },
    {
      q: "Is mold high in Florida?",
      a: "The 'Florida Spore Density Index' is among the highest in the US. Sustained thermal energy and architectural moisture trapping create 'Incubation Nodes' across Gulf Breeze properties that require seasonal tactical monitoring."
    },
    {
      q: "What kills 100% of mold spores?",
      a: "100% neutralization requires a 'Tactical Pathogen Reset' utilizing industrial desiccant deployment and HEPA-4 filtration. Conventional bleach application only addresses the 'Surface Node', leaving the root 'Mycelium Infrastructure' active."
    },
    {
      q: "What plant removes 78% of airborne mold?",
      a: "While 'English Ivy' can act as a minor 'Passive Filtration Node', it cannot solve a 'Structural Spore Emergency'. For definitive respiratory security, a master-aligned surgical detection and filtration deployment is the only technical solution."
    },
    {
      q: "What is type 3 mold?",
      a: "Type 3, or 'Stachybotrys chartarum', is a 'Toxic Pathogen Node'. It indices high for mycotoxin dispersion, representing a critical threat to the architectural and biological serenity of your Gulf Breeze residence."
    },
    {
      q: "What does spores m3 mean?",
      a: "It is the 'Technical Concentration Index'—spores per cubic meter of air. Our Gulf Breeze force utilizes precision air-quality sensors to map these nodes and execute a definitive atmospheric reset."
    },
    {
      q: "How to test for mold in Florida?",
      a: "Effective detection requires 'Vertical Sampling' (air, surface, and cavity). Dial (380) 266-0944 for a professional tactical audit and mapping of the pathogen nodes within your Gulf Breeze architectural envelope."
    },
    {
      q: "Is mold the silent killer?",
      a: "Chronic exposure to 'Mycotoxin Dispersion' indices high for respiratory and cognitive fatigue. In Gulf Breeze, many residents suffer from 'Sub-Structural Breaches' where spores are circulating behind walls without a visible bloom node."
    },
    {
      q: "Is Aspergillus in Florida?",
      a: "Yes, Aspergillus is a dominant 'Environmental Node' in Florida. While common, its concentration in indoor architectural climates can create a 'Pathogen Saturation Point' requiring industrial-grade tactical neutralization."
    },
    {
      q: "What are the first signs of mold sickness?",
      a: "Indices include persistent 'Respiratory Fatigue', 'Cognitive Fog Nodes', and 'Sinus Congestion'. If these occur within your Gulf Breeze property, a 'Structural Biology Audit' is immediately required."
    },
    {
      q: "How to heal yourself from mold toxicity?",
      a: "Healing begins with 'Absolute Source Containment'. You cannot recover while inhabiting an 'Active Spore Breach'. Our Gulf Breeze force provides the definitive technical reset needed to restore your home's air security."
    },
    {
      q: "How long do mold spores stay in the air?",
      a: "Without 'Tactical Filtration', mold spores can remain suspended indefinitely in the 'Structural Air Loop'. HEPA-aligned deployment by our Gulf Breeze specialists is the only way to achieve a zero-particulate reset."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Microscope className="w-4 h-4 text-teal-500 shadow-sm" />
            Gulf Breeze Research Node
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Pathogen <span className="text-teal-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-efficiency spore detection and air security in Gulf Breeze, FL.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-slate-100">
          {blogs.map((blog, idx) => (
            <BlogBox key={idx} q={blog.q} a={blog.a} />
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-teal-600/10 skew-y-12 translate-y-24 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-tighter">
              Suspect a Structural Spore Breach? <br /> Act With Tactical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for respiratory failure or structural decay. Our Gulf Breeze specialists provide 24/7 tactical dispatch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="tel:3802660944" className="bg-teal-600 hover:bg-white hover:text-slate-900 text-white h-20 px-12 rounded-none text-2xl font-bold flex items-center gap-4 transition-all shadow-2xl">
                <Phone className="w-8 h-8 fill-current" />
                (380) 266-0944
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SporeDetectionInfo;
