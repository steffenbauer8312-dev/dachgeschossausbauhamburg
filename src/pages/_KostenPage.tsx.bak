import { Helmet } from 'react-helmet-async'
import { CostBreakdown } from '../components/sections/CostBreakdown'
import { CtABlock } from '../components/sections/CtABlock'
import { generateFaqSchema } from '../lib/schema'
import { FAQ_DATA } from '../data/faqData'

const faqSchema = generateFaqSchema(
  FAQ_DATA.filter(faq => faq.category === 'Kosten').map(faq => ({
    question: faq.question,
    answer: faq.answer
  }))
)

const costFaqs = FAQ_DATA.filter(faq => faq.category === 'Kosten')

export default function KostenPage() {
  return (
    <>
      <Helmet>
        <title>Kosten für Dachgeschossausbau in München – transparente Preisübersicht | Dachgeschossausbau München</title>
        <meta name="description" content="Aktuelle Kostenübersicht für Dachgeschossausbau in München: 1.800–3.800 €/m² je nach Ausbaustandard. Gauben 10.000–25.000 €. Transparente Kalkulation ohne versteckte Kosten." />
        <link rel="canonical" href="https://dachgeschossausbaumuenchen.de/kosten" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium mb-4">Kosten & Preise</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Was kostet ein Dachgeschossausbau in München?
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Transparente Kalkulation ohne versteckte Kosten. Die folgenden Richtwerte helfen bei der Orientierung – jedes Projekt wird individuell berechnet.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Breakdown Component */}
      <CostBreakdown />

      {/* Detailed Cost Tables */}
      <section className="py-section bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Detaillierte Kostenübersicht
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Alle Angaben in Euro, inklusive Material und Montage. Exakte Kosten werden im Angebot berechnet.
            </p>
          </div>

          <div className="space-y-8">
            {/* Per square meter breakdown */}
            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-text-primary mb-6">Ausbaukosten pro Quadratmeter</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-text-primary">Ausbaustandard</th>
                      <th className="text-right py-3 px-4 font-semibold text-text-primary">Preis/m²</th>
                      <th className="text-left py-3 px-4 font-semibold text-text-primary">Enthaltene Leistungen</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border bg-amber-50">
                      <td className="py-4 px-4 font-medium text-text-primary">Einfacher Ausbau</td>
                      <td className="py-4 px-4 text-right font-bold text-primary">1.800–2.500 €/m²</td>
                      <td className="py-4 px-4 text-text-secondary">Bodenplatten, einfache Wände, Basis-Elektrik, Anstrich</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium text-text-primary">Standard Ausbau</td>
                      <td className="py-4 px-4 text-right font-bold text-primary">2.500–3.200 €/m²</td>
                      <td className="py-4 px-4 text-text-secondary">Komplettes Bad, Böden, Standard-Elektrik, Heizung, Malerarbeiten</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="py-4 px-4 font-medium text-text-primary">Gehobener Ausbau</td>
                      <td className="py-4 px-4 text-right font-bold text-primary">3.200–3.800 €/m²</td>
                      <td className="py-4 px-4 text-text-secondary">Einbauküche vorbereitet, hochwertige Böden, Designer-Bad, Smarthome</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                <strong className="text-primary">Beispiel:</strong> 70 m² Dachgeschoss im Standard-Ausbau = 175.000–224.000 €
              </p>
            </div>

            {/* Gaube costs */}
            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-text-primary mb-6">Dachgauben – Kostenübersicht</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-text-primary">Gaubenart</th>
                      <th className="text-right py-3 px-4 font-semibold text-text-primary">Kosten</th>
                      <th className="text-left py-3 px-4 font-semibold text-text-primary">Geeignet für</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium text-text-primary">Schleppgaube</td>
                      <td className="py-4 px-4 text-right font-bold text-primary">10.000–18.000 €</td>
                      <td className="py-4 px-4 text-text-secondary">Satteldächer, viel Licht, beliebt in München</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium text-text-primary">Fledermausgaube</td>
                      <td className="py-4 px-4 text-right font-bold text-primary">12.000–22.000 €</td>
                      <td className="py-4 px-4 text-text-secondary">Flachgeneigte Dächer, großzügiger stehender Raum</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium text-text-primary">Trapezgaube</td>
                      <td className="py-4 px-4 text-right font-bold text-primary">10.000–16.000 €</td>
                      <td className="py-4 px-4 text-text-secondary">Moderne Optik, gute Lichtverhältnisse</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="py-4 px-4 font-medium text-text-primary">Frontgaube</td>
                      <td className="py-4 px-4 text-right font-bold text-primary">18.000–25.000 €</td>
                      <td className="py-4 px-4 text-text-secondary">Großes Fenster, aufwendige Konstruktion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                <strong className="text-primary">Hinweis:</strong> Gauben bis 2m Breite sind seit 2025 in Bayern verfahrensfrei.
              </p>
            </div>

            {/* Additional costs */}
            <div className="bg-white rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-text-primary mb-6">Zusätzliche Kosten (falls relevant)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-text-primary font-medium">Genehmigungsgebühren München</span>
                    <span className="text-primary font-bold">250–500 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-text-primary font-medium">Tragwerksplaner / Statik</span>
                    <span className="text-primary font-bold">800–2.500 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-text-primary font-medium">Anzeige (verfahrensfrei)</span>
                    <span className="text-green-600 font-bold">Kostenlos</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-text-primary font-medium">Aufsparrendämmung</span>
                    <span className="text-primary font-bold">120–150 €/m²</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-text-primary font-medium">Zwischensparrendämmung</span>
                    <span className="text-primary font-bold">60–100 €/m²</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-text-primary font-medium">KfW-Förderung (energetisch)</span>
                    <span className="text-green-600 font-bold">Bis 15% Zuschuss</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Info */}
      <section className="py-section bg-slate-800 text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Finanzierungsmöglichkeiten
              </h2>
              <div className="space-y-6">
                <div className="bg-slate-700 rounded-lg p-6">
                  <h3 className="font-semibold text-amber-400 mb-2">KfW-Förderung</h3>
                  <p className="text-slate-300 text-sm">
                    Für energetische Maßnahmen (Dämmung, Fenster) bietet die KfW Programme 151/152 mit zinsgünstigen Darlehen und Tilagszuschüssen. Bis zu 15% der Kosten werden gefördert.
                  </p>
                </div>
                <div className="bg-slate-700 rounded-lg p-6">
                  <h3 className="font-semibold text-amber-400 mb-2">Bankschließfach-Finanzierung</h3>
                  <p className="text-slate-300 text-sm">
                    Klassische Immobilienfinanzierung mit Anschlussfinanzierung. Wir empfehlen den Vergleich von mindestens 3 Bankangeboten.
                  </p>
                </div>
                <div className="bg-slate-700 rounded-lg p-6">
                  <h3 className="font-semibold text-amber-400 mb-2">Steuerliche Abschreibung</h3>
                  <p className="text-slate-300 text-sm">
                    Bei Vermietung: Kosten als Werbungskosten absetzbar. Bei Denkmalschutz: erhöhte Abschreibungen möglich. Keine direkte Abschreibung für Selbstnutzer.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-amber-500 rounded-xl p-8 text-slate-900">
              <h2 className="text-2xl font-bold mb-6">
                Kostenloser Kosten-Check
              </h2>
              <p className="mb-6 leading-relaxed">
                Sie möchten wissen, was Ihr Projekt kostet? Wir erstellen Ihnen ein unverbindliches Angebot mit genauer Kostenaufstellung – typischerweise innerhalb von 1–2 Wochen nach dem Vor-Ort-Termin.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vor-Ort-Beratung: Kostenlos</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Angebot: Unverbindlich</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Festpreisgarantie möglich</span>
                </li>
              </ul>
              <p className="text-sm font-medium">
                Fragen Sie jetzt an – wir melden uns innerhalb von 24 Stunden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Häufige Fragen zu Kosten
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {costFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <CtABlock />
    </>
  )
}