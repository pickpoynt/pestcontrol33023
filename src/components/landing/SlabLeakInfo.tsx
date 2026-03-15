import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone } from "lucide-react";

/**
 * SlabLeakInfo Component - "Expert Knowledge Base" section
 * Contains 24 deep-content Q&As (>150 words each) in a 2-column layout.
 * Questions are formatted as <h3> for SEO.
 * Answer backgrounds are solid white for readability.
 * Includes a nice-looking call button in every FAQ item.
 */

interface FAQItemProps {
  item: { q: string; a: string };
  index: number;
  key?: any;
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
        href="tel:3238801224" 
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
      a: "The cost for professional slab leak repair in Flower Mound typically ranges from $1,500 to $4,000 for the detection and repair phase. This investment reflects the high technical complexity of the task; slab leaks are uniquely deceptive and require a multi-stage approach that includes acoustic sonic mapping, thermal audit, and the use of specialized structural residuals. A comprehensive service usually includes a detailed foundation and wall void audit, precision injections where moisture aggregates, and the installation of long-term mechanical enclosures. \n\nIn the Flower Mound area, costs can vary based on the level of the leak and the structural complexity of the home (specifically related to the depth of the slab and the type of soil expansive properties). While general plumbing may offer cheaper rates for standard leaks, they often fail to address the core of the slab breach which requires precision foundation boring or strategic re-piping. Our specialized service provides a definitive resolution by targeting the leak's hydraulic biology and the home's architecture. Compared to the recurring costs and structural stress of failed DIY attempts, hiring a specialist ensures your home is cleared effectively and your foundation's integrity is protected."
    },
    {
      q: "Will insurance pay for a slab leak?",
      a: "In Flower Mound, TX, the question of insurance coverage for slab leaks is complex and depends heavily on your specific policy. Most standard homeowners insurance policies (HO-3 or HO-B) in Texas will cover the 'access' and 'restoration' costs. This means the insurer may pay for the cost of tearing out and replacing the slab to reach the leak, as well as any water damage to your flooring or cabinetry. However, the 'repair of the pipe itself' is often considered a wear-and-tear item and is frequently excluded from basic coverage unless you have a specific plumbing endorsement. \n\nBecause Flower Mound has expansive clay soils, many local insurance adjusters are familiar with slab movements and related breaches. Our team works directly with your adjuster to provide the necessary 'Acoustic Mapping' documentation and 'Node-Focused Reports' required to justify a claim. We help you navigate the 'proximate cause' requirements to ensure you receive the maximum possible benefit toward your structural restoration. Don't guess with your financial security—let our local Flower Mound specialists provide the technical evidence your insurance company needs to move your claim forward quickly."
    },
    {
      q: "Can slab leaks be repaired?",
      a: "Yes, slab leaks can absolutely be repaired, but it requires much more than a standard 'pipe patch.' Our Flower Mound team utilizes a methodology known as 'Integrated Structural Abatement.' This involves more than just fixing a pipe; it is a tactical structural project that includes 'Strategic Re-Piping' (bypassing the line entirely), 'Spot Repair' (precision boring to the leak point), and 'Foundation Resetting' using industrial-grade structural resins to fill any voids caused by water erosion. \n\nGeneralist plumbing companies often struggle with slab leaks because they don't have the high-sensitivity sonic equipment to find the exact puncture point, leading to 'exploratory' drilling that damages your home. We take the uncertainty out of the process. In Flower Mound, we have handled some of the most persistent foundation breaches by identifying the exact structural weaknesses allowing moisture to undermine the slab. When you hire our specialists, you aren't just getting a plumber; you are getting a comprehensive engineering solution to a hydraulic crisis. We provide the definitive end to the leak root-and-branch."
    },
    {
      q: "How urgent is a slab leak?",
      a: "A slab leak in a Flower Mound home is a Level 1 Structural Emergency and should be treated with immediate urgency. Every hour that water is allowed to escape beneath your foundation, it is actively eroding the supporting soil and creating 'Hydrostatic Voids.' These voids can lead to foundation shifting, walls cracking, and in severe cases, a total structural failure. Furthermore, the constant moisture creates a 'Biological Bridge' for mold and pests to enter your home's infrastructure. \n\nIn the Flower Mound environment, where soil movement is already a concern, a silent leak is a catalyst for catastrophic damage. This is why we provide 24/7 rapid dispatch to the 75028 area. Waiting to see if the problem 'updates itself' is a high-risk strategy that allows the breach to entrench itself further into your home's 'unreachable' areas. An early intervention is always exponentially more effective and cheaper than trying to handle a full-blown structural foundation collapse. We treat every sighting of moisture or unexplained water bills as a potential node point, providing the professional clarity needed to protect your property before the problem multiplies."
    },
    {
      q: "What is the lifespan of a slab leak repair?",
      a: "When performed by our Flower Mound specialists using 'Strategic Re-Piping' or 'Structural Pipe Lining' methods, a slab leak repair is designed to be a permanent, 25-to-50-year solution. We use industrial-grade PEX or high-stability copper with silver-solder joints that are specifically engineered to withstand the thermal expansion and soil movements common in North Texas. Standard 'spot repairs' using rubber couplings or cheap solder often fail within 5 to 10 years because they don't address the structural stresses placed on the line. \n\nOur 'Fortification Protocol' also includes filling the surrounding void with moisture-resistant resins that act as a 'Secondary Shield' for the pipe. In Flower Mound, we guarantee that our structural solutions provide a level of durability that far exceeds any temporary fix. We don't just solve the problem once; we create a 'systemic resistance' in your plumbing infrastructure that works 24/7 to keep your home dry. When you invest in a professional repair from our local team, you are securing the long-term value and safety of your property for decades to come."
    },
    {
      q: "How much will a 20x20 concrete slab cost?",
      a: "While our core focus in Flower Mound is 'Structural Abatement' and repair, we frequently receive inquiries about the cost of total slab replacement. A new 20x20 (400 sq. ft.) concrete slab in North Texas typically ranges from $2,500 to $5,000 depending on the depth (4 to 6 inches), the type of reinforcement used (rebar vs. mesh), and the required site preparation. However, if this slab is part of an existing home's foundation being replaced after a leak, the 'Access Cost' and 'Precision Boring' requirements can significantly increase the technical overhead. \n\nIn Flower Mound, where 'Envelope Integrity' is crucial, we recommend against 'cheap' pouring that doesn't include proper vapor barriers and moisture-stable sub-base layers. A poorly poured slab is the primary 'attractor node' for future leaks. If your foundation has been compromised by a leak, we provide a 'Structural Reset Audit' to determine if you need a total pour or if our 'Resin Injection' technology can stabilize the existing concrete at a fraction of the cost. We help you make the most cost-effective decision for your home's long-term health."
    },
    {
      q: "How long does it take to fix a slab leak?",
      a: "A typical specialized slab leak repair in Flower Mound takes between 1 to 3 business days for a complete 'Acoustic-to-Restoration' cycle. Day One focuses on 'Precision Detection'—using sonic mapping and thermal scans to find the exact breach point. Day Two involves 'Precision Access' and 'Line Restoration'—boring a small, targeted hole into the slab and performing the mechanical repair or re-pipe. Day Three is dedicated to 'Structural Backfilling' and concrete restoration. \n\nWhile some general plumbers might take a week or more due to 'exploratory' digging, our 'Node-Focused Mapping' allows us to move directly to the source. We understand that having a hole in your floor is a major disruption to your Flower Mound household, and we treat the project with the appropriate urgency. Speed in slab repair comes from addressing the hidden 'nodes' directly—not just guessing where the water is coming from. We provide 'Instant-Knockdown' results on the leak itself, allowing you to return to a dry, secure home as quickly as possible without sacrificing quality."
    },
    {
      q: "What not to say to a homeowners insurance adjuster?",
      a: "When dealing with an insurance claim for a slab leak in Flower Mound, it is critical to be precise with your language. Do *not* say 'I've noticed this for a long time' or 'it's been leaking for months.' Insurance policies in Texas specifically exclude 'long-term, gradual leaks.' Instead, focus on the 'Sudden Emergence'—the moment you noticed the warm spot on the floor, the sudden drop in water pressure, or the first unexpected water bill. These are the markers of a 'sudden and accidental' event which is typically a covered peril. \n\nAlso, do not attempt to guess at the 'proximate cause' of the leak (such as 'I think the soil moved'). Let the professionals provide the technical 'Specimen Audit.' Our Flower Mound technicians provide a formal 'Acoustic Confirmation' report that adjusters trust. We help you communicate the facts clearly and technically, ensuring that the 'hydraulic breach' is documented in a way that aligns with your policy's coverage requirements. Protecting your claim is as important as protecting your foundation, and we provide the expert guidance needed to handle the adjuster with professional clarity."
    },
    {
      q: "Are slab leaks covered by insurance in Texas?",
      a: "As mentioned, slab leak coverage in Texas, and specifically in the North Texas market like Flower Mound, depends on the 'Type of Event' and your 'Policy Endorsements.' Under a standard HO-3 policy, the damage caused by the water (warped floors, ruined cabinets) is usually covered. The 'Cost of Access' (digging through the slab to reach the leak) is also traditionally covered because it is necessary to mitigate the damage. However, the direct repair of the pipe itself is often an 'Out-of-Pocket' expense unless you have a 'Seepage and Leakage' rider. \n\nBecause Flower Mound has been a high-risk area for slab issues due to clay expansion, many insurers have added specific 'foundation-related' exclusions in recent years. This is why a professional 'Structural Audit' from our team is vital. We provide the 'Arachnological Level' of detail needed to prove that the leak was a sudden mechanical failure rather than a long-term maintenance issue. We help Flower Mound homeowners maximize their coverage by providing the technical proof that adjusters cannot ignore. Don't let an insurance technicality leave you with a massive bill—get the professional documentation you need today."
    },
    {
      q: "How common is a slab leak?",
      a: "In Flower Mound and the surrounding North Texas communities, slab leaks have become increasingly common over the last three decades. The primary driver is 'Soil Volatility.' The expansive clay soils in the 75028 area swell when wet and shrink when dry, putting immense 'Shear Stress' on the plumbing lines embedded in the concrete foundation. Many homes built in the 1980s and 1990s are already 'passive hosts' for these leaks due to the age of the copper lines and the repeated 'Expansion-Contraction' cycles of the Texas environment. \n\nIt is much more common than people think, but the majority of these breaches go unnoticed because they starting as 'pinhole' leaks that are absorbed by the soil. It's often only when a leak grows large enough to create a 'Thermal Node' or a 'Hydraulic Surge' that the homeowner notices the warm floor or spinning water meter. Our Flower Mound technicians provide a 'Hidden Threat Assessment'—performing a deep-tissue acoustic scan of your home's infrastructure to determine if your property is harbouring a silent breach. Knowing the reality of your foundation's health is the first step toward reclaiming your territory."
    },
    {
      q: "Should I repipe instead of repairing a slab leak?",
      a: "In many Flower Mound structural environments, 'Strategic Re-Piping' is a much more effective and cost-efficient solution than a traditional spot repair. A 'Spot Repair' involves boring through your floor and slab, fixing one tiny section of pipe, and then patching it all back together. However, if your slab is already moving, the 'stress node' that caused the first leak will likely cause another one nearby. 'Re-Piping' involves bypassing the failing line entirely by running new, high-stability PEX lines through your attic or wall voids. \n\nThis 'Enclosure Guard' protocol eliminates the possibility of future leaks in that line forever. Our Flower Mound specialists often recommend a 'Hybrid Restoration'—spot-detecting the current leak to stop the water damage, then performing a surgical bypass to ensure the problem never returns. We help you compare the 'Return on Investment' for both options, ensuring you don't spend money on a 'band-aid' fix for a systemic problem in the 75028 area. We provide the 'Permanent Exclusion' needed to keep your foundation dry for life."
    },
    {
      q: "Can a pipe burst in a slab foundation?",
      a: "Yes, a pipe can 'burst' or suffer a catastrophic mechanical failure under a slab, although it is more common for them to develop high-pressure pinhole 'jets.' A total pipe structural failure is often the result of 'Electrolysis' (chemical reactions between the copper and the soil) or extreme 'Structural Shear' caused by foundation settlement. When a pipe bursts in a Flower Mound slab, the volume of water can be massive, leading to 'Foundation Heave'—where the concrete slab literally lifts and cracks under the hydraulic pressure. \n\nThis is a true 'Hydraulic Crisis' that requires immediate 'Main Line Isolation.' Our Flower Mound 24/7 hotline is specifically equipped for these catastrophic events. We provide 'Instant-Knockdown' of the water flow and perform an 'Emergency Node Flush' to clear the water from your foundation voids as quickly as possible. Don't wait for your walls to crack; if you hear the sound of rushing water beneath your floors, call our Flower Mound experts immediately. We provide the elite-level technical help needed to stabilize your home before the hydraulic pressure destroys your foundation's integrity."
    },
    {
      q: "What are the signs of a hidden slab leak?",
      a: "Knowing how to identify the signs of a hidden slab leak in your Flower Mound home is crucial for 'Early-Phase Abatement.' The most common 'Red Flag' is a 'Thermal Node'—a localized warm spot on your flooring (usually tile or vinyl). Other signs include a persistent 'Sonic Hum' (the sound of water running when all faucets are off), damp spots on your drywall near the floor, and an unexplained spike in your water bill. In the North Texas environment, 'Heaved' baseboards or doors that suddenly stick are also structural indicators of a hydraulic breach. \n\nThese silent signals are the spiders' web of plumbing—they tell you something is wrong before the foundation actually cracks. Our Flower Mound technicians provide a 'Zero-Tolerance Audit'—we treat every 'warm spot' or 'sonic signal' as a confirmed breach point. We use specialized 'Node-Focused Detectors' to confirm the status of your slab, giving you the professional clarity needed to protect your property before the problem multiplies. Don't ignore the quiet signs; get a professional confirmation from a Flower Mound specialist who knows what to look for."
    },
    {
      q: "Will a slab leak affect my home's value?",
      a: "Yes, an unaddressed or poorly repaired slab leak is a major 'Value Drain' for any Flower Mound property. In the North Texas real estate market, 'Foundation History' is the first thing buyers and inspectors look for. A history of moisture issues or foundation cracks that haven't been professionally remediated with a 'Certified Structural Restoration' will lead to massive price reductions or the total loss of a sale. Furthermore, state law requires the disclosure of any known foundation or plumbing breaches. \n\nA specialized repair from our team actually *protects* your value. We provide a 'Transferable Structural Guarantee' and a formal 'Clearance Certificate' that you can show to future buyers. We transform an 'Active Liability' into a 'Managed Asset' by proving that the home's infrastructure has been fortified with 'Permanent Exclusion' technology. In Flower Mound, where foundation stability is the top concern for homeowners, our professional service is a very wise and cost-effective investment that ensures your home remains a high-value asset in the 75028 area."
    },
    {
      q: "Are slab leaks covered by homeowners?",
      a: "As we've analyzed, the answer for Flower Mound residents is 'Partially.' Your homeowners insurance is designed to cover the 'Residue' of the event—the damage caused by the water to your carpets, cabinets, and walls. It also traditionally covers the 'Cost of Access' (the technical labor and machinery needed to bore through the slab). However, the 'Core Repair' (the new pipe and solder) is typically your responsibility. This is why our 'Clearance-First' approach is so effective—we provide the technical justification that adjusters need to open the 'Access and Restoration' portions of your claim. \n\nWe don't allow insurers to minimize your hydraulic crisis in Flower Mound. We provide the 'Biological Evidence' of soil erosion and foundation undermining that forces the adjuster to address the 'Structural Integrity' of the entire slab. By focusing on the 'Total Structural Clearing' of the moisture, we ensure that you aren't left holding the bill for the most expensive parts of the repair. We help you reclaim your insurance benefits and your home's security simultaneously."
    },
    {
      q: "What is the lifespan of a concrete slab?",
      a: "In a stable environment, a concrete slab can last for 50 to 100 years. However, in the 'Variable Soil' environment of Flower Mound, TX, the lifespan of a slab is completely dependent on 'Moisture Management' and 'Perimeter Integrity.' The constant hydraulic pressure from a slab leak or poor exterior drainage can cut the lifespan of a foundation in half by causing 'Premature Cracking' and 'Soil Desiccation.' A slab is only as strong as the ground beneath it. \n\nIf your Flower Mound home is more than 20 years old, your slab is nearing the 'Structural Audit' window. Our technicians provide 'Life-Extension' services—not just repairing leaks, but stabilizing the foundation using 'Structural Resin Injections' that reinforce the sub-slab environment. We transform a 'Decaying Foundation' into a 'Fortified Enclosure' that is ready for another 50 years of North Texas weather. We don't just fix the today's problem; we protect your home for tomorrow's climate. Don't let a silent leak end your foundation's lifespan early—get the professional 'Structural Guard' service your home deserves."
    },
    {
      q: "What is the 4 2 1 rule for concrete?",
      a: "In the context of 'Structural Abatement' and repair in Flower Mound, the 4-2-1 rule is a technical standard for the 'Mechanical Reset' of your slab. It refers to the volumetric ratio of the four main ingredients in a high-strength concrete mix: 4 parts gravel (the 'Skeleton'), 2 parts sand (the 'Matrix'), and 1 part Portland cement (the 'Binder'). This ratio ensures the 'Micro-Encapsulated' strength required to support a residential foundation in expansive clay. \n\nWhen we perform a 'Structural Restoration' after a slab leak, we don't just slap down some cheap mortar. We use 'High-PSI Structural Concrete' that adheres to these engineering standards, ensuring that the 'Restoration Node' is actually stronger than the original surrounding slab. In Flower Mound, where foundation movement is the norm, this level of technical detail is the only way to prevent 'Secondary Cracking' at the repair site. We provide the professional craftsmanship needed to ensure your home is a fortress that cannot be breached by shifting soils or hydraulic pressure. We use engineering, not just intuition, to restore your property."
    },
    {
      q: "How much does a 1500 sq ft concrete slab cost?",
      a: "A standard 1500 sq. ft. foundation slab in Flower Mound typically costs between $9,000 and $15,000 for a 'New Construction' pour. However, for a 'Remedial' or 'Total Replacement' project necessitated by catastrophic water damage, the costs can be significantly higher due to the 'Demolition' and 'Structural Support' overhead. If you are facing a massive hydraulic breach that has undermined a large portion of your slab, we recommend a 'Structural Injection' approach instead of a total pour. \n\nWe can often stabilize a 1500 sq. ft. foundation using 'High-Expansion Resins' at a fraction of the cost of a new slab. This 'Non-Invasive Fortification' is the preferred method for high-value properties in the 75028 area. We help you avoid the 'Total Reconstruction' trap by providing the advanced technical alternatives that general contractors don't offer. Our 'Sub-Surface Abatement' technology allows us to restore your slab from the inside out, saving you thousands of dollars and months of disruption. We are the 'Economic Engine' of structural repair in Flower Mound."
    },
    {
      q: "Do I need to repair a foundation after a slab leak?",
      a: "Yes, you should almost always perform a 'Foundation Stabilization Audit' after a major slab leak in Flower Mound. The thousands of gallons of water that escaped beneath your home have likely created 'Erosion Nodes' or 'Mechanical Voids'—empty spaces where soil used to be. If these voids aren't filled with 'Structural Grout' or 'Poly-Resins,' the slab will eventually 'settle' into the hole, leading to cracks, tilted floors, and structural failure. \n\nThis is why we offer an 'Integrated Abatement' plan. We don't just fix the plumbing; we address the 'Soil-Structure Interaction.' In Flower Mound, where 'Foundation Movement' is a constant threat, skipping the structural backfill is a 'High-Risk' decision that almost guarantees a much more expensive foundation repair in the future. We provide the 'Total Structural Clearing' that includes both the hydraulic fix and the structural stabilization. We ensure that after we leave, your home is not just 'dry,' but 'foundationally secure.' We provide the definitive end to the entire crisis, not just the water part."
    },
    {
      q: "How long can a slab leak go undetected?",
      a: "A slab leak in a Flower Mound home can go completely undetected for months or even years. Because the water is escaping into the soil beneath 4 to 6 inches of concrete and several inches of flooring, it makes no 'Visible Signal' on the surface of your home until the damage is already severe. Many residents in the 75028 area only discover the breach when their water bill suddenly doubles or when they find a 'Thermal Node' (a warm spot) under their carpet. \n\nThis 'Silent Incubation' is what makes slab leaks so dangerous—they are the termite of plumbing. While you are sleeping, the water is silently eroding your home's foundation. Our 'Hidden Threat Assessment' is specifically designed to find these 'silent' breaches. We use ultra-sensitive sonic sensors that can 'hear' the leak even through a massive concrete slab. We give you the 'Early Warning' needed to break the cycle before the first crack appears in your walls. Don't wait for your house to tell you it's leaking through a cracked foundation—let our Flower Mound experts confirm your home's integrity today."
    },
    {
      q: "Can I fix a slab leak myself?",
      a: "No, a slab leak is not a DIY project for even the most experienced Flower Mound homeowner. It is a 'High-Security structural engineering' task that requires specialized equipment, licensed technical knowledge, and the ability to work with 'medically significant' hydraulic pressures. Attempting to 'jackhammer' your floor without 'Acoustic Mapping' is a dangerous strategy that often results in cutting through other plumbing lines, electrical conduits, or post-tension cables. \n\nFurthermore, DIY 'clamp' fixes are almost guaranteed to fail because they don't address the 'Mechanical Stress' of the underground environment. You are risking your home's foundation to save a few dollars—a bargain that almost always ends in a much more expensive professional reconstruction. Our Flower Mound team provides the 'Arachnological Level' of surgical precision needed to clear the breach without damaging your home. We use 'Non-Invasive' technology that makes the 'DIY risk' completely unnecessary. Trust the specialists who have the technical 'Node-Focused' experience to do the job right the first time in the 75028 area."
    },
    {
      q: "Can a slab leak cause a sinkhole?",
      a: "While a slab leak in a Flower Mound home is unlikely to cause a massive 'geological' sinkhole like those seen in Florida, it can absolutely cause a 'Structural Sinkhole'—also known as a 'Foundation Void.' Constant water flow erodes the sub-slab soil, creating a cavern beneath your concrete foundation. If this void grows large enough, the 'Self-Weight' of the house will cause the slab to collapse into the hole, leading to a catastrophic structural failure. \n\nIn Flower Mound, where 'Clay Shrink-Swell' is already a concern, these hydraulic voids act as 'Accelerant Nodes' for foundation failure. This is why our 'Clearance Protocol' includes a mandatory 'Soil Stabilization' phase using high-expansion structural foams that fill every cubic inch of the void. We don't just stop the leak; we 'Re-Point' the foundation to ensure the 'sinkhole' risk is eliminated. We provide the ultimate 'Structural Defense' against the hidden dangers of sub-slab erosion. Protecting your family from a structural collapse is our top priority, and we provide the technical force needed to secure your property's foundation."
    },
    {
      q: "Would a 30 year old concrete slab have a moisture problem?",
      a: "Yes, a 30-year-old concrete slab in Flower Mound is a 'High-Risk Node' for moisture problems. Concrete is a 'Porous Membrane'—it naturally draws moisture from the soil via 'Capillary Action.' After 30 years of North Texas weather, the original 'Vapor Barrier' beneath the slab has likely degraded or was never installed to modern engineering standards. This leads to 'Passive Seepage,' where moisture wicks up through the slab and ruins your flooring without an actual pipe breach. \n\nFurthermore, the plumbing lines from that era (typically 'Type M' copper) are now reaching the end of their 'Metabolic Lifespan' due to soil-assisted electrolysis. If your Flower Mound home was built in the early 1990s, you are in the 'Red Zone' for hydraulic failure. Our technicians provide a 'Legacy Audit'—evaluating the 'Life Phase' of your slab and plumbing to determine if you need 'Passive Sealing' or a 'Strategic Re-Pipe.' We help you manage the risks of an aging structure, ensuring your home remains a 'Zero-Moisture' environment for the next 30 years. Experience matters when dealing with older Flower Mound properties."
    },
    {
      q: "Can heavy rain cause slab leak?",
      a: "In the context of the Flower Mound environment, heavy rain is a 'Secondary Trigger' for slab leaks. Rain doesn't cause a pipe to burst directly, but it causes the 'Highly Expansive' North Texas soil to swell. This soil swelling puts massive 'Bending Pressure' on the slab and the pipes embedded within it. Furthermore, poor exterior drainage (specifically from your home's 'Perimeter Nodes') can saturates the sub-slab soil, causing 'Thermal Shift' and mechanical stress on the plumbing joints. \n\nThis 'Hydraulic Squeeze' is what often causes an older, brittle pipe to finally fail. If you notice unexplained water bill spikes or moisture after a major Flower Mound storm, it's not 'just the rain'—it's likely a rain-triggered slab breach. Our team performs a 'Storm-Response Audit' to differentiate between surface-water intrusion and a rain-triggered plumbing failure. We help you identify the root 'Structural Breach' and provide the definitive 'Permanent Exclusion' needed to keep your home dry through every North Texas season. We provide the 'Storm-Proof' solutions that Flower Mound homeowners trust."
    }
  ];

  // Split faqs into two columns
  const firstCol = faqs.slice(0, 12);
  const secondCol = faqs.slice(12);

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
            Comprehensive <span className="text-amber-500">Foundation Intelligence</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium italic">
            Deep technical insights into identifying, removing, and preventing slab leak issues in Flower Mound, TX.
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
              <FAQItem key={idx + 12} item={item} index={idx + 12} />
            ))}
          </div>
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-amber-600 to-amber-700 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase tracking-tighter">
              Noticing warm spots on your floor?
            </h3>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium italic">
              Don't wait for your foundation to crack. Our Flower Mound specialists are ready with sonic mapping and precision restoration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:3238801224" className="bg-white text-amber-600 hover:bg-amber-50 h-16 px-10 rounded-2xl text-xl font-bold flex items-center gap-3 transition-transform hover:scale-105 shadow-xl">
                <ShieldCheck className="w-6 h-6" />
                (323) 880-1224
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlabLeakInfo;
