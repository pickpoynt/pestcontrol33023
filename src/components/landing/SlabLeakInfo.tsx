import { Phone, CheckCircle2, AlertCircle, Info, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const SlabLeakInfo = () => {
    const questions = [
        {
            q: "What is the average cost of a slab leak?",
            a: "The architecture of slab leak repair in Reading, PA, typically nodes between $1,500 and $4,000. These costs include electronic node location and the necessary architectural restoration to your home's hydraulic foundation. We advise immediate intervention to prevent structural drift."
        },
        {
            q: "Will insurance cover a leak under a slab?",
            a: "Most Reading PA insurance policies cover the 'Recovery Costs' associated with accessing the breach, but may exclude the specific pipe node repair. We provide a 'Nodal Breach Audit' to assist your documentation process for localized Reading adjusters."
        },
        {
            q: "Who to call if you think you have a slab leak?",
            a: "You require a master-aligned slab leak specialist with electronic node detection capabilities. Call Reading PA Slab Leak Force at (877) 792-1410 for immediate hydraulic dispatch and foundation security."
        },
        {
            q: "How urgent is a slab leak?",
            a: "Extremely urgent. A slab leak constitutes an 'Active Structural Erosion Node.' Delay resulting in foundation cracking, soil displacement, and systemic architectural failure for your Reading residence."
        },
        {
            q: "What happens if you don't fix a slab leak?",
            a: "Ignoring a hydraulic breach under your foundation leads to soil saturation, sinkhole formation nodes, and significant structural instability. The repair complexity increases exponentially the longer the breach remains active."
        },
        {
            q: "How much will a 20x20 concrete slab cost?",
            a: "Standard residential concrete nodes in Reading for a 20x20 slab typically range from $2,400 to $4,800 depending on thickness and reinforcement. We provide stabilization protocols before any concrete restoration is initiated."
        },
        {
            q: "What not to say to a homeowners insurance adjuster?",
            a: "Avoid using 'speculative nodal language.' Stick to the verified mechanical facts provided in our Reading PA Slab Leak Force hydraulic report. Do not admit 'long-term neglect' if the breach was recently detected."
        },
        {
            q: "How common is a slab leak?",
            a: "In the 19601 and 19604 Reading zones, slab leaks are common in homes with copper-node plumbing systems over 20 years old. Soil chemistry and shifting foundation nodes contribute to the systemic risk."
        },
        {
            q: "Will a slab leak affect my home's value?",
            a: "An active breach significantly degrades architectural value. However, a professionally repaired and certified slab stabilization from Reading PA Slab Leak Force restores your home's hydraulic and structural integrity."
        },
        {
            q: "Can you fix a slab leak without digging?",
            a: "Yes, through 'Pipe-Relining' or 'Nodal Rerouting.' We can often bypass the subterranean breach by establishing a new hydraulic envelope above the slab, avoiding structural excavation."
        },
        {
            q: "How long does it take to fix a slab leak?",
            a: "A professional recovery protocol typically spans 2 to 5 days: Node Detection (1 day), Nodal Recovery/Repair (1-2 days), and Architectural Restoration (1-2 days)."
        },
        {
            q: "Can you have a slab leak and not know it?",
            a: "Yes. Many Reading residents suffer from 'Silent Hydraulic Breaches' for months. Indicators include abnormal water meter surges, warm floor nodes, or unexplained foundation dampness."
        },
        {
            q: "Can pipes burst under slab?",
            a: "Pipes rarely 'burst' in a single event under slab; they usually develop 'Mechanical Erosion Pits' or 'Nodal Stress Cracks' that create persistent high-pressure hydraulic plumes."
        },
        {
            q: "Can heavy rain cause slab leak?",
            a: "Heavy rain causes soil expansion nodes which can shift your home's foundation, creating mechanical stress that snaps subterranean pipe joints. Reading PA storms often trigger these systemic breaches."
        },
        {
            q: "What are the two most common leak detection tests?",
            a: "We utilize (1) Electronic Acoustic Nodal Mapping and (2) Tracer Gas Injection. These master-aligned tests allow us to pinpoint the breach location within centimeters without initial excavation."
        },
        {
            q: "Can a slab leak cause a sinkhole?",
            a: "Yes. Persistent water flow from an active breach scours the soil nodes beneath your slab, creating a hollow architectural void that can lead to catastrophic foundation collapse."
        },
        {
            q: "Does a warm floor mean a slab leak?",
            a: "A 'Thermal Floor Node' usually indicates a breach in your home's hot-water architectural line. This is a primary indicator of an active slab leak in Reading PA residences."
        },
        {
            q: "Can water seep through a concrete slab?",
            a: "Yes, through 'Capillary Action' or 'Hydrostatic Pressure.' When a pipe breaches under the slab, the water builds pressure until it forces its way through microscopic concrete pores."
        }
    ];

    return (
        <section id="expert-faq" className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
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
                        Architectural Foundation Security & Foundation Leak Solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {questions.map((faq, index) => (
                        <div key={index} className="bg-slate-900 p-8 rounded-none border border-white/10 hover:border-red-600/50 transition-all group relative overflow-hidden shadow-2xl h-full flex flex-col">
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
                            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-transparent to-red-600/10" />
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-red-600 rounded-none shadow-2xl relative overflow-hidden group border border-white/10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-white/20 transition-all duration-700" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="text-center md:text-left space-y-4">
                            <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter leading-none italic">
                                Sensed a Hydraulic Breach?
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

export default SlabLeakInfo;
