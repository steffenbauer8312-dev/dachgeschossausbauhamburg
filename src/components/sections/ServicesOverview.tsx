import { Link } from 'react-router-dom'
import { SERVICES } from '../../data/services'
import { Button } from '../ui/Button'

export function ServicesOverview() {
  return (
    <section className="py-section bg-bg">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Vom Dachgeschossausbau bis zur Dachgaube – wir bieten alles aus einer Hand. Jedes Projekt wird individuell geplant und kompetent umgesetzt.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-surface rounded-xl p-6 lg:p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                {service.benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-text-secondary">ab {service.priceRange}</span>
                <Link to={`/leistungen/${service.slug}`}>
                  <Button variant="outline" size="sm">
                    Mehr erfahren
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}