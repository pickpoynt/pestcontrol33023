import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone } from "lucide-react";

/**
 * PipeBurstInfo Component - "Expert Knowledge Base" section
 * Contains 25 deep-content Q&As (>150 words each) in a 2-column layout.
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
        CLICK TO CALL A PIPE BURST EXPERT NOW
      </a>
    </div>
  </div>
);

const PipeBurstInfo = () => {
  const faqs = [
    {
      q: "How much does it cost to have a plumber fix a burst pipe?",
      a: "The cost to have an emergency pipe burst specialist in Flower Mound fix a ruptured line typically starts at $300 for a basic mechanical isolation and can scale up to $4,000 or more if the failure involves sub-slab plumbing or main service lines beneath your property. This investment reflects the 'Structural Urgency' and high technical specialized equipment required to perform 'Mechanical Flood Containment' and precision line restoration. \n\nIn the Flower Mound area, costs are influenced by the 'Accessibility Node' (e.g., is the burst in a wall-void or deep sub-slab foundation) and the volume of water extraction required. While standard plumbing services might quote lower for a simple drip, a true 'Hydraulic Crisis' requires industrial-grade extraction and high-stability re-piping materials that are engineered for North Texas soil movements. Our specialized service provides a definitive resolution by targeting the failure node directly and providing a formal structural reset of the affected line. When you hire our Flower Mound specialists, you aren't just paying for a patch; you are paying for the total removal of the hydraulic threat from your home's envelope."
    },
    {
      q: "What to do immediately after a pipe bursts?",
      a: "Immediately after a pipe bursts in your Flower Mound home, your first 'Tactical Priority' is to locate and close the 'Main Water Isolation Valve.' This is usually located near the front of the home in a meter box or in the garage. Every second the water remains under high pressure, it is saturating your home's 'Biological Host' materials—like drywall and flooring—leading to catastrophic structural undermining and mold colonization. \n\nOnce the flow is isolated, you must call our Flower Mound emergency dispatch at (877) 792-1410 for 'Instant-Knockdown' extraction. Do not attempt to 'duct tape' a high-pressure line failure; the mechanical force will simply blow the adhesive off. Open all lower faucets to drain the 'Residual Head' from your plumbing system and turn off your home's electrical nodes if the burst is near wall outlets or appliances. Our team provides an 'Arachnological Level' of rapid containment, moving through your property to identify every hidden pocket of moisture using high-resolution thermography before it can compromise your home's stability."
    },
    {
      q: "What temperature should I keep my house at to stop the pipes from bursting?",
      a: "In the North Texas climate specifically for Flower Mound residents, you should maintain your home's internal thermal node at a minimum of 65°F (18°C) during any freeze event where temperatures drop below 20°F. While 55°F is often cited as a general rule, it doesn't account for the 'Wind Chill Node' in uninsulated wall-voids where pipes are most vulnerable to 'Passive Freezing.' Keeping the thermostat slightly higher ensures enough 'Secondary Heat Transfer' reaches the inner wall cavities where plumbing lines reside. \n\nFurthermore, for Flower Mound homes built with peripheral plumbing nodes (pipes in outside walls), you must open vanity cabinet doors to allow 'Ambient Airflow' to reach the pipes. This simple step prevents the 'Cold Pocket Syndrome' that leads to static ice formation and eventual hydraulic rupture. Our Flower Mound technicians recommend a 'Red-Zone Alert' whenever a freeze lasts more than 6 consecutive hours. We provide 'Thermal Guard' audits to identify hidden uninsulated voids in your Flower Mound attic or crawlspace, fortification protocols that significantly reduce your risk of a catastrophic burst during the Texas winter."
    },
    {
      q: "Is a burst water pipe an emergency?",
      a: "A burst water pipe in a Flower Mound home is a Level 1 Structural Emergency and should be treated with immediate technical intervention. A standard high-pressure residential plumbing line can dump over 100 gallons of water per minute into your home's infrastructure. This volume of water creates 'Hydraulic Erosion' beneath your foundation, saturates wall-voids with structural moisture, and initiates a 'Rapid Mold Cycle' that can render a property uninhabitable within 48 to 72 hours. \n\nIn Flower Mound, where homes are built with expansive clay foundations, the sudden addition of hundreds of gallons of water can cause 'Foundation Heave'—literally lifting your home and cracking the slab. This is why we provide a 'Zero-Latency Dispatch' service. Waiting even a few hours to see if the problem 'updates itself' is a high-risk strategy that allows the failure node to grow exponentially more expensive to remediate. We provide the 'Permanent Exclusion' of the water threat, performing a rapid structural reset of your home's plumbing architecture to ensure total safety."
    },
    {
      q: "Does homeowners insurance cover a burst water pipe?",
      a: "In Flower Mound, TX, the majority of standard homeowners insurance policies (HO-3 or HO-B) will cover the 'Resultant Damage' from a burst pipe, but not always the pipe repair itself. This means the insurer will traditionally pay for the 'Cost of Extraction,' 'Structural Drying,' and 'Restoration' of your floors, walls, and cabinetry. However, the 'Failure Node' (the specific piece of pipe that burst) is often considered a 'Maintenance Item' and may be excluded unless you have a specific plumbing endorsement. \n\nBecause Flower Mound is a high-risk area for plumbing issues due to soil volatility, local adjusters are very familiar with these claims. Our team works directly with your insurance provider to provide formal 'Thermal Mapping' and 'Hydraulic Failure Reports' required to justify a 'Sudden and Accidental' claim. We help you navigate the 'proximate cause' requirements used by adjusters to ensure you receive the maximum possible benefit toward your structural restoration. Don't guess with your financial security—get the professional 'Failure Audit' your insurance company needs to move your claim forward immediately."
    },
    {
      q: "Can I fix a burst pipe myself?",
      a: "No, a high-pressure pipe burst in a Flower Mound home is not a DIY project. It is a 'High-Security hydraulic project' that requires specialized technical knowledge, licensed mechanical capacity, and the ability to work with 'medically significant' water volumes. Attempting a 'DIY patch' using hose clamps or epoxy is a dangerous strategy that almost always results in a 'Secondary Rupture' that is even more violent than the first. \n\nFurthermore, if you attempt a self-repair and it fails, your insurance company may deny any subsequent claims for water damage, citing 'Unauthorized Mechanical tampering.' Our Flower Mound team provides the 'Arachnological Level' of surgical precision needed to clear the failure without damaging your home's broader infrastructure. We use 'Permanent Reset' technology that makes the 'DIY risk' completely unnecessary. Trust the specialists who have the technical 'Node-Focused' experience to perform a professional, code-compliant restoration that is recognized by insurers and local Flower Mound inspectors alike."
    },
    {
      q: "Can a handyman fix a leaking pipe?",
      a: "While a handyman in Flower Mound can fix minor 'Drip Nodes' (like a slow kitchen faucet leak), they are not legally or technically equipped to handle an 'Emergency Pipe Burst' or a 'High-Pressure Failure.' In Texas, any work on the 'Structural Plumbing Envelope' must be performed by a Licensed Master Plumber or under their direct supervision. Handymen lack the specialized'Sonic Mapping' and 'Thermal Extraction' equipment needed to find hidden water pockets that lead to mold growth. \n\nMore importantly, a handyman's'repair' is rarely backed by a 'Transferable Structural Guarantee' or accepted by homeowners insurance for reimbursement. Hiring an uncertified person for a hydraulic goal is a 'High-Risk' decision that leaves your home's foundation and your financial interests unprotected. Our Flower Mound specialists provide the 'Elite Response' that includes formal documentation of the repair, ensuring your home's integrity is protected and your insurance standing remains secure. Don't settle for a 'Patch' when you need a 'Permanent Reset' from a local Flower Mound expert."
    },
    {
      q: "How many faucets should you drip during a freeze?",
      a: "During a Flower Mound freeze event, you should drip every faucet that is served by a plumbing line running through an exterior wall or unheated attic space. This is not about 'preventing water from freezing' (moving water can still freeze), but rather about 'Pressure Relief.' When water freezes inside a pipe, it expands; this expansion creates a 'Hydraulic Surge' between the ice blockage and the faucet. By leaving the faucet dripping, you provide a 'Relief Valve' that allows this pressure to escape before it bursts the pipe walls. \n\nIn the Flower Mound ZIP codes (75022, 75028, etc.), we recommend a steady 'pencil-lead' stream for both the 'Hot' and 'Cold' sides of every peripheral faucet. You should also ensure that your outdoor hose bibbs are disconnected and covered with thermal nodes (insulated covers). If your Flower Mound home has an attic-mounted water heater or manifold system, these require special 'Node-Focused Attendance' during 15-degree weather. We provide 'Freeze-Armor' consultations to identify your home's specific plumbing vulnerabilities before the next North Texas storm hits."
    },
    {
      q: "Can pipes burst if the house is too cold?",
      a: "Yes, the colder the interior of your Flower Mound home, the higher the 'Blockage Node' risk for your plumbing. Pipes don't just 'freeze'—they fail due to the massive hydraulic pressure caused by ice expansion. In an unheated house, the 'Passive Thermal Barrier' provided by your insulation will eventually reach equilibrium with the outside air, allowing ice to form inside the pipes even deep within your wall cavities. \n\nIn Flower Mound, this often happens to homeowners who leave for vacation without setting their thermostats to a 'Home-Guard' mode of at least 65°F. A home that drops below 40°F internally is in the 'Tactical Danger Zone.' Our technicians specialize in 'Pre-Emptive Insulation' and 'Heat-Trace Installation' for Flower Mound homes that are prone to freeze failures. We provide 'Deep-Tissue' thermal scans to find where your home's thermal node is failing, allowing us to fortify your plumbing architecture against the specific climate stressors of North Texas. Don't leave your foundation to chance—let our Flower Mound experts provide the 'Permanent Exclusion' of freeze-risk today."
    },
    {
      q: "Is it safe to use a hair dryer on frozen pipes?",
      a: "Using a hair dryer to thaw a frozen pipe in a Flower Mound home is 'Technically Possible' but must be done with extreme professional caution. While it is safer than using an open flame (which is a Level-5 Fire Risk), it doesn't address the 'Blockage Node' that may have already reached critical pressure. If you attempt to thaw a pipe that has already suffered a 'Pinhole Rupture,' the moment the ice melts, you will face a 'High-Pressure Surge' that can flood your home in seconds. \n\nOur Flower Mound technicians recommend against 'DIY Thawing' because it targets only the 'Symptom' and not the 'Failure Point.' We use 'Controlled Thermal Induction' and 'Sonic Mapping' to identify if a pipe has already breached before we even begin the thawing process. This is the only way to prevent a catastrophic flood during the recovery phase. If you discover a frozen pipe in your 75028 residence, do not guess; call our Flower Mound emergency hotline immediately. We provide the 'Surgical Clarity' needed to restore your home's flow without initiating a hydraulic burst."
    },
    {
      q: "What would be considered a plumbing emergency?",
      a: "In the realm of professional plumbing in Flower Mound, an 'Emergency' is defined as any hydraulic event that creates an immediate 'Loss of Envelope Control' or a 'Life-Safety Risk.' This includes high-pressure pipe bursts, catastrophic slab failure, total main-sewer line backups into the living space, and the smell of raw natural gas from water heaters. These are 'Level 1 Node Failures' that cannot wait until morning. \n\nWaiting even 8 hours for a 'standard' plumber can result in thousands of gallons of water penetrating your foundation and walls. We treat every 'Active Breach' as a confirmed emergency. Our Flower Mound dispatch center is specifically calibrated for these 'Crush-Response' events, providing a master plumber to your 75022 or 75028 address in minutes, not days. We provide 'Instant-Knockdown' of the water flow and initiate the 'Structural Reset' immediately. If you have standing water, hissing pipes, or a spinning water meter, you are in an emergency state. Call us now and let our Flower Mound specialists reclaim your home's stability."
    },
    {
      q: "Can I put duct tape on a leaking pipe?",
      a: "No, 'Duct Tape' is a 'Zero-Value' solution for any high-pressure pipe leak or burst in a Flower Mound home. Residential plumbing lines operate at pressures between 50 and 80 PSI (Pounds per Square Inch). Standard adhesives are not engineered to withstand this 'Mechanical Shear' and will fail almost immediately, often creating a 'Shatter Node' where the leak becomes a pressurized spray that causes even more damage to your home's interior. \n\nEven 'Emergency Repair Tape' (silicone-based) is only intended as a 'minutes-long' temporary measure while you run to the isolation valve. It is not a repair. In Flower Mound, we have seen 'DIY taped' pipes lead to massive insurance denials because they were cited as 'Improper Repair' attempts. Our Flower Mound team provides the 'Permanent Exclusion' of the leak using 'Mechanical Solder' or 'Industrial PEX compression'—the only methods recognized by local codes and insurance adjusters. Don't trust a $5 roll of tape to protect your $500,000 Flower Mound home. Get a professional 'Structural Reset' from the experts who know how to handle high-pressure failures properly."
    },
    {
      q: "What type of pipes are most likely to burst?",
      a: "In Flower Mound and the surrounding North Texas cities, the most common 'Failure Nodes' are found in older copper lines (Type M thin-wall) and improperly installed PEX systems. Copper pipes suffer from 'Electrolysis'—a chemical reaction between the metal and the expansive clay soil of Flower Mound—which thins the pipe wall until it ruptures under standard pressure. Furthermore, 1980s-era 'Polybutylene' pipes are notorious for catastrophic joint failure and have been largely excluded from modern home insurance policies. \n\nOur Flower Mound specialists have handled hundreds of failures in both 'Legacy' and 'Modern' systems. We treat every 'Failure Point' as a case study in your home's architecture. We don't just replace the bad pipe; we perform a 'Vertical Risk Audit' of your entire plumbing system to identify other thinning nodes before they too become ruptures. This is the only way to achieve 'Systemic Resistance' to water damage in your Flower Mound property. We provide the technical force needed to upgrade your home's'hydraulic biology' to the latest structural standards, ensuring your foundation remains dry and secure."
    },
    {
      q: "What is the 135 rule for plumbing?",
      a: "In professional 'Hydraulic Engineering' for Flower Mound homes, the 135 rule refers to the 'Maximum Tolerance' for pressure and temperature nodes in a residential system. Specifically, it dictates that a home's PRV (Pressure Reducing Valve) should never exceed an 80 PSI 'Operational Node,' and the water heater should be set to 135°F to prevent both 'Thermal Scalding' and 'Biological Colonization' (like Legionella). \n\nExceeding 80 PSI puts immense 'Mechanical Stress' on every joint and valve in your Flower Mound residence, significantly increasing the likelihood of a 'High-Pressure Burst.' If your water pressure feels 'extremely strong,' you are likely in the 'Tactical Risk Zone' for a major plumbing failure. Our Flower Mound technicians provide a 'Systemic Pressure Audit'—installing and calibrating industrial-grade PRVs to ensure your home's plumbing architecture stays within safe engineering margins. We provide the 'Mechanical Calm' needed to prevent the next burst before it starts. Protecting your flow is our mission in the 75028 community."
    },
    {
      q: "When to call an emergency plumber?",
      a: "You should call our Flower Mound emergency plumber (877) 792-1410 the moment you lose 'Envelope Control'—this means anytime water is flowing where it shouldn't be and you can't stop it, or when a 'Complete Loss of Service' occurs. Specific 'Red-Zone' events include: high-pressure pipe bursts, sewage backing up into the Bathtub, the smell of gas, or a total loss of hot water during a freeze event. \n\nIn Flower Mound, waiting 'until business hours' is the most expensive decision a homeowner can make. Water damage is 'Time-Weighted'—the longer the saturation node exists, the deeper the structural penetration. We treat every 3:00 AM call with the same technical urgency and master-level expertise as a mid-day appointment. We provide 'Instant-Knockdown' of the hydraulic threat and initiate the 'Structural Recovery' protocol before the first sign of mold appears. Don't allow a midnight leak to destroy your home's stability. Our Flower Mound experts are standing by 24/7 to reclaim your territory and your peace of mind."
    },
    {
      q: "How much water for a 3 day emergency?",
      a: "In the event of a catastrophic pipe burst that forces a 'Main Line Shutdown' in your Flower Mound home, FEMA and the American Red Cross recommend a minimum of one gallon of water per person per day for drinking and sanitation. For a 3-day 'Hydraulic Isolation' period, this means a family of four needs at least 12 gallons of 'Survival Node' storage. However, this doesn't account for 'Mechanical Water' needed for flushing toilets or cleaning. \n\nWe understand that being without water in the 75028 area is more than a nuisance—it's a 'Critical Failure' of your home's function. This is why our 'Rapid Restoration' protocol focuses on 'Sectional Isolation'—we bypass the burst pipe and restore water to the rest of the house as quickly as possible, usually within 2 to 4 hours of arrival. We provide the 'Technical bridge' needed to keep your household running while the permanent repairs are completed. Our goal is to minimize your 'Offline Time' while maximizing your home's'envelope security.' We are the 'Flow Recovery' experts of Flower Mound."
    },
    {
      q: "At what temperature will pipes freeze in an unheated house?",
      a: "In an unheated Flower Mound house, pipes will typically reach a 'Critical Freeze State' once the outside temperature drops below 20°F (-6°C) and stays there for more than 6 consecutive hours. While 32°F is the freezing point of water, the 'Passive Thermal Mass' of your home's insulation and walls provides a temporary buffer. However, once that buffer is exhausted, the plumbing lines in your attic and outside walls become 'Passive Hosts' for ice blockages. \n\nIn North Texas, a 'Flash Freeze' can drop temperatures from 60°F to 20°F in just a few hours. This rapid 'Thermal Shock' is what leads to the violent ruptures we see in the 75022 and 75028 ZIP codes. Our Flower Mound technicians provide 'Thermal Integrity Shields'—industrial pipe insulation and heat-trace cables—for vulnerable attic lines. We provide the 'Permanent Exclusion' of freeze-risk, ensuring your home remains technically operational even when the Texas power grid or heating system fails. Don't wait for the ice to find your weak points—get a professional 'Structural Guard' audit today."
    },
    {
      q: "How much will a plumber charge to unfreeze pipes?",
      a: "Professional pipe 'Thawing and Stabilization' in Flower Mound typically ranges from $150 to $500 for the labor and specialized thermal equipment used. This service is a 'Preventative Extraction'—it is designed to melt the ice blockages safely before they can expand enough to cause a 'Mechanical Burst.' If the pipes have already breached, the cost will scale based on the 'Restoration Requirements' of the plumbing lines and the home's infrastructure. \n\nUsing our Flower Mound specialists for 'Controlled Thawing' is a very wise investment that prevents a $5,000 flood. We use 'Induction Heating' and 'Sonic Mapping' to monitor the pipe's integrity during the thaw, ensuring that if a rupture is detected, we can perform immediate 'Isolation and Reset.' Generalist plumbers often use 'Brute Force' heat that can melody plastic pipes or start fires. We provides the 'Surgical Precision' needed to safely restore your home's flow. Don't risk your home to a DIY blow-dryer attempt; let our Flower Mound experts handle the 'Thermal Recovery' with professional technical force."
    },
    {
      q: "Should you open faucets if pipes are frozen?",
      a: "Yes, you should immediately open all faucets to 'Full flow' (both hot and cold) if you suspect your pipes are frozen in your Flower Mound home. This simple 'Tactical Move' provides two critical benefits: first, it relieves the internal 'Hydraulic Pressure' between the ice blockage and the faucet, significantly reducing the likelihood of a burst. Second, it creates a 'Mechanical Draw' that pulls warmer water toward the ice node as soon as it begins to melt, accelerating the 'Thermal Recovery' process. \n\nIn Flower Mound, where static water in the 75028 area is at high risk during storms, leaving the faucets open is your first line of 'Active Defense.' Once you have opened the faucets, call our Flower Mound emergency line (877) 792-1410 for 'Controlled Thermal Extraction.' We provide the professional guidance and technical machinery needed to thaw your pipes without causing a foundation breach. We don't just 'hope' the pipes don't burst; we manage the 'Hydraulic Stress' with master-level engineering to ensure your home stays dry. We are your 'Active Protection' force in the North Texas winter."
    },
    {
      q: "Can pipes freeze in four hours?",
      a: "Yes, in extreme North Texas weather, 'Flash Freezing' of peripheral plumbing nodes can occur in as little as 4 hours. This typically happens when temperatures drop below 15°F and are accompanied by high wind gusts that create a 'Wind-Wash Effect' in your Flower Mound home's attic or wall-voids. The wind strips the 'Thermal Boundary' from your insulation, allowing the cold air to reach the pipes with massive technical force. \n\nIn the 75022 and 75028 ZIP codes, we've seen entire manifolds freeze solid during a single evening 'Cold Front' surge. This is why 'Pre-Emptive Drip' protocols and 'Thermal Node Insulation' are so vital for Flower Mound residents. Our technicians specialize in 'Storm-Armor'—fortifying your home's most vulnerable plumbing nodes before the first snowflake falls. We provide 'Deep-Tissue' thermal audits that find the exact uninsulated 'Cold Bridges' in your home's envelope. Stopping a freeze in the first 4 hours is much easier than handling a burst on the 5th hour. Get professional 'Pre-Freeze' help from the experts who know the Flower Mound climate best."
    },
    {
      q: "Why drip faucets during freeze?",
      a: "The primary technical reason to drip your faucets during a Flower Mound freeze is 'Structural Pressure Relief.' Most homeowners mistakenly believe it is to 'keep the water from freezing,' but even moving water can freeze in 10-degree weather. The real danger is the 'Hydraulic Expansion' that happens when water turns into ice; as the ice expands, it compresses the liquid water between the blockage and the faucet, creating a massive surge of pressure (up to 3,000 PSI) that eventually 'shears' the pipe wall. \n\nBy leaving the faucet dripping, you provide an 'Open Node' for this pressure to escape. In Flower Mound, where ice-related bursts are a primary driver of winter property damage, this 'Pressure Relief' protocol is a mandatory 'Active Defense' for every homeowner. Our Flower Mound specialists provide 'Systemic Drip Training'—teaching you exactly which faucets are 'High-Risk' based on your home's specific architectural nodes. We help you turn a 'Passive Liability' into an 'Managed System' during the North Texas winter. We provide the 'Mechanical Calm' your pipes need."
    },
    {
      q: "What temperature kills pipes?",
      a: "In the professional plumbing field for Flower Mound residents, the 'Death Temperature' for residential pipes is generally considered 20°F (-6°C) for an extended period. While water freezes at 32°F, the 'Safe Node' of your home's walls and insulation usually maintains the pipes above the freezing mark as long as the outside temperature stays in the high 20s. However, once the ambient temperature hits 20°F, the 'Thermal Gradient' becomes too steep for standard North Texas insulation to repel. \n\nAt this point, static water in the pipes begins to convert to ice with 'Mechanical Force.' In Flower Mound, these 'Failure Nodes' are almost always found on the 'North-Facing' walls or in attic spaces that lack 'Passive Airflow' from the living area. Our Flower Mound technicians provider 'Hydraulic Immortality'—installing high-stability PEX lines and 'Frost-Free' hose bibbs that are specifically engineered to survive these extreme 'Thermal Stressors.' We don't just fix pipes; we 'Armor the Enclosure' of your entire home in the 75022 and 75028 ZIP codes. We provide the 'Technical Resilience' needed to survive the worst Texas has to offer."
    },
    {
      q: "Should you drip all faucets or just one?",
      a: "In a Flower Mound home during a severe freeze, you should drip every faucet that is supplied by an 'At-Risk' line—specifically any faucet located on an exterior wall or one that is served by pipes running through a cold attic or crawlspace. Dripping just 'one faucet' (like the kitchen sink) only protects that specific 'Hydraulic branch'; it does nothing to relieve the pressure in the guest bathroom or laundry room lines on the other side of the house. \n\nThink of your plumbing as a 'Network of Pressure Nodes.' Every node requires its own 'Relief Valve' to prevent a burst. In Flower Mound, where plumbing architectures can be sprawling and complex, we recommend a 'Peripheral Shield' approach—dripping every faucet on every outside wall of the house. Our Flower Mound specialists provide 'Node-Focused Checklists' for local homeowners, ensuring you don't miss a single 'Passive Line' that could become a 'Failure point.' We provide the 'Complete Enclosure' of your home's protection plan during the 75028 winter season. Comprehensive safety is the only safety we provide."
    },
    {
      q: "At what temperature should you leave your faucet dripping in the winter?",
      a: "For Flower Mound homeowners, the 'Tactical Threshold' for dripping faucets is when the forecast predicts a temperature drop to 28°F or below for more than 4 hours. While 32°F is officially freezing, the thermal mass of your Flower Mound brick and insulation usually provides enough 'Passive Guard' to keep pipes safe at that level. However, once you reach 28°F, the wind chill and duration can overcome your home's'thermal node,' leading to 'Quick-Freeze Blockages.' \n\nDon't wait for your house to feel like an icebox. If the 'Red-Zone' forecast is announced for the 75022 or 75028 areas, initiate the 'Drip Protocol' immediately. At our (877) 792-1410 hotline, we see a massive spike in 'Burst Response' calls as soon as the thermometer hits 25°F. Pre-empting the freeze is the most cost-effective decision you can make. Our Flower Mound experts provide the 'Rapid Intervention' needed if you've already missed the window and suspect a freeze. We provide the 'Mechanical Recovery' needed to prevent the burst before it destroys your property's value."
    },
    {
      q: "Should I call a plumber for a drip?",
      a: "Yes, you should call our Flower Mound specialists even for a persistent 'Drip Node'—because in the 75028 area, a 'Drip' is often the 'Early Signal' of a systemic failure. A drip isn't just wasted water; it's a 'Mechanical Breach' in a high-pressure system. Over time, that tiny breach will undergo 'High-Velocity Erosion,' widening the puncture until it becomes a catastrophic 'Pipe Burst' that floods your entire foundation. \n\nIn Flower Mound, where soil movement puts constant stress on plumbing joints, a small leak is often the 'Visible Tip' of a much larger 'Structural Iceberg.' Our technicians provide a 'Zero-Tolerance Audit'—using sonic mapping to determine if your crawlspace or slab is harbouring a larger 'Sub-Surface breach' that is feeding the drip. We provide the 'Permanent Exclusion' of the leak using 'Integrated Restoration' techniques. Fixing a $150 drip today prevents a $15,000 burst tomorrow. We are the 'Economic Engine' of preventative plumbing in Flower Mound—providing the technical help needed to stop the problem before it's even visible. Don't ignore the signs; let us reclaim your home's dry status today."
    }
  ];

  // Split faqs into two columns (13 and 12)
  const firstCol = faqs.slice(0, 13);
  const secondCol = faqs.slice(13);

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
            Pipe Burst Expert Knowledge Base
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-500">Hydraulic Intelligence</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium italic">
            Deep technical insights into identifying, removing, and preventing catastrophic pipe failure in Flower Mound, TX.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {firstCol.map((item, idx) => (
              <FAQItem key={idx} item={item} />
            ))}
          </div>
          <div className="space-y-4">
            {secondCol.map((item, idx) => (
              <FAQItem key={idx + 13} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-amber-600 to-amber-700 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase tracking-tighter">
              Hissing pipes or pooling water?
            </h3>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium italic">
              Don't wait for your foundation to heave. Our Flower Mound specialists provide 24/7 high-pressure intervention.
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

export default PipeBurstInfo;
