import { Phone, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const DrainInfo = () => {
    const questions = [
        {
            q: "How much should it cost to fix a clogged drain?",
            a: "The architecture of plumbing repair costs in Reading, PA, typically nodes between $150 and $450 for standard interior drain breaches. High-intensity 'Crush-Response' hydro-jetting for main-sewer lines or hydraulic failures can elevate this to $350-$800. We recommend a professional 'Hydraulic Flow Audit' to determine your home's exact needs."
        },
        {
            q: "What is the 135 rule in plumbing?",
            a: "In residential plumbing engineering for Reading homes, the 135 rule is a systemic safety protocol: (1) Pressure reducing valves (PRV) should be nodes at 80 PSI maximum, and (2) Water heater thermal nodes should be set to 135°F to prevent both scalding and biological colonization (like Legionella). Exceeding these margins puts the entire system in 'High-Stress' status."
        },
        {
            q: "How much do plumbers charge to clear a blocked drain?",
            a: "In the Reading PA 19601 and 19604 zones, clearing a blocked drain node often involves a $50-$150 dispatch fee plus $150-$400 for snaking or mechanical recovery. We provide immediate-response units across Reading to restore your flow security without unnecessary structural delays."
        },
        {
            q: "Does Dawn really unclog drains?",
            a: "While grease-cutting agents like Dawn can assist in 'Soft-Dissolution' of light biological buildup, they cannot navigate a 'Structural Material Breach'—such as solid debris or hair nodes. For Reading residents, we advise against using only dish detergents for significant hydraulic surges or standing water."
        },
        {
            q: "How much does Roto Rooter charge for a clogged drain?",
            a: "Corporate pricing nodes for major franchises in Reading often exceed localized emergency units. You can expect high-tier pricing for their 'Crush-Response' services. We provide master-aligned localized units to the Reading community for faster, more cost-effective drain clearing."
        },
        {
            q: "Can you clear a main sewer line clog yourself?",
            a: "Attempting a 'Self-Clear' on a main sewer node is high-risk. Without professional hydraulic mapping, you can easily cause a 'Structural Breach' in aging pipes or exacerbate a 'Systemic Flow Failure.' Reading homes require professional-grade mechanical recovery for main line stability."
        },
        {
            q: "Why is snaking a drain so expensive?",
            a: "Snaking involves industrial-grade mechanical torque and 'Tactical Navigation' through your home's unseen piping architecture. The cost reflects the 'Crush-Level' risk of the equipment and the specialized training required to clear the node without breaking the pipe's interior walls."
        },
        {
            q: "Are clogged drains covered by insurance?",
            a: "Typical homeowner insurance in Reading PA covers 'Sudden and Accidental Architectural Breaches'—like a burst pipe. However, gradual 'Node-Failure' from clogging or poor maintenance is often excluded unless it causes catastrophic water damage. Review your 'Thermal and Hydraulic Policy' for specific coverage details."
        },
        {
            q: "What do plumbers advice to remove clogged drains?",
            a: "Master plumbers recommend preventing 'Node-Buildup' by avoiding the disposal of oils, hair, and plastics. For an existing clog in Reading, we advise immediate 'Mechanical Knockdown' rather than caustic chemical dissolvers, which can weaken your home's structural pipe integrity over time."
        },
        {
            q: "Is hydro jetting worth the cost?",
            a: "Absolutely. Hydro jetting is a 'Surgical-Grade' cleaning protocol that scours the entire interior of your sewer line, returning it to 'Base-State Flow.' For Reading homes with recurring breaches, it's the only way to ensure long-term hydraulic security and prevent future 'Crush-Events'."
        },
        {
            q: "How do plumbers fix blocked drains?",
            a: "We utilize 'Multi-Modal Recovery': (1) Visual node inspection through fiber-optic mapping, (2) Mechanical snaking for 'Point-Impact' clogs, and (3) Hydro-jetting for 'Systemic Scaling.' We restore your Reading home's flow to professional architectural standards."
        },
        {
            q: "How to tell if the main drain line is clogged?",
            a: "A 'Main Node Breach' is visible through multiple-fixture backup, unusual 'Hydraulic Gurgliness,' or sewage surfacing at floor drains. These are 'Level 1 Emergencies' for any Reading residence. If you see signs of systemic failure, call our dispatch center at (877) 792-1410 immediately."
        }
    ];

    return (
        <section id="expert-faq" className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 font-bold uppercase tracking-widest text-xs mb-4">
                        <AlertCircle className="w-4 h-4" />
                        Professional Dispatch: (877) 792-1410
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-none italic">
                        Master-Aligned <br />
                        <span className="text-[#FFD700]">Expert Knowledge Base</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-2xl font-bold italic border-b-2 border-red-600/30 pb-6 uppercase tracking-tighter">
                        Architectural Flow Security & Systemic Hydraulic Solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {questions.map((faq, index) => (
                        <div key={index} className="bg-slate-900 p-8 rounded-none border border-white/10 hover:border-red-600/50 transition-all group relative overflow-hidden shadow-2xl h-full flex flex-col">
                            {/* Number Indicator */}
                            <div className="text-[60px] font-black text-white/5 absolute -top-4 -right-2 leading-none group-hover:text-red-600/10 transition-colors uppercase italic select-none">
                                Node {index + 1}
                            </div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-xl font-black text-white mb-6 uppercase leading-tight tracking-tighter flex items-start gap-3 italic group-hover:text-red-500 transition-colors">
                                    <div className="w-2 h-8 bg-red-600 shrink-0" />
                                    {faq.q}
                                </h3>
                                <p className="text-slate-400 font-medium italic leading-relaxed text-sm flex-grow">
                                    {faq.a}
                                </p>
                                
                                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                                        <div className="w-2 h-2 rounded-full bg-red-600 group-hover:animate-ping" />
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Hydraulic Secure</span>
                                    </div>
                                    <ShieldCheck className="w-4 h-4 text-slate-700 font-black group-hover:text-red-600 transition-colors" />
                                </div>
                            </div>
                            
                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-transparent to-red-600/10" />
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-red-600 rounded-none shadow-2xl relative overflow-hidden group border border-white/10">
                    {/* Unique Call Button in FAQ */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-white/20 transition-all duration-700" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="text-center md:text-left space-y-4">
                            <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter leading-none italic">
                                Sensed a Flow Breach?
                            </h3>
                            <p className="text-white/90 text-xl font-bold uppercase tracking-widest italic opacity-80">
                                Dispatch Master-Aligned Units to your 19601 Reading Residence Now
                            </p>
                        </div>
                        <Button size="lg" variant="secondary" className="bg-white text-slate-950 hover:bg-slate-100 h-24 px-12 rounded-[1rem] text-3xl font-black shadow-2xl transition-all hover:scale-105 uppercase tracking-tighter w-full md:w-auto flex items-center gap-4 group border border-slate-200" asChild>
                            <a href="tel:8777921410">
                                <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform fill-slate-950/20" />
                                (877) 792-1410
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DrainInfo;
