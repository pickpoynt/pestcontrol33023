import React from 'react';

const RandomLinks = () => {
  const links = [
    { text: "Emergency Main Water Line Leak Repair Gastonia", url: "https://emergencymainwaterlineleakrepairgas.vercel.app/" },
    { text: "Hydro Jetting Services Flower Mound", url: "https://hydrojettingservicesflowermound.vercel.app/" },
    { text: "Emergency Pipe Burst Flower Mound", url: "https://emergencypipeburstflowermound.vercel.app/" },
    { text: "Slab Leak Repair Flower Mound", url: "https://slableakrepairflowermound.vercel.app/" }
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
              className="text-slate-400 hover:text-blue-600 font-bold text-sm uppercase tracking-widest transition-colors flex items-center gap-2 border-b border-transparent hover:border-blue-500/30 pb-1"
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
