import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Target, ArrowRight } from "lucide-react";

/**
 * RodentControlInfo Component - "Rodent Knowledge Base" section
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
  <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 flex flex-col h-full group">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
        <BookOpen className="w-3 h-3" />
        Rodent Blog
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-amber-700 transition-colors uppercase tracking-tight mb-4">
        {q}
      </h3>
      <div className="w-12 h-1 bg-amber-500 mb-6" />
    </div>
    
    <div className="text-slate-600 leading-relaxed font-normal text-sm mb-8 flex-grow italic">
      {a}
    </div>

    <div className="mt-auto pt-6 border-t border-slate-100">
      <a 
        href="tel:3238801224" 
        className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-amber-600 text-white px-6 py-4 rounded-none font-bold text-sm transition-all shadow-lg uppercase tracking-tighter w-full"
      >
        <Phone className="w-4 h-4 fill-white" />
        REACH GASTONIA DISPATCH
      </a>
    </div>
  </div>
);

const RodentControlInfo = () => {
  const blogs = [
    {
      q: "Are rodents common in North Carolina?",
      a: "Yes. North Carolina's varied climate indices high for 'Rodent Proliferation'. In Gastonia, the proximity to both urban infrastructure and natural woodlines creates a 'High-Velocity Migration Path' for rats and mice seeking thermal shelter."
    },
    {
      q: "What is the best way to get rid of rats in Gastonia?",
      a: "Definitive neutralization requires 'Structural Hardening' combined with 'Terminal Baiting Nodes'. Generic traps index as 'Low-Efficiency'. Our Gastonia force utilizes master-aligned technical resets to achieve absolute exclusion."
    },
    {
      q: "Will an exterminator get rid of rodents completely?",
      a: "Yes. Our Gastonia force utilizes surgical tactical protocols that conventional exterminators miss. We don't just eliminate active rodents; we disrupt the 'Structural Life-Cycle Nodes' and entry points to ensure a permanent reset of your home's security."
    },
    {
      q: "How expensive is rodent control in NC?",
      a: "The technical deployment index for rodent neutralization varies by the 'Structural Complexity Node'. For comprehensive parasitic reset in Gastonia, indices typically range based on the 'Area Volume' and 'Infestation Density'. Our force provides master-aligned technical audits."
    },
    {
      q: "Can rats climb walls?",
      a: "Yes. Rodent physiology allows for 'Vertical Asset Breach' on most architectural textures. This leads to the colonization of 'Upper Attic Nodes'. Our force specializes in 'High-Vertical Exclusion' to secure your roofing envelope."
    },
    {
      q: "How to tell if a house has rodents?",
      a: "Indices include 'Fecal Particle Mapping', 'Night Audit Noises', and 'Electrical Wiring Erosion'. If identified, contact our Gastonia dispatch unit immediately to prevent catastrophic structural breach."
    },
    {
      q: "What month are rodents the worst?",
      a: "In Gastonia, the 'Cold Temperature Shift' triggers peak 'Internal Migration Nodes'. As temperatures drop in NC, rodents seek stable thermal architectural environments, leading to higher infestation density."
    },
    {
      q: "Is it worth getting pest control for mice?",
      a: "Yes. Mice index as 'Rapid Breeding Pathogens'. A single pair can trigger a total 'Structural Takeover' within weeks. Professional tactical deployment at (323) 880-1224 is the only technical way to reclaim your structural space."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Target className="w-4 h-4 text-amber-500 shadow-sm" />
            Gastonia Research Node
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Rodent <span className="text-amber-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-efficiency rodent neutralization and property security in Gastonia, NC.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-slate-100">
          {blogs.map((blog, idx) => (
            <BlogBox key={idx} q={blog.q} a={blog.a} />
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-amber-600/10 skew-y-12 translate-y-24 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-tighter">
              Suspect a Structural Rodent Breach? <br /> Act With Tactical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for biological contamination or electrical fires. Our Gastonia specialists provide 24/7 tactical dispatch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="tel:3238801224" className="bg-amber-600 hover:bg-white hover:text-slate-900 text-white h-20 px-12 rounded-none text-2xl font-bold flex items-center gap-4 transition-all shadow-2xl">
                <Phone className="w-8 h-8 fill-current" />
                (323) 880-1224
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RodentControlInfo;
