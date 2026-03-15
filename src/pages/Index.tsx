import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SlabLeakInfo from "@/components/landing/SlabLeakInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Flower Mound TX Slab Leak Experts";
  const phoneNumber = "(877) 792-1410";
  const location = "Flower Mound, TX";
  const zipCodes = "75022, 75027, 75028, 75067, 75077";
  const fullKeyword = "Slab Leak Repair Flower Mound";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": firmName,
    "image": "/4.jpeg",
    "@id": "https://slableakrepairflowermound.vercel.app/",
    "url": "https://slableakrepairflowermound.vercel.app/",
    "telephone": "8777921410",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Flower Mound",
      "addressLocality": "Flower Mound",
      "addressRegion": "TX",
      "postalCode": "75022",
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
    "description": `Professional ${fullKeyword}. Specialized non-invasive sonic mapping, precision foundation restoration, and strategic line re-piping in ${location} ${zipCodes}. Expert 24/7 emergency dispatch for foundation water breaches.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${fullKeyword} | ${firmName} | ${phoneNumber} | ZIP: ${zipCodes}`}</title>
        <meta name="description" content={`Expert ${fullKeyword}. Specialized non-invasive sonic mapping, thermal audit, and precision restoration in ${location}. Call ${phoneNumber} now for immediate dispatch. Serving ${zipCodes}.`} />
        <meta name="keywords" content={`${fullKeyword}, slab leak detection Flower Mound TX, foundation repair Denton County, emergency plumber Flower Mound, 75028 slab service`} />
        <link rel="canonical" href="https://slableakrepairflowermound.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero
           title={
            <>
              Slab Leak Repair <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Flower Mound TX</span>
            </>
          }
          subtitle="Flower Mound TX's specialized slab leak detection and repair experts. We deploy non-invasive sonic mapping, precision foundation boring, and rapid pipe restoration — 24/7."
          image="/4.jpeg"
          overlayImage="/1.jpeg"
          badge="FLOWER MOUND TX SLAB LEAK EXPERTS"
          phone="8777921410"
        />
        <Services />
        <WhyUs />
        <SlabLeakInfo />
        <Contact />
      </main>
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
