import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import EncapsulationInfo from "@/components/landing/EncapsulationInfo";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import RandomLinks from "@/components/landing/RandomLinks";

const Index = () => {
  const keyword = "Crawl Space Encapsulation Montvale NJ";
  const firmName = "Montvale Encapsulation Force";
  const phone = "(380) 266-0944";
  const zips = "07645, 07458, 07677, 07656";

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>{`${keyword} | ${firmName} | ${phone} | ZIP: ${zips}`}</title>
        <meta name="description" content={`PROFESSIONAL ${keyword.toUpperCase()}. ${firmName.toUpperCase()} PROVIDES 24/7 HIGH-EFFICIENCY CRAWL SPACE ENCAPSULATION AND STRUCTURAL NEUTRALIZATION IN MONTVALE, NJ. CALL ${phone} NOW FOR IMMEDIATE ASSISTANCE.`} />
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "https://images.unsplash.com/photo-1581094271901-8022df4466f9",
            "@id": "",
            "url": window.location.href,
            "telephone": "3802660944",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Montvale Foundation Sector",
              "addressLocality": "Montvale",
              "addressRegion": "NJ",
              "postalCode": "07645",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.0468,
              "longitude": -74.0385
            },
            "servesCrawl": ["07645", "07458", "07677", "07656"],
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
            "serviceType": "Crawl Space Encapsulation",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": {
              "@type": "City",
              "name": "Montvale"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Foundation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Vapor Barrier Hardening"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Humidity Infrastructure Reclamation"
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
      <EncapsulationInfo />
      <Contact />
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
