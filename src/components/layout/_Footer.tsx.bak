import { Link } from 'react-router-dom'

const FOOTER_LINKS = {
  leistungen: [
    { label: 'Dachgeschossausbau', href: '/leistungen/dachgeschossausbau' },
    { label: 'Dachgauben', href: '/leistungen/dachgauben' },
    { label: 'Dachdämmung', href: '/leistungen/daemmung' },
    { label: 'Innenausbau', href: '/leistungen/innenausbau' },
  ],
  info: [
    { label: 'Prozess', href: '/prozess' },
    { label: 'Kosten', href: '/kosten' },
    { label: 'Genehmigung', href: '/genehmigung' },
    { label: 'FAQ', href: '/faq' },
  ],
  company: [
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Projekte', href: '/projekte' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-xl font-bold">
              Dach<span className="text-amber-500">ausbau</span> München
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Professioneller Dachgeschossausbau in München. Wir verwandeln ungenutzte Dachböden in wertvoller Wohnraum.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Leistungen</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.leistungen.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Information</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.info.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Unternehmen</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.company.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2026 Dachgeschossausbau München. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link to="/impressum" className="text-sm text-slate-400 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-sm text-slate-400 hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}