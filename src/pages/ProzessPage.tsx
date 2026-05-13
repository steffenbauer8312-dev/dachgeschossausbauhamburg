import { Helmet } from 'react-helmet-async'
import { ProcessSteps } from '../components/sections/ProcessSteps'
import { CtABlock } from '../components/sections/CtABlock'
import { generateHowToSchema } from '../lib/schema'
import { PROCESS_STEPS } from '../data/processSteps'

const howToSchema = generateHowToSchema(
  PROCESS_STEPS.map(step => ({
    name: step.title,
    text: step.description
  }))
)

export default function ProzessPage() {
  return (
    <>
      <Helmet>
        <title>Unser Prozess – Schritt für Schritt zum fertigen Dachgeschoss | Dachgeschossausbau München</title>
        <meta name="description" content="So läuft Ihr Dachgeschossausbau in München ab: Von der kostenlosen Erstberatung bis zur schlüsselfertigen Übergabe. Typische Projektdauer 6-12 Wochen." />
        <link rel="canonical" href="https://dachgeschossausbaumuenchen.de/prozess" />
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium mb-4">Unser Prozess</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schritt für Schritt zum fertigen Dachgeschoss
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Von der Erstberatung bis zur Abnahme: Wir begleiten Sie durch den gesamten Prozess. Typische Projektdauer für Standard-Ausbauten: 6–12 Wochen.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Timeline Info */}
      <section className="py-section bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Typischer Zeitrahmen
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1–2h
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Erstberatung & Vor-Ort-Termin</h3>
                    <p className="text-sm text-text-secondary">Kostenlos und unverbindlich</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1–2 Wo
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Individuelle Planung & Angebot</h3>
                    <p className="text-sm text-text-secondary">Detaillierte Kostenaufstellung</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2–8 Wo
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Genehmigungsprüfung</h3>
                    <p className="text-sm text-text-secondary">Fällt bei verfahrensfreien Projekten komplett weg</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1–2 Wo
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Statik & Detailplanung</h3>
                    <p className="text-sm text-text-secondary">Tragwerksplaner + Koordination</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                    6–12 Wo
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Bauphase</h3>
                    <p className="text-sm text-text-secondary">Gerüstbau, Dämmung, Innenausbau</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1 Tag
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Abnahme & Übergabe</h3>
                    <p className="text-sm text-text-secondary">Gemeinsame Begehung, Schlüsselübergabe</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Was Sie wissen sollten
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seit Januar 2025 sind viele Dachgeschossausbauten in Bayern verfahrensfrei nach Art. 57 BayBO</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Verfahrensfreie Projekte: 2 Wochen Vorlaufzeit für Anzeige, keine Genehmigungsgebühren</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bei laufender Bewohnung möglich – der Rest des Hauses bleibt unberührt</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fester Ansprechpartner während des gesamten Projekts</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transparente Kostenaufstellung – keine versteckten Posten</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <CtABlock />
    </>
  )
}