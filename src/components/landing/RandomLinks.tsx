import { ExternalLink } from "lucide-react";

const RandomLinks = () => {
  const links = [
    { title: "Wasp Nest Removal Hillsborough NC", url: "https://waspnestremovalhillsboroughnc.vercel.app/" },
    { title: "Centipede Repellent Hawaii", url: "https://centipederepellenthawaii.vercel.app/" },
    { title: "Pest Control South Point Ohio", url: "https://pestcontrolsouthpointohio.vercel.app/" },
    { title: "Spider Exterminator Holly Springs NC", url: "https://spiderexterminatorhollyspringsnc.vercel.app/" }
  ];

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-400 hover:text-amber-600 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <ExternalLink className="w-3 h-3 group-hover:rotate-45 transition-transform" />
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomLinks;
