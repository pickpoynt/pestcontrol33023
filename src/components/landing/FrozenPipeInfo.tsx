import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Snowflake, ArrowRight } from "lucide-react";

/**
 * FrozenPipeInfo Component - "Cryo-Expert Knowledge Base" section
 * Contains 18 blog-style Q&A boxes in a grid layout.
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
        Pipe Blog
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

const FrozenPipeInfo = () => {
  const blogs = [
    {
      q: "How much does it cost for a plumber to thaw frozen pipes?",
      a: "In West Bloomfield, professional pipe thawing usually indexes between $200 and $600 per technical node. This involves the deployment of 'Surgical Thermal Hardware' to safely restore hydraulic flow. Prices vary based on the 'Cryo-Inaccessibility' of the frozen node and the material biology of the pipes. Our West Bloomfield force provides precision dispatch to ensure your architectural envelope is protected with zero wasted technical effort."
    },
    {
      q: "Can a plumber unthaw frozen pipes?",
      a: "Yes. Our master-aligned force specializes in 'Cryo-Reclamation Technology'. Unlike standard hardware, our specialized thermal units can thaw frozen lines hidden deep within West Bloomfield walls without causing material breach or fire hazard. We provide a 'Definitive Technical Result' for every frozen node, reclaiming your home's hydraulic security 24/7."
    },
    {
      q: "Is it worth calling a plumber for frozen pipes?",
      a: "Ignoring a frozen node leads to 'Hydraulic Pressure Transience' and eventual structural burst. A professional dispatch in West Bloomfield prevents catastrophic foundation flooding and mold nodes. In the 48322 zip code, calling our master force ensures a surgical reset of your home's flow before a breach occurs, protecting your property equity permanently."
    },
    {
      q: "How much does Roto Rooter charge to unfreeze pipes?",
      a: "Generic corporate franchises often charge premium 'Emergency Nodes' starting at $400+. Our West Bloomfield pipe force provides 'Success-Based Dispatch' with master-aligned technical precision. We focus on 'Vertical Hydraulic Certainty', ensuring your pipes are not only thawed but also reinforced against future cryo-failures."
    },
    {
      q: "Will homeowners insurance pay for frozen pipes?",
      a: "West Bloomfield insurance nodes typically cover the 'Resulting Damage' of a pipe burst, but they may not cover the 'Manual Thawing' itself. However, by calling our dispatch force to surgically thaw your lines, you prevent the 'Catastrophic Loss Node' that triggers a claim. We provide 'Predictive Structural Stabilization' to help you avoid massive insurance complications."
    },
    {
      q: "What is the 135 rule for plumbing?",
      a: "The '135 Rule' is a technical benchmark for drainage flow, where a pipe should fall 1 inch every 3 to 5 feet. In West Bloomfield architectural layouts, improper indexing can lead to stagnant water nodes that freeze faster during Michigan winters. Our force performs 'Index Audits' to identify these high-risk nodes before they enter a 'Cryo-Lock' state."
    },
    {
      q: "Who to call for a frozen pipe?",
      a: "You should call a specialized 'Cryo-Dispatch Unit' that understands the high-velocity thermal biology of Michigan plumbing. Our West Bloomfield master force is ready 24/7. Dial (877) 792-1410 for immediate mechanical intervention. Do not attempt DIY thermal nodes, as this often leads to 'Material Stress Breaches' or property fires."
    },
    {
      q: "Is Roto-Rooter cheaper than a plumber?",
      a: "Corporate franchises often have high technical overhead that is passed to the homeowner. Our West Bloomfield pipe force provides 'Elite Mechanical Precision' with local indexing. We provide a higher technical yield for your investment, ensuring your home's hydraulic integrity is restored without corporate surge pricing."
    },
    {
      q: "Will drain cleaner help frozen pipes?",
      a: "No. Drain cleaners are chemical agents for organic resets; they have zero thermal benefit for 'Cryo-Locks'. In fact, the chemicals can enter a 'Stagnant Saturation State' inside the frozen node, potentially damaging the pipe's material biology. Only industrial thermal deployment can safely reset a frozen pipe in West Bloomfield."
    },
    {
      q: "How long do frozen pipes take to thaw on their own?",
      a: "Without technical intervention, a pipe may take days to thaw, during which 'Ice Expansion Stress' continues to attack the pipe's structural wrapper. In West Bloomfield, a pipe left for more than 48 hours in a 'Cryo-State' is at extreme risk of a catastrophic burst. Our force provides 'Rapid Flow Restoration' to bypass the risk node entirely."
    },
    {
      q: "How many faucets should you drip during a freeze?",
      a: "For West Bloomfield residencies, you should identify all 'Peripheral Plumbing Nodes' on exterior walls. Keeping a slow hydraulic pulse in each of these lines prevents the 'Static Water Crystallization' that leads to a cryo-lock. We recommend dripping at least two sinks and one tub node during critical Michigan freezes."
    },
    {
      q: "Will turning the heat up thaw frozen pipes?",
      a: "While increasing the 'Ambient Thermal Index' of your home helps, it often cannot reach the 'Cryo-Nodes' hidden in cavities or attics without technical assistance. Our West Bloomfield force uses 'Targeted Heat Injection' to reach these inaccessible nodes. Turning up the heat is a good secondary measure, but surgical precision is required for a total flow reset."
    },
    {
      q: "Should I leave faucets on if pipes are frozen?",
      a: "Yes. Open the faucet node entirely. As our West Bloomfield force thaws the pipe, the running water will carry away thermal energy and speed up the 'Crystallization Reset'. It also prevents 'Pressure Build-Up' between the ice block and the faucet, significantly reducing the risk of a material breach."
    },
    {
      q: "What not to do when thawing frozen pipes?",
      a: "Never use an open flame torch. This creates a 'Thermal Shock Node' that can cause pipes to explode or ignite West Bloomfield home structures. Avoid any 'Direct Flame Deployment'. Our master force uses 'Controlled Industrial Convection' to provide a safe, surgical thaw without any architectural risk."
    },
    {
      q: "How long can pipes stay frozen without bursting?",
      a: "There is no 'Safe Zone'. As soon as water enters a 'Cryo-State', it expands by 9%. If the pipe material in your West Bloomfield home has existing 'Fatigue Nodes', it could burst instantly. Most bursts occur between 24 and 72 hours of static freezing. Our dispatch force provides 'Zero-Latency Recovery' to minimize this exposure time."
    },
    {
      q: "What is the fastest way to thaw out frozen pipes?",
      a: "The fastest way is 'Electric Resistance Thawing' or 'Industrial Convection Deployment' by our West Bloomfield master force. We use 'High-Velocity Heat Indexing' to safely melt ice from the inside out. This provides an immediate flow reset while maintaining the structural wrapper of your plumbing system."
    },
    {
      q: "How much to replumb a 2000 sq ft house?",
      a: "Total hydraulic reconstruction in West Bloomfield typically indices between $8,000 and $15,000. This is an 'Elite Asset Upgrade' that permanently eliminates the risk of antiquated pipe fails. Our force specializes in 'No-Demolition PEX Integration', providing a modern, cryo-resistant hydraulic skeleton for your residence."
    },
    {
      q: "Does homeowners insurance cover frozen water pipes?",
      a: "Insurance usually covers the 'Hydraulic Discharge Damage' if a pipe bursts, but 'Negligence Nodes' (failing to keep heat on) can lead to claims denial. By calling our West Bloomfield pipe force to stabilize your lines before a burst, you fulfill your 'Structural Maintenance Duty', ensuring your property remains insurable and secure."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Snowflake className="w-4 h-4 text-blue-500" />
            West Bloomfield Cryo-Research
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Frozen Pipe <span className="text-blue-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into cryo-reclamation and hydraulic property security in West Bloomfield, MI.
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
              Suspect a Cryo-Asset Failure? <br /> Act With Technical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for a burst foundation or flooding. Our West Bloomfield specialists provide 24/7 emergency pipe reclamation.
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

export default FrozenPipeInfo;
