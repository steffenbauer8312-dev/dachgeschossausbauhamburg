import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'
import { FAQ_DATA } from '../data/faqData'
import { CtABlock } from '../components/sections/CtABlock'
import { generateServiceSchemaFromService, generateBreadcrumbSchema, generateFaqSchema } from '../lib/schema'

const service = SERVICES.find(s => s.id === 'dachgauben')!
const relatedServices = SERVICES.filter(s => s.id !== 'dachgauben')
const faqs = FAQ_DATA.filter(faq =>
  ['Technik', 'Genehmigung', 'Kosten'].includes(faq.category)
)

const gaubeTypes = [
  {
    name: 'Schleppgaube',
    description: 'Die klassische Gaubenform mit geneigtem Dach. Besonders geeignet für Satteldächer und bietet viel Licht. Die Schleppgaube hat eine rechteckige Form und fügt sich harmonisch in die Dachstruktur ein.',
    bestFor: 'Satteldächer, traditionelle Architektur',
    benefits: ['Großzügige Lichtfläche', 'Bewährte Konstruktion', 'Gute Integration in Dachform']
  },
  {
    name: 'Fledermausgaube',
    description: 'Charakteristisch durch ihre trapezförmige Form mit abgeschrägten Seiten. Ideal für flachgeneigte Dächer. Schafft stehende Räume unter dem Dach mit hervorragenden Lichtverhältnissen.',
    bestFor: 'Flachgeneigte Dächer, moderne Architektur',
    benefits: ['Großer stehender Raum', 'Optimal bei flachem Dach', 'Architektonisch markant']
  },
  {
    name: 'Trapezgaube',
    description: 'Moderne Gaubenform mit trapezförmiger Front. Passt besonders gut zu zeitgemäßer Architektur. Die schrägen Seitenflächen ermöglichen eine elegantes Erscheinungsbild.',
    bestFor: 'Moderne Dachformen, Neubauten',
    benefits: ['Zeitgemäße Optik', 'Solide Raumausbeute', 'Strukturell einfach']
  },
  {
    name: 'Segmentgaube',
    description: 'Halbrunde Gaubenform, die sich elegant in die Dachlinie einfügt. Bietet eine besondere Lichtwirkung und wird häufig bei gehobenen Ausbauten eingesetzt.',
    bestFor: 'Gehobene Ausstattung, besondere Lichtwirkung',
    benefits: ['Besondere Lichtstimmung', 'Harmonische Integration', 'Premium-Anmutung']
  }
]

export default function DachgaubenPage() {
  const serviceSchema = generateServiceSchemaFromService(service)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Startseite', url: 'https://dachgeschossausbaumuenchen.de' },
    { name: 'Leistungen', url: 'https://dachgeschossausbaumuenchen.de/leistungen' },
    { name: 'Dachgauben', url: 'https://dachgeschossausbaumuenchen.de/leistungen/dachgauben' }
  ])
  const faqSchema = generateFaqSchema(faqs)

  return (
    <>
      <Helmet>
        <title>Dachgauben in München | Arten, Kosten & Genehmigung 2025</title>
        <meta
          name="description"
          content="Dachgauben in München: Schleppgaube, Fledermausgaube, Trapezgaube & Segmentgaube. Seit 2025 in Bayern bis 2m Breite genehmigungsfrei. Jetzt beraten lassen."
        />
        <meta name="keywords" content="Dachgaube München, Schleppgaube, Fledermausgaube, Gaube einbauen, Dachgaube Kosten" />
        <link rel="canonical" href="https://dachgeschossausbaumuenchen.de/leistungen/dachgauben" />
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
              <span className="text-primary font-medium">Dachgauben</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 lg:py-24">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Dachgauben
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8">
                Dachgauben schaffen lichtdurchfluteten Wohnraum und verbessern die Raumqualität im Dachgeschoss erheblich. Wir beraten Sie bei der Wahl der optimalen Gaubenform und setzen diese fachgerecht um.
              </p>
              <div className="flex items-center gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                  <span className="text-sm text-slate-300 block mb-1">Richtpreis pro Gaube</span>
                  <span className="text-2xl font-bold text-amber-400">{service.priceRange}</span>
                </div>
                <div className="text-sm text-slate-300">
                  <span className="font-semibold text-white">Ab 2m Breite</span> genehmigungsfrei seit 2025
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
                {/* Was sind Dachgauben */}
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
                    Was ist eine Dachgaube?
                  </h2>
                  <div className="text-text-secondary leading-relaxed space-y-4">
                    <p>
                      Eine Dachgaube ist ein Aufbau in der Dachfläche, der zusätzlichen Lichteinfall und Stehhöhe schafft. Im Gegensatz zu einem Flachdachfenster bietet eine Gaube einen vollständigen Wohnraum mit vertikalen Wänden und mehr Fensterfläche.
                    </p>
                    <p>
                      In München werden Gauben häufig beim Dachgeschossausbau eingesetzt, um die Nutzbarkeit des Raums deutlich zu verbessern. Die Kosten für eine einzelne Gaube liegen zwischen 10.000 und 25.000 Euro – abhängig von Größe, Form und Material.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
                      <h3 className="font-semibold text-text-primary mb-2">Neuregelung 2025 in Bayern</h3>
                      <p className="text-text-secondary text-sm">
                        Seit Januar 2025 sind Dachgauben bis 2m Breite in Bayern verfahrensfrei (Art. 57 BayBO). Das bedeutet: keine Genehmigung nötig, nur eine Anzeige zwei Wochen vor Baubeginn. Gauben über 2m Breite benötigen weiterhin eine Genehmigung.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gauben-Typen */}
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Gaubenformen im Überblick
                  </h2>
                  <div className="space-y-6">
                    {gaubeTypes.map((gaube, index) => (
                      <div key={index} className="bg-surface rounded-xl p-6 lg:p-8 border border-border">
                        <div className="lg:flex lg:items-start lg:gap-6">
                          <div className="lg:flex-1">
                            <h3 className="text-xl font-semibold text-text-primary mb-2">{gaube.name}</h3>
                            <p className="text-text-secondary leading-relaxed mb-4">{gaube.description}</p>
                            <div className="text-sm text-text-secondary mb-4">
                              <span className="font-medium text-text-primary">Einsatzgebiet: </span>{gaube.bestFor}
                            </div>
                          </div>
                          <div className="lg:w-48">
                            <h4 className="font-medium text-text-primary mb-2 text-sm">Vorteile</h4>
                            <ul className="space-y-1">
                              {gaube.benefits.map((benefit, idx) => (
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

                {/* Wann ist welche Gaube geeignet */}
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Welche Gaube passt zu meinem Dach?
                  </h2>
                  <div className="bg-surface rounded-xl p-8 border border-border">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4 font-semibold text-text-primary">Kriterium</th>
                            <th className="text-left py-3 px-4 font-semibold text-text-primary">Empfehlung</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border">
                            <td className="py-3 px-4 text-text-secondary">Satteldach, klassisch</td>
                            <td className="py-3 px-4 text-text-primary font-medium">Schleppgaube</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 px-4 text-text-secondary">Flachgeneigtes Dach</td>
                            <td className="py-3 px-4 text-text-primary font-medium">Fledermausgaube</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 px-4 text-text-secondary">Moderne Architektur</td>
                            <td className="py-3 px-4 text-text-primary font-medium">Trapezgaube</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 px-4 text-text-secondary">Gehobener Ausbau</td>
                            <td className="py-3 px-4 text-text-primary font-medium">Segmentgaube</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 text-text-secondary">Max. Breite ohne Genehmigung</td>
                            <td className="py-3 px-4 text-text-primary font-medium">2 Meter (seit 2025)</td>
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
                      <span>Gauben bis 2m Breite seit 2025 genehmigungsfrei</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Kombination mit Dämmung verbessert Energiebilanz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Balkonintegration bei Fledermausgauben möglich</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Individualität durch Materialwahl</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-primary text-white rounded-xl p-6">
                  <h3 className="font-semibold mb-3">Kostenlose Beratung</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Wir beraten Sie zur optimalen Gaubenform für Ihr Dach.
                  </p>
                  <Link
                    to="/kontakt"
                    className="block w-full bg-white text-primary font-medium text-center py-3 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    Jetzt beraten lassen
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
                Häufig gestellte Fragen zu Dachgauben
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