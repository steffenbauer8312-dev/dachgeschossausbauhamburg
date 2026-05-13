import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'
import { CtABlock } from '../components/sections/CtABlock'
import { generateServiceSchemaFromService } from '../lib/schema'

export default function LeistungenPage() {
  const serviceSchemas = SERVICES.map(service => generateServiceSchemaFromService(service))

  return (
    <>
      <Helmet>
        <title>Unsere Leistungen | Dachgeschossausbau München</title>
        <meta
          name="description"
          content="Dachgeschossausbau, Dachgauben, Dachdämmung und Innenausbau – alles aus einer Hand. Wir bieten professionelle Lösungen für Ihr Projekt in München."
        />
        <meta name="keywords" content="Dachgeschossausbau München, Dachgaube, Dachdämmung, Innenausbau, Leistungen" />
        <link rel="canonical" href="https://dachgeschossausbaumuenchen.de/leistungen" />
        {serviceSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 lg:py-24">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Unsere Leistungen
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                Vom Dachgeschossausbau bis zum Innenausbau – wir bieten alles aus einer Hand.
                Jedes Projekt wird individuell geplant und von erfahrenen Fachleuten umgesetzt.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-section bg-bg">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {SERVICES.map((service, index) => (
                <div
                  key={service.id}
                  className={`bg-surface rounded-xl p-8 lg:p-12 shadow-sm border border-border ${
                    index % 2 === 1 ? 'lg:bg-slate-50 lg:border-slate-200' : ''
                  }`}
                >
                  <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                        {service.title}
                      </h2>
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="mb-6">
                        <h3 className="font-semibold text-text-primary mb-3">Vorteile</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-text-secondary">
                              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-6">
                        <h3 className="font-semibold text-text-primary mb-3">Einsatzbereiche</h3>
                        <ul className="space-y-2">
                          {service.useCases.map((useCase, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-text-secondary">
                              <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center gap-6 pt-6 border-t border-border">
                        <div>
                          <span className="text-sm text-text-secondary block mb-1">Richtpreis</span>
                          <span className="text-2xl font-bold text-primary">{service.priceRange}</span>
                        </div>
                        <Link
                          to={`/leistungen/${service.slug}`}
                          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                        >
                          Mehr erfahren
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <div className="bg-slate-100 rounded-xl p-8 aspect-video flex items-center justify-center">
                        <div className="text-center text-text-secondary">
                          <svg className="w-16 h-16 mx-auto mb-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-sm">{service.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-section bg-surface">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Individuelle Beratung für Ihr Projekt
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Jedes Dachgeschoss ist anders. Die angegebenen Richtpreise dienen zur Orientierung –
                wir erstellen Ihnen ein verbindliches Angebot nach einer kostenlosen Vor-Ort-Beratung.
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kostenlose Erstberatung vor Ort
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Transparente Kalkulation ohne versteckte Kosten
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fester Ansprechpartner während des gesamten Projekts
                </li>
              </ul>
            </div>
          </div>
        </section>

        <CtABlock />
      </main>
    </>
  )
}