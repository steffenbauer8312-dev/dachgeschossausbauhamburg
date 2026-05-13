export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dachgeschossausbau München",
    "description": "Professioneller Dachgeschossausbau in München. Wir verwandeln ungenutzte Dachböden in wertvollen Wohnraum.",
    "url": "https://dachgeschossausbaumuenchen.de",
    "telephone": "+49-89-XXXXXXXX",
    "email": "info@dachgeschossausbaumuenchen.de",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "München",
      "addressRegion": "Bayern",
      "postalCode": "80XXX",
      "streetAddress": "[Ihre Straße]"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.1351",
      "longitude": "11.5820"
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
      "name": "Dachgeschossausbau München"
    },
    "areaServed": {
      "@type": "City",
      "name": "München"
    },
    "url": `https://dachgeschossausbaumuenchen.de/leistungen/${service.slug}`
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