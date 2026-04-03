import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Bug, ArrowRight } from "lucide-react";

/**
 * FleaControlInfo Component - "Flea Knowledge Base" section
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
  <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm hover:shadow-xl hover:border-rose-500/50 transition-all duration-300 flex flex-col h-full group">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
        <BookOpen className="w-3 h-3" />
        Flea Blog
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-rose-700 transition-colors uppercase tracking-tight mb-4">
        {q}
      </h3>
      <div className="w-12 h-1 bg-rose-500 mb-6" />
    </div>
    
    <div className="text-slate-600 leading-relaxed font-normal text-sm mb-8 flex-grow italic">
      {a}
    </div>

    <div className="mt-auto pt-6 border-t border-slate-100">
      <a 
        href="tel:3238801224" 
        className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-rose-600 text-white px-6 py-4 rounded-none font-bold text-sm transition-all shadow-lg uppercase tracking-tighter w-full"
      >
        <Phone className="w-4 h-4 fill-white" />
        REACH BROOKSVILLE DISPATCH
      </a>
    </div>
  </div>
);

const FleaControlInfo = () => {
  const blogs = [
    {
      q: "How expensive is it to get rid of fleas?",
      a: "The technical deployment index for flea neutralization in Florida varies by the 'Structural Complexity Node'. For comprehensive parasitic reset in South Brooksville, indices typically range based on the 'Area Volume' and 'Infestation Density'. Our force provides master-aligned technical audits."
    },
    {
      q: "Is it worth getting pest control for fleas?",
      a: "Yes. Generic store-bought treatments index as 'Low-Efficiency'. A professional tactical reset addressing the 'Larvae-Egg Macro Node' is the only technical way to achieve a zero-parasite environment in Brooksville architectural envelopes."
    },
    {
      q: "Will an exterminator get rid of fleas completely?",
      a: "Yes. Our South Brooksville force utilizes surgical tactical protocols that conventional exterminators miss. We don't just eliminate active fleas; we disrupt the 'Structural Life-Cycle Nodes' and breeding cycles to ensure a permanent reset of your home's security."
    },
    {
      q: "What is the best flea treatment in Florida?",
      a: "Florida's internal environment requires 'Residual Barrier Hardening'. By combining mechanical exclusion with industrial-grade neutralization, we achieve the highest technical result across the 34601 and 34605 zip codes."
    },
    {
      q: "What kills 100% of fleas in the house?",
      a: "100% neutralization requires a 'Tactical Life-Cycle Reset'. Conventional 'Fogger Scrapers' fail to reach into sub-structural carpet nodes. Our Brooksville force utilizes surgical-grade industrial components for a total structural reset."
    },
    {
      q: "How long will fleas last in a house?",
      a: "Without 'Tactical Neutralization', a flea colony can survive in a 'Dormant Pupae State' for months. Once the 'Ambient Temperature Node' is reached in South Brooksville, the colony re-activates, leading to a secondary structural breach."
    },
    {
      q: "What smell do fleas absolutely hate?",
      a: "While peppermint and cedar act as 'Passive Repellent Nodes', they do not solve an active 'Architectural Infestation'. Professional tactical deployment at (323) 880-1224 is the only technical way to reclaim your structural space."
    },
    {
      q: "What month are fleas the worst?",
      a: "In South Brooksville, the 'Humidity Saturation Cycles' of the Florida summer trigger peak 'Biological Activity Nodes'. However, fleas can remain active in the thermal-stable interior of a Brooksville property year-round."
    },
    {
      q: "Can you ever fully get rid of fleas?",
      a: "Yes, through 'Structural Hardening' and 'Biological Disruption'. By neutralizing every stage of the life cycle within your architectural envelope, our force achieves absolute parasitic elimination."
    },
    {
      q: "Will vacuuming every day get rid of fleas?",
      a: "Vacuuming indices as a 'Supportive Maintenance Protocol' but only removes 20-30% of the active node density. A definitive tactical intervention is required to address the remaining 70% of 'Concealed Life-Cycle Stages'."
    },
    {
      q: "Can fleas live in pillows?",
      a: "Flea nodes seek 'Porous Structural Materials' including pillows and baseboard crevices. This creates a 'Biological Violation' of your primary sleeping nodes, requiring immediate tactical neutralization by our Brooksville force."
    },
    {
      q: "How to tell if a house has fleas?",
      a: "Indices include 'Bite Nodes' on human and pet architectural inhabitants, visible 'Jumping Dispersion', or 'Flea Dirt Particles' in carpet nodes. If identified, contact our South Brooksville dispatch unit immediately."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Bug className="w-4 h-4 text-rose-500 shadow-sm" />
            Brooksville Parasite Research Node
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Parasite <span className="text-rose-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-efficiency flea neutralization and property security in South Brooksville, FL.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-slate-100">
          {blogs.map((blog, idx) => (
            <BlogBox key={idx} q={blog.q} a={blog.a} />
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-rose-600/10 skew-y-12 translate-y-24 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-tighter">
              Suspect a Structural Flea Breach? <br /> Act With Tactical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for biological contamination or skin deterioration. Our Brooksville specialists provide 24/7 tactical dispatch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="tel:3238801224" className="bg-rose-600 hover:bg-white hover:text-slate-900 text-white h-20 px-12 rounded-none text-2xl font-bold flex items-center gap-4 transition-all shadow-2xl">
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

export default FleaControlInfo;
