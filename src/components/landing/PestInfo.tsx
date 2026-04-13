import { Phone, CheckCircle2, AlertCircle, Info, ShieldCheck, Bug, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PestInfo = () => {
    const questions = [
        {
            q: "How much does emergency pest control cost in 33023?",
            a: "Biological clearing costs in Miramar, FL typically range from $150 to $450 depending on the infestation node intensity. Rapid-response units provide immediate knockdown protocols to secure your residence."
        },
        {
            q: "What is the most common pest in Hollywood FL 33023?",
            a: "The Miramar-Hollywood corridor suffers from high-density German Cockroach nodes and Ghost Ant biological breaches. Our technicians utilize surgical-grade pheromone disruption to terminate these colonies."
        },
        {
            q: "Are pest control chemicals safe for pets and children?",
            a: "We utilize eco-secure biological agents that target specific insect neurological nodes while maintaining structural safety for residential inhabitants. Protocol adherence ensures 100% security."
        },
        {
            q: "How often do I need pest control in Florida?",
            a: "Due to the 33023 humid climate, monthly or quarterly defense barriers are recommended to prevent perimeter breaches. Systemic maintenance is the only way to ensure biological stability."
        },
        {
            q: "Can I terminate a bed bug infestation myself?",
            a: "Self-clearance of bed bug nodes is extremely high-risk. These organisms utilize advanced evasion tactics that require professional-grade thermal or chemical knockdown for complete termination."
        },
        {
            q: "Why do I have roaches if my house is clean?",
            a: "Roaches are biological opportunists. They utilize microscopic structural breaches for entry and moisture nodes for survival. Cleanliness is secondary to systemic perimeter security."
        },
        {
            q: "How long does a pest control treatment last?",
            a: "Standard biological barriers provide 60 to 90 days of active defense. However, systemic weather events in Miramar can degrade these nodes faster, requiring localized re-fortification."
        },
        {
            q: "What are the signs of a termite breach?",
            a: "Look for mud-tube architectural anomalies, discarded biological wings at entry points, and hollow structural resonances. These indicate an active subterranean termite Siege Node."
        },
        {
            q: "Do pest control clear rodents also?",
            a: "Our master-aligned units handle both insectoid and mammalian breaches. Rodent control involves structural exclusion protocols and tactical neutralization vectors."
        },
        {
            q: "Are monthly pest control services worth the cost?",
            a: "Absolutely. The architectural damage caused by a single unchecked infestation node far exceeds the cost of a systemic defensive barrier. Total security is a long-term investment."
        },
        {
            q: "What should I do before the technician arrives?",
            a: "Ensure all perimeter nodes are accessible. Secure biological food sources and clear furniture from structural intersection points for high-intensity agent deployment."
        },
        {
            q: "Do you provide emergency 24/7 dispatch?",
            a: "Yes. Our command center operates 24/7/365 to handle emergency biological breaches in Miramar and Hollywood FL 33023. Call (323) 880-1224 for immediate unit deployment."
        }
    ];

    return (
        <section id="infestation-faq" className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 font-bold uppercase tracking-widest text-xs mb-4 leading-none">
                        <AlertCircle className="w-4 h-4" />
                        Professional Dispatch: (323) 880-1224
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-none italic">
                        Biological Defense <br />
                        <span className="text-[#FFD700]">Expert Knowledge Base</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-2xl font-bold italic border-b-2 border-red-600/30 pb-6 uppercase tracking-tighter leading-none">
                        Architectural Security & Infestation Termination Solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
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
                                <p className="text-slate-400 font-medium italic leading-relaxed text-sm flex-grow uppercase tracking-tight">
                                    {faq.a}
                                </p>
                                
                                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                                        <div className="w-2 h-2 rounded-full bg-red-600 group-hover:animate-ping" />
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Bio-Secure Secured</span>
                                    </div>
                                    <ShieldCheck className="w-4 h-4 text-slate-700 font-black group-hover:text-red-600 transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Nice looking call button in FAQ */}
                <div className="mt-10 p-12 bg-red-600 rounded-none shadow-2xl relative overflow-hidden group border border-white/10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-white/20 transition-all duration-700" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="text-center md:text-left space-y-4">
                            <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter leading-none italic">
                                Biological Breach Detected?
                            </h3>
                            <p className="text-white/90 text-xl font-bold uppercase tracking-widest italic opacity-80 leading-none">
                                Dispatch 33023 Termination Units For Immediate Knockdown
                            </p>
                        </div>
                        <Button size="lg" variant="secondary" className="bg-white text-slate-950 hover:bg-slate-100 h-24 px-12 rounded-[1rem] text-3xl font-black shadow-2xl transition-all hover:scale-105 uppercase tracking-tighter w-full md:w-auto flex items-center gap-4 group border border-slate-200 shadow-white/10" asChild>
                            <a href="tel:3238801224">
                                <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform fill-slate-950/20" />
                                (323) 880-1224
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PestInfo;
