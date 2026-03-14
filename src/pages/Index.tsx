import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import CarpetBeetleInfo from "@/components/landing/CarpetBeetleInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Broomfield CO Carpet Beetle Experts";
  const phoneNumber = "(323) 880-1224";
  const location = "Broomfield, CO";
  const zipCodes = "80020, 80021, 80023, 80031, 80038";
  const fullKeyword = "Carpet Beetle Pest Control Broomfield";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": firmName,
    "image": "/4.jpeg",
    "@id": "https://carpetbeetlepestcontrolbroomfield.vercel.app/",
    "url": "https://carpetbeetlepestcontrolbroomfield.vercel.app/",
    "telephone": "3238801224",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Broomfield",
      "addressLocality": "Broomfield",
      "addressRegion": "CO",
      "postalCode": "80020",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.9205,
      "longitude": -105.0867
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
      { "@type": "City", "name": "Broomfield" },
      { "@type": "PostalCode", "name": "80020" },
      { "@type": "PostalCode", "name": "80021" },
      { "@type": "PostalCode", "name": "80023" },
      { "@type": "PostalCode", "name": "80031" },
      { "@type": "PostalCode", "name": "80038" }
    ],
    "description": `Professional ${fullKeyword}. Specialized structural fiber treatments, precision crack and crevice injections, and exhaustive larvae extraction in ${location} ${zipCodes}. Expert 24/7 emergency dispatch for carpet beetle infestations.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${fullKeyword} | ${firmName} | ${phoneNumber} | ZIP: ${zipCodes}`}</title>
        <meta name="description" content={`Expert ${fullKeyword}. Specialized structural fiber treatments, precision crack and crevice injections, and exhaustive larvae extraction in ${location}. Call ${phoneNumber} now for immediate dispatch. Serving ${zipCodes}.`} />
        <meta name="keywords" content={`${fullKeyword}, carpet beetle removal Broomfield CO, fiber treatment Front Range, emergency insect control Colorado, 80020 beetle service`} />
        <link rel="canonical" href="https://carpetbeetlepestcontrolbroomfield.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero
           title={
            <>
              Carpet Beetle Pest Control <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Broomfield CO</span>
            </>
          }
          subtitle="Broomfield CO's specialized carpet beetle abatement experts. We deploy structural fiber treatments, precision crack and crevice injections, and exhaustive larvae extraction — 24/7."
          image="/4.jpeg"
          overlayImage="/1.jpeg"
          badge="BROOMFIELD CO CARPET BEETLE EXPERTS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <CarpetBeetleInfo />
        <Contact />
      </main>
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
