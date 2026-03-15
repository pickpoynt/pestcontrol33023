import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import HydroJettingInfo from "@/components/landing/HydroJettingInfo";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import RandomLinks from "@/components/landing/RandomLinks";

const Index = () => {
  const keyword = "Hydro Jetting Services Flower Mound";
  const firmName = "Flower Mound TX Hydro Jetting Experts";
  const phone = "(877) 792-1410";
  const zips = "75022, 75027, 75028, 75067, 75077";

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>{`${keyword} | ${firmName} | ${phone} | ZIP: ${zips}`}</title>
        <meta name="description" content={`Professional ${keyword}. ${firmName} provides 24/7 high-pressure drain line reclamation in Flower Mound, TX. Call ${phone} now for immediate assistance in ${zips}.`} />
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
            "@id": "",
            "url": window.location.href,
            "telephone": "8777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Flower Mound Area",
              "addressLocality": "Flower Mound",
              "addressRegion": "TX",
              "postalCode": "75028",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 33.0146,
              "longitude": -97.0667
            },
            "servesCrawl": ["75022", "75027", "75028", "75067", "75077"],
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
            "serviceType": "Hydro Jetting and Drain Reclamation",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": {
              "@type": "City",
              "name": "Flower Mound"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Hydro Jetting Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sewer Line Hydro Jetting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CCTV Drain Inspection"
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
      <HydroJettingInfo />
      <Contact />
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
