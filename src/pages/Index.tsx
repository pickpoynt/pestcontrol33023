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
  const keyword = "Pest Control 33023";
  const firmName = "Area 33023 Pest Force";
  const phone = "(323) 880-1224";
  const zips = "33023, 33024, 33025, 33083, 33021";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>{keyword}</title>
        <meta name="description" content={`Professional ${keyword}. ${firmName} provides 24/7 high-intensity emergency pest termination and infestation control in Miramar and Hollywood, FL 33023. Call ${phone} now for immediate assistance.`} />
        
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
              "streetAddress": "33023 Biological Defense Sector",
              "addressLocality": "Miramar",
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
            "serviceType": "Emergency Pest Control",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": {
              "@type": "City",
              "name": "Miramar"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pest Elimination Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ant Termination"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Roach Infestation Disruption"
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
