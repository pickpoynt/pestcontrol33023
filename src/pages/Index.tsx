import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WaterHeaterInfo from "@/components/landing/WaterHeaterInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Chino Hills Emergency Water Heater Repair Pros";
  const phoneNumber = "(877) 792-1410";
  const location = "Chino Hills, CA";
  const zipCodes = "91709, 91710, 91708, 92880, 92887";
  const fullKeyword = "Emergency water heater repair Chino Hills";

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{`${fullKeyword} - ${firmName} - ${phoneNumber} - ${zipCodes}`}</title>
        <meta name="description" content={`${fullKeyword} - Professional emergency water heater repair in Chino Hills, CA. We offer expert gas and electric unit repair, element replacement, and leak mitigation. Serving ${zipCodes} and surrounding areas. Call ${phoneNumber} for expert help.`} />
        <meta name="keywords" content="emergency water heater repair Chino Hills CA, hot water repair 91709, gas water heater service 91710, electric water heater repair 92880, no hot water fix Chino Hills" />
        <link rel="canonical" href="https://emergencywaterheaterrepairchinohills.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "/1.jpeg",
            "@id": "https://emergencywaterheaterrepairchinohills.vercel.app/",
            "url": "https://emergencywaterheaterrepairchinohills.vercel.app/",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Chino Hills",
              "addressLocality": "Chino Hills",
              "addressRegion": "CA",
              "postalCode": "91709",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.0336",
              "longitude": "-75.5530"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Emergency Water Heater Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": [
              { "@type": "City", "name": "Chino Hills, CA" },
              { "@type": "PostalCode", "name": "91709" },
              { "@type": "PostalCode", "name": "91710" },
              { "@type": "PostalCode", "name": "91708" },
              { "@type": "PostalCode", "name": "92880" },
              { "@type": "PostalCode", "name": "92887" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Water Heater Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gas Heater Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electric Element Replacement" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tankless Diagnostic" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content={`${fullKeyword} - ${firmName}`} />
        <meta property="og:description" content="Professional emergency water heater repair in Chino Hills, CA. Fast response and safety certified results. Call (877) 792-1410." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emergencywaterheaterrepairchinohills.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Emergency Water Heater Repair <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Chino Hills</span>
            </>
          }
          subtitle="Chino Hills' premier hot water specialists. We provide rapid-response diagnostics and professional repair to restore your hot water today — guaranteed."
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          badge="CHINO HILLS WATER HEATER PROS"
          phone="8777921410"
        />
        <Services />
        <WhyUs />
        <WaterHeaterInfo />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
