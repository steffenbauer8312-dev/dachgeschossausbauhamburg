import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/sections/Hero'
import { TrustBar } from '../components/sections/TrustBar'
import { ServicesOverview } from '../components/sections/ServicesOverview'
import { ProcessSteps } from '../components/sections/ProcessSteps'
import { CostBreakdown } from '../components/sections/CostBreakdown'
import { CtABlock } from '../components/sections/CtABlock'
import { TESTIMONIALS } from '../data/testimonials'
import { generateLocalBusinessSchema } from '../lib/schema'

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <>
      <Helmet>
        <title>Dachgeschossausbau München | Ihr Partner für professionellen Dachgeschossausbau</title>
        <meta
          name="description"
          content="Professioneller Dachgeschossausbau in München. Wir verwandeln ungenutzte Dachböden in wertvolle Wohnräume – transparent, termingerecht und zu fairen Preisen."
        />
        <meta name="keywords" content="Dachgeschossausbau München, Dachboden ausbauen, Wohnraum schaffen, Dachgaube, Dachdämmung" />
        <link rel="canonical" href="https://dachgeschossausbaumuenchen.de/" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <main>
        <Hero />
        <TrustBar />
        <ServicesOverview />
        <ProcessSteps />
        <CostBreakdown />

        {/* Testimonials Section */}
        <section className="py-section bg-bg">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Das sagen unsere Kunden
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Wir sind stolz auf das Vertrauen, das unsere Kunden in uns setzen.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-surface rounded-xl p-8 shadow-sm border border-border"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">{testimonial.name}</p>
                      <p className="text-sm text-text-secondary">{testimonial.location}</p>
                    </div>
                  </div>
                  <blockquote className="text-text-secondary italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-sm text-primary font-medium">{testimonial.project}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtABlock />
      </main>
    </>
  )
}