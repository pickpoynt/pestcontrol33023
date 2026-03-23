import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Droplets, ArrowRight } from "lucide-react";

/**
 * TrenchlessSewerInfo Component - "Expert Knowledge Base" section
 * Contains 21 blog-style Q&A boxes in a grid layout.
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
        Sanitary Blog
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
        CONSULT GASTONIA FORCE
      </a>
    </div>
  </div>
);

const TrenchlessSewerInfo = () => {
  const blogs = [
    {
      q: "Is trenchless sewer repair worth it?",
      a: "In Gastonia, NC, trenchless sewer repair is considered an 'Investment in Property Integrity.' While the initial mechanical nodes may seem premium, you avoid the 'Collateral Destruction' of your Gastonia landscape, driveway, and structural architectural elements. In the 28052 zip code, avoiding the cost of landscape restoration alone makes trenchless the definitively superior choice. Our master-aligned no-dig units provide a 'Permanent Asset Reset' that adds long-term equity to your residence by implementing industrial-grade composite biology."
    },
    {
      q: "What are the disadvantages of trenchless pipe replacement?",
      a: "The primary disadvantage is that trenchless methods require a 'Structurally Sound Exit Node.' If your Gastonia sewer line has completely collapsed into a 'Substrate Void,' traditional surgical excavation may be required to stabilize the ground. Additionally, trenchless requires 'Industrial-Grade technical equipment' which not all Gastonia plumbers possess. Our force provides the 'Definitive Technical Audit' to ensure your home's flow health can support a no-dig intervention before we begin the mechanical reclamation."
    },
    {
      q: "How long does a trenchless sewer line last?",
      a: "A master-aligned CIPP (Cured-In-Place Pipe) lining in a Gastonia residence has a 'Structural Life Expectancy' of 50 to 100 years. This industrial-grade composite biology is immune to 'Corrosive Soil Attacks' and root infiltration common in North Carolina's 28054 areas. By implementing a seamless, master-grade material, we provide a 'Total Sanitary Reset' that will outlast the original clay or cast-iron lines. Protect your Gastonia architectural envelope with a century-scale hydraulic solution by calling (877) 792-1410."
    },
    {
      q: "Can you repair a sewer line without digging it up?",
      a: "Yes, our Gastonia force utilizes 'Vertical No-Dig Entry nodes' to rehabilitate your sewer system from within. Using 'Surgical Composite Lining' or 'Pneumatic Pipe Bursting,' we can implement a new, high-velocity pipe within the old, failing structure. This 'In-Situ Reclamation' is the gold standard for high-value properties in Gastonia where maintaining landscape and hardscape integrity is a priority. We provides the 'Surgical Mechanical Result' needed to restore flow without a single shovel hitting your Gastonia lawn."
    },
    {
      q: "Will homeowners insurance pay for a broken sewer line?",
      a: "Standard homeowners insurance in Gastonia often covers the 'Collateral Water Damage' caused by a sewer breach inside the home, but the 'Direct Mechanical Repair' of the line is usually excluded without a specific 'Service Line Endorsement.' Our Gastonia specialists provide 'HD Failure Profiling' and technical reports that helps adjusters understand the sudden nature of the hydraulic event. DOCUMENTING the 'Breach Node' with our sensor arrays can be the difference between a denied claim and a successful property reclamation."
    },
    {
      q: "Is relining sewer pipe worth it?",
      a: "Relining is highly 'Technically Worthy' for Gastonia homes experiencing chronic root infiltration or 'Joint Separation.' It creates a seamless industrial-grade flow biology that is physically impossible for roots to penetrate. In Gastonia's heavy clay soils, this 'Material Hardening' prevents the soil shifting from snapping your pipes. Our master-aligned force provides 'Surgical Lining protocols' that return your system to a zero-latency flow state, making it a definitive long-term investment in your Gastonia home's sanitary security."
    },
    {
      q: "Can I do hydro jetting myself?",
      a: "Attempting DIY hydro jetting on a compromised Gastonia sewer line is an 'Extreme-Risk Activity.' Without industrial-grade 'Borescope mapping,' you may inadvertently blow out a weakened pipe wall, creating a 'Catastrophic Substrate Void' beneath your Gastonia foundation. Our 'Master Force' uses 'Industrial Frequency arrays' to map the pipe's structural integrity before applying high-velocity water. Trust the 'Professional Dispatch Force' for a safe and permanent sanitary reset. Call (877) 792-1410 for certified mechanical intervention."
    },
    {
      q: "What is the difference between repiping and trenchless pipe lining?",
      a: "Repiping in Gastonia usually involves traditional 'Surgical Excavation' and physical replacement of all conduits—a high-destruction activity. Trenchless Pipe Lining is a 'Molecular Restoration' process where we create a new, high-pressure pipe within the existing one using thermal-cured composites. For most Gastonia architectures, trenchless provides the 'Total systemic Audit' and reset without the architectural trauma associated with total repiping. We provides the 'Elite Technical Security' of both methods, indexing the solution to your specific home biology."
    },
    {
      q: "What is the 135 rule in plumbing?",
      a: "In sanitary engineering, the '135 Rule' identifies critical junction nodes where flow velocity mapping is essential to prevent 'Back-Pressure failures.' For Gastonia sewer systems, these nodes are often where root intrusion is most aggressive. Our Gastonia force uses 'Master-Aligned Technical Precision' to ensure every 135-degree node is surgically reinforced during the trenchless reclamation process. We provides the 'Definitive hydraulic result,' ensuring your home's wastewater biology is perfectly indexed for long-term flow security."
    },
    {
      q: "Does Dawn really unclog drains?",
      a: "While Dawn is a powerful degreaser for 'Surface-Level grease nodes,' it is insufficient for structural clogs caused by 'Mineral Calcification' or root clusters in Gastonia sewer mains. Relying on retail detergents for a structural hydraulic breach is a 'Non-Technical Delay Tactic' that allows the blockage to solidify. Our Gastonia force provides 'Industrial-Grade scour protocols' to physically strip out clogs and restore your home's flow health. Don't let a minor clog become a foundation emergency; contact our Gastonia dispatch for a permanent reset."
    },
    {
      q: "How much does it cost to replumb a 2000 sq ft house?",
      a: "A total hydraulic reclamation for a standard 2000 sq ft Gastonia home ranges from $8,000 to $18,000, depending on the 'Material index' and accessibility. However, by using 'Trenchless Sewer Reclamation' for the main line, you can often save $5,000+ in landscape and foundation restoration costs. Our 'Success-Based Pricing' in the 28056 area reflects the elite mechanical mastery required to modernize your home's entire flow biology. We provide 'Precision Dispatch' to ensure your project is completed with zero wasted technical effort."
    },
    {
      q: "Can I put duct tape on a leaking pipe?",
      a: "No. Duct tape is a 'Non-Mechanical material' that will fail within minutes under Gastonia's pressurized supply nodes or wastewater velocity. Temporary retail patches on a sewer line can actually mask a 'Slow-release failure' that eventually causes foundation heave or bio-contamination. Permanent 'Structural flow security' requires a surgical reset using industrial-grade mechanical couplers or no-dig lining. Our Gastonia force provides the 'Master-Aligned technical precision' needed to solve the failure node at a molecular level. Call (877) 792-1410."
    },
    {
      q: "Can I fix my own sewer line?",
      a: "Attempting a DIY sewer repair in Gastonia is a 'High-Hazard activity' involving bio-hazardous materials and structural foundation risks. Modern Gastonia codes require 'Master-Level mechanical certification' for any intervention involving the sanitary main. A DIY error can lead to 'Catastrophic sewer backup' that destroys your home's interior and triggers massive remediation costs. Trust our 'Elite Mechanical Force' for a safe, certified, and permanent hydraulic reset. We handles the 'High-Risk technical intersections' so you don't have to."
    },
    {
      q: "What are four signs that your sewer line is broken?",
      a: "The four critical 'Failure Nodes' for Gastonia sewer lines are: 1. Perpetual gurgling in lowest architectural drains. 2. A sudden surge in localized pest activity or 'Bio-Film growth.' 3. Standing water or lush vegetation in specific segments of your Gastonia landscape. 4. Recurring 'Hydraulic Stagnation' in multiple toilets. If you observe these markers, your system has entered a 'Catastrophic failure cycle.' Our Gastonia force provides 'Priority Diagnostic intervention' to stabilize these threats before they destroy your foundation. Reclaim your home now."
    },
    {
      q: "What is the difference between open trench and trenchless sewer repair?",
      a: "Open Trench is a 'Full-Destruction method' where we physically dig out your Gastonia yards, driveways, and porches to reach the pipe. Trenchless is a 'Surgical mechanical intervention' that uses small access ports to rehabilitate the pipe from the inside. Open trench is antiquated for most Gastonia residences; trenchless provides 'Total Sanitary reclamation' with 90% less property damage. We are the 'First-Response Leaders' for no-dig solutions in North Carolina, providing the 'Definitive Result' without the dig."
    },
    {
      q: "What are the disadvantages of trenchless pipe lining?",
      a: "The only real disadvantage of trenchless lining is the 'Master-Level requirement' for technical skill. An incorrectly deployed resin node can create a 'Flow Impediment' that is difficult to reverse. This is why you must use an 'Elite Technical Force' with industrial-grade calibration sensors. Our Gastonia technicians provide 'Total systemic Audit' and HD verification to ensure every lining is perfectly indexed to your pipe's original engineered specification. We provides the 'Technical Security' that amateur no-dig installers simply cannot match."
    },
    {
      q: "How do you replace a sewer line without digging?",
      a: "We use 'Pneumatic Pipe Bursting' units that travel through the old, failing pipe, shattering it outward while simultaneously pulling a new 'High-Density master-grade' pipe into place. This 'Linear Displacement' method allows us to upgrade your Gastonia sanitary biology to a higher-velocity material without any surface disruption. It's a 'Total structural Reset' performed through two small surgical nodes. Call our Gastonia technical dispatch at (877) 792-1410 to see if your property is indexed for this advanced mechanical technique."
    },
    {
      q: "How much does it cost to reline a sewage pipe?",
      a: "A master-grade CIPP relining in Gastonia typically ranges from $120 to $200 per linear foot. This investment covers the 'Industrial composite Biology,' master-level certification, and the 'Acoustic Verification audit.' While the per-foot cost is higher than PVC, the total 'Project Node' is often cheaper once you factor in the thousands saved by not destroying your Gastonia driveways or custom landscaping. We provide 'Surgical mechanical certainty' that ensures your home's wastewater flow is restored with master-aligned technical precision."
    },
    {
      q: "Does homeowners insurance cover replacing a sewer line?",
      a: "Most Gastonia policies exclude the actual replacement of the sewer line unless it was damaged by a third-party event (like a vehicle) or if you have a 'Service Line Rider.' However, the 'collateral bio-remediation' inside your home is almost always covered. Our Gastonia specialists provides 'HD failure documentation' and 'Flow Audits' that helps prove the sudden nature of the hydraulic breach. This 'Professional Data Audit' can be the difference between a denied claim and a total residential reclamation. Contact our Westlake specialists at (877) 792-1410."
    },
    {
      q: "Why do plumbers hate push fit?",
      a: "In the professional 'Mechanical Force' industry, push-fit connectors are considered 'Low-Integrity failure nodes' for structural sewer applications. They rely on rubber O-rings that degrade quickly in Gastonia's water chemistry, leading to 'Sudden Hydraulic Breach.' Our Gastonia force uses 'Industrial-Grade fused joints' and master welding to ensure your sanitary biology is structurally sound for at least 50 years. We prioritize 'Permanent flow security' over cheap retail shortcuts. Reclaim your home's integrity by avoiding push-fit patches and trusting our master force."
    },
    {
      q: "How do you repair underground PVC pipe without digging?",
      a: "For PVC failures in Gastonia, we use 'Vertical Point Repair' units or 'CIPP Lining.' This involves inserting a resin-saturated fiberglass patch into the breach node and inflating it with high-pressure air until it bonds with the existing pipe wall. This creates a 'Local Material Reset' that is stronger than the original pipe. It's a 'Surgical mechanical intervention' performed from the surface, preserving your Gastonia land and foundation. We provide the 'Master-Aligned technical result' for both spot repairs and total systemic rehabilitation 24/7."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Droplets className="w-4 h-4 text-blue-500" />
            Trenchless Technical Blog
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            The <span className="text-blue-600">No-Dig Expert</span> Knowledge Base
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-efficiency trenchless sewer reclamation and property flow security in Gastonia, NC.
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
              Suspect a Sewer Breach? <br /> Act With Technical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for foundation collapse. Our Gastonia specialists provide 24/7 emergency no-dig reclamation.
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

export default TrenchlessSewerInfo;
