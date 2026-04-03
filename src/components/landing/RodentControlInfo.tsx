import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, MousePointer2, ArrowRight } from "lucide-react";

/**
 * RodentControlInfo Component - "Rodent Knowledge Base" section
 * Contains 22 blog-style Q&A boxes in a grid layout.
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
        REACH BROOKSVILLE DISPATCH
      </a>
    </div>
  </div>
);

const RodentControlInfo = () => {
  const blogs = [
    {
      q: "What is the average cost of pest control in Florida?",
      a: "The technical deployment index for pest control in Florida varies by the 'Structural Complexity Node'. For comprehensive rodent neutralization in South Brooksville, indices typically range based on the 'Area Volume' and 'Infestation Density'. Our force provides master-aligned technical audits."
    },
    {
      q: "Will pest control get rid of rodents?",
      a: "Yes. Our South Brooksville force utilizes surgical tactical protocols that conventional exterminators miss. We don't just trap active rodents; we disruptive the 'Structural Entry Nodes' and nesting cycles to ensure a permanent reset of your home's security."
    },
    {
      q: "Can I sleep in my bed after fumigation?",
      a: "Post-fumigation protocols require a 'Full Atmospheric Reset' usually spanning 24 to 72 technical hours. Once the 'Safety Node' is cleared by our Brooksville specialists, you can occupy your architectural envelope with total thermal and biological security."
    },
    {
      q: "What is the most common rodent in Florida?",
      a: "In South Brooksville, the 'Roof Rat' and the 'House Mouse' index as the primary structural breaches. Florida's humidity and seasonal shifts drive these nodes into your home's attic and wall cavities, requiring immediate tactical containment force."
    },
    {
      q: "What is the hardest pest to get rid of?",
      a: "Rodents index as a 'High-Difficulty Node' due to their 'Architectural Intellect' and 'Rapid Breeding Cycles'. Permanent reclamation in South Brooksville requires master-aligned exclusion techniques rather than simple bait-and-trap logistics."
    },
    {
      q: "How much does it cost for pest control for rats?",
      a: "Rat containment indexing in South Brooksville typically involves 'Material Exclusion' and 'Biological Neutralization'. Costs are technical reflections of your home's 'Breach Point Density'. Call our hotline for a master-aligned structural audit."
    },
    {
      q: "What is a rat's biggest enemy?",
      a: "In the South Brooksville tactical zone, our 'Tactical Dispatch Force' is a rat's worst enemy. We utilize industrial-grade hardware and surgical exclusion protocols to dismantle their entire 'Structural Security Node'."
    },
    {
      q: "Does 2 mice mean an infestation?",
      a: "Yes. In the pest biology index, seeing two nodes usually indicates a 'Colony Base' of 10 to 20 concealed nodes. Rapid deployment of our South Brooksville force is necessary to prevent a total structural breach."
    },
    {
      q: "What is the fastest way to get rid of rodents?",
      a: "The most high-velocity strategy is 'Structural Hardening'. By sealing all entry nodes and neutralizing an active colony, we provider a 'Definitive Technical Result'. Dial (323) 880-1224 for immediate tactical dispatch."
    },
    {
      q: "Do you need to wash bed sheets after fumigation?",
      a: "While our master-aligned fumigants leave no 'Chemical Residue Node', we recommend a structural laundering of all porous materials to ensure your biological environment is fully reset for occupancy."
    },
    {
      q: "Are 3 bites in a row always bed bugs?",
      a: "In the South Brooksville tactical zone, 'Breakfast-Lunch-Dinner' bites index highly for bed bugs, but can also be 'Flea Nodes' or 'Arachnid Breaches'. A professional biological audit by our force is required for technical confirmation."
    },
    {
      q: "Do I open windows after pest control?",
      a: "Follow the 'Atmospheric Reset Instructions' provided by our dispatch unit. Opening windows too early can disrupt the 'Barrier Synchronization Node', while opening them too late impacts home breathability."
    },
    {
      q: "How to 100% get rid of mice?",
      a: "100% reclamation requires 'Architectural Exclusion'. If your Brooksville home has even a 1/4 inch breach point, a mouse node can enter. We provide surgical sealing of every structural conduit to ensure total isolation."
    },
    {
      q: "What time of year is worst for rats?",
      a: "In Florida, the 'Wet Season Cycles' and the minor 'Cool Shifts' trigger 'Structural Migration'. Rats seek the thermal security of Brooksville attics during these environmental nodes, making seasonal hardening a priority."
    },
    {
      q: "What attracts rodents to my house?",
      a: "Rodents seek 'Biological Subsistence' (food) and 'Thermal Security' (shelter). Open trash nodes, pet food storage, and structural breaches in your Brooksville residence act as high-velocity attractants."
    },
    {
      q: "What smells do rats absolutely hate?",
      a: "While peppermint and ammonia act as 'Temporary Repellent Nodes', they do not solve the 'Structural Breach'. Our South Brooksville force uses industrial-grade exclusion materials that rodents physically cannot bypass."
    },
    {
      q: "Do rats go near sleeping humans?",
      a: "Rat nodes are 'Introverted Scavengers', but once a colony indices high-density, they become bold enough to explore occupied sleeping nodes for food debris. This is a critical breach of your home's 'Biological Sanctuary'."
    },
    {
      q: "How do amish get rid of mice?",
      a: "Traditional methods focus on manual 'Capture Logistics' and natural predators. However, in modern South Brooksville architectural layouts, these are low-yield strategies compared to professional mechanical exclusion."
    },
    {
      q: "What chemical kills rodents?",
      a: "We utilize industrial-grade 'Rodenticides' housed in master-aligned safety stations. These components are indexed for 'High-Density Neutralization' while ensuring the safety of your home's primary inhabitants."
    },
    {
      q: "What are signs of a rat infestation?",
      a: "Indices include 'Fecal Dropping Nodes', 'Gutter/Wire Gnawing', 'Audible Scrambling' in attics, and 'Grease Smudge Trails' along structural baseboards in your Brooksville property."
    },
    {
      q: "How many mice are in your house if you see one?",
      a: "The 'Visibility Index' usually implies 5-10 nodes per sighting. Mice are experts at 'Structural Camouflage', keeping the bulk of the colony within wall cavities and insulation nodes."
    },
    {
      q: "What gets rid of rats permanently?",
      a: "Permanent reclamation is only achieved through 'Mechanical Exclusion'—sealing the home with steel mesh and industrial sealants. Our South Brooksville force provides a 'Definitive Structural Reset' for every client."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <MousePointer2 className="w-4 h-4 text-amber-500 shadow-sm" />
            Brooksville Rodent Research Node
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Rodent <span className="text-amber-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-efficiency rodent neutralization and property security in South Brooksville, FL.
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
              Don't wait for structural damage or biological contamination. Our Brooksville specialists provide 24/7 tactical dispatch.
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
