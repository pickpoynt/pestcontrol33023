import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import PipeBurstInfo from "@/components/landing/PipeBurstInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Flower Mound TX Pipe Burst Experts";
  const phoneNumber = "(877) 792-1410";
  const location = "Flower Mound, TX";
  const zipCodes = "75022, 75027, 75028, 75067, 75077";
  const fullKeyword = "Emergency Pipe Burst Flower Mound";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": firmName,
    "image": "/4.jpeg",
    "@id": "https://emergencypipeburstflowermound.vercel.app/",
    "url": "https://emergencypipeburstflowermound.vercel.app/",
    "telephone": "8777921410",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Flower Mound",
      "addressLocality": "Flower Mound",
      "addressRegion": "TX",
      "postalCode": "75028",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.0146,
      "longitude": -97.0669
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
      { "@type": "City", "name": "Flower Mound" },
      { "@type": "PostalCode", "name": "75022" },
      { "@type": "PostalCode", "name": "75027" },
      { "@type": "PostalCode", "name": "75028" },
      { "@type": "PostalCode", "name": "75067" },
      { "@type": "PostalCode", "name": "75077" }
    ],
    "description": `Professional ${fullKeyword}. Specialized structural flood containment, high-pressure line stabilization, and precision thermal extraction in ${location} ${zipCodes}. Rapid 24/7 service.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${fullKeyword} | ${firmName} | ${phoneNumber} | ZIP: ${zipCodes}`}</title>
        <meta name="description" content={`Expert ${fullKeyword}. Specialized structural flood containment, thermal extraction, and moisture audit in ${location}. Call ${phoneNumber} now for immediate dispatch. Serving ${zipCodes}.`} />
        <meta name="keywords" content={`${fullKeyword}, burst pipe repair Flower Mound TX, emergency plumbing Denton County, 24 hour plumber Flower Mound, 75028 pipe failure`} />
        <link rel="canonical" href="https://emergencypipeburstflowermound.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero
           title={
            <>
              Emergency Pipe Burst <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Flower Mound TX</span>
            </>
          }
          subtitle="Flower Mound TX's rapid response pipe failure specialists. We deploy structural flood containment, high-pressure line stabilization, and precision thermal extraction to halt water damage — 24/7."
          image="/4.jpeg"
          overlayImage="/1.jpeg"
          badge="FLOWER MOUND TX PIPE BURST EXPERTS"
          phone="8777921410"
        />
        <Services />
        <WhyUs />
        <PipeBurstInfo />
        <Contact />
      </main>
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
