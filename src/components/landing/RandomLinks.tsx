import React from 'react';

const RandomLinks = () => {
  const links = [
    { text: "Emergency Wasp Nest Removal Broomfield", url: "https://emergencywaspnestremovalbroomfield.vercel.app/" },
    { text: "Carpet Beetle Pest Control Broomfield", url: "https://carpetbeetlepestcontrolbroomfield.vercel.app/" },
    { text: "leaking pipe repair westlake", url: "https://leakingpiperepairwestlake.vercel.app/" },
    { text: "Emergency Slab Leak Repair San Clemente", url: "https://emergencyslableakrepairsanclemente.vercel.app/" }
  ];

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-600 font-bold text-sm uppercase tracking-widest transition-colors flex items-center gap-2 border-b border-transparent hover:border-amber-500/30 pb-1"
            >
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;
