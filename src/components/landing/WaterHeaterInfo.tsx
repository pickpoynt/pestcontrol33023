import { ShieldCheck, Target, Hammer, Search, AlertTriangle, HelpCircle } from "lucide-react";

const WaterHeaterInfo = () => {
    const faqs = [
        { q: "Who do I contact if my hot water heater is not working?", a: "Contact a licensed plumbing professional like Chino Hills Emergency Water Heater Repair Pros immediately for diagnostic review." },
        { q: "Is a broken water heater an emergency?", a: "Yes, especially if it's leaking or has no hot water. A leaking unit can cause significant property damage rapidly." },
        { q: "How do I temporarily fix a leaking water heater?", a: "The best temporary fix is to shut off the water supply valve and the power/gas to the unit. Do not attempt internal repairs yourself." },
        { q: "What is usually the most common water heater problem?", a: "A failed heating element or a build-up of sediment in the tank are the most frequent causes of failure." },
        { q: "What is the most common cause of no hot water?", a: "For electric units, it's often a tripped breaker or failed element. For gas, it's usually a pilot light or thermocouple issue." },
        { q: "What is the average life of a hot water heater?", a: "Standard tank water heaters typically last 8 to 12 years with proper maintenance." },
        { q: "Why is my water heater suddenly not working?", a: "Sudden failure can be caused by thermostat malfunction, electrical issues, or a gas supply interruption." },
        { q: "How long is it acceptable to have no hot water?", a: "While not a safety hazard, it affects sanitation and comfort. It's best to resolve it within 24 hours." },
        { q: "What should I do if my water heater breaks?", a: "Turn off the water and power supply, then call a professional Chino Hills technician for review." },
        { q: "What qualifies as a plumbing emergency?", a: "Any situation causing active flooding, total loss of water, or risk of gas leakage qualifies as an emergency." },
        { q: "What to do if I have no heating or hot water?", a: "Check your main electrical panel and gas supply. If both are functional, your unit requires professional diagnostic." },
        { q: "Who do you call when a water heater goes out?", a: "Call Chino Hills Emergency Water Heater Repair Pros at (877) 792-1410 for rapid local response." },
        { q: "Does homeowners insurance cover a busted water heater?", a: "Insurance may cover damage caused by a burst heater, but usually not the replacement of the unit itself due to age." },
        { q: "How do you know if your water heater is about to burst?", a: "Signs include heavy rust at the base, popping sounds (sediment), and persistent leaking from the tank shell." },
        { q: "Is a hot water heater not working an emergency?", a: "It is considered a high-priority repair. In rental properties or freezing weather, it can be a legal emergency." },
        { q: "What happens before a hot water heater goes out?", a: "You might notice rusty water, strange noises, or a gradual decrease in hot water temperature." },
        { q: "What is the first thing to check when there is no hot water?", a: "Check the power source (breaker or pilot light) and ensure the thermostat hasn't been accidentally turned down." },
        { q: "What's the average lifespan of water heater?", a: "Most residential units last around 10 years. Tankless models can last up to 20 years." },
        { q: "How do I reset my hot water heater not working?", a: "Many electric units have a red reset button on the upper thermostat behind the access panel. Switch off the breaker first." },
        { q: "What usually breaks on a water heater?", a: "Heating elements, thermostats, dip tubes, and anode rods are the most common parts to fail." },
        { q: "How often do water heaters fail?", a: "Failure rates increase significantly after the 8-year mark without regular maintenance like tank flushing." },
        { q: "Should I call a plumber for no hot water?", a: "Yes, licensed plumbers are trained to handle both the water and gas/electrical connections of your heater." },
        { q: "What parts go bad on a water heater?", a: "The heating element, thermostat, T&P relief valve, and the internal glass lining of the tank." },
        { q: "Why is my water heater not working all of a sudden?", a: "Component failure (like an element burning out) or an external supply issue are common 'sudden' causes." },
        { q: "What makes water heaters fail?", a: "Sediment build-up, high water pressure, and internal corrosion (sacrificial anode rod failure) are the primary killers." },
        { q: "How long can a water heater leak before it bursts?", a: "A pinhole leak can turn into a major burst in hours or weeks. Never ignore an active tank leak." },
        { q: "Is it an emergency if my water heater is leaking?", a: "Yes. An active leak from the tank body indicates structural failure and imminent risk of flooding." },
        { q: "Where do hot water heaters usually leak?", a: "Common points include the top pipes, the T&P relief valve, the drain valve, or the bottom of the tank." },
        { q: "Is it an emergency if you don't have hot water?", a: "It is a high-priority situation that requires professional attention to ensure safety and sanitation." },
        { q: "What are signs of water heater failure?", a: "Rusty water, rumbling noises, moisture around the base, and inconsistent temperatures." },
        { q: "Should I call a plumber or electrician?", a: "A plumber is usually the best first call, as they specialize in the entire water heater system." },
        { q: "How long should a water heater last?", a: "Expect 10 years for a tank model and 20 for tankless with consistent professional maintenance." },
        { q: "Is it an emergency if you have no heating or hot water?", a: "Yes, it's a priority repair that should be addressed immediately to maintain home safety." },
        { q: "How do I reset a hot water heater?", a: "Toggle the breaker or use the internal high-limit reset button found on electric models." },
        { q: "Who to call for no hot water?", a: "Chino Hills Emergency Water Heater Repair Pros are available at (877) 792-1410." },
        { q: "Why is my water heater having power but not heating?", a: "This usually points to a failed heating element or a faulty thermostat inside the unit." },
        { q: "Why is my hot water not working but cold is?", a: "This indicates the water supply is fine, but the heater's ability to warm the water has failed." },
        { q: "How to fix a water heater with no hot water?", a: "Check the power, then call a professional to test elements, thermostats, and gas valves." },
        { q: "Is no hot water considered an emergency in an apartment?", a: "Yes, most housing laws consider the lack of hot water to be an emergency that must be addressed within 24 hours." }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="faq">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mb-16 text-center mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-widest border border-amber-100 mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Knowledge Base</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-tight">
                        Chino Hills Water Heater <br />
                        <span className="text-amber-600">Expert Knowledge Base</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                    {faqs.map((faq, index) => (
                        <div key={index} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-amber-200 transition-all group hover:shadow-2xl hover:shadow-amber-900/5">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors shadow-sm">
                                    <HelpCircle className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h4>
                                    <p className="text-slate-600 leading-relaxed font-medium italic">{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24 border-t border-slate-100">
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
                        <img src="/4.jpeg" alt="Water Heater Inspection" className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                                <p className="text-white font-bold italic text-xl leading-relaxed">
                                    "Hot water is a necessity, not a luxury. We restore your home's comfort and safety with precision repairs today."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
                                    <Target className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Rapid Response</h3>
                                <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-widest font-bold">Fast, localized service for Chino Hills homeowners in hot water emergencies.</p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-amber-600 text-white shadow-xl shadow-amber-600/30 hover:shadow-2xl transition-all">
                                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30">
                                    <ShieldCheck className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Safety Audits</h3>
                                <p className="text-white/90 text-sm leading-relaxed uppercase tracking-widest font-bold">We bridge the gap between safety and failure by performing full unit safety reviews.</p>
                            </div>
                        </div>

                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-amber-500/10">
                            <img src="/3.jpeg" alt="Water Heater Repair Service" className="w-full object-cover aspect-video transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-6 right-6 px-6 py-2 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest animate-pulse border border-white/20 shadow-lg">
                                Chino Hills Specialist
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaterHeaterInfo;
