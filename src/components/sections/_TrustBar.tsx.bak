interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  { value: '20+', label: 'Jahre Erfahrung' },
  { value: '200+', label: 'Projekte abgeschlossen' },
  { value: '100%', label: 'Weiterempfehlungsrate' },
]

export function TrustBar() {
  return (
    <section className="bg-slate-800 text-white py-8">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-300 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Handwerkskammer Mitglied
            </span>
            <span className="hidden sm:block text-slate-600">|</span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              München & Umgebung
            </span>
            <span className="hidden sm:block text-slate-600">|</span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Kostenlose Erstberatung
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}