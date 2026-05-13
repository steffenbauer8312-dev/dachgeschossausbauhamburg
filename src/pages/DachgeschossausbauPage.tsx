import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'
import { FAQ_DATA } from '../data/faqData'
import { CtABlock } from '../components/sections/CtABlock'
import { generateServiceSchemaFromService, generateBreadcrumbSchema, generateFaqSchema } from '../lib/schema'

const service = SERVICES.find(s => s.id === 'dachgeschossausbau')!
const relatedServices = SERVICES.filter(s => s.id !== 'dachgeschossausbau')
const faqs = FAQ_DATA.filter(faq =>
  ['Kosten', 'Zeit', 'Prozess', 'Allgemein'].includes(faq.category)
)

export default function DachgeschossausbauPage() {
  const serviceSchema = generateServiceSchemaFromService(service)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Startseite', url: 'https://dachgeschossausbaumuenchen.de' },
    { name: 'Leistungen', url: 'https://dachgeschossausbaumuenchen.de/leistungen' },
    { name: 'Dachgeschossausbau', url: 'https://dachgeschossausbaumuenchen.de/leistungen/dachgeschossausbau' }
  ])
  const faqSchema = generateFaqSchema(faqs)

  return (
    <>
      <Helmet>
        <title>Dachgeschossausbau in München | Ihr Partner für professionellen Ausbau</title>
        <meta
          name="description"
          content="Professioneller Dachgeschossausbau in München. Von der Planung bis zur schlüsselfertigen Übergabe – alles aus einer Hand. Kostenlose Beratung anfordern."
        />
        <meta name="keywords" content="Dachgeschossausbau München, Dachgeschoss ausbauen, Dachboden Wohnraum, Dachgeschoss Kosten" />
        <link rel="canonical" href="https://dachgeschossausbaumuenchen.de/leistungen/dachgeschossausbau" />
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
              <span className="text-primary font-medium">Dachgeschossausbau</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 lg:py-24">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Dachgeschossausbau
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8">
                Verwandeln Sie Ihren ungenutzten Dachboden in wertvollen Wohnraum – professionell und termingerecht. Wir übernehmen den kompletten Prozess von der ersten Beratung bis zur schlüsselfertigen Übergabe.
              </p>
              <div className="flex items-center gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                  <span className="text-sm text-slate-300 block mb-1">Richtpreis</span>
                  <span className="text-2xl font-bold text-amber-400">{service.priceRange}</span>
                </div>
                <div className="text-sm text-slate-300">
                  <span className="font-semibold text-white">6–16 Wochen</span> Bauzeit
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
                {/* Was ist Dachgeschossausbau */}
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
                    Was ist ein Dachgeschossausbau?
                  </h2>
                  <div className="text-text-secondary leading-relaxed space-y-4">
                    <p>
                      Der Dachgeschossausbau ist die effizienteste Methode, zusätzlichen Wohnraum zu schaffen – ohne Grundstücksvergrößerung. Ihr bestehendes Dachgeschoss wird dabei vollständig ausgebaut: von der Dämmung über den Trockenbau bis zur Elektroinstallation.
                    </p>
                    <p>
                      Unser Team aus erfahrenen Handwerkern und Planern arbeitet Hand in Hand, um Ihr Projekt erfolgreich umzusetzen. Wir koordinieren alle Gewerke und halten Sie über den Fortschritt auf dem Laufenden.
                    </p>
                    <p>
                      In München ist der Dachgeschossausbau seit Januar 2025 unter bestimmten Voraussetzungen verfahrensfrei. Das bedeutet: kein Bauantrag, keine Genehmigungsfrist – nur eine Anzeige zwei Wochen vor Baubeginn.
                    </p>
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

                {/* Prozess */}
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Unser Vorgehen
                  </h2>
                  <div className="space-y-4">
                    {[
                      { step: '1', title: 'Kostenlose Beratung vor Ort', desc: 'Wir besichtigen Ihr Dachgeschoss, besprechen Ihre Wünsche und zeigen Möglichkeiten auf.' },
                      { step: '2', title: 'Planung und Statik', desc: 'Unsere Planer erstellen die detaillierte Planung. Der Tragwerksplaner berechnet die Statik.' },
                      { step: '3', title: 'Anzeige (falls nötig)', desc: 'Bei verfahrensfreien Projekten reichen wir die Anzeige für Sie ein. Genehmigungsfrei ab 2025.' },
                      { step: '4', title: 'Ausführung', desc: 'Wir koordinieren alle Gewerke und führen die Arbeiten sauber und termingerecht durch.' },
                      { step: '5', title: 'Übergabe', desc: 'Schlüsselfertige Übergabe mit ausführlicher Einweisung. Kein Koordinationsaufwand für Sie.' }
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-4 bg-surface rounded-xl p-6 border border-border">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                          <p className="text-text-secondary text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
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
                      <span>Seit 2025 in Bayern verfahrensfrei möglich</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Wertsteigerung der Immobilie um 15–25%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Bis zu 50% mehr Wohnfläche</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Fester Ansprechpartner vom Start bis zur Übergabe</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-primary text-white rounded-xl p-6">
                  <h3 className="font-semibold mb-3">Kostenlose Erstberatung</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Wir beraten Sie unverbindlich und erstellen Ihnen ein individuelles Angebot.
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
                Häufig gestellte Fragen zum Dachgeschossausbau
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