import { COST_DATA } from '../../data/costData'

interface CostCardProps {
  title: string
  min: number
  max: number
  description: string
  unit?: string
}

function CostCard({ title, min, max, description, unit = '€' }: CostCardProps) {
  return (
    <div className="bg-bg rounded-lg p-5 border border-border">
      <h4 className="font-semibold text-text-primary mb-2">{title}</h4>
      <div className="text-2xl font-bold text-primary mb-1">
        {min.toLocaleString('de-DE')}–{max.toLocaleString('de-DE')} <span className="text-sm font-normal text-text-secondary">{unit}</span>
      </div>
      <p className="text-xs text-text-secondary">{description}</p>
    </div>
  )
}

export function CostBreakdown() {
  return (
    <section className="py-section bg-slate-50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Was kostet ein Dachgeschossausbau?
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Transparente Kalkulation ohne versteckte Kosten. Die folgenden Richtwerte helfen bei der Orientierung.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Ausbau nach Komplexität
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CostCard
                title="Einfacher Ausbau"
                min={COST_DATA.perSquareMeter.simple.min}
                max={COST_DATA.perSquareMeter.simple.max}
                description={COST_DATA.perSquareMeter.simple.description}
                unit="€/m²"
              />
              <CostCard
                title="Standard Ausbau"
                min={COST_DATA.perSquareMeter.standard.min}
                max={COST_DATA.perSquareMeter.standard.max}
                description={COST_DATA.perSquareMeter.standard.description}
                unit="€/m²"
              />
              <CostCard
                title="Gehobener Ausbau"
                min={COST_DATA.perSquareMeter.premium.min}
                max={COST_DATA.perSquareMeter.premium.max}
                description={COST_DATA.perSquareMeter.premium.description}
                unit="€/m²"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Dachgauben
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(COST_DATA.gauben).map(([key, gaube]) => (
                <CostCard
                  key={key}
                  title={key === 'schleppgaube' ? 'Schleppgaube' : key === 'fledermausgaube' ? 'Fledermausgaube' : key === 'trapezgaube' ? 'Trapezgaube' : 'Frontgaube'}
                  min={gaube.min}
                  max={gaube.max}
                  description={gaube.description}
                  unit="€/Gaube"
                />
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Genehmigungskosten (falls erforderlich)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CostCard
                title="Genehmigung München"
                min={COST_DATA.permits.genehmigung.min}
                max={COST_DATA.permits.genehmigung.max}
                description={COST_DATA.permits.genehmigung.description}
              />
              <CostCard
                title="Tragwerksplaner"
                min={COST_DATA.permits.statik.min}
                max={COST_DATA.permits.statik.max}
                description={COST_DATA.permits.statik.description}
              />
              <div className="bg-white rounded-lg p-5 border border-amber-200">
                <h4 className="font-semibold text-text-primary mb-2">Anzeige (verfahrensfrei)</h4>
                <div className="text-2xl font-bold text-primary mb-1">Kostenlos</div>
                <p className="text-xs text-text-secondary">{COST_DATA.permits.anzeige.description}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-text-secondary">
              <strong className="text-primary">Wichtig:</strong> Seit 2025 sind viele Dachgeschossausbauten in Bayern verfahrensfrei. Wir prüfen das für Ihr Projekt kostenlos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}