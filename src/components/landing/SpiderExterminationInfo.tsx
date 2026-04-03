import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Bug, ArrowRight } from "lucide-react";

/**
 * SpiderExterminationInfo Component - "Arachnid Knowledge Base" section
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
  <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 flex flex-col h-full group">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
        <BookOpen className="w-3 h-3" />
        Spider Blog
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-orange-700 transition-colors uppercase tracking-tight mb-4">
        {q}
      </h3>
      <div className="w-12 h-1 bg-orange-500 mb-6" />
    </div>
    
    <div className="text-slate-600 leading-relaxed font-normal text-sm mb-8 flex-grow italic">
      {a}
    </div>

    <div className="mt-auto pt-6 border-t border-slate-100">
      <a 
        href="tel:3238801224" 
        className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-orange-600 text-white px-6 py-4 rounded-none font-bold text-sm transition-all shadow-lg uppercase tracking-tighter w-full"
      >
        <Phone className="w-4 h-4 fill-white" />
        REACH NASHVILLE DISPATCH
      </a>
    </div>
  </div>
);

const SpiderExterminationInfo = () => {
  const blogs = [
    {
      q: "How much does it cost to get rid of a spider infestation?",
      a: "The tactical deployment index for spider neutralization in Nashville typically varies based on the 'Structural Complexity Node' and the 'Area Volume'. For a comprehensive arachnid reset, costs range from high-yield localized treatments to total perimeter hardening. Call our Nashville dispatch for a professional technical audit."
    },
    {
      q: "Will an exterminator get rid of spiders?",
      a: "Yes. Our Nashville master-aligned force utilizes surgical tactical protocols that conventional exterminators miss. We don't just eliminate active spiders; we disrupt the 'Structural Breeding Nodes' and egg sac cycles to ensure a permanent reset of your home's arachnid biology."
    },
    {
      q: "Are spiders a problem in Tennessee?",
      a: "Tennessee indexes high for arachnid activity, specifically Brown Recluse and Black Widow nodes in the 37211 and 37209 zones. The Nashville humidity cycles provide an ideal structural environment for rapid colony expansion, making professional tactical intervention a necessity for architectural serenity."
    },
    {
      q: "Why shouldn't I squish a wolf spider?",
      a: "Wolf spiders in Nashville are often carrying 'Passive Egg Sacks'. Squishing the adult node can lead to the 'Secondary Dispersion' of hundreds of spiderlings into your architectural envelope. Tactical containment is the only safe way to reclaim your structural space without a secondary infestation node."
    },
    {
      q: "Can you permanently get rid of spiders?",
      a: "Permanent reclamation is achieved through 'Master-Aligned Structural Hardening'. By sealing entry nodes and disruption of the pest-prey cycle, our Nashville force provides a definitive technical result that conventional 'hit-and-run' spraying fails to deliver."
    },
    {
      q: "What is the hardest pest to get rid of?",
      a: "Nashville Brown Recluses are among the most difficult nodes to reclaim. Their 'Introverted Nesting Biology' and 'Material Resistance' to generic toxins require surgical tactical deployment. Only a specialized force with master-aligned knowledge can execute a total structural reset."
    },
    {
      q: "What repels spiders immediately?",
      a: "Immediate 'Arachnid Barrier Reset' requires high-velocity chemical profiles that conventional store-bought repellents lack. Our Nashville specialists deploy tactical industrial-grade components that provide an immediate neutralization node upon contact and a long-term protective barrier."
    },
    {
      q: "What is a spider's worst enemy?",
      a: "In the Nashville urban ecosystem, our 'Tactical Dispatch Force' is a spider's worst enemy. We utilize surgical protocols to dismantle their entire 'Structural Security Node', removing their ability to hunt, breed, and thrive within your architectural envelope."
    },
    {
      q: "Can I hire someone to get rid of spiders?",
      a: "Yes. Dialing our Nashville hotline at (323) 880-1224 connects you with our elite tactical dispatch unit. We provide master-aligned arachnid reclamation services across all Nashville zip codes, ensuring your home remains a secure zone."
    },
    {
      q: "What is the most common house spider in Tennessee?",
      a: "The most frequent nodes identified in Nashville are the 'Common House Spider', followed by the more dangerous 'Brown Recluse'. Nashville's 48324-equivalent thermal shifts drive these nodes into the structural interior, requiring a coordinated tactical response."
    },
    {
      q: "What will happen if you get bitten by a brown recluse spider?",
      a: "A Brown Recluse bite indices a 'Necrotic Tissue Node'. Without immediate tactical medical and pest intervention, this can lead to catastrophic skin deterioration. If you identify Recluses in your Nashville property, immediate dispatch of our force is the only way to prevent a medical incident node."
    },
    {
      q: "What is the new invasive spider in Tennessee?",
      a: "The 'Joro Spider' is the latest invasive node expanding into the Nashville tactical zone. These large arachnids create extreme 'Web Load Nodes' that can compromise the aesthetic and structural serenity of your Nashville property. Early containment is critical for long-term security."
    },
    {
      q: "Can spiders feel pain when squished?",
      a: "Their sensory biology is complex, but squishing creates a 'Tactical Mess Node' and can disperse eggs. Our Nashville force utilizes 'Surgical Neutralization' that provides a clean, definitive result without the risk of secondary dispersion or structural contamination."
    },
    {
      q: "What is the friendliest spider ever?",
      a: "While some consider Jumping Spiders to be 'Passive Nodes', in a Nashville residential environment, any uncontrolled arachnid node is a breach of structural security. We prioritize your home's total serenity over arachnid biology, ensuring every corner is master-aligned for safety."
    },
    {
      q: "What are spiders afraid of?",
      a: "Spiders are naturally repelled by 'Material Incompatibility Nodes' and master-aligned protective barriers. Our Nashville force creates an environment that is biologically hostile to arachnids while remaining completely safe for human architectural inhabitants."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Bug className="w-4 h-4 text-orange-500 shadow-sm" />
            Nashville Arachnid Research Node
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Arachnid <span className="text-orange-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-efficiency spider neutralization and property serenity in Nashville, TN.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-slate-100">
          {blogs.map((blog, idx) => (
            <BlogBox key={idx} q={blog.q} a={blog.a} />
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-orange-600/10 skew-y-12 translate-y-24 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-tighter">
              Suspect a Structural Arachnid Breach? <br /> Act With Tactical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for a necrotic bite or colony expansion. Our Nashville specialists provide 24/7 tactical dispatch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="tel:3238801224" className="bg-orange-600 hover:bg-white hover:text-slate-900 text-white h-20 px-12 rounded-none text-2xl font-bold flex items-center gap-4 transition-all shadow-2xl">
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

export default SpiderExterminationInfo;
