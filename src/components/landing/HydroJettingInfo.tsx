import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone } from "lucide-react";

/**
 * HydroJettingInfo Component - "Expert Knowledge Base" section
 * Contains 30 deep-content Q&As (>150 words each) in a 2-column layout.
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
        CLICK TO CALL A HYDRO JETTING EXPERT NOW
      </a>
    </div>
  </div>
);

const HydroJettingInfo = () => {
  const faqs = [
    {
      q: "How much does hydro jetting typically cost?",
      a: "The cost for professional hydro jetting services in Flower Mound typically ranges from $450 to $1,500, depending on the 'Surcharge complexity' and the access nodes of your property's plumbing architecture. This investment covers the deployment of specialized hydraulic machinery that generates 4,000 PSI of cleaning force, industrial-grade nozzles, and HD optic profilometry. \n\nIn Flower Mound specifically, costs are influenced by the 'Volume of Obstruction'—such as heavy calamitous root intrusion or decaphobic grease scale—and whether the technician must access the line through a rooftop vent or a foundation cleanout node. While a basic snaking might cost $150, it only provides a temporary pathway. Hydro jetting provides a 'Structural Reset' of the line's internal diameter, effectively multiplying the lifespan of your sewer service. Our Flower Mound dispatch team provides a formal technical audit upon arrival to ensure your 'Flow Recovery Plan' is matched to your home's specific hydraulic requirements."
    },
    {
      q: "Is hydro jetting worth the cost?",
      a: "Yes, hydro jetting is an exceptionally high-value investment for Flower Mound homeowners because it provides the only mechanical method for 'Total Drainage Reclamation.' Traditional mechanical cables (snakes) are aggressive but limited; they simply bore a small hole through a blockage, leaving behind 90% of the debris and wall scale. Hydro jetting, conversely, uses 'High-Velocity Scouring' to remove every trace of biological sludge, mineral deposits, and intrusive tree roots from the pipe's internal wall. \n\nIn the Flower Mound 75028 and 75022 ZIP codes, whereexpansive clay soil constantly shifts sewer lines and creates bellies where sediment collects, hydro jetting is the only way to perform a 'Permanent Exclusion' of recurring blockages. It prevents the need for catastrophic 'Trench-and-Replace' repairs which can cost $10,000 or more. By restoring your lines to their original engineered capacity, you are protecting your home's foundation from water saturation and your family from the biohazardous risk of sewage backup. Our Flower Mound specialists treat hydro jetting as a structural insurance policy for your property's envelope."
    },
    {
      q: "How much does Roto Rooter charge for hydro jetting?",
      a: "Standard national corporate entities like Roto Rooter often quote hydro jetting services in the Flower Mound area starting at $600 to $900, but these prices frequently fluctuate based on 'Access Node Surcharges' and emergency dispatch fees. While they provide a recognizable brand, many Flower Mound residents find that a 'Localized Force' like ours provides more technical precision and context for the specific soil-related stresses common in North Texas foundation plumbing. \n\nOur Flower Mound team focuses on 'Arachnological Precision,' ensuring that we identify the exact node of failure using HD optics before any high-pressure water is introduced. Unlike large franchises that may prioritize volume, our 'Surgical Response' is tailored to provide a 'Structural Reset' that is code-compliant and recognized by local adjusters. We believe in providing 'Maximum Hydraulic Clarity' without the franchise markup, using the latest 4000-PSI reclamation technology to ensure your home's main line is permanently cleared of every structural threat."
    },
    {
      q: "Is hydrojetting bad for pipes?",
      a: "Hydro jetting is not bad for pipes when performed by a 'Master-Aligned Technical Force' who understands 'Material Resilience Nodes.' Modern PEX, PVC, and high-stability cast iron lines are engineered to withstand the 4,000 PSI pressure produced by our machinery. However, if your home has 'Legacy' plumbing—such as orangeburg (tar paper) or extremely brittle, thin-walled clay tiles—high-pressure water can worsen existing structural fractures. \n\nThis is why we provide a 'Mandatory Optic Audit' for every Flower Mound property before we initiate jetting. We use HD cameras to verify the 'Mechanical Integrity' of your pipes. If we identify 'Loss of Wall Density' or 'Separated Joints,' we adjust our pressure nodes or recommend a 'Zero-Intrusion' lining solution instead. Our goal in Flower Mound is the 'Permanent Flow Reset' of your system, not its destruction. Trust the experts who use high-resolution moisture mapping and optic profiles to protect your home's hydraulic biology. We providing the 'Safe-Pressure' guarantee for every 75028 and 75022 residence."
    },
    {
      q: "Can I do hydro jetting myself?",
      a: "No, 'DIY Hydro Jetting' is a high-risk activity that lacks the 'Mechanical Safety Guards' and technical profiling needed to protect a Flower Mound home's foundation. While some hardware stores rent 'Sewer Jetter' attachments for standard pressure washers, these lack the 'Gallons-Per-Minute' (GPM) volume required for true line reclamation. Without high GPM, the water simply sprays the blockage without providing the 'Hydraulic Displacement' needed to clear it. \n\nMore importantly, a DIY attempt lacks the 'HD Optic Mapping' required to see if a line is collapsed. If you jet a collapsed line, you can force hundreds of gallons of water into your home's foundation 'Soil Envelope,' causing 'Foundation Heave'—a catastrophic structural failure. Our Flower Mound specialists provide the 'Technical Security' of a licensed response. We use industrial-grade 18-GPM pumps and specialized 'Vibratory Nozzles' that a consumer-grade unit cannot match. Protect your Flower Mound property value by choosing a professional 'Structural Reset' over a 'High-Risk DIY' gamble."
    },
    {
      q: "How long will hydro jetting last?",
      a: "A professional hydro jetting service in a Flower Mound residence typically lasts between 3 to 5 years, depending on the 'Systemic Usage Node' and environmental factors like tree root growth. Because hydro jetting performs 'Total Line Restoration'—removing the biological 'bio-film' that attracts new waste—the lines stay clear much longer than snaked lines, which often re-clog within 6 months. \n\nIn Flower Mound homes that have large oak or willow trees near the sewer main, the 'Root Intrusion Cycle' is much faster. We recommend a 'Maintenance Audit' every 24 months for these high-risk properties. By keeping the pipes'scoured and clean,' you prevent the 'Hydraulic Back-Pressure' that causes leaks to form in your foundation's plumbing joints. Our Flower Mound team provides a 'Persistence Guarantee' for every reclamation project, giving you the peace of mind that your home's waste management system is performing at its peak engineered capacity for years to come. We are the 'Longevity Experts' of North Texas drainage."
    },
    {
      q: "Does hydro jetting require digging?",
      a: "No, one of the primary technical advantages of hydro jetting for Flower Mound property owners is that it is a 'Zero-Excavation reclamation' method. We access your home's plumbing architecture through existing 'Control Nodes'—namely the foundation cleanout or the rooftop vent stacks. This means we can perform a total 'Surgical Reset' of your main line without disturbing your landscaping, driveway, or pool deck. \n\nIn Flower Mound, where expansive clay soil makes every excavation a permanent change to the foundation's'Soil Equilibrium,' avoiding digging is vital for structural stability. Our high-pressure hoses are flexible enough to traverse multiple 90-degree bends and reach failure points deep beneath your slab. We provide 'Trenchless Intelligence,' identifying the blockage through optic mapping and removing it through hydraulic force. This 'Non-Invasive Intervention' is the preferred method for the high-end residences of 75022 and 75028. We protect your home's aesthetics while restoring its function."
    },
    {
      q: "Can I use a pressure washer for hydro jetting?",
      a: "While a standard residential pressure washer can technically be fitted with a 'Jetter Kit,' it is 'Hydraulically Insufficient' for the requirements of a Flower Mound sewer main. Sewer cleaning requires a specific balance of 'High Pressure' (PSI) and 'High Volume' (GPM). Most consumer-grade pressure washers provide only 2 to 3 GPM, which lacks the 'Scouring Inertia' needed to displace heavy sediment or cut through North Texas root intrusion. \n\nOur Flower Mound industrial hydro-jetting units produce upwards of 12 to 18 GPM. This high volume creates a 'Water Wall' that physically pushes debris out of the line while the pressure scours the walls. Using a standard pressure washer often just'drills' another small hole in the blockage, similar to a snake, and can lead to the hose becoming 'Mechanically Trapped' in the line. Our Flower Mound experts use 'Force-Calibrated' machinery that ensures 'Complete Displacement' of every obstruction. Don't waste your weekend on a 'Low-Power' attempt—let us provide the 'Total Force' reclamation your home deserves."
    },
    {
      q: "What are the signs I need hydro jetting?",
      a: "In a Flower Mound home, the need for professional hydro jetting is signaled by a 'Systemic Flow Failure' across multiple fixtures. If you experience gurgling sounds from your toilets when the washer drains, slow-draining nodes in the guest bathroom, or recurring 'Biological Odors' near your floor drains, your pipes have likely suffered a 'Line-Diameter Reduction' from sludge or scale. \n\nAnother 'Red-Zone' sign is a sewer backup that recurs within a few months of being'snaked.' This indicates that the snake only provided a temporary relief point and the structural obstruction remains. In Flower Mound, where soil shifting can cause 'Sewer Bellies' that trap waste, hydro jetting is required to clear the 'Aggregated Sediment.' Our Flower Mound dispatchers are ready to perform a 'Vertical Risk Audit' of your drains. If your home's 'Hydraulic Profile' shows signs of chronic restricted flow, we provide the 'Immediate Intervention' needed to prevent a catastrophic backup and safeguard your foundation's integrity."
    },
    {
      q: "Is hydro jetting covered by insurance?",
      a: "In Flower Mound, TX, standard homeowners insurance (HO-3 or HO-B) typically does not cover the 'Maintenance Cost' of hydro jetting. However, if the jetting is required as part of the 'Necessary Access' to repair a 'Sudden and Accidental' pipe burst or if it is part of the 'Remediation' of a covered sewage backup claim, it may be included in the total loss payout. \n\nBecause Flower Mound adjusters are very familiar with 'Clay-Soil Failures,' they often require a formal 'Optic failure Report' to justify any coverage related to plumbing. Our team works directly with your insurance provider, providing the 'Camera Evidence' and 'Technical Failure Audit' needed to document a claim. We help you navigate the 'Maintenance vs. Failure' nodes used by insurers to ensure you receive any benefits you are entitled to. While you should expect to pay for the reclamation as a preventative maintenance item, we provides the 'Elite Documentation' that makes your home's history clear for future 'Resale Audits' or insurance renewals."
    },
    {
      q: "Does Roto Rooter use hydro jetting?",
      a: "Yes, Roto Rooter is a national provider that utilizes hydro jetting, but their service model in the Flower Mound area is often restricted by 'Corporate Pricing Matrices' that can be significantly higher than a 'Boutique Local Specialist.' Many Flower Mound residents prefer our 'Surgical Response' because we provide 'Master-Level Oversight' on every project, ensuring that the 4,000 PSI force is managed with the care your specific foundation requires. \n\nWe provide 'Complete Transparency' in our reclamation process, showing you the 'Before and After' HD optic profilometry so you can see the 'Total Line Reset' for yourself. Larger franchises may use 'Standard nozzles' that are fast but less effective against the specific 'Calcareous Scale' common in North Texas water. Our Flower Mound team uses 'Custom-Orifice' nozzles specifically engineered for 'Maximum Scouring Efficiency' in residential lines. We provide the 'Superior Result' without the national franchise overhead, ensuring your Flower Mound home gets the 'Elite Hydraulic Care' it deserves."
    },
    {
      q: "How often should you jet your sewer line?",
      a: "For a standard Flower Mound residence, we recommend hydro jetting your main sewer line every 3 to 5 years as a 'Systemic Preventative measure.' If your property is in a high-risk 75028 or 75022 area with mature landscaping (heavy root potential) or if you provide 'High-Volume' kitchen usage (grease risk), a 2-year 'Maintenance Audit' is preferred. \n\nIn Flower Mound, where foundation movement can create 'Micro-Cracks' in plumbing joints that attract tree roots, regular jetting is the only way to achieve 'Sub-Surface Permanent Exclusion' of these intruders. By keeping the pipes'scoured and clean,' you prevent the 'Hydraulic Back-Pressure' that turns a small joint leak into a massive foundation-destabilizing event. Our Flower Mound specialists can provide a custom 'Systemic Health Plan' for your home's drainage, ensuring you stay ahead of the 'Failure Curve.' We are the 'Preventative Force' that keeps Flower Mound's most prestigious homes running smoothly 24/7/365."
    },
    {
      q: "Is hydro jetting better than snaking?",
      a: "In the professional opinion of our Flower Mound master-aligned technical force, hydro jetting is 'Superior' to snaking for 95% of residential drainage issues. Snaking is a 1950s technology that uses a rotating 'cutter' to punch a small hole in a blockage. It is 'Mechanically Incomplete'—it leaves behind the thick 'Bio-Film' and hard mineral scale that acts as a 'Catch-Node' for new clogs. \n\nHydro jetting is 'Total Reclamation.' It uses hydraulic force to physically wash the pipe walls until they are surgically clean. In Flower Mound, where 'Sewer Bellies' and root intrusions are common, a snake might clear the line for two weeks, while hydro jetting clears it for five years. Hydro jetting is also 'Trenchless Friendly,' as it exerts less physical 'Shear Stress' on the pipe walls than a heavy metal cable can. For Flower Mound homeowners who want a 'Definitive Resolution' rather than a 'Quick Patch,' hydro jetting is the only logical choice. We provide the 'Full System Reset' that traditional snaking simply cannot achieve."
    },
    {
      q: "Why pour vinegar down the drain in October?",
      a: "The 'Vinegar in October' trend is a 'Homeowner Myth' that suggests a seasonal chemical flush will prevent winter clogs. While vinegar is a weak acid that can temporarily disrupt 'Alkaline Scalp' in a sink trap, it is 'Hydraulically Insignificant' for your Flower Mound home's main sewer line or a serious 'Failure Node.' Vinegar cannot melt grease, cut tree roots, or remove 'Mineralized Scale' from deep beneath your foundation. \n\nIn Flower Mound, if you are concerned about 'Winter Preparedness,' you need a professional 'Hydraulic Audit' and 'Hydro Jetting Reclamation' before the first freeze. Our Flower Mound specialists use 'Precision Mechanical force,' not household condiments, to protect your home. We provide the 'Arachnological Level' of cleaning that ensures your pipes are surgically clear for the high-usage holiday season. Don't trust a kitchen ingredient to manage your home's 'Hydraulic Security.' Let our Flower Mound experts provide the 'Permanent Exclusion' of blockages through industrial-grade hydro-mechanical scouring."
    },
    {
      q: "What is the 135 rule in plumbing?",
      a: "The '135 Rule' is a technical safety node used in Flower Mound plumbing to prevent both 'Biological Growth' and 'Thermal Scalding.' It dictates that your water heater should be set to 135°F to ensure that bacteria like Legionella cannot colonize the tank, while your 'Operational Node' for mixed water at the faucet should be regulated by 'Thermostatic Mixed Valves.' \n\nWhile not directly related to hydro jetting, maintaining your 'Thermal Nodes' is part of our comprehensive 'Vertical Risk Audit' for Flower Mound homes. High water temperatures combined with professional hydro jetting ensure that your 'Sanitary Envelope' is protected from both the inside and the outside. Our Flower Mound technicians provide a 'Complete Systemic Calibration'—checking your heater, your pressure regulators, and your drain flow to ensure your 75022 or 75028 residence is operating within safe, engineered margins. We provide the 'Technical Harmony' required for a high-performance modern home. Protective maintenance is the foundation of our Flower Mound service."
    },
    {
      q: "Does hydro jetting have any disadvantages?",
      a: "The only 'Technical Disadvantage' to hydro jetting in a Flower Mound home occurs if the 'Failure Logic' is misapplied to an already collapsed or 'structurally terminal' pipe system. If your pipes have already lost their 'Wall Integrity' (specifically old, thin-walled clay or perforated Orangeburg), 4,000 PSI of water can cause the line to bypass its 'Mechanical Threshold' and collapse further. \n\nThis is why our Flower Mound team provides a 'Mandatory HD Optic Audit'—we never jet blind. By profiling the line first, we eliminate the risk of 'Collateral Damage.' For structurally sound pipes, there are no disadvantages—only the benefits of 'Total Line Restoration.' Some homeowners worry about the 'Investment Node' (the price), but when compared to the $10,000 cost of a 'Full Excavation Repair,' hydro jetting is the most cost-effective decision you can make for your Flower Mound property. We provides the 'Surgical Response' that maximizes your 'Drainage ROE' (Return on Effort), ensuring a permanent end to your hydraulic threats."
    },
    {
      q: "How much is drain jetting per hour?",
      a: "In the Flower Mound market, professional drain jetting is rarely billed by the hour; it is typically priced as a 'Lump-Sum Reclamation' ranging from $450 to $900 for a standard residential main line. Hourly billing is 'Unreliable Node Management' because it creates a conflict between speed and quality. Our Flower Mound team provides a 'Success-Based Quote' that covers the 'Total Restoration' of the line, regardless of how many passes with the jetting nozzle are required to achieve 'Surgical Clarity.' \n\nThis includes the 'Mandatory Camera profiling' before and after the service. Billing per hour often leads to'Incomplete Scouring' as technicians rush to stay within a budget. We providing the 'Definitive Result'—we stay on your Flower Mound property until your lines meet our 'Master-Aligned Technical Standards.' Whether it takes one hour or three, you pay for the 'Permanent Exclusion' of the clog. This is the only way we provides 'Elite Service' to the 75028 and 75022 communities. Transparency and Excellence are our primary core values."
    },
    {
      q: "How do I unclog my main sewer line?",
      a: "To properly unclog a main sewer line in a Flower Mound home, you must move beyond 'Passive Dissolution' (liquid cleaners) and adopt 'Hydraulic Force Reclamation.' If you have sewage backing up into the lowest tub or shower in your home, your 'Main Exit Node' is blocked. You should immediately call our Flower Mound emergency dispatch at (877) 792-1410 to initiate an 'Instant-Knockdown' of the backup. \n\nWe don't just 'poke a hole' in the clog. We perform a 'Mandatory Optic Audit' to see if the clog is caused by 'Mechanical Intrusion' (roots) or 'Aggregated Scale.' Then, we deploy our 4000-PSI 'Hydro Jetting units' to perform a 'Total Line Reset.' This is the only way to ensure the clog doesn't return in a week. Our Flower Mound specialists provide 'Zero-Latency Response' to the 75028 area, reclaiming your home's 'Hydro-Sanitary Control' and protecting your foundation from biohazardous saturation. Don't guess with your home's main artery—get the master-level force of a professional Flower Mound reclamation."
    },
    {
      q: "How much do plumbers charge for hydro jetting?",
      a: "Localized Flower Mound master-aligned plumbers typically charge between $450 and $1,200 for a comprehensive 'Hydro Jetting Line Reclamation' project. This reflects the 'Technical overhead' of maintaining $50,000+ jetting trailers, HD optic arrays, and the highly trained technicians required to manage 4,000 PSI safely beneath your foundation. \n\nIn Flower Mound residences, we provide a 'Value-Integrated Quote' that includes the 'Before-and-After Profilometry.' While some 'Discount' services may offer jetting for $300, they often skip the camera audit, which is like 'Operating in the dark.' You could be jetting a collapsed pipe and destroying your foundation. Our Flower Mound service focus on 'Structural Security'—we use our 'Surgical Response' to ensure your pipes are cleared without risk. When you hire our Flower Mound experts, you are paying for 'Mechanical Certainty' and the 'Permanent Exclusion' of drainage threats from your 75022 or 75028 home's envelope. Excellence is never the cheapest option, but it is always the most economical in the long run."
    },
    {
      q: "Why do plumbers not like Drano?",
      a: "Plumbers in Flower Mound and throughout the industry strongly advise against 'Chemical Liquid Drain cleaners' like Drano for three specific 'Technical Reasons.' First, they are 'Hydraulically Ineffective' against the serious clogs (roots, aggregate, heavy scale) found in main lines. Second, they are 'Thermally Aggressive'—the chemical reaction creates heat that can soften or melody the glue in PVC joints, leading to foundation leaks. Third, it creates a 'Bio-Chemical Safety Hazard' for the technician who eventually has to come and fix the line. \n\nIf you have used Drano and the clog remains, you now have a pipe full of 'Corrosive Acid' deep beneath your Flower Mound foundation. If that pipe breaches, the acid initiates 'Soil Compaction' and foundation damage. Our Flower Mound team provides 'Mechanical Reclamation' through hydro jetting—the only safe, code-compliant way to clear a line. We provide the 'Permanent Exclusion' of chemicals from your system, ensuring your 'Hydraulic Biology' remains healthy and your home's integrity is never compromised by 'Quick-Fix' fluids."
    },
    {
      q: "Can you do hydro jetting yourself?",
      a: "As stated previously, 'DIY Hydro Jetting' in a Flower Mound residence is a 'Level-5 Technical Risk.' Without industrial-grade 'GPM Displacement' and 'HD Optic profilers,' you are throwing high-pressure water into a 'Biological black box.' If your Sewer Main has a 'Joint Separation' or a 'Collapse Node'—a common occurrence in shifting North Texas clay soils—you will inadvertently blast hundreds of gallons of water into the soil beneath your slab. \n\nThis 'Surcharge of Moisture' can lead to 'Foundation Heave,' causing thousands of dollars in structural cracking. Furthermore, the specialized 'Rotating Nozzles' used in professional jetting cost $500 to $1,500 each; a cheap hardware store nozzle will simply spin in place without providing 'Reclamation Inertia.' Our Flower Mound specialists provide the 'Surgical Clarity' and 'Force Mitigation' needed to restore your home's flow safely. We provides 'Elite Technical Security' for the Flower Mound 75028 and 75022 communities. Leave the high-pressure hydraulic projects to the masters."
    },
    {
      q: "Can hydro jetting damage old pipes?",
      a: "Hydro jetting can damage 'Terminal Life-Cycle pipes'—specifically those that have already reached a state of 'Mechanical Failure.' This includes extremely corroded 'legacy cast iron' that has lost more than 60% of its wall density or 40-year-old clay tiles that have already shattered. However, for 99% of Flower Mound homes, hydro jetting is the 'Safest Mechanical Clear' available because it uses 'Hydraulic Scouring' rather than the 'Torsional Stress' of a metal snake. \n\nOur Flower Mound dispatchers always perform a 'Mandatory Optic Audit' before we activate our 4,000 PSI node. If our camera shows that your pipes are in a 'High-Risk' state, we will adjust our pressure settings or recommend a 'Zero-Invasive Lining' instead. This 'Surgical Precision' is why we are the most trusted 'Hydraulic Force' in Flower Mound. We don't just 'blast water'; we manage 'Line-Integrity.' If your home is in the 75028 ZIP and has older plumbing, our 'Horizontal Failure Audit' will tell you exactly what your pipes can handle before we begin. Security is our first priority."
    },
    {
      q: "How long does hydro jetting take?",
      a: "A professional 'Hydro Jetting Reclamation' for a standard Flower Mound main line typically takes 1.5 to 3 hours. This 'Time Node' includes several distinct phases: the 'Initial Optic Audit' (30 mins), the 'Hydraulic Scouring' passes (45-60 mins), and the 'Post-Reclamation Verification' camera pass (30 mins). If the line has 'Catastrophic Root Intrusion' or 'Decaphobic Grease build-up,' additional passes may be required to achieve 'Surgical Clarity.' \n\nIn Flower Mound, where precision is paramount, we never rush the 'Post-Audit.' We stay until the internal pipe wall is successfully returned to its engineered state. Unlike 'Quick-Snake' services that are in and out in 20 minutes, we provide a 'Total Line Reset.' We understand that your time in the 75022 area is valuable, but the 'Structural Integrity' of your foundation's drainage is our focus. We provide a 'Zero-Hassle Response' that leaves your home's hydraulic biology better than we found it. We are the 'EfficiencyMasters' of North Texas plumbing."
    },
    {
      q: "Can a pressure washer do sewer jetting?",
      a: "Technically, yes, but for the Flower Mound residential market, it is 'Hydraulically Inadequate.' Sewer jetting requires a massive 'Water Volume' (GPM) to have any real 'Displacement Force.' A home pressure washer usually provides only 2.5 GPM, which is like 'spitting into a gale' when trying to move 50 pounds of aggregated sewer sludge or 5 feet of oak roots. \n\nProfessional Flower Mound jetting trailers use 12 to 18 GPM. This 'High-Volume Stream' creates a 'Jet-Sled Effect'—the water itself pulls the nozzle forward and provides the 'Kinetic Energy' needed to wash the pipes clean. A low-volume pressure washer often results in the hose becoming 'Stuck' in the clog or simply 'pinpointing' a hole through the debris without clearing the walls. Our Flower Mound team uses 'Industrial Force' to provide 'Total Reclamation.' Don't settle for a 'Low-Power' attempt that doesn't fix the underlying structural issue. Get the 'Master-Level Result' from our Flower Mound specialized technicians today."
    },
    {
      q: "How long does a hydrojet last?",
      a: "As an 'Engineered Result,' a professional hydro jetting service in Flower Mound lasts significantly longer than any other drain clearing method. In a well-maintained home, you can expect 'Zero-Blockage Performance' for 3 to 7 years. The reason for this 'Systemic Longevity' is that hydro jetting removes the 'Micro-Texture' on the pipe walls where new clogs begin to aggregate. \n\nBy scours the line surgically clean, we remove the 'Catch-Nodes' for grease and hair. In Flower Mound residences that are prone to 'Sewer Bellies' due to North Texas soil movement, regular hydro jetting is the only way to avoid 'Sediment Consolidation.' We are the 'Longevity Specialists' of the 75022 and 75028 communities. We help you move your home's plumbing from a 'State of Crisis' to a 'Managed Asset.' Our 'Persistence Guarantee' ensures that your investment in 'Hydraulic Clarity' provides a massive ROI (Return on Investment) for your property's future structural health."
    },
    {
      q: "What kind of clogs does hydro jetting remove?",
      a: "Our Flower Mound hydro-jetting force is designed to remove every major category of 'Structural Hydraulic Obstruction.' This includes: 1) 'Calamitous Root Intrusion' (where oak roots have invaded the pipe nodes), 2) 'Scale and Silt Aggregation' (hard mineral deposits from North Texas hard water), 3) 'Decaphobic Grease scale' (solidified cooking oils), and 4) 'Biological Sludge.' \n\nThere is almost no biological or mineral obstruction that can withstand our 4,000 PSI scouring force. In Flower Mound, we frequently handle 'Legacy Failures' that have survived multiple snaking attempts. Hydro jetting is the 'Nuclear Option' for drainage—it provides the 'Total Displacement' of the blockage and returns the line to its original 'Flow-Node' capacity. If you have a clog that 'remains' despite your local plumber's best efforts, call our Flower Mound experts at (877) 792-1410. We provide the 'Definitive Resolution' using the most advanced hydro-mechanical reclamation tools available in the 75028 ZIP code."
    },
    {
      q: "Is hydro jetting messy?",
      a: "No, a professional Flower Mound 'Hydro Jetting Reclamation' is a remarkably clean and 'Sanitary Procedure.' Our trailers are engineered with 'Sealed-Pass Nodes'—meaning the high-pressure water and the extracted debris stay inside the pipe system or the localized extraction zone. We almost always access the system through your 'Exterior Cleanout,' which is located outside your home's living envelope. \n\nEven if we must use an indoor access point (like a roof vent), we use 'Floor-Shield' protocols and 'Containment Barriers' to ensure your home's finishings are 100% protected. We are not just plumbers; we are 'Structural Specialists' who respect the prestige of Flower Mound homes. Unlike 'Snaking' which often brings up wet, biohazardous metal cables across your carpet, hydro jetting is a 'Hydraulic-Loop' system. We provides the 'Surgical Response' that leaves your home's interior untouched while your sub-surface plumbing is radically improved. Cleanliness and Technical Force are not mutually exclusive in our Flower Mound service model."
    },
    {
      q: "How often should hydro jetting be done?",
      a: "For the average Flower Mound property, we recommend a 'Systemic Jetting Reclamation' every 3 to 5 years. However, 'Hydraulic Biology' is unique to every home. If your 75028 property has 'Vertical Stack' issues or is part of a multi-generational household with 'High-Grease throughput,' a 2-year cycle is more appropriate. \n\nRegular jetting in Flower Mound prevents 'Sediment Consolidation'—the process where soft debris turns into hard 'Stone-Scale' that can no longer be removed without digging up the pipes. By maintaining your 'Flow-Node Clarity,' you are extending the operational life of your entire sewer system by decades. Our Flower Mound technicians can perform a 'HD Optic Profile' and tell you exactly how your pipes are 'Trending.' We provide the 'Strategic Maintenance' needed to avoid catastrophic failure. We are the 'Guardian Force' for Flower Mound's drainage infrastructure, providing the 'Permanent Exclusion' of drainage surprises."
    },
    {
      q: "How much to charge for drain jetting?",
      a: "If you are a Flower Mound property manager or a resident looking at competitive quotes, 'Drain Jetting' should be priced based on the 'Technical result' rather than just a 'Trip Fee.' Professional, master-aligned services in North Texas should charge between $450 and $900 for a residential main line jetting project. This price should always include a 'Before-and-After Video Verification.' \n\nIf a service quotes less than $400, they are likely skipping the camera audit or using low-volume pressure washers that are 'Hydraulically Inadequate.' In Flower Mound, 'Cutting Corners' on drainage is the fastest way to foundation damage. We provides 'Price Transparency' with a focus on 'Structural Security.' We help you invest in 'Hydraulic Reliability' for your 75022 or 75028 home, ensuring that you pay for the 'Reset' once, rather than paying for a 'Patch' ten times. Excellence in drainage is the hallmark of a well-managed Flower Mound home."
    },
    {
      q: "Should I hydrojet my sewer line?",
      a: "If your Flower Mound home is more than 10 years old, or if you have experienced even a 'Single Sewage Backup,' the answer is a definitive 'Yes.' More than just an 'Unclogging' service, hydro jetting is a 'Structural Wellness' procedure for your home's foundation. In Flower Mound, where 'Sewer Bellies' and joint shifts are common, keeping your lines 'Surgically Clear' prevents the 'Pressure Spikes' that lead to under-slab leaks and catastrophic foundation heave. \n\nDon't wait for your house to become uninhabitable due to a biohazardous backup. A simple 'Hydraulic Reclamation' from our Flower Mound team provides a 'Total Reset' of your system's diameter. Join the hundreds of Flower Mound residents in 75028 and 75022 who have reclaimed their home's'hydraulic harmony' with our specialized service. We provide the 'Elite Response' and 'Permanent Exclusion' of clogs that keeps target properties safe and operational 24/7/365. Call us at (877) 792-1410 and let us provide the 'Technical Security' your family deserves."
    }
  ];

  // Split faqs into two columns (15 and 15)
  const firstCol = faqs.slice(0, 15);
  const secondCol = faqs.slice(15);

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
            Hydro Jetting Expert Knowledge Base
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-500">Hydraulic Intelligence</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium italic">
            Deep technical insights into identifying, removing, and preventing catastrophic drain failure in Flower Mound, TX.
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
              <FAQItem key={idx + 15} item={item} index={idx + 15} />
            ))}
          </div>
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-amber-600 to-amber-700 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase tracking-tighter">
              Gurgling drains or slow flow?
            </h3>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium italic">
              Don't wait for a catastrophic backup. Our Flower Mound specialists provide 24/7 high-pressure line reclamation.
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

export default HydroJettingInfo;
