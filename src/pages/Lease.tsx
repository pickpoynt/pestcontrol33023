import { Button } from "@/components/ui/button";
import { Mail, Phone, ShieldCheck, ArrowRight } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Lease = () => {
    return (
        <div className="min-h-screen bg-slate-100 selection:bg-red-600 selection:text-white">
            <Header />
            <main className="pt-40 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 blur-[200px] -mr-96 -mt-96 rounded-full" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-900/5 blur-[150px] -ml-72 -mb-72 rounded-full" />
                
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-200">
                        <div className="bg-red-600 p-16 md:p-24 text-center text-white relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150 rotate-45" />
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/20 text-white mb-8 font-black uppercase tracking-[0.4em] text-[10px] border border-white/10 leading-none">
                                <ShieldCheck className="w-5 h-5 animate-pulse" />
                                Biological Defense Secure
                            </div>
                            <h1 className="text-4xl md:text-7xl font-heading font-black mb-8 uppercase tracking-tighter leading-none italic">
                                Lease This <br />
                                <span className="text-slate-950 underline decoration-white/30 underline-offset-8">Termination Node</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-white/90 font-black italic uppercase leading-none tracking-tighter">
                                Dominate 33023 Pest Control for just $19/month.
                            </p>
                        </div>

                        <div className="p-12 md:p-20">
                            <div className="grid md:grid-cols-2 gap-20 items-stretch mb-20">
                                <div className="space-y-10">
                                    <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter italic border-l-8 border-red-600 pl-8 leading-none">Why This Node?</h2>
                                    <ul className="space-y-6">
                                        {[
                                            "Exclusive Protocol: (323) 880-1224",
                                            "Direct Dispatch From Miramar 33023",
                                            "Master-Aligned Bio SEO Optimization",
                                            "No Contractual Lock-in - Cancel Anytime",
                                            "Instant Biological Authority"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 text-slate-600 font-black uppercase tracking-widest text-[11px] italic group cursor-default leading-none">
                                                <div className="w-8 h-8 rounded-lg bg-red-600/10 flex items-center justify-center p-2 group-hover:bg-red-600 transition-colors">
                                                    <ShieldCheck className="w-4 h-4 text-red-600 group-hover:text-white" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="bg-slate-50 rounded-[2rem] p-12 border border-slate-200 text-center flex flex-col justify-center relative shadow-inner overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rotate-45 -mr-12 -mt-12 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4" />
                                    <div className="text-[100px] font-black text-slate-950 leading-[0.8] mb-4 uppercase italic tracking-tighter group-hover:scale-110 transition-transform">$19</div>
                                    <div className="text-red-600 font-black uppercase tracking-[0.4em] text-xs mb-10 italic leading-none">PER MONTH / 33023 NODE</div>
                                    <Button className="w-full bg-slate-950 hover:bg-slate-900 text-white h-24 text-2xl font-black rounded-[1.5rem] shadow-2xl transition-all hover:scale-105 group border border-white/10 uppercase tracking-tighter" asChild>
                                        <a href="mailto:leasemynumber@gmail.com" className="flex items-center justify-center gap-4">
                                            Secure This Node
                                            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            <div className="border-t border-slate-100 pt-16 text-center space-y-10">
                                <h3 className="text-2xl font-black text-slate-950 mb-8 uppercase tracking-tighter italic border-b-2 border-red-600/10 pb-6 inline-block leading-none">Crisis Signal Hub</h3>
                                <div className="flex flex-col md:flex-row justify-center gap-12 lg:gap-24">
                                    <div className="flex items-center gap-6 justify-center group cursor-pointer">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Mail className="w-8 h-8 text-white group-hover:animate-pulse" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-none mb-2 italic">Official Signal</p>
                                            <a href="mailto:leasemynumber@gmail.com" className="text-xl font-black text-slate-900 hover:text-red-600 border-b-2 border-transparent hover:border-red-600/30 pb-1 italic transition-all uppercase leading-none">leasemynumber@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 justify-center group cursor-pointer">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Phone className="w-8 h-8 text-white group-hover:animate-pulse" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-none mb-2 italic">Node Dial</p>
                                            <span className="text-2xl font-black text-slate-900 italic tracking-tighter uppercase leading-none">(323) 880-1224</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Lease;
