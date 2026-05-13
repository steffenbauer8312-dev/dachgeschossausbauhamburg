import { Helmet } from 'react-helmet-async'
import { CtABlock } from '../components/sections/CtABlock'
import { FAQ_DATA } from '../data/faqData'

export default function GenehmigungPage() {
  const genehmigungFaqs = FAQ_DATA.filter(faq => faq.category === 'Genehmigung')

  return (
    <>
      <Helmet>
        <title>Dachgeschossausbau Genehmigung in München – BayBO 2025 | Dachgeschossausbau München</title>
        <meta name="description" content="BayBO 2025: Was ist verfahrensfrei beim Dachgeschossausbau in München? Alle Regeln zu Genehmigung, Stellplatzpflicht und Anzeigepflicht. Jetzt Beratung anfordern." />
        <link rel="canonical" href="https://dachgeschossausbaumuenchen.de/genehmigung" />
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium mb-4">Genehmigung & Rechtliches</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dachgeschossausbau Genehmigung in München – BayBO 2025
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Die Bayerische Bauordnung (BayBO) wurde zum 1. Januar 2025 geändert. Seitdem sind viele Dachgeschossausbauten verfahrensfrei. Wir kennen die aktuellen Regeln.
            </p>
          </div>
        </div>
      </section>

      {/* BayBO 2025 Overview */}
      <section className="py-section bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Was bedeutet „verfahrensfrei"?
              </h2>
              <div className="bg-white rounded-xl p-6 border border-border mb-6">
                <p className="text-text-primary leading-relaxed mb-4">
                  <strong className="text-primary">Verfahrensfrei</strong> bedeutet: Kein Bauantrag, keine Genehmigungsfreistellung, keine Wartezeit auf Genehmigungsbescheid.
                </p>
                <p className="text-text-primary leading-relaxed">
                  Sie müssen das Vorhaben der Stadt München lediglich <strong>2 Wochen vor Baubeginn in Textform anzeigen</strong>. Nach Ablauf der Frist kann sofort mit dem Bau begonnen werden.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Wichtig seit 2025
                </h3>
                <p className="text-text-secondary text-sm">
                  Art. 57 BayBO regelt nun klarer, welche Vorhaben verfahrensfrei sind. Die Regelungen wurden entfrachtet und vereinfacht.
                </p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">
                Voraussetzungen für Verfahrensfreiheit
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Die Dachkonstruktion bleibt erhalten und wird nicht aufgestockt</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Keine wesentliche Veränderung der äußeren Erscheinung des Gebäudes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dachgauben max. 2m Breite (gemessen an der Dachfläche)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Einhaltung der Abstandsflächen (bayrische Regelung)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Kein Eingriff in den Denkmalschutz</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When Permit is Required */}
      <section className="py-section bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Wann ist eine Baugenehmigung nötig?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Nicht jedes Projekt ist verfahrensfrei. In diesen Fällen benötigen Sie eine vollständige Baugenehmigung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-semibold text-red-700 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Genehmigungspflichtig
              </h3>
              <ul className="space-y-3 text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Aufstockung des Dachgeschosses (Höhenänderung des Gebäudes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Dachgauben über 2m Breite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Veränderung der Dachform (z.B. Flachdach zu Satteldach)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Denkmalschutz-Objekte oder Nähe zu denkmalgeschützten Gebäuden</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Nichtwohngebäude (Gewerbe, Industrie)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Ungültige Abstandsflächen nach Art. 6 BayBO</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Verfahrensfrei (Anzeige genügt)
              </h3>
              <ul className="space-y-3 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Ausbau des bestehenden Dachgeschosses ohne Strukturänderung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Dachgauben bis 2m Breite (BayBO 2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Innenausbau mit neuer Dämmung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Einbau von Dachfenstern (bis bestimmte Größe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Gauben, die das Dach nicht über die Firstlinie hinaus erhöhen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span>Keine Veränderung der Traufhöhe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-text-secondary">
              <strong>Sie sind sich nicht sicher?</strong> Wir prüfen das für Ihr Projekt kostenlos im Rahmen der Erstberatung.
            </p>
          </div>
        </div>
      </section>

      {/* Stellplatzpflicht */}
      <section className="py-section bg-slate-800 text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Stellplatzpflicht München 2025
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Die Stadt München verlangt bei Neubau oder Wohnflächenerweiterung einen Nachweis über ausreichend Stellplätze. Dies betrifft auch Dachgeschossausbauten.
              </p>
              <div className="space-y-4">
                <div className="bg-slate-700 rounded-lg p-5">
                  <h3 className="font-semibold text-amber-400 mb-2">Grundsatz</h3>
                  <p className="text-sm text-slate-300">
                    Für jede neu geschaffene Wohnung muss ein Stellplatz nachgewiesen werden. Bei Ausbauten im Innenbereich kann eine reduzierte Pflicht gelten.
                  </p>
                </div>
                <div className="bg-slate-700 rounded-lg p-5">
                  <h3 className="font-semibold text-amber-400 mb-2">Münchner Sonderregelung</h3>
                  <p className="text-sm text-slate-300">
                    In bestimmten Stadtvierteln (z.B. Altbau-Gebiete) gelten Erleichterungen. Die Regelungen sind komplex – wir kennen die aktuelle Rechtslage.
                  </p>
                </div>
                <div className="bg-slate-700 rounded-lg p-5">
                  <h3 className="font-semibold text-amber-400 mb-2">Alternativen</h3>
                  <p className="text-sm text-slate-300">
                    Wenn kein Stellplatz nachgewiesen werden kann: Ablösezahlung an die Stadt München oder Nachweis über CarSharing-Nutzung.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">
                Typischer Genehmigungsablauf
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Prüfung der Voraussetzungen</h3>
                    <p className="text-sm text-slate-400">Wir prüfen, ob Ihr Projekt verfahrensfrei ist oder Genehmigung benötigt</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Anzeige oder Antrag</h3>
                    <p className="text-sm text-slate-400">Verfahrensfrei: 2 Wochen vor Baubeginn anzeigen. Genehmigungspflichtig: Vollständiger Antrag</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Stadt München prüft</h3>
                    <p className="text-sm text-slate-400">Bei Genehmigung: 4–8 Wochen Bearbeitungszeit. Bei Anzeige: Keine Reaktion = Start frei</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold">Baubeginn</h3>
                    <p className="text-sm text-slate-400">Nach Ablauf der Anzeigefrist oder Genehmigungserteilung</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-500 text-slate-900 rounded-lg">
                <p className="text-sm font-medium">
                  <strong>Zeitersparnis:</strong> Verfahrensfreie Projekte sparen 8–16 Wochen gegenüber dem klassischen Genehmigungsverfahren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-section bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Häufige Fehler, die Projekte verzögern
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Diese Fehler kosten Zeit und Geld. Wir helfen, sie zu vermeiden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                Falsche Gaubenbreite
              </h3>
              <p className="text-sm text-text-secondary">
                Gauben über 2m Breite benötigen eine Genehmigung. Wir messen nach bayrischer Regelung korrekt aus.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                Anzeige vergessen
              </h3>
              <p className="text-sm text-text-secondary">
                Selbst bei verfahrensfreien Projekten: Die 2-Wochen-Anzeige ist Pflicht. Ohne Anzeige drohen Auflagen.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                Stellplatznachweis fehlt
              </h3>
              <p className="text-sm text-text-secondary">
                München verlangt bei Wohnflächenerweiterung Stellplätze. Alternative: Ablösezahlung an die Stadt.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xl mb-4">
                4
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                Abstandsflächen missachtet
              </h3>
              <p className="text-sm text-text-secondary">
                Die bayrischen Abstandsflächenregeln (Art. 6 BayBO) sind komplex. Bei Gauben nah am Nachbargrundstück: Genehmigung nötig.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xl mb-4">
                5
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                Statik unterschätzt
              </h3>
              <p className="text-sm text-text-secondary">
                Ohne statische Berechnung drohen Auflagen während der Bauphase. Wir holen sie vorher ein.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xl mb-4">
                6
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                Denkmalschutz übersehen
              </h3>
              <p className="text-sm text-text-secondary">
                München hat viele denkmalgeschützte Gebäude. Eine falsche Gaube kann das Projekt stoppen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Häufige Fragen zu Genehmigung
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {genehmigungFaqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-border">
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