import { Helmet } from 'react-helmet-async'
import { CtABlock } from '../components/sections/CtABlock'
import { TESTIMONIALS } from '../data/testimonials'
import { generateLocalBusinessSchema } from '../lib/schema'

export default function UeberUnsPage() {
  const businessSchema = generateLocalBusinessSchema()

  return (
    <>
      <Helmet>
        <title>Über Uns – Meisterbetrieb für Dachgeschossausbau München | Dachgeschossausbau München</title>
        <meta name="description" content="Ihr Partner für Dachgeschossausbau in München. 20+ Jahre Erfahrung, Handwerkskammer-Mitgliedschaft, lokale Expertise. Wir beraten Sie kostenlos." />
        <link rel="canonical" href="https://dachgeschossausbaumuenchen.de/ueber-uns" />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium mb-4">Über uns</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ihr Meisterbetrieb für Dachgeschossausbau in München
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Seit über 20 Jahren verwandeln wir ungenutzte Dachböden in München in wertvollen Wohnraum. Wir stehen für Qualität, Zuverlässigkeit und transparente Kosten.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-section bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Dachgeschossausbau München wurde mit einer klaren Mission gegründet: Münchner Eigenheimbesitzern den Zugang zu zusätzlichem Wohnraum zu ermöglichen, der in dieser Stadt so kostbar ist.
                </p>
                <p>
                  Wir begannen als kleiner Handwerksbetrieb und haben uns über die Jahre zu einem spezialisierten Team entwickelt, das sich ausschließlich auf Dachgeschossausbauten konzentriert. Diese Spezialisierung erlaubt es uns, jedes Projekt mit der geballten Erfahrung aus hunderten erfolgreichen Ausbauten anzugehen.
                </p>
                <p>
                  Heute arbeiten wir mit einem festen Stamm aus erfahrenen Meistern und Gesellen, die jeden Tag dafür sorgen, dass Münchner Familien mehr Platz bekommen – ohne den Stadtteil verlassen zu müssen.
                </p>
              </div>
            </div>
            <div className="bg-surface rounded-xl p-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">
                Unsere Werte
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Qualität</h4>
                    <p className="text-text-secondary text-sm">Wir verwenden nur hochwertige Materialien und arbeiten nach höchsten Standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Pünktlichkeit</h4>
                    <p className="text-text-secondary text-sm">Wir halten, was wir versprechen – beim Zeitplan und beim Budget.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Transparenz</h4>
                    <p className="text-text-secondary text-sm">Keine versteckten Kosten. Jede Position wird klar im Angebot erklärt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-section bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Unser Team
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Ein eingespieltes Team aus Meistern und Gesellen – alle mit langjähriger Erfahrung im Dachgeschossausbau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center border border-border">
              <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-1">Meisterbetrieb</h3>
              <p className="text-amber-500 font-medium text-sm mb-3">Inhaber & Geschäftsführung</p>
              <p className="text-text-secondary text-sm">
                20+ Jahre Erfahrung im Dachgeschossausbau. Verantwortlich für Planung und Beratung.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center border border-border">
              <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-1">Karsten</h3>
              <p className="text-amber-500 font-medium text-sm mb-3">Obermonteur</p>
              <p className="text-text-secondary text-sm">
                15 Jahre Erfahrung. Führt die Ausführung auf der Baustelle und ist Ihr Ansprechpartner vor Ort.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center border border-border">
              <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-1">Andreas</h3>
              <p className="text-amber-500 font-medium text-sm mb-3">Zimmerermeister</p>
              <p className="text-text-secondary text-sm">
                Spezialisiert auf Gauben und Dachkonstruktionen. Sorgt für die handwerkliche Exzellenz jedes Projekts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-section bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Qualifikationen & Mitgliedschaften
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Handwerkskammer</h3>
              <p className="text-text-secondary text-sm">
                Mitglied der Handwerkskammer München. Reguläre Qualitätsprüfungen und Betriebsprüfungen.
              </p>
            </div>

            <div className="bg-surface rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">20+ Jahre Erfahrung</h3>
              <p className="text-text-secondary text-sm">
                Seit über zwei Jahrzehnten im Dachgeschossausbau tätig. Hunderte erfolgreiche Projekte.
              </p>
            </div>

            <div className="bg-surface rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Lokale Expertise</h3>
              <p className="text-text-secondary text-sm">
                Wir kennen die Münchner Stadtteile, die Vorschriften und die lokalen Behörden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-section bg-slate-800 text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Warum Uns wählen?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Unsere Spezialisierung auf Dachgeschossausbauten macht uns zum idealen Partner für Ihr Projekt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-700 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Fokus auf Dachgeschossausbau</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Wir sind kein Generalist, der alles macht. Unser ganzes Know-how konzentriert sich auf den Dachgeschossausbau – das ist unsere Spezialisierung.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Festpreisgarantie</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Bei uns wissen Sie von Anfang an, was Ihr Projekt kostet. Wir arbeiten mit Festpreisen oder klar definierten Kostenobergrenzen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Fester Ansprechpartner</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Sie haben einen direkten Draht zu uns – von der ersten Beratung bis zur Abnahme. Keine Callcenter, keine endlose Warteschleifen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Genehmigungs know-how</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Wir kennen die aktuellen Vorschriften der BayBO 2025 und wissen, welche Projekte verfahrensfrei sind und welche nicht.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Das sagen unsere Kunden
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-border"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-text-primary text-lg mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-slate-600 font-medium">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">{testimonial.name}</p>
                    <p className="text-text-secondary text-sm">{testimonial.project} • {testimonial.location}</p>
                  </div>
                </div>
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