import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import FrozenPipeInfo from "@/components/landing/FrozenPipeInfo";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import RandomLinks from "@/components/landing/RandomLinks";

const Index = () => {
  const keyword = "Frozen Pipe Thawing West Bloomfield";
  const firmName = "West Bloomfield Pipe Force";
  const phone = "(877) 792-1410";
  const zips = "48322, 48323, 48324";

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <title>{`${keyword} | ${firmName} | ${phone} | ZIP: ${zips}`}</title>
        <meta name="description" content={`Professional ${keyword}. ${firmName} provides 24/7 high-efficiency frozen pipe thawing and cryo-reclamation in West Bloomfield, MI. Call ${phone} now for immediate assistance.`} />
        
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
              "streetAddress": "West Bloomfield Pipe Sector",
              "addressLocality": "West Bloomfield",
              "addressRegion": "MI",
              "postalCode": "48322",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.5836,
              "longitude": -83.3591
            },
            "servesCrawl": ["48322", "48323", "48324"],
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
            "serviceType": "Frozen Pipe Thawing",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": {
              "@type": "City",
              "name": "West Bloomfield"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Cryo Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Surgical Cryo-Thawing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Structural Pipe Isolation"
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
      <FrozenPipeInfo />
      <Contact />
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
