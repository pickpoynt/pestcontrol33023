const links = [
  { text: "Bed Bug Exterminator Zebulon NC", url: "https://bedbugexterminatorzebulonnc.vercel.app/" },
  { text: "Cockroach Exterminator Clarksdale MS", url: "https://cockroachexterminatorclarksdalems.vercel.app/" },
  { text: "Hornet Nest Removal Brooksville FL", url: "https://hornetnestremovalbrooksvillefl.vercel.app/" },
  { text: "Pest Control South Point Ohio", url: "https://pestcontrolsouthpointohio.vercel.app/" },
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
