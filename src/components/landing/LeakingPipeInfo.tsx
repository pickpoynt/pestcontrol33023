import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone } from "lucide-react";

/**
 * LeakingPipeInfo Component - "Expert Knowledge Base" section
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
        REACH A PIPE REPAIR EXPERT NOW
      </a>
    </div>
  </div>
);

const LeakingPipeInfo = () => {
  const faqs = [
    {
      q: "How much does it usually cost to fix a leaky pipe?",
      a: "The investment required for fixing a leaky pipe in Westlake, TX typically ranges from $250 to $1,200, depending on the 'Accessibility Node' and the 'Failure Amplitude.' If the leak is localized within an open wall or beneath a sink, the mechanical reclamation is relatively straightforward. However, if the breach is located within a 76262 foundation slab or behind high-value architectural finishes, costs escalate due to the technical requirement for ultrasonic detection and surgical extraction. \n\nIn Westlake, where material costs for master-grade copper or PEX supply lines are standard, the primary cost variant is 'Diagnostic Precision.' Using industrial-grade acoustic sensors to pinpoint the leak prevents unnecessary demolition, which can save a homeowner thousands in restoration. Our force provides 'Success-Based Pricing' that reflects the elite technical mastery required to handle North Texas plumbing architectures. We prioritize 'Permanent Asset Restoration' over temporary patches. For a precise structural flow audit and technical estimate, contact our dispatcher at (877) 792-1410. We handle emergency mechanical force deployment across all Westlake residential zones 24/7."
    },
    {
      q: "How much should it cost to fix a leaking pipe?",
      a: "When evaluating a pipe repair in Westlake, the cost should reflect three key pillars: 'Diagnostic Accuracy,' 'Material Durability,' and 'Liability Coverage.' A professional Westlake pipe repair should include a 'Post-Repair Pressure Reset' to ensure the entire supply network is stabilized. If you are quoted an suspiciously low price, it often indicates the use of inferior mechanical joints or the lack of 'Thermal Imaging Verification.' \n\nIn the Westlake area, a surgical-grade repair by a master mechanical force usually falls between $400 and $1,500 for non-slab breaches. This investment covers the 'Elite Technical Security' needed to ensure the leak doesn't return or initiate a secondary catastrophic failure elsewhere in the architecture. Our Westlake technicians utilize 'Industrial-Grade ultrasonic arrays' to ensure that every repair is backed by technical certainty. We don't just 'fix leaks'; we perform a 'Total Hydraulic reclamation' of your home's drainage or supply biology. Investing in professional mechanical force ensures your Westlake property's equity remains untarnished by water damage. Call (877) 792-1410 for a definitive technical result and professional flow security."
    },
    {
      q: "Can a handyman fix a leaking pipe?",
      a: "While a handyman may be able to manage simple 'Surface Level Flow' issues like a loose faucet connection, they lack the 'Surgical Technical Tooling' required for structural pipe reclamation in Westlake residences. Westlake plumbing codes are rigorous, requiring 'Master-Level mechanical certification' for any intervention involving pressurized supply lines or drain-waste-vent (DWV) architectures. \n\nAttempting a structural repair without the proper 'Industrial Grade' acoustic detection or specialized copper welding equipment often leads to 'Secondary Breach Events.' Handymen typically do not possess the liability insurance required to cover catastrophic foundation water damage or massive interior saturation events in a high-value Westlake home. Our Westlake 'Master Force' provides the 'Elite Technical Security' and code-compliance needed to protect your residential assets. A failed 'Handyman Patch' can lead to 'Bio-Film growth' and structural rot that costs ten times more to remediate. Trust the 'Professional Dispatch Force' for a permanent structural reset. Reclaim your home's integrity by calling (877) 792-1410 today for certified mechanical intervention."
    },
    {
      q: "Does flex seal really work on water leaks?",
      a: "In the professional mechanical reclamation industry, topical sprays like Flex Seal are considered 'Emergency Delay Tactics'—not permanent structural fixes. For Westlake pressurized pipes, which operate at significant intervals of PSI, a topical coating cannot withstand the constant 'Hydraulic Stress' and 'Temperature Cycling.' Applying such materials often wastes critical time while the sub-surface saturation level in your Westlake foundation continues to rise. \n\n'Success-Based Repair' in Westlake requires a physical pipe wall reset—either through surgical extraction and replacement or 'Epoxy Liner Reclamation.' Our Westlake force utilizes 'Master-Aligned Technical Precision' to solve the failure node at the molecular level, not with a temporary surface patch. Westlake homes deserve 'Elite Technical Security,' which only industrial-grade mechanical joints and master welding can provide. Using topical sealants on internal plumbing is a precursor to catastrophic systemic failure. We recommend immediate mechanical intervention to stabilize your home's hydraulic pressure. Reclaim your Westlake home's architectural safety by avoiding retail shortcuts and calling our technical dispatchers at (877) 792-1410 for a permanent flow exclusion."
    },
    {
      q: "Is a leaky pipe covered by homeowners insurance?",
      a: "In Westlake, TX, homeowners insurance typically covers the 'Collateral Damage' caused by a pipe failure—such as flooring saturation, drywall restoration, and bio-remediation—as long as the breach was 'Sudden and Accidental.' However, the 'Direct Mechanical Repair' of the pipe itself is often excluded under standard maintenance clauses. \n\nNavigating an insurance claim for a pipe fail in Westlake requires 'High-Resolution Diagnostic Documentation.' Our Westlake force provides the 'Failure Profiling' and 'HD Evidence' needed to satisfy adjusters in the 76262 area. We document the 'Sonic identification' and 'Breach node' to prove the sudden nature of the failure. This 'Professional Data Audit' can be the difference between a denied claim and a total property reclamation. We provide the 'Elite Technical Clarity' that insurance companies trust, ensuring that your Westlake residence is restored to its original engineered specification. Always review your policy for 'Seepage and Leakage Endorsements' which can provide expanded coverage for prolonged failure nodes. For technical assistance with your failure documentation, contact our Westlake specialists at (877) 792-1410."
    },
    {
      q: "Can I fix a leaky pipe myself?",
      a: "Attempting a DIY repair on a Westlake pressurized pipe is an exceptionally high-risk endeavor that often results in 'Multi-Node Systemic Failure.' Modern Westlake architectures use complex plumbing manifolds that require 'Precision Torque' and 'Master welding' to ensure structural flow consistency. A DIY error—such as over-tightening a joint or using mismatched materials—can initiate 'Electrolytic Corrosion' or 'Hydraulic Hammer' that destroys other parts of your home's flow biology. \n\nFurthermore, many DIY fixes invalidate your home's insurance coverage for any resulting water damage. Our Westlake 'Elite Mechanical Force' uses 'Industrial Grade ultrasonic sensors' and 'Surgical extraction protocols' to ensure your home remains code-compliant and structurally sound. We handles the 'High-Risk technical intersections' so you don't have to worry about a midnight flood. Protect your Westlake property value and your peace of mind by letting a master professional handle the 'Technical Reclamation.' We provide the 'Permanent flow security' that retail patches simply cannot match. Call our Westlake hotline at (877) 792-1410 for a technical consultation before attempting a DIY intervention."
    },
    {
      q: "How long does it take a plumber to fix a leaking pipe?",
      a: "A professional 'Pipe Reclamation' in a Westlake residence generally takes between 2 to 6 hours for standard 'Visible Node' failures. If the leak is located beneath the slab or within a structural foundation, the timeline extends to 1-2 days due to the requirement for 'Surgical foundation access' and 'Deep-Earth detection.' \n\nIn the Westlake area, we prioritize 'Rapid Asset Stabilization.' Upon arrival, our force immediately implements 'Pressure Mitigation' to stop the saturation. Then, we use 'Sonic Mapping' to identify the exact coordinates of the failure. Our Westlake technicians are trained in 'Vertical Efficiency,' ensuring that your home's hydraulic system is returned to an 'Active Flow State' with minimal disruption. We stay on the property until the 'Post-Repair Audit' confirms total systemic stabilization. Whether it's a pinhole breach in 76262 or a catastrophic main line failure, we provides the 'Definitive Result' that ensures your Westlake home is safe. We are the 'First-Response Leaders' for Westlake plumbing security, aiming for zero-downtime solutions wherever possible."
    },
    {
      q: "Can a leaking pipe stop leaking on its own?",
      a: "No, a pressurized pipe failure in Westlake will NEVER self-correct. While a leak might occasionally 'slow down' due to sediment buildup at the breach node, this is a dangerous 'False Stability.' The underlying structural weakness in the pipe wall is still under constant hydraulic stress. This sediment layer can blow out at any moment, leading to a 'High-Volume Saturation Event' that can destroy your Westlake home's interior in minutes. \n\nIn Westlake's soil and water conditions, 'Pipe Corrosion' is a degenerative process. Once a breach has initiated, the molecular integrity of the surrounding material is compromised. Waiting for a leak to 'stop' is effectively waiting for a catastrophic structural failure. Our Westlake force provides 'Priority Diagnostic intervention' to neutralize these threats before they escalate into foundation heave or massive bio-contamination. We provides the 'Permanent Exclusion' of these hydraulic threats through master-grade mechanical force. If you suspect a leak, contact our Westlake dispatch at (877) 792-1410 immediately. Reclaim your home's safety before the 'Sediment Plug' fails."
    },
    {
      q: "What is the most common plumbing leak?",
      a: "The most common and most destructive plumbing leak in Westlake, TX is the 'Degenerative Pinhole Breach' in copper supply lines. This is often caused by 'Pitting Corrosion' resulting from the chemical interaction between Westlake's water chemistry and the pipe wall. These leaks are silent predators—releasing a steady stream of moisture into your Westlake foundation or wall cavities for months before being detected visually. \n\nOther frequent failure nodes in Westlake include 'Joint Failure' due to thermal expansion and 'Slab Infiltration' from shifting Texas soils. Because these leaks are often hidden within the Westlake architectural envelope, 'Master Aligned technical detection' is the only way to find them before they cause high-value property damage. Our Westlake force specializes in 'Hidden Breach identification,' using thermal and acoustic sensor arrays to map out these silent failures. We provides the 'Total systemic audit' that identifies these common threats and neutralizes them with industrial-grade mechanical precision. Call (877) 792-1410 for a professional 'Flow health check' for your Westlake residence."
    },
    {
      q: "Do plumbers deal with pipe leaks?",
      a: "While general plumbers handle basic repairs, a specialized 'Mechanical Reclamation Force' like ours in Westlake is required for structural pipe failure management. We deal with the 'Complex Technical intersection' of foundation security, hydraulic pressure balance, and high-precision detection. In the high-stakes architectures of Westlake, common plumbing tools are insufficient; we use 'Ultrasonic frequency arrays' and 'Industrial-Strength mechanical couplers' to provide a permanent reset. \n\nOur Westlake force is specifically trained in 'Structural Flow reclamation,' meaning we focus on the long-term integrity of your home's entire plumbing biology. From the 76262 zip code to the surrounding North Texas hill country, we are the 'Definitive Choice' for homeowners who demand 'Elite Technical Security.' We don't just 'deal' with leaks; we provide 'Surgical flow neutralization' and 'Asset hardening' to ensure your home is protected from future systemic failures. If your Westlake property is experiencing a hydraulic breach, you need more than a plumber—you need a 'Mechanical Force' that provides certified technical certainty. Call (877) 792-1410 now."
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
            Pipe Repair Expert Knowledge Base
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-500">Pipe Flow Intelligence</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium italic">
            Deep technical insights into identifying, locating, and neutralizing catastrophic pipe breaches in Westlake, TX.
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
              Notice a Drop in Pressure or High Bill?
            </h3>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium italic">
              Don't wait for your walls to saturate. Our Westlake specialists provide 24/7 emergency pipe reclamation.
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

export default LeakingPipeInfo;
