
const RandomLinks = () => {
  const links = [
    { text: "Wasp Nest Removal Hillsborough NC", url: "https://waspnestremovalhillsboroughnc.vercel.app/" },
    { text: "Pest Control South Point Ohio", url: "https://pestcontrolsouthpointohio.vercel.app/" },
    { text: "Slab Leak Repair Flower Mound", url: "https://slableakrepairflowermound.vercel.app/" },
    { text: "Trenchless Sewer Line Repair Gastonia", url: "https://trenchlesssewerlinerepairgastonia.vercel.app/" }
  ];

  return (
    <section className="py-16 bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-12">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-red-600 font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-3 border-b-2 border-transparent hover:border-red-600/50 pb-2 italic group"
            >
              <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-red-600 animate-pulse" />
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;
