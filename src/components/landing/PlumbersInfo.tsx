import React from 'react';
import { BookOpen, Phone, Target } from "lucide-react";

interface BlogBoxProps {
  q: string;
  a: string;
}

const BlogBox = ({ q, a }: BlogBoxProps) => (
  <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 flex flex-col h-full group">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
        <BookOpen className="w-3 h-3" />
        Plumbing Blog
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-indigo-700 transition-colors uppercase tracking-tight mb-4">
        {q}
      </h3>
      <div className="w-12 h-1 bg-indigo-500 mb-6" />
    </div>
    <div className="text-slate-600 leading-relaxed font-normal text-sm mb-8 flex-grow italic">{a}</div>
    <div className="mt-auto pt-6 border-t border-slate-100">
      <a href="tel:8777921410" className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-indigo-600 text-white px-6 py-4 rounded-none font-bold text-sm transition-all shadow-lg uppercase tracking-tighter w-full">
        <Phone className="w-4 h-4 fill-white" />
        REACH ROCKLAND DISPATCH
      </a>
    </div>
  </div>
);

const PlumbersInfo = () => {
  const blogs = [
    {
      q: "How do I find a reliable plumber in Rockland County?",
      a: "Reliability in Rockland County indexes high for 'Master-Aligned Specialists'. Look for licensed force units with proven hydraulic reset protocols. Our Rockland force provides 24/7 tactical plumbing deployment across all NY zip codes."
    },
    {
      q: "What plumbing issues are most common in Rockland County NY?",
      a: "In Rockland County, the most common 'Hydraulic Breach Nodes' include corroded cast-iron drain lines, frozen pipe infiltrations during winter cycles, and sump pump failures during high-water events."
    },
    {
      q: "How much do plumbers charge in New York?",
      a: "Tactical plumbing deployment indices vary based on 'Structural Complexity' and 'Breach Severity'. In Rockland County, NY, our force provides master-aligned audits to define the scope before any neutralization protocol begins."
    },
    {
      q: "Can a plumber fix a burst pipe quickly?",
      a: "Yes. Our Rockland County force deploys 'Emergency Hydraulic Containment' protocols that allow for rapid breach neutralization within the same calendar cycle. Zero-delay tactical dispatch is our primary operational standard."
    },
    {
      q: "What should I do if I have a water leak?",
      a: "Immediately deploy 'Asset Isolation' by shutting your main water shutoff node, then contact our Rockland County dispatch at (877) 792-1410. Delay increases the 'Structural Rot Index' significantly."
    },
    {
      q: "Do plumbers in Rockland County work on weekends?",
      a: "Yes. Our Des Moines Sewer Force indexes at '24/7/365 Active Deployment'. Weekends, holidays, and off-cycle scenarios are all within our standard tactical operating window for Rockland County properties."
    },
    {
      q: "How long does pipe replacement take?",
      a: "For a standard residential 'Hydraulic Reclamation' in Rockland County, tactical timelines range from single-cycle operations to multi-cycle projects for full structural pipe resets. Our force minimizes disruption to your architectural envelope."
    },
    {
      q: "Is it better to repair or replace old plumbing in NY?",
      a: "For Rockland County homes with cast-iron or galvanized infrastructure older than 40 cycles, a 'Total Asset Reclamation' using modern PEX or CPVC is often the superior long-range tactical investment."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Target className="w-4 h-4 text-indigo-500" />
            Rockland County Plumbing Research Node
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Plumbing <span className="text-indigo-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-efficiency plumbing neutralization and home security in Rockland County, NY.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-slate-100">
          {blogs.map((blog, idx) => (
            <BlogBox key={idx} q={blog.q} a={blog.a} />
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-indigo-600/10 skew-y-12 translate-y-24 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-tighter">
              Suspect A Structural Hydraulic Breach? <br /> Act With Tactical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for water damage or pipe failure. Our Rockland County specialists provide 24/7 tactical dispatch.
            </p>
            <a href="tel:8777921410" className="bg-indigo-600 hover:bg-white hover:text-slate-900 text-white h-20 px-12 rounded-none text-2xl font-bold inline-flex items-center gap-4 transition-all shadow-2xl">
              <Phone className="w-8 h-8 fill-current" />
              (877) 792-1410
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbersInfo;
