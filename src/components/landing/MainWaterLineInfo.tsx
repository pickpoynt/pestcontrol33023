import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Droplets, ArrowRight } from "lucide-react";

/**
 * MainWaterLineInfo Component - "Expert Knowledge Base" section
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
  <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full group">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
        <BookOpen className="w-3 h-3" />
        Hydraulic Blog
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
        REACH GASTONIA DISPATCH
      </a>
    </div>
  </div>
);

const MainWaterLineInfo = () => {
  const blogs = [
    {
      q: "What do you do if your main water line is leaking?",
      a: "If you observe standing water in your Gastonia landscape or a sudden drop in architectural pressure, the first step is 'Immediate Valve Isolation.' Locate your home's main shut-off valve—usually found near the point where the supply line enters the foundation—and rotate it clockwise to terminate the flow. This prevents further saturation of your Gastonia property's substrate. Once the system is stabilized, contact our emergency dispatch force at (877) 792-1410. We deploy industrial-grade acoustic sensors to map the breach node without unnecessary excavation."
    },
    {
      q: "Is a water main leak an emergency?",
      a: "Yes, a compromised main water line in Gastonia is a 'Critical Hydraulic Emergency.' Unlike small interior leaks, a main line breach releases high-volume, pressurized water directly into your home's foundation or the surrounding Gastonia soil. This can lead to rapid soil erosion, sinkholes, and catastrophic foundation heave. In the 28052 and 28054 zip codes, the unique clay content of the soil makes these leaks particularly dangerous for structural integrity. Our Gastonia force provides master-aligned technical response 24/7 to neutralize these threats before they escalate into total property failure."
    },
    {
      q: "What is the 135 rule in plumbing?",
      a: "In the context of main line hydraulic engineering, the '135 Rule' often refers to the critical pressure nodes where safety valves or regulators must be meticulously indexed. For Gastonia residential supply architectures, maintaining a balanced PSI is vital to prevent 'Water Hammer' or 'Joining Failure.' When we perform a 'Vertical System Reset,' we ensure that your main water line is calibrated to these industrial standards, protecting your entire home's flow biology from premature material fatigue. Trust our master-aligned force for precision calibration and long-term asset hardening."
    },
    {
      q: "Who do you call if the main water valve is leaking?",
      a: "A leaking main valve requires a 'Surgical Mechanical Force' that specializes in high-pressure hydraulic components. This is not a task for general maintenance workers. A failed main valve represents a total loss of flow control for your Gastonia residence. Our dispatch units arrive equipped with master-grade technical couplers and industrial-strength valve assemblies designed for Gastonia's specific water chemistry and pressure demands. We provides the 'Definitive Technical Result' that ensures your home's primary shut-off is robust and reliable. Dial (877) 792-1410 for immediate mechanical intervention."
    },
    {
      q: "How much does it cost to repair a main water line leak?",
      a: "The cost of a main water line reclamation in Gastonia typically ranges from $600 to $2,500, depending on the 'Breach Depth' and 'Substrate Density.' If the leak is located beneath a paved driveway or structural architectural element, costs may increase due to the requirement for 'Trenchless Technology' or surgical demolition. In Gastonia, our 'Success-Based Pricing' reflects the elite technical mastery and industrial-grade tooling used to provide a permanent structural reset. We provide a comprehensive 'Flow Audit' to determine the exact technical path required for your property's specific hydraulic biology."
    },
    {
      q: "Who is responsible for mains water leaks?",
      a: "Generally, in Gastonia, the municipal utility is responsible for the main line up to the meter or the curb stop. Any breach occurring from the meter to your home's interior manifold is the 'Private Hydraulic Responsibility' of the homeowner. This includes the entire service line traversing your Gastonia landscape. Our Gastonia force provides the 'Professional Documentation' needed to prove exactly where the failure node is located, ensuring that liability is correctly assigned. We handle the private-side reclamation with master-aligned technical precision to protect your home's equity and structural health."
    },
    {
      q: "Does homeowners insurance cover main water line leak?",
      a: "Standard homeowners insurance in Gastonia often covers the 'Collateral Damage' caused by a sudden water main breach—such as basement flooding or foundation restoration—but may exclude the 'Direct Mechanical Repair' of the pipe itself unless you have a 'Service Line Endorsement.' Our Gastonia specialists provide 'HD Failure Profiling' and technical reports that help you navigate the claim process with 'Elite Technical Clarity.' We document the sudden nature of the hydraulic breach to help ensure your North Carolina property is correctly restored under your policy terms."
    },
    {
      q: "How much does a plumber charge to fix a leaking pipe?",
      a: "While a general plumber may charge by the hour, an emergency 'Mechanical Reclamation Force' like ours in Gastonia provides 'Project-Based technical Certainty.' Fixing a main line leak is more complex than a standard faucet repair; it involves 'Surgical Excavation,' high-pressure material welding, and total system stabilization. In the Gastonia 28056 area, we provide transparent, value-aligned pricing that covers the master-level certification and industrial-grade diagnostic equipment required for a permanent fix. Reclaim your home's safety by calling our technical dispatchers at (877) 792-1410."
    },
    {
      q: "What is considered an emergency plumbing issue?",
      a: "An emergency is any failure that threatens the 'Structural or Bio-Safety' of your Gastonia residence. This includes main water line breaches, catastrophic sewage backups, and total loss of culinary water supply. In Gastonia, NC, any leak that releases more than a 'Seepage volume' of water per hour is a priority event. Our force is specially trained in 'Rapid Asset Stabilization,' deploying at a moment's notice to neutralize hydraulic threats that could lead to foundation failure or massive mold contamination. We are the 'First-Response Leaders' for Gastonia plumbing security."
    },
    {
      q: "What dries up water quickly?",
      a: "Post-reclamation, drying out a Gastonia home requires 'Industrial-Strength Air Movement' and high-capacity dehumidification. Water that has saturated Gastonia's architectural finishes can quickly lead to bio-film growth and structural rot. We provide the 'Total Property Reclamation' coordinates needed to clear moisture from deep within your walls and foundation. While we specialize in the 'Mechanical hydraulic reset,' we ensure that your property is left in a state ready for professional restoration. Don't let moisture linger; contact our Gastonia dispatch for a complete flow neutralization."
    },
    {
      q: "Can I put duct tape on a leaking pipe?",
      a: "Absolutely not. Duct tape is a 'Non-Technical Material' that cannot withstand the high-velocity hydraulic pressure found in Gastonia's main water lines. Using such materials on a pressurized breach provides a 'False sense of Security' while the water continued to erode your Gastonia foundation from within. Permanent 'Structural flow security' requires a surgical pipe wall reset using industrial-grade mechanical joints or master-level welding. Our Gastonia force uses 'Master-Aligned Technical Precision' to solve the failure node at the molecular level. Call (877) 792-1410 for a permanent exclusion of hydraulic threats."
    },
    {
      q: "Does flex seal really work on water leaks?",
      a: "In the professional mechanical reclamation industry, topical sprays like Flex Seal are considered 'Emergency Delay Tactics'—not permanent structural fixes. For Gastonia pressurized pipes, which operate at significant intervals of PSI, a topical coating cannot withstand the constant 'Hydraulic Stress' and 'Temperature Cycling.' Applying such materials often wastes critical time while the sub-surface saturation level in your Gastonia foundation continues to rise. We recommend immediate 'Professional mechanical intervention' to stabilize your home's hydraulic pressure. Reclaim your Gastonia home's architectural safety by calling our technical dispatchers now."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Droplets className="w-4 h-4 text-blue-500" />
            Gastonia Hydraulic Research
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Main Water Line <span className="text-blue-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-pressure water main reclamation and property hydraulic security in Gastonia, NC.
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
              Suspect a Main Line Breach? <br /> Act With Technical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for foundation failure. Our Gastonia specialists provide 24/7 emergency hydraulic reclamation.
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

export default MainWaterLineInfo;
