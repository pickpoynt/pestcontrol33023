import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Droplets, ArrowRight } from "lucide-react";

/**
 * SewerReplacementInfo Component - "Sanitary Knowledge Base" section
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
        REACH WEST BLOOMFIELD DISPATCH
      </a>
    </div>
  </div>
);

const SewerReplacementInfo = () => {
  const blogs = [
    {
      q: "Is sewer pipe relining worth it?",
      a: "For West Bloomfield properties with intact structural biology but compromised surface integrity, 'Structural Relining' is an elite reclamation strategy. It provides a permanent barrier without the extreme architectural disruption of trenching. Relining saves your landscaping and hardscaping equity while creating a seamless, root-proof internal wrapper that lasts for decades. In the 48322 zip code, it's often the most strategic way to reset your sanitary asset."
    },
    {
      q: "What is the 135 rule in plumbing?",
      a: "The '135 Rule' is a technical benchmark for gravity-fed drainage systems, where a pipe should fall 1 inch for every 3 to 5 feet of horizontal run. In West Bloomfield architectural layouts, improper indexing can lead to stagnant sanitary nodes and catastrophic blockages. Our force performs 'Index Audits' to identify these structural deficiencies before they lead to a total hydraulic failure."
    },
    {
      q: "What is the average lifespan of a sewer line?",
      a: "Traditional clay and cast-iron lines in West Bloomfield typically index a 'Material Lifecycle' of 50 to 60 years. Modern high-density polymers can reach a 100-year 'Durability Node.' Factors like West Bloomfield's unique soil biology and root intrusion rates can accelerate material fatigue. We provide 'Asset Life Profiling' to help homeowners stay ahead of the structural failure curve."
    },
    {
      q: "Can you repair a sewer line without digging it up?",
      a: "Yes, through 'Trenchless Asset Reclamation'. Our West Bloomfield force specializes in 'Surgical Pipe Relining' and 'Mechanical Pipe Bursting'. These methods utilize existing entry nodes to replace or repair lines hidden deep within your West Bloomfield architectural envelope. This provides a total structural reset with zero-dig disruption to your property's exterior finishes."
    },
    {
      q: "Does homeowners insurance cover replacing a sewer line?",
      a: "Most West Bloomfield insurance nodes only cover the 'Resulting Damage' of a sewer backup, not the 'Asset Replacement' itself, unless you have a specific 'Service Line Endorsement'. We provide 'Evidence-Based Documentation' to assist West Bloomfield homeowners in navigating these structural claims, ensuring your architectural sanctuary is protected and stabilized."
    },
    {
      q: "What is the disadvantage of pipe relining?",
      a: "The primary 'Mechanical Disadvantage' is that relining cannot be performed on a pipe that has already entered 'Structural Collapse' or has severe 'Alignment Node Deviations'. In such cases, West Bloomfield residences require 'Mechanical Pipe Bursting' or selective open-trench intervention. Our master force provides 'CCTV Asset Profiling' to ensure the correct technical protocol for your home's sanitary biology."
    },
    {
      q: "How deep are most sewer lines buried?",
      a: "In West Bloomfield, MI, sewer lines are typically buried below the 'Frost Line' node, usually between 4 and 8 feet deep. However, main intercept nodes can sit 12+ feet deep depending on your property's specific topometry. Our force utilizes 'Precision Probing Hardware' to identify the exact depth and layout of your home's sanitary conduits without guessing."
    },
    {
      q: "What should never go down the drain?",
      a: "To prevent 'Sanitary Load Failures', Reading homeowners must avoid discharging fats, oils, and 'flushable' wipes into their plumbing biology. These materials create 'FOG Nodes' that crystallize into concrete-like blockages. For West Bloomfield architectural durability, only organic discharge and master-aligned paper should enter your sanitary system."
    },
    {
      q: "Can a kitchen sink and toilet share a drain?",
      a: "Yes, provided they are indexed through a 'Sanitary Wye' fitting and properly vented to prevent 'Pressure Pulse Syphoning'. In West Bloomfield home biology, multiple fixtures often converge into a single 'Main Sanitary Stack'. Our force ensures these intersections are master-aligned to prevent cross-node contamination and flow backup."
    },
    {
      q: "What are four signs that your sewer line is broken?",
      a: "The four 'Critical Indicators' are: 1. Persistent 'Sanitary Odor Nodes' around your West Bloomfield property. 2. Multiple slow-flow fixture nodes. 3. Excessively lush vegetation above a hidden pipe node. 4. Depressions or 'Sinkhole Nodes' in your landscaping. If you observe these markers, dial (877) 792-1410 immediately for a structural audit."
    },
    {
      q: "What do plumbers use instead of copper?",
      a: "Modern West Bloomfield technical deployments typically utilize 'PEX' for internal supply nodes and 'PVC' or 'ABS' for sanitary discharge. These materials offer superior 'Material Resistance' to the mineral biology found in Michigan water and are less prone to the 'Oxidation Fatigue' seen in antiquated copper systems."
    },
    {
      q: "How much does it cost to replumb a 2000 sq ft house?",
      a: "A total 'Hydraulic Infrastructure Reset' for a 2000 sq ft West Bloomfield home typically indices between $8,000 and $16,000. This involves a complete replacement of antiquated supply and discharge nodes with modern architectural-grade materials. This is a high-value 'Equity Protection Strategy' for any West Bloomfield residence."
    },
    {
      q: "Why pour salt down the drain every night?",
      a: "Some DIY protocols suggest salt to kill root nodes, but this is a 'Biological Suppression' tactic and not a mechanical fix. Salt can also accelerate 'Corrosive Fatigue' on cast-iron lines. Our West Bloomfield force provides 'Surgical Root Clearing' with industrial-grade mechanical hardware, providing a definitive technical result instead of a temporary chemical band-aid."
    },
    {
      q: "Can a broken sewer line cause a sinkhole?",
      a: "Yes. When a sewer line enters a 'Material Breach State', escaping water erodes the surrounding 'Soil Matrix', creating a hidden 'Subterranean Void'. In West Bloomfield, this can lead to dramatic 'Architectural Sinkholes' that threaten driveway and foundation integrity. Rapid stabilization of any sanitary breach is the only way to prevent structural subsidence."
    },
    {
      q: "Does Dawn really unclog drains?",
      a: "Dish soap is an 'Organic De-greaser' and can assist with minor, oil-based 'Slow-Flow Nodes' in kitchen sinks. However, it lacks the 'Mechanical Force' needed to clear a main sewer line blockage or root intrusion. If your West Bloomfield home has a major 'Sanitary Blockage', you need the 'Surgical Precision' of our master force units."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Droplets className="w-4 h-4 text-blue-500" />
            Reading Sanitary Research
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Sewer Line <span className="text-blue-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-efficiency sewer replacement and property hydraulic security in West Bloomfield, MI.
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
              Suspect a Structural Asset Failure? <br /> Act With Technical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for a sanitary backup or building foundation failure. Our West Bloomfield specialists provide 24/7 emergency sewer reclamation.
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

export default SewerReplacementInfo;
