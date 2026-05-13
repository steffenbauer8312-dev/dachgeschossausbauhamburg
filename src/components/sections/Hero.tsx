import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDN2LTRoMzB6bTAtOGgtMzB2LTJIM3YtNGgzbTAtMTJIM3YtNWgzMHptLTggMGgtMzB2LTRIM3YtNGgzejBtOCAxMiBoMzB2MiBoLTMwek04IDEwIGgzMHYxIGgtMzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Dachgeschossausbau München – mehr Wohnraum ohne Umzug
          </h1>
          <p className="text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed">
            Wir verwandeln ungenutzte Dachböden in wertvolle Wohnräume. Seit über 20 Jahren planen und realisieren wir Dachgeschossausbauten in München – transparent, termingerecht und zu fairen Preisen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Kostenlose Beratung anfordern
            </Button>
            <Link to="/leistungen">
              <Button size="lg" variant="outline" className="border-amber-500 text-amber-400 hover:bg-amber-500/10">
                Mehr erfahren
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent" />
    </section>
  )
}