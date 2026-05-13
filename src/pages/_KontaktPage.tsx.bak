import { Helmet } from 'react-helmet-async'
import { LeadForm } from '../components/forms/LeadForm'
import { CtABlock } from '../components/sections/CtABlock'
import { generateLocalBusinessSchema } from '../lib/schema'

export default function KontaktPage() {
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <>
      <Helmet>
        <title>Kontakt | Dachgeschossausbau München</title>
        <meta
          name="description"
          content="Kontaktieren Sie uns für eine kostenlose Beratung zum Dachgeschossausbau in München. Wir freuen uns auf Ihre Anfrage."
        />
        <meta name="keywords" content="Kontakt Dachgeschossausbau München, Beratung Dachgeschoss, Angebot Dachausbau" />
        <link rel="canonical" href="https://dachgeschossausbaumuenchen.de/kontakt" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 lg:py-24">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Kontakt
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
                Sie haben Fragen oder möchten ein unverbindliches Angebot?
                Kontaktieren Sie uns – wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-section bg-bg">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-8">
                  So erreichen Sie uns
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">Adresse</h3>
                      <p className="text-text-secondary">
                        [Ihre Straße] 80XXX<br />
                        München
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">Telefon</h3>
                      <p className="text-text-secondary">
                        +49-89-XXXXXXXX
                      </p>
                      <p className="text-sm text-text-secondary mt-1">
                        Mo–Fr 8:00–18:00 Uhr
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">E-Mail</h3>
                      <p className="text-text-secondary">
                        info@dachgeschossausbaumuenchen.de
                      </p>
                      <p className="text-sm text-text-secondary mt-1">
                        Antwort innerhalb von 24 Stunden
                      </p>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-2">Öffnungszeiten</h3>
                      <div className="text-text-secondary text-sm space-y-1">
                        <p className="flex justify-between">
                          <span>Montag – Freitag:</span>
                          <span className="font-medium">08:00 – 18:00 Uhr</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Samstag:</span>
                          <span className="font-medium">Nach Vereinbarung</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Sonntag:</span>
                          <span className="font-medium">Geschlossen</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-10">
                  <h3 className="font-semibold text-text-primary mb-4">Standort</h3>
                  <div className="bg-slate-100 rounded-xl aspect-video flex items-center justify-center">
                    <div className="text-center text-text-secondary">
                      <svg className="w-12 h-12 mx-auto mb-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-sm">München & Umgebung</p>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
                  <h3 className="font-semibold text-text-primary mb-2">Unser Servicegebiet</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Wir sind in ganz München und im Umland für Sie im Einsatz.
                    Dazu gehören alle Stadtbezirke sowie umliegende Gemeinden im Radius von ca. 30 km.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-8">
                  Schreiben Sie uns
                </h2>
                <div className="bg-surface rounded-xl p-8 shadow-sm border border-border">
                  <LeadForm showMessage={true} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fallback CTA */}
        <CtABlock />
      </main>
    </>
  )
}