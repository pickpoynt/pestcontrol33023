import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SpiderInfo from "@/components/landing/SpiderInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Holly Springs NC Spider Experts";
  const phoneNumber = "(323) 880-1224";
  const location = "Holly Springs, NC";
  const zipCodes = "27540, 27539, 27502, 27526, 27523";
  const fullKeyword = "spider exterminator Holly Springs NC 27540";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": firmName,
    "image": "/4.jpeg",
    "@id": "https://spiderexterminatorhollyspringsnc.vercel.app/",
    "url": "https://spiderexterminatorhollyspringsnc.vercel.app/",
    "telephone": "3238801224",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Holly Springs",
      "addressLocality": "Holly Springs",
      "addressRegion": "NC",
      "postalCode": "27540",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.6513,
      "longitude": -78.8336
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": fullKeyword,
    "provider": {
      "@type": "LocalBusiness",
      "name": firmName
    },
    "areaServed": [
      { "@type": "City", "name": "Holly Springs, NC" },
      { "@type": "PostalCode", "name": "27540" },
      { "@type": "PostalCode", "name": "27539" },
      { "@type": "PostalCode", "name": "27502" },
      { "@type": "PostalCode", "name": "27526" },
      { "@type": "PostalCode", "name": "27523" }
    ],
    "description": `Professional ${fullKeyword}. Expert structural de-webbing, residual barrier sprays, and targeted crawlspace spider treatments in ${location} ${zipCodes}.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${fullKeyword} | ${firmName} | ${phoneNumber} | ZIP: ${zipCodes}`}</title>
        <meta name="description" content={`Expert ${fullKeyword}. Specialized arachnid elimination, de-cobwebbing, and perimeter barriers in ${location}. Call ${phoneNumber} now for 24/7 rapid dispatch. Serving ZIP codes ${zipCodes}.`} />
        <meta name="keywords" content={`${fullKeyword}, spider removal Wake County NC, brown recluse control Holly Springs 27540, pest control North Carolina, de-webbing service Raleigh area`} />
        <link rel="canonical" href="https://spiderexterminatorhollyspringsnc.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero
           title={
            <>
              Spider Exterminator <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Holly Springs NC</span>
            </>
          }
          subtitle="Holly Springs NC's certified spider elimination specialists. We deploy precision residual barriers, web de-cobwebbing protocols, and targeted micro-encapsulated treatments to completely eradicate spiders from your home — 24/7."
          image="/4.jpeg"
          overlayImage="/1.jpeg"
          badge="HOLLY SPRINGS NC SPIDER EXPERTS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <SpiderInfo />
        <Contact />
      </main>
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
