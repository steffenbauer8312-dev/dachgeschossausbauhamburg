import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'
import { FAQ_DATA } from '../data/faqData'
import { CtABlock } from '../components/sections/CtABlock'
import { generateServiceSchemaFromService, generateBreadcrumbSchema, generateFaqSchema } from '../lib/schema'

const service = SERVICES.find(s => s.id === 'innenausbau')!
const relatedServices = SERVICES.filter(s => s.id !== 'innenausbau')
const faqs = FAQ_DATA.filter(faq =>
  ['Prozess', 'Kosten', 'Allgemein'].includes(faq.category)
)

const Gewerke = [
  {
    name: 'Trockenbau',
    description: 'Wände, Decken, Vorsatzschalen – alles nach Ihren Raumvorstellungen. Gipskartonplatten, Metallständerwerk, Dampfsperren. Saubere und schnelle Umsetzung.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    name: 'Elektroinstallation',
    description: 'Stromkreise, Schalter, Steckdosen, Beleuchtung – fachgerecht installiert nach VDE-Norm. Smart-Home-Vorbereitung möglich. Mit ausführlicher Dokumentation.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    name: 'Heizung & Sanitär',
    description: 'Bad, WC, Küche – alle Installationen aus einer Hand. Wasserleitungen, Abwasser, Heizkörperanschlüsse. In Zusammenarbeit mit etablierten Installateuren.',
    icon: 'M17.657 18.657A8 8 0 016.343 7.343S7.343 4 10.343 4c2.757 0 5.757 1.343 7.314 3.657m-6.314-3.657a8 8 0 003.314-5.314m0 5.314a8 8 0 01-5.314 3.314M12 12v.01'
  },
  {
    name: 'Böden',
    description: 'Laminat, Vinyl, Fliesen, Parkett – alle Bodenbeläge professionell verlegt. Estricharbeiten, Dampfsperren, Trittschalldämmung inklusive.',
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
  },
  {
    name: 'Malerarbeiten',
    description: 'Wände glatt streichen, Tapezieren, Lackieren. Vorbereitung: Spachteln, Schleifen, Grundieren. Auf Wunsch mit Designakzenten und strukturierten Oberflächen.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
  }
]

export default function InnenausbauPage() {
  const serviceSchema = generateServiceSchemaFromService(service)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Startseite', url: 'https://dachgeschossausbaumuenchen.de' },
    { name: 'Leistungen', url: 'https://dachgeschossausbaumuenchen.de/leistungen' },
    { name: 'Innenausbau', url: 'https://dachgeschossausbaumuenchen.de/leistungen/innenausbau' }
  ])
  const faqSchema = generateFaqSchema(faqs)

  return (
    <>
      <Helmet>
        <title>Innenausbau München | Trockenbau, Elektro, Heizung – alles aus einer Hand</title>
        <meta
          name="description"
          content="Innenausbau in München: Trockenbau, Elektro, Heizung/Sanitär, Böden, Malerarbeiten – alles aus einer Hand. Fester Ansprechpartner, saubere Ausführung. Jetzt beraten lassen."
        />
        <meta name="keywords" content="Innenausbau München, Trockenbau, Elektroinstallation, Heizung Sanitär, Boden verlegen" />
        <link rel="canonical" href="https://dachgeschossausbaumuenchen.de/leistungen/innenausbau" />
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
              <span className="text-primary font-medium">Innenausbau</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 lg:py-24">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Innenausbau
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8">
                Vom Trockenbau bis zum vollständigen Innenausbau – wir machen Ihr Dachgeschoss bezugsfertig. Elektro, Heizung, Sanitär, Böden, Malerarbeiten: alles aus einer Hand, koordiniert von einem Ansprechpartner.
              </p>
              <div className="flex items-center gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                  <span className="text-sm text-slate-300 block mb-1">Richtpreis</span>
                  <span className="text-2xl font-bold text-amber-400">{service.priceRange}</span>
                </div>
                <div className="text-sm text-slate-300">
                  <span className="font-semibold text-white">5 Gewerke</span> aus einer Hand
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
                {/* Vorteile des Komplettausbaus */}
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
                    Alles aus einer Hand
                  </h2>
                  <div className="text-text-secondary leading-relaxed space-y-4">
                    <p>
                      Der Innenausbau ist der abschließende Schritt zum fertigen Wohnraum. Statt fünf verschiedene Handwerker zu koordinieren, haben Sie einen einzigen Ansprechpartner: uns.
                    </p>
                    <p>
                      Wir übernehmen die Koordination aller Gewerke und sorgen für einen reibungslosen Ablauf. Keine Kommunikationslücken, keine Terminprobleme, kein Koordinationsaufwand für Sie.
                    </p>
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                      <h3 className="font-semibold text-text-primary mb-2">Was bedeutet das für Sie?</h3>
                      <ul className="space-y-2 text-text-secondary text-sm">
                        <li className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Ein Vertrag, eine Rechnung, ein Ansprechpartner</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Festpreisgarantie oder transparente Kostenobergrenze</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Saubere Baustelle, minimierte Beeinträchtigung</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Gewerke */}
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    Unsere Leistungen im Innenausbau
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Gewerke.map((gewerk, index) => (
                      <div key={index} className="bg-surface rounded-xl p-6 border border-border">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={gewerk.icon} />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-text-primary mb-1">{gewerk.name}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">{gewerk.description}</p>
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

                {/* Ablauf */}
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-6">
                    So läuft der Innenausbau ab
                  </h2>
                  <div className="bg-surface rounded-xl p-8 border border-border">
                    <div className="space-y-6">
                      {[
                        { step: '1', title: 'Planung und Abstimmung', desc: 'Wir besprechen Ihre Wünsche, erstellen einen detaillierten Plan und definieren den Zeitplan.' },
                        { step: '2', title: 'Koordination der Gewerke', desc: 'Wir koordinieren alle beteiligten Handwerker und sorgen für einen reibungslosen Ablauf.' },
                        { step: '3', title: 'Ausführung', desc: 'Alle Arbeiten werden sauber und termingerecht ausgeführt. Regelmäßige Statusupdates für Sie.' },
                        { step: '4', title: 'Endkontrolle und Übergabe', desc: 'Wir prüfen alles gemeinsam mit Ihnen und übergeben den fertigen Raum. Kein Restaufwand für Sie.' }
                      ].map((item) => (
                        <div key={item.step} className="flex items-start gap-4">
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
                      <span>Fester Ansprechpartner vom Start bis zur Übergabe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>5 Gewerke koordiniert aus einer Hand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Transparente Kalkulation, keine versteckten Kosten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Saubere und termingerechte Ausführung</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-primary text-white rounded-xl p-6">
                  <h3 className="font-semibold mb-3">Kostenlose Beratung</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Wir beraten Sie zum Innenausbau und erstellen Ihnen ein individuelles Angebot.
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
                Häufig gestellte Fragen zum Innenausbau
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