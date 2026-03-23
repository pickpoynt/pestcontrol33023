import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import TrenchlessSewerInfo from "@/components/landing/TrenchlessSewerInfo";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import RandomLinks from "@/components/landing/RandomLinks";

const Index = () => {
  const keyword = "Trenchless sewer line repair Gastonia";
  const firmName = "Gastonia NC Trenchless Force";
  const phone = "(877) 792-1410";
  const zips = "28052, 28054, 28056";

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>{`${keyword} | ${firmName} | ${phone} | ZIP: ${zips}`}</title>
        <meta name="description" content={`Professional ${keyword}. ${firmName} provides 24/7 high-efficiency trenchless sewer repair and no-dig reclamation in Gastonia, NC. Call ${phone} now for immediate assistance.`} />
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "https://images.unsplash.com/photo-1581094271901-8022df4466f9",
            "@id": "",
            "url": window.location.href,
            "telephone": "8777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Gastonia Trenchless Sector",
              "addressLocality": "Gastonia",
              "addressRegion": "NC",
              "postalCode": "28052",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 35.2621,
              "longitude": -81.1873
            },
            "servesCrawl": ["28052", "28054", "28056"],
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
            "serviceType": "Trenchless Sewer Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": {
              "@type": "City",
              "name": "Gastonia"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Trenchless Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CIPP Pipe Lining"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Surgical Pipe Bursting"
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
      <TrenchlessSewerInfo />
      <Contact />
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
