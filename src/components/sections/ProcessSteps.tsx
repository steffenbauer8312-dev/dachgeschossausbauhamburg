import { PROCESS_STEPS } from '../../data/processSteps'

export function ProcessSteps() {
  return (
    <section className="py-section bg-surface">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            So läuft Ihr Projekt ab
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Von der ersten Beratung bis zur schlüsselfertigen Übergabe – wir begleiten Sie durch den gesamten Prozess.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="relative md:flex md:items-start md:gap-6">
                <div className="flex md:flex-col md:items-center md:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg z-10">
                    {step.step}
                  </div>
                  {step.step < PROCESS_STEPS.length && (
                    <div className="hidden md:block w-px h-16 bg-border" />
                  )}
                </div>
                <div className="md:flex-1 md:pt-1">
                  <div className="bg-bg rounded-lg p-6 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-text-primary">
                        {step.title}
                      </h3>
                      <span className="text-xs text-text-secondary bg-slate-100 px-2 py-1 rounded">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}