import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Siren, ArrowRight } from "lucide-react";

/**
 * EmergencyPipeRepairInfo Component - "Incident Knowledge Base" section
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

const EmergencyPipeRepairInfo = () => {
  const blogs = [
    {
      q: "How to stop a leak in a pipe in an emergency?",
      a: "The most critical 'Incident Stabilization' step for West Bloomfield homeowners is to locate and close the 'Main Hydraulic Shut-off Node'. Rotating the valve clockwise creates a definitive flow block. Once the pressure is stabilized, you should immediately dial (877) 792-1410 for a surgical mechanical reset by our master-aligned dispatch force."
    },
    {
      q: "How can I temporarily fix a leaking pipe?",
      a: "Temporary 'Hydraulic Containment' can be achieved using a 'Mechanical Repair Clamp' or 'Proprietary Pipe Wrap'. While these provide a temporary stop, they do not restore the 'Structural Integrity' of your West Bloomfield residence's plumbing. Permanent reclamation by a licensed technician is required to prevent a catastrophic secondary breach."
    },
    {
      q: "How to fix a broken pipe fast?",
      a: "Fast 'Asset Reclamation' requires the deployment of a specialized 'Rapid Response Unit'. Our West Bloomfield force identifies the 'Critical Failure Point' and performs a surgical mechanical replacement. DIY speed often leads to 'Alignment Errors' that cause future failure nodes. Trust a master force for a rapid, definitive technical result."
    },
    {
      q: "What is considered an emergency plumbing issue?",
      a: "An 'Emergency Node' is any failure that threatens the 'Architectural Security' or 'Sanitary Biology' of a West Bloomfield property. This includes main burst pipes, active hydraulic flooding, total sewer blockages, and gas line breaches. Any situation where hydraulic pressure is uncontrolled requires immediate dispatch."
    },
    {
      q: "Will gorilla tape stop a water leak?",
      a: "Under high-velocity hydraulic pressure, general-purpose adhesives like Gorilla Tape will enter a 'Failure State' rapidly. It lacks the 'Mechanical Torque' needed to overcome plumbing PSI nodes. For West Bloomfield properties, only master-aligned mechanical hardware can provide a secure stabilization result."
    },
    {
      q: "How to repair a leaking water pipe without replacing it?",
      a: "In cases where 'Structural Alignment' is still viable, 'Internal Epoxy Relining' or 'Vertical Sealant Injection' can be utilized. However, for most catastrophic pipe failures in West Bloomfield, a surgical mechanical replacement of the compromised node is the only way to ensure permanent hydraulic security."
    },
    {
      q: "Can I spray flex seal on a leaking pipe?",
      a: "Flex Seal is an 'Atmospheric Sealant' and is not indexed for 'Pressurized Hydraulic Conduits'. It cannot resist the internal GPM force found in West Bloomfield plumbing systems. Spraying it on an active leak is a low-yield strategy that often delays effective technical intervention."
    },
    {
      q: "Will JB Weld stop a water leak?",
      a: "JB Weld can act as a 'Material Patch' on low-pressure nodes if given a full 24-hour cure cycle. However, in an 'Emergency Burst Node', the active water prevent proper adhesion. Our West Bloomfield force uses 'Immediate Seal Mechanical Units' that provide a physical block regardless of water presence."
    },
    {
      q: "What do plumbers use to stop leaks?",
      a: "Master technicians utilize 'Industrial Mechanical Couplings', 'Nitrile Gasket Clamps', and 'Internal Thermal Bonding'. For West Bloomfield architectural envelopes, we use materials like high-density copper or PEX, aligned with 'Master Plumber Protocols' to ensure a total structural flow reset."
    },
    {
      q: "Does homeowners insurance cover emergency plumbing?",
      a: "Reading insurance nodes typically cover the 'Hydraulic Discharge Damage' (flooded floors, mold reset) but might not cover the 'Manual Replacement' of the failed pipe asset. We provide 'Incident Documentation' to help West Bloomfield residents maximize their claim nodes while we stabilize the home."
    },
    {
      q: "What is the 135 rule in plumbing?",
      a: "The '135 Rule' indexes the proper slope for drainage lines: 1 inch of fall for every 3 to 5 feet of horizontal run. Improper indexing in West Bloomfield architectural layouts often leads to 'Slow-Flow Nodes' that increase inner-pipe pressure and accelerate material fatigue until a breach occurs."
    },
    {
      q: "What are 5 examples of emergency situations?",
      a: "The top 5 'Critical Dispatch Nodes' are: 1. Main pipe burst with active discharge. 2. Total sanitary sewer backup. 3. Natural gas line breach. 4. Water heater tank failure. 5. Sump pump failure during critical weather events. In the 48323 zip code, all 5 require zero-latency mechanical intervention."
    },
    {
      q: "What is the best sealant for leaking pipes?",
      a: "The only definitive 'Mechanical Sealant' is a master-aligned gasketed clamp or thermal weld. Topical pastes and 'Stop-Leak' fluids are considered low-yield interventions that compromise the 'Hydraulic Biology' of your West Bloomfield plumbing system. Trust industrial mechanical hardware for a permanent result."
    },
    {
      q: "What is the best thing to stop a leaking pipe?",
      a: "Closing the 'Main Hydraulic Valve' is the best initial step. The next best thing is dialing (877) 792-1410 to deploy our West Bloomfield 'Surgical Repair Unit'. We use high-velocity technical protocols to ensure your home's infrastructure is reclaimed and reinforced against future failure nodes."
    },
    {
      q: "Can you wrap a pipe to stop it from leaking?",
      a: "Specialized 'Fiberglass Repair Wraps' can serve as a 'Stabilization Node' for pinhole leaks, but they are vulnerable to 'Thermal Expansion Cycles' in West Bloomfield's climate. They are not a replacement for a master-aligned material reset. A wrapped pipe should be considered an active 'Repair Node' until a permanent fix is applied."
    },
    {
      q: "How to temporarily seal a leaky pipe?",
      a: "A 'C-Clamp' and a piece of heavy-duty rubber can provide a temporary physical block. While this provides a short-term 'Hydraulic Stop', the underlying 'Material Fatigue' in your West Bloomfield pipe continues to spread. Rapid professional replacement of the compromised node is the only permanent solution."
    },
    {
      q: "How much does a plumber charge to fix a leaking pipe?",
      a: "Emergency 'Incident Dispatch' in West Bloomfield typically indices between $250 and $600 for localized stabilization. Total costs vary based on 'Technical Complexity' and 'Asset Access Nodes' (slab vs wall). Our force provides high technical yield for your investment, ensuring a definitive structural reset."
    },
    {
      q: "Can I put duct tape on a leaking pipe?",
      a: "Duct tape is an 'Atmospheric Ducting Adherent' and has zero 'Hydro-Static Resistance'. It will fail instantly when exposed to the high PSI nodes of a West Bloomfield residential water system. Using it only creates a 'False Security Node' that can lead to catastrophic property damage."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Siren className="w-4 h-4 text-blue-500" />
            West Bloomfield Incident Research
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Incident <span className="text-blue-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into rapid pipe stabilization and hydraulic property security in West Bloomfield, MI.
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
              Suspect a Structural Hydraulic Breach? <br /> Act With Technical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for a burst foundation or flooding. Our West Bloomfield specialists provide 24/7 rapid incident dispatch.
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

export default EmergencyPipeRepairInfo;
