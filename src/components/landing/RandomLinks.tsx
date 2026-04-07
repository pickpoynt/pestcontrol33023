import React from 'react';

const RandomLinks = () => {
  const links = [
    { text: "Trenchless Sewer Repair Des Moines", url: "https://trenchlesssewerrepairdesmoines.vercel.app/" },
    { text: "Trenchless Pipe Repair St. Louis", url: "https://trenchlesspiperepairstlouis.vercel.app/" },
    { text: "Clogged Drain Repair Reading PA", url: "https://cloggeddrainrepairreadingpa.vercel.app/" },
    { text: "Water Heater Repair Reading PA", url: "https://waterheaterrepairreadingpa.vercel.app/" }
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
              className="text-slate-400 hover:text-indigo-600 font-bold text-sm uppercase tracking-widest transition-colors flex items-center gap-2 border-b border-transparent hover:border-indigo-500/30 pb-1"
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
