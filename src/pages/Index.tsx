import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import FleaControlInfo from "@/components/landing/FleaControlInfo";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import RandomLinks from "@/components/landing/RandomLinks";

const Index = () => {
  const keyword = "flea control south brooksville";
  const firmName = "South Brooksville Flea Force";
  const phone = "(323) 880-1224";
  const zips = "34601, 34602, 34603, 34604, 34605";

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>{`${keyword} | ${firmName} | ${phone} | ZIP: ${zips}`}</title>
        <meta name="description" content={`Professional ${keyword}. ${firmName} provides 24/7 high-efficiency flea control and structural neutralization in South Brooksville, FL. Call ${phone} now for immediate assistance.`} />
        
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
              "streetAddress": "Brooksville Parasite Sector",
              "addressLocality": "South Brooksville",
              "addressRegion": "FL",
              "postalCode": "34601",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.5306,
              "longitude": -82.3879
            },
            "servesCrawl": ["34601", "34602", "34603", "34604", "34605"],
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
            "serviceType": "Flea Control",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": {
              "@type": "City",
              "name": "South Brooksville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Parasite Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Larvae Tactical Isolation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Parasite Infrastructure Reclamation"
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
      <FleaControlInfo />
      <Contact />
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
