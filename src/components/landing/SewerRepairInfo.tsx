import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Target, ArrowRight } from "lucide-react";

/**
 * SewerRepairInfo Component - "Sewer Knowledge Base" section
 * Contains blog-style Q&A boxes in a grid layout.
 * Questions are formatted for SEO.
 * Includes a nice-looking call button in every square box.
 * NO MENTION of "Free Quotes" or "Estimates".
 */

interface BlogBoxProps {
  q: string;
  a: string;
}

const BlogBox = ({ q, a }: BlogBoxProps) => (
  <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full group">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
        <BookOpen className="w-3 h-3" />
        Sewer Blog
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors uppercase tracking-tight mb-4">
        {q}
      </h3>
      <div className="w-12 h-1 bg-blue-500 mb-6" />
    </div>
    
    <div className="text-slate-600 leading-relaxed font-normal text-sm mb-8 flex-grow italic">
      {a}
    </div>

    <div className="mt-auto pt-6 border-t border-slate-100">
      <a 
        href="tel:8777921410" 
        className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-blue-600 text-white px-6 py-4 rounded-none font-bold text-sm transition-all shadow-lg uppercase tracking-tighter w-full"
      >
        <Phone className="w-4 h-4 fill-white" />
        REACH DES MOINES DISPATCH
      </a>
    </div>
  </div>
);

const SewerRepairInfo = () => {
  const blogs = [
    {
      q: "What is trenchless sewer repair?",
      a: "This is a 'Total Structural Hardening' protocol where the internal sewer profile is reinforced without surface breach. In Des Moines, we use 'Hydraulic Reset' technology to neutralize sewer failure nodes from within, preserving your architectural serenity."
    },
    {
      q: "Can all sewers be repaired without digging?",
      a: "Yes. Most hydraulic nodes index as 'Linable'. For catastrophic structural resets in Des Moines, 'Sewer Bursting' protocols can neutralize the existing asset and replace it with a master-aligned high-density line without a trench breach."
    },
    {
      q: "How long does trenchless sewer repair take?",
      a: "Rapid tactical deployment typically allows for a 'Full Sewer Reset' within 24-48 cycles. Conventional digging protocols in IA can index for 7-10 cycles. Efficiency is our primary tactical metric."
    },
    {
      q: "Is trenchless sewer lining permanent?",
      a: "Yes. Technical indices suggest a structural lifecycle of 50+ cycles. Our Des Moines force utilizes industrial-grade lining that effectively creates a 'Primary Sewer within a Secondary Sewer', ensuring long-term asset security."
    },
    {
      q: "Will trenchless repair stop root intrusion?",
      a: "Yes. By creating a 'Monolithic Hydraulic Barrier', you eliminate the joints where biological assets typically breach the sewer. For Des Moines properties, this is the definitive technical reset against persistent IA roots."
    },
    {
      q: "How expensive is trenchless repair in Des Moines?",
      a: "Tactical deployment varies based on 'Asset Depth' and 'Linear Volume'. For a comprehensive sewer reset in Des Moines, indices typically range based on architectural complexity. Call (877) 792-1410 for a structural audit."
    },
    {
      q: "What happens if a sewer is totally collapsed?",
      a: "If the 'Lining Index' is zero, our force deploys 'Sewer Bursting' tactical units. This neutralizes the old structural node while simultaneously installing a fresh, master-aligned asset along the same hydraulic path."
    },
    {
      q: "Is it better to reline or replace a sewer line?",
      a: "Rethinking 'Replacement' as 'Hydraulic Reclamation' is key. Relining indices as a 'Surgical Asset Reset', which is superior for preserving Des Moines landscapes, while bursting is better for total infrastructure neutralizations."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Target className="w-4 h-4 text-blue-500 shadow-sm" />
            Des Moines Underground Research Node
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Trenchless <span className="text-blue-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-efficiency underground neutralization and air security in Des Moines, IA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-slate-100">
          {blogs.map((blog, idx) => (
            <BlogBox key={idx} q={blog.q} a={blog.a} />
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-600/10 skew-y-12 translate-y-24 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-tighter">
              Suspect a Structural Underground Breach? <br /> Act With Tactical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for hydraulic rot or sewer failure. Our Des Moines specialists provide 24/7 tactical dispatch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="tel:8777921410" className="bg-blue-600 hover:bg-white hover:text-slate-900 text-white h-20 px-12 rounded-none text-2xl font-bold flex items-center gap-4 transition-all shadow-2xl">
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

export default SewerRepairInfo;
