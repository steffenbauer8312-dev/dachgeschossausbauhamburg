import type { Service } from '../types'

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://dachgeschossausbauhamburg.de/#localbusiness",
    "name": "Dachgeschossausbau Hamburg",
    "description": "Professioneller Dachgeschossausbau in Hamburg. Wir verwandeln ungenutzte Dachböden in wertvollen Wohnraum – von der Beratung über die Genehmigung bis zur schlüsselfertigen Übergabe.",
    "url": "https://dachgeschossausbauhamburg.de",
    "telephone": "+4915216117439",
    "email": "info@dachgeschossausbauhamburg.de",
    "image": "https://dachgeschossausbauhamburg.de/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "@id": "https://dachgeschossausbauhamburg.de/#address",
      "streetAddress": "Cremon 11",
      "addressLocality": "Hamburg",
      "postalCode": "20457",
      "addressRegion": "Hamburg",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "@id": "https://dachgeschossausbauhamburg.de/#geo",
      "latitude": 53.5481,
      "longitude": 9.9875
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00",
        "description": "Bürozeiten Mo–Fr 8–18 Uhr"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Hamburg"
    },
    "priceRange": "€€",
    "sameAs": [
      "https://www.facebook.com/dachgeschossausbauhamburg",
      "https://www.instagram.com/dachgeschossausbauhamburg"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dachgeschossausbau Leistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dachgeschossausbau",
            "description": "Kompletter Dachgeschossausbau in Hamburg – von der Potenzialanalyse bis zur schlüsselfertigen Übergabe."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dachgauben",
            "description": "Einbau von Schleppgauben, Fledermausgauben, Trapezgauben und Segmentgauben in Hamburg."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dachdämmung",
            "description": "Aufsparrendämmung, Zwischensparrendämmung und Untersparrendämmung nach GEG-Standard."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Innenausbau",
            "description": "Trockenbau, Elektrik, Heizung, Bad und Böden im Dachgeschoss."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "28",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
}

export function generateServiceSchema(service: { name: string; description: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dachgeschossausbau Hamburg"
    },
    "areaServed": {
      "@type": "City",
      "name": "Hamburg"
    },
    "url": `https://dachgeschossausbauhamburg.de/leistungen/${service.slug}`
  }
}

export function generateServiceSchemaFromService(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dachgeschossausbau Hamburg"
    },
    "areaServed": {
      "@type": "City",
      "name": "Hamburg"
    },
    "url": `https://dachgeschossausbauhamburg.de/leistungen/${service.slug}`
  }
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

export function generateHowToSchema(steps: { name: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Dachgeschossausbau Prozess",
    "description": "Schritt für Schritt zum fertigen Dachgeschoss",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  }
}

export function generateArticleSchema({
  headline,
  description,
  author = "Dachgeschossausbau Hamburg",
  datePublished,
  dateModified,
  image = "https://dachgeschossausbauhamburg.de/og-image.jpg",
  url,
}: {
  headline: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://dachgeschossausbauhamburg.de"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dachgeschossausbau Hamburg",
      "url": "https://dachgeschossausbauhamburg.de"
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url || "https://dachgeschossausbauhamburg.de/ratgeber/foerdermittel/"
    }
  }
}