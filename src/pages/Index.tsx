import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import SlabLeakInfo from "@/components/landing/SlabLeakInfo";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import RandomLinks from "@/components/landing/RandomLinks";

const Index = () => {
  const keyword = "slab leak repair Reading PA";
  const firmName = "Reading Slab Leak Force";
  const phone = "(877) 792-1410";
  const zips = "19601, 19604, 19606, 19607, 19608";

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>{`${keyword} | ${firmName} | ${phone} | ZIP: ${zips}`}</title>
        <meta name="description" content={`Professional ${keyword}. ${firmName} provides 24/7 high-intensity emergency slab leak detection and repair in Reading, PA. Call ${phone} now for immediate assistance.`} />
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "/4.jpeg",
            "@id": "",
            "url": "https://slableakrepairreadingpa.vercel.app/",
            "telephone": "8777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Reading Hydraulic Sector",
              "addressLocality": "Reading",
              "addressRegion": "PA",
              "postalCode": "19601",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.3356,
              "longitude": -75.9269
            },
            "servesCrawl": ["19601", "19604", "19606"],
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
            "serviceType": "Slab Leak Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": {
              "@type": "City",
              "name": "Reading"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Hydraulic Leak Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Slab Leak Stabilization"
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
      <SlabLeakInfo />
      <Contact />
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
