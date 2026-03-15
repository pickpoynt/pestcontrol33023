const links = [
  { text: "Emergency Wasp Nest Removal Broomfield", url: "https://emergencywaspnestremovalbroomfield.vercel.app/" },
  { text: "Pantry Moth Exterminator Broomfield", url: "https://pantrymothexterminatorbroomfield.vercel.app/" },
  { text: "Cluster Fly Infestation Help Broomfield", url: "https://clusterflyinfestationhelpbroomfield.vercel.app/" },
  { text: "Carpet Beetle Pest Control Broomfield", url: "https://carpetbeetlepestcontrolbroomfield.vercel.app/" },
];

const RandomLinks = () => {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-600 transition-colors font-bold uppercase tracking-widest text-[10px]"
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
