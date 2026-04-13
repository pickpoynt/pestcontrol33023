import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import PestInfo from "@/components/landing/PestInfo";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import RandomLinks from "@/components/landing/RandomLinks";

const Index = () => {
  const keyword = "PEST CONTROL 33023";
  const firmName = "AREA 33023 PEST FORCE";
  const phone = "(323) 880-1224";
  const zips = "33023, 33024, 33025, 33083, 33021";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>{keyword}</title>
        <meta name="description" content={`PROFESSIONAL ${keyword}. ${firmName} PROVIDES 24/7 HIGH-INTENSITY EMERGENCY PEST TERMINATION AND INFESTATION CONTROL IN MIRAMAR AND HOLLYWOOD, FL 33023. CALL ${phone} NOW.`} />
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "/4.png",
            "@id": "",
            "url": "https://pestcontrol33023.vercel.app/",
            "telephone": "3238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "33023 BIOLOGICAL DEFENSE SECTOR",
              "addressLocality": "MIRAMAR",
              "addressRegion": "FL",
              "postalCode": "33023",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.9860,
              "longitude": -80.2003
            },
            "servesCrawl": ["33023", "33024", "33025"],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "EMERGENCY PEST CONTROL",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": {
              "@type": "City",
              "name": "MIRAMAR"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "PEST ELIMINATION SERVICES",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ANT TERMINATION"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ROACH INFESTATION DISRUPTION"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <PestInfo />
      <Contact />
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
