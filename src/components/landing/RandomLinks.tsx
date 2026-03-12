const links = [
  { text: "Water Heater Repair Beaverton", url: "https://waterheaterrepairbeaverton.vercel.app/" },
  { text: "Plumber Montello WI", url: "https://plumbermontellowi.vercel.app/" },
  { text: "Centipedes Extermination Mililani", url: "https://centipedesexterminationmililani.vercel.app/" },
  { text: "Raccoon Control Southwest Ranches", url: "https://raccooncontrolsouthwestranches.vercel.app/" },
];

const RandomLinks = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-600 transition-colors text-sm font-medium uppercase tracking-widest"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;
