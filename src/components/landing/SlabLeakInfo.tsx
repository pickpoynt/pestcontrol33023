import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone } from "lucide-react";

/**
 * SlabLeakInfo Component - "Expert Knowledge Base" section
 * Contains 10 deep-content Q&As (>150 words each) in a 2-column layout.
 * Questions are formatted as <h3> for SEO.
 * Answer backgrounds are solid white for readability.
 * Includes a nice-looking call button in every FAQ item.
 */

interface FAQItemProps {
  item: { q: string; a: string };
  index: number;
}

const FAQItem = ({ item, index }: FAQItemProps) => (
  <div className="mb-8 p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-amber-500/30 transition-all duration-300">
    <div className="flex items-start gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
        <HelpCircle className="w-5 h-5 text-amber-600" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-amber-700 transition-colors uppercase tracking-tight">
        {item.q}
      </h3>
    </div>
    <div className="pl-14">
      <div className="text-slate-600 leading-relaxed font-normal text-sm whitespace-pre-line p-6 bg-slate-50/50 rounded-2xl italic border-l-4 border-amber-500 mb-6 font-sans">
        {item.a}
      </div>
      <a 
        href="tel:8777921410" 
        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-amber-900/20 uppercase tracking-tighter"
      >
        <Phone className="w-4 h-4" />
        CLICK TO CALL A SLAB LEAK EXPERT NOW
      </a>
    </div>
  </div>
);

const SlabLeakInfo = () => {
  const faqs = [
    {
      q: "How much do slab leaks cost to repair?",
      a: "Repairing a slab leak in San Clemente typically ranges from $2,500 to $6,500 for a standard residential property. However, this is not a fixed node; it depends heavily on the 'Detection Complexity' and the chosen 'Reclamation path.' If we can utilize a 'Horizontal bypass' or trenchless restoration, the investment may be lower than a traditional 'Direct excavation' through your foundation slab. \n\nIn San Clemente specifically, the cost node is often influenced by the sub-surface soil conditions and the accessibility of the failure point. A professional 'Sonic detection Audit' usually costs between $350 and $600 and is the first step in any surgical repair. By accurately pinning the leak, we prevent unnecessary demolition, which can save you thousands in flooring restoration. We provide success-based pricing that reflects the elite technical mastery required to manage San Clemente's unique architectural stresses. Protecting your home's equity means investing in a 'Permanent structural reset' rather than a quick-patch solution. Call (877) 792-1410 for a technical consultation."
    },
    {
      q: "How urgent is a slab leak?",
      a: "A slab leak is a Level-5 structural emergency. In San Clemente, the expansive clay soils react violently to sub-surface moisture. If left unaddressed for even a few days, a leak can initiate 'Hydrostatic Heave,' where the wet soil expands and literally lifts your foundation, causing structural cracks in walls, windows, and the slab itself. \n\nBeyond foundation damage, the 'Slab hydraulic pressure' can force water into your flooring, initiating catastrophic mold growth and biological contamination of your interior. In San Clemente homes, where property values are high, a delayed repair can result in six-figure structural restoration costs. Our San Clemente dispatch team provides 'Zero-Latency Response' to mitigate these threats immediately. We use 'Surgical precision' to identify and neutralize the leak, reclaiming your home's architectural integrity before the moisture reaches critical saturation levels. Do not wait for a visible flood; if your water bill is high or you feel a 'hot spot' on the floor, your San Clemente residence is in immediate danger. Call our emergency force now."
    },
    {
      q: "Will insurance cover a leak under a slab?",
      a: "Most San Clemente homeowners insurance policies cover the 'Access and Demolition' costs required to reach a slab leak, but they often exclude the 'Pipe Material' repair itself. However, the resulting 'Collateral Damage'—such as replacing cabinets, hardwood floors, and drywall—is typically covered if the leak is 'Sudden and Accidental.' \n\nNavigating an insurance claim for a slab leak in San Clemente requires 'Master-Aligned Technical Documentation.' Our force provides the 'HD Evidence' and 'Failure Profiling' needed to support your claim. We document the 'Sonic identification' and the 'Structural breach node' meticulously. By providing a professional 'Reclamation Report,' we help you maximize your insurance recovery. In the 92672 and 92673 ZIP codes, adjusters are highly sensitive to 'Soil-Cycle Failures,' and having an expert like us on-site ensures your claim is handled with professional clarity. We provide the 'Elite Technical Security' that protects your financial interests throughout the restoration process. Always check your policy for a 'Foundation Water Damage Endorsement' for maximum protection."
    },
    {
      q: "Can I fix a slab leak myself?",
      a: "Attempting a DIY repair on a San Clemente slab leak is exceptionally high-risk and almost always leads to catastrophic property devaluation. Standard residential tools lack the 'Sonic precision' to locate a leak through six inches of concrete and three feet of soil. Blind digging into your foundation slab can sever adjacent gas lines, critical electrical conduits, or other active water mains, creating a multi-system failure. \n\nFurthermore, fixing a slab leak often requires 'Master-Level copper welding' or specialized PEX bypass protocols that must be compliant with San Clemente's strict structural codes. A failed DIY attempt can lead to 'Foundation Voids' or 'Sewer infiltration,' making your home legally uninhabitable. Our San Clemente experts use 'Industrial-Grade ultrasonic arrays' and 'Thermal Profilometry' to ensure a safe, permanent fix. Protect your San Clemente home value from DIY catastrophic failure—let our licensed master-force provide the 'Technical Security' and 'Flow reclamation' your home deserves. We handle the risk so you don't have to."
    },
    {
      q: "How long does a slab leak take to fix?",
      a: "A professional 'Slab Leak Reclamation' in a San Clemente residence typically takes 1 to 3 days from detection to final restoration. Day 1 is usually focused on the 'Diagnostic Audit'—our technicians use ultrasonic sensors to pin the leak node within inches. Once identified, the chosen 'Repair Path' (either trenchless bypass or direct excavation) begins. \n\nIf we can perform a 'Horizontal reroute' (bypassing the line through the walls or attic), the structural part of the repair can often be completed in a single shift. In San Clemente, we prioritize 'Asset Preservation,' choosing the path that causes the least disruption to your flooring and walls. Our dispatchers understand that your time is valuable, but we never compromise on 'Structural Quality.' We stay on the property until the systemic flow is perfectly restored and the foundation node is stabilized. We providing the 'Definitive Result' that ensures your home's 92672 or 92674 drainage and supply biology is perfectly returned to its engineered specification before we leave the site."
    },
    {
      q: "How to locate a water leak under a slab?",
      a: "Locating a leak beneath a San Clemente foundation requires 'Multimodal Sonic Profiling.' High-resolution acoustic sensors are placed on the slab surface to listen for the distinct frequency of pressurized water escaping a pipe. This is supplemented by 'Thermal Infrared Scans' to identify temperature variants and 'Electronic Tracer Gasses' for micro-leaks. \n\nAt our San Clemente force, we never guess. Guessing leads to 'Blind Demolition' and massive repair bills. We use 'Master-Aligned precision' to profile the entire sub-surface line before we ever touch a hammer. In the coastal soil of San Clemente, sound travels differently, requiring a technician with thousands of hours of local experience. We provides the 'Elite Diagnostic Audit' that pins the failure node with surgical accuracy. This 'Sonic Security' ensures that your repair is focused exclusively on the problem area, protecting the rest of your home's foundation from unnecessary stress. Call (877) 792-1410 to schedule a professional detection session today."
    },
    {
      q: "How common are slab leaks?",
      a: "Slab leaks are exceptionally common in San Clemente due to the region's 'Aggressive Soil Cycles.' The hills and coastal regions of South Orange County are prone to 'Soil Shifting' and expansion, which places immense 'Sheer Stress' on under-slab pipes. Additionally, 'Electrolysis' (chemical reaction between soil and copper) and 'Hard Water Scaling' in the 92672 and 92673 areas contribute to pipe wall thinning and eventual breach. \n\nMany San Clemente homes built between 1970 and 2005 used copper supply lines that are now hitting their 'Terminal Failure Node.' If you live in an aging San Clemente development, the probability of a sub-slab leak increases every year. We provides the 'Structural Monitoring' needed to handle these failures efficiently. By identifying the 'Root cause'—whether it's soil movement or material corrosion—we provide a 'Permanent systemic reset' rather than a temporary patch. Stay ahead of the 'Failure Curve' with periodic technical audits of your home's flow health."
    },
    {
      q: "What to do if a slab is leaking?",
      a: "If you detect 'Systemic Failure' signs—such as a hot floor, anomalous sounds in the walls, or a spinning water meter when no fixtures are on—you must immediately enter 'Protocol Mode.' First, turn off your main water valve to stop the 'Hydraulic Surcharge' beneath your slab. Then, call our San Clemente emergency hotline at (877) 792-1410 for 'Priority Displacement' of our detection force. \n\nDo not attempt to 'Wait and see.' Every hour a slab leak remains active, you are risking 'Foundation Heave' and permanent structural warping. While waiting for our tech to arrive, document any pooling water or floor temperature variances for our 'Diagnostic Report.' We provides 'Instant-Action' solutions to stabilize your San Clemente home's pressure. We are the 'First-Response Leaders' for the San Clemente 92672 area, providing the 'Permanent Exclusion' of sub-slab threats 24/7/365. Reclaim your home's safety today."
    },
    {
      q: "Will a slab leak affect my home's value?",
      a: "Yes, an unresolved or poorly repaired slab leak is a 'Critical Asset Defect' that can drastically reduce your San Clemente home's market value. In the high-prestige San Clemente real estate market, buyers and inspectors look for 'Structural Flow Integrity.' A history of slab leaks without professional 'Certified Reclamation Reports' can lead to 'Compromised Title' or massive price concessions during a sale. \n\nBy contrast, choosing our 'Master-Aligned Technical force' to perform a 'Structural Reset'—such as a complete PEX reroute—can actually increase your home's resiliency and value. We provide the 'Vertical Technical Documentation' needed to prove that your home is structurally secure and 'Hydraulically Restored' to modern standards. In San Clemente, equity is tied to the foundation. We provide the 'Technical Security' that protects your property value for the long term. Don't let a sub-surface breach become a financial disaster."
    },
    {
      q: "Can water come up through a concrete slab?",
      a: "Yes, if a pressurized water line breaches beneath your San Clemente foundation, 'Hydrostatic Pressure Balance' will force the water through the micro-pores and cracks of the concrete. This often manifests as 'Efflorescence' (white powdery residue), damp carpets, or lifting hardwood. In extreme cases, a high-volume leak can create a visible puddle on your floor even if there is no plumbing fixture nearby. \n\nThis 'Structural Infiltration' is an indicator that the soil beneath your slab is 'Saturated to Capacity,' which is the precursor to 'Foundation Heave' and catastrophic slab failure. In San Clemente homes, this moisture also initiation the rapid growth of 'Foundation Bio-Film' and mold. Our San Clemente specialists use 'Moisture Profilometry' to see exactly how much water has penetrated your foundation. We providing the 'Definitive Reclamation' that stops the leak at the source, preventing further hydraulic intrusion into your living space. call us for 'Priority Flow Restoration' in the 92672, 92673, and 92674 ZIP codes."
    }
  ];

  // Split faqs into two columns (5 and 5)
  const firstCol = faqs.slice(0, 5);
  const secondCol = faqs.slice(5);

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <BookOpen className="w-4 h-4" />
            Slab Leak Expert Knowledge Base
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-500">Sub-Slab Intelligence</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium italic">
            Deep technical insights into identifying, locating, and neutralizing catastrophic foundation leaks in San Clemente, CA.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {firstCol.map((item, idx) => (
              <FAQItem key={idx} item={item} index={idx} />
            ))}
          </div>
          <div className="space-y-4">
            {secondCol.map((item, idx) => (
              <FAQItem key={idx + 5} item={item} index={idx + 5} />
            ))}
          </div>
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-amber-600 to-amber-700 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase tracking-tighter">
              Foundation Hot Spot or High Bill?
            </h3>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium italic">
              Don't wait for your foundation to heave. Our San Clemente specialists provide 24/7 emergency slab leak reclamation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:8777921410" className="bg-white text-amber-600 hover:bg-amber-50 h-16 px-10 rounded-2xl text-xl font-bold flex items-center gap-3 transition-transform hover:scale-105 shadow-xl">
                <ShieldCheck className="w-6 h-6" />
                (877) 792-1410
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlabLeakInfo;
