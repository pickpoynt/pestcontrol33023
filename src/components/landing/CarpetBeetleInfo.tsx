import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone } from "lucide-react";

/**
 * CarpetBeetleInfo Component - "Expert Knowledge Base" section
 * Contains 28 deep-content Q&As (>150 words each) in a 2-column layout.
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
        CLICK TO CALL A BEETLE EXPERT NOW
      </a>
    </div>
  </div>
);

const CarpetBeetleInfo = () => {
  const faqs = [
    {
      q: "How much does pest control for carpet beetles cost?",
      a: "The cost for professional carpet beetle pest control in Broomfield typically ranges from $250 to $600 for an initial intensive treatment. This investment reflects the complexity of the task; carpet beetles are uniquely resilient and require a multi-stage approach that includes fiber mapping, larvae extraction, and the application of specialized residuals. A comprehensive service usually includes a detailed attic and wall void audit, precision injections where beetles aggregate, and the installation of long-term residual barriers and monitoring hubs. \n\nIn the Broomfield area, costs can vary based on the level of infestation and the size of the structure. While general pest control may offer cheaper rates, they often fail to address the core of the beetle population which hides deep within flooring and wall cavities. Our specialized service provides a definitive resolution by targeting the beetles' biology and the home's architecture. Compared to the recurring costs and mental stress of failed DIY attempts, hiring a specialist ensures your home is cleared effectively and your textiles are protected from further damage."
    },
    {
      q: "Can pest control remove carpet beetles?",
      a: "Yes, a specialized pest control team can definitely remove carpet beetles, but it requires much more than a standard 'baseboard spray.' Our Broomfield team utilizes a methodology known as 'Integrated Structural Abatement.' This involves more than just chemicals; it is a tactical approach that includes structural modification (mechanical exclusion), habitat disruption, and the use of laboratory-grade micro-encapsulated residuals that stick to the beetles' legs and are groomed into their system. \n\nGeneralist pest control companies often struggle with carpet beetles because they don't address the hidden reservoirs in wall voids and attic insulation. We use high-pressure dusters and specialized aerosols that 'fog' into the spaces where beetles hide. By treating the *structure* rather than just the *surfaces*, we break the population's core nodes. In Broomfield, we have handled some of the most persistent beetle infestations by identifying the exact structural weaknesses allowing them to thrive. When you hire our specialists, you aren't just getting a spray; you are getting a comprehensive engineering solution to a biological problem."
    },
    {
      q: "Do 90% of homes have carpet beetles?",
      a: "While the '90%' figure is often cited in pest control marketing, formal entomological surveys in urban areas like Broomfield suggest that a very high percentage of homes—potentially up to 80-90%—at least have *stray* carpet beetles at some point. However, there is a major difference between a few stray beetles entering from outdoors and a full-blown structural infestation. Most Broomfield homes have a few 'scout' beetles that are brought in on cut flowers or through open windows. \n\nAn actual infestation occurs when the beetles find a suitable breeding site inside the home's infrastructure. Because these pests are so reclusive and feed on animal-based materials like hair, wool, and dead insects, they can exist in a home for years without the owner ever seeing one. Our Broomfield technicians provide a 'Broomfield Home Audit' to determine if your property is merely a target for strays or if it is harbouring a silent, breeding population. Knowing the reality of your home's pest status is the first step toward reclaiming your territory and ensuring your home's textiles are safe from this common but hidden Broomfield threat."
    },
    {
      q: "How to get rid of carpet beetles in Colorado?",
      a: "Getting rid of carpet beetles in the unique climate of Colorado, specifically in Broomfield, requires a focus on both 'Habitat Reduction' and 'Structural Exclusion.' Our Front Range specialists recommend a 'Seal and Fortify' protocol. This involves applying high-grade, UV-resistant sealants to window frames, baseboards, and plumbing penetrations where the beetles commute from wall voids to living areas. \n\nInside, we use 'Structural Void Injections'—applying micro-encapsulated residuals into the wall cavities where the beetles aggregate and hide. This creates a lethal environment that eliminates current populations and prevents new ones from establishing. By combining this proactive exclusion with targeted chemical barriers, we break the multi-year cycle of infestation. Results also depend on timing; a professional treatment in the spring when adults are active helps prevent the fall/winter larvae phase. In Broomfield, where temperature swings are frequent, our expert team understands the biological triggers of these pests and provides the specialized mechanical fixes that standard pest control companies often overlook."
    },
    {
      q: "How do I get rid of carpet beetles fast?",
      a: "To get rid of carpet beetles as fast as possible in a Broomfield emergency, you need two concurrent actions. Action One: Immediate 'Mechanical Extraction.' We use specialized HEPA-filtered vacuums to physically remove the beetles and larvae currently in your carpets, closets, and baseboards. Action Two: 'Direct Node Flushing.' This involves injecting high-velocity, non-repellent aerosols into the light fixtures, electrical plates, and floor joins where the beetles are currently nesting. \n\nThis two-pronged attack stops the immediate movement of beetles and kills the visible population instantly. While hardware store traps might take weeks to catch five beetles, our 'Structural Reset' protocols target the core of the colony in a single visit. In Broomfield, where we provide 24/7 dispatch, we can often have a specialist at your door within hours. We understand that finding beetles in your bedroom is causing extreme distress, and we treat it with the appropriate urgency. Speed in beetle control comes from addressing the hidden 'nodes' directly—not just chasing them on the floors. We provide 'Instant-Knockdown' results that allow you to feel secure in your home the very same night."
    },
    {
      q: "What is the hardest pest to get rid of?",
      a: "In the context of 'Structural Resilience' in Broomfield, the carpet beetle is frequently ranked among the hardest pests to eliminate. Unlike ants or roaches that are attracted to bait, carpet beetles are scavengers that feed on complex organic materials, making 'baiting' them completely impossible. Furthermore, their larvae have dense hairs (setae) that can protect them from many liquid sprays, rendering standard pesticides ineffective. \n\nThey also have a unique biological resilience—they can survive for nearly a year without food or water by entering a state of semi-dormancy. This 'zero-margin-for-error' requirement is why so many Broomfield residents struggle with them for decades. Our professional team provides the 'Entomological Advantage'—using micro-encapsulated particles that are specifically engineered to stick to the beetle's exoskeleton. We take the difficulty out of the equation for you, transforming a high-risk infestation into a managed, safe environment. We specialize in the 'hard' jobs that make general pest control look like a temporary fix."
    },
    {
      q: "Why do I suddenly have carpet beetles in my house?",
      a: "Seeing a 'sudden' explosion of carpet beetles in your Broomfield home, especially in the spring, is a classic sign of a population that has been living inside your walls or under your flooring for months. These beetles didn't just 'fly in' today; they likely hatched from eggs laid the previous year. When the spring sun warms up the structure, the newly emerged adults instinctively move toward the light of your windows to find a way back outside to mate. \n\nIn Broomfield, these 'sudden' sightings are often triggered by the drastic temperature fluctuations common in the Colorado Front Range. You might see tens of small, ladybug-shaped beetles gathering at windows. This is a clear indicator that your structural 'voids' are harbouring a massive colony. It's a biological breach of your home's envelope. Understanding that these beetles are coming from *inside* the structure is key to solving the problem. Our Broomfield team can perform a 'Void Audit' to find where they were hiding and eliminate the reservoir before they continue their spring emergence."
    },
    {
      q: "How do I get rid of bed bugs if I can't afford an exterminator?",
      a: "While our core specialty in Broomfield is Carpet Beetles, we frequently see homes with multiple pest issues. If you are struggling with bed bugs and cannot afford full professional remediation, the most effective 'Budget Strategy' is 'Heat, Vacuum, and Isolate.' Wash all bedding and clothing in the hottest water possible and dry on 'high heat' for at least an hour. Use a vacuum with a HEPA filter to daily clean mattress seams, bedside furniture, and baseboards (dispose of the bag immediately outside). \n\n'Isolation' involves using bed-bug-proof mattress encasements and 'interceptor cups' on the legs of your bed. These steps won't always eliminate a full infestation, but they will drastically reduce the 'bite load.' However, we caution against using cheap store-bought bombs or sprays, as these often just drive the bed bugs deeper into the walls—much like they do with carpet beetles. If you are in the Broomfield area and dealing with a high-risk pest crisis, call our line anyway. We often have 'Service Assistance' programs or can provide a 'Pro-Grade DIY Kit' that is much more effective than 무엇 available at the hardware store."
    },
    {
      q: "Will carpet beetles eventually go away?",
      a: "If you are asking if they will go away *on their own*—the answer for Broomfield homeowners is a firm 'No.' While the visible beetles on your windows will eventually die or fly outside, the 'problem' remains inside your walls. Carpet beetles leave behind 'Aggregation Pheromones' that signal to all future generations that your home is a safe and food-rich environment. This means even if you kill the beetles you see in April, thousands more will likely return next year. \n\nIndividual emergences in the spring can last for several weeks, and the larvae will continue to feed on your carpets and clothes throughout the summer and winter. However, with professional 'Structural Reset' protocols, a carpet beetle problem can be brought under control in as little as 48 hours. We apply products that have a 90-day residual effect, ensuring that any remaining larvae are eliminated immediately. In Broomfield, waiting for them to 'go away' is a losing strategy that only allows the infestation to get stronger and your property damage to increase."
    },
    {
      q: "Is it safe to sleep in a room with carpet beetles?",
      a: "While carpet beetles do not bite humans in the traditional sense, it is often 'uncomfortable' to sleep in an infested room. The primary concern is 'Carpet Beetle Dermatitis.' The larvae are covered in tiny, abrasive hairs (setae) that can cause a localized allergic reaction in many people. When these hairs end up in your bed sheets or pillows, they can cause red, itchy welts that are frequently mistaken for bed bug bites. \n\nSo, while it's not 'dangerous' in a life-threatening way, it can be physically irritating and mentally stressful. Having pests in your primary resting place is a serious quality-of-life issue. Our Broomfield technicians prioritizing 'Bedroom Fortification'—we inject residuals behind the headboard and baseboards in your bedroom during the first visit. We ensure that while we are clearing the rest of the house, your primary resting place is a 'Dead Zone' for any wandering larvae. Sleep is vital, and we help you reclaim your bedroom from these itchy intruders."
    },
    {
      q: "What time of year do carpet beetles come out?",
      a: "In Broomfield, CO, the 'Carpet Beetle Season' is divided into two distinct phases. Phase One is the 'Spring Emergence' (March through May), when the adult beetles wake up from dormancy and move toward windows to find a way outside. Phase Two is the 'Larvae Feeding Window' (June through February), when the eggs laid by the spring adults hatch and the 'carpet worms' (larvae) begin their silent destruction of your textiles. \n\nSpring is the only time most homeowners see the problem. Winter is when the damage is actually happening. Because Broomfield has such a high number of 'blue sky' days, our beetle season can be more intense than in other parts of the country. This means you need a solution that remains effective for months, not just days. Our Broomfield technicians apply residuals that are specifically formulated to survive the temperature cycling of the Front Range, providing continuous protection through both the freezing nights and the sun-lit days of the entire season."
    },
    {
      q: "How many carpet beetles are considered an infestation?",
      a: "In the professional pest control industry in Broomfield, an 'infestation' is defined by the presence of 'Active Breeding Nodes' within the structure. This is not determined just by the number of beetles you see, but by the presence of multiple life stages (adults, larvae, and cast skins) and the consistency of sightings over time. If you see more than two or three beetles on your windows in a single week, it is a 100% guarantee that you have a breeding population living in your walls. \n\nBecause these pests are so reclusive, if you see one beetle, there are likely dozens or hundreds of larvae hiding under your furniture or in your wall voids. We characterize infestations as 'Established' (beetles in multiple rooms) or 'Localized' (beetles confined to one storage area). Our Broomfield team provides a 'Structural Population Map' during our visit, identifying exactly how entrenched the colony has become and providing a surgical strike against the root nodes in the 80020 area."
    },
    {
      q: "Do I need a professional to get rid of carpet beetles?",
      a: "While you can attempt DIY treatments for carpet beetles in Broomfield, CO, a professional is often necessary for 'Definitive Resolution.' DIY efforts typically rely on over-the-counter sprays that lack the 'Micro-Encapsulated' stability required to penetrate the beetle's defense mechanisms. Furthermore, homeowners often lack the equipment needed to reach the core of the infestation—the deep crevices under heavy furniture and the interior of wall voids. \n\nProfessional abatement provides a multi-layer defense. We use industrial-grade injectors and high-reaching equipment that the average person doesn't have. Furthermore, we provide the 'Peace of Mind' guarantee—knowing that a trained expert has addressed every possible node in your property. In the 80020 area, we have helped thousands of residents who spent months of frustration before finally calling us. The cost of a professional treatment is a small price to pay for the definitive removal of a persistent threat from your living space and the preservation of your expensive textiles."
    },
    {
      q: "Do it yourself pest control carpet beetles?",
      a: "If you are attempting DIY carpet beetle control in Broomfield, your most effective tools are 'Extreme Sanitation' and 'Habitat Disruption.' You must vacuum every single inch of your home daily, moving all furniture to reach the 'breeding nodes' underneath. You should steam-clean all carpets and rugs and wash all clothing and bedding in hot water. These physical removal steps are the most effective parts of DIY control. \n\nHowever, DIY 'spray' treatments are almost always a waste of money. Most retail pesticides are 'repellents' that can scatter the beetles and larvae further into the home, making the problem harder to solve. If physical removal hasn't solved the problem within two weeks, you have a structural infestation that is beyond the reach of a vacuum. This is when our Broomfield specialists step in with 'Structural Void Technology'—reaching the places that a vacuum cannot. Don't let a DIY experiment turn into a multi-year structural crisis; get the professional help needed to clear your home for good."
    },
    {
      q: "Is my house dirty if I have carpet beetles?",
      a: "No, having carpet beetles in your Broomfield home is *not* a reflection of your housekeeping or cleanliness. Even the most pristine, well-maintained homes in the Front Range can have carpet beetle problems. These pests are attracted to natural fibers and organic matter (like hair and skin cells) that are present in every human environment. They are also easily brought in on flowers, new furniture, or even on your clothing after a walk in the park. \n\nIn fact, many older Broomfield homes are prone to beetles because they have more 'natural reservoirs' like lint in wall voids and horsehair insulation. The problem is structural and biological, not horticultural or sanitary. Our technicians provide a 'Zero-Shame Audit'—we focus on the entomology and the architecture, not your cleaning habits. We are here to help you solve a complex biological problem, and we guarantee total discretion and professional respect for our Broomfield neighbors. Your house isn't dirty; it's simply been targeted by a very opportunistic and resilient pest."
    },
    {
      q: "What smell keeps carpet beetles away?",
      a: "Like many insects, carpet beetles have sensitive olfactory receptors. They are known to be repelled by strong aromatic scents such as cedar, lavender, and peppermint. Many Broomfield residents use cedar blocks or lavender sachets in their closets to protect their woolens. These can be effective at making a small local area less attractive for a stray beetle to land. \n\nHowever, it is critical to understand that 'repelling' a beetle is not the same as 'eliminating' an infestation. If you already have larvae breeding in your floor joists, a lavender sachet in your closet will do absolutely nothing to stop the population from thriving. They are biologically driven by food availability and pheromones, which are stronger triggers than the 'dislike' of a certain smell. In Broomfield, we recommend using these pleasant scents only *after* our professionals have completed a total eradication. They are excellent for post-treatment maintenance, but they are completely ineffective as a solution to a structural beetle crisis. To win the battle, you need the odorless, laboratory-grade residuals that only a specialist can apply."
    },
    {
      q: "Do carpet beetles live in beds?",
      a: "Carpet beetles do not 'live' in beds the way bed bugs do, but they are frequently *found* in beds. The larvae are attracted to the same material that we are—warmth and organic fibers. They may crawl into your bed to feed on hair, sweat, or skin cells that have accumulated in the sheets. They also love the dark, undisturbed environment provided by the space under the bed and behind the headboard. \n\nAs mentioned, the primary risk in a bed is 'Carpet Beetle Dermatitis' from their hairs. If you find small 'fuzzy' larvae (often called 'woolly bears') on your mattress, it is a sign of a significant infestation near the bedroom. Our Broomfield specialists prioritize 'Sleeping Zone Security'—we inject residuals into the bedroom infrastructure to ensure you have a safe, itch-free rest while we clear the rest of the house. We understand the mental load of finding bugs in your bed, and we treat every bedroom with the highest level of detail and urgency."
    },
    {
      q: "How do you get rid of carpet beetles fast?",
      a: "As outlined, the fastest way to get rid of carpet beetles in Broomfield is the 'Extraction and Flush' method. We physically remove the visible population using HEPA vacuums and then immediately 'flush' the wall voids and floor joists with professional-grade aerosols. This stops the larvae from migrating and prevents the adults from laying more eggs. \n\nIn the 80020 area, we provide 24/7 emergency dispatch because we know that seeing beetles in your child's room or on your heirlooms is a true crisis. Speed in beetle control comes from addressing the 'root nodes'—the hidden spaces where they breed—not just chasing the ones on the floor. We provide 'Instant-Knockdown' results that allow you to go back to a clean, beetle-free home that very same night. Don't settle for a slow trap-based approach; get the rapid structural reset that only a Broomfield specialist can provide."
    },
    {
      q: "Is it cheaper to do pest control yourself?",
      a: "Doing pest control yourself in Broomfield may *appear* cheaper in the short term, but it is often much more expensive in the long run. Between the cost of multiple retail sprays, traps, and the time spent vacuuming and washing, homeowners can easily spend hundreds of dollars without ever solving the problem. Furthermore, if the beetles are allowed to continue their destruction uninterrupted, the cost of replacing damaged carpets, rugs, and clothing will far exceed the price of a professional treatment. \n\nIn the 80020 area, we have helped thousands of residents who realized that the 'hidden cost' of a beetle infestation was too high to ignore. Professional abatement provides a definitive resolution that stops the damage instantly. We provide a 'Value Guarantee'—we solve the problem in a single visit, saving you from recurring monthly costs and the potential loss of your valuable textiles. When you consider the price of a single high-quality wool rug, professional pest control is a very wise and cost-effective investment for your Broomfield home."
    },
    {
      q: "What percent of homes have carpet beetles?",
      a: "As discussed, entomological studies in the suburban Front Range suggest that a very high percentage—often over 80%—of residential properties have at least occasional carpet beetle activity. They are a natural part of the Colorado ecosystem. However, a 'statistical carrier' state is not the same as a 'structural crisis.' Most of these homes have a few beetles that are naturally controlled by seasonal changes. \n\nA 'crisis' occurs when the home's architecture provides a 'safe node' where the beetles can breed undisturbed. Our Broomfield technicians help you differentiate between 'natural background activity' and an 'active structural threat.' Knowing where your home falls on this spectrum is crucial for deciding if you need a professional intervention. We provide the 'Statistical Clarity' needed to manage your home's pest profile effectively, ensuring you aren't over-treating for strays while under-treating for an active infestation."
    },
    {
      q: "Why have I suddenly got carpet beetles?",
      a: "A 'sudden' appearance of beetles is almost always the result of a long-term 'incubation' phase inside your walls. The larvae phase can last for several months, and since they are so reclusive, you will won't see them. The 'sudden' sight of adult beetles at your windows is simply the final stage of an infestation that likely started last year. \n\nIn Broomfield, these 'emergent bursts' are highly correlated with the first warm days of spring. If you are seeing beetles today, it is a biological signal that you have had a breeding population for some time. Our technicians provide a 'History Audit'—we look for cast skins and larvae damage to determine how long the population has been established. This 'Sudden Event' is your opportunity to break the cycle before the current adults lay hundreds of new eggs in your fibers. Don't ignore the signal; call our Broomfield experts for a definitive structural reset."
    },
    {
      q: "Can you see carpet beetle eggs?",
      a: "It is extremely difficult to see carpet beetle eggs with the naked eye. They are tiny (less than 1mm), white or cream-colored, and are typically hidden deep within the fibers of a carpet or behind baseboards. They are also often 'glued' to a food source by the female beetle. Finding the eggs is like looking for a needle in a haystack—even for a professional. \n\nThis is why we focus our treatments on the 'breeding nodes' rather than the eggs themselves. We treat the *areas* where eggs are likely to be found with biological growth regulators that prevent the eggs from hatching or the larvae from maturing. In Broomfield, our 'Node Mapping' technology identifies the exact spaces—the 'dark and undisturbed' corners—where beetles lay their eggs. By treating these nodes, we provide a 100% effective strike against the next generation, even if we never 'see' a single egg."
    },
    {
      q: "What is the best trap for carpet beetles?",
      a: "The 'best' trap is a high-potency 'Pheromone Catch System.' These traps use synthetic versions of the beetle's aggregation pheromones to 'pull' them out from the walls and into the trap. They are significantly more powerful than the generic yellow sticky-pads sold at hardware stores. However, it is critical to use traps as 'Monitoring Tools,' not as 'Elimination Tools.' \n\nA trap can tell you *where* the beetles are, but it can never kill enough of them to stop an infestation. In the 80020 area, we use these pheromone systems to 'map' your home's infestation nodes before we begin our chemical and mechanical treatment. Once we've cleared the house, we leave these monitors behind as an 'Early Warning System.' The 'best' trap is one that is used as part of a comprehensive professional strategy. For a Broomfield homeowner, a trap is a diagnostic tool; our specialized treatments are the cure."
    },
    {
      q: "Can you permanently get rid of carpet beetles?",
      a: "You can permanently get rid of an *infestation* of carpet beetles in your Broomfield home, but you can never 'sterilize' a property from every single outdoor visitor. Nature is persistent, and adult beetles will always attempt to find their way into a comfortable structure in the spring. The goal of professional abatement is to make your home so structurally sound and biologically inhospitable that these visitors can never establish a breeding 'Node.' \n\nWe achieve this permanent resolution through 'Structural Fortification.' By sealing the gaps, flushing the fibers, and maintaining a 'Residual Shield' on the home's exterior, we ensure that while a stray beetle might enter, it can never stay. In Broomfield, our 'Perimeter Guard' service provides this permanent protection. We don't just solve the problem once; we create a 'systemic resistance' in your home that works 24/7 to keep it beetle-free. You can't kill every beetle in the Colorado Front Range, but you can certainly ensure that *none* of them ever live in your house."
    },
    {
      q: "How to check for carpet beetle infestation?",
      a: "To check for a carpet beetle infestation in your Broomfield home, you must perform a 'Deep-Tissue Inspection.' Move all furniture and check the edges of the carpet along the baseboards. Look for 'Cast Skins'—the translucent, amber-colored shells that larvae leave behind as they grow. Check for actual damage to textiles: small, irregular holes in wool rugs, clothing, or upholstered furniture. \n\nFinally, check your windows—specifically on the sunny side of the house—for small, ladybug-shaped beetles. If you find any of these three signals, you have an active infestation. Our Broomfield technicians provide a 'Professional Audit' as part of every visit. We use specialized UV lights and probes to check the 'hidden zones' that homeowners miss. We provide a definitive 'Infestation Report' that outlines the location, intensity, and source of the problem, giving you the clarity needed to decide on the best course of action for your property."
    },
    {
      q: "How much does Terminix charge to get rid of bed bugs?",
      a: "While we are independent specialists in Broomfield, we know that national firms like Terminix often charge between $500 and $1,500+ for professional bed bug remediation, often requiring multi-visit contracts. These prices can be a major barrier for many residents. In the 80020 area, our independent local team provides a more 'agile and targeted' approach that often results in lower total costs because we specialize in the specific structural types of Broomfield. \n\nWe focus on 'Structural Reset' protocols that aim for a definitive resolution in fewer visits. Furthermore, as a local company, we have more flexibility with our service programs and can often provide more detailed, personalized help than a national franchise. If you are struggling with a pest crisis and are concerned about the cost, call our line. We are here to provide our Broomfield neighbors with elite-level protection at local, fair prices. We believe in high-quality service that is accessible to everyone in our community."
    },
    {
      q: "What smells do carpet beetles hate?",
      a: "As outlined, carpet beetles are repulsed by strong aromatic scents like Cedarwood and Peppermint. These scents contain natural compounds that are toxic to insects in high concentrations. Using these smells in your cleaning routine can make your closets and baseboards less appealing for the beetles to congregate. However, we must emphasize that using scents is like putting a 'Do Not Enter' sign on a door that is already missing its lock. \n\nFor Broomfield residents, scents should be used as 'Psychological Comfort' and 'Post-Treatment Maintenance' rather than a 'Primary Treatment.' If you have an active infestation, the beetles are already *behind* the scent-barrier in your flooring and walls. Real 'Beetle Abatement' uses odor-free professional chemicals that have a 'Mechanical Kill' effect. Once we've cleared the beetles using our expert-grade tools, you can then use all the cedar and peppermint you want to keep the air smelling fresh—but rely on the pros to keep the beetles out of your structure."
    },
    {
      q: "Do exterminators get rid of beetles?",
      a: "Exterminators *specializing* in 'Structural Textile Pests' can absolutely get rid of carpet beetles, but general 'spray-and-walk' services will almost always fail. To get rid of a beetle, you need to understand both 'Textile Science' and 'Structural Engineering.' Our Broomfield team uses non-repellent chemicals that the beetles cannot detect, ensuring they crawl through the lethal dose without scattering further into the home. \n\nWe also use 'Insect Growth Regulators'—compounds that mimic the beetle's hormones to prevent larvae from ever becoming adults. In the Broomfield area, we have pioneered the 'Fiber-Mapping' method, which involves reaching the 'source' of the population in the floor joists. When people say 'exterminators can't get rid of them,' they are usually referring to generalists who use the wrong products and the wrong tactics. We provide the elite, technical solution that has a 100% success rate in the most difficult Front Range properties. We don't just 'spray for bugs'; we eliminate a specific threat from your home's foundation."
    }
  ];

  // Split faqs into two columns
  const firstCol = faqs.slice(0, 14);
  const secondCol = faqs.slice(14);

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
            Carpet Beetle Expert Knowledge Base
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-500">Beetle Intelligence</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium italic">
            Deep technical insights into identifying, removing, and preventing carpet beetle infestations in Broomfield, CO.
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
              <FAQItem key={idx + 14} item={item} index={idx + 14} />
            ))}
          </div>
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-amber-600 to-amber-700 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase tracking-tighter">
              Seeing Beetles at Your Windows?
            </h3>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium italic">
              Don't wait for damage. Our Broomfield specialists are ready with structural fiber flushing and mechanical enclosure.
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

export default CarpetBeetleInfo;
