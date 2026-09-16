import type { Service } from '../types'

const SITE_URL = 'https://dachgeschossausbauhamburg.de'
const SITE_NAME = 'Dachgeschossausbau Hamburg'
const LOGO_URL = `${SITE_URL}/logo.png`

/* ============================================================
   AUTHOR / TEAM — E-E-A-T Personen-Signale
   ============================================================ */

export interface AuthorPerson {
  name: string
  jobTitle: string
  description: string
  url?: string
  image?: string
  knowsAbout?: string[]
  worksFor?: string
  sameAs?: string[]
  alumniOf?: string
}

export const AUTHOR_PRIMARY: AuthorPerson = {
  name: 'Steffen Bauer',
  jobTitle: 'Geschäftsführer & Projektleiter Dachgeschossausbau Hamburg',
  description:
    'Steffen Bauer leitet seit über einem Jahrzehnt Dachgeschossausbau-Projekte in Hamburg. Er koordiniert die Hamburger GU-Teams, prüft Genehmigungsfragen nach HBauO 2026 und ist verantwortlich für die Kalkulation komplexer Bestandsausbauten in Erhaltungssatzungs- und Denkmalschutzgebieten.',
  url: `${SITE_URL}/ueber-uns/`,
  image: `${SITE_URL}/team/steffen-bauer.jpg`,
  knowsAbout: [
    'Hamburger Bauordnung (HBauO 2026)',
    'Denkmalschutz Hamburg (HDSchG)',
    'KfW 261 / BAFA Einzelmaßnahmen',
    'Erhaltungssatzung Hamburg',
    'Statik im Dachgeschoss',
    'Dachgauben (Schlepp-, Fledermaus-, Trapezgaube)',
  ],
  worksFor: SITE_NAME,
  sameAs: [],
  alumniOf: 'Handwerkskammer Hamburg',
}

export const AUTHOR_ARCHITEKT: AuthorPerson = {
  name: 'Dipl.-Ing. Anna Reinhardt',
  jobTitle: 'Architektin für Dachgeschossausbau & Bestandsbau',
  description:
    'Anna Reinhardt ist verantwortliche Architektin für unsere DG-Projekte. Mitglied der Hamburgischen Architektenkammer, Spezialisierung auf Altbau-Dachgeschossausbau und Erhaltungssatzungsgebiete in Eppendorf, Eimsbüttel und Altona.',
  url: `${SITE_URL}/ueber-uns/team/`,
  knowsAbout: [
    'Bauantrag Hamburg',
    'Bebauungspläne Hamburg',
    'Lichtplanung im Dachgeschoss',
    'Brandschutz im DG (§69 HBauO)',
    'KfW-Effizienzhaus-Planung',
  ],
  worksFor: SITE_NAME,
  alumniOf: 'HafenCity Universität Hamburg',
}

export const AUTHOR_STATIKER: AuthorPerson = {
  name: 'Dipl.-Ing. Markus Lehmann',
  jobTitle: 'Tragwerksplaner & Bauleiter',
  description:
    'Markus Lehmann ist verantwortlicher Statiker für unsere Dachgeschossausbau-Projekte. Spezialisiert auf Holzbau, Bestandssanierung und Umnutzung von Dachgeschossen in Hamburger Gründerzeit- und Nachkriegsbauten.',
  url: `${SITE_URL}/ueber-uns/team/`,
  knowsAbout: [
    'Statik Holzbau',
    'Sparrenverstärkung',
    'Lastannahmen nach Eurocode',
    'Bestandsaufnahme Tragwerk',
    'Gauben-Konstruktion',
  ],
  worksFor: SITE_NAME,
  alumniOf: 'Technische Universität Hamburg-Harburg',
}

export function generatePersonSchema(author: AuthorPerson) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person-${author.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`,
    name: author.name,
    jobTitle: author.jobTitle,
    description: author.description,
    url: author.url,
    image: author.image,
    worksFor: {
      '@type': 'Organization',
      name: author.worksFor || SITE_NAME,
      url: SITE_URL,
    },
    knowsAbout: author.knowsAbout,
    alumniOf: author.alumniOf,
    sameAs: author.sameAs || [],
  }
}

/* ============================================================
   PUBLISHER / ORGANIZATION
   ============================================================ */

export const ORGANIZATION_SAMEAS = [
  'https://www.facebook.com/dachgeschossausbauhamburg',
  'https://www.instagram.com/dachgeschossausbauhamburg',
  'https://dachgeschossausbauhamburg.blogspot.com/',
  'https://dachgeschossausbauhamburg.wordpress.com/',
  'https://sites.google.com/view/dachgeschossausbauhamburg/home',
  'https://hamburger.branchen.online/eintrag/dachgeschossausbau-hamburg-d8k4l',
  'https://dachsanierunghamburg.z1.web.core.windows.net/',
]

export function generatePublisherSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#publisher`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: '512',
      height: '512',
    },
    image: `${SITE_URL}/og-image.jpg`,
    description:
      'Hamburger Generalunternehmen für Dachgeschossausbau. Spezialisiert auf HBauO 2026, Denkmalschutz, KfW-Förderung und Bestandssanierung in allen 7 Hamburger Bezirken.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cremon 11',
      addressLocality: 'Hamburg',
      postalCode: '20457',
      addressRegion: 'Hamburg',
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-152-16117439',
      contactType: 'customer service',
      email: 'info@dachgeschossausbauhamburg.de',
      areaServed: 'DE',
      availableLanguage: ['de'],
    },
    foundingDate: '2014-01-01',
    founder: {
      '@type': 'Person',
      name: 'Steffen Bauer',
    },
    sameAs: ORGANIZATION_SAMEAS,
    knowsAbout: [
      'Dachgeschossausbau',
      'Dachgauben',
      'Dachdämmung',
      'KfW 261',
      'BAFA Einzelmaßnahmen',
      'HBauO 2026',
      'Hamburger Denkmalschutz',
    ],
  }
}

/* ============================================================
   LOCAL BUSINESS (Hauptschema auf jeder Seite)
   ============================================================ */

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    description:
      'Professioneller Dachgeschossausbau in Hamburg. Wir verwandeln ungenutzte Dachböden in wertvollen Wohnraum – von der Beratung über die Genehmigung bis zur schlüsselfertigen Übergabe.',
    url: SITE_URL,
    telephone: '+4915216117439',
    email: 'info@dachgeschossausbauhamburg.de',
    image: `${SITE_URL}/og-image.jpg`,
    logo: LOGO_URL,
    address: {
      '@type': 'PostalAddress',
      '@id': `${SITE_URL}/#address`,
      streetAddress: 'Cremon 11',
      addressLocality: 'Hamburg',
      postalCode: '20457',
      addressRegion: 'Hamburg',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      '@id': `${SITE_URL}/#geo`,
      latitude: 53.5481,
      longitude: 9.9875,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
        description: 'Bürozeiten Mo–Fr 8–18 Uhr',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Hamburg',
    },
    priceRange: '€€',
    sameAs: ORGANIZATION_SAMEAS,
    parentOrganization: {
      '@type': 'Organization',
      '@id': `${SITE_URL}#publisher`,
      name: SITE_NAME,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dachgeschossausbau Leistungen',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dachgeschossausbau',
            description:
              'Kompletter Dachgeschossausbau in Hamburg – von der Potenzialanalyse bis zur schlüsselfertigen Übergabe.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dachgauben',
            description:
              'Einbau von Schleppgauben, Fledermausgauben, Trapezgauben und Segmentgauben in Hamburg.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dachdämmung',
            description:
              'Aufsparrendämmung, Zwischensparrendämmung und Untersparrendämmung nach GEG-Standard.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Innenausbau',
            description:
              'Trockenbau, Elektrik, Heizung, Bad und Böden im Dachgeschoss.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '28',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

/* ============================================================
   SERVICE
   ============================================================ */

export function generateServiceSchema(service: { name: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
    },
    areaServed: {
      '@type': 'City',
      name: 'Hamburg',
    },
    url: `${SITE_URL}/leistungen/${service.slug}`,
  }
}

export function generateServiceSchemaFromService(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
    },
    areaServed: {
      '@type': 'City',
      name: 'Hamburg',
    },
    url: `${SITE_URL}/leistungen/${service.slug}`,
  }
}

/* ============================================================
   FAQ
   ============================================================ */

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/* ============================================================
   BREADCRUMB
   ============================================================ */

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/* ============================================================
   HOWTO
   ============================================================ */

export function generateHowToSchema(steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Dachgeschossausbau Prozess',
    description: 'Schritt für Schritt zum fertigen Dachgeschoss',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

/* ============================================================
   ARTICLE — mit E-E-A-T: Person author + reviewedBy + lastReviewed
   ============================================================ */

export interface ArticleInput {
  headline: string
  description: string
  author: AuthorPerson
  reviewer?: AuthorPerson
  datePublished: string
  dateModified: string
  lastReviewed: string
  image?: string
  url?: string
  keywords?: string[]
  speakable?: string[]
  wordCount?: number
}

export function generateArticleSchema(input: ArticleInput) {
  const authorSchema = {
    '@type': 'Person',
    name: input.author.name,
    jobTitle: input.author.jobTitle,
    url: input.author.url || `${SITE_URL}/ueber-uns/`,
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }

  const article: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    image: input.image || `${SITE_URL}/og-image.jpg`,
    author: authorSchema,
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}#publisher`,
      name: SITE_NAME,
      logo: LOGO_URL,
    },
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    lastReviewed: input.lastReviewed,
    reviewedBy: input.reviewer
      ? {
          '@type': 'Person',
          name: input.reviewer.name,
          jobTitle: input.reviewer.jobTitle,
          url: input.reviewer.url || `${SITE_URL}/ueber-uns/team/`,
        }
      : authorSchema,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': input.url || SITE_URL,
    },
    inLanguage: 'de-DE',
    isAccessibleForFree: true,
  }

  if (input.keywords && input.keywords.length > 0) {
    article.keywords = input.keywords.join(', ')
  }
  if (input.wordCount) {
    article.wordCount = input.wordCount
  }
  if (input.speakable && input.speakable.length > 0) {
    article.speakable = {
      '@type': 'SpeakableSpecification',
      xpath: input.speakable,
    }
  }

  return article
}

/* ============================================================
   REVIEW / TESTIMONIAL
   ============================================================ */

export interface ReviewInput {
  author: string
  body: string
  rating: number
  datePublished: string
  project?: string
  location?: string
  url?: string
}

export function generateReviewSchema(reviews: ReviewInput[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      datePublished: r.datePublished,
      reviewBody: r.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '5',
        worstRating: '1',
      },
      itemReviewed: {
        '@type': 'Service',
        name: r.project || 'Dachgeschossausbau',
      },
      locationCreated: r.location ? { '@type': 'Place', name: r.location } : undefined,
    })),
  }
}

/* ============================================================
   IMAGE / PLACE
   ============================================================ */

export function generateImageObjectSchema(url: string, caption: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: url,
    caption,
    creditText: SITE_NAME,
    copyrightNotice: `© ${new Date().getFullYear()} ${SITE_NAME}`,
  }
}

/* ============================================================
   DATASET (für Digital-PR-Assets wie Studien, Atlas)
   ============================================================ */

export function generateDatasetSchema(opts: {
  name: string
  description: string
  url: string
  creator: string
  datePublished: string
  dateModified: string
  keywords?: string[]
  spatialCoverage?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    identifier: opts.url,
    creator: {
      '@type': 'Organization',
      name: opts.creator,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: 'de-DE',
    spatialCoverage: opts.spatialCoverage
      ? { '@type': 'Place', name: opts.spatialCoverage }
      : undefined,
    keywords: opts.keywords?.join(', '),
    license: 'https://creativecommons.org/licenses/by-nc/4.0/',
  }
}

/* ============================================================
   WEBPAGE mit Speakable (für Featured Snippets)
   ============================================================ */

export function generateWebPageWithSpeakable(opts: {
  url: string
  name: string
  description: string
  xpaths: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': opts.url,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: 'de-DE',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      xpath: opts.xpaths,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}#publisher`,
      name: SITE_NAME,
    },
  }
}