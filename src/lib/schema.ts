import type { Service } from '../types'

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dachgeschossausbau Hamburg",
    "description": "Professioneller Dachgeschossausbau in Hamburg. Wir verwandeln ungenutzte Dachböden in wertvollen Wohnraum.",
    "url": "https://dachgeschossausbauhamburg.de",
    "telephone": "+49-40-XXXXXXXX",
    "email": "info@dachgeschossausbauhamburg.de",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hamburg",
      "addressRegion": "Hamburg",
      "postalCode": "20XXX",
      "streetAddress": "[Ihre Straße]"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.5481",
      "longitude": "9.9875"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "€€€"
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