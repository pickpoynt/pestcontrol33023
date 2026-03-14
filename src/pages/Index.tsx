import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WaspInfo from "@/components/landing/WaspInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Hillsborough NC Wasp Removal Experts";
  const phoneNumber = "(323) 880-1224";
  const location = "Hillsborough, NC";
  const zipCodes = "27278, 27243, 27510, 27514, 27516, 27705";
  const fullKeyword = "wasp nest removal Hillsborough NC";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": firmName,
    "image": "/4.jpeg",
    "@id": "https://waspnestremovalhillsboroughnc.vercel.app/",
    "url": "https://waspnestremovalhillsboroughnc.vercel.app/",
    "telephone": "3238801224",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hillsborough",
      "addressLocality": "Hillsborough",
      "addressRegion": "NC",
      "postalCode": "27278",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.074,
      "longitude": -79.1014
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
      { "@type": "City", "name": "Hillsborough, NC" },
      { "@type": "PostalCode", "name": "27278" },
      { "@type": "PostalCode", "name": "27243" },
      { "@type": "PostalCode", "name": "27510" },
      { "@type": "PostalCode", "name": "27514" },
      { "@type": "PostalCode", "name": "27516" },
      { "@type": "PostalCode", "name": "27705" }
    ],
    "description": `Professional ${fullKeyword}. Expert nest removal, hornet elimination, and preventive sprays in ${location} ${zipCodes}.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${fullKeyword} | ${firmName} | ${phoneNumber} | ZIP: ${zipCodes}`}</title>
        <meta name="description" content={`Expert ${fullKeyword}. Certified wasp and hornet elimination in ${location}. Call ${phoneNumber} now for 24/7 rapid dispatch. Serving ZIP codes ${zipCodes}.`} />
        <meta name="keywords" content={`${fullKeyword}, wasp removal Orange County NC, hornet control Hillsborough 27278, yellow jacket exterminator North Carolina, pest control Hillsborough NC`} />
        <link rel="canonical" href="https://waspnestremovalhillsboroughnc.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Wasp Nest Removal <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Hillsborough NC</span>
            </>
          }
          subtitle="Hillsborough NC's certified wasp and hornet elimination specialists. We deploy safe, effective, and rapid response protocols to completely remove dangerous nests from your property — 24/7."
          image="/4.jpeg"
          overlayImage="/1.jpeg"
          badge="HILLSBOROUGH NC WASP EXPERTS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <WaspInfo />
        <Contact />
      </main>
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
