import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone } from "lucide-react";

/**
 * SewerLineInfo Component - "Expert Knowledge Base" section
 * Contains 22 deep-content Q&As (>150 words each) in a 2-column layout.
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
        CLICK TO CALL A SEWER LINE EXPERT NOW
      </a>
    </div>
  </div>
);

const SewerLineInfo = () => {
  const faqs = [
    {
      q: "How much does it cost to unblock a main sewer line?",
      a: "Unblocking a main sewer line in Flower Mound typically costs between $350 and $850 for standard mechanical snaking or hydraulic clearing. If the blockage is complicated by 'aggravated scale' or heavy root intrusion requiring advanced hydro-mechanical reclamation, the investment may range from $900 to $1,500. This pricing reflects the deployment of specialized diagnostic arrays and the trained expertise required to manage Flower Mound's unique sub-surface foundation stresses. \n\nIn Flower Mound specifically, the cost node is often influenced by the 'access site'—whether we can utilize a foundation cleanout node or must reach the blockage through a rooftop vent stack. Our team provides a 'Technical Flow Audit' upon arrival to ensure the solution matches your home's hydraulic architecture. By restoring the line's full-bore diameter, you are not just clearing a clog; you are protecting your 75028 or 75022 property from'Foundation Heave' and biohazardous saturation risks."
    },
    {
      q: "What to do if the main sewer line is clogged?",
      a: "If you identify a 'Systemic Flow Failure' in your Flower Mound home (multiple fixtures backing up simultaneously), you must immediately cease all water usage to prevent foundation flooding. Locate your main water shut-off and your foundation cleanout node, then call our Flower Mound emergency dispatch at (877) 792-1410. Do not attempt to use 'Chemical Liquid cleaners,' as these are hydraulically ineffective against main-line obstructions and can initiate 'Joint Degradation' in older PVC systems. \n\nOur Flower Mound specialist will initiate an 'Instant-Knockdown' of the backup. We perform a 'Mandatory Optic Audit' to verify the failure node before applying mechanical force. In the North Texas soil envelope, even a minor clog can signal a larger joint separation and structural threat. We provides the 'Surgical Response' required to reclaim your home's sanitary integrity, ensuring your Flower Mound residence stays dry, safe, and code-compliant. Protect your property value with professional intervention today."
    },
    {
      q: "Does homeowners insurance cover main sewer line repair?",
      a: "Standard homeowners insurance (HO-3/HO-B) in Flower Mound typically does not cover the 'Maintenance Cost' of unclogging a sewer line. However, if the blockage results in 'Sudden and Accidental' water damage to your interior finisings, the cleanup and remediation may be covered. You should check your policy for a 'Sewer Backup Endorsement,' which is a vital technical addition for Flower Mound properties due to common foundation movement issues. \n\nBecause Flower Mound adjusters are highly sensitive to 'Soil-Cycle Failures,' they often require a 'Camera profiling Audit' to verify the cause of the backup. Our Flower Mound technicians provide the 'HD Evidence' and 'Failure Documentation' needed to support your claim. By providing a professional 'Reclamation Report,' we help you navigate the 'Maintenance vs. Failure' criteria used by insurers. We provides the 'Elite Technical documentation' that ensures your claim is handled with professional clarity, protecting your financial interests in the 75022 and 75028 ZIP codes."
    },
    {
      q: "How much does Roto Rooter charge to clean a main sewer line?",
      a: "National franchises like Roto Rooter often quote main line cleaning in the Flower Mound area starting from $400 to $700, but these base prices frequently increase when 'Emergency Dispatch Fees' or 'Access node Surcharges' are applied. Many Flower Mound homeowners find that a 'Localized Force' like ours provides better value because we understand the specific hydraulic architectures common in North Texas foundation plumbing. \n\nWe focus on 'Mechanical Precision,' ensuring we identify the exact cause of the blockage—be it roots, grease, or aggregate—before initiating a 'Structural Reset' of the line. Unlike high-volume franchises, we provide 'Vertical Technical Oversight' on every project, showing you the 'Before and After' HD results. We providing the 'Definitive Clearing' that major franchises often rush through, giving you a longer-lasting restoration of your home's flow for a comparable or lower total investment."
    },
    {
      q: "How to unclog a main sewer line without a plumber?",
      a: "Attempting to unclog a main sewer line without a 'Master-Aligned Technical Force' is a Level-5 risk for a Flower Mound property. Common consumer tools like 'Hand-Drill Snakes' lack the 'Mechanical Inertia' to reach main-line nodes (often 50-100 feet deep) or clear heavy roots. Furthermore, 'DIY Jetting' without 'HD Optic Mapping' can lead to 'Inadvertent Soil Surcharge'—forcing hundreds of gallons of water into a shattered pipe beneath your foundation, initiated 'Heave' or 'Slab Failure.' \n\nIn Flower Mound's expansive clay soil, a main line clog is frequently a symptom of 'Joint Displacement.' Attempting to force a tool through can permanently sever a pipe that could previously have been 'Spot-Repaired.' Our Flower Mound experts use 'Industrial Grade machinery' and 'Profilometry' to ensure a safe, permanent clearing. Protect your Flower Mound home value from DIY catastrophe—let our licensed specialists provide the 'Technical Security' and 'Flow reclamation' your home deserves."
    },
    {
      q: "How long does it take to fix a main sewer line clog?",
      a: "A professional 'Main Line Reset' in a Flower Mound residence typically takes 1.5 to 3 hours, depending on the 'Obstruction Density.' This 'Time Node' includes the 'Initial Optic profile' (to see the clog), the 'Mechanical Knockdown' (the clearing), and the 'Final Verification pass' (to ensure no debris remains). If the blockage is caused by 'Calamitous Root Intrusion' requiring multiple hydraulic passes, the process may be extended. \n\nOur Flower Mound dispatchers understand that your time is valuable, but we prioritize 'Structural Quality.' We stay on your property until the internal diameter of the line is successfully returned to its original engineered specification. Unlike 'Quick-Fix' plumbers who are in and out in 30 minutes, we providing the 'Permanent Exclusion' of the clog. We provide a 'Zero-Hassle' experience for the Flower Mound 75028 community, ensuring your drainage biology is perfectly restored before we leave the site."
    },
    {
      q: "Is sewer jetting worth it?",
      a: "Yes, sewer jetting is an exceptionally high-value investment for Flower Mound homeowners because it provides the only method for 'Total Internal Diamater Reclamation.' While standard mechanical cables (snakes) just punch a small hole through a blockage, sewer jetting uses 'High-Velocity Hydraulic Force' to wash the pipe walls surgically clean. It removes the 'Bio-Film' and 'sludge scale' that attract new clogs, effectively resetting the lifespan of your line. \n\nIn Flower Mound homes that suffer from recurring clogs due to 'Soil movement' or 'Tree intrusion,' jetting is the preferred 'Long-Term Solution.' It prevents the need for catastrophic 'Trench-and-Replace' repairs which can cost $10k+. By investing in a 'Hydraulic Reset' today, you are performing a 'Strategic Property Maintenance' that increases your home's resiliency. Our Flower Mound experts recommend jetting as the 'Definitive Answer' to drainage chronic failure."
    },
    {
      q: "How often should the main sewer line be cleaned?",
      a: "For the average residence in Flower Mound, TX, we recommend a 'Systemic Main Line cleaning' every 3 to 5 years. However, if your property is located in high-risk zones with mature oak or willow trees (like parts of 75022), or if your line has known 'Sediment Bellies' from foundation shifting, a 2-year 'Maintenance Audit' is preferred. \n\nRegular cleaning in Flower Mound prevents the 'Clogging Cycle' where small amounts of debris aggregate into hard, unmanageable 'Stone-Scale.' This 'Preventative Force' keeps the 'Hydraulic Back-Pressure' low, which protects your under-slab pipe joints from leaking and destabilizing your home's foundation. Our Flower Mound technicians can perform a 'Health Profiling' of your lines and provide a custom 'Flow Persistence Plan' tailored to your home's specific usage and site conditions. Stay ahead of the 'Failure Curve' with professional maintenance."
    },
    {
      q: "What is the average lifespan of a sewer line?",
      a: "In Flower Mound, the lifespan of a sewer line is heavily dependent on the 'Material Node' and the 'Soil-Cycle Stress.' Modern PVC lines are engineered to last 75-100 years, but North Texas 'Clay Heave' can cause joints to separate within 20 years. Legacy 'Cast Iron' lines common in older Dallas-area developments typically last 40-50 years before internal corrosion initiates 'Flow Restricted.' \n\nOur Flower Mound specialists use 'HDCamera Audit' to verify the 'Remaining Life Cycle' of your pipes. By performing regular 'Reclamation services' like hydro-jetting, we can often extend a pipe's life by removing the corrosive sewer gases and biological sludge that eat away at the material. We provide 'Systemic Life-Extension' for Flower Mound homes, helping you manage your sub-surface assets with professional precision. Don't wait for a collapse—get a 'Structural Audit' from our Flower Mound force today."
    },
    {
      q: "How much does it cost to clean roots out of a sewer line?",
      a: "Cleaning tree roots from a Flower Mound sewer main typically costs $450 to $950, including the 'Mandatory Camera Profilometry.' Roots are a 'Mechanical Structural intrusion' that require high-torque cutters or high-pressure 'Vibratory nozzles' to extract. Unlike soft clogs, roots often require multiple 'Scouring passes' to ensure the joint is successfully cleared and the pipe wall is not damaged in the process. \n\nIn Flower Mound, where roots seek out moisture in foundation micro-cracks during the hot TX summers, root removal is the most common emergency service we provide. We provides 'Permanent Root Exclusion' advice and can apply 'Chemical Growth Inhibitors' as an add-on after the mechanical clearing. This 'Complete Joint Security' plan ensures your pipes remain clear of intruders for the long term. Protect your Flower Mound property architecture with the master-level root extraction force of our specialized technicians."
    },
    {
      q: "Why is snaking a drain so expensive?",
      a: "The investment in professional drain snaking for a Flower Mound home reflects the 'Technical Risk Management' and 'Industrial Equipment' required. A standard plumber isn't just 'poking a hole'; they are deploying $5,000+ specialized cable machines, risk-managing the 'Structural Integrity' of your pipes, and providing the 'Biohazardous Containment' needed to keep your home sanitary. \n\nIn Flower Mound, where 'Foundation Movement' makes pipes brittle, the technician must apply 'Torsional Force' with surgical precision to avoid snapping a cable or shattering a joint deep beneath your slab. Our Flower Mound force provides 'Master-Aligned precision'—we take the risk, we provide the industrial tools, and we guarantee the result. When compared to the $15,000 cost of a 'Full Excavation' to fix a broken line, a $400 professional snake and 'Technical flow Audit' is an exceptionally low-cost structural insurance policy for your residence."
    },
    {
      q: "Who pays for a clogged sewer line?",
      a: "In Flower Mound, TX, the 'Financial Responsibility' for a clogged sewer line is determined by the 'Failure Node' relative to the 'Property Line.' If the clog occurs within the 'Residential lateral' (roughly between your house and the street curb), the homeowner is responsible for the reclamation. If the blockage is in the city's main terminal line (usually beneath the street center), the Flower Mound Public Works department typically covers the clearing. \n\nHowever, the city will not clear a backup until a 'Licensed Technician' verifies that the failure is on the city's side. Our Flower Mound team provides the 'Surgical Verification' and 'Optic Audit' needed to prove where the clog is. We help you avoid paying for a city-side problem by providing the 'HD Evidence' required by local officials. If the clog is on your side, we provides common-sense, transparent 'Success-Based' pricing to get your Flower Mound home back in operation immediately."
    },
    {
      q: "What to do if the main sewer line is blocked?",
      a: "The moment you suspect a blockage in your Flower Mound main line, you must enter 'Systemic Protocol Mode.' Turn off your washing machine, dishwasher, and faucets immediately. Locate your 'Foundation Cleanout' (the 4-inch PVC cap in your yard near the slab) and see if water is overflowing. If so, your failure is 100% in the main line. Call our Flower Mound hotline at (877) 792-1410 for 'Priority Emergency Response.' \n\nDo not use a plunger, as this provides 'Zero Hydraulic Displacement' for a main line clog and can force waste into your home's'Vertical Vents.' Our Flower Mound force provides 'Instant Knockdown' of the blockage. We use 'High-Velocity Clearing tech' to restore your home's sanitary envelope without digging up your yard. We are the 'First-Response Leaders' for the Flower Mound 75028 area, providing the 'Permanent Exclusion' of drainage threats 24/7/365."
    },
    {
      q: "How does a plumber clear the main sewer line?",
      a: "A master-aligned Flower Mound plumber clears a main sewer line using a 'Surgical Three-Phase Process.' Phase 1 is the 'Diagnostic Audit'—using a waterproof HD camera to profile the blockage. Phase 2 is the 'Mechanical Intervention'—deploying a high-torque rotating cable or a 4,000 PSI hydro-jetting nozzle to 'Hydro-Mechanically Scrub' the pipe walls. Phase 3 is the 'Post-Verification Profile'—a second camera pass to ensure the pipe is returned to its 'Engineered Specifications.' \n\nIn Flower Mound, we never clear a line 'blind.' Profiling the line is the only way to ensure we don't worsen a 'Structural Breach' or 'Joint Separation.' We provides the 'Elite Technical precision' required to clear the line safely and permanently. Whether it's removing roots, grease, or heavy aggregate, our Flower Mound specialists use the 'Total Force' reclamation approach that is the gold standard for North Texas foundation drainage."
    },
    {
      q: "Does homeowners insurance cover clogged sewer lines?",
      a: "As previously stated, 'Maintenance Clearing' of a clogged sewer line is rarely covered by standard Flower Mound insurance policies. However, the 'Collateral Damage'—such as replacing water-saturated baseboards, flooring, and cabinets caused by the backup—is often covered if you have a 'Sewer Backup Endorsement' (SBE). This is a critical technical rider that every homeowner in the 75028 and 75022 area should carry. \n\nOur team works directly with Flower Mound adjusters, providing the 'Technical Failure report' and 'Optic audit' items needed to justify your claim. We helps you move from 'Crisis to Recovery,' ensuring that your 'Sanitary Remediation' is handled according to EPA and local North Texas codes. We provides the 'Surgical Documentation' that makes your home's 'Loss Recovery Plan' clear for your insurer, maximizing your potential for a fair payout on covered backups."
    },
    {
      q: "How much does Roto Rooter charge to unclog a main sewer line?",
      a: "Corporate entities like Roto Rooter typically charge starting from $450 to $850 for main line unclogging in the Flower Mound market. While they are a national brand, their 'Standardized Pricing Node' can often lead to higher costs for simple clearances or 'Upselling' for repairs you may not need. Many Flower Mound residents prefer our 'Local Master Force' because we provide a more personalized, 'Technical Profiling' for about the same investment. \n\nWe provide 'Total Transparency'—you see exactly what our camera sees in your Flower Mound foundation lines. We providing the 'Definitive Clearing Result' without the national franchise overhead, ensuring that your home's 75028 or 75022 drainage architecture is restored to its peak engineered capacity. We are the 'Honest Force' of North Texas plumbing, focusing on 'Total Reclamation' and long-term systemic health rather than high-volume turnaround."
    },
    {
      q: "How long does it take a plumber to unclog a main sewer line?",
      a: "For a specialized Flower Mound 'Reclamation Technician,' unclogging a main line usually takes 1.5 to 2.5 hours. This includes the 'Setup and profiling node' (30 mins), the 'Clearing Intervention' (45 mins), and the 'Final Verification Profile' (30 mins). If your Flower Mound home has multiple blockages or if we must perform 'Vertical Stack' clearing from the rooftop, the process can take longer. \n\nOur Flower Mound team provides a 'Zero-Latency dispatch,' arriving on-site with the industrial tools needed to handle the problem in a single visit. We don't believe in 'Quick-Fix patches.' We providing the 'Surgical Result' that ensures your lines stay clear for years, not days. Join the hundreds of Flower Mound homeowners who trust our 'EfficiencyMaster' protocols to restore their home's hydraulic biology with minimal disruption to their daily lives. We are the 'Speed-to-Flow' leaders in North Texas."
    },
    {
      q: "Will insurance pay for a new sewer line?",
      a: "Insurance will typically only pay for a 'New Sewer Line' in a Flower Mound home if the failure was caused by a 'Covered Peril'—such as an explosion, high-impact surface collapse, or in some specific cases, foundation heave that literally shears the pipe. Standard 'Wear-and-Tear' or 'Root invasion' failures are almost always excluded from standard homeowners policies. \n\nHowever, our Flower Mound force is an expert in 'Technical documentation.' If your sewer line failure is the result of a sudden 'Structural Shift' in the Flower Mound clay soil, we provides the 'Geotechnical and Optic proof' needed to present a case to your insurer. By performing a 'Horizontal Failure Audit,' we identify the exact cause and timing of the breach. While we cannot guarantee coverage, we provide the 'Elite Evidence' that gives you the best statistical chance of a covered 'Trenchless Reset' or line replacement. Security is our first priority for your property's value."
    },
    {
      q: "How often should you have your sewer line cleaned out?",
      a: "Standard Flower Mound residences should have a 'Systemic Main Line reclamation' every 3 to 5 years. In North Texas, the environmental stresses—specifically 'Soil Moisture variance'—cause pipes to shift and joints to open, which leads to aggregation of debris. If your home has had even one backup, you have entered the 'Maintenance Node' where biannual audits are recommended. \n\nBy keeping your Flower Mound pipes'scoured and clear,' you are preventing the 'Hydraulic Back-Pressure' that turns a small joint leak into a massive foundation-destabilizing event. Our Flower Mound technicians provides a 'Custom System Health Plan' for your home's'hydraulic harmony,' ensuring that your 75028 or 75022 property remains a safe, functional asset. Don't wait for your bathroom to overflow—let our Flower Mound force provide the 'Preventative Clearing' that keeps your family safe and your foundation secure."
    },
    {
      q: "How much to clear a blocked sewer?",
      a: "In the professional opinion of our Flower Mound master-aligned technical force, clearing a main sewer line should be priced as a 'Success-Based Reclamation' rather than a 'Trip fee.' In Flower Mound, expect an investment of $450 to $900 for a total 'Structural Reset' of the line. This includes the HD camera auditing before and after the clearing. \n\nBeware of 'Discount' services offering $99 clearances; these often skip the camera audit (meaning they're'operating blind') and use low-torque tools that don't actually remove the blockage, but just'poke a hole' through it. In Flower Mound's sensitive foundation environment, 'Cutting Corners' on drainage is a recipe for a $20,000 foundation repair. We provides 'Price Transparency' and 'Mechanical Certainty,' ensuring that you pay for a 'Definitive Resolution' once, rather than paying for a 'Quick Patch' four times. Excellence in drainage is the hallmark of our Flower Mound service model."
    },
    {
      q: "How long does a main sewer line last?",
      a: "The 'Engineered Lifespan' of a sewer line in a Flower Mound home is determined by the 'Material Node.' Modern PVC/ABS lines are 75+ year assets, while legacy 'Cast Iron' in North Texas often hits a 'Critical Failure Point' at 40-50 years due to internal rusting and soil-induced joint stress. 'Orangeburg' pipes, which were tar-paper based, are terminal within 30 years and should be replaced immediately. \n\nOur Flower Mound force provides 'Master-Level Life-Cycle Audits.' Using our HD optic profilometry, we can tell you exactly where your pipes are on their 'Failure Curve.' By performing regular 'Hydraulic Reclamation' (hydro-jetting), we remove the corrosive gases that eat away at cast iron, extending your home's 'Hydraulic Biology' by decades. We help you move your Flower Mound property from a 'State of Crisis' to a 'Managed Asset,' ensuring your subterranean infrastructure remains reliable and robust for the long term."
    },
    {
      q: "How to unblock main drain line?",
      a: "To unblock a main drain line in a Flower Mound residence, you must adopt a 'Force Reclamation approach.' This starts with an 'Optic failure Audit' to Identify the 'Obstruction Node' (is it roots, grease, or a structural breach?). Then, we deploy either a 'High-Torque mechanical cutter' or a 4,000 PSI 'Hydro-Jetting unit' to restore the line's internal diameter. \n\nDo not use a garden hose or retail-grade snake. These lack the 'Hydraulic Displacement' and 'Mechanical sheer' needed to reach a sub-surface main line deep beneath a Flower Mound foundation. We provides the 'Industrial Force' needed for a total flow restoration. Our Flower Mound team serves the 75028 area 24/7/365, providing the 'Permanent Exclusion' of blockages and protecting your home from biohazardous back-pressure. Call us at (877) 792-1410 for 'Priority Displacement' of your blockage. We are the 'Final Answer' to Flower Mound's most stubborn drainage failures."
    }
  ];

  // Split faqs into two columns (11 and 11)
  const firstCol = faqs.slice(0, 11);
  const secondCol = faqs.slice(11);

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
            Sewer Line Expert Knowledge Base
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-500">Main Line Intelligence</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium italic">
            Deep technical insights into identifying, removing, and preventing catastrophic sewer failures in Flower Mound, TX.
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
              <FAQItem key={idx + 11} item={item} index={idx + 11} />
            ))}
          </div>
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-amber-600 to-amber-700 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase tracking-tighter">
              Multiple Drains Backing Up?
            </h3>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium italic">
              Don't wait for a foundation failure. Our Flower Mound specialists provide 24/7 main line reclamation.
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

export default SewerLineInfo;
