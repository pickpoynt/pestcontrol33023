import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import SewerRepairInfo from "@/components/landing/SewerRepairInfo";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import RandomLinks from "@/components/landing/RandomLinks";

const Index = () => {
  const keyword = "Trenchless Sewer Repair Des Moines";
  const firmName = "Des Moines Sewer Force";
  const phone = "(877) 792-1410";
  const zips = "50309, 50310, 50311, 50312, 50315";

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>{`${keyword} | ${firmName} | ${phone} | ZIP: ${zips}`}</title>
        <meta name="description" content={`Professional ${keyword}. ${firmName} Provides 24/7 High-Efficiency Trenchless Sewer Repair And Hydraulic Neutralization In Des Moines, IA. Call ${phone} Now For Immediate Assistance.`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "@id": "",
            "url": window.location.href,
            "telephone": "8777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Des Moines Hydraulic Sector",
              "addressLocality": "Des Moines",
              "addressRegion": "IA",
              "postalCode": "50309",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.5868,
              "longitude": -93.6250
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

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
              "name": "Des Moines"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Hydraulic Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Sewer Pipe Lining" }
                },
                {
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": "Sewer Bursting Barriers" }
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
      <SewerRepairInfo />
      <Contact />
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
