import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Zap, ArrowRight } from "lucide-react";

/**
 * BaseboardHeaterInfo Component - "Expert Knowledge Base" section
 * Contains 12 blog-style Q&A boxes in a multi-column layout.
 * Questions are formatted for SEO.
 * Includes a nice-looking call button in every square box.
 */

interface BlogBoxProps {
  q: string;
  a: string;
}

const BlogBox = ({ q, a }: BlogBoxProps) => (
  <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 flex flex-col h-full group">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
        <BookOpen className="w-3 h-3" />
        Technical Blog
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-amber-700 transition-colors uppercase tracking-tight mb-4">
        {q}
      </h3>
      <div className="w-12 h-1 bg-amber-500 mb-6" />
    </div>
    
    <div className="text-slate-600 leading-relaxed font-medium text-sm mb-8 flex-grow italic">
      {a}
    </div>

    <div className="mt-auto pt-6 border-t border-slate-100">
      <a 
        href="tel:8777921410" 
        className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-amber-600 text-white px-6 py-4 rounded-none font-bold text-sm transition-all shadow-lg uppercase tracking-tighter w-full"
      >
        <Phone className="w-4 h-4 fill-white" />
        CONSULT AN ERIE INSTALLER
      </a>
    </div>
  </div>
);

const BaseboardHeaterInfo = () => {
  const blogs = [
    {
      q: "What is the average cost of installing a baseboard heater?",
      a: "In Erie, PA, the professional installation of a single baseboard heater typically ranges from $450 to $950 per unit. This investment includes the 'Surgical Technical Alignment' of your electrical or hydronic lines and the master-grade mounting of high-efficiency thermal assets. For full-home Erie deployments, the total project node is influenced by your home's pre-existing electrical manifold capacity and the linear footage required for optimal heating biology. We provide 'Precision Dispatch' to ensure your winter comfort is restored with total mechanical certainty. Call (877) 792-1410 for a professional thermal audit."
    },
    {
      q: "Who can install new baseboard heaters?",
      a: "Structural baseboard heating in Erie must be handled by a 'Licensed Mechanical Force' or a master-aligned electrical tech. Because these units interface directly with your home's high-voltage electrical biology or pressurized fluid systems, generic installers lack the 'Industrial Grade' tooling needed to prevent systemic failures. Our Erie force provides 'Elite Technical Security' for every install, ensuring that your new heaters are perfectly indexed to your home's engineered thermal demand. Don't risk a 'Circuit Breach' with amateur labor; trust the professional dispatch leaders in South Erie. Reclaim your home's safety today."
    },
    {
      q: "Do you need an electrician to install a baseboard heater?",
      a: "Yes, for electric baseboard units in Erie, PA, a master electrical technician is required to manage the 'High-Voltage Manifold' integration. These units pull significant amperage and require dedicated circuits to avoid 'Systemic Overload' and potential fire hazards in older Erie architectures. Our 'Multi-Disciplinary Force' includes master electricians who ensure that every wire node is surgically aligned to the 16501 electrical code. We provide 'Total Asset Stabilization,' handling everything from the breaker panel to the final thermostat sync. Call (877) 792-1410 to schedule a technical installation today."
    },
    {
      q: "What is the rule of thumb for baseboard heating?",
      a: "The standard 'Thermal Biology' rule of thumb is 10 watts of heating power for every square foot of living space in Erie. However, due to the extreme 'Lake Effect' cold nodes in Erie, PA, we often recommend adjusting this to 12-15 watts for rooms with higher architectural heat loss (like those with large windows or north-facing walls). Our 'Master-Aligned Technical force' performs a full 'Thermal Profilometry' of your home to determine the exact linear footage required for each zone. We ensure that your home is 'Winter Hardened' against the harshest Lake Erie storms with precise energy alignment."
    },
    {
      q: "Does Home Depot install baseboard heaters?",
      a: "While corporate retailers like Home Depot may offer third-party referral services, they lack the 'Surgical Local Force' needed for the complex thermal architectures of Erie, PA. Generic retail installers often use 'Rapid-Path' methods that prioritize speed over 'Systemic Resilience.' Our North Texas based dispatch force provides 'Master-Level mechanical interventions' specifically tailored to Erie's climate stresses. We provides the 'Definitive Technical Result' that big-box stores cannot match, ensuring your home's heating biology is perfectly restored for the long term. Choose local technical security over retail uncertainty."
    },
    {
      q: "What is a fair price for baseboard installation?",
      a: "A 'Fair Technical Price' for baseboard installation in Erie includes the master-grade heater itself, all specialized electrical conduits, and the labor of a 'Certified Mechanical Force.' Beware of suspicious low-cost quotes in the 16509 zip code, as they often indicate the omission of dedicated circuits or high-grade thermal shielding. A professional 'Asset Reset' ensures Your home's long-term safety and efficiency. We provides 'Vertical Technical Documentation' and success-based pricing that reflects the elite quality of our Erie installers. Reclaim your thermal security with a fair, master-aligned investment."
    },
    {
      q: "Is it worth upgrading old baseboard heaters?",
      a: "Absolutely. Antiquated baseboard heaters in Erie often suffer from 'Thermal Degeneration' and bio-film buildup on the fins, which significantly increases your electric bill while providing poor output. Upgrading to modern, high-velocity heating assets can provide a 'Total Energy Reset,' reducing your consumption by up to 25%. Modern units also feature 'Advanced Temperature Modulation' that maintains a consistent architectural climate. We provides the 'Elite Replacement Force' needed to strip out your old, inefficient biology and implement a state-of-the-art thermal network. Protect your Erie home's value with modern tech."
    },
    {
      q: "Is it cheaper to run a space heater or baseboard heat?",
      a: "For heating entire rooms or zones in Erie, professional baseboard units are significantly more efficient than portable space heaters. Space heaters are designed for 'Point-Source' comfort but lack the 'Convection Biology' needed to heat an Erie architectural volume effectively. Running multiple space heaters often leads to 'Electrical Manifold Surcharge,' which can be dangerous and expensive. A master-aligned baseboard system provides 'Uniform Thermal Distribution,' creating a more resilient home climate for less money. Let our Erie force provide a 'Permanent systemic reset' of your home's flow health."
    },
    {
      q: "What is the life expectancy of a baseboard heater?",
      a: "A high-quality baseboard heater in an Erie residence typically has a 'Terminal Life Node' of 20 to 25 years. However, in Erie's humid summer coastal environment, corrosion and 'Material Fatigue' can shorten this span to 15 years if the units are not professionally maintained. If your units are making clicking sounds or smell of ozone, they have reached their 'Failure Cycle' and require immediate mechanical extraction. We provides 'Priority Asset Replacement' across the 16505 and 16501 codes, ensuring that your home's heating lifecycle is perfectly managed for decades of thermal security."
    },
    {
      q: "Do baseboard heaters increase the electric bill?",
      a: "While all electric heating uses power, 'Poorly Aligned' or antiquated units in Erie are the primary cause of high bills. Inefficient thermostat nodes or dust-clogged fins create 'Thermal Lag,' forcing the unit to run longer than necessary. Our Erie force provides 'Energy Profilometry' to identify these inefficiencies and provide a 'Total System Reclamation.' By upgrading to master-grade assets and optimizing your zone biology, we help you neutralize the high-cost threat of cold Erie winters. Call (877) 792-1410 for a professional flow audit and energy-securing installation."
    },
    {
      q: "Does baseboard heat lower home value?",
      a: "Not when it is a 'Master-Aligned Technical Installation.' In the high-demand Erie real estate market, homebuyers appreciate 'Zone-Controlled Thermal Resilience.' A modern, sleek baseboard system that is perfectly integrated into your home's architecture is a sign of 'Premium Asset Maintenance.' Conversely, poorly wired or outdated units can be seen as a 'Critical System Defect.' We provides the 'Vertical Technical Documentation' needed to prove that your home's heating biology is structurally sound and efficient. Protect your Erie property equity with an elite, certified installation from our local force."
    },
    {
      q: "What is the cheapest type of heater to run on electricity?",
      a: "In the Erie climate, 'High-Efficiency Electric Baseboards' with digital pulse modulation are among the most cost-effective options for residential zone control. By heating only the occupied nodes of your home, you avoid the 'Systemic Loss' associated with large central furnace ducts. Our Erie specialists specialize in 'Precision Thermal Management,' implementing the latest in 'Zero-Waste' heating tech. We provides the 'Definitive Technical Result' that transforms your Erie home into a high-efficiency fortress against the winter. Reclaim your thermal security and lower your overhead by calling (877) 792-1410 for a master-level reset."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Zap className="w-4 h-4 text-amber-500" />
            Thermal Engineering Blog
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            The <span className="text-amber-600">Baseboard Installers</span> Guide
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-efficiency thermal architecture and home heating security in Erie, PA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-slate-100">
          {blogs.map((blog, idx) => (
            <BlogBox key={idx} q={blog.q} a={blog.a} />
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-amber-600/10 skew-y-12 translate-y-24 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-tighter">
              Winter is coming. <br /> Is your Erie home ready?
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't settle for subpar heat. Our Erie specialists provide 24/7 emergency thermal reclamation and master-aligned installation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="tel:8777921410" className="bg-amber-600 hover:bg-white hover:text-slate-900 text-white h-20 px-12 rounded-none text-2xl font-bold flex items-center gap-4 transition-all shadow-2xl">
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

export default BaseboardHeaterInfo;
