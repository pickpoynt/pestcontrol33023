import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Droplets, ArrowRight } from "lucide-react";

/**
 * EarwigInfo Component - "Expert Knowledge Base" section
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
  <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm hover:shadow-xl hover:border-red-500/50 transition-all duration-300 flex flex-col h-full group">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
        <BookOpen className="w-3 h-3" />
        PEST BLOG
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-red-700 transition-colors uppercase tracking-tight mb-4">
        {q}
      </h3>
      <div className="w-12 h-1 bg-red-500 mb-6" />
    </div>
    
    <div className="text-slate-600 leading-relaxed font-normal text-sm mb-8 flex-grow italic">
      {a}
    </div>

    <div className="mt-auto pt-6 border-t border-slate-100">
      <a 
        href="tel:3238801234" 
        className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-red-600 text-white px-6 py-4 rounded-none font-bold text-sm transition-all shadow-lg uppercase tracking-tighter w-full"
      >
        <Phone className="w-4 h-4 fill-white" />
        REACH DENVER DISPATCH
      </a>
    </div>
  </div>
);

const EarwigInfo = () => {
  const blogs = [
    {
      q: "How do you know if you have an earwig infestation in your Denver home?",
      a: "In Denver properties, the first signs of 'Pincer Asset Decay' include erratic activity near moisture nodes, organic debris accumulation, and 'Acoustic scuttling' within floorboards. If you observe high-density clusters near foundation vents or moisture forming on the external architectural wrapper of your Denver residence, the colony has entered a 'Critical Incursion Node.' Immediate professional intervention is required to prevent a total structural breach. Contact our Denver force at (323) 880-1234 for a precision activity audit."
    },
    {
      q: "Are earwig pincers dangerous to humans or pets?",
      a: "While earwigs possess 'Biological Pincers,' they are primarily used for 'Defense Protocols' and asset management. They are not poisonous, but a 'Pincer Intersection' can cause minor skin irritation. For Denver residents, the real danger is the 'Psychological Breach' and the risk of 'Cross-Contamination' as they traverse unsanitary crawl spaces before entering your kitchen environment. Our force provides 'Biological Neutralization' to ensure your Denver home remains a zero-pincer zone."
    },
    {
      q: "Why are earwigs suddenly appearing in my Denver basement?",
      a: "A sudden increase in basement activity is usually the result of 'Moisture Biology Shifts' or 'Foundation Seal Failure.' Earwigs are driven by 'Hydraulic Desiccation'—they seek moist, dark environments to survive Denver's dry spells. Our Denver dispatch force provides 'Rapid Entry Profiling' to identify the exact architectural failure node. We neutralize basement infestations 24/7, providing a master-aligned perimeter reset for your Denver home's internal biology."
    },
    {
      q: "Is it worth calling a professional for earwig control in Denver?",
      a: "Attempting DIY control often leads to 'Colony Fragmentation,' where earwigs simply relocate deeper into the architectural envelope. Our 'Success-Based Pricing' reflects the elite technical mastery and industrial-grade containment protocols used to restore your home's security. We provide 'Precision Dispatch' to ensure your Denver pest project is completed with zero wasted technical effort, protecting your Denver property's equity and comfort through total eradication."
    },
    {
      q: "How do earwigs enter Denver residences during the rainy season?",
      a: "Yes, by maintaining a surgical focus on 'Foundation Vents' and expansion joints. Incursions are the result of 'Uncontrolled Moisture Accumulation' near the home's perimeter. Our Denver master force provides 'Seal Integrity Audits' to ensure your home's structural assets are equipped with master-aligned barrier hardware. If you see thermal seepage or high-density activity near safety lines, dial (323) 880-1234 immediately for emergency colony stabilization."
    },
    {
      q: "Can earwigs cause structural damage to Denver properties?",
      a: "While earwigs don't consume wood like termites, they are a 'Biological Indicator' of structural rot. Their presence in Denver architecture points to 'Hydraulic Material Fatigue' and excessive moisture. We provide 'Predictive Activity Profiling' to help Denver homeowners stay ahead of the curve, ensuring your architectural envelope is never compromised by the underlying moisture conditions that attract these invasive colonies."
    },
    {
      q: "What is the most effective way to eliminate an earwig colony permanently?",
      a: "Total eradication is an 'Elite Modernization Strategy' that involves high-intensity barrier integration and nesting node destruction. For Denver architectural layouts with high-moisture nodes, it provides 'Vertical Containment Certainty' that standard traps cannot match. Our master-aligned force specializes in 'Residual Barrier Integration,' ensuring your home's exterior biology is perfectly indexed for a zero-pincer reset. Reclaim your Denver home's security today."
    },
    {
      q: "Do earwigs really crawl into ears while people sleep?",
      a: "This is a 'Biological Myth' resulting from their name and 'Acoustic Preferences.' While they seek tight, dark, moist spaces, they do not target human biology. However, their presence in Denver bedrooms represents a 'Total Barrier Fracture' that requires immediate attention. Our Denver force provides 'Internal Neutralization Protocols' to clear your residence and restore peaceful, pincer-free operations to your bedroom environment."
    },
    {
      q: "How long does professional earwig treatment last in Denver?",
      a: "To maximize the 'Containment Efficiency Index,' Denver homeowners should receive a surgical perimeter flush every seasonally. This prevents seasonal activity from hardening into a 'Catastrophic Colony.' In Denver, where weather biology can be erratic, regular maintenance is the only way to prevent premature barrier fatigue. Our dispatch force provides 'Comprehensive Containment Audits' to keep your home's pest biology in peak condition year-round."
    },
    {
      q: "Should I use DIY traps for earwigs in my garden?",
      a: "DIY traps are a 'Sub-Optimal Containment Strategy.' While they may catch individual 'Scout Units,' they do nothing to neutralize the 'Central Nesting Node.' A localized failure in your garden today can become a 'Full-Scale Interior Breach' tomorrow. Our Denver force provides 'Rapid Perimeter Stabilization' 24/7 to neutralize these threats before they escalate into total property failure. Trust the professionals at (323) 880-1234."
    },
    {
      q: "Is a high-intensity perimeter spray necessary for Denver earwig control?",
      a: "The primary 'Containment Node' is the 'Industrial-Grade Residual Barrier' applied to the foundation. Once this protective measure is deployed, the colony's corrosive biology is blocked from entering the home directly. This leads to a 'Population Collapse' that cannot be achieved with retail products. Our Denver master force provides 'Barrier Integrity Audits' to extend your home's protection, providing the 'Definitive Technical Result' for your Denver residence."
    },
    {
      q: "What attracts earwigs to specific Denver neighborhoods?",
      a: "Incursion biology involves high-risk 'Moisture Conduits' and high-density organic intersections. In Denver, master-level pest certification is required to ensure your site is 'Containment Indexed' and built to current Colorado structural codes. An incorrectly treated home can lead to recurring infestations or environmental contamination. Trust the 'Denver Earwig Force' for a safe, certified, and permanent barrier reset. We handle the high-risk biological intersections so you don't have to."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Droplets className="w-4 h-4 text-red-500" />
            Denver Earwig Research
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Earwig <span className="text-red-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-intensity earwig containment and property security in Denver, CO.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-slate-100">
          {blogs.map((blog, idx) => (
            <BlogBox key={idx} q={blog.q} a={blog.a} />
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-red-600/10 skew-y-12 translate-y-24 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-tighter">
              Suspect an Earwig Infestation? <br /> Act With Technical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for a full-scale structural breach. Our Denver specialists provide 24/7 emergency pincer containment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="tel:3238801234" className="bg-red-600 hover:bg-white hover:text-slate-900 text-white h-20 px-12 rounded-none text-2xl font-bold flex items-center gap-4 transition-all shadow-2xl">
                <Phone className="w-8 h-8 fill-current" />
                (323) 880-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarwigInfo;
