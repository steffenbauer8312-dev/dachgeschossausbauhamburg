import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'
import { FAQ_DATA } from '../data/faqData'
import { CtABlock } from '../components/sections/CtABlock'
import { generateServiceSchemaFromService, generateBreadcrumbSchema, generateFaqSchema } from '../lib/schema'

const service = SERVICES.find(s => s.id === 'daemmung')!
const relatedServices = SERVICES.filter(s => s.id !== 'daemmung')
const faqs = FAQ_DATA.filter(faq =>
  ['Technik', 'Kosten', 'Wirtschaftlichkeit'].includes(faq.category)
)

const daemmungTypes = [
  {
    name: 'Aufsparrendämmung',
    description: 'Die Dämmung wird auf den Sparren oberhalb der Dachlatten aufgebracht. Diese Methode bietet die höchste Dämmleistung und beseitigt Wärmebrücken nahezu vollständig. Bei einer kompletten Dacherneuerung oder Neudeckung empfohlen.',
    bestFor: 'Neubau, komplette Dacherneuerung, KfW-Förderung',
    benefits: ['Höchste Dämmleistung', 'Keine Wärmebrücken', 'Kein Innenraumbedarf während der Montage'],
    priceRange: '120–150 €/m²'
  },
  {
    name: 'Zwischensparrendämmung',
    description: 'Die Dämmung wird zwischen den Sparren eingebracht. Eine bewährte Methode für die nachträgliche Dämmung. Mit hochwertiger Dampfsperre und Mineralwolle erreicht sie gute Dämmwerte bei moderaten Kosten.',
    bestFor: 'Sanierung, nachträglicher Einbau, Bestandsschutz',
    benefits: ['Gutes Preis-Leistungs-Verhältnis', 'Bewährte Technik', 'Relativ einfache Montage'],
    priceRange: '60–100 €/m²'
  },
  {
    name: 'Untersparrendämmung',
    description: 'Die Dämmung wird unterhalb der Sparren angebracht, oft als Ergänzung zur Zwischensparrendämmung. Schafft eine ebene Fläche für den Innenausbau und verbessert den U-Wert zusätzlich.',
    bestFor: 'Ergänzung zur Zwischensparrendämmung, Sichtdachstuhl',
    benefits: ['Optimale Ergänzung', 'Ebnete Oberfläche für Innenausbau', 'Schutz vor Kältebrücken'],
    priceRange: '40–80 €/m²'
  }
]

export default function DaemmungPage() {
  const serviceSchema = generateServiceSchemaFromService(service)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Startseite', url: 'https://dachgeschossausbaumuenchen.de' },
    { name: 'Leistungen', url: 'https://dachgeschossausbaumuenchen.de/leistungen' },
    { name: 'Dachdämmung', url: 'https://dachgeschossausbaumuenchen.de/leistungen/daemmung' }
  ])
  const faqSchema = generateFaqSchema(faqs)

  return (
    <>
      <Helmet>
        <title>Dachdämmung München | Arten, Kosten & KfW-Förderung 2025</title>
        <meta
          name="description"
          content="Professionelle Dachdämmung in München: Aufsparrendämmung, Zwischensparrendämmung & Untersparrendämmung. Energiekosten sparen mit KfW-Förderung. Jetzt beraten lassen."
        />
        <meta name="keywords" content="Dachdämmung München, Aufsparrendämmung, Zwischensparrendämmung, KfW Förderung, Energie sparen" />
        <link rel="canonical" href="https://dachgeschossausbaumuenchen.de/leistungen/daemmung" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main>
        {/* Breadcrumb */}
        <div className="bg-surface border-b border-border">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-text-secondary">
              <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
              <span>/</span>
              <Link to="/leistungen" className="hover:text-primary transition-colors">Leistungen</Link>
              <span>/</span>
              <span className="text-primary font-medium">Dachdämmung</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 lg:py-24">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Dachdämmung
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8">
                Professionelle Dämmung für optimalen Wärmeschutz und Energieeffizienz. Wir bieten Aufsparrendämmung, Zwischensparrendämmung und Untersparrendämmung – abgestimmt auf Ihre baulichen Gegebenheiten.
              </p>
              <div className="flex items-center gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                  <span className="text-sm text-slate-300 block mb-1">Richtpreis</span>
                  <span className="text-2xl font-bold text-amber-400">{service.priceRange}</span>
                </div>
                <div className="text-sm text-slate-300">
                  <span className="font-semibold text-white">Bis zu 30%</span> Heizkosten sparen
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-section bg-bg">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Warum Dämmung wichtig */}
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
                    Warum ist Dachdämmung wichtig?
                  </h2>
                  <div className="text-text-secondary leading-relaxed space-y-4">
                    <p>
                      Bis zu 30% der Heizenergie gehen durch ein unzureichend gedämmtes Dach verloren. Eine fachgerechte Dachdämmung schützt nicht nur vor Kälte im Winter, sondern auch vor Überhitzung im Sommer.
                    </p>
                    <p>
                      Die Energieeinsparverordnung (EnEV) schreibt für Dachflächen einen maximalen U-Wert von 0,20 W/(m²·K) vor. Unsere Dämmung erreicht problemlos Werte darunter – oft 0,14 bis 0,18 W/(m²·K) bei Standardaufbauten.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6">
                      <h3 className="font-semibold text-text-primary mb-2">KfW-Förderung nutzen</h3>
                      <p className="text-text-secondary text-sm mb-3">
                        Energetische Sanierungen werden von der KfW mit zinsgünstigen Darlehen und Zuschüssen gefördert. Für Dachdämmung können Sie Programm 151 (Wohneigentum) oder Programm 152 (Klimaschutz) nutzen.
                      </p>
                      <p className="text-text-secondary text-sm">
                        Wir beraten Sie zu den aktuellen Fördermöglichkeiten und übernehmen die Antragstellung.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dämmungstypen */}
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Dämmungsmethoden im Vergleich
                  </h2>
                  <div className="space-y-6">
                    {daemmungTypes.map((type, index) => (
                      <div key={index} className="bg-surface rounded-xl p-6 lg:p-8 border border-border">
                        <div className="lg:flex lg:gap-6">
                          <div className="lg:flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-semibold text-text-primary">{type.name}</h3>
                              <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                                {type.priceRange}
                              </span>
                            </div>
                            <p className="text-text-secondary leading-relaxed mb-4">{type.description}</p>
                            <div className="text-sm text-text-secondary">
                              <span className="font-medium text-text-primary">Einsatzgebiet: </span>{type.bestFor}
                            </div>
                          </div>
                          <div className="lg:w-64 mt-4 lg:mt-0">
                            <h4 className="font-medium text-text-primary mb-2 text-sm">Vorteile</h4>
                            <ul className="space-y-1">
                              {type.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                                  <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vorteile */}
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Ihre Vorteile
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="bg-surface rounded-xl p-6 border border-border">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-text-primary font-medium">{benefit}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Einsatzbereiche */}
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Einsatzbereiche
                  </h2>
                  <div className="bg-surface rounded-xl p-8 border border-border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.useCases.map((useCase, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          <span className="text-text-secondary">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Entscheidungshilfe */}
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Welche Dämmung ist die richtige?
                  </h2>
                  <div className="bg-surface rounded-xl p-8 border border-border">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 font-semibold text-text-primary">Situation</th>
                            <th className="text-left py-3 px-4 font-semibold text-text-primary">Empfohlene Methode</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border">
                            <td className="py-3 px-4 text-text-secondary">Neubau oder komplette Dacherneuerung</td>
                            <td className="py-3 px-4 text-text-primary font-medium">Aufsparrendämmung</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 px-4 text-text-secondary">Nachträgliche Dämmung im Bestand</td>
                            <td className="py-3 px-4 text-text-primary font-medium">Zwischensparrendämmung</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 px-4 text-text-secondary">Sichtdachstuhl erhalten, zusätzliche Dämmung</td>
                            <td className="py-3 px-4 text-text-primary font-medium">Untersparrendämmung</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 px-4 text-text-secondary">Maximale Dämmleistung gewünscht</td>
                            <td className="py-3 px-4 text-text-primary font-medium">Aufsparrendämmung + Zwischensparrendämmung</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 text-text-secondary">KfW-Förderung gewünscht</td>
                            <td className="py-3 px-4 text-text-primary font-medium">Aufsparrendämmung oder Zwischensparrendämmung</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Info Card */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="font-semibold text-text-primary mb-3">Gut zu wissen</h3>
                  <ul className="space-y-3 text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>KfW-Förderung für energetische Maßnahmen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>U-Wert-Mindestanforderung: 0,20 W/(m²·K)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Heizkostenersparnis bis zu 30%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Angenehmes Raumklima Sommer wie Winter</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-primary text-white rounded-xl p-6">
                  <h3 className="font-semibold mb-3">Förderung prüfen lassen</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Wir berechnen Ihre mögliche KfW-Förderung und übernehmen die Antragstellung.
                  </p>
                  <Link
                    to="/kontakt"
                    className="block w-full bg-white text-primary font-medium text-center py-3 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    Beratung anfordern
                  </Link>
                </div>

                {/* Related Services */}
                <div className="bg-surface rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-text-primary mb-4">Das könnte Sie auch interessieren</h3>
                  <div className="space-y-3">
                    {relatedServices.map((relService) => (
                      <Link
                        key={relService.id}
                        to={`/leistungen/${relService.slug}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-text-primary text-sm font-medium">{relService.title}</span>
                        <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-section bg-surface">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8">
                Häufig gestellte Fragen zur Dachdämmung
              </h2>
              <div className="space-y-0 divide-y divide-border">
                {faqs.map((faq, index) => (
                  <details key={index} className="faq-item group py-5">
                    <summary className="flex items-center justify-between gap-4 text-lg font-medium text-text-primary hover:text-primary transition-colors cursor-pointer list-none">
                      {faq.question}
                      <svg className="w-5 h-5 text-text-secondary group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="pb-6 pt-4 text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtABlock />
      </main>
    </>
  )
}