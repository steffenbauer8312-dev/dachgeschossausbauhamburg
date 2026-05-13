import { Helmet } from 'react-helmet-async'
import { CtABlock } from '../components/sections/CtABlock'

interface Project {
  id: number
  title: string
  location: string
  area: string
  description: string
  scope: string[]
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Dachgeschossausbau Schwabing',
    location: 'Schwabing',
    area: '65 m²',
    description: 'Kompletter Ausbau eines Satteldachgeschosses in einem Altbau von 1928. Zwei Fledermausgauben schaffen stehende Raumhöhe im gesamten Bereich.',
    scope: ['Fledermausgauben', 'Dämmung', 'Bad', 'Elektrik', 'Heizung'],
  },
  {
    id: 2,
    title: 'Dachgeschossausbau Haidhausen',
    location: 'Haidhausen',
    area: '78 m²',
    description: 'Ausbau mit zwei Schleppgauben für maximale Lichtausbeute. Energetische Sanierung der gesamten Dachfläche.',
    scope: ['Schleppgauben', 'Aufsparrendämmung', 'Einbauküche', 'Parkett'],
  },
  {
    id: 3,
    title: 'Dachgeschossausbau Bogenhausen',
    location: 'Bogenhausen',
    area: '52 m²',
    description: 'Gehobener Ausbau im Münchner Osten. Offene Wohnkonzept mit Dachterrasse.',
    scope: ['Trapezgaube', 'Dachterrasse', 'Smarthome', 'Designerbad'],
  },
  {
    id: 4,
    title: 'Dachgeschossausbau Sendling',
    location: 'Sendling',
    area: '90 m²',
    description: 'Großzügiger Familienausbau mit drei Zimmern und separatem Bad. Statische Verstärkung der Mittelunterzug.',
    scope: ['Schleppgaube', 'Statik', 'Drei Zimmer', 'Bad'],
  },
  {
    id: 5,
    title: 'Dachgeschossausbau Giesing',
    location: 'Giesing',
    area: '45 m²',
    description: 'Kompakter Ausbau für Homeoffice und Gästebereich. Minimalinvasive Integration in die bestehende Dachstruktur.',
    scope: ['Homeoffice', 'Gaube', 'Dämmung', 'Bad'],
  },
  {
    id: 6,
    title: 'Dachgeschossausbau Neuhausen',
    location: 'Neuhausen',
    area: '60 m²',
    description: 'Ausbau mit Fledermausgaube und offener Galerie zum darunterliegenden Geschoss.',
    scope: ['Fledermausgaube', 'Galerie', 'Bad', 'Parkett'],
  },
]

export default function ProjektePage() {
  return (
    <>
      <Helmet>
        <title>Unsere Projekte – Dachgeschossausbau München Referenzen | Dachgeschossausbau München</title>
        <meta name="description" content="Ausgewählte Referenzprojekte für Dachgeschossausbau in München: Schwabing, Haidhausen, Bogenhausen, Sendling. 65-90m² Wohnfläche, verschiedene Gaubenarten." />
        <link rel="canonical" href="https://dachgeschossausbaumuenchen.de/projekte" />
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium mb-4">Unsere Arbeit</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unsere Projekte
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Jedes Dachgeschoss ist einzigartig. Hier finden Sie eine Auswahl unserer abgeschlossenen Projekte in München – von kompakten Homeoffice-Lösungen bis zum großzügigen Familienausbau.
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-section bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border"
              >
                {/* Placeholder Image Area */}
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-amber-500 text-sm font-medium">{project.location}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 text-sm">{project.area}</span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.scope.map((item, index) => (
                      <span
                        key={index}
                        className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Approach */}
      <section className="py-section bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              So entsteht Ihr Projekt
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Jeder Dachgeschossausbau folgt einem bewährten Ablauf – transparent und strukturiert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-text-primary mb-2">Beratung</h3>
              <p className="text-text-secondary text-sm">
                Vor-Ort-Besichtigung und Besprechung Ihrer Wünsche
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-text-primary mb-2">Planung</h3>
              <p className="text-text-secondary text-sm">
                Statik, Gauben und Ausbaustandard werden festgelegt
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-text-primary mb-2">Genehmigung</h3>
              <p className="text-text-secondary text-sm">
                Anzeige oder Genehmigungsverfahren wird eingeleitet
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-text-primary mb-2">Ausführung</h3>
              <p className="text-text-secondary text-sm">
                Handwerkliche Umsetzung mit festem Zeitplan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <CtABlock />
    </>
  )
}