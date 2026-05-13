import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function StickyCtaBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      // Show after scrolling past hero (approx 500px)
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-200 py-4 px-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-slate-900">Fragen Sie jetzt Ihre kostenlose Beratung an</p>
          <p className="text-xs text-slate-500">Antwort innerhalb von 24 Stunden garantiert</p>
        </div>
        <Link
          to="/kontakt"
          className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-medium text-white hover:bg-amber-600 transition-colors"
        >
          Jetzt Beratung anfordern
        </Link>
      </div>
    </div>
  )
}