import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RodentControlInfo from "@/components/landing/RodentControlInfo";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import RandomLinks from "@/components/landing/RandomLinks";

const Index = () => {
  const keyword = "rodent control gastonia";
  const firmName = "Gastonia Rodent Force";
  const phone = "(323) 880-1224";
  const zips = "28052, 28054, 28056";

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>{`${keyword} | ${firmName} | ${phone} | ZIP: ${zips}`}</title>
        <meta name="description" content={`Professional ${keyword}. ${firmName} provides 24/7 high-efficiency rodent control and structural neutralization in Gastonia, NC. Call ${phone} now for immediate assistance.`} />
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "https://images.unsplash.com/photo-1581094271901-8022df4466f9",
            "@id": "",
            "url": window.location.href,
            "telephone": "3238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Gastonia Mammal Sector",
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
            "serviceType": "Rodent Control",
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
              "name": "Arachnid Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Rat Tactical Isolation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mice Infrastructure Reclamation"
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
      <RodentControlInfo />
      <Contact />
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
