export interface Service {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  benefits: string[]
  useCases: string[]
  priceRange: string
}

export interface FaqLink {
  label: string
  href: string
}

export interface FaqItem {
  question: string
  answer: string
  category: string
  links?: FaqLink[]
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  duration: string
}

export interface Testimonial {
  name: string
  quote: string
  project: string
  location: string
}

export interface LeadFormData {
  name: string
  phone: string
  email: string
  propertyType: 'einfamilienhaus' | 'mehrfamilienhaus' | 'reihenhaus' | 'dachgeschoss'
  zipCode: string
  message: string
}