import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { TrustBar } from '@/components/trust-bar';
import { Services } from '@/components/services';
import { WhyChooseUs } from '@/components/why-choose-us';
import { ServiceAreaSection } from '@/components/service-area-section';
import { FAQSection } from '@/components/faq-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Lakewood Garage Door Repair Experts",
    "image": "https://drive.google.com/uc?export=view&id=1JZsO-FqhGCVaE2HNW6CBQZjVAYGHYy1d",
    "@id": "https://lakewoodgaragedoors.com",
    "url": "https://lakewoodgaragedoors.com",
    "telephone": "+15627844156",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Lakewood",
      "addressRegion": "CO",
      "postalCode": "80215",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.7047,
      "longitude": -105.0814
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/lakewoodgaragedoors",
      "https://www.instagram.com/lakewoodgaragedoors"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does garage door repair cost in Lakewood, CO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of garage door repair in Lakewood depends on the issue. Minor fixes like sensor alignment may cost around $75-$150, while broken spring replacement typically ranges from $150 to $350 including parts and labor. We always provide a transparent, upfront quote before starting any work."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day emergency garage door repair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We understand that a stuck garage door is a major security and convenience issue. We offer 24/7 emergency garage door repair services throughout Lakewood and surrounding areas. In most cases, we can dispatch a certified technician to your home within a few hours."
        }
      },
      {
        "@type": "Question",
        "name": "Why won't my garage door open or close?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common reasons a garage door won't open include a broken torsion spring, snapped cables, misaligned photo-eye sensors, or a malfunctioning garage door opener. If the door feels extremely heavy or won't budge, do not force it—call a professional to avoid injury or further damage."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-orange-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <ServiceAreaSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
