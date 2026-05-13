import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { CtABlock } from '../components/sections/CtABlock'
import { FAQ_DATA } from '../data/faqData'
import { generateFaqSchema } from '../lib/schema'

type Category = 'Alle' | 'Kosten' | 'Zeit' | 'Genehmigung' | 'Technik' | 'Wirtschaftlichkeit' | 'Prozess' | 'Allgemein'

const CATEGORIES: Category[] = ['Alle', 'Kosten', 'Zeit', 'Genehmigung', 'Technik', 'Wirtschaftlichkeit', 'Prozess', 'Allgemein']

const CATEGORY_COLORS: Record<Category, string> = {
  'Alle': 'bg-slate-600 text-white',
  'Kosten': 'bg-amber-500 text-white',
  'Zeit': 'bg-blue-500 text-white',
  'Genehmigung': 'bg-green-500 text-white',
  'Technik': 'bg-purple-500 text-white',
  'Wirtschaftlichkeit': 'bg-emerald-500 text-white',
  'Prozess': 'bg-cyan-500 text-white',
  'Allgemein': 'bg-slate-500 text-white',
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Alle')
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqSchema = generateFaqSchema(
    FAQ_DATA.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  )

  const filteredFaqs = activeCategory === 'Alle'
    ? FAQ_DATA
    : FAQ_DATA.filter(faq => faq.category === activeCategory)

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <>
      <Helmet>
        <title>Häufige Fragen zum Dachgeschossausbau in München | Dachgeschossausbau München</title>
        <meta name="description" content="16 häufige Fragen zum Dachgeschossausbau beantwortet: Kosten, Genehmigung, Zeitrahmen, Förderungen, Technik. Alles, was Sie vor dem Ausbau wissen müssen." />
        <link rel="canonical" href="https://dachgeschossausbaumuenchen.de/faq" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium mb-4">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Häufige Fragen zum Dachgeschossausbau
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Die wichtigsten Fragen, die uns Kunden vor einem Dachgeschossausbau stellen – mit detaillierten Antworten zu Kosten, Genehmigung, Technik und mehr.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b border-border sticky top-0 z-10">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setExpandedIndex(null)
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? CATEGORY_COLORS[category]
                    : 'bg-slate-100 text-text-secondary hover:bg-slate-200'
                }`}
              >
                {category}
                {category !== 'Alle' && (
                  <span className="ml-2 text-xs opacity-75">
                    ({FAQ_DATA.filter(f => f.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-section bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-text-secondary mb-8">
              {activeCategory === 'Alle'
                ? `${FAQ_DATA.length} Fragen beantwortet`
                : `${filteredFaqs.length} Fragen in "${activeCategory}"`}
            </p>

            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const globalIndex = FAQ_DATA.indexOf(faq)
                const isExpanded = expandedIndex === globalIndex

                return (
                  <div
                    key={globalIndex}
                    className="bg-white rounded-xl border border-border overflow-hidden"
                  >
                    <button
                      onClick={() => handleToggle(globalIndex)}
                      className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${CATEGORY_COLORS[faq.category as Category] || 'bg-slate-500 text-white'}`}>
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-text-primary text-lg leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isExpanded ? 'bg-amber-500 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-border pt-4">
                          <p className="text-text-secondary leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* No questions message */}
      {filteredFaqs.length === 0 && (
        <section className="py-section bg-surface">
          <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-text-secondary">
                Keine Fragen in dieser Kategorie vorhanden.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-section bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Haben Sie weitere Fragen?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-6 leading-relaxed">
              Ihre Frage wurde nicht beantwortet? Kontaktieren Sie uns direkt – wir freuen uns, Ihnen bei Ihrem Projekt weiterzuhelfen.
            </p>
            <p className="text-amber-500 font-medium">
              Wir antworten innerhalb von 24 Stunden.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <CtABlock />
    </>
  )
}