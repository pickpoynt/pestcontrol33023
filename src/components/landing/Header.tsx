import { ShieldCheck, Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-slate-950/95 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl" : "bg-transparent py-8"}`}>
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/40 group-hover:scale-110 transition-all duration-500">
                            <ShieldCheck className="text-white w-7 h-7" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-heading font-black text-2xl text-white leading-none tracking-tighter uppercase">READING PA</span>
                            <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] leading-none mt-1">DRAIN FORCE</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-10">
                        {["Services", "Why Us", "Expert FAQ", "Contact"].map((item) => (
                            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-xs font-black text-white hover:text-red-500 transition-colors uppercase tracking-[0.2em]">
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden sm:flex flex-col items-end mr-4 group">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">DRAIN COMMAND CENTER</p>
                            <a href="tel:8777921410" className="text-2xl font-black text-white hover:text-red-500 transition-all duration-300 tracking-tighter leading-none">(877) 792-1410</a>
                        </div>
                        <Button className="bg-red-600 hover:bg-red-700 text-white font-black px-8 h-14 rounded-2xl shadow-lg shadow-red-900/20 text-sm tracking-widest hidden md:flex items-center gap-2 group border border-white/10" asChild>
                            <a href="tel:8777921410">
                                <Phone className="w-4 h-4 mr-2 animate-pulse" />
                                CLICK TO CALL
                            </a>
                        </Button>
                        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </nav>
            </div>
            
            {/* Mobile Header Click to Call Button (Sticky) */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full bg-red-600 z-[99] border-t border-white/20">
                <a href="tel:8777921410" className="flex items-center justify-center gap-3 py-6 text-white font-black uppercase tracking-widest">
                    <Phone className="w-6 h-6 animate-pulse" />
                    Emergency Node Dispatch: (877) 792-1410
                </a>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 p-8 flex flex-col gap-6 animate-fade-in">
                    {["Services", "Why Us", "Expert FAQ", "Contact"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-xl font-black text-white uppercase tracking-tighter" onClick={() => setIsMenuOpen(false)}>
                            {item}
                        </a>
                    ))}
                    <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Primary Contact Node</p>
                        <a href="tel:8777921410" className="text-3xl font-black text-white">(877) 792-1410</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
