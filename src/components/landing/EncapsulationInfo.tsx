import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone, Home, ArrowRight } from "lucide-react";

/**
 * EncapsulationInfo Component - "Foundation Knowledge Base" section
 * Contains blog-style Q&A boxes in a grid layout.
 * Questions are formatted for SEO.
 * Includes a nice-looking call button in every square box.
 * NO MENTION of "Free Quotes" or "Estimates".
 */

interface BlogBoxProps {
  q: string;
  a: string;
}

const BlogBox = ({ q, a }: BlogBoxProps) => (
  <div className="bg-white border border-slate-200 p-8 rounded-none shadow-sm hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full group">
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
        <BookOpen className="w-3 h-3" />
        Encapsulation Blog
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-cyan-700 transition-colors uppercase tracking-tight mb-4">
        {q}
      </h3>
      <div className="w-12 h-1 bg-cyan-500 mb-6" />
    </div>
    
    <div className="text-slate-600 leading-relaxed font-normal text-sm mb-8 flex-grow italic">
      {a}
    </div>

    <div className="mt-auto pt-6 border-t border-slate-100">
      <a 
        href="tel:3802660944" 
        className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-cyan-600 text-white px-6 py-4 rounded-none font-bold text-sm transition-all shadow-lg uppercase tracking-tighter w-full"
      >
        <Phone className="w-4 h-4 fill-white" />
        REACH MONTVALE DISPATCH
      </a>
    </div>
  </div>
);

const EncapsulationInfo = () => {
  const blogs = [
    {
      q: "What is crawl space encapsulation?",
      a: "Encapsulation is a 'Total Structural Hardening' protocol where the entire crawl space is sealed with a master-aligned vapor barrier. This creates a 'Clean Zone' that prevents soil moisture and cold air from Violating your internal architectural serenity in Montvale."
    },
    {
      q: "Does encapsulation prevent mold?",
      a: "Yes. By neutralizing the 'Humidity Node' below your home, you eliminate the atmospheric conditions required for mold blooming. For Montvale residences, this is the definitive technical reset for long-term health."
    },
    {
      q: "Is it worth encapsulating a crawl space in NJ?",
      a: "Absolutely. New Jersey's sustained soil moisture and seasonal temperature shifts cause chronic foundation erosion and high energy costs. Encapsulation indices as a 'High-ROI Structural Asset Protection' for Montvale properties."
    },
    {
      q: "How long does encapsulation last?",
      a: "When utilizing industrial-grade master-aligned components, a crawl space reset can last 20+ years. Our Montvale force focuses on 'Vertical Barrier Integrity' to ensure your structural security remains persistent."
    },
    {
      q: "Will encapsulation lower my energy bill?",
      a: "Yes. By eliminating the 'Thermal Breach' at the foundation, your HVAC system no longer has to compete with outdoor temperature infiltration. Montvale homeowners often see a 15-20% reset in seasonal energy consumption."
    },
    {
      q: "What's the difference between sealing and encapsulation?",
      a: "Sealing is a 'Surface-Level Protocol', whereas encapsulation is a 'Total Environmental Reclamation'. Sealing might address specific cracks, but only encapsulation provides the master-aligned barrier needed for absolute air security."
    },
    {
      q: "Do I need a dehumidifier with encapsulation?",
      a: "In the Montvale humidity cycle, a master-aligned dehumidifier is often required to maintain the 'Internal Atmospheric Baseline'. This ensures that any incidental moisture is immediately neutralized before it can form a breach node."
    },
    {
      q: "How expensive is crawl space encapsulation in NJ?",
      a: "The technical deployment index varies based on 'Footprint Volume' and 'Moisture Breach Severity'. For a surgical foundation reset in Montvale, indices typically range based on architectural complexity. Call (380) 266-0944 for a technical audit."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 text-slate-600 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <Home className="w-4 h-4 text-cyan-500 shadow-sm" />
            Montvale Foundation Research Node
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Encapsulation <span className="text-cyan-600">Expert Knowledge</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium italic">
            Industrial-grade insights into high-efficiency foundation protection and air security in Montvale, NJ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-t border-slate-100">
          {blogs.map((blog, idx) => (
            <BlogBox key={idx} q={blog.q} a={blog.a} />
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-cyan-600/10 skew-y-12 translate-y-24 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-tighter">
              Suspect a Structural Moisture Breach? <br /> Act With Tactical Certainty.
            </h3>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium italic">
              Don't wait for structural rot or respiratory failure. Our Montvale specialists provide 24/7 tactical dispatch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="tel:3802660944" className="bg-cyan-600 hover:bg-white hover:text-slate-900 text-white h-20 px-12 rounded-none text-2xl font-bold flex items-center gap-4 transition-all shadow-2xl">
                <Phone className="w-8 h-8 fill-current" />
                (380) 266-0944
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EncapsulationInfo;
