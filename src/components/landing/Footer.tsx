import { ShieldCheck, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-white text-lg block leading-none">Flower Mound TX</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500">Pipe Burst Experts</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed italic">
              Specialized hydraulic restoration and emergency flood containment for homeowners throughout Flower Mound, TX. We provide tactical isolation and structural re-piping 24/7.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-8">Rapid Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-amber-500 transition-colors flex items-center gap-2 group"><ExternalLink className="w-3 h-3 group-hover:rotate-45 transition-transform" /> Emergency Services</a></li>
              <li><a href="#why-us" className="hover:text-amber-500 transition-colors flex items-center gap-2 group"><ExternalLink className="w-3 h-3 group-hover:rotate-45 transition-transform" /> Why Choose Us</a></li>
              <li><a href="#faq" className="hover:text-amber-500 transition-colors flex items-center gap-2 group"><ExternalLink className="w-3 h-3 group-hover:rotate-45 transition-transform" /> Training/FAQ</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors flex items-center gap-2 group"><ExternalLink className="w-3 h-3 group-hover:rotate-45 transition-transform" /> Dispatch Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-8">Flower Mound NAP</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm mb-1 uppercase tracking-tight">Main Dispatch Center</p>
                  <p className="text-xs leading-relaxed">
                    Flower Mound, TX<br />
                    Serving: 75022, 75027, 75028, 75067, 75077
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-amber-500 shrink-0" />
                <a href="tel:8777921410" className="text-xl font-bold text-white hover:text-amber-500 transition-colors">
                  (877) 792-1410
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-8">Administration</h4>
            <div className="space-y-4">
              <a 
                href="mailto:leasemynumber@gmail.com?subject=Lease%20Inquiry" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-amber-600 hover:border-amber-600 transition-all group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                LEASE MY NUMBER AND LINK IT TO LEASE PAGE
              </a>
              <p className="text-[10px] italic leading-relaxed">
                Interested in this localized leads platform for your Flower Mound plumbing business? Contact our lease department for exclusive availability.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 space-y-8">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-[10px] leading-relaxed uppercase tracking-tighter opacity-50 font-medium">
                    This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest">
                <p>&copy; {currentYear} Flower Mound TX Pipe Burst Experts. All Rights Reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
