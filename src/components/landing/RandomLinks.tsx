import React from 'react';

const RandomLinks = () => {
  const links = [
    { text: "Rodent Control South Brooksville", url: "https://rodentcontrolsouthbrooksville.vercel.app/" },
    { text: "Spider Extermination Nashville TN", url: "https://spiderexterminationnashvilletn.vercel.app/" },
    { text: "Emergency Pipe Repair West Bloomfield", url: "https://emergencypiperepairwestbloomfield.vercel.app/" },
    { text: "Tankless Water Heater Install West Bloomfield", url: "https://tanklesswaterheaterinstallwestbloom.vercel.app/" }
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
              className="text-slate-400 hover:text-teal-600 font-bold text-sm uppercase tracking-widest transition-colors flex items-center gap-2 border-b border-transparent hover:border-teal-500/30 pb-1"
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
